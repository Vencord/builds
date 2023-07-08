// Vencord bea7a17
// Standalone: true
// Platform: Universal
"use strict";var Ne=Object.create;var Ln=Object.defineProperty;var Ge=Object.getOwnPropertyDescriptor;var ke=Object.getOwnPropertyNames;var Ve=Object.getPrototypeOf,Ue=Object.prototype.hasOwnProperty;var V=(n,e)=>()=>(n&&(e=n(n=0)),e);var Oe=(n,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of ke(e))!Ue.call(n,i)&&i!==t&&Ln(n,i,{get:()=>e[i],enumerable:!(r=Ge(e,i))||r.enumerable});return n};var Pe=(n,e,t)=>(t=n!=null?Ne(Ve(n)):{},Oe(e||!n||!n.__esModule?Ln(t,"default",{value:n,enumerable:!0}):t,n));var c=V(()=>{"use strict"});var $,dn=V(()=>{c();$="bea7a17"});var F,yn=V(()=>{c();F="Vendicated/Vencord"});var Wn,Kn=V(()=>{"use strict";c();dn();yn();Wn=`Vencord/${$}${F?` (https://github.com/${F})`:""}`});var fn=V(()=>{"use strict";c()});function j(n,e={}){return new Promise((t,r)=>{Fn.default.get(n,e,i=>{let{statusCode:o,statusMessage:s,headers:u}=i;if(o>=400)return void r(`${o}: ${s} - ${n}`);if(o>=300)return void t(j(u.location,e));let a=[];i.on("error",r),i.on("data",f=>a.push(f)),i.once("end",()=>t(Buffer.concat(a)))})})}var Fn,wn=V(()=>{"use strict";c();Fn=Pe(require("https"))});function nn(n){return async function(){try{return{ok:!0,value:await n(...arguments)}}catch(e){return{ok:!1,error:e instanceof Error?{...e}:e}}}}var jn,Bn=V(()=>{"use strict";c();jn=["vencordDesktopMain.js","preload.js","vencordDesktopRenderer.js","renderer.css"]});var We={};async function Yn(n){return j(Ze+n,{headers:{Accept:"application/vnd.github+json","User-Agent":Wn}})}async function Me(){if(!await Jn())return[];let e=await Yn(`/compare/${$}...HEAD`);return JSON.parse(e.toString("utf-8")).commits.map(r=>({hash:r.sha.slice(0,7),author:r.author.login,message:r.commit.message}))}async function Jn(){let n=await Yn("/releases/latest"),e=JSON.parse(n.toString());return e.name.slice(e.name.lastIndexOf(" ")+1)===$?!1:(e.assets.forEach(({name:r,browser_download_url:i})=>{jn.some(o=>r.startsWith(o))&&xn.push([r,i])}),!0)}async function Le(){return await Promise.all(xn.map(async([n,e])=>(0,Xn.writeFile)((0,Hn.join)(__dirname,n),await j(e)))),xn=[],!0}var en,Xn,Hn,Ze,xn,Qn=V(()=>{"use strict";c();Kn();fn();en=require("electron"),Xn=require("fs/promises"),Hn=require("path");dn();yn();wn();Bn();Ze=`https://api.github.com/repos/${F}`,xn=[];en.ipcMain.handle("VencordGetRepo",nn(()=>`https://github.com/${F}`));en.ipcMain.handle("VencordGetUpdates",nn(Me));en.ipcMain.handle("VencordUpdate",nn(Jn));en.ipcMain.handle("VencordBuild",nn(Le))});c();var Z=require("electron"),De=require("path");c();c();Promise.resolve().then(()=>Qn());c();fn();var bn=require("electron"),qn=require("https"),Ke=/^https:\/\/(spotify\.link|s\.team)\/.+$/;function $n(n){return new Promise((e,t)=>{let r=(0,qn.request)(new URL(n),{method:"HEAD"},i=>{e(i.headers.location?$n(i.headers.location):n)});r.on("error",t),r.end()})}bn.ipcMain.handle("VencordOIAResolveRedirect",async(n,e)=>Ke.test(e)?$n(e):e);c();fn();c();var tn=class{constructor(e=1/0){this.maxSize=e}queue=[];promise;next(){let e=this.queue.shift();e?this.promise=Promise.resolve().then(e).finally(()=>this.next()):this.promise=void 0}run(){this.promise||this.next()}push(e){this.size>=this.maxSize&&this.queue.shift(),this.queue.push(e),this.run()}unshift(e){this.size>=this.maxSize&&this.queue.pop(),this.queue.unshift(e),this.run()}get size(){return this.queue.length}};var A=require("electron"),an=require("fs"),_=require("fs/promises"),re=require("path");c();var ne="PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KICAgIDxoZWFkPgogICAgICAgIDxtZXRhIGNoYXJzZXQ9InV0Zi04IiAvPgogICAgICAgIDx0aXRsZT5WZW5jb3JkIFF1aWNrQ1NTIEVkaXRvcjwvdGl0bGU+CiAgICAgICAgPGxpbmsKICAgICAgICAgICAgcmVsPSJzdHlsZXNoZWV0IgogICAgICAgICAgICBocmVmPSJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuMzcuMS9taW4vdnMvZWRpdG9yL2VkaXRvci5tYWluLm1pbi5jc3MiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhNTEyLXdCM3hmTDk4aFdnMWJwa1ZZU3lMMGpzL0p4OXM3RnNEZzlhWU82bk9NU0pUZ1B1ay9QRnF4WFFKS0tTVWp0ZVpqZVlyZmdvOU5GQk9BMXI5SHdEdVp3PT0iCiAgICAgICAgICAgIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiCiAgICAgICAgICAgIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciIKICAgICAgICAvPgogICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgaHRtbCwKICAgICAgICAgICAgYm9keSwKICAgICAgICAgICAgI2NvbnRhaW5lciB7CiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgICAgICAgICBsZWZ0OiAwOwogICAgICAgICAgICAgICAgdG9wOiAwOwogICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7CiAgICAgICAgICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwOwogICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgICAgICAgICAgfQogICAgICAgIDwvc3R5bGU+CiAgICA8L2hlYWQ+CgogICAgPGJvZHk+CiAgICAgICAgPGRpdiBpZD0iY29udGFpbmVyIj48L2Rpdj4KICAgICAgICA8c2NyaXB0CiAgICAgICAgICAgIHNyYz0iaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbW9uYWNvLWVkaXRvci8wLjM3LjEvbWluL3ZzL2xvYWRlci5taW4uanMiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhNTEyLUErNlN2UEdrSU45UmYwbVVYbVc0eGg3ckR2QUxYZi9mMFZ0T1VpSGxEVVNQa251MmtjZnoxS3pMcE9KeUwycE8rblpTMTNoaElqTHFWZ2lRRXhMSnJ3PT0iCiAgICAgICAgICAgIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiCiAgICAgICAgICAgIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciIKICAgICAgICA+PC9zY3JpcHQ+CgogICAgICAgIDxzY3JpcHQ+CiAgICAgICAgICAgIHJlcXVpcmUuY29uZmlnKHsKICAgICAgICAgICAgICAgIHBhdGhzOiB7CiAgICAgICAgICAgICAgICAgICAgdnM6ICJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuMzcuMS9taW4vdnMiLAogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgfSk7CgogICAgICAgICAgICByZXF1aXJlKFsidnMvZWRpdG9yL2VkaXRvci5tYWluIl0sICgpID0+IHsKICAgICAgICAgICAgICAgIGdldEN1cnJlbnRDc3MoKS50aGVuKChjc3MpID0+IHsKICAgICAgICAgICAgICAgICAgICB2YXIgZWRpdG9yID0gbW9uYWNvLmVkaXRvci5jcmVhdGUoCiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJjb250YWluZXIiKSwKICAgICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNzcywKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAiY3NzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiBnZXRUaGVtZSgpLAogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICBlZGl0b3Iub25EaWRDaGFuZ2VNb2RlbENvbnRlbnQoKCkgPT4KICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3NzKGVkaXRvci5nZXRWYWx1ZSgpKQogICAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoInJlc2l6ZSIsICgpID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBtb25hY28gcmUtbGF5b3V0CiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRvci5sYXlvdXQoKTsKICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9KTsKICAgICAgICA8L3NjcmlwdD4KICAgIDwvYm9keT4KPC9odG1sPgo=";c();var ee=require("electron"),B=require("path"),Sn=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,B.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,B.join)(ee.app.getPath("userData"),"..","Vencord")),rn=(0,B.join)(Sn,"settings"),cn=(0,B.join)(rn,"quickCss.css"),Tn=(0,B.join)(rn,"settings.json"),te=["https:","http:","steam:","spotify:","com.epicgames.launcher:"];(0,an.mkdirSync)(rn,{recursive:!0});function Fe(){return(0,_.readFile)(cn,"utf-8").catch(()=>"")}function ie(){try{return(0,an.readFileSync)(Tn,"utf-8")}catch{return"{}"}}function ae(){try{return JSON.parse(ie())}catch{return{}}}A.ipcMain.handle("VencordOpenQuickCss",()=>A.shell.openPath(cn));A.ipcMain.handle("VencordOpenExternal",(n,e)=>{try{var{protocol:t}=new URL(e)}catch{throw"Malformed URL"}if(!te.includes(t))throw"Disallowed protocol.";A.shell.openExternal(e)});var je=new tn,Be=new tn;A.ipcMain.handle("VencordGetQuickCss",()=>Fe());A.ipcMain.handle("VencordSetQuickCss",(n,e)=>je.push(()=>(0,_.writeFile)(cn,e)));A.ipcMain.handle("VencordGetSettingsDir",()=>rn);A.ipcMain.on("VencordGetSettings",n=>n.returnValue=ie());A.ipcMain.handle("VencordSetSettings",(n,e)=>{Be.push(()=>(0,_.writeFile)(Tn,e))});A.ipcMain.handle("VencordOpenMonacoEditor",async()=>{await new A.BrowserWindow({title:"Vencord QuickCSS Editor",autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,re.join)(__dirname,"preload.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!1}}).loadURL(`data:text/html;base64,${ne}`)});c();var Se=require("electron");c();var ue=require("module"),_e=(0,ue.createRequire)("/"),hn,Xe=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{hn=_e("worker_threads").Worker}catch{}var He=hn?function(n,e,t,r,i){var o=!1,s=new hn(n+Xe,{eval:!0}).on("error",function(u){return i(u,null)}).on("message",function(u){return i(null,u)}).on("exit",function(u){u&&!o&&i(new Error("exited with code "+u),null)});return s.postMessage(t,r),s.terminate=function(){return o=!0,hn.prototype.terminate.call(s)},s}:function(n,e,t,r,i){setImmediate(function(){return i(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var o=function(){};return{terminate:o,postMessage:o}},C=Uint8Array,U=Uint16Array,Rn=Uint32Array,zn=new C([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Nn=new C([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),fe=new C([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ce=function(n,e){for(var t=new U(31),r=0;r<31;++r)t[r]=e+=1<<n[r-1];for(var i=new Rn(t[30]),r=1;r<30;++r)for(var o=t[r];o<t[r+1];++o)i[o]=o-t[r]<<5|r;return[t,i]},le=ce(zn,2),Gn=le[0],Ye=le[1];Gn[28]=258,Ye[258]=28;var he=ce(Nn,0),ge=he[0],nr=he[1],pn=new U(32768);for(l=0;l<32768;++l)R=(l&43690)>>>1|(l&21845)<<1,R=(R&52428)>>>2|(R&13107)<<2,R=(R&61680)>>>4|(R&3855)<<4,pn[l]=((R&65280)>>>8|(R&255)<<8)>>>1;var R,l,X=function(n,e,t){for(var r=n.length,i=0,o=new U(e);i<r;++i)n[i]&&++o[n[i]-1];var s=new U(e);for(i=0;i<e;++i)s[i]=s[i-1]+o[i-1]<<1;var u;if(t){u=new U(1<<e);var a=15-e;for(i=0;i<r;++i)if(n[i])for(var f=i<<4|n[i],h=e-n[i],g=s[n[i]-1]++<<h,x=g|(1<<h)-1;g<=x;++g)u[pn[g]>>>a]=f}else for(u=new U(r),i=0;i<r;++i)n[i]&&(u[i]=pn[s[n[i]-1]++]>>>15-n[i]);return u},on=new C(288);for(l=0;l<144;++l)on[l]=8;var l;for(l=144;l<256;++l)on[l]=9;var l;for(l=256;l<280;++l)on[l]=7;var l;for(l=280;l<288;++l)on[l]=8;var l,ve=new C(32);for(l=0;l<32;++l)ve[l]=5;var l;var pe=X(on,9,1);var me=X(ve,5,1),gn=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},w=function(n,e,t){var r=e/8|0;return(n[r]|n[r+1]<<8)>>(e&7)&t},vn=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},Ie=function(n){return(n+7)/8|0},mn=function(n,e,t){(e==null||e<0)&&(e=0),(t==null||t>n.length)&&(t=n.length);var r=new(n.BYTES_PER_ELEMENT==2?U:n.BYTES_PER_ELEMENT==4?Rn:C)(t-e);return r.set(n.subarray(e,t)),r};var Ce=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],d=function(n,e,t){var r=new Error(e||Ce[n]);if(r.code=n,Error.captureStackTrace&&Error.captureStackTrace(r,d),!t)throw r;return r},Ae=function(n,e,t){var r=n.length;if(!r||t&&t.f&&!t.l)return e||new C(0);var i=!e||t,o=!t||t.i;t||(t={}),e||(e=new C(r*3));var s=function(Pn){var Zn=e.length;if(Pn>Zn){var Mn=new C(Math.max(Zn*2,Pn));Mn.set(e),e=Mn}},u=t.f||0,a=t.p||0,f=t.b||0,h=t.l,g=t.d,x=t.m,z=t.n,Y=r*8;do{if(!h){u=w(n,a,1);var O=w(n,a+1,3);if(a+=3,O)if(O==1)h=pe,g=me,x=9,z=5;else if(O==2){var G=w(n,a,31)+257,M=w(n,a+10,15)+4,J=G+w(n,a+5,31)+1;a+=14;for(var P=new C(J),Q=new C(19),p=0;p<M;++p)Q[fe[p]]=w(n,a+p*3,7);a+=M*3;for(var D=gn(Q),sn=(1<<D)-1,L=X(Q,D,1),p=0;p<J;){var b=L[w(n,a,sn)];a+=b&15;var v=b>>>4;if(v<16)P[p++]=v;else{var W=0,un=0;for(v==16?(un=3+w(n,a,3),a+=2,W=P[p-1]):v==17?(un=3+w(n,a,7),a+=3):v==18&&(un=11+w(n,a,127),a+=7);un--;)P[p++]=W}}var Vn=P.subarray(0,G),k=P.subarray(G);x=gn(Vn),z=gn(k),h=X(Vn,x,1),g=X(k,z,1)}else d(1);else{var v=Ie(a)+4,y=n[v-4]|n[v-3]<<8,N=v+y;if(N>r){o&&d(0);break}i&&s(f+y),e.set(n.subarray(v,N),f),t.b=f+=y,t.p=a=N*8,t.f=u;continue}if(a>Y){o&&d(0);break}}i&&s(f+131072);for(var Re=(1<<x)-1,ze=(1<<z)-1,In=a;;In=a){var W=h[vn(n,a)&Re],K=W>>>4;if(a+=W&15,a>Y){o&&d(0);break}if(W||d(2),K<256)e[f++]=K;else if(K==256){In=a,h=null;break}else{var Un=K-254;if(K>264){var p=K-257,q=zn[p];Un=w(n,a,(1<<q)-1)+Gn[p],a+=q}var Cn=g[vn(n,a)&ze],An=Cn>>>4;Cn||d(3),a+=Cn&15;var k=ge[An];if(An>3){var q=Nn[An];k+=vn(n,a)&(1<<q)-1,a+=q}if(a>Y){o&&d(0);break}i&&s(f+131072);for(var On=f+Un;f<On;f+=4)e[f]=e[f-k],e[f+1]=e[f+1-k],e[f+2]=e[f+2-k],e[f+3]=e[f+3-k];f=On}}t.l=h,t.p=In,t.b=f,t.f=u,h&&(u=1,t.m=x,t.d=g,t.n=z)}while(!u);return f==e.length?e:mn(e,0,f)};var Je=new C(0);var Qe=function(n,e){var t={};for(var r in n)t[r]=n[r];for(var r in e)t[r]=e[r];return t},oe=function(n,e,t){for(var r=n(),i=n.toString(),o=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),s=0;s<r.length;++s){var u=r[s],a=o[s];if(typeof u=="function"){e+=";"+a+"=";var f=u.toString();if(u.prototype)if(f.indexOf("[native code]")!=-1){var h=f.indexOf(" ",8)+1;e+=f.slice(h,f.indexOf("(",h))}else{e+=f;for(var g in u.prototype)e+=";"+a+".prototype."+g+"="+u.prototype[g].toString()}else e+=f}else t[a]=u}return[e,t]},ln=[],be=function(n){var e=[];for(var t in n)n[t].buffer&&e.push((n[t]=new n[t].constructor(n[t])).buffer);return e},qe=function(n,e,t,r){var i;if(!ln[t]){for(var o="",s={},u=n.length-1,a=0;a<u;++a)i=oe(n[a],o,s),o=i[0],s=i[1];ln[t]=oe(n[u],o,s)}var f=Qe({},ln[t][1]);return He(ln[t][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",t,f,be(f),r)},$e=function(){return[C,U,Rn,zn,Nn,fe,Gn,ge,pe,me,pn,Ce,X,gn,w,vn,Ie,mn,d,Ae,kn,de,ye]};var de=function(n){return postMessage(n,[n.buffer])},ye=function(n){return n&&n.size&&new C(n.size)},nt=function(n,e,t,r,i,o){var s=qe(t,r,i,function(u,a){s.terminate(),o(u,a)});return s.postMessage([n,e],e.consume?[n.buffer]:[]),function(){s.terminate()}};var T=function(n,e){return n[e]|n[e+1]<<8},S=function(n,e){return(n[e]|n[e+1]<<8|n[e+2]<<16|n[e+3]<<24)>>>0},En=function(n,e){return S(n,e)+S(n,e+4)*4294967296};function et(n,e,t){return t||(t=e,e={}),typeof t!="function"&&d(7),nt(n,e,[$e],function(r){return de(kn(r.data[0],ye(r.data[1])))},1,t)}function kn(n,e){return Ae(n,e)}var Dn=typeof TextDecoder<"u"&&new TextDecoder,tt=0;try{Dn.decode(Je,{stream:!0}),tt=1}catch{}var rt=function(n){for(var e="",t=0;;){var r=n[t++],i=(r>127)+(r>223)+(r>239);if(t+i>n.length)return[e,mn(n,t-1)];i?i==3?(r=((r&15)<<18|(n[t++]&63)<<12|(n[t++]&63)<<6|n[t++]&63)-65536,e+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?e+=String.fromCharCode((r&31)<<6|n[t++]&63):e+=String.fromCharCode((r&15)<<12|(n[t++]&63)<<6|n[t++]&63):e+=String.fromCharCode(r)}};function it(n,e){if(e){for(var t="",r=0;r<n.length;r+=16384)t+=String.fromCharCode.apply(null,n.subarray(r,r+16384));return t}else{if(Dn)return Dn.decode(n);var i=rt(n),o=i[0],s=i[1];return s.length&&d(8),o}}var at=function(n,e){return e+30+T(n,e+26)+T(n,e+28)},ot=function(n,e,t){var r=T(n,e+28),i=it(n.subarray(e+46,e+46+r),!(T(n,e+8)&2048)),o=e+46+r,s=S(n,e+20),u=t&&s==4294967295?st(n,o):[s,S(n,e+24),S(n,e+42)],a=u[0],f=u[1],h=u[2];return[T(n,e+10),a,f,i,o+T(n,e+30)+T(n,e+32),h]},st=function(n,e){for(;T(n,e)!=1;e+=4+T(n,e+2));return[En(n,e+12),En(n,e+4),En(n,e+20)]};var se=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(n){n()};function we(n,e,t){t||(t=e,e={}),typeof t!="function"&&d(7);var r=[],i=function(){for(var v=0;v<r.length;++v)r[v]()},o={},s=function(v,y){se(function(){t(v,y)})};se(function(){s=t});for(var u=n.length-22;S(n,u)!=101010256;--u)if(!u||n.length-u>65558)return s(d(13,0,1),null),i;var a=T(n,u+8);if(a){var f=a,h=S(n,u+16),g=h==4294967295||f==65535;if(g){var x=S(n,u-12);g=S(n,x)==101075792,g&&(f=a=S(n,x+32),h=S(n,x+48))}for(var z=e&&e.filter,Y=function(v){var y=ot(n,h,g),N=y[0],G=y[1],M=y[2],J=y[3],P=y[4],Q=y[5],p=at(n,Q);h=P;var D=function(L,b){L?(i(),s(L,null)):(b&&(o[J]=b),--a||s(null,o))};if(!z||z({name:J,size:G,originalSize:M,compression:N}))if(!N)D(null,mn(n,p,p+G));else if(N==8){var sn=n.subarray(p,p+G);if(G<32e4)try{D(null,kn(sn,new C(M)))}catch(L){D(L,null)}else r.push(et(sn,{size:M},D))}else D(d(14,"unknown compression type "+N,1),null);else D(null,null)},O=0;O<f;++O)Y(O)}else s(null,{});return i}var Te=require("fs"),E=require("fs/promises"),H=require("path");c();function xe(n){function e(s,u,a,f){let h=0;return h+=s<<0,h+=u<<8,h+=a<<16,h+=f<<24>>>0,h}if(n[0]===80&&n[1]===75&&n[2]===3&&n[3]===4)return n;if(n[0]!==67||n[1]!==114||n[2]!==50||n[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let t=n[4]===3,r=n[4]===2;if(!r&&!t||n[5]||n[6]||n[7])throw new Error("Unexpected crx format version number.");if(r){let s=e(n[8],n[9],n[10],n[11]),u=e(n[12],n[13],n[14],n[15]),a=16+s+u;return n.subarray(a,n.length)}let o=12+e(n[8],n[9],n[10],n[11]);return n.subarray(o,n.length)}wn();var ut=(0,H.join)(Sn,"ExtensionCache");async function ft(n,e){return await(0,E.mkdir)(e,{recursive:!0}),new Promise((t,r)=>{we(n,(i,o)=>{if(i)return void r(i);Promise.all(Object.keys(o).map(async s=>{if(s.startsWith("_metadata/"))return;if(s.endsWith("/"))return void(0,E.mkdir)((0,H.join)(e,s),{recursive:!0});let u=s.split("/"),a=u.pop(),f=u.join("/"),h=(0,H.join)(e,f);f&&await(0,E.mkdir)(h,{recursive:!0}),await(0,E.writeFile)((0,H.join)(h,a),o[s])})).then(()=>t()).catch(s=>{(0,E.rm)(e,{recursive:!0,force:!0}),r(s)})})})}async function Ee(n){let e=(0,H.join)(ut,`${n}`);try{await(0,E.access)(e,Te.constants.F_OK)}catch{let r=n==="fmkadmapgofadopljbjfkapdkoienihi"?"https://raw.githubusercontent.com/Vendicated/random-files/f6f550e4c58ac5f2012095a130406c2ab25b984d/fmkadmapgofadopljbjfkapdkoienihi.zip":`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${n}%26uc&prodversion=32`,i=await j(r,{headers:{"User-Agent":"Vencord (https://github.com/Vendicated/Vencord)"}});await ft(xe(i),e).catch(console.error)}Se.session.defaultSession.loadExtension(e)}Z.app.whenReady().then(()=>{Z.protocol.registerFileProtocol("vencord",({url:r},i)=>{let o=r.slice(10);switch(o.endsWith("/")&&(o=o.slice(0,-1)),o){case"renderer.js.map":case"vencordDesktopRenderer.js.map":case"preload.js.map":case"patcher.js.map":case"vencordDesktopMain.js.map":i((0,De.join)(__dirname,o));break;default:i({statusCode:403})}});try{ae().enableReactDevtools&&Ee("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(r=>console.error("[Vencord] Failed to install React Developer Tools",r))}catch{}let n=r=>{let i={};return r.split(";").forEach(o=>{let[s,...u]=o.trim().split(/\s+/g);s&&!Object.prototype.hasOwnProperty.call(i,s)&&(i[s]=u)}),i},e=r=>Object.entries(r).filter(([,i])=>i?.length).map(i=>i.flat().join(" ")).join("; ");function t(r,i){if(i in r){let o=n(r[i][0]);for(let s of["style-src","connect-src","img-src","font-src","media-src","worker-src"])o[s]=["*","blob:","data:","'unsafe-inline'"];o["script-src"]??=[],o["script-src"].push("'unsafe-eval'","https://unpkg.com","https://cdnjs.cloudflare.com"),r[i]=[e(o)]}}Z.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:r,resourceType:i},o)=>{r&&(i==="mainFrame"&&t(r,"content-security-policy"),i==="stylesheet"&&(r["content-type"]=["text/css"])),o({cancel:!1,responseHeaders:r})}),Z.session.defaultSession.webRequest.onHeadersReceived=()=>{}});
//# sourceURL=VencordDesktopMain
//# sourceMappingURL=vencord://vencordDesktopMain.js.map
/*! For license information please see vencordDesktopMain.js.LEGAL.txt */
