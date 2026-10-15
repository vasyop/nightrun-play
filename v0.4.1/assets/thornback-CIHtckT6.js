import{$ as ze,a8 as An,a9 as Rn,aa as Ke,a5 as Tn,a6 as Cn,a7 as Xe,R as qe,Y as Ge,ab as Pn,ac as Ze}from"./index-Vziu8YF7.js";import{C as _n,S as Fn}from"./track-base-D9AG7aLB.js";import{V as At,G as C,t as _t,aO as En,y as Bn,af as gt,q as In,o as Ot,a0 as dt,ah as Ln,ai as Wn,M as Rt,H as it,as as Ce,z as Dn,v as pe,i as ue,a7 as Ae,C as et,a6 as yt,aL as vn,a4 as bt,a5 as pt,a3 as de,S as fe,ax as Nn,ay as Hn,h as me,j as Gn,aN as Oe,a2 as Te,aK as On,aP as bn,p as Fe,au as Un,aB as Qe,ar as jn,aq as $n}from"./vendor-three-BRrYN9h0.js";import"./vendor-post-DFJYAJ9P.js";const ct=(o,t,e={})=>({kind:"straight",len:o,r:0,deg:0,grade:t,...e}),Ct=(o,t,e,n={})=>({kind:"arc",len:0,r:o,deg:Math.abs(t),grade:e,...n}),Mt=(o,t,e,n={})=>({kind:"arc",len:0,r:o,deg:-Math.abs(t),grade:e,...n}),Ee=Math.PI,Vn=268,Yn=70,ae=[ct(400,-4,{tag:"start",up:1,wall:3,drop:70,rail:"open"}),Mt(140,30,-6,{rail:"solid",drop:90}),ct(70,-7,{up:1}),Ct(105,42,-7,{rail:"solid",wall:9}),ct(55,-7),Ct(115,40,-7.5,{rail:"solid",wall:10}),ct(230,-4.5,{tag:"balcony",up:1,wall:12,drop:240,rail:"open"}),Mt(58,72,-7,{rail:"breakable",drop:200}),ct(85,-8,{up:1}),Ct(95,32,-8,{rail:"solid",wall:10}),ct(175,-8.5,{up:1,drop:160,rail:"solid"}),Mt(62,98,-7,{rail:"solid",drop:150}),ct(112,-8.8,{up:1,drop:18,rail:"solid"}),Ct(34,180,-5,{tag:"hairpin",rail:"breakable",drop:26,open:!0}),ct(112,-8.8,{up:-1,drop:18,rail:"solid",wall:2.5,slope:.22}),Mt(33,180,-5,{tag:"hairpin",rail:"solid",drop:26,open:!0}),ct(112,-8.8,{up:1,drop:18,rail:"solid",wall:2.5,slope:.22}),Ct(34,180,-5,{tag:"hairpin",rail:"solid",drop:30,open:!0}),ct(112,-8.8,{up:-1,drop:90,rail:"solid",wall:2.5,slope:.22}),Mt(35,180,-5,{tag:"hairpin",rail:"solid",drop:120}),ct(95,-6.5,{up:1,drop:180,rail:"solid"}),Mt(115,32,-6,{rail:"solid"}),ct(55,-6,{up:1,wall:14,both:!0}),Ct(330,34,-4,{tag:"tunnel",up:1,wall:16,both:!0}),ct(40,-4,{up:1,wall:14,both:!0}),Mt(80,56,-7,{rail:"breakable",drop:170}),Ct(105,58,-6,{rail:"solid",wall:8}),ct(45,-5,{up:1}),ct(200,-2,{tag:"bridge",up:1}),ct(30,-5,{up:1,drop:80,rail:"solid"}),ct(70,2.5,{tag:"crest",up:1,rail:"open"}),ct(170,-8.8,{up:1,rail:"open"}),Mt(70,52,-8,{rail:"breakable",drop:140}),Ct(56,72,-8,{rail:"solid",wall:10}),ct(175,-8.5,{up:1,drop:100,rail:"solid"}),Ct(24,165,-5,{tag:"hairpin",rail:"breakable",drop:70}),ct(95,-8.8,{up:-1,drop:30,rail:"solid"}),Mt(33,168,-5,{tag:"hairpin",rail:"solid",drop:90}),ct(70,-7,{up:1,drop:90,rail:"solid"}),Mt(135,45,-5,{rail:"solid",drop:60}),ct(60,-3,{tag:"bottom",up:1,drop:50,rail:"open"}),Mt(160,50,-5,{tag:"bottom",rail:"open",drop:40})],we=[Mt(260,70,"auto",{tag:"return",rail:"open",wall:3,drop:45}),ct(250,"auto",{tag:"return",up:1,rail:"open",wall:3,drop:45}),Ct(300,22,"auto",{tag:"return",rail:"open",wall:3,drop:50}),ct(480,"auto",{tag:"return",up:1,rail:"open",wall:3,drop:50}),Mt(300,24,"auto",{tag:"return",rail:"open",wall:4,drop:50}),ct(250,"auto",{tag:"return",up:1,rail:"open",wall:3,drop:50}),Ct(320,29,"auto",{tag:"return",rail:"open",wall:3,drop:50})],Je=165,Bt={tunnel:1,bridge:2,hairpin:4,balcony:8,ret:16,start:32,crest:64},le=2,qn=7.2,Kn=8.8,tn=[];function en(o){return new At(-Math.sin(o),-Math.cos(o))}function Re(o,t,e,n,s){const a=t.clone();let r=e;return o.forEach((c,i)=>{const l=c.kind==="straight"?c.len:Math.abs(c.deg)*Math.PI/180*c.r,h=Math.max(1,Math.round(l/le)),u=l/h,x=c.kind==="arc"?Math.sign(c.deg)*u/c.r:0;for(let w=0;w<h;w++){const m=r+x/2;a.x+=-Math.sin(m)*u,a.y+=-Math.cos(m)*u,r+=x,s.pts.push(a.clone()),s.seg.push(n+i)}s.ends?.push(a.x,a.y,r*180/Math.PI)}),s.yaw=r,{p:a,yaw:r}}function Xn(o,t,e,n){return Re([{kind:"arc",len:0,r:e,deg:n,grade:0}],o,t,0,{pts:[],seg:[],yaw:0}).p}function Zn(o){return o.kind==="straight"?o.len:Math.abs(o.deg)*Math.PI/180*o.r}function It(o,t,e=1){const n=o.length,s=new Float32Array(n);for(let a=0;a<e;a++){let r=0;for(let c=-t;c<=t;c++)r+=o[(c%n+n)%n];for(let c=0;c<n;c++)s[c]=r/(2*t+1),r+=o[(c+t+1)%n]-o[((c-t)%n+n)%n];o.set(s)}}function Qn(){const o={pts:[new At(0,0)],seg:[0],yaw:Ee,ends:tn};tn.length=0;let t=Re(ae,new At(0,0),Ee,0,o);const e=o.pts.length;t=Re(we,t.p,t.yaw,ae.length,o);const s=-360-[...ae,...we].reduce((p,D)=>p+(D.kind==="arc"?D.deg:0),0),a=Ee,r=Xn(new At(0,0),t.yaw,Je,s),c=new At(0,0).sub(t.p).sub(r),i=en(t.yaw),l=en(a),h=i.x*l.y-i.y*l.x,u=(c.x*l.y-c.y*l.x)/h,x=(i.x*c.y-i.y*c.x)/h,w=[ct(Math.max(.5,u),"auto",{tag:"return",up:1,rail:"open",wall:3,drop:45}),{kind:"arc",len:0,r:Je,deg:s,grade:"auto",tag:"return",rail:"open",wall:3,drop:45},ct(Math.max(.5,x),"auto",{tag:"return",up:1,rail:"open",wall:4,drop:50})];Re(w,t.p,t.yaw,ae.length+we.length,o);const m=[...ae,...we,...w];o.pts.pop(),o.seg.pop();const f=o.pts.length,S=new Float32Array(f),v=new Uint8Array(f);let N=0,E=0;for(let p=0;p<f;p++){const D=m[o.seg[p]];D.grade==="auto"?(v[p]=1,E+=le):(S[p]=D.grade/100,N+=S[p]*le)}const z=-N/E;for(let p=0;p<f;p++)v[p]&&(S[p]=z);const A=new Float32Array(S);It(A,9,2);let $=0;for(let p=0;p<f;p++)$+=A[p];let R=0;for(let p=0;p<f;p++)R+=v[p];for(let p=0;p<f;p++)v[p]&&(A[p]-=$/R);const O=new Float32Array(f);O[0]=Vn;for(let p=1;p<f;p++)O[p]=O[p-1]+(A[p-1]+A[p])*.5*le;const H=o.pts.map((p,D)=>new C(p.x,O[D],p.y)),W=new _n(H,"centripetal",.5),M=W.length,I=Math.ceil(M)+1,j=new Float64Array(f+1);for(let p=0;p<f;p++)j[p+1]=j[p]+H[p].distanceTo(H[(p+1)%f]);const T=p=>j[p]/j[f]*M,B=new Float64Array(m.length).fill(-1),g=new Float64Array(m.length);for(let p=0;p<f;p++){const D=o.seg[p],G=T(p);B[D]<0&&(B[D]=Math.max(0,G-le)),g[D]=G}const y=[],k=[];m.forEach((p,D)=>{if(!(B[D]<0)){if(p.tag&&p.tag!=="return"){const G=y[y.length-1];G&&G.tag===p.tag&&Math.abs(G.s1-B[D])<4?G.s1=g[D]:y.push({tag:p.tag,s0:B[D],s1:g[D]})}p.kind==="arc"&&p.r<=160&&Zn(p)>25&&k.push({s0:B[D],s1:g[D],radius:p.r,dir:p.deg<0?1:-1,rail:p.rail??"solid",hairpin:p.r<=36})}});const L=T(e-1),P=new Float32Array(I),b=new Float32Array(I),_=new Float32Array(I),Y=new Float32Array(I),X=new Float32Array(I),q=new Float32Array(I),Z=new Float32Array(I),K=new Uint8Array(I),Q=new Float32Array(I),ot=new Float32Array(I),at=new Float32Array(I),F=new Int16Array(I);{let p=0;for(let D=0;D<I;D++){for(;p<m.length-1&&(B[p+1]>=0?B[p+1]:1/0)<=D;)p++;F[D]=p}}for(let p=0;p<I;p++){const D=Math.min(p,M-.01);Z[p]=W.curvatureAt(D,3);const G=m[F[p]];_[p]=G.up??(G.kind==="arc"?G.deg<0?1:-1:1),Y[p]=G.wall??(G.kind==="arc"&&G.r<40?4:7),X[p]=G.drop??80,Q[p]=G.both?1:G.open?-.75:0,ot[p]=G.tag==="return"||G.tag==="bottom"?1:0,at[p]=G.slope??.58;const ft=G.tag;let vt=0;ft==="tunnel"&&(vt|=Bt.tunnel),ft==="bridge"&&(vt|=Bt.bridge),ft==="hairpin"&&(vt|=Bt.hairpin),ft==="balcony"&&(vt|=Bt.balcony),ft==="return"&&(vt|=Bt.ret),ft==="start"&&(vt|=Bt.start),ft==="crest"&&(vt|=Bt.crest),K[p]=vt,b[p]=ft==="hairpin"?Kn:qn}It(b,12,2);for(let p=0;p<I;p++)P[p]=-_t.clamp(Z[p]*5.5,-.06,.06);for(let p=0;p<I;p++)K[p]&(Bt.bridge|Bt.tunnel)&&(P[p]*=.3);It(P,15,2),It(_,10,2),It(Y,20,1),It(X,30,1),It(Q,10,2),It(ot,40,2),It(at,12,2);for(let p=0;p<I;p++){const D=W.sampleAt(Math.min(p,M-.01)-2).y,G=W.sampleAt(Math.min(p,M-.01)+2).y;q[p]=(G-D)/4}const U=[];for(const p of k){if(p.rail==="open")continue;const D=p.dir===1?-1:1,G=p.rail==="breakable"?30:18;U.push({s0:p.s0-G,s1:p.s1+14,side:D,rule:p.rail})}m.forEach((p,D)=>{if(p.kind!=="straight"||B[D]<0||p.rail!=="solid")return;const G=-(p.up??1);U.push({s0:B[D],s1:g[D],side:G,rule:"solid"})});const lt=Jn(U);return{spline:W,length:M,startS:Yn,descentEndS:L,features:y,corners:k,rails:lt,bank:P,halfWidth:b,up:_,wall:Y,drop:X,grade:q,curvature:Z,flags:K,cut:Q,soft:ot,slope:at,closing:{a:u,b:x,deg:s}}}function Jn(o){const t=[];for(const e of[-1,1]){const n=o.filter(r=>r.side===e&&r.rule==="breakable").sort((r,c)=>r.s0-c.s0);let s=o.filter(r=>r.side===e&&r.rule==="solid").sort((r,c)=>r.s0-c.s0);for(const r of n){const c=[];for(const i of s){if(i.s1<r.s0-12||i.s0>r.s1+12){c.push(i);continue}i.s0<r.s0-12&&c.push({...i,s1:r.s0-12}),i.s1>r.s1+12&&c.push({...i,s0:r.s1+12})}s=c}const a=[];for(const r of s.sort((c,i)=>c.s0-i.s0)){const c=a[a.length-1];c&&r.s0<=c.s1+20?c.s1=Math.max(c.s1,r.s1):a.push({...r})}t.push(...a.filter(r=>r.s1-r.s0>16),...n)}return t.sort((e,n)=>e.s0-n.s0)}function wt(o,t,e){const n=(t%e+e)%e,s=Math.floor(n),a=n-s,r=o[Math.min(s,o.length-1)],c=o[Math.min(s+1,o.length-1)];return r+(c-r)*a}const ut=1.2,ge=1.6,to=4,Be=150,Xt=40,ee=new C(2915,-300,1455);function ve(o,t){let e=Math.imul(o|0,668265261)^Math.imul(t|0,374761393);return e=Math.imul(e^e>>>15,2246822507),e^=e>>>13,(e>>>0)/4294967296*2-1}function eo(o,t){const e=Math.floor(o),n=Math.floor(t),s=o-e,a=t-n,r=s*s*(3-2*s),c=a*a*(3-2*a),i=ve(e,n),l=ve(e+1,n),h=ve(e,n+1),u=ve(e+1,n+1);return i+(l-i)*r+(h-i)*c+(i-l-h+u)*r*c}function xt(o,t,e){let n=0,s=.5,a=1;for(let r=0;r<e;r++)n+=eo(o*a,t*a)*s,a*=2.03,s*=.5;return n}const Tt=(o,t,e)=>{const n=Math.min(1,Math.max(0,(e-o)/(t-o)));return n*n*(3-2*n)};class no{constructor(t){this.layout=t;const e=t.spline,n=t.length;this.n=Math.ceil(n/to);const s=this.n;this.px=new Float32Array(s),this.pz=new Float32Array(s),this.py=new Float32Array(s),this.tx=new Float32Array(s),this.tz=new Float32Array(s),this.ps=new Float32Array(s);const a=new C,r=new C;this.bounds=new En;for(let u=0;u<s;u++){const x=u/s*n;e.sampleAt(x,a),e.tangentAt(x,r);const w=Math.hypot(r.x,r.z)||1;this.px[u]=a.x,this.pz[u]=a.z,this.py[u]=a.y,this.tx[u]=r.x/w,this.tz[u]=r.z/w,this.ps[u]=x,this.bounds.expandByPoint(new At(a.x,a.z));const m=this.key(Math.floor(a.x/Xt),Math.floor(a.z/Xt));let f=this.cells.get(m);f||this.cells.set(m,f=[]),f.push(u)}const i=Math.ceil(n/24);this.poly=new Float32Array(i*2);for(let u=0;u<i;u++)e.sampleAt(u/i*n,a),this.poly[u*2]=a.x,this.poly[u*2+1]=a.z;const l=t.features.find(u=>u.tag==="tunnel"),h=t.features.find(u=>u.tag==="bridge");if(this.tunnel=l?[l.s0,l.s1]:[-1,-1],this.bridge=h?[h.s0,h.s1]:[-1,-1],h){const u=(h.s0+h.s1)/2,x=t.spline.sampleAt(u,new C),w=t.spline.tangentAt(u,new C),m=Math.hypot(w.x,w.z)||1,f=-Math.sign(wt(t.up,u,n)||1);this.rav={cx:x.x,cz:x.z,tx:w.x/m,tz:w.z/m,y:x.y,half:(h.s1-h.s0)/2+6,down:f}}this.buildBase()}layout;n;px;pz;py;tx;tz;ps;cells=new Map;poly;baseX0=0;baseZ0=0;baseStep=24;baseW=0;baseH=0;base;bounds;tunnel;bridge;key(t,e){return(t+4096)*8192+(e+4096)}inside(t,e){const n=this.poly,s=n.length/2;let a=!1;for(let r=0,c=s-1;r<s;c=r++){const i=n[r*2],l=n[r*2+1],h=n[c*2],u=n[c*2+1];l>e!=u>e&&t<(h-i)*(e-l)/(u-l)+i&&(a=!a)}return a}floor(t,e){const n=Math.hypot(t-ee.x,e-ee.z);return ee.y-20+300*Tt(600,3200,n)+25*xt(t/700,e/700,3)}buildBase(){const t=this.bounds,e=1700;this.baseX0=t.min.x-e,this.baseZ0=t.min.y-e,this.baseW=Math.ceil((t.max.x-t.min.x+2*e)/this.baseStep)+1,this.baseH=Math.ceil((t.max.y-t.min.y+2*e)/this.baseStep)+1,this.base=new Float32Array(this.baseW*this.baseH);const n=this.poly,s=n.length/2,a=new Float32Array(s),r=new C;for(let c=0;c<s;c++)a[c]=this.layout.spline.sampleAt(c/s*this.layout.length,r).y;for(let c=0;c<this.baseH;c++)for(let i=0;i<this.baseW;i++){const l=this.baseX0+i*this.baseStep,h=this.baseZ0+c*this.baseStep;let u=0,x=0,w=1/0;for(let S=0;S<s;S++){const v=n[S*2]-l,N=n[S*2+1]-h,E=v*v+N*N;E<w&&(w=E);const z=1/(E+400);u+=z,x+=a[S]*z}w=Math.sqrt(w);const m=x/u;let f;if(this.inside(l,h))f=m+70*(1-Math.exp(-w/140))+.16*w,f+=28*xt(l/260,h/260,4)*Tt(40,200,w);else{const S=300*(1-Math.exp(-w/170))+.22*w,v=1-Math.abs(xt(l/520,h/520,4))*2;f=Math.max(this.floor(l,h),m-S+60*v*Tt(150,700,w)),f+=18*xt(l/180+7,h/180,3)}this.base[c*this.baseW+i]=f}}baseAt(t,e){const n=(t-this.baseX0)/this.baseStep,s=(e-this.baseZ0)/this.baseStep,a=Math.max(1,Math.min(this.baseW-3,Math.floor(n))),r=Math.max(1,Math.min(this.baseH-3,Math.floor(s))),c=Math.min(1,Math.max(0,n-a)),i=Math.min(1,Math.max(0,s-r)),l=this.base,h=this.baseW,u=(w,m,f,S,v)=>m+.5*v*(f-w+v*(2*w-5*m+4*f-S+v*(3*(m-f)+S-w))),x=w=>{const m=w*h+a;return u(l[m-1],l[m],l[m+1],l[m+2],c)};return u(x(r-1),x(r),x(r+1),x(r+2),i)}passBuf=[];cand=[];candD=[];passes(t,e,n=Be){const s=this.passBuf;s.length=0;const a=this.cand,r=this.candD;a.length=0,r.length=0;const c=n+34,i=c*c,l=Math.floor((t-c)/Xt),h=Math.floor((t+c)/Xt),u=Math.floor((e-c)/Xt),x=Math.floor((e+c)/Xt);for(let S=l;S<=h;S++)for(let v=u;v<=x;v++){const N=this.cells.get(this.key(S,v));if(N)for(const E of N){const z=this.px[E]-t,A=this.pz[E]-e,$=z*z+A*A;$<i&&(a.push(E),r.push($))}}if(!a.length)return s;const w=this.n,m=new Map;for(let S=0;S<a.length;S++)m.set(a[S],r[S]);const f=this.layout.length;for(let S=0;S<a.length;S++){const v=a[S],N=r[S];if(N>n*n)continue;let E=!0;for(let K=1;K<=2&&E;K++){const Q=m.get((v+K)%w),ot=m.get((v-K+w)%w);(Q!==void 0&&Q<N||ot!==void 0&&ot<=N)&&(E=!1)}if(!E)continue;const z=Math.sqrt(N);let A=z,$=z;for(let K=-1;K<=1;K+=2){let Q=z;for(let ot=1;ot<200;ot++){const at=m.get(((v+K*ot)%w+w)%w);if(at===void 0){Q=Math.max(Q,c);break}const F=Math.sqrt(at);if(F<z)break;F>Q&&(Q=F)}K<0?A=Q:$=Q}const R=Math.min(A,$)-z,O=K=>(t-this.px[K])*this.tx[K]+(e-this.pz[K])*this.tz[K],H=O(v);let W,M;H>=0?(W=v,M=(v+1)%w):(W=(v-1+w)%w,M=v);const I=O(W),j=O(M),T=I-j>1e-9?Math.min(1,Math.max(0,I/(I-j))):H>=0?0:1,B=this.px[W]+(this.px[M]-this.px[W])*T,g=this.pz[W]+(this.pz[M]-this.pz[W])*T,y=this.ps[W];let k=this.ps[M];k<y&&(k+=f);const L=(y+(k-y)*T)%f,P=this.py[W]+(this.py[M]-this.py[W])*T,b=this.tx[W]+(this.tx[M]-this.tx[W])*T,_=this.tz[W]+(this.tz[M]-this.tz[W])*T,Y=(t-B)*(t-B)+(e-g)*(e-g),q=((t-B)*-_+(e-g)*b>=0?1:-1)*Math.sqrt(Y),Z=wt(this.layout.halfWidth,L,f);s.push({i:v,s:L,y:P,lat:q,e:Math.abs(q)-Z-ut,dist:Math.sqrt(Y),prom:R})}return s}inSpan(t,e,n=0){return e[0]<0||t<e[0]-n||t>e[1]+n?-1:(t-e[0])/(e[1]-e[0])}profile(t,e,n){const s=this.layout,a=t.s,r=this.edgeY(t),c=Math.max(0,t.e),i=wt(s.up,a,s.length),l=wt(s.cut,a,s.length),h=t.lat>=0?1:-1,u=_t.clamp(.5+.5*i*h+l,0,1),x=wt(s.wall,a,s.length)*(.6+.6*(xt(a/45,3.1,3)+.5)),w=Math.min(1,Math.max(0,(c-ge)/1.1)),m=1-(1-w)*(1-w)*(1-w),f=r+x*m+wt(s.slope,a,s.length)*Math.max(0,c-ge-1.1)+e*Tt(ge-.6,ge+1.1,c),S=wt(s.drop,a,s.length),v=wt(s.soft,a,s.length),N=3+.32*S+v*(6+.9*S),E=Math.min(1,Math.max(0,(c-.5)/N)),z=1-Math.pow(1-E,2.2),A=z+(Tt(0,1,E)-z)*v,$=r-S*A-(.55-.2*v)*Math.max(0,c-N)-n*Tt(1,4,c),R=$+(f-$)*u,O=this.inSpan(a,this.tunnel);if(O>=0){const H=10.5+23*Math.sin(Math.PI*O);return Math.max(R,t.y+H+.45*Math.max(0,Math.abs(t.lat)-9)+e*1.5)}return R}lastE=1/0;height(t,e){const n=this.passes(t,e),s=this.baseAt(t,e);if(this.lastE=1/0,!n.length)return Math.min(s,this.ravine(t,e));for(const w of n)this.lastE=Math.min(this.lastE,w.e);const a=1.2*xt(t/6,e/6,2),r=1.5*xt(t/7+3,e/7,2);let c=0,i=0,l=1/0,h=-1/0,u=1/0;for(const w of n){const m=Math.max(0,w.e),f=Tt(0,5,w.prom)*(1-Tt(Be-50,Be-4,w.dist))/Math.pow(1+m/5*(m/5),2);if(l=Math.min(l,m),f<=0)continue;c+=f,i+=this.profile(w,a,r)*f;const S=this.edgeY(w);this.isBridge(w.s,6)||(h=Math.max(h,S-5*m-.15)),this.isTunnel(w.s,2)||(u=Math.min(u,S+7.5*m+.25))}let x=c>0?i/c:s;return x+=(s-x)*Tt(70,145,l),x=Math.min(x,this.ravine(t,e)),h>u?h:Math.min(u,Math.max(h,x))}rav=null;ravine(t,e){const n=this.rav;if(!n)return 1/0;const s=t-n.cx,a=e-n.cz,r=s*n.tx+a*n.tz,c=(s*-n.tz+a*n.tx)*n.down;if(c<-260)return 1/0;const i=n.half*(1+.0012*Math.max(0,c))*(.9+.2*(xt(c/60,1.7,2)+.5)),l=Math.abs(r)/i;if(l>=1)return 1/0;const h=(95+.35*Math.max(0,c))*Tt(-260,-60,c),u=Tt(.45,1,l);return n.y-h*(1-u)+5*xt(t/16,e/16,3)*(1-u)}roadDistance(t,e){let n=1/0;for(const s of this.passes(t,e))n=Math.min(n,s.e);return n}isTunnel(t,e=0){return this.inSpan(t,this.tunnel,e)>=0}edgeY(t){const e=this.layout,n=wt(e.halfWidth,t.s,e.length)+ut;return t.y+wt(e.bank,t.s,e.length)*_t.clamp(t.lat,-n,n)}isBridge(t,e=0){return this.inSpan(t,this.bridge,e)>=0}get tunnelSpan(){return this.tunnel}get bridgeSpan(){return this.bridge}}class oo{constructor(t){this.layout=t}layout;at(t,e){const n=this.layout,s=e??{s:0,p:new C,t:new C,r:new C,hw:0,bank:0},a=(t%n.length+n.length)%n.length;return s.s=a,n.spline.sampleAt(a,s.p),n.spline.tangentAt(a,s.t),s.r.set(-s.t.z,0,s.t.x).normalize(),s.hw=wt(n.halfWidth,a,n.length),s.bank=wt(n.bank,a,n.length),s}point(t,e,n=0,s=new C){return s.set(t.p.x+t.r.x*e,t.p.y+t.bank*e+n,t.p.z+t.r.z*e)}heightAt(t,e){const n=this.layout,s=(t%n.length+n.length)%n.length,a=wt(n.halfWidth,s,n.length)+ut;return n.spline.sampleAt(s,so).y+wt(n.bank,s,n.length)*_t.clamp(e,-a,a)}rows(t,e,n,s=[]){const a=this.layout,r=[],c=[...s].map(h=>(h%a.length+a.length)%a.length).sort((h,u)=>h-u);let i=0,l=0;for(;l<a.length-.001;){r.push(l);const h=Math.abs(wt(a.curvature,l,a.length)),u=_t.clamp(h>1e-5?1/h/n:e,t,e);let x=l+u;for(;i<c.length&&c[i]<=l+.001;)i++;i<c.length&&c[i]<x&&(x=c[i]),l=x}return r}}const so=new C;function xn(o,t,e){const n=[];let s=[],a=o[0];for(const r of o)s.push(r),r-a>=e&&(n.push(s),s=[r],a=r);return s.push(o[0]+t),n.push(s),n}const ne={uHeadPos:{value:new C},uHeadDir:{value:new C(0,0,-1)},uTime:{value:0}},oe=8,Ue={uLampP:{value:Array.from({length:oe},()=>new In(0,-1e5,0,1))},uLampC:{value:Array.from({length:oe},()=>new C)}},ao=`
uniform vec4 uLampP[${oe}];
uniform vec3 uLampC[${oe}];
// Diffuse irradiance from the lamp list at world point p with world normal n: smooth inverse-square
// pools (radius in w) so each lamp lights a ~12 x 18 m patch of road and the rock around it.
vec3 nrLamps(vec3 p, vec3 n) {
  vec3 acc = vec3(0.0);
  for (int i = 0; i < ${oe}; i++) {
    vec3 l = uLampP[i].xyz - p;
    float d2 = dot(l, l);
    float r = uLampP[i].w;
    float fall = clamp(1.0 - d2 / (r * r), 0.0, 1.0);
    fall *= fall;
    float ndl = max(dot(n, l * inversesqrt(max(d2, 1e-4))), 0.0);
    acc += uLampC[i] * (fall * ndl / (1.0 + d2 * 0.02));
  }
  return acc;
}
`,ro=`
uniform vec3 uHeadPos;
uniform vec3 uHeadDir;
// 1 inside the headlight cone (~26 deg half angle), fading out by ~150 m: retroreflectors return
// the light to its source, so only the viewer behind the headlights sees them flare.
float nrRetro(vec3 wp) {
  vec3 d = wp - uHeadPos;
  float l = max(length(d), 1e-3);
  float c = dot(d / l, uHeadDir);
  return smoothstep(0.86, 0.97, c) * (1.0 - smoothstep(90.0, 170.0, l));
}
`;function Ft(o,t){const e={...ne,...Ue,...t.uniforms??{}};return o.onBeforeCompile=n=>{Object.assign(n.uniforms,e),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vTbWorld;
varying vec3 vTbWN;
${t.vertexPars??""}`).replace("#include <project_vertex>",`#include <project_vertex>
{
  vec4 tbW = vec4(transformed, 1.0);
  #ifdef USE_INSTANCING
    tbW = instanceMatrix * tbW;
  #endif
  vTbWorld = (modelMatrix * tbW).xyz;
  vec3 tbN = objectNormal;
  #ifdef USE_INSTANCING
    tbN = mat3(instanceMatrix) * tbN;
  #endif
  vTbWN = normalize(mat3(modelMatrix) * tbN);
}
${t.vertexMain??""}`);let s=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vTbWorld;
varying vec3 vTbWN;
uniform float uTime;
${An}
${Rn}
${ro}
${ao}
${t.fragmentPars??""}`);for(const[a,r]of Object.entries(t.replace??{}))s=s.replace(`#include <${a}>`,r);for(const[a,r]of Object.entries(t.after??{}))s=s.replace(`#include <${a}>`,`#include <${a}>
${r}`);n.fragmentShader=s},o.customProgramCacheKey=()=>`tb:${t.key}`,o}const yn=`
vec2 tbWarp(vec2 uv) {
  return uv + 0.06 * vec2(nrTileFbm(uv + 0.17, 3.0, 3) - 0.5, nrTileFbm(uv + 0.63, 3.0, 3) - 0.5);
}
// Anisotropic tileable fBm (integer periods per axis).
float tbFbmA(vec2 uv, vec2 per, int oct) {
  float s = 0.0, a = 0.5, w = 0.0;
  for (int i = 0; i < 6; i++) {
    if (i >= oct) break;
    s += a * nrTileNoiseA(uv * per, per);
    w += a;
    per *= 2.0;
    a *= 0.5;
  }
  return s / w;
}
// Worley with cell id: x = F1, y = F2, zw = id of the nearest cell.
vec4 tbCell(vec2 uv, float period) {
  vec2 p = uv * period;
  vec2 i = floor(p);
  vec2 f = fract(p);
  float d1 = 8.0, d2 = 8.0;
  vec2 id = vec2(0.0);
  for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
    vec2 g = vec2(float(x), float(y));
    vec2 cid = mod(i + g, period);
    vec2 o = nrHash22(cid);
    float d = length(g + o - f);
    if (d < d1) { d2 = d1; d1 = d; id = cid; } else if (d < d2) d2 = d;
  }
  return vec4(d1, d2, id);
}
// Bedded, weathered rock: ridged strata (horizontal on walls: v follows world height), broad
// tilted facets with no grooves, fine grain.
float tbStrata(vec2 w) {
  float n = tbFbmA(w, vec2(2.0, 18.0), 4);
  return 1.0 - abs(2.0 * n - 1.0);
}
float tbRockH(vec2 uv) {
  vec2 w = tbWarp(uv);
  vec4 c = tbCell(w, 4.0);
  vec2 h = nrHash22(c.zw + 3.1) - 0.5;
  vec2 lp = fract(w * 4.0);
  float facet = 0.5 + dot(h, lp - 0.5) * 0.45;
  float edge = smoothstep(0.0, 0.12, c.y - c.x);
  float fine = nrTileFbm(uv + 0.31, 32.0, 3);
  float lumps = nrTileFbm(uv + 0.8, 5.0, 4);
  return tbStrata(w) * 0.38 + facet * edge * 0.25 + lumps * 0.27 + fine * 0.1;
}
`,co=`
${yn}
vec4 bake(vec2 uv) {
  vec2 w = tbWarp(uv);
  vec4 c = tbCell(w, 4.0);
  float tone = nrHash12(c.zw + 7.7);
  float grains = nrTileFbm(uv + 0.7, 64.0, 2);
  float speck = smoothstep(0.66, 0.72, nrTileFbm(uv + 0.13, 128.0, 1));
  float blotch = nrTileFbm(uv + 0.9, 4.0, 4);
  float strata = tbStrata(w);
  float bands = tbFbmA(w + 0.2, vec2(1.0, 9.0), 3);
  float h = tbRockH(uv);
  // Rare open fractures (dark, thin).
  float crack = (1.0 - smoothstep(0.0, 0.03, c.y - c.x)) * smoothstep(0.62, 0.7, nrTileFbm(c.zw / 4.0 + 0.21, 2.0, 2));
  float alb = 0.36 + 0.14 * tone + 0.16 * grains + 0.16 * speck + 0.28 * (blotch - 0.5) + 0.22 * (bands - 0.5) + 0.12 * strata - 0.25 * crack;
  float cav = smoothstep(0.15, 0.62, h) * (1.0 - 0.6 * crack);
  return vec4(clamp(alb, 0.0, 1.0), h, clamp(cav, 0.0, 1.0), crack);
}`,io=`
${yn}
vec4 bake(vec2 uv) {
  float e = 1.0 / 512.0;
  float hx = tbRockH(uv + vec2(e, 0.0)) - tbRockH(uv - vec2(e, 0.0));
  float hy = tbRockH(uv + vec2(0.0, e)) - tbRockH(uv - vec2(0.0, e));
  vec3 n = normalize(vec3(-hx * 45.0, -hy * 45.0, 1.0));
  return vec4(n * 0.5 + 0.5, 1.0);
}`;let re=null;function Mn(o){return(!re||re.r!==o)&&(re={r:o,a:Ke(o,{size:512,shader:co,name:"tbGranite",anisotropy:8}),n:Ke(o,{size:512,shader:io,name:"tbGraniteN",anisotropy:8})}),{albedo:re.a,normal:re.n}}const lo=`
uniform sampler2D tAgg;
uniform sampler2D tMacro;
varying vec2 vRoadUv;
varying float vSurf;
varying float vHw;
// Voronoi crack network: x = distance to the nearest cell edge.
float tbCells(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  float d1 = 8.0, d2 = 8.0;
  for (int y = -1; y <= 1; y++) for (int x = -1; x <= 1; x++) {
    vec2 g = vec2(float(x), float(y));
    vec2 o = nrHash22(i + g);
    float d = length(g + o - f);
    if (d < d1) { d2 = d1; d1 = d; } else if (d < d2) d2 = d;
  }
  return d2 - d1;
}
`,ho=`
vec2 ruv = vRoadUv;           // x = lateral (m, + right), y = arc length (m)
vec3 wp = vTbWorld;
float hw = vHw;
float au = abs(ruv.x);
float macro = texture2D(tMacro, wp.xz / 48.0).r;
float mid = nrFbm2(wp.xz * 0.23, 3);
vec3 agg = texture2D(tAgg, ruv * 0.5).rgb;
// Old, sun-bleached mountain asphalt; slightly greener-grey than the city.
vec3 asph = agg * vec3(0.94, 0.95, 0.92) * (0.62 + 0.55 * macro) * (0.85 + 0.3 * mid);
float rough = mix(0.5, 0.68, macro);
// Tar-patched repairs: long rectangles a bit darker and smoother.
vec2 pc = floor(vec2(ruv.x / 2.2, ruv.y / 7.0));
float ph = nrHash12(pc + 3.7);
vec2 pf = fract(vec2(ruv.x / 2.2, ruv.y / 7.0));
float patchM = step(0.82, ph) * step(0.08, pf.x) * step(pf.x, 0.92) * step(0.1, pf.y) * step(pf.y, 0.9);
asph = mix(asph, asph * 0.62, patchM);
rough = mix(rough, 0.45, patchM);
// Crack network: dense alligator cracking near the edges, sparse in the lanes, clustered by noise.
float clusterN = nrFbm2(wp.xz * 0.11 + 7.0, 3);
float edgeZone = smoothstep(hw - 1.6, hw - 0.3, au);
float density = clamp(smoothstep(0.42, 0.7, clusterN) * 0.8 + edgeZone * 0.7, 0.0, 1.0);
vec2 cuv = ruv * vec2(1.1, 0.75);
cuv += vec2(nrNoise2(ruv * 0.9 + 3.0), nrNoise2(ruv * 0.9 + 9.0)) * 0.55;
float cl = tbCells(cuv);
float crackW = 0.02 + 0.03 * nrNoise2(ruv * 3.1);
// Fragment the cell network into branching runs (open cracks, not closed polygons).
float frag = smoothstep(0.42, 0.62, nrFbm2(ruv * vec2(1.4, 0.9) + 21.0, 3));
float crack = (1.0 - smoothstep(crackW * 0.4, crackW, cl)) * density * frag;
// Long tar seams: lane joint wobble + transverse joints every 9-23 m.
float seamL = 1.0 - smoothstep(0.03, 0.06, abs(au - 1.75 - 0.05 * sin(ruv.y * 0.21)));
float tj = fract(ruv.y / 16.0 + 0.3 * nrNoise2(vec2(floor(ruv.y / 16.0), 1.0)));
float seamT = (1.0 - smoothstep(0.004, 0.008, abs(tj - 0.5) * 0.06 + 0.002 * sin(ruv.x * 3.0))) * step(0.35, nrHash12(vec2(floor(ruv.y / 16.0), 5.0)));
float tar = clamp(max(seamL * step(0.5, nrHash12(vec2(floor(ruv.y / 30.0), 2.0))), seamT) + crack, 0.0, 1.0);
asph = mix(asph, vec3(0.012, 0.012, 0.013), tar * 0.9);
rough = mix(rough, 0.24, tar);
// Markings: double solid yellow centre, worn white edges; cracks and wear eat the paint.
float wear = smoothstep(0.3, 0.62, nrFbm2(vec2(ruv.x * 3.0, ruv.y * 0.35) + 11.0, 4)) * 0.75 + 0.25 * nrHash12(floor(ruv * 9.0));
float yl = (1.0 - smoothstep(0.0, 0.012, abs(au - 0.13) - 0.06));
float wl = (1.0 - smoothstep(0.0, 0.012, abs(au - (hw - 0.36)) - 0.07));
float paintA = clamp(yl + wl, 0.0, 1.0) * (1.0 - 0.75 * wear) * (1.0 - crack) * step(vSurf, 0.5);
vec3 paintC = mix(vec3(0.58, 0.6, 0.6), vec3(0.69, 0.5, 0.1), step(au, hw * 0.5));
vec3 alb = mix(asph, paintC, paintA);
rough = mix(rough, 0.55, paintA);
// Curb (1) and gravel shoulder (2).
float cur = 1.0 - clamp(abs(vSurf - 1.0), 0.0, 1.0);
float grv = clamp(vSurf - 1.0, 0.0, 1.0);
vec3 conc = vec3(0.24, 0.24, 0.23) * (0.7 + 0.5 * agg.r) * (0.8 + 0.3 * mid);
float pebble = nrHash12(floor(wp.xz * 22.0));
vec3 grav = vec3(0.075, 0.068, 0.058) * (0.6 + 0.8 * pebble) * (0.8 + 0.4 * mid);
alb = mix(alb, conc, cur * step(0.5, vSurf));
alb = mix(alb, grav, grv);
rough = mix(rough, 0.85, step(0.5, vSurf));
diffuseColor.rgb = alb;
float tbRough = rough;
float tbPaint = paintA;
`;function uo(){const o=ze("asphaltNormal").clone();o.repeat.set(.5,.5),o.wrapS=o.wrapT=Bn,o.needsUpdate=!0;const t=new gt({name:"tb_road",color:16777215,roughness:.55,metalness:0,normalMap:o,normalScale:new At(.55,.55)});return Ft(t,{key:"road",uniforms:{tAgg:{value:ze("asphaltAlbedo")},tMacro:{value:ze("macro")}},vertexPars:`attribute float aSurf;
attribute float aHw;
varying vec2 vRoadUv;
varying float vSurf;
varying float vHw;`,vertexMain:"vRoadUv = uv; vSurf = aSurf; vHw = aHw;",fragmentPars:lo,replace:{map_fragment:ho},after:{roughnessmap_fragment:"roughnessFactor = tbRough;",emissivemap_fragment:"totalEmissiveRadiance += diffuseColor.rgb * (tbPaint * nrRetro(vTbWorld) * 0.55 + nrLamps(vTbWorld, normalize(vTbWN)));"}})}const po=`
uniform sampler2D tRock;
uniform sampler2D tRockN;
uniform sampler2D tMacro;
attribute float aAO;
varying float vAO;
`,fo=`
vec3 wp = vTbWorld;
vec3 wn = normalize(vTbWN);
vec3 bw = pow(abs(wn), vec3(4.0));
bw /= dot(bw, vec3(1.0));
const float RS = 0.065;   // 15 m rock tiles (~3 m fracture facets)
vec4 rx = texture2D(tRock, wp.zy * RS);
vec4 ry = texture2D(tRock, wp.xz * RS);
vec4 rz = texture2D(tRock, wp.xy * RS);
vec4 rk = rx * bw.x + ry * bw.y + rz * bw.z;
vec4 rk2 = texture2D(tRock, wp.zy * 0.031 + 0.4) * bw.x + texture2D(tRock, wp.xz * 0.031 + 0.4) * bw.y + texture2D(tRock, wp.xy * 0.031 + 0.4) * bw.z;
float macro = texture2D(tMacro, wp.xz / 90.0).r;
// Rock: dark #555650 -> lit #8C8C84 (display), as linear albedo.
vec3 rockDark = vec3(0.075, 0.076, 0.068);
vec3 rockLit = vec3(0.27, 0.27, 0.24);
vec3 rock = mix(rockDark, rockLit, clamp(rk.r * 0.75 + rk2.r * 0.45 - 0.15, 0.0, 1.0));
rock *= mix(0.55, 1.0, rk.b);                       // cavities
rock *= 0.8 + 0.35 * macro;
// Mineral staining streaks running down the faces.
float streak = nrFbm2(vec2(wp.x * 0.7 + wp.z * 0.7, wp.y * 0.08), 3);
rock *= 0.82 + 0.3 * streak;
// Flats: dirt, scrub, pale grass tufts.
float gN = nrFbm2(wp.xz * 0.35, 4);
float gN2 = nrFbm2(wp.xz * 2.1 + 3.0, 2);
vec3 dirt = vec3(0.07, 0.06, 0.048) * (0.75 + 0.5 * gN2);
vec3 grass = mix(vec3(0.16, 0.15, 0.1), vec3(0.24, 0.22, 0.15), gN2);
vec3 scrub = vec3(0.05, 0.065, 0.045);
vec3 ground = mix(dirt, grass, smoothstep(0.45, 0.65, gN));
ground = mix(ground, scrub, smoothstep(0.55, 0.75, nrFbm2(wp.xz * 0.12 + 9.0, 3)) * 0.8);
float flat_ = smoothstep(0.62, 0.86, wn.y + (gN - 0.5) * 0.25);
vec3 alb = mix(rock, ground, flat_);
alb *= vAO;
diffuseColor.rgb = alb;
float tbRockMask = 1.0 - flat_;
float tbRough = mix(0.86, 0.95, flat_) - rk.a * 0.15;
`,mo=`
vec3 tn = wn;
{
  vec3 nx = texture2D(tRockN, wp.zy * RS).xyz * 2.0 - 1.0;
  vec3 ny = texture2D(tRockN, wp.xz * RS).xyz * 2.0 - 1.0;
  vec3 nz = texture2D(tRockN, wp.xy * RS).xyz * 2.0 - 1.0;
  float k = mix(0.25, 1.0, tbRockMask);
  nx.xy *= k; ny.xy *= k; nz.xy *= k;
  // whiteout blend per projection, swizzled back to world space
  vec3 a = vec3(nx.xy + wn.zy, abs(nx.z) * wn.x);
  vec3 b = vec3(ny.xy + wn.xz, abs(ny.z) * wn.y);
  vec3 c = vec3(nz.xy + wn.xy, abs(nz.z) * wn.z);
  tn = normalize(a.zyx * bw.x + b.xzy * bw.y + c.xyz * bw.z);
  normal = normalize((viewMatrix * vec4(tn, 0.0)).xyz);
}
`;function wo(o){const t=Mn(o),e=new gt({name:"tb_terrain",color:16777215,roughness:.9,metalness:0});return Ft(e,{key:"terrain",uniforms:{tRock:{value:t.albedo},tRockN:{value:t.normal},tMacro:{value:ze("macro")}},vertexPars:`attribute float aAO;
varying float vAO;`,vertexMain:"vAO = aAO;",fragmentPars:po.replace(`attribute float aAO;
`,""),replace:{map_fragment:fo},after:{roughnessmap_fragment:"roughnessFactor = tbRough;",normal_fragment_maps:mo,emissivemap_fragment:"totalEmissiveRadiance += diffuseColor.rgb * nrLamps(vTbWorld, tn);"}})}const be=new C,xe=new C,kt=new C;class Gt{pos=[];nrm=[];uv=[];idx=[];extra=new Map;constructor(t={}){for(const[e,n]of Object.entries(t))this.extra.set(e,{size:n,data:[]})}get vertexCount(){return this.pos.length/3}grid(t,e,n,s){const a=t.length;if(a<2)return;const r=t[0].length,c=this.vertexCount;for(let l=0;l<a;l++)for(let h=0;h<r;h++){const u=t[l][h];this.pos.push(u.x,u.y,u.z);const x=Math.max(0,l-1),w=Math.min(a-1,l+1),m=Math.max(0,h-1),f=Math.min(r-1,h+1);be.subVectors(t[w][h],t[x][h]),xe.subVectors(t[l][f],t[l][m]),kt.crossVectors(xe,be),kt.lengthSq()<1e-12&&kt.copy(s(l,h)),kt.normalize(),kt.dot(s(l,h))<0&&kt.negate(),this.nrm.push(kt.x,kt.y,kt.z);const S=e[l][h];this.uv.push(S[0],S[1]);for(const[v,N]of this.extra){const E=n[v]?.[l]?.[h]??0;typeof E=="number"?N.data.push(E):N.data.push(...E)}}let i=!1;for(let l=0;l<a-1;l++){let h=!1;for(let u=0;u<r-1;u++)if(be.subVectors(t[l+1][u],t[l][u]),xe.subVectors(t[l][u+1],t[l][u]),kt.crossVectors(be,xe),kt.lengthSq()>1e-8){i=kt.dot(s(l,u))<0,h=!0;break}if(h)break}for(let l=0;l<a-1;l++)for(let h=0;h<r-1;h++){const u=c+l*r+h,x=u+1,w=u+r,m=w+1;i?this.idx.push(u,x,w,x,m,w):this.idx.push(u,w,x,x,w,m)}}toGeometry(){const t=new Ot;t.setAttribute("position",new dt(this.pos,3)),t.setAttribute("normal",new dt(this.nrm,3)),t.setAttribute("uv",new dt(this.uv,2));for(const[n,s]of this.extra)t.setAttribute(n,new dt(s.data,s.size));const e=this.vertexCount;return t.setIndex(e>65535?new Ln(this.idx,1):new Wn(this.idx,1)),t.computeBoundingSphere(),t.computeBoundingBox(),t}}function $t(){return new Promise(o=>setTimeout(o,0))}const Sn=.04;function je(o,t,e,n,s){const a=i=>i<=0?0:i>=1?1:i*i*(3-2*i),r=n?n.out*a(1-(o-t)/n.len):0,c=s?s.out*a(1-(e-o)/s.len):0;return Math.max(r,c)}const Vt={s:0,p:new C,t:new C,r:new C,hw:0,bank:0},Ie=new C,nn=new C,on=new C,sn=new C;function go(o,t){const e=Math.max(.1,t.s1-t.s0),n=Math.max(1,Math.ceil(e/(t.step??1))),s=[],a=[],r=[];for(let f=0;f<=n;f++){const S=t.s0+e*f/n;o.at(S,Vt);const v=je(S,t.s0,t.s1,t.flare0,t.flare1),N=t.side*(Vt.hw+t.inner+v),E=t.side*(Vt.hw+t.inner+v+t.thick),z=o.point(Vt,N),A=o.point(Vt,E);s.push(z.x,z.y+t.y0,z.z,z.x,z.y+t.y1,z.z,A.x,z.y+t.y1,A.z,A.x,z.y+t.y0,A.z),a.push(Vt.r.clone()),r.push(Vt.t.clone().setY(0).normalize())}const c=[],i=(f,S)=>S.set(s[f*3],s[f*3+1],s[f*3+2]),l=(f,S,v,N)=>{i(f,Ie),i(S,nn).sub(Ie),i(v,on).sub(Ie),sn.crossVectors(nn,on),sn.dot(N)>=0?c.push(f,S,v):c.push(f,v,S)},h=(f,S,v,N,E)=>{l(f,S,v,E),l(f,v,N,E)},u=new C(0,1,0),x=new C(0,-1,0);for(let f=0;f<n;f++){const S=f*4,v=(f+1)*4,N=a[f].clone().multiplyScalar(-t.side),E=a[f].clone().multiplyScalar(t.side);h(S,v,v+1,S+1,N),h(S+1,v+1,v+2,S+2,u),h(S+2,v+2,v+3,S+3,E),h(S+3,v+3,v,S,x)}const w=r[0].clone().negate();h(0,1,2,3,w);const m=n*4;return h(m,m+1,m+2,m+3,r[n]),{verts:new Float32Array(s),idx:new Uint32Array(c)}}function kn(o,t,e){const n=o.R;let s;try{s=e.plain?n.ColliderDesc.trimesh(t.verts,t.idx):n.ColliderDesc.trimesh(t.verts,t.idx,n.TriMeshFlags.FIX_INTERNAL_EDGES)}catch{s=n.ColliderDesc.trimesh(t.verts,t.idx)}s.setFriction(e.friction).setRestitution(0);const a=e.kind==="ground"?Xe.GROUND:Xe.WALL;s.setCollisionGroups(Tn(a,Cn));const r=o.world.createCollider(s);return o.tag(r,{kind:e.kind,id:e.id}),r}function vo(o,t,e,n=Sn){return kn(o,t,{kind:"wall",id:e,friction:n})}function $e(o,t,e,n){return vo(o,go(t,e),n)}const Zt=.12,bo=.25,xo=240,Le=new C(0,1,0);function Ht(o,t,e){const n=wt(o.up,t,o.length),s=wt(o.cut,t,o.length);return _t.clamp(.5+.5*n*e+s,0,1)}function yo(o,t,e,n){const s=o.features.flatMap(l=>[l.s0,l.s1]),a=t.rows(.8,3,9,s),r=xn(a,o.length,xo),c=[],i=t.at(0);for(const l of r){const h=new Gt({aSurf:1,aHw:1,aDy:1}),u=[],x=[],w=[],m=[],f={};for(const z of[-1,1])f[z]={face:[],top:[],sh:[],uvF:[],uvT:[],uvS:[],sf:[],st:[],ss:[],hwF:[],hwT:[],hwS:[],dyF:[],dyT:[],dyS:[]};for(const z of l){t.at(z,i);const A=i.hw;u.push([t.point(i,-A),t.point(i,0),t.point(i,A)]),x.push([[-A,z],[0,z],[A,z]]),w.push([0,0,0]),m.push([A,A,A]);for(const $ of[-1,1]){const R=f[$],O=Ht(o,z,$),H=_t.smoothstep(O,.4,.75),W=1+(1-H),M=I=>$*(A+I);R.face.push([t.point(i,M(0)),t.point(i,M(.2),Zt*H)]),R.uvF.push([[M(0),z],[M(.2),z]]),R.sf.push([W,W]),R.hwF.push([A,A]),R.dyF.push([0,Zt*H]),R.top.push([t.point(i,M(.2),Zt*H),t.point(i,M(.34),Zt*H),t.point(i,M(.46),.03*H)]),R.uvT.push([[M(.2),z],[M(.34),z],[M(.46),z]]),R.st.push([W,W,W]),R.hwT.push([A,A,A]),R.dyT.push([Zt*H,Zt*H,.03*H]),R.sh.push([t.point(i,M(.46),.03*H),t.point(i,M(.8),-.07*H-.03*(1-H)),t.point(i,M(ut))]),R.uvS.push([[M(.46),z],[M(.8),z],[M(ut),z]]),R.ss.push([2,2,2]),R.hwS.push([A,A,A]),R.dyS.push([.03*H,0,0])}}h.grid(u,x,{aSurf:w,aHw:m,aDy:w},()=>Le);for(const z of[-1,1]){const A=f[z],$=R=>(t.at(l[Math.min(R,l.length-1)],i),i.r.clone().multiplyScalar(-z).add(new C(0,.05,0)));h.grid(A.face,A.uvF,{aSurf:A.sf,aHw:A.hwF,aDy:A.dyF},R=>$(R)),h.grid(A.top,A.uvT,{aSurf:A.st,aHw:A.hwT,aDy:A.dyT},()=>Le),h.grid(A.sh,A.uvS,{aSurf:A.ss,aHw:A.hwS,aDy:A.dyS},()=>Le)}const S=h.toGeometry(),v=new Rt(S,e);v.name="tb:road",v.receiveShadow=!0,c.push(v);const N=S.getAttribute("aDy"),E=S.getAttribute("position").array.slice();for(let z=0;z<N.count;z++)E[z*3+1]-=N.getX(z)*(1-bo);kn(n,{verts:E,idx:new Uint32Array(S.index.array)},{kind:"ground",friction:1,plain:!0}),S.deleteAttribute("aDy")}return{meshes:c,rows:a}}const Lt=[0,.25,.5,.8,1.15,1.55,2,2.6,3.4,4.5,6,8,11,15,20,27,36,48,64,85,110,135],Mo=40,So=260,Qt=24,Ve=new C(0,1,0),te=(o,t,e)=>{const n=Math.min(1,Math.max(0,(e-o)/(t-o)));return n*n*(3-2*n)};function ko(o,t,e,n,s){const[a,r]=e.tunnelSpan,[c,i]=e.bridgeSpan,l=[a-.05,a+.05,r-.05,r+.05,c,i],h=t.rows(1.2,4,6,l),u=xn(h,o.length,So),x=[];let w=0;const m=t.at(0),f=new C;for(const S of u){const v=new Gt({aAO:1}),N=[],E=[],z=[];for(const M of[-1,1]){const I=[],j=[],T=[];for(const P of S){t.at(P,m);const b=m.hw+ut,_=[];let Y=!1,X=0,q=null;for(let Z=0;Z<Lt.length;Z++){const K=Lt[Z];if(Y&&q){_.push(q.clone());continue}const Q=M*(b+K);f.set(m.p.x+m.r.x*Q,0,m.p.z+m.r.z*Q);let ot=e.height(f.x,f.z);if(K>=3&&e.lastE<K-.6){let at=X,F=K;for(let lt=0;lt<6;lt++){const p=(at+F)/2,D=M*(b+p);e.height(m.p.x+m.r.x*D,m.p.z+m.r.z*D),e.lastE<p-.6?F=p:at=p}const U=M*(b+at);f.set(m.p.x+m.r.x*U,0,m.p.z+m.r.z*U),ot=e.height(f.x,f.z),Y=!0}f.y=ot,_.push(f.clone()),q=_[_.length-1],X=K}I.push(_),j.push(Lt.map(Z=>[Z,P])),T.push(Ht(o,P,M))}const B=I.map(P=>P.map(b=>b.clone()));for(let P=0;P<I.length;P++){t.at(S[P],m);const b=I[P];for(let _=1;_<b.length-1;_++){const Y=b[_-1],X=b[_],q=b[_+1],Z=Math.hypot(q.x-Y.x,q.z-Y.z)+.001,K=te(1.2,3,Math.abs(q.y-Y.y)/Z);if(K<=0)continue;const Q=te(0,.6,Lt[_])*(1-te(60,100,Lt[_])),ot=xt(S[P]/3.2+M*17,X.y/2.6,3)*1.6+xt(S[P]/11,X.y/9,2)*1.8,at=Math.max(ot*K*Q,-.25-.4*te(3,9,Lt[_])-3*te(9,20,Lt[_]));X.x+=m.r.x*M*at,X.z+=m.r.z*M*at}}const g=I.length,y=Lt.length,k=[];for(let P=0;P<g;P++){const b=[];for(let _=0;_<y;_++){const Y=I[P][_].y,X=I[Math.max(0,P-1)][_].y,q=I[Math.min(g-1,P+1)][_].y,Z=I[P][Math.max(0,_-1)].y,K=I[P][Math.min(y-1,_+1)].y,Q=(X+q+Z+K)/4-Y,ot=_<=2?.25*T[P]:0;b.push(_t.clamp(1-Q*.12-ot,.35,1.08))}k.push(b)}v.vertexCount,v.grid(I,j,{aAO:k},()=>Ve);for(let P=0;P<g;P++)for(let b=0;b<y;b++)z.push(B[P][b].x,B[P][b].y,B[P][b].z);const L=z.length/3-g*y;for(let P=0;P<g-1;P++)for(let b=0;b<y-1&&!(Lt[b]>=Mo);b++){const _=L+P*y+b,Y=_+1,X=_+y,q=X+1;(b>=1&&T[P]>.5?E:N).push(_,X,Y,Y,X,q)}}const A=[],$=[],R=[],O=()=>{A.length>=2&&v.grid(A,$,{aAO:R},()=>Ve),A.length=0,$.length=0,R.length=0};for(const M of S){if(!(M>a&&M<r||M>=c&&M<=i)){O();continue}t.at(M,m);const j=m.hw+ut,T=[];for(const B of[-1,-.6,-.25,0,.25,.6,1]){const g=B*j,y=m.p.x+m.r.x*g,k=m.p.z+m.r.z*g;T.push(new C(y,e.height(y,k),k))}A.push(T),$.push(T.map((B,g)=>[g,M])),R.push(T.map(()=>.9))}O();const H=v.toGeometry();w+=H.index.count/3;const W=new Rt(H,n);W.name="tb:terrain",W.receiveShadow=!0,W.castShadow=!0,x.push(W),an(s,z,N,"ground",.9),an(s,z,E,"wall",Sn)}return{meshes:x,triangles:w}}function an(o,t,e,n,s){if(!e.length)return;const a=new Ot;a.setAttribute("position",new dt(t,3)),a.setIndex(e),o.addStaticMesh(a,new it,{kind:n,friction:s,group:n==="ground"?1:2}),a.dispose()}function zo(o,t,e=1150,n=5){const s=o.bounds,a=s.min.x-e,r=s.min.y-e,c=Math.ceil((s.max.x-s.min.x+2*e)/Qt)+1,i=Math.ceil((s.max.y-s.min.y+2*e)/Qt)+1,l=new Float32Array(c*i);for(let m=0;m<i;m++)for(let f=0;f<c;f++){const S=a+f*Qt,v=r+m*Qt,N=o.height(S,v),E=o.lastE;l[m*c+f]=N-7*(1-te(70,150,E))}const h=[];let u=0;const x=Math.ceil((c-1)/n),w=Math.ceil((i-1)/n);for(let m=0;m<n;m++)for(let f=0;f<n;f++){const S=f*x,v=Math.min(c-1,S+x),N=m*w,E=Math.min(i-1,N+w);if(v<=S||E<=N)continue;const z=[],A=[],$=[];for(let W=N;W<=E;W++){const M=[],I=[],j=[];for(let T=S;T<=v;T++)M.push(new C(a+T*Qt,l[W*c+T],r+W*Qt)),I.push([T,W]),j.push(1);z.push(M),A.push(I),$.push(j)}const R=new Gt({aAO:1});R.grid(z,A,{aAO:$},()=>Ve);const O=R.toGeometry();u+=O.index.count/3;const H=new Rt(O,t);H.name="tb:far",H.receiveShadow=!0,h.push(H)}return{meshes:h,triangles:u}}function Ao(o){const t=(c,i=0)=>o.features.filter(l=>l.tag===c)[i]??{s0:0,s1:0},e=c=>t("hairpin",c),n=t("balcony"),s=t("tunnel"),a=t("bridge"),r=e(4);return{"stage-start":{s:o.startS+4,lat:-2},cityview:{s:n.s0+(n.s1-n.s0)*.55,lat:-1.5},hairpins:{s:e(0).s0-100,lat:1.6},tunnel:{s:s.s0+(s.s1-s.s0)*.35,lat:1.8},bridge:{s:a.s0-55,lat:1.8},breakable:{s:r.s0-80,lat:0},"tunnel-exit":{s:s.s1-40,lat:1.8}}}function Ro(o,t,e,n){const s=Ao(e);o.debug.register("thornbackView",async(r="stage-start")=>{const c=o.scenes.current,i=s[r];if(!c?.player||!i||c.track?.id!==t)return{ok:!1,name:r};const l=n.at(i.s),h=n.point(l,i.lat,.05),u=Math.atan2(-l.t.x,-l.t.z);return c.player.vehicle.reset(h,u),c.player.trackS=i.s,await new Promise(x=>setTimeout(x,900)),c.rig?.update(1,1),await new Promise(x=>setTimeout(x,1700)),{ok:!0,name:r,s:Math.round(i.s),pos:[Math.round(h.x),Math.round(h.y),Math.round(h.z)]}});let a=null;o.debug.register("thornbackBalls",(r=!0)=>{const c=o.scenes.current;if(a&&(a.removeFromParent(),a=null),!r||!c?.scene||!c.camera)return!1;a=new Ce;const i=new Dn(.8,48,24),l=new Rt(i,new gt({color:16777215,metalness:1,roughness:0})),h=new Rt(i,new gt({color:16777215,metalness:1,roughness:.45}));return l.position.set(-1,0,-5),h.position.set(1,0,-5),a.add(l,h),c.camera.add(a),c.camera.parent||c.scene.add(c.camera),!0})}const rn=new At(.15,1).normalize(),Pt=new At(2600,1700),Pe=`
// Pin to just inside the far plane: drawn beyond the camera's far distance, still occluded by depth.
vec4 tbPin(vec4 clip, float k) { clip.z = clip.w * (1.0 - k); return clip; }
`,To=`
${Pe}
attribute vec3 aColor;
attribute vec2 aMeta; // x = size (m), y = blink period (s, 0 = twinkle only)
uniform float uTime;
uniform float uPx;
varying vec3 vColor;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  float d = -mv.z;
  float ph = fract(sin(dot(position.xz, vec2(12.9898, 78.233))) * 43758.5453);
  float on = 1.0;
  if (aMeta.y > 0.0) on = step(0.5, fract(uTime / aMeta.y + ph));
  else on = 0.82 + 0.18 * sin(uTime * (1.3 + 2.0 * ph) + ph * 40.0);
  // Thin haze over the distance (lights stay visible far beyond the scene fog).
  float haze = exp(-d / 3800.0);
  vColor = aColor * on * haze;
  gl_PointSize = clamp(aMeta.x * uPx / max(d, 1.0), 1.4, 9.0);
  gl_Position = tbPin(projectionMatrix * mv, 3.5e-6);
}`,Co=`
varying vec3 vColor;
void main() {
  vec2 c = gl_PointCoord * 2.0 - 1.0;
  float r2 = dot(c, c);
  if (r2 > 1.0) discard;
  gl_FragColor = vec4(vColor * (exp(-r2 * 4.0) + 0.25 * exp(-r2 * 1.2)), 1.0);
}`,Po=`
${Pe}
varying vec2 vUv;
varying float vD;
void main() {
  vUv = uv;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vD = -mv.z;
  gl_Position = tbPin(projectionMatrix * mv, 1.5e-6);
}`,_o=`
uniform sampler2D tMap;
uniform float uGain;
varying vec2 vUv;
varying float vD;
void main() {
  vec3 c = texture2D(tMap, vUv).rgb;
  gl_FragColor = vec4(c * c * uGain * exp(-vD / 5200.0), 1.0);
}`,Fo=`
${Pe}
varying float vD;
varying float vH;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vH = position.y;
  #ifdef USE_INSTANCING
    wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
    vH = (instanceMatrix * vec4(position, 1.0)).y;
  #endif
  vec4 mv = viewMatrix * wp;
  vD = -mv.z;
  gl_Position = tbPin(projectionMatrix * mv, 2.5e-6);
}`,Eo=`
uniform vec3 uColor;
uniform vec3 uHaze;
varying float vD;
varying float vH;
void main() {
  float h = 1.0 - exp(-vD / 2600.0);
  gl_FragColor = vec4(mix(uColor, uHaze, h), 1.0);
}`;function Bo(){const o=new C(rn.x,0,rn.y),t=new C(o.z,0,-o.x).negate();return t.x<0&&t.negate(),{origin:ee.clone(),u:o,v:t}}function Io(o){const n=document.createElement("canvas");n.width=1024,n.height=704;const s=n.getContext("2d");s.fillStyle="#000",s.fillRect(0,0,1024,704);const a=704*.78,r={x:1024*.52,y:704*.5};for(let l=0;l<2;l++){const h=l===0?14:70;for(let u=8;u<a-6;u+=h+o.range(-3,3)){const x=l===1,w=Math.hypot((1024*.5-r.x)/1024,(u-r.y)/704);s.globalAlpha=(x?.55:.18)*(1.15-w)*o.range(.6,1),s.strokeStyle=x?"#ffb15e":"#c9d6dc",s.lineWidth=x?2.2:1,s.beginPath(),s.moveTo(o.range(0,60),u),s.lineTo(1024-o.range(0,60),u+o.range(-8,8)),s.stroke()}for(let u=6;u<1024;u+=h+o.range(-3,3)){const x=l===1;s.globalAlpha=(x?.5:.16)*(1.1-Math.abs(u-r.x)/1024)*o.range(.6,1),s.strokeStyle=x?"#ffb15e":"#c9d6dc",s.lineWidth=x?2:1,s.beginPath(),s.moveTo(u,o.range(0,30)),s.lineTo(u+o.range(-10,10),a-o.range(0,20)),s.stroke()}}for(let l=0;l<900;l++){const h=o.range(0,1024),u=o.range(0,a),x=Math.hypot((h-r.x)/1024,(u-r.y)/704);if(o.next()<x*1.2)continue;s.globalAlpha=o.range(.05,.18)*(1.2-x),s.fillStyle=o.next()<.6?"#ffd29b":"#dfe8f0";const w=o.range(3,10);s.fillRect(h-w,u-w*.6,w*2,w*1.2)}s.globalAlpha=.7,s.strokeStyle="#ffc070",s.lineWidth=2,s.beginPath();for(let l=0;l<=1024;l+=16)s.lineTo(l,a+Math.sin(l*.01)*6);s.stroke();const c=s.createLinearGradient(0,a,0,704);c.addColorStop(0,"rgba(255,190,120,0.16)"),c.addColorStop(1,"rgba(0,0,0,0)"),s.globalAlpha=1,s.fillStyle=c,s.fillRect(0,a,1024,704-a);const i=new de(n);return i.colorSpace=fe,i.anisotropy=4,i.flipY=!1,i}function Lo(o){const t=new qe(o).fork("tb-city"),e=new Ce;e.name="tb:city";const{origin:n,u:s,v:a}=Bo(),r=(T,B,g)=>n.clone().addScaledVector(s,T).addScaledVector(a,B).setY(n.y+g),c=Pt.y*.28,i=new At(0,-50),l=Io(t.fork("glow")),h=new pe(Pt.x,Pt.y,1,1),u=new it().makeBasis(s,new C(0,1,0),a.clone().negate());h.rotateX(-Math.PI/2),h.applyMatrix4(u),h.translate(n.x,n.y+.5,n.z);const x=new ue({vertexShader:Po,fragmentShader:_o,uniforms:{tMap:{value:l},uGain:{value:2.4}},transparent:!0,depthWrite:!1,blending:Ae,fog:!1}),w=new Rt(h,x);w.frustumCulled=!1,w.renderOrder=-5,e.add(w);const m=[],f=[],S=[],v=[new et(16757867),new et(16765595),new et(15255664)],N=[new et(14674160),new et(16773600),new et(14217440)],E=(T,B,g,y,k=0)=>{m.push(T.x,T.y,T.z),f.push(B.r*g,B.g*g,B.b*g),S.push(y,k)};for(let T=0;T<11e3;T++){const B=t.range(-Pt.x/2,Pt.x/2),g=t.range(-Pt.y/2,c),y=Math.hypot((B-i.x)/Pt.x,(g-i.y)/Pt.y);if(t.next()<y*1.4)continue;const k=t.range(2,18+60*Math.max(0,.5-y)),L=t.next()<.62?t.pick(v):t.pick(N);E(r(B,g,k),L,t.range(1.6,5.5),t.range(7,13))}for(let T=-Pt.x/2;T<Pt.x/2;T+=22)E(r(T,c+Math.sin(T*.01)*8,8),v[1],9,18);for(const T of[-500,-120,340])for(let B=c;B<c+260;B+=18)E(r(T-8,B,6),v[0],8,16),E(r(T+8,B,6),v[0],8,16);const z=[],A=new yt().setFromRotationMatrix(new it().makeBasis(s,new C(0,1,0),a.clone().negate()));for(let T=0;T<22;T++){const B=i.x+t.gauss(0,300),g=i.y+t.gauss(0,160),y=t.range(120,300)*(T<3?1.3:1),k=t.range(26,46),L=t.range(24,40),P=r(B,g,0);z.push(new it().compose(P,A,new C(k,y,L)));for(const b of[0,1]){const _=Math.floor(k/4);for(let Y=0;Y<_;Y++)for(let X=6;X<y-6;X+=4.2){if(t.next()>.07)continue;const q=(Y/_-.5)*k,Z=b===0?r(B+q,g-L/2-.5,X):r(B-k/2-.5,g+(Y/_-.5)*L,X);E(Z,t.next()<.5?t.pick(v):t.pick(N),t.range(1.5,3.5),6)}}E(r(B,g,y+4),new et(16722474),14,26,1),y>200&&E(r(B,g,y*.6),new et(16722474),9,18,1)}for(const T of[-300,160])E(r(T,c+40,62),new et(16722474),12,22,1);for(let T=0;T<220;T++){const B=T%2===0,g=B?i.x-380:i.x+420,y=r(g+t.gauss(0,120),i.y+t.gauss(0,90),t.range(4,30));E(y,new et(B?1696767:16727464),t.range(3,6),12)}const $=new Ot;$.setAttribute("position",new dt(m,3)),$.setAttribute("aColor",new dt(f,3)),$.setAttribute("aMeta",new dt(S,2));const R=new ue({vertexShader:To,fragmentShader:Co,uniforms:{uTime:ne.uTime,uPx:{value:900}},transparent:!0,depthWrite:!1,blending:Ae,fog:!1}),O=new vn($,R);O.frustumCulled=!1,O.renderOrder=-4,e.add(O);const H=new bt(1,1,1).translate(0,.5,0),W=new ue({vertexShader:Fo,fragmentShader:Eo,uniforms:{uColor:{value:new et(329482)},uHaze:{value:new et(1054489)}},fog:!1}),M=new pt(H,W,z.length);z.forEach((T,B)=>M.setMatrixAt(B,T)),M.instanceMatrix.needsUpdate=!0,M.frustumCulled=!1,e.add(M);const I=(()=>{const T=document.createElement("canvas");T.width=T.height=128;const B=T.getContext("2d"),g=B.createRadialGradient(64,64,0,64,64,64);g.addColorStop(0,"rgba(255,255,255,1)"),g.addColorStop(.4,"rgba(255,255,255,0.35)"),g.addColorStop(1,"rgba(255,255,255,0)"),B.fillStyle=g,B.fillRect(0,0,128,128);const y=new de(T);return y.colorSpace=fe,y})(),j=(T,B,g,y)=>{const k=new Nn({map:I,color:new et(g).multiplyScalar(y),blending:Ae,depthWrite:!1,transparent:!0,fog:!1});k.onBeforeCompile=P=>{P.vertexShader=P.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
 gl_Position.z = gl_Position.w * (1.0 - 5e-6);`)},k.customProgramCacheKey=()=>"tb:farSprite";const L=new Hn(k);L.position.copy(T),L.scale.set(B,B*.42,1),L.frustumCulled=!1,L.renderOrder=-6,e.add(L)};return j(r(i.x,i.y,160),2600,16754784,.16),j(r(i.x-380,i.y,60),900,1696767,.1),j(r(i.x+420,i.y,60),900,16727464,.09),{group:e,update(T,B){R.uniforms.uPx.value=B}}}const Wo=`
${Pe}
attribute float aTop;
attribute float aRim;
uniform float uPin;
varying float vTop;
varying float vRim;
varying float vD;
void main() {
  vTop = aTop;
  vRim = aRim;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vD = -mv.z;
  gl_Position = tbPin(projectionMatrix * mv, uPin);
}`,Do=`
uniform vec3 uBody;
uniform vec3 uHaze;
uniform vec3 uRim;
uniform float uHazeK;
varying float vTop;
varying float vRim;
varying float vD;
void main() {
  // Body fades toward the haze colour with distance and toward the foot (valley mist).
  float h = clamp(1.0 - exp(-vD * uHazeK), 0.0, 1.0);
  vec3 c = mix(uBody, uHaze, h * 0.85 + (1.0 - vTop) * 0.25);
  // Moon rim along the crest.
  c += uRim * vRim * pow(vTop, 40.0);
  gl_FragColor = vec4(c, 1.0);
}`,No=[{r:7e3,base:150,amp:900,freq:5,body:1317920,haze:1845035,hazeK:4e-4,cityDip:400},{r:5200,base:60,amp:760,freq:7,body:1054490,haze:1713192,hazeK:45e-5,cityDip:700},{r:3900,base:-20,amp:620,freq:9,body:791061,haze:1581606,hazeK:5e-4,cityDip:1e3},{r:2900,base:-40,amp:520,freq:12,body:593167,haze:1383969,hazeK:55e-5,cityDip:1100}];function Ho(o,t){const e=new Ce;e.name="tb:ridges";const n=new At(t.x,t.z).normalize(),s=Math.atan2(ee.z-o.z,ee.x-o.x);return No.forEach((a,r)=>{const i=[],l=[],h=[],u=[];for(let f=0;f<=900;f++){const S=f/900*Math.PI*2,v=Math.cos(S),N=Math.sin(S),E=a.freq/(Math.PI*2),z=v*E+r*13.1,A=N*E+r*3.7,$=1-Math.abs(xt(z,A,5)*2),R=xt(v*E*.25+4+r,N*E*.25+1.3,3)+.5;let O=a.base+a.amp*(.25+.75*R)*(.45+.55*$*$);O+=a.amp*(.05+.03*r)*xt(v*E*9+r*5.3,N*E*9+2.2,3);let H=Math.abs(S-s)%(Math.PI*2);H>Math.PI&&(H=Math.PI*2-H),O-=a.cityDip*Math.exp(-(H*H)/(2*.42*.42)),O=Math.max(O,-560);const W=o.x+v*a.r,M=o.z+N*a.r,I=Math.max(0,v*n.x+N*n.y);if(i.push(W,-700,M,W,O,M),l.push(0,1),h.push(0,.25+1.1*I*I),f<900){const j=f*2;u.push(j,j+2,j+1,j+1,j+2,j+3)}}const x=new Ot;x.setAttribute("position",new dt(i,3)),x.setAttribute("aTop",new dt(l,1)),x.setAttribute("aRim",new dt(h,1)),x.setIndex(u);const w=new ue({vertexShader:Wo,fragmentShader:Do,side:me,fog:!1,uniforms:{uBody:{value:new et(a.body)},uHaze:{value:new et(a.haze)},uRim:{value:new et(4609130).multiplyScalar(.6)},uHazeK:{value:a.hazeK},uPin:{value:(1+r*.35)*1e-6}}}),m=new Rt(x,w);m.frustumCulled=!1,m.renderOrder=-900+r,e.add(m)}),e}const he=4.8,Ye=8.9,zn=6,ye=new et(15910778);function cn(o){const t=[];t.push([o,-.1],[o,1.2],[o,2.6],[o,he]);const e=12;for(let n=1;n<e;n++){const s=n/e*Math.PI;t.push([Math.cos(s)*o,he+Math.sin(s)*(Ye-he)])}return t.push([-o,he],[-o,2.6],[-o,1.2],[-o,-.1]),t}const Go=`
vec3 wp = vTbWorld;
vec3 wn = normalize(vTbWN);
vec3 bw = pow(abs(wn), vec3(4.0));
bw /= dot(bw, vec3(1.0));
vec4 rk = texture2D(tRock, wp.zy * 0.11) * bw.x + texture2D(tRock, wp.xz * 0.11) * bw.y + texture2D(tRock, wp.xy * 0.11) * bw.z;
// Blasted rock: blotchy drill-and-blast surface, the fracture pattern only faintly.
float blot = nrFbm2(vec2(vBore.z * 0.35, vBore.y * 0.6 + vBore.x * 0.25), 4);
float pits = nrFbm2(vec2(vBore.z * 2.2, vBore.y * 2.6 + vBore.x), 3);
float a = clamp(0.25 + 0.6 * blot + 0.25 * pits + 0.2 * (rk.r - 0.5), 0.0, 1.0);
vec3 rock = mix(vec3(0.05, 0.047, 0.042), vec3(0.24, 0.225, 0.2), a) * mix(0.7, 1.0, rk.b);
// Soot band along the crown, damp dark foot.
rock *= mix(1.0, 0.55, smoothstep(5.6, 7.2, vBore.y));
rock *= mix(0.6, 1.0, smoothstep(0.0, 0.9, vBore.y));
diffuseColor.rgb = rock;
`,Oo=`
{
  vec2 toStrip = vec2(0.0, 7.0) - vBore.xy;
  float d2 = dot(toStrip, toStrip);
  float fx = 0.62 + 0.38 * pow(0.5 + 0.5 * cos(6.2831853 * vBore.z / ${zn.toFixed(1)}), 2.0);
  float ndl = clamp(dot(normalize(vec3(toStrip, 0.0)), normalize(vec3(vBoreN, 0.0))) * 0.7 + 0.3, 0.0, 1.0);
  float irr = 26.0 / (1.0 + d2 * 0.045) * fx * ndl;
  totalEmissiveRadiance += diffuseColor.rgb * (uBounce * irr * uFade + nrLamps(vTbWorld, normalize(vTbWN)));
}
`;function Uo(o,t,e,n,s,a){const[r,c]=e.tunnelSpan;if(r<0)return null;const i=t.at(r),l=[],h=[],u=[],x=new Gt({aBore:3,aBoreN:2}),w=[];for(let k=r-.3;k<c+.3;k+=1.5)w.push(k);w.push(c+.3);const m=[],f=[],S=[],v=[];for(const k of w){t.at(k,i);const L=i.hw+ut,P=cn(L),b=[],_=[],Y=[];P.forEach(([X,q],Z)=>{b.push(t.point(i,X,q-i.bank*X)),_.push([X,q,k-r]);const K=P[Math.max(0,Z-1)],Q=P[Math.min(P.length-1,Z+1)],ot=Q[0]-K[0],F=-(Q[1]-K[1]),U=ot,lt=Math.hypot(F,U)||1;Y.push([F/lt,U/lt])}),m.push(b),f.push(P.map((X,q)=>[q,k])),S.push(_),v.push(Y)}const N=k=>(t.at(w[k],i),t.point(i,0,3.8)),E=(k,L)=>N(k).sub(m[k][L]);x.grid(m,f,{aBore:S,aBoreN:v},(k,L)=>E(k,L));const z=Mn(a),A=Ft(new gt({name:"tb_bore",color:16777215,roughness:.92}),{key:"bore",uniforms:{tRock:{value:z.albedo},uBounce:{value:new et(13219478).lerp(ye,.5).multiplyScalar(.6)},uFade:{value:1}},vertexPars:`attribute vec3 aBore;
attribute vec2 aBoreN;
varying vec3 vBore;
varying vec2 vBoreN;`,vertexMain:"vBore = aBore; vBoreN = aBoreN;",fragmentPars:`uniform sampler2D tRock;
uniform vec3 uBounce;
uniform float uFade;
varying vec3 vBore;
varying vec2 vBoreN;`,replace:{map_fragment:Go},after:{emissivemap_fragment:Oo}}),$=x.toGeometry(),R=new Rt($,A);R.name="tb:bore",R.receiveShadow=!0,R.castShadow=!0,l.push(R),s.addStaticMesh($,new it,{kind:"wall",friction:.3,group:2});const O=[],H=new yt,W=new C(0,1,0);let M=0;for(let k=r+3;k<c-1;k+=zn,M++){t.at(k,i);const L=t.point(i,0,Ye-.12);H.setFromAxisAngle(W,Math.atan2(-i.t.x,-i.t.z)),O.push(new it().compose(L,H,new C(1,1,1))),h.push({pos:L.clone().setY(L.y-.1),color:ye.clone().multiplyScalar(5),size:.7}),M%2===0&&u.push({pos:L.clone().setY(L.y-.4),color:ye.clone().multiplyScalar(13),radius:16})}const I=new bt(.32,.1,1.5),j=new gt({color:2760725,emissive:ye,emissiveIntensity:4,roughness:.5}),T=new pt(I,j,O.length);O.forEach((k,L)=>T.setMatrixAt(L,k)),T.name="tb:tunnelStrips",T.computeBoundingSphere(),l.push(T);const B=new Gt({aAO:1});for(const[k,L]of[[r+.05,-1],[c-.05,1]]){t.at(k,i);const P=i.hw+ut,b=cn(P).filter(([,q])=>q>=he-.01),_=[],Y=[];for(const[q,Z]of b){_.push(t.point(i,q,Z-i.bank*q));const K=t.point(i,q*1.04,0),Q=e.height(K.x,K.z)+.4;Y.push(new C(K.x,Math.max(Q,_[_.length-1].y+.5),K.z))}const X=i.t.clone().multiplyScalar(L);B.grid([_,Y],[_.map((q,Z)=>[Z,0]),Y.map((q,Z)=>[Z,1])],{aAO:[_.map(()=>.7),Y.map(()=>1)]},()=>X)}const g=new Rt(B.toGeometry(),n);g.name="tb:portals",g.receiveShadow=!0,l.push(g);const y=t.at(r);return{objects:l,glows:h,lamps:u,interior(k){const L=o.spline.project(k);if(L.s<r-2||L.s>c+2)return 0;t.at(L.s,y);const P=(k.x-y.p.x)*y.r.x+(k.z-y.p.z)*y.r.z;if(Math.abs(P)>y.hw+ut+1||k.y<y.p.y-2||k.y>y.p.y+Ye+1)return 0;const b=Math.min(L.s-r,c-L.s);return _t.smoothstep(b,.5,5)}}}const jo=24,We=new et(14674687);function $o(o,t,e){const[n,s]=t.bridgeSpan;if(n<0)return null;const a=o.at(n),r=[],c=[],i=[],l=s-n,h=Ft(new gt({name:"tb_steel",color:6121070,metalness:.55,roughness:.42,emissive:2767436,emissiveIntensity:.35}),{key:"bridgeSteel",after:{emissivemap_fragment:"totalEmissiveRadiance += diffuseColor.rgb * nrLamps(vTbWorld, normalize(vTbWN)) * 2.0;"}}),u=new gt({name:"tb_girder",color:2303786,metalness:.4,roughness:.7}),x=new yt,w=new C(0,1,0),m=g=>{const y=(g-n)/l;return-2+(jo+2)*4*y*(1-y)},f=new Gt,S=60;for(const g of[-1,1]){const y=[[],[],[],[]];for(let k=0;k<=S;k++){const L=n+l*k/S;o.at(L,a);const P=g*(a.hw+ut+.9),b=o.point(a,P,m(L)-a.bank*P),_=1;o.at(L+_,a);const Y=o.point(a,P,m(L+_)-a.bank*P);o.at(L,a);const X=Y.sub(b).normalize(),q=a.r.clone().multiplyScalar(g),Z=new C().crossVectors(X,q).multiplyScalar(-g).normalize(),K=.65,Q=.9,ot=[b.clone().addScaledVector(q,-K).addScaledVector(Z,Q),b.clone().addScaledVector(q,K).addScaledVector(Z,Q),b.clone().addScaledVector(q,K).addScaledVector(Z,-Q),b.clone().addScaledVector(q,-K).addScaledVector(Z,-Q)];for(let at=0;at<4;at++)y[at].push([ot[at],ot[(at+1)%4]])}for(let k=0;k<4;k++){const L=y[k],P=(b,_)=>{const Y=L[b][0],X=L[b][1],q=Y.clone().add(X).multiplyScalar(.5),Z=y[(k+2)%4][b],K=Z[0].clone().add(Z[1]).multiplyScalar(.5);return q.sub(K)};f.grid(L,L.map((b,_)=>[[_,0],[_,1]]),{},P)}}const v=new Rt(f.toGeometry(),h);v.name="tb:arch",v.castShadow=!0,r.push(v);const N=[],E=[],z=new bt(1,1,1);for(let g=n+8;g<s-6;g+=8){o.at(g,a);const y=Math.atan2(-a.t.x,-a.t.z);x.setFromAxisAngle(w,y);const k=m(g);for(const L of[-1,1]){const P=L*(a.hw+ut+.9),b=o.point(a,P,.2),_=k-1.1;_>1&&N.push(new it().compose(b.clone().setY(b.y+_/2),x,new C(.16,_,.16)))}if(k>14){const L=o.point(a,0,k+.4-0),P=2*(a.hw+ut+.9);E.push(new it().compose(L,x,new C(P,.35,.35)))}}for(let g=n+l*.25;g<n+l*.75;g+=16){o.at(g+8,a);const y=m(g+8),k=o.point(a,0,y+.4),L=Math.atan2(-a.t.x,-a.t.z),P=2*(a.hw+ut+.9);for(const b of[-1,1]){const _=new yt().setFromAxisAngle(w,L+b*Math.atan2(16,P));E.push(new it().compose(k,_,new C(Math.hypot(P,16),.22,.22)))}}const A=new pt(z,h,N.length);N.forEach((g,y)=>A.setMatrixAt(y,g));const $=new pt(z,h,E.length);E.forEach((g,y)=>$.setMatrixAt(y,g));for(const g of[A,$])g.castShadow=!0,g.computeBoundingSphere(),r.push(g);const R=new Gt,O=[],H=[],W=[],M=[[],[]];for(let g=n-6;g<=s+6;g+=4){o.at(g,a);const y=a.hw+ut+1.4,k=o.point(a,-y,-.2),L=o.point(a,y,-.2),P=o.point(a,-y,-2.2),b=o.point(a,y,-2.2);O.push([P,b]),H.push([k,P]),W.push([b,L]);for(const[_,Y]of[[0,-1],[1,1]]){const X=Y*(a.hw+ut+.15);M[_].push([o.point(a,X,.95),o.point(a,X,1.12)])}}const I=new C(0,-1,0);R.grid(O,O.map((g,y)=>[[y,0],[y,1]]),{},()=>I),R.grid(H,H.map((g,y)=>[[y,0],[y,1]]),{},()=>o.at(n,a).r.clone().negate()),R.grid(W,W.map((g,y)=>[[y,0],[y,1]]),{},()=>o.at(n,a).r.clone());for(const g of[0,1])R.grid(M[g],M[g].map((y,k)=>[[k,0],[k,1]]),{},()=>g===0?o.at(n,a).r.clone():o.at(n,a).r.clone().negate());const j=new Rt(R.toGeometry(),u);j.material=u,j.name="tb:deck",j.castShadow=!0,r.push(j),j.material.side=me;const T=[];for(let g=n-6;g<s+6;g+=2){o.at(g,a),x.setFromAxisAngle(w,Math.atan2(-a.t.x,-a.t.z));for(const y of[-1,1]){const k=o.point(a,y*(a.hw+ut+.15),.55);T.push(new it().compose(k,x,new C(.09,1.1,.09)))}}const B=new pt(z,h,T.length);T.forEach((g,y)=>B.setMatrixAt(y,g)),B.computeBoundingSphere(),r.push(B);for(const g of[-1,1])$e(e,o,{s0:n-6,s1:s+6,side:g,inner:ut+.1,thick:.3,y0:-.3,y1:1.9,step:2},"rail");for(let g=1;g<40;g++){const y=n+l*g/40;o.at(y,a);for(const k of[-1,1]){const L=k*(a.hw+ut+.9),P=o.point(a,L,m(y)+1.05-a.bank*L);c.push({pos:P,color:We.clone().multiplyScalar(9),size:.75})}}for(let g=n+20;g<s-10;g+=40){o.at(g,a),i.push({pos:o.point(a,0,9),color:We.clone().multiplyScalar(8),radius:24});for(const y of[-1,1]){const k=o.point(a,y*(a.hw+ut+.9),7.5);c.push({pos:k,color:We.clone().multiplyScalar(12),size:1})}}return{objects:r,glows:c,lamps:i}}const ln=450;function _e(o,t){const e=[],n=[],s=[],a=[],r=[];o.forEach((i,l)=>{const h=(i.index,i),u=e.length/3,x=h.getAttribute("position"),w=h.getAttribute("normal"),m=h.getAttribute("uv");for(let f=0;f<x.count;f++)e.push(x.getX(f),x.getY(f),x.getZ(f)),n.push(w.getX(f),w.getY(f),w.getZ(f)),s.push(t[l].r,t[l].g,t[l].b),a.push(m?m.getX(f):0,m?m.getY(f):0);if(h.index)for(const f of h.index.array)r.push(f+u);else for(let f=0;f<x.count;f++)r.push(u+f);i.dispose()});const c=new Ot;return c.setAttribute("position",new dt(e,3)),c.setAttribute("normal",new dt(n,3)),c.setAttribute("color",new dt(s,3)),c.setAttribute("uv",new dt(a,2)),c.setIndex(r),c.computeBoundingSphere(),c}function Vo(){const o=[new Te(.12,.22,3,5).translate(0,1.5,0)],t=[new et(2760727)],e=[[2.6,4.2,2.2],[2.1,3.6,4.6],[1.6,3,6.7],[1.05,2.4,8.6],[.55,1.8,10.1]];for(const[n,s,a]of e)o.push(new On(n,s,7,1,!1).translate(0,a+s/2,0)),t.push(new et(2044964).lerp(new et(3032624),a/12));return _e(o,t)}function Yo(){const o=[new Te(.1,.18,2.6,5).translate(0,1.3,0)],t=[new et(2826521)],e=[[0,3.4,0,1.7],[.9,3,.4,1.2],[-.8,3.1,-.5,1.25],[.2,4.2,-.3,1.1]];for(const[n,s,a,r]of e)o.push(new Oe(r,0).translate(n,s,a)),t.push(new et(14271433).lerp(new et(15918826),(s-3)/1.4));return _e(o,t)}function qo(){return _e([new Oe(.75,0).scale(1,.7,1).translate(0,.45,0),new Oe(.55,0).scale(1,.75,1).translate(.55,.35,.2)],[new et(3817768),new et(4540972)])}function hn(o,t){const e=new pe(o,t).translate(0,t/2,0),n=e.clone().rotateY(Math.PI/2),s=e.clone().rotateY(Math.PI/4);for(const a of[e,n,s]){const r=a.getAttribute("normal");for(let c=0;c<r.count;c++)r.setXYZ(c,0,1,0)}return _e([e,n,s],[new et(1,1,1),new et(1,1,1),new et(1,1,1)])}function un(o){const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d");e.clearRect(0,0,128,128);const n=new qe(o==="grass"?5:9);if(o==="grass")for(let a=0;a<46;a++){const r=n.range(20,108),c=n.range(-26,26);e.strokeStyle=`rgb(${n.int(150,205)},${n.int(140,185)},${n.int(95,130)})`,e.lineWidth=n.range(1.5,3),e.beginPath(),e.moveTo(r,128),e.quadraticCurveTo(r+c*.3,n.range(60,90),r+c,n.range(10,50)),e.stroke()}else for(let a=0;a<5;a++){const r=64+(a-2)*9,c=(a-2)*16;e.strokeStyle="#3b5a32",e.lineWidth=2,e.beginPath(),e.moveTo(r,128),e.quadraticCurveTo(r+c*.4,70,r+c,20),e.stroke();for(let i=0;i<14;i++){const l=i/14,h=r+c*l*l*.9+c*.1*l,u=128-l*105;e.fillStyle=i%2?"#45663a":"#507344",e.beginPath(),e.ellipse(h-6,u,7*(1-l*.6),2.2,-.5,0,Math.PI*2),e.ellipse(h+6,u,7*(1-l*.6),2.2,.5,0,Math.PI*2),e.fill()}}const s=new de(t);return s.colorSpace=fe,s}function ce(o){const t=new gt({name:`tb_${o.key}`,vertexColors:!0,roughness:.85,map:o.map??null,alphaTest:o.map?.45:0,side:o.map?me:Gn});return Ft(t,{key:`plant-${o.key}`,uniforms:{uSway:{value:o.sway},uRim:{value:o.rim}},vertexPars:`uniform float uSway;
uniform float uTime;`,vertexMain:`
      #ifdef USE_INSTANCING
      {
        // Wind: top of the plant sways, phase from the instance position.
        vec3 ip = instanceMatrix[3].xyz;
        float ph = dot(ip.xz, vec2(0.13, 0.17));
        float k = uSway * max(position.y, 0.0) * max(position.y, 0.0) * 0.01;
        vec3 off = vec3(sin(uTime * 1.3 + ph), 0.0, cos(uTime * 1.1 + ph * 1.3)) * k;
        gl_Position = projectionMatrix * viewMatrix * (modelMatrix * (instanceMatrix * vec4(position, 1.0)) + vec4(off, 0.0));
      }
      #endif`,fragmentPars:"uniform float uRim;",after:{emissivemap_fragment:`{
        vec3 V = normalize(cameraPosition - vTbWorld);
        float rim = pow(1.0 - abs(dot(V, normalize(vTbWN))), 3.0);
        totalEmissiveRadiance += diffuseColor.rgb * (0.07 + rim * uRim) + diffuseColor.rgb * nrLamps(vTbWorld, normalize(vTbWN));
      }`}})}function Ko(o,t,e,n,s=1){const a=new qe(n).fork("tb-veg"),r={pine:{geo:Vo(),mat:ce({sway:.25,rim:.55,key:"pine"}),shadow:!0},blossom:{geo:Yo(),mat:ce({sway:.5,rim:.4,key:"blossom"}),shadow:!0},scrub:{geo:qo(),mat:ce({sway:.4,rim:.5,key:"scrub"}),shadow:!1},grass:{geo:hn(1.1,.75),mat:ce({map:un("grass"),sway:2.5,rim:.2,key:"grass"}),shadow:!1},fern:{geo:hn(1.3,.9),mat:ce({map:un("fern"),sway:1.5,rim:.3,key:"fern"}),shadow:!1}},c=o.length,i=Math.ceil(c/ln),l={pine:[],blossom:[],scrub:[],grass:[],fern:[]};for(const R of Object.keys(l))for(let O=0;O<i;O++)l[R].push([]);const h=t.at(0),u=new yt,x=new C(0,1,0),w=new C;let m=0;const f=(R,O,H)=>{const W=e.height(R+1.5,O)-H,M=e.height(R,O+1.5)-H;return Math.hypot(W,M)/1.5},S=(R,O,H,W,M)=>{const I=e.height(H,W);if(e.lastE<(R==="grass"||R==="fern"?.6:1.8)||f(H,W,I)>(R==="pine"||R==="blossom"?.75:R==="scrub"?1:1.2))return;u.setFromAxisAngle(x,a.range(0,Math.PI*2));const B=R==="pine"?.02:.06,g=new yt().setFromEuler(new bn(a.range(-B,B),0,a.range(-B,B)));u.multiply(g),w.set(H,I-.15,W);const y=Math.min(i-1,Math.floor((O%c+c)%c/ln));l[R][y].push(new it().compose(w,u,new C(M,M*a.range(.9,1.15),M))),m++},[v,N]=e.tunnelSpan,[E,z]=e.bridgeSpan;for(let R=0;R<c;R+=2.5){if(R>v-10&&R<N+10||R>E-6&&R<z+6)continue;t.at(R,h);const O=wt(o.soft,R,c);for(const H of[-1,1]){const W=h.hw+ut,M=(I,j,T,B,g,y)=>{if(a.next()>j*s)return;const k=a.range(T,B),L=H*(W+k),P=a.range(-1.2,1.2),b=h.p.x+h.r.x*L+h.t.x*P,_=h.p.z+h.r.z*L+h.t.z*P;S(I,R,b,_,a.range(g,y))};O>.5?(M("pine",.34,3,26,1,1.9),M("pine",.2,26,80,1.1,2),M("fern",.55,.6,9,.8,1.4),M("scrub",.12,1.5,12,.8,1.3)):(M("blossom",.07,3,30,.9,1.5),M("scrub",.3,1.2,18,.7,1.5),M("grass",.75,.4,8,.8,1.4),M("grass",.3,8,25,.9,1.5),M("pine",.03,12,70,1,1.7))}}const A=[];let $=0;for(const R of Object.keys(l)){const O=r[R],H=O.geo.index.count/3;for(let W=0;W<i;W++){const M=l[R][W];if(!M.length)continue;const I=new pt(O.geo,O.mat,M.length);M.forEach((j,T)=>I.setMatrixAt(T,j)),I.instanceMatrix.needsUpdate=!0,I.computeBoundingSphere(),I.castShadow=O.shadow,I.receiveShadow=!0,I.name=`tb:veg:${R}`,A.push(I),$+=H*M.length}}return{objects:A,instances:m,triangles:$}}const Xo=`
attribute vec3 aColor;
attribute vec4 aBlink; // period, duty, phase, size
uniform float uTime;
uniform float uPx;
uniform float uFogK;
varying vec3 vColor;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  float on = 1.0;
  if (aBlink.x > 0.0) {
    float f = fract(uTime / aBlink.x + aBlink.z);
    on = smoothstep(0.0, 0.05, f) * (1.0 - smoothstep(aBlink.y, aBlink.y + 0.08, f));
  }
  float d = -mv.z;
  // Same falloff as the scene fog at eye level, but lights punch through a little further.
  float fog = exp(-pow(d * uFogK * 0.75, 2.0));
  vColor = aColor * on * fog;
  gl_PointSize = clamp(aBlink.w * uPx / max(d, 0.5), 1.5, 220.0);
  if (on * fog < 0.003) gl_PointSize = 0.0;
  gl_Position = projectionMatrix * mv;
}`,Zo=`
varying vec3 vColor;
void main() {
  vec2 c = gl_PointCoord * 2.0 - 1.0;
  float r2 = dot(c, c);
  if (r2 > 1.0) discard;
  float a = exp(-r2 * 7.0) + 0.3 * exp(-r2 * 2.2);
  gl_FragColor = vec4(vColor * a, 1.0);
}`;class Qo{points;mat;constructor(t,e){const n=t.length,s=new Float32Array(n*3),a=new Float32Array(n*3),r=new Float32Array(n*4);t.forEach((i,l)=>{s.set([i.pos.x,i.pos.y,i.pos.z],l*3),a.set([i.color.r,i.color.g,i.color.b],l*3),r.set([i.period??0,i.duty??.5,i.phase??0,i.size],l*4)});const c=new Ot;c.setAttribute("position",new Fe(s,3)),c.setAttribute("aColor",new Fe(a,3)),c.setAttribute("aBlink",new Fe(r,4)),c.computeBoundingSphere(),this.mat=new ue({vertexShader:Xo,fragmentShader:Zo,uniforms:{uTime:ne.uTime,uPx:{value:800},uFogK:{value:e}},transparent:!0,depthWrite:!1,blending:Ae,fog:!1}),this.points=new vn(c,this.mat),this.points.name="tb:glow",this.points.frustumCulled=!1,this.points.renderOrder=10}setPixelScale(t){this.mat.uniforms.uPx.value=t}}class Jo{constructor(t,e,n=48){this.capacity=n,this.mesh=new pt(t,e,n),this.mesh.name="tb:debris",this.mesh.frustumCulled=!1,this.mesh.castShadow=!0;for(let s=0;s<n;s++)this.mesh.setMatrixAt(s,this.zero),this.pos.push(new C),this.vel.push(new C),this.rot.push(new yt),this.spin.push(new C),this.scale.push(new C(1,1,1)),this.life.push(0);this.mesh.instanceMatrix.needsUpdate=!0}capacity;mesh;pos=[];vel=[];rot=[];spin=[];scale=[];life=[];next=0;m=new it;q=new yt;e=new bn;zero=new it().makeScale(0,0,0);spawn(t,e,n,s,a){const r=this.next;this.next=(this.next+1)%this.capacity,this.pos[r].copy(t),this.vel[r].copy(e),this.rot[r].copy(n),this.spin[r].copy(a),this.scale[r].copy(s),this.life[r]=5}update(t){let e=!1;for(let n=0;n<this.capacity;n++){if(this.life[n]<=0)continue;e=!0,this.life[n]-=t;const s=this.vel[n];s.y-=9.81*t,s.multiplyScalar(Math.exp(-t*.15)),this.pos[n].addScaledVector(s,t);const a=this.spin[n];this.e.set(a.x*t,a.y*t,a.z*t),this.q.setFromEuler(this.e),this.rot[n].multiply(this.q),this.life[n]<=0?this.mesh.setMatrixAt(n,this.zero):this.mesh.setMatrixAt(n,this.m.compose(this.pos[n],this.rot[n],this.scale[n]))}e&&(this.mesh.instanceMatrix.needsUpdate=!0)}}const Nt=.75,pn=Nt-.04,Yt=4,ts=60/3.6,es=.95,zt=new yt,Jt=new it,Me=new C,qt=new C(0,1,0),ns=new et(16757322).multiplyScalar(9),os="varying vec3 vLocal;",ss=`
float st = step(0.5, fract((vLocal.x + vLocal.y * 1.0) / 0.42));
vec3 stripeC = mix(vec3(0.80, 0.53, 0.012), vec3(0.007), st);
diffuseColor.rgb = stripeC;
float tbYellow = 1.0 - st;
`;function as(){const o=new gt({name:"tb_hazard",color:16777215,roughness:.5,metalness:.05});return Ft(o,{key:"hazard",vertexPars:"varying vec3 vLocal;",vertexMain:"vLocal = position;",fragmentPars:os,replace:{map_fragment:ss},after:{emissivemap_fragment:"totalEmissiveRadiance += diffuseColor.rgb * (0.05 + tbYellow * nrRetro(vTbWorld) * 1.6);"}})}function rs(){const o=document.createElement("canvas");o.width=128,o.height=160;const t=o.getContext("2d");t.fillStyle="#e0b21e",t.fillRect(0,0,128,160),t.fillStyle="#111",t.beginPath(),t.moveTo(88,18),t.lineTo(30,80),t.lineTo(88,142),t.lineTo(108,142),t.lineTo(52,80),t.lineTo(108,18),t.closePath(),t.fill(),t.strokeStyle="#111",t.lineWidth=6,t.strokeRect(3,3,122,154);const e=new de(o);return e.colorSpace=fe,e.anisotropy=4,e}const De=[[0,.44],[.055,.49],[.02,.545],[.055,.6],[.02,.655],[.055,.71],[0,.75]];function dn(o,t){const e=Ht(o,t.s0,t.side)>.5,n=Ht(o,t.s1,t.side)>.5;return[e?{len:16,out:2.7}:{len:9,out:.6},n?{len:10,out:2.7}:{len:6,out:.5}]}function cs(o,t,e,n){const s=[],a=[],r=t.at(0),c=o.length;let i=0;const l=new Gt,h=[];for(const d of o.rails.filter(V=>V.rule==="solid")){const[V,J]=dn(o,d),st=[],nt=[],tt=Math.max(2,Math.ceil((d.s1-d.s0)/1.5));for(let rt=0;rt<=tt;rt++){const mt=d.s0+(d.s1-d.s0)*rt/tt;t.at(mt,r);const ht=d.side*(r.hw+Nt+je(mt,d.s0,d.s1,V,J)),Ut=t.point(r,ht,-.03),jt=Math.min(1,Math.min(mt-d.s0,d.s1-mt)/3),Et=De.map(([St,se])=>new C(Ut.x+r.r.x*d.side*St,Ut.y+se*(.35+.65*jt),Ut.z+r.r.z*d.side*St));st.push(Et),nt.push(De.map((St,se)=>[mt,se/(De.length-1)]))}l.grid(st,nt,{},rt=>(t.at(d.s0+(d.s1-d.s0)*rt/tt,r),r.r.clone().multiplyScalar(-d.side)));for(let rt=d.s0+.5;rt<d.s1;rt+=2){t.at(rt,r);const mt=d.side*(r.hw+Nt+.13+je(rt,d.s0,d.s1,V,J)),ht=t.point(r,mt,-.03);zt.setFromAxisAngle(qt,Math.atan2(-r.t.x,-r.t.z)),h.push(new it().compose(ht,zt,new C(1,1,1)))}$e(e,t,{s0:d.s0,s1:d.s1,side:d.side,inner:pn,thick:.3,y0:-.3,y1:1.9,flare0:V,flare1:J},"rail"),i++}const u=new Rt(l.toGeometry(),n);u.name="tb:wbeam",u.castShadow=!0,u.receiveShadow=!0,s.push(u);const x=new bt(.1,.78,.16).translate(0,.39,0),w=new pt(x,n,Math.max(1,h.length));h.forEach((d,V)=>w.setMatrixAt(V,d)),w.count=h.length,w.name="tb:beamPosts",w.castShadow=!0,w.computeBoundingSphere(),s.push(w);const m=as(),f=new bt(Yt-.04,.42,.07).translate(0,.59,0),S=new bt(.12,.8,.12).translate(0,.4,0),v=[],N=o.rails.filter(d=>d.rule==="breakable"),E=N.reduce((d,V)=>d+Math.ceil((V.s1-V.s0)/Yt),0),z=new pt(f,m,Math.max(1,E));z.name="tb:breakable",z.castShadow=!0;const A=new pt(S,new gt({color:1710876,roughness:.6,metalness:.3}),Math.max(1,E*2));A.name="tb:breakablePosts",A.castShadow=!0;const $=rs(),R=new gt({name:"tb_chevron",map:$,emissiveMap:$,emissive:new et(1,1,1),emissiveIntensity:1.5,roughness:.5,side:me});Ft(R,{key:"chevron",after:{emissivemap_fragment:"totalEmissiveRadiance += diffuseColor.rgb * nrRetro(vTbWorld) * 0.5;"}});const O=new pe(1.15,1.4).translate(0,1.75,0),H=new bt(.08,1.05,.08).translate(0,.525,-.02),W=[],M=[],I=[];let j=0,T=0;const B=[];for(const d of N){const V=o.corners.find(nt=>d.s0<=nt.s1&&d.s1>=nt.s0),J=V?V.dir===1:d.side<0,st=Math.ceil((d.s1-d.s0)/Yt);for(let nt=0;nt<st;nt++){const tt=d.s0+nt*Yt,rt=Math.min(d.s1,tt+Yt),mt=(tt+rt)/2;t.at(mt,r);const ht=d.side*(r.hw+Nt),Ut=t.point(r,ht,-.03),jt=Math.atan2(-r.t.x,-r.t.z);zt.setFromAxisAngle(qt,jt+Math.PI/2),z.setMatrixAt(j,Jt.compose(Ut,zt,Me.set(1,1,1)));const Et=[];for(const St of[-Yt/2+.1,0]){t.at(mt+St,r);const se=t.point(r,d.side*(r.hw+Nt+.08),-.03);Jt.compose(se,zt,Me.set(1,1,1)),A.setMatrixAt(T,Jt),B.push(Jt.clone()),Et.push(T++)}v.push({span:d,s0:tt,s1:rt,side:d.side,center:Ut,yaw:jt,board:j,posts:Et,state:"intact",bend:0,cooldown:0}),j++}for(let nt=d.s0+8;nt<d.s1-4;nt+=18){t.at(nt,r);const tt=t.point(r,d.side*(r.hw+Nt+.35),-.03),rt=new C(-r.t.x,0,-r.t.z).addScaledVector(r.r,-d.side*.45).normalize(),mt=Math.atan2(rt.x,rt.z);zt.setFromAxisAngle(qt,mt),W.push(new it().compose(tt,zt,new C(J?-1:1,1,1))),M.push(new it().compose(tt,zt,new C(1,1,1)))}for(const[nt,tt]of[[d.s0-1,0],[d.s1+1,.5]]){t.at(nt,r);const rt=t.point(r,d.side*(r.hw+Nt),-.03);zt.setFromAxisAngle(qt,Math.atan2(-r.t.x,-r.t.z)),I.push(new it().compose(rt,zt,new C(1,1,1))),a.push({pos:rt.clone().setY(rt.y+1.22),color:ns,size:1.1,period:1,duty:.5,phase:tt})}}z.count=j,A.count=T;for(const d of[z,A])d.instanceMatrix.setUsage(Un),d.instanceMatrix.needsUpdate=!0,d.computeBoundingSphere(),s.push(d);const g=new pt(O,R,Math.max(1,W.length));W.forEach((d,V)=>g.setMatrixAt(V,d)),g.count=W.length,g.name="tb:chevrons",g.computeBoundingSphere();const y=new pt(H,n,Math.max(1,M.length));M.forEach((d,V)=>y.setMatrixAt(V,d)),y.count=M.length,y.computeBoundingSphere();const k=new bt(.12,1.15,.12).translate(0,.575,0),L=new bt(.2,.16,.2).translate(0,1.22,0),P=new pt(k,n,Math.max(1,I.length)),b=new pt(L,new gt({color:3809792,emissive:16757322,emissiveIntensity:2.2}),Math.max(1,I.length));I.forEach((d,V)=>{P.setMatrixAt(V,d),b.setMatrixAt(V,d)}),P.count=b.count=I.length;for(const d of[g,y,P,b])d.computeBoundingSphere(),s.push(d);const _=new Map,Y=new Set,X=d=>{for(const tt of _.get(d)??[])e.removeCollider(tt);const V=[];let J=-1,st=-1;const nt=()=>{if(J>=0){const[tt,rt]=dn(o,d),mt=Math.abs(J-d.s0)<.01?tt:void 0,ht=Math.abs(st-d.s1)<.01?rt:void 0;V.push($e(e,t,{s0:J,s1:st,side:d.side,inner:pn,thick:.32,y0:-.3,y1:1.9,step:1,flare0:mt,flare1:ht},"barrier"))}J=-1};for(const tt of v)tt.span===d&&(tt.state==="broken"?nt():(J<0&&(J=tt.s0),st=tt.s1));nt(),_.set(d,V)};for(const d of N)X(d),i++;const q=()=>{for(const d of Y)X(d);Y.clear()},Z=new Jo(new bt(1,1,1),m,40);s.push(Z.mesh);const K=new it().makeScale(0,0,0);let Q=0,ot=0;const at=new Map;for(const d of v)for(let V=Math.floor(d.s0/8);V<=Math.floor(d.s1/8);V++){const J=(V%Math.ceil(c/8)+Math.ceil(c/8))%Math.ceil(c/8);let st=at.get(J);st||at.set(J,st=[]),st.push(d)}let F=[],U=0;const lt=()=>{const d=[];e.world.bodies.forEach(V=>{if(!V.isDynamic())return;let J=null;for(let nt=0;nt<V.numColliders();nt++){const tt=e.userData.get(V.collider(nt).handle);tt?.kind==="car"&&(J=tt.id??null)}if(J===null&&V.mass()<500)return;const st=F.find(nt=>nt.body.handle===V.handle);d.push({body:V,id:J,s:st?.s})}),F=d},p=new C,D=new C,G=new C,ft=(d,V,J)=>{d.state="broken",Y.add(d.span),z.setMatrixAt(d.board,K);for(const st of d.posts)A.setMatrixAt(st,K);z.instanceMatrix.needsUpdate=!0,A.instanceMatrix.needsUpdate=!0;for(let st=0;st<4;st++){const nt=(st-1.5)*1,tt=d.center.clone().add(new C(-Math.sin(d.yaw)*nt,.6,-Math.cos(d.yaw)*nt)),rt=D.clone().multiplyScalar(.55+Math.random()*.3).add(new C((Math.random()-.5)*3,2+Math.random()*4,(Math.random()-.5)*3)),mt=st<2?new C(1.9,.42,.07):new C(.12,.8,.12),ht=new yt().setFromAxisAngle(qt,d.yaw+Math.PI/2);Z.spawn(tt,rt,ht,mt,new C((Math.random()-.5)*8,(Math.random()-.5)*6,(Math.random()-.5)*8))}Q++,G.copy(d.center).setY(d.center.y+.6);try{const st=Ge().events;st.emit("track:barrierBreak",{s:(d.s0+d.s1)/2,side:d.side,carId:V.id,speedKmh:J*3.6,point:{x:G.x,y:G.y,z:G.z}}),V.id&&st.emit("vehicle:collision",{id:V.id,impulse:9e3,point:{x:G.x,y:G.y,z:G.z},otherId:"barrier",kind:"wall"})}catch{}},vt=(d,V,J)=>{d.cooldown=.6,d.bend=Math.min(.32,d.bend+J*.018),d.state==="intact"&&(d.state="bent");const st=new C(Math.cos(d.yaw),0,-Math.sin(d.yaw)).multiplyScalar(d.side*d.bend),nt=new yt().setFromAxisAngle(qt,d.yaw+Math.PI/2).multiply(new yt().setFromAxisAngle(new C(1,0,0),-d.side*d.bend*.6));z.setMatrixAt(d.board,Jt.compose(d.center.clone().add(st),nt,Me.set(1,1-d.bend*.3,1))),z.instanceMatrix.needsUpdate=!0,ot++;try{Ge().events.emit("track:barrierHit",{s:(d.s0+d.s1)/2,side:d.side,carId:V.id,perpKmh:J*3.6,saved:!0})}catch{}};return{objects:s,glows:a,colliders:i,breakableSegments:v.length,update(d){Z.update(d);for(const J of v)J.cooldown>0&&(J.cooldown-=d);if((U-=d)<=0&&(U=1,lt()),!v.length)return;const V=Math.ceil(c/8);for(const J of F){if(!e.world.getRigidBody(J.body.handle))continue;const st=J.body.translation(),nt=J.body.linvel();p.set(st.x,st.y,st.z),D.set(nt.x,nt.y,nt.z);let tt=o.spline.project(p,J.s);tt.distance>25&&(tt=o.spline.project(p)),J.s=tt.s;const rt=at.get((Math.floor(tt.s/8)%V+V)%V);if(!rt)continue;t.at(tt.s,r);const mt=(p.x-r.p.x)*r.r.x+(p.z-r.p.z)*r.r.z;for(const ht of rt){if(ht.state==="broken"||tt.s<ht.s0-1.5||tt.s>ht.s1+1.5||Math.sign(mt)!==ht.side||Math.abs(p.y-ht.center.y)>3)continue;const jt=(ht.side*(r.hw+Nt)-mt)*ht.side-es,Et=(D.x*r.r.x+D.z*r.r.z)*ht.side;if(Et>ts&&jt<Math.max(.5,Et*.07)){ft(ht,J,D.length());for(const St of v)St!==ht&&St.state!=="broken"&&St.side===ht.side&&Math.abs((St.s0+St.s1)/2-tt.s)<Yt*.9&&ft(St,J,D.length())}else Et>.6&&jt<.2&&ht.cooldown<=0&&vt(ht,J,Et)}}Y.size&&q()},stats:()=>({breaks:Q,hits:ot}),repairAll(){for(const d of v)if(d.state!=="intact"){zt.setFromAxisAngle(qt,d.yaw+Math.PI/2),z.setMatrixAt(d.board,Jt.compose(d.center,zt,Me.set(1,1,1))),d.state==="broken"&&Y.add(d.span);for(const V of d.posts)A.setMatrixAt(V,B[V]);d.state="intact",d.bend=0}z.instanceMatrix.needsUpdate=!0,A.instanceMatrix.needsUpdate=!0,q()}}}const Wt=new yt,Ne=new C(0,1,0),Se=13624575,ie=16757322;function fn(o,t,e,n){return o.rails.some(s=>s.side===e&&t>=s.s0-2&&t<=s.s1+2&&(!n||s.rule===n))}function is(){const o=[[new bt(.1,1.05,.1).translate(0,.525,0),0],[new bt(.104,.16,.104).translate(0,.74,0),-1],[new pe(.075,.17).translate(0,.9,.052),1]],t=[],e=[],n=[],s=[],a=[];for(const[c,i]of o){const l=t.length/3,h=(c.index,c);t.push(...h.getAttribute("position").array),e.push(...h.getAttribute("normal").array),n.push(...h.getAttribute("uv").array);for(let u=0;u<h.getAttribute("position").count;u++)s.push(i);for(const u of h.index.array)a.push(u+l)}const r=new Ot;return r.setAttribute("position",new dt(t,3)),r.setAttribute("normal",new dt(e,3)),r.setAttribute("uv",new dt(n,2)),r.setAttribute("aRefl",new dt(s,1)),r.setIndex(a),r}function ls(){const o=new gt({name:"tb_post",color:16777215,roughness:.55});return Ft(o,{key:"post",vertexPars:`attribute float aRefl;
attribute vec3 aRefC;
varying float vRefl;
varying vec3 vRefC;`,vertexMain:"vRefl = aRefl; vRefC = aRefC;",fragmentPars:`varying float vRefl;
varying vec3 vRefC;`,after:{map_fragment:`
        vec3 tbBody = vec3(0.62, 0.63, 0.62);
        diffuseColor.rgb = vRefl > 0.5 ? vRefC * 0.55 : (vRefl < -0.5 ? vec3(0.015) : tbBody);`,emissivemap_fragment:`
        float tbR = nrRetro(vTbWorld);
        totalEmissiveRadiance += vRefl > 0.5 ? vRefC * (0.12 + tbR * 6.0) : (vRefl < -0.5 ? vec3(0.0) : tbBody * tbR * 0.35);`}})}function hs(){const t=document.createElement("canvas");t.width=256*5,t.height=256;const e=t.getContext("2d");e.clearRect(0,0,t.width,t.height);const n=c=>{e.save(),e.translate(c+256/2,256/2),e.rotate(Math.PI/4);const i=256*.33;e.fillStyle="#111",ke(e,-i-8,-i-8,2*i+16,2*i+16,18),e.fill(),e.fillStyle="#e8c020",ke(e,-i,-i,2*i,2*i,14),e.fill(),e.restore()},s=(c,i,l)=>{e.save(),e.translate(c+256/2,256/2+8),i&&e.scale(-1,1),e.strokeStyle="#111",e.fillStyle="#111",e.lineWidth=15,e.lineCap="round",e.beginPath(),l?(e.moveTo(26,48),e.lineTo(26,-14),e.arc(0,-14,26,0,Math.PI,!0),e.lineTo(-26,16),e.stroke(),e.beginPath(),e.moveTo(-46,8),e.lineTo(-26,42),e.lineTo(-6,8)):(e.moveTo(14,46),e.bezierCurveTo(14,4,6,-16,-22,-34),e.stroke(),e.beginPath(),e.moveTo(-44,-40),e.lineTo(-10,-58),e.lineTo(-14,-22)),e.closePath(),e.fill(),e.restore()};for(let c=0;c<4;c++)n(c*256),s(c*256,c%2===1,c>=2);const a=4*256;e.fillStyle="#111",ke(e,a+34,12,188,232,30),e.fill(),e.fillStyle="#e9ecea",ke(e,a+44,22,168,212,22),e.fill(),e.fillStyle="#111",e.font='bold 150px "Arial Narrow", "Roboto Condensed", "Helvetica Neue", Arial, sans-serif',e.textAlign="center",e.textBaseline="middle",e.save(),e.translate(a+256/2,256/2+6),e.scale(.72,1.08),e.fillText("50",0,0),e.restore();const r=new de(t);return r.colorSpace=fe,r.anisotropy=4,r}function ke(o,t,e,n,s,a){o.beginPath(),o.moveTo(t+a,e),o.arcTo(t+n,e,t+n,e+s,a),o.arcTo(t+n,e+s,t,e+s,a),o.arcTo(t,e+s,t,e,a),o.arcTo(t,e,t+n,e,a),o.closePath()}function us(o){const t=new gt({name:"tb_sign",map:o,transparent:!1,alphaTest:.5,roughness:.5,side:me});return Ft(t,{key:"sign",vertexPars:"attribute float aCell;",vertexMain:`#ifdef USE_MAP
 vMapUv = vec2((uv.x + aCell) / 5.0, uv.y);
#endif`,after:{emissivemap_fragment:"totalEmissiveRadiance += diffuseColor.rgb * (0.04 + nrRetro(vTbWorld) * 1.4);"}})}function ps(o,t,e,n){const s=[],a=[],r=[],c=t.at(0),i=o.length,l=(F,U)=>e.isTunnel(F,U),h=(F,U)=>e.isBridge(F,U),u=[],x=[];for(let F=6;F<i;F+=25)if(!(l(F,12)||h(F,6))){t.at(F,c);for(const U of[-1,1]){if(fn(o,F,U,"breakable"))continue;const lt=fn(o,F,U,"solid"),p=U*(c.hw+(lt?Nt+.32:.95)),D=t.point(c,p,-.03);Wt.setFromAxisAngle(Ne,Math.atan2(-c.t.x,-c.t.z)),u.push(new it().compose(D,Wt,new C(1,lt?1.05:1,1))),x.push(U>0?16722458:15922420)}}const w=is(),m=new pt(w,ls(),u.length),f=new Float32Array(u.length*3),S=new et;u.forEach((F,U)=>{m.setMatrixAt(U,F),S.set(x[U]),f.set([S.r,S.g,S.b],U*3)}),w.setAttribute("aRefC",new Qe(f,3)),m.name="tb:edgePosts",m.computeBoundingSphere(),s.push(m);const v=[],N=[],E=[],z=(F,U,lt,p)=>{t.at(F,c);const D=U*(c.hw+1.75),G=t.point(c,D,-.03);G.y=Math.max(G.y,e.height(G.x,G.z)),Wt.setFromAxisAngle(Ne,Math.atan2(-c.t.x,-c.t.z)+U*.12),v.push(new it().compose(G.clone().setY(G.y+1.95),Wt,new C(p,p,1))),N.push(lt),E.push(new it().compose(G,Wt,new C(1,1,1)))};for(const F of o.corners){if(F.radius>150)continue;const U=F.s0-(F.hairpin?55:70);if(l(U,8)||h(U,4))continue;const lt=(F.hairpin?2:0)+(F.dir===1?1:0);z(U,1,lt,F.hairpin?1.15:1)}z(o.startS+12,1,4,1.05),z(o.startS+12,-1,4,1.05);const A=new pe(1,1),$=A.clone();$.setAttribute("aCell",new Qe(new Float32Array(N),1));const R=new pt($,us(hs()),v.length);v.forEach((F,U)=>R.setMatrixAt(U,F)),R.name="tb:signs",R.computeBoundingSphere();const O=new Te(.035,.035,1.95,6).translate(0,.975,-.04),H=new pt(O,n,E.length);E.forEach((F,U)=>H.setMatrixAt(U,F)),H.computeBoundingSphere(),s.push(R,H),A.dispose();const W=[[o.startS-60,1050,Se],[o.descentEndS-300,i+o.startS-70,Se]],M=[],I=[],j=[],T=[],B=[],g=8.6,y=(F,U,lt,p)=>{t.at(F,c);const D=U*(c.hw+2),G=t.point(c,D,0);G.y=Math.min(G.y,e.height(G.x,G.z)+.1)-.3;const ft=c.r.clone().multiplyScalar(-U),vt=Math.atan2(-ft.x,-ft.z);if(Wt.setFromAxisAngle(Ne,vt),M.push(new it().compose(G,Wt,new C(1,1,1))),lt){I.push(new it().compose(G,Wt,new C(1,1,1))),j.push(new it().compose(G,Wt,new C(1,1,1))),T.push(p);const V=G.clone().addScaledVector(ft,2.35).setY(G.y+g-.32),J=new et(p);a.push({pos:V.clone().setY(V.y-.12),color:J.clone().multiplyScalar(14),size:.9}),r.push({pos:V.clone().setY(V.y-.6),color:J.clone().multiplyScalar(p===ie?13:11),radius:21})}const d=new C(-ft.z,0,ft.x);return[-.75,.75].map(V=>G.clone().addScaledVector(d,V).setY(G.y+g-.25))};for(const[F,U,lt]of W){let p=null,D=0;for(let G=F;G<U;G+=46,D++){if(l(G,20)||h(G,10)){p=null;continue}t.at(G,c);const ft=Ht(o,G,1)>=Ht(o,G,-1)?1:-1,vt=y(G,ft,D%5===2,lt);if(p&&p[0].distanceTo(vt[0])<70)for(let d=0;d<2;d++)ds(p[d],vt[d],.9,B);p=vt}}for(const F of o.corners){if(!F.hairpin)continue;const U=(F.s0+F.s1)/2;y(U,F.dir===1?1:-1,!0,ie)}const k=o.corners.filter(F=>F.hairpin).slice(0,4);for(let F=0;F+1<k.length;F++){const U=k[F].s1,lt=k[F+1].s0;for(const p of[.3,.75]){const D=U+(lt-U)*p;t.at(D,c),y(D,Ht(o,D,1)>=Ht(o,D,-1)?1:-1,!0,F%2?Se:ie)}}for(const F of o.features)F.tag==="balcony"&&y(F.s0+40,1,!0,Se),F.tag==="crest"&&y(F.s0+10,1,!0,ie),F.tag==="bottom"&&y(F.s0+30,1,!0,ie);const L=new gt({name:"tb_wood",color:2892056,roughness:.9}),P=new Te(.11,.15,g,7).translate(0,g/2,0),b=new bt(1.8,.1,.1).translate(0,g-.3,0).rotateY(0),_=new pt(P,L,M.length),Y=new pt(b,L,M.length);M.forEach((F,U)=>{_.setMatrixAt(U,F),Y.setMatrixAt(U,F.clone().multiply(new it().makeRotationY(Math.PI/2)))});const X=new bt(.08,.08,2.4).translate(0,g-.15,-1.2),q=new pt(X,n,Math.max(1,I.length));I.forEach((F,U)=>q.setMatrixAt(U,F)),q.count=I.length;const Z=new bt(.34,.16,.7).translate(0,g-.32,-2.35),K=Ft(new gt({color:2236962,emissive:16777215,emissiveIntensity:5,roughness:.4}),{key:"lampHead",after:{emissivemap_fragment:`#ifdef USE_COLOR
 totalEmissiveRadiance *= vColor.rgb;
#endif`}}),Q=new pt(Z,K,Math.max(1,j.length));j.forEach((F,U)=>{Q.setMatrixAt(U,F),Q.setColorAt(U,new et(T[U]))}),Q.count=j.length;for(const F of[_,Y,q,Q])F.castShadow=F!==Q,F.computeBoundingSphere(),s.push(F);if(B.length){const F=new Ot;F.setAttribute("position",new dt(B,3));const U=new jn(F,new $n({color:658188}));U.name="tb:wires",s.push(U)}let ot=[],at=new Float32Array(0);return{objects:s,glows:a,lamps:r,update(F){ot.length!==r.length&&(ot=r.map((p,D)=>D),at=new Float32Array(r.length));for(let p=0;p<r.length;p++)at[p]=r[p].pos.distanceToSquared(F);ot.sort((p,D)=>at[p]-at[D]);const U=Ue.uLampP.value,lt=Ue.uLampC.value;for(let p=0;p<oe;p++){const D=r[ot[p]];if(!D){U[p].set(0,-1e5,0,1),lt[p].set(0,0,0);continue}U[p].set(D.pos.x,D.pos.y,D.pos.z,D.radius),lt[p].set(D.color.r,D.color.g,D.color.b)}}}}function ds(o,t,e,n){let a=o.x,r=o.y,c=o.z;for(let i=1;i<=8;i++){const l=i/8,h=o.x+(t.x-o.x)*l,u=o.z+(t.z-o.z)*l,x=o.y+(t.y-o.y)*l-e*4*l*(1-l);n.push(a,r,c,h,x,u),a=h,r=x,c=u}}const fs=38,mn=.3,Dt={s:0,p:new C,t:new C,r:new C,hw:0,bank:0},Kt=new C,wn=new yt,He=new C;function ms(o,t,e){const n=new Map,s=new Map;let a=0;const r=e.onContact((i,l)=>{const h=i.info?.kind==="car"?i:l.info?.kind==="car"?l:null;if(!h||(h===i?l:i).info?.kind!=="wall")return;const x=h.collider.parent();if(!x||!x.isDynamic())return;const w=n.get(x.handle);w?w.t=mn:n.set(x.handle,{body:x,t:mn,s:void 0,v0:s.get(x.handle)??null,glancing:null,keepSpeed:0,last:null})});return{update:i=>{if(e.world.forEachRigidBody(l=>{if(!l.isDynamic()||n.has(l.handle))return;const h=l.linvel(),u=s.get(l.handle);u?(u.x=h.x,u.z=h.z):s.set(l.handle,{x:h.x,z:h.z})}),!(!n.size||i<=0))for(const[l,h]of n){h.t-=i;const u=h.body;if(h.t<=0||!u.isValid()){n.delete(l);continue}const x=u.translation();Kt.set(x.x,x.y,x.z);let w=o.spline.project(Kt,h.s);if(w.distance>20&&(w=o.spline.project(Kt)),h.last!==null&&h.last.distanceToSquared(Kt)>225){n.delete(l);continue}(h.last??=new C).copy(Kt),h.s=w.s,t.at(w.s,Dt);const S=(Kt.x-Dt.p.x)*Dt.r.x+(Kt.z-Dt.p.z)*Dt.r.z>=0?1:-1,v=u.linvel(),N=Math.hypot(v.x,v.z);if(N<5)continue;let E=Dt.t.x,z=Dt.t.z;const A=Math.hypot(E,z)||1;E/=A,z/=A,E*v.x+z*v.z<0&&(E=-E,z=-z);const $=Dt.r.x*S,R=Dt.r.z*S,O=$*v.x+R*v.z;if(h.glancing===null){const k=h.v0??{x:v.x,z:v.z},L=Math.atan2(Math.max(0,$*k.x+R*k.z),Math.abs(E*k.x+z*k.z));h.glancing=L<_t.degToRad(fs),h.glancing&&(h.keepSpeed=Math.hypot(k.x,k.z)*(1-.4*Math.sin(L)**2),a++)}if(!h.glancing)continue;const H=Math.max(N,h.keepSpeed),W=Math.max(0,O);let M=v.x-$*W,I=v.z-R*W;const j=Math.hypot(M,I);j<.001?(M=E,I=z):(M/=j,I/=j),u.setLinvel({x:M*H,y:v.y,z:I*H},!0);const T=u.rotation();wn.set(T.x,T.y,T.z,T.w),He.set(0,0,-1).applyQuaternion(wn);const B=Math.atan2(-He.x,-He.z),g=Math.atan2(-M,-I);let y=B-g;if(y=Math.atan2(Math.sin(y),Math.cos(y)),Math.abs(y)<Math.PI/2){const k=u.angvel(),L=-y*5,P=1-Math.exp(-i*14);u.setAngvel({x:k.x,y:k.y+(L-k.y)*P,z:k.z},!0)}h.keepSpeed=0}},get count(){return a},dispose(){r(),n.clear(),s.clear()}}}const gn=5;async function xs(o,t){const e=performance.now(),n=new Ce;n.name=`track:${o.id}`;const s=Qn(),a=new oo(s),r=new no(s),c=s.length;await $t();const i=uo(),l=yo(s,a,i,t.physics);for(const b of l.meshes)n.add(b);await $t();const h=wo(t.renderer),u=ko(s,a,r,h,t.physics);for(const b of u.meshes)n.add(b);await $t();const x=zo(r,h);for(const b of x.meshes)n.add(b);await $t();const w=new gt({name:"tb_galv",color:8225416,metalness:.55,roughness:.42}),m=cs(s,a,t.physics,w);for(const b of m.objects)n.add(b);const f=ms(s,a,t.physics),S=ps(s,a,r,w);for(const b of S.objects)n.add(b);await $t();const v=Uo(s,a,r,h,t.physics,t.renderer),N=$o(a,r,t.physics);for(const b of[...v?.objects??[],...N?.objects??[]])n.add(b);S.lamps.push(...v?.lamps??[],...N?.lamps??[]),v&&Ze(b=>v.interior(b));const E=new Qo([...m.glows,...S.glows,...v?.glows??[],...N?.glows??[]],.00333);n.add(E.points),await $t();const z=t.quality.level==="low"?.45:t.quality.level==="med"?.75:1,A=Ko(s,a,r,t.seed,z);for(const b of A.objects)n.add(b);await $t();const $=Lo(t.seed);n.add($.group);const R=new C((r.bounds.min.x+r.bounds.max.x)/2,0,(r.bounds.min.y+r.bounds.max.y)/2);n.add(Ho(R,new C(...Pn)));let O=1/0;for(let b=0;b<c;b+=4)O=Math.min(O,s.spline.sampleAt(b).y);t.physics.addGroundPlane(Math.min(O,r.floor(0,0))-300),t.scene.add(n),n.updateMatrixWorld(!0),n.traverse(b=>{b.isLight||(b.matrixAutoUpdate=!1)});const H=[{id:"kestrel-descent",name:"KESTREL PASS",startS:s.startS,endS:s.descentEndS,favours:"rotor"}],W=s.rails.map(b=>({s0:b.s0,s1:b.s1,side:b.side,kind:b.rule==="breakable"?"breakable":"solid"})),M=a.at(0),I=(b,_)=>{a.at(_,M);const Y=(b.x-M.p.x)*M.r.x+(b.z-M.p.z)*M.r.z,X=a.heightAt(_,Y);if(r.isTunnel(_,4))return b.y<X-gn;if(b.y<X-gn)return!0;const q=Y>=0?1:-1,Z=Math.abs(Y)-(M.hw+ut);return Ht(s,_,q)<.5&&Z>3&&b.y<X-2};let j=0;const T=new C,B=new C,g=(b,_)=>{j+=b,ne.uTime.value=j,_.getWorldPosition(T),_.getWorldDirection(B),ne.uHeadPos.value.copy(T),ne.uHeadDir.value.copy(B),t.renderer.getDrawingBufferSize(y),$.update(j,y.y*.9),E.setPixelScale(y.y*.9),S.update(T),m.update(b),f.update(b)},y=new At,k=[],L=new Fn(o,s.spline,n,{halfWidth:b=>wt(s.halfWidth,b,c),startS:s.startS,checkpointCount:Math.max(4,Math.round(c/420)),onUpdate:g,onDispose:()=>{Ze(null),f.dispose();for(const b of k.splice(0))b()},stages:H,hazards:W,isFallen:I,heightAt:(b,_)=>a.heightAt(b,_)}),P={length:Math.round(c),stageLength:Math.round(s.descentEndS-s.startS),buildMs:Math.round(performance.now()-e),roadMeshes:l.meshes.length,terrainTris:u.triangles+x.triangles,barrierColliders:m.colliders,breakableSegments:m.breakableSegments,lamps:S.lamps.length,plants:A.instances,plantTris:A.triangles,hazards:W.length};try{const b=Ge();b.debug.register("trackInfo",()=>({...P,drawCalls:t.renderer.info.render.calls})),Ro(b,o.id,s,a);let _=0;k.push(b.events.on("vehicle:fell",()=>_++)),b.debug.registerStat("thornback",()=>{const Y=m.stats();return{tbBreaks:Y.breaks,tbHits:Y.hits,tbFalls:_,tbScrapes:f.count,tbEv:Math.round((b.scenes.current?.env?.exposureEv??0)*100)/100}})}catch{}return L}export{xs as buildThornback};
