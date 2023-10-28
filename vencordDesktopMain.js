// Vencord 4b958d1
// Standalone: true
// Platform: Universal
// Updater disabled: false
"use strict";var Zn=Object.create;var Be=Object.defineProperty;var Wn=Object.getOwnPropertyDescriptor;var Fn=Object.getOwnPropertyNames;var Kn=Object.getPrototypeOf,jn=Object.prototype.hasOwnProperty;var P=(e,n)=>()=>(e&&(n=e(e=0)),n);var Bn=(e,n,r,t)=>{if(n&&typeof n=="object"||typeof n=="function")for(let i of Fn(n))!jn.call(e,i)&&i!==r&&Be(e,i,{get:()=>n[i],enumerable:!(t=Wn(n,i))||t.enumerable});return e};var Hn=(e,n,r)=>(r=e!=null?Zn(Kn(e)):{},Bn(n||!e||!e.__esModule?Be(r,"default",{value:e,enumerable:!0}):r,e));var f=P(()=>{"use strict"});var te,xe=P(()=>{f();te="4b958d1"});var B,Ee=P(()=>{f();B="Vendicated/Vencord"});var He,be=P(()=>{"use strict";f();xe();Ee();He=`Vencord/${te}${B?` (https://github.com/${B})`:""}`});var he=P(()=>{"use strict";f()});function H(e,n={}){return new Promise((r,t)=>{Ye.default.get(e,n,i=>{let{statusCode:o,statusMessage:a,headers:s}=i;if(o>=400)return void t(`${o}: ${a} - ${e}`);if(o>=300)return void r(H(s.location,n));let c=[];i.on("error",t),i.on("data",u=>c.push(u)),i.once("end",()=>r(Buffer.concat(c)))})})}var Ye,De=P(()=>{"use strict";f();Ye=Hn(require("https"))});function ie(e){return async function(){try{return{ok:!0,value:await e(...arguments)}}catch(n){return{ok:!1,error:n instanceof Error?{...n}:n}}}}var Xe,Je=P(()=>{"use strict";f();Xe=["vencordDesktopMain.js","vencordDesktopPreload.js","vencordDesktopRenderer.js","vencordDesktopRenderer.css"]});var Jn={};async function en(e){return H(bn+e,{headers:{Accept:"application/vnd.github+json","User-Agent":He}})}async function Yn(){if(!await nn())return[];let n=await en(`/compare/${te}...HEAD`);return JSON.parse(n.toString("utf-8")).commits.map(t=>({hash:t.sha.slice(0,7),author:t.author.login,message:t.commit.message}))}async function nn(){let e=await en("/releases/latest"),n=JSON.parse(e.toString());return n.name.slice(n.name.lastIndexOf(" ")+1)===te?!1:(n.assets.forEach(({name:t,browser_download_url:i})=>{Xe.some(o=>t.startsWith(o))&&Re.push([t,i])}),!0)}async function Xn(){return await Promise.all(Re.map(async([e,n])=>(0,qe.writeFile)((0,$e.join)(__dirname,e),await H(n)))),Re=[],!0}var ae,qe,$e,bn,Re,rn=P(()=>{"use strict";f();be();he();ae=require("electron"),qe=require("fs/promises"),$e=require("path");xe();Ee();De();Je();bn=`https://api.github.com/repos/${B}`,Re=[];ae.ipcMain.handle("VencordGetRepo",ie(()=>`https://github.com/${B}`));ae.ipcMain.handle("VencordGetUpdates",ie(Yn));ae.ipcMain.handle("VencordUpdate",ie(nn));ae.ipcMain.handle("VencordBuild",ie(Xn))});f();var Z=require("electron"),_n=require("path");f();f();Promise.resolve().then(()=>rn());f();he();var b=require("electron"),tn=require("fs/promises"),an=require("https"),oe=require("path");b.app.on("browser-window-created",(e,n)=>{n.webContents.on("frame-created",(r,{frame:t})=>{t.once("dom-ready",()=>{if(t.url.startsWith("https://open.spotify.com/embed/")){let i=ge().plugins?.FixSpotifyEmbeds;if(!i?.enabled)return;t.executeJavaScript(`
                    const original = Audio.prototype.play;
                    Audio.prototype.play = function() {
                        this.volume = ${i.volume/100||.1};
                        return original.apply(this, arguments);
                    }
                `)}})})});var Qn=/^https:\/\/(spotify\.link|s\.team)\/.+$/;function on(e){return new Promise((n,r)=>{let t=(0,an.request)(new URL(e),{method:"HEAD"},i=>{n(i.headers.location?on(i.headers.location):e)});t.on("error",r),t.end()})}b.ipcMain.handle("VencordOIAResolveRedirect",async(e,n)=>Qn.test(n)?on(n):n);b.ipcMain.handle("VencordVMReadRecording",async(e,n)=>{n=(0,oe.normalize)(n);let r=(0,oe.basename)(n),t=(0,oe.normalize)(b.app.getPath("userData")+"/");if(console.log(r,t,n),r!=="recording.ogg"||!n.startsWith(t))return null;try{let i=await(0,tn.readFile)(n);return new Uint8Array(i.buffer)}catch{return null}});f();he();f();var se=class{constructor(n=1/0){this.maxSize=n}queue=[];promise;next(){let n=this.queue.shift();n?this.promise=Promise.resolve().then(n).finally(()=>this.next()):this.promise=void 0}run(){this.promise||this.next()}push(n){this.size>=this.maxSize&&this.queue.shift(),this.queue.push(n),this.run()}unshift(n){this.size>=this.maxSize&&this.queue.pop(),this.queue.unshift(n),this.run()}get size(){return this.queue.length}};var g=require("electron"),X=require("fs"),R=require("fs/promises"),Y=require("path");f();var sn="PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KICAgIDxoZWFkPgogICAgICAgIDxtZXRhIGNoYXJzZXQ9InV0Zi04IiAvPgogICAgICAgIDx0aXRsZT5WZW5jb3JkIFF1aWNrQ1NTIEVkaXRvcjwvdGl0bGU+CiAgICAgICAgPGxpbmsKICAgICAgICAgICAgcmVsPSJzdHlsZXNoZWV0IgogICAgICAgICAgICBocmVmPSJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuNDAuMC9taW4vdnMvZWRpdG9yL2VkaXRvci5tYWluLm1pbi5jc3MiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhNTEyLU1Pb1EwMmg4MGhrbGNjZkxyWEZZa0N6RytXVmpPUmZsT3A5WnA4ZGx0aWFSUCszNUxZbk80TEtPa2xSNjRvTUdmR2dKRExPOFdKcGtNMW81Z1pYWVpRPT0iCiAgICAgICAgICAgIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiCiAgICAgICAgICAgIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciIKICAgICAgICAvPgogICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgaHRtbCwKICAgICAgICAgICAgYm9keSwKICAgICAgICAgICAgI2NvbnRhaW5lciB7CiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgICAgICAgICBsZWZ0OiAwOwogICAgICAgICAgICAgICAgdG9wOiAwOwogICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7CiAgICAgICAgICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwOwogICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgICAgICAgICAgfQogICAgICAgIDwvc3R5bGU+CiAgICA8L2hlYWQ+CgogICAgPGJvZHk+CiAgICAgICAgPGRpdiBpZD0iY29udGFpbmVyIj48L2Rpdj4KICAgICAgICA8c2NyaXB0CiAgICAgICAgICAgIHNyYz0iaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbW9uYWNvLWVkaXRvci8wLjQwLjAvbWluL3ZzL2xvYWRlci5taW4uanMiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhNTEyLVF6TXBYZUNQY2lBSFA0d2JZbFYyUFlnclFjYUVrRFFVanprUFU0eG5qeVZTRDlUMzYvdWRhbXh0TkJxYjRxSzQvYk1RTVBaOGF5ckJlOWhyR2RCRmpRPT0iCiAgICAgICAgICAgIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiCiAgICAgICAgICAgIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciIKICAgICAgICA+PC9zY3JpcHQ+CgogICAgICAgIDxzY3JpcHQ+CiAgICAgICAgICAgIHJlcXVpcmUuY29uZmlnKHsKICAgICAgICAgICAgICAgIHBhdGhzOiB7CiAgICAgICAgICAgICAgICAgICAgdnM6ICJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuNDAuMC9taW4vdnMiLAogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgfSk7CgogICAgICAgICAgICByZXF1aXJlKFsidnMvZWRpdG9yL2VkaXRvci5tYWluIl0sICgpID0+IHsKICAgICAgICAgICAgICAgIGdldEN1cnJlbnRDc3MoKS50aGVuKChjc3MpID0+IHsKICAgICAgICAgICAgICAgICAgICB2YXIgZWRpdG9yID0gbW9uYWNvLmVkaXRvci5jcmVhdGUoCiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJjb250YWluZXIiKSwKICAgICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNzcywKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAiY3NzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiBnZXRUaGVtZSgpLAogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICBlZGl0b3Iub25EaWRDaGFuZ2VNb2RlbENvbnRlbnQoKCkgPT4KICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3NzKGVkaXRvci5nZXRWYWx1ZSgpKQogICAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoInJlc2l6ZSIsICgpID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBtb25hY28gcmUtbGF5b3V0CiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRvci5sYXlvdXQoKTsKICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9KTsKICAgICAgICA8L3NjcmlwdD4KICAgIDwvYm9keT4KPC9odG1sPgo=";f();var qn=/[^\S\r\n]*?\r?(?:\r\n|\n)[^\S\r\n]*?\*[^\S\r\n]?/,$n=/^\\@/;function Ge(e,n={}){return{fileName:e,name:n.name??e.replace(/\.css$/i,""),author:n.author??"Unknown Author",description:n.description??"A Discord Theme.",version:n.version,license:n.license,source:n.source,website:n.website,invite:n.invite}}function cn(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function un(e,n){if(!e)return Ge(n);let r=e.split("/**",2)?.[1]?.split("*/",1)?.[0];if(!r)return Ge(n);let t={},i="",o="";for(let a of r.split(qn))if(a.length!==0)if(a.charAt(0)==="@"&&a.charAt(1)!==" "){t[i]=o.trim();let s=a.indexOf(" ");i=a.substring(1,s),o=a.substring(s+1)}else o+=" "+a.replace("\\n",`
`).replace($n,"@");return t[i]=o.trim(),delete t[""],Ge(n,t)}f();var fn=require("electron"),L=require("path"),pe=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,L.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,L.join)(fn.app.getPath("userData"),"..","Vencord")),ce=(0,L.join)(pe,"settings"),M=(0,L.join)(pe,"themes"),ve=(0,L.join)(ce,"quickCss.css"),ze=(0,L.join)(ce,"settings.json"),ln=["https:","http:","steam:","spotify:","com.epicgames.launcher:"];f();var hn=require("electron");function gn(e){e.webContents.setWindowOpenHandler(({url:n})=>{switch(n){case"about:blank":case"https://discord.com/popout":case"https://ptb.discord.com/popout":case"https://canary.discord.com/popout":return{action:"allow"}}try{var{protocol:r}=new URL(n)}catch{return{action:"deny"}}switch(r){case"http:":case"https:":case"mailto:":case"steam:":case"spotify:":hn.shell.openExternal(n)}return{action:"deny"}})}(0,X.mkdirSync)(ce,{recursive:!0});(0,X.mkdirSync)(M,{recursive:!0});function ke(e,n){let r=(0,Y.normalize)(e),t=(0,Y.join)(e,n),i=(0,Y.normalize)(t);return i.startsWith(r)?i:null}function er(){return(0,R.readFile)(ve,"utf-8").catch(()=>"")}async function nr(){let e=await(0,R.readdir)(M).catch(()=>[]),n=[];for(let r of e){if(!r.endsWith(".css"))continue;let t=await pn(r).then(cn).catch(()=>null);t!=null&&n.push(un(t,r))}return n}function pn(e){e=e.replace(/\?v=\d+$/,"");let n=ke(M,e);return n?(0,R.readFile)(n,"utf-8"):Promise.reject(`Unsafe path ${e}`)}function vn(){try{return(0,X.readFileSync)(ze,"utf-8")}catch{return"{}"}}function ge(){try{return JSON.parse(vn())}catch{return{}}}g.ipcMain.handle("VencordOpenQuickCss",()=>g.shell.openPath(ve));g.ipcMain.handle("VencordOpenExternal",(e,n)=>{try{var{protocol:r}=new URL(n)}catch{throw"Malformed URL"}if(!ln.includes(r))throw"Disallowed protocol.";g.shell.openExternal(n)});var rr=new se,tr=new se;g.ipcMain.handle("VencordGetQuickCss",()=>er());g.ipcMain.handle("VencordSetQuickCss",(e,n)=>rr.push(()=>(0,R.writeFile)(ve,n)));g.ipcMain.handle("VencordGetThemesDir",()=>M);g.ipcMain.handle("VencordGetThemesList",()=>nr());g.ipcMain.handle("VencordGetThemeData",(e,n)=>pn(n));g.ipcMain.handle("VencordGetThemeSystemValues",()=>({"os-accent-color":`#${g.systemPreferences.getAccentColor?.()||""}`}));g.ipcMain.handle("VencordGetSettingsDir",()=>ce);g.ipcMain.on("VencordGetSettings",e=>e.returnValue=vn());g.ipcMain.handle("VencordSetSettings",(e,n)=>{tr.push(()=>(0,R.writeFile)(ze,n))});g.ipcMain.handle("VencordOpenMonacoEditor",async()=>{let e=new g.BrowserWindow({title:"Vencord QuickCSS Editor",autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,Y.join)(__dirname,"vencordDesktopPreload.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!1}});gn(e),await e.loadURL(`data:text/html;base64,${sn}`)});f();var Pn=require("electron");f();var An=require("module"),ir=(0,An.createRequire)("/"),Ie,ar=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{Ie=ir("worker_threads").Worker}catch{}var or=Ie?function(e,n,r,t,i){var o=!1,a=new Ie(e+ar,{eval:!0}).on("error",function(s){return i(s,null)}).on("message",function(s){return i(null,s)}).on("exit",function(s){s&&!o&&i(new Error("exited with code "+s),null)});return a.postMessage(r,t),a.terminate=function(){return o=!0,Ie.prototype.terminate.call(a)},a}:function(e,n,r,t,i){setImmediate(function(){return i(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var o=function(){};return{terminate:o,postMessage:o}},C=Uint8Array,V=Uint16Array,Pe=Uint32Array,Ve=new C([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ne=new C([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Cn=new C([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),dn=function(e,n){for(var r=new V(31),t=0;t<31;++t)r[t]=n+=1<<e[t-1];for(var i=new Pe(r[30]),t=1;t<30;++t)for(var o=r[t];o<r[t+1];++o)i[o]=o-r[t]<<5|t;return[r,i]},yn=dn(Ve,2),_e=yn[0],sr=yn[1];_e[28]=258,sr[258]=28;var wn=dn(Ne,0),Sn=wn[0],yt=wn[1],de=new V(32768);for(l=0;l<32768;++l)G=(l&43690)>>>1|(l&21845)<<1,G=(G&52428)>>>2|(G&13107)<<2,G=(G&61680)>>>4|(G&3855)<<4,de[l]=((G&65280)>>>8|(G&255)<<8)>>>1;var G,l,J=function(e,n,r){for(var t=e.length,i=0,o=new V(n);i<t;++i)e[i]&&++o[e[i]-1];var a=new V(n);for(i=0;i<n;++i)a[i]=a[i-1]+o[i-1]<<1;var s;if(r){s=new V(1<<n);var c=15-n;for(i=0;i<t;++i)if(e[i])for(var u=i<<4|e[i],h=n-e[i],m=a[e[i]-1]++<<h,S=m|(1<<h)-1;m<=S;++m)s[de[m]>>>c]=u}else for(s=new V(t),i=0;i<t;++i)e[i]&&(s[i]=de[a[e[i]-1]++]>>>15-e[i]);return s},ue=new C(288);for(l=0;l<144;++l)ue[l]=8;var l;for(l=144;l<256;++l)ue[l]=9;var l;for(l=256;l<280;++l)ue[l]=7;var l;for(l=280;l<288;++l)ue[l]=8;var l,Tn=new C(32);for(l=0;l<32;++l)Tn[l]=5;var l;var xn=J(ue,9,1);var En=J(Tn,5,1),Ae=function(e){for(var n=e[0],r=1;r<e.length;++r)e[r]>n&&(n=e[r]);return n},w=function(e,n,r){var t=n/8|0;return(e[t]|e[t+1]<<8)>>(n&7)&r},Ce=function(e,n){var r=n/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(n&7)},Dn=function(e){return(e+7)/8|0},ye=function(e,n,r){(n==null||n<0)&&(n=0),(r==null||r>e.length)&&(r=e.length);var t=new(e.BYTES_PER_ELEMENT==2?V:e.BYTES_PER_ELEMENT==4?Pe:C)(r-n);return t.set(e.subarray(n,r)),t};var Rn=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],d=function(e,n,r){var t=new Error(n||Rn[e]);if(t.code=e,Error.captureStackTrace&&Error.captureStackTrace(t,d),!r)throw t;return t},Gn=function(e,n,r){var t=e.length;if(!t||r&&r.f&&!r.l)return n||new C(0);var i=!n||r,o=!r||r.i;r||(r={}),n||(n=new C(t*3));var a=function(Fe){var Ke=n.length;if(Fe>Ke){var je=new C(Math.max(Ke*2,Fe));je.set(n),n=je}},s=r.f||0,c=r.p||0,u=r.b||0,h=r.l,m=r.d,S=r.m,z=r.n,q=t*8;do{if(!h){s=w(e,c,1);var N=w(e,c+1,3);if(c+=3,N)if(N==1)h=xn,m=En,S=9,z=5;else if(N==2){var U=w(e,c,31)+257,W=w(e,c+10,15)+4,$=U+w(e,c+5,31)+1;c+=14;for(var _=new C($),ee=new C(19),A=0;A<W;++A)ee[Cn[A]]=w(e,c+A*3,7);c+=W*3;for(var D=Ae(ee),fe=(1<<D)-1,F=J(ee,D,1),A=0;A<$;){var ne=F[w(e,c,fe)];c+=ne&15;var I=ne>>>4;if(I<16)_[A++]=I;else{var K=0,le=0;for(I==16?(le=3+w(e,c,3),c+=2,K=_[A-1]):I==17?(le=3+w(e,c,7),c+=3):I==18&&(le=11+w(e,c,127),c+=7);le--;)_[A++]=K}}var Me=_.subarray(0,U),O=_.subarray(U);S=Ae(Me),z=Ae(O),h=J(Me,S,1),m=J(O,z,1)}else d(1);else{var I=Dn(c)+4,y=e[I-4]|e[I-3]<<8,k=I+y;if(k>t){o&&d(0);break}i&&a(u+y),n.set(e.subarray(I,k),u),r.b=u+=y,r.p=c=k*8,r.f=s;continue}if(c>q){o&&d(0);break}}i&&a(u+131072);for(var Ln=(1<<S)-1,Mn=(1<<z)-1,we=c;;we=c){var K=h[Ce(e,c)&Ln],j=K>>>4;if(c+=K&15,c>q){o&&d(0);break}if(K||d(2),j<256)n[u++]=j;else if(j==256){we=c,h=null;break}else{var Ze=j-254;if(j>264){var A=j-257,re=Ve[A];Ze=w(e,c,(1<<re)-1)+_e[A],c+=re}var Se=m[Ce(e,c)&Mn],Te=Se>>>4;Se||d(3),c+=Se&15;var O=Sn[Te];if(Te>3){var re=Ne[Te];O+=Ce(e,c)&(1<<re)-1,c+=re}if(c>q){o&&d(0);break}i&&a(u+131072);for(var We=u+Ze;u<We;u+=4)n[u]=n[u-O],n[u+1]=n[u+1-O],n[u+2]=n[u+2-O],n[u+3]=n[u+3-O];u=We}}r.l=h,r.p=we,r.b=u,r.f=s,h&&(s=1,r.m=S,r.d=m,r.n=z)}while(!s);return u==n.length?n:ye(n,0,u)};var cr=new C(0);var ur=function(e,n){var r={};for(var t in e)r[t]=e[t];for(var t in n)r[t]=n[t];return r},mn=function(e,n,r){for(var t=e(),i=e.toString(),o=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),a=0;a<t.length;++a){var s=t[a],c=o[a];if(typeof s=="function"){n+=";"+c+"=";var u=s.toString();if(s.prototype)if(u.indexOf("[native code]")!=-1){var h=u.indexOf(" ",8)+1;n+=u.slice(h,u.indexOf("(",h))}else{n+=u;for(var m in s.prototype)n+=";"+c+".prototype."+m+"="+s.prototype[m].toString()}else n+=u}else r[c]=s}return[n,r]},me=[],fr=function(e){var n=[];for(var r in e)e[r].buffer&&n.push((e[r]=new e[r].constructor(e[r])).buffer);return n},lr=function(e,n,r,t){var i;if(!me[r]){for(var o="",a={},s=e.length-1,c=0;c<s;++c)i=mn(e[c],o,a),o=i[0],a=i[1];me[r]=mn(e[s],o,a)}var u=ur({},me[r][1]);return or(me[r][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+n.toString()+"}",r,u,fr(u),t)},hr=function(){return[C,V,Pe,Ve,Ne,Cn,_e,Sn,xn,En,de,Rn,J,Ae,w,Ce,Dn,ye,d,Gn,Le,zn,kn]};var zn=function(e){return postMessage(e,[e.buffer])},kn=function(e){return e&&e.size&&new C(e.size)},gr=function(e,n,r,t,i,o){var a=lr(r,t,i,function(s,c){a.terminate(),o(s,c)});return a.postMessage([e,n],n.consume?[e.buffer]:[]),function(){a.terminate()}};var x=function(e,n){return e[n]|e[n+1]<<8},T=function(e,n){return(e[n]|e[n+1]<<8|e[n+2]<<16|e[n+3]<<24)>>>0},Ue=function(e,n){return T(e,n)+T(e,n+4)*4294967296};function pr(e,n,r){return r||(r=n,n={}),typeof r!="function"&&d(7),gr(e,n,[hr],function(t){return zn(Le(t.data[0],kn(t.data[1])))},1,r)}function Le(e,n){return Gn(e,n)}var Oe=typeof TextDecoder<"u"&&new TextDecoder,vr=0;try{Oe.decode(cr,{stream:!0}),vr=1}catch{}var mr=function(e){for(var n="",r=0;;){var t=e[r++],i=(t>127)+(t>223)+(t>239);if(r+i>e.length)return[n,ye(e,r-1)];i?i==3?(t=((t&15)<<18|(e[r++]&63)<<12|(e[r++]&63)<<6|e[r++]&63)-65536,n+=String.fromCharCode(55296|t>>10,56320|t&1023)):i&1?n+=String.fromCharCode((t&31)<<6|e[r++]&63):n+=String.fromCharCode((t&15)<<12|(e[r++]&63)<<6|e[r++]&63):n+=String.fromCharCode(t)}};function Ir(e,n){if(n){for(var r="",t=0;t<e.length;t+=16384)r+=String.fromCharCode.apply(null,e.subarray(t,t+16384));return r}else{if(Oe)return Oe.decode(e);var i=mr(e),o=i[0],a=i[1];return a.length&&d(8),o}}var Ar=function(e,n){return n+30+x(e,n+26)+x(e,n+28)},Cr=function(e,n,r){var t=x(e,n+28),i=Ir(e.subarray(n+46,n+46+t),!(x(e,n+8)&2048)),o=n+46+t,a=T(e,n+20),s=r&&a==4294967295?dr(e,o):[a,T(e,n+24),T(e,n+42)],c=s[0],u=s[1],h=s[2];return[x(e,n+10),c,u,i,o+x(e,n+30)+x(e,n+32),h]},dr=function(e,n){for(;x(e,n)!=1;n+=4+x(e,n+2));return[Ue(e,n+12),Ue(e,n+4),Ue(e,n+20)]};var In=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(e){e()};function Un(e,n,r){r||(r=n,n={}),typeof r!="function"&&d(7);var t=[],i=function(){for(var I=0;I<t.length;++I)t[I]()},o={},a=function(I,y){In(function(){r(I,y)})};In(function(){a=r});for(var s=e.length-22;T(e,s)!=101010256;--s)if(!s||e.length-s>65558)return a(d(13,0,1),null),i;var c=x(e,s+8);if(c){var u=c,h=T(e,s+16),m=h==4294967295||u==65535;if(m){var S=T(e,s-12);m=T(e,S)==101075792,m&&(u=c=T(e,S+32),h=T(e,S+48))}for(var z=n&&n.filter,q=function(I){var y=Cr(e,h,m),k=y[0],U=y[1],W=y[2],$=y[3],_=y[4],ee=y[5],A=Ar(e,ee);h=_;var D=function(F,ne){F?(i(),a(F,null)):(ne&&(o[$]=ne),--c||a(null,o))};if(!z||z({name:$,size:U,originalSize:W,compression:k}))if(!k)D(null,ye(e,A,A+U));else if(k==8){var fe=e.subarray(A,A+U);if(U<32e4)try{D(null,Le(fe,new C(W)))}catch(F){D(F,null)}else t.push(pr(fe,{size:W},D))}else D(d(14,"unknown compression type "+k,1),null);else D(null,null)},N=0;N<u;++N)q(N)}else a(null,{});return i}var Vn=require("fs"),E=require("fs/promises"),Q=require("path");f();function On(e){function n(a,s,c,u){let h=0;return h+=a<<0,h+=s<<8,h+=c<<16,h+=u<<24>>>0,h}if(e[0]===80&&e[1]===75&&e[2]===3&&e[3]===4)return e;if(e[0]!==67||e[1]!==114||e[2]!==50||e[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let r=e[4]===3,t=e[4]===2;if(!t&&!r||e[5]||e[6]||e[7])throw new Error("Unexpected crx format version number.");if(t){let a=n(e[8],e[9],e[10],e[11]),s=n(e[12],e[13],e[14],e[15]),c=16+a+s;return e.subarray(c,e.length)}let o=12+n(e[8],e[9],e[10],e[11]);return e.subarray(o,e.length)}De();var yr=(0,Q.join)(pe,"ExtensionCache");async function wr(e,n){return await(0,E.mkdir)(n,{recursive:!0}),new Promise((r,t)=>{Un(e,(i,o)=>{if(i)return void t(i);Promise.all(Object.keys(o).map(async a=>{if(a.startsWith("_metadata/"))return;if(a.endsWith("/"))return void(0,E.mkdir)((0,Q.join)(n,a),{recursive:!0});let s=a.split("/"),c=s.pop(),u=s.join("/"),h=(0,Q.join)(n,u);u&&await(0,E.mkdir)(h,{recursive:!0}),await(0,E.writeFile)((0,Q.join)(h,c),o[a])})).then(()=>r()).catch(a=>{(0,E.rm)(n,{recursive:!0,force:!0}),t(a)})})})}async function Nn(e){let n=(0,Q.join)(yr,`${e}`);try{await(0,E.access)(n,Vn.constants.F_OK)}catch{let t=e==="fmkadmapgofadopljbjfkapdkoienihi"?"https://raw.githubusercontent.com/Vendicated/random-files/f6f550e4c58ac5f2012095a130406c2ab25b984d/fmkadmapgofadopljbjfkapdkoienihi.zip":`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${e}%26uc&prodversion=32`,i=await H(t,{headers:{"User-Agent":"Vencord (https://github.com/Vendicated/Vencord)"}});await wr(On(i),n).catch(console.error)}Pn.session.defaultSession.loadExtension(n)}Z.app.whenReady().then(()=>{Z.protocol.registerFileProtocol("vencord",({url:i},o)=>{let a=i.slice(10);if(a.endsWith("/")&&(a=a.slice(0,-1)),a.startsWith("/themes/")){let s=a.slice(8),c=ke(M,s);if(!c){o({statusCode:403});return}o(c.replace(/\?v=\d+$/,""));return}switch(a){case"renderer.js.map":case"vencordDesktopRenderer.js.map":case"preload.js.map":case"vencordDesktopPreload.js.map":case"patcher.js.map":case"vencordDesktopMain.js.map":o((0,_n.join)(__dirname,a));break;default:o({statusCode:403})}});try{ge().enableReactDevtools&&Nn("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(i=>console.error("[Vencord] Failed to install React Developer Tools",i))}catch{}let e=(i,o)=>Object.keys(i).find(a=>a.toLowerCase()===o),n=i=>{let o={};return i.split(";").forEach(a=>{let[s,...c]=a.trim().split(/\s+/g);s&&!Object.prototype.hasOwnProperty.call(o,s)&&(o[s]=c)}),o},r=i=>Object.entries(i).filter(([,o])=>o?.length).map(o=>o.flat().join(" ")).join("; "),t=i=>{let o=e(i,"content-security-policy");if(o){let a=n(i[o][0]);for(let s of["style-src","connect-src","img-src","font-src","media-src","worker-src"])a[s]??=[],a[s].push("*","blob:","data:","vencord:","'unsafe-inline'");a["script-src"]??=[],a["script-src"].push("'unsafe-eval'","https://unpkg.com","https://cdnjs.cloudflare.com"),i[o]=[r(a)]}};Z.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:i,resourceType:o},a)=>{if(i&&(o==="mainFrame"&&t(i),o==="stylesheet")){let s=e(i,"content-type");s&&(i[s]=["text/css"])}a({cancel:!1,responseHeaders:i})}),Z.session.defaultSession.webRequest.onHeadersReceived=()=>{}});
//# sourceURL=VencordDesktopMain
//# sourceMappingURL=vencord://vencordDesktopMain.js.map
/*! For license information please see vencordDesktopMain.js.LEGAL.txt */
