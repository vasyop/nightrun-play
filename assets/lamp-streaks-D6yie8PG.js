import{C as u,aB as m,aA as h,s as x,i as y,a7 as w,M as p,aC as b,a0 as M}from"./vendor-three-H-QLrRer.js";import{ae as S,af as A,ag as L,ah as R,ai as _,aj as F,ak as T,a8 as k}from"./index-BDRoSCZB.js";const z=6007199,B=8314834,O=`
attribute vec4 aSrc;    // ground xyz, width
attribute vec4 aBright; // rgb, seed
attribute vec3 aMid;
uniform float uK;
uniform float uMinLen;
uniform float uMaxLen;
uniform float uMaxDist;
uniform float uLift;
varying vec2 vQ;      // x across (-1..1), y along (0 = light end, 1 = camera end)
varying vec3 vWorld;
varying vec3 vBright;
varying vec3 vMid;
varying float vSeed;
varying float vFade;
varying float vLen;
${F}
void main() {
  vec3 src = aSrc.xyz;
  vec2 toCam = cameraPosition.xz - src.xz;
  float d = length(toCam);
  // Out of range (or the camera standing on it): collapse outside the clip volume.
  float fade = (1.0 - smoothstep(uMaxDist * 0.7, uMaxDist, d)) * smoothstep(2.0, 6.0, d);
  if (fade <= 0.001) { gl_Position = vec4(2.0, 2.0, 2.0, 1.0); return; }
  vec2 dir = toCam / d;
  vec2 side = vec2(-dir.y, dir.x);
  // Grazing angle of the view ray at the light's ground point: shallow -> long smear.
  float h = max(cameraPosition.y - src.y, 0.25);
  float graze = atan(h, d);
  float len = clamp(uK / max(graze, 1e-3), uMinLen, uMaxLen);
  len = min(len, max(d - 1.5, 0.5)); // never reach (or pass) the camera
  float t = position.y;
  // Slight flare toward the viewer: glare spreads as the micro-facets that catch it get rarer.
  float w = aSrc.w * (1.0 + 0.2 * max(t, 0.0));
  vec2 xz = src.xz + dir * (t * len) + side * (position.x * 0.5 * w);
  vec3 wp = vec3(xz.x, src.y + uLift, xz.y);
  vec4 mvPosition = viewMatrix * vec4(wp, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  vQ = vec2(position.x, t);
  vWorld = wp;
  vBright = aBright.rgb;
  vMid = aMid;
  vSeed = aBright.w;
  vFade = fade;
  vLen = len;
  ${T}
}`,D=`
uniform float uIntensity;
uniform float uTime;
#ifdef NR_ROAD
${L}
#else
uniform sampler2D tNrMacro;
#endif
varying vec2 vQ;
varying vec3 vWorld;
varying vec3 vBright;
varying vec3 vMid;
varying float vSeed;
varying float vFade;
varying float vLen;
${R}
void main() {
  float t = vQ.y;
  // Soft round start just behind the ground point, a long even body, then a fade before the camera
  // end so streaks never end in a hard edge under the car.
  float along = smoothstep(-0.07, 0.04, t) * (1.0 - smoothstep(0.45, 1.0, t)) * mix(1.0, 0.6, t);
  float across = exp(-vQ.x * vQ.x * 4.0);
  // Hot core near the light end narrows the profile there.
  across *= mix(1.0, exp(-vQ.x * vQ.x * 5.0), 1.0 - smoothstep(0.0, 0.3, t));
  vec3 col = mix(vBright, vMid, smoothstep(0.05, 0.6, t));
  // Pre-saturate: the filmic tonemap pulls bright additive light toward white, and the signature
  // is the teal, not a grey smear (cyan hues are protected by the grade, so this survives).
  col = max(mix(vec3(dot(col, vec3(0.2126, 0.7152, 0.0722))), col, 1.7), 0.0);
  float k = along * across;
#ifdef NR_ROAD
  vec2 wm = nrRoadWet(vWorld.xz);
  // Wet film carries a dimmer smear; puddles (soft mask) carry the bright, clean part.
  float mask = wm.y * (0.45 + 0.55 * wm.x) + wm.x * 0.3;
  // Aggregate breakup: the glare is made of many tiny glints, so it is never a clean gradient.
  float g = texture2D(tNrMacro, vWorld.xz * (1.0 / 1.9) + vSeed).r;
  float g2 = texture2D(tNrMacro, vWorld.xz * (1.0 / 0.7) + vSeed * 3.1).g;
  k *= mask * (0.55 + 0.8 * g) * (0.8 + 0.4 * g2);
#else
  // Water: ripples chop the reflection into bands across the streak that crawl toward the viewer.
  vec2 wv = vWorld.xz;
  float b = texture2D(tNrMacro, vec2(wv.x * 0.031 + vSeed, wv.y * 0.031) + vec2(0.0, uTime * 0.004)).r;
  float band = sin(t * vLen * 1.6 + b * 9.0 - uTime * 1.3) * 0.5 + 0.5;
  float band2 = sin(t * vLen * 0.55 + b * 5.0 + uTime * 0.7 + vSeed * 6.0) * 0.5 + 0.5;
  k *= mix(0.25, 1.0, band * band2) * (0.6 + 0.8 * b);
  k *= 1.0 - 0.5 * abs(vQ.x);
#endif
  k *= vFade * uIntensity * (1.0 - fxFogFactor());
  gl_FragColor = vec4(col * k, 1.0);
  ${_}
}`;function W(o){const s=new b,e=[],r=[];for(let t=0;t<=o;t++){const l=t/o,c=-.07+1.07*l*l*.5+1.07*l*.5;if(e.push(-1,c,0,1,c,0),t<o){const i=t*2;r.push(i,i+1,i+2,i+1,i+3,i+2)}}return s.setAttribute("position",new M(e,3)),s.setIndex(r),s}class G{mesh;material;count;constructor(s,e){const r=s.length;this.count=r;const t=W(10),l=new Float32Array(Math.max(1,r)*4),c=new Float32Array(Math.max(1,r)*4),i=new Float32Array(Math.max(1,r)*3);s.forEach((a,d)=>{l.set([a.ground.x,a.ground.y,a.ground.z,a.width],d*4),c.set([a.bright.r,a.bright.g,a.bright.b,d*.6180339%1*7],d*4),i.set([a.mid.r,a.mid.g,a.mid.b],d*3)}),t.setAttribute("aSrc",new m(l,4)),t.setAttribute("aBright",new m(c,4)),t.setAttribute("aMid",new m(i,3)),t.instanceCount=r;const f=e.mode==="road",v={...h.clone(x.fog),uK:{value:e.k??.8},uMinLen:{value:e.minLength??2.5},uMaxLen:{value:e.maxLength??20},uMaxDist:{value:e.maxDistance??120},uLift:{value:e.lift??.025},uIntensity:{value:e.intensity??2.2},uTime:{value:0}};f&&e.wetMaterial?Object.assign(v,S(e.wetMaterial)):v.tNrMacro={value:A("macro")},this.material=new y({name:`lampStreaks:${e.mode}`,vertexShader:O,fragmentShader:D,uniforms:v,defines:f?{NR_ROAD:1}:{},transparent:!0,depthWrite:!1,blending:w,fog:!0,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4});const n=new p(t,this.material);n.name=e.name??`lampStreaks:${e.mode}`,n.frustumCulled=!1,n.renderOrder=3,n.visible=r>0,n.layers.enable(k);const g=this.material.uniforms;n.onBeforeRender=()=>{g.uTime.value=performance.now()/1e3},this.mesh=n}}function P(o=1){return{bright:new u(B).multiplyScalar(o),mid:new u(z).multiplyScalar(o)}}export{G as L,P as t};
