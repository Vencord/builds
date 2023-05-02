// Vencord c62d05e
// Standalone: true
// Platform: Universal
"use strict";var Jn=Object.create;var Ee=Object.defineProperty;var Qn=Object.getOwnPropertyDescriptor;var $n=Object.getOwnPropertyNames;var er=Object.getPrototypeOf,nr=Object.prototype.hasOwnProperty;var C=(e,n)=>()=>(e&&(n=e(e=0)),n);var Xe=(e,n,r,t)=>{if(n&&typeof n=="object"||typeof n=="function")for(let i of $n(n))!nr.call(e,i)&&i!==r&&Ee(e,i,{get:()=>n[i],enumerable:!(t=Qn(n,i))||t.enumerable});return e};var De=(e,n,r)=>(r=e!=null?Jn(er(e)):{},Xe(n||!e||!e.__esModule?Ee(r,"default",{value:e,enumerable:!0}):r,e)),Je=e=>Xe(Ee({},"__esModule",{value:!0}),e);var l=C(()=>{"use strict"});var oe,Re=C(()=>{l();oe="c62d05e"});var q,ze=C(()=>{l();q="Vendicated/Vencord"});var Qe,$e=C(()=>{"use strict";l();Re();ze();Qe=`Vencord/${oe}${q?` (https://github.com/${q})`:""}`});var Ne=C(()=>{"use strict";l()});function Y(e,n={}){return new Promise((r,t)=>{en.default.get(e,n,i=>{let{statusCode:a,statusMessage:s,headers:u}=i;if(a>=400)return void t(`${a}: ${s} - ${e}`);if(a>=300)return void r(Y(u.location,n));let o=[];i.on("error",t),i.on("data",c=>o.push(c)),i.once("end",()=>r(Buffer.concat(o)))})})}var en,ke=C(()=>{"use strict";l();en=De(require("https"))});function se(e){return async function(){try{return{ok:!0,value:await e(...arguments)}}catch(n){return{ok:!1,error:n instanceof Error?{...n}:n}}}}var nn,rn=C(()=>{"use strict";l();nn=["patcher.js","preload.js","renderer.js","renderer.css"]});var or={};async function on(e){return Y(tr+e,{headers:{Accept:"application/vnd.github+json","User-Agent":Qe}})}async function ir(){if(!await sn())return[];let n=await on(`/compare/${oe}...HEAD`);return JSON.parse(n.toString("utf-8")).commits.map(t=>({hash:t.sha.slice(0,7),author:t.author.login,message:t.commit.message}))}async function sn(){let e=await on("/releases/latest"),n=JSON.parse(e.toString());return n.name.slice(n.name.lastIndexOf(" ")+1)===oe?!1:(n.assets.forEach(({name:t,browser_download_url:i})=>{nn.some(a=>t.startsWith(a))&&Ge.push([t,i])}),!0)}async function ar(){return await Promise.all(Ge.map(async([e,n])=>(0,tn.writeFile)((0,an.join)(__dirname,e),await Y(n)))),Ge=[],!0}var ue,tn,an,tr,Ge,un=C(()=>{"use strict";l();$e();Ne();ue=require("electron"),tn=require("fs/promises"),an=require("path");Re();ze();ke();rn();tr=`https://api.github.com/repos/${q}`,Ge=[];ue.ipcMain.handle("VencordGetRepo",se(()=>`https://github.com/${q}`));ue.ipcMain.handle("VencordGetUpdates",se(ir));ue.ipcMain.handle("VencordUpdate",se(sn));ue.ipcMain.handle("VencordBuild",se(ar))});var cn=C(()=>{"use strict";l();Promise.resolve().then(()=>un())});function ln(e,n=300){let r;return function(...t){clearTimeout(r),r=setTimeout(()=>{e(...t)},n)}}var fn=C(()=>{"use strict";l()});var ce,hn=C(()=>{"use strict";l();ce=class{constructor(n=1/0){this.maxSize=n}queue=[];promise;next(){let n=this.queue.shift();n?this.promise=Promise.resolve().then(n).finally(()=>this.next()):this.promise=void 0}run(){this.promise||this.next()}push(n){this.size>=this.maxSize&&this.queue.shift(),this.queue.push(n),this.run()}unshift(n){this.size>=this.maxSize&&this.queue.pop(),this.queue.unshift(n),this.run()}get size(){return this.queue.length}}});var gn,pn=C(()=>{l();gn="PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KICAgIDxoZWFkPgogICAgICAgIDxtZXRhIGNoYXJzZXQ9InV0Zi04IiAvPgogICAgICAgIDx0aXRsZT5WZW5jb3JkIFF1aWNrQ1NTIEVkaXRvcjwvdGl0bGU+CiAgICAgICAgPGxpbmsKICAgICAgICAgICAgcmVsPSJzdHlsZXNoZWV0IgogICAgICAgICAgICBocmVmPSJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuMzcuMS9taW4vdnMvZWRpdG9yL2VkaXRvci5tYWluLm1pbi5jc3MiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhNTEyLXdCM3hmTDk4aFdnMWJwa1ZZU3lMMGpzL0p4OXM3RnNEZzlhWU82bk9NU0pUZ1B1ay9QRnF4WFFKS0tTVWp0ZVpqZVlyZmdvOU5GQk9BMXI5SHdEdVp3PT0iCiAgICAgICAgICAgIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiCiAgICAgICAgICAgIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciIKICAgICAgICAvPgogICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgaHRtbCwKICAgICAgICAgICAgYm9keSwKICAgICAgICAgICAgI2NvbnRhaW5lciB7CiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgICAgICAgICBsZWZ0OiAwOwogICAgICAgICAgICAgICAgdG9wOiAwOwogICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7CiAgICAgICAgICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwOwogICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgICAgICAgICAgfQogICAgICAgIDwvc3R5bGU+CiAgICA8L2hlYWQ+CgogICAgPGJvZHk+CiAgICAgICAgPGRpdiBpZD0iY29udGFpbmVyIj48L2Rpdj4KICAgICAgICA8c2NyaXB0CiAgICAgICAgICAgIHNyYz0iaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbW9uYWNvLWVkaXRvci8wLjM3LjEvbWluL3ZzL2xvYWRlci5taW4uanMiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhNTEyLUErNlN2UEdrSU45UmYwbVVYbVc0eGg3ckR2QUxYZi9mMFZ0T1VpSGxEVVNQa251MmtjZnoxS3pMcE9KeUwycE8rblpTMTNoaElqTHFWZ2lRRXhMSnJ3PT0iCiAgICAgICAgICAgIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiCiAgICAgICAgICAgIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciIKICAgICAgICA+PC9zY3JpcHQ+CgogICAgICAgIDxzY3JpcHQ+CiAgICAgICAgICAgIHJlcXVpcmUuY29uZmlnKHsKICAgICAgICAgICAgICAgIHBhdGhzOiB7CiAgICAgICAgICAgICAgICAgICAgdnM6ICJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuMzcuMS9taW4vdnMiLAogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgfSk7CgogICAgICAgICAgICByZXF1aXJlKFsidnMvZWRpdG9yL2VkaXRvci5tYWluIl0sICgpID0+IHsKICAgICAgICAgICAgICAgIGdldEN1cnJlbnRDc3MoKS50aGVuKChjc3MpID0+IHsKICAgICAgICAgICAgICAgICAgICB2YXIgZWRpdG9yID0gbW9uYWNvLmVkaXRvci5jcmVhdGUoCiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJjb250YWluZXIiKSwKICAgICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNzcywKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAiY3NzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiBnZXRUaGVtZSgpLAogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICBlZGl0b3Iub25EaWRDaGFuZ2VNb2RlbENvbnRlbnQoKCkgPT4KICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3NzKGVkaXRvci5nZXRWYWx1ZSgpKQogICAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoInJlc2l6ZSIsICgpID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBtb25hY28gcmUtbGF5b3V0CiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRvci5sYXlvdXQoKTsKICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9KTsKICAgICAgICA8L3NjcmlwdD4KICAgIDwvYm9keT4KPC9odG1sPgo="});var vn,X,Ve,le,J,Oe,mn,ve,fe=C(()=>{"use strict";l();vn=require("electron"),X=require("path"),Ve=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,X.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,X.join)(vn.app.getPath("userData"),"..","Vencord")),le=(0,X.join)(Ve,"settings"),J=(0,X.join)(le,"quickCss.css"),Oe=(0,X.join)(le,"settings.json"),mn=["https:","http:","steam:","spotify:"],ve=process.argv.includes("--vanilla")});function Cn(){return(0,F.readFile)(J,"utf-8").catch(()=>"")}function An(){try{return(0,Q.readFileSync)(Oe,"utf-8")}catch{return"{}"}}function me(){try{return JSON.parse(An())}catch{return{}}}function dn(e){(0,F.open)(J,"a+").then(n=>{n.close(),(0,Q.watch)(J,{persistent:!1},ln(async()=>{e.webContents.postMessage("VencordQuickCssUpdate",await Cn())},50))})}var d,Q,F,In,sr,ur,Ue=C(()=>{"use strict";l();cn();fn();Ne();hn();d=require("electron"),Q=require("fs"),F=require("fs/promises"),In=require("path");pn();fe();(0,Q.mkdirSync)(le,{recursive:!0});d.ipcMain.handle("VencordOpenQuickCss",()=>d.shell.openPath(J));d.ipcMain.handle("VencordOpenExternal",(e,n)=>{try{var{protocol:r}=new URL(n)}catch{throw"Malformed URL"}if(!mn.includes(r))throw"Disallowed protocol.";d.shell.openExternal(n)});sr=new ce,ur=new ce;d.ipcMain.handle("VencordGetQuickCss",()=>Cn());d.ipcMain.handle("VencordSetQuickCss",(e,n)=>sr.push(()=>(0,F.writeFile)(J,n)));d.ipcMain.handle("VencordGetSettingsDir",()=>le);d.ipcMain.on("VencordGetSettings",e=>e.returnValue=An());d.ipcMain.handle("VencordSetSettings",(e,n)=>{ur.push(()=>(0,F.writeFile)(Oe,n))});d.ipcMain.handle("VencordOpenMonacoEditor",async()=>{await new d.BrowserWindow({title:"Vencord QuickCSS Editor",autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,In.join)(__dirname,"preload.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!1}}).loadURL(`data:text/html;base64,${gn}`)})});function Kn(e,n,r){let t=n;if(n in e)return void r(e[t]);Object.defineProperty(e,n,{set(i){delete e[t],e[t]=i,r(i)},configurable:!0,enumerable:!1})}var _n=C(()=>{"use strict";l()});var Nr={};function Rr(e,n){let r=e.slice(4).split(".").map(Number),t=n.slice(4).split(".").map(Number);for(let i=0;i<t.length;i++){if(r[i]>t[i])return!0;if(r[i]<t[i])return!1}return!1}function Bn(){try{let e=(0,w.dirname)(process.execPath),n=(0,w.basename)(e),r=(0,w.join)(e,".."),t=(0,S.readdirSync)(r).reduce((u,o)=>o.startsWith("app-")&&Rr(o,u)?o:u,n);if(t===n)return;let i=(0,w.join)(r,t,"resources"),a=(0,w.join)(i,"app.asar"),s=(0,w.join)(i,"_app.asar");if(!(0,S.existsSync)(a)||(0,S.statSync)(a).isDirectory())return;console.info("[Vencord] Detected Host Update. Repatching..."),(0,S.renameSync)(a,s),(0,S.mkdirSync)(a),(0,S.writeFileSync)((0,w.join)(a,"package.json"),JSON.stringify({name:"discord",main:"index.js"})),(0,S.writeFileSync)((0,w.join)(a,"index.js"),`require(${JSON.stringify((0,w.join)(__dirname,"patcher.js"))});`)}catch(e){console.error("[Vencord] Failed to repatch latest host update",e)}}function zr(){try{let e=(0,w.join)(require.main.filename,"..","autoStart","win32.js"),{update:n}=require(e);require.cache[e].exports.update=function(){n.apply(this,arguments),Bn()}}catch{let{quitAndInstall:e}=K.autoUpdater;K.autoUpdater.quitAndInstall=function(){Bn(),e.call(this)}}}var K,S,w,jn,bn=C(()=>{"use strict";l();K=require("electron"),S=require("fs"),w=require("path"),{setAppUserModelId:jn}=K.app;K.app.setAppUserModelId=function(e){K.app.setAppUserModelId=jn,jn.call(this,e),zr()}});var Or={};var R,W,kr,Gr,_e,Vr,Hn=C(()=>{"use strict";l();_n();R=De(require("electron")),W=require("path");Ue();fe();console.log("[Vencord] Starting up...");kr=require.main.filename,Gr=require.main.path.endsWith("app.asar")?"_app.asar":"app.asar",_e=(0,W.join)((0,W.dirname)(kr),"..",Gr),Vr=require((0,W.join)(_e,"package.json"));require.main.filename=(0,W.join)(_e,Vr.main);R.app.setAppPath(_e);if(ve)console.log("[Vencord] Running in vanilla mode. Not loading Vencord");else{let e=me();if(process.platform==="win32"&&(bn(),e.winCtrlQ)){let t=R.Menu.buildFromTemplate;R.Menu.buildFromTemplate=function(i){if(i[0]?.label==="&File"){let{submenu:a}=i[0];Array.isArray(a)&&a.push({label:"Quit (Hidden)",visible:!1,acceleratorWorksWhenHidden:!0,accelerator:"Control+Q",click:()=>R.app.quit()})}return t.call(this,i)}}class n extends R.default.BrowserWindow{constructor(i){if(i?.webPreferences?.preload&&i.title){let a=i.webPreferences.preload;i.webPreferences.preload=(0,W.join)(__dirname,"preload.js"),i.webPreferences.sandbox=!1,e.frameless?i.frame=!1:process.platform==="win32"&&e.winNativeTitleBar&&delete i.frame,e.transparentUNSAFE_USE_AT_OWN_RISK&&(i.transparent=!0,i.backgroundColor="#00000000"),e.macosTranslucency&&process.platform==="darwin"&&(i.backgroundColor="#00000000",i.vibrancy="sidebar"),process.env.DISCORD_PRELOAD=a,super(i),dn(this)}else super(i)}}Object.assign(n,R.default.BrowserWindow),Object.defineProperty(n,"name",{value:"BrowserWindow",configurable:!0});let r=require.resolve("electron");delete require.cache[r].exports,require.cache[r].exports={...R.default,BrowserWindow:n},Kn(global,"appSettings",t=>{t.set("DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING",!0),e.disableMinSize?(t.set("MIN_WIDTH",0),t.set("MIN_HEIGHT",0)):(t.set("MIN_WIDTH",940),t.set("MIN_HEIGHT",500))}),process.env.DATA_DIR=(0,W.join)(R.app.getPath("userData"),"..","Vencord")}console.log("[Vencord] Loading original Discord app.asar");require(require.main.filename)});l();var _=require("electron"),qn=require("path");Ue();fe();l();var Zn=require("electron");l();var Sn=require("module"),cr=(0,Sn.createRequire)("/"),Ce,lr=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{Ce=cr("worker_threads").Worker}catch{}var fr=Ce?function(e,n,r,t,i){var a=!1,s=new Ce(e+lr,{eval:!0}).on("error",function(u){return i(u,null)}).on("message",function(u){return i(null,u)}).on("exit",function(u){u&&!a&&i(new Error("exited with code "+u),null)});return s.postMessage(r,t),s.terminate=function(){return a=!0,Ce.prototype.terminate.call(s)},s}:function(e,n,r,t,i){setImmediate(function(){return i(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var a=function(){};return{terminate:a,postMessage:a}},A=Uint8Array,M=Uint16Array,We=Uint32Array,Ze=new A([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Le=new A([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),xn=new A([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Tn=function(e,n){for(var r=new M(31),t=0;t<31;++t)r[t]=n+=1<<e[t-1];for(var i=new We(r[30]),t=1;t<30;++t)for(var a=r[t];a<r[t+1];++a)i[a]=a-r[t]<<5|t;return[r,i]},En=Tn(Ze,2),Fe=En[0],hr=En[1];Fe[28]=258,hr[258]=28;var Dn=Tn(Le,0),Rn=Dn[0],yt=Dn[1],ye=new M(32768);for(f=0;f<32768;++f)G=(f&43690)>>>1|(f&21845)<<1,G=(G&52428)>>>2|(G&13107)<<2,G=(G&61680)>>>4|(G&3855)<<4,ye[f]=((G&65280)>>>8|(G&255)<<8)>>>1;var G,f,$=function(e,n,r){for(var t=e.length,i=0,a=new M(n);i<t;++i)e[i]&&++a[e[i]-1];var s=new M(n);for(i=0;i<n;++i)s[i]=s[i-1]+a[i-1]<<1;var u;if(r){u=new M(1<<n);var o=15-n;for(i=0;i<t;++i)if(e[i])for(var c=i<<4|e[i],h=n-e[i],v=s[e[i]-1]++<<h,E=v|(1<<h)-1;v<=E;++v)u[ye[v]>>>o]=c}else for(u=new M(t),i=0;i<t;++i)e[i]&&(u[i]=ye[s[e[i]-1]++]>>>15-e[i]);return u},he=new A(288);for(f=0;f<144;++f)he[f]=8;var f;for(f=144;f<256;++f)he[f]=9;var f;for(f=256;f<280;++f)he[f]=7;var f;for(f=280;f<288;++f)he[f]=8;var f,zn=new A(32);for(f=0;f<32;++f)zn[f]=5;var f;var Nn=$(he,9,1);var kn=$(zn,5,1),Ae=function(e){for(var n=e[0],r=1;r<e.length;++r)e[r]>n&&(n=e[r]);return n},T=function(e,n,r){var t=n/8|0;return(e[t]|e[t+1]<<8)>>(n&7)&r},de=function(e,n){var r=n/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(n&7)},Gn=function(e){return(e+7)/8|0},we=function(e,n,r){(n==null||n<0)&&(n=0),(r==null||r>e.length)&&(r=e.length);var t=new(e.BYTES_PER_ELEMENT==2?M:e.BYTES_PER_ELEMENT==4?We:A)(r-n);return t.set(e.subarray(n,r)),t};var Vn=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],y=function(e,n,r){var t=new Error(n||Vn[e]);if(t.code=e,Error.captureStackTrace&&Error.captureStackTrace(t,y),!r)throw t;return t},On=function(e,n,r){var t=e.length;if(!t||r&&r.f&&!r.l)return n||new A(0);var i=!n||r,a=!r||r.i;r||(r={}),n||(n=new A(t*3));var s=function(He){var qe=n.length;if(He>qe){var Ye=new A(Math.max(qe*2,He));Ye.set(n),n=Ye}},u=r.f||0,o=r.p||0,c=r.b||0,h=r.l,v=r.d,E=r.m,V=r.n,ne=t*8;do{if(!h){u=T(e,o,1);var Z=T(e,o+1,3);if(o+=3,Z)if(Z==1)h=Nn,v=kn,E=9,V=5;else if(Z==2){var U=T(e,o,31)+257,j=T(e,o+10,15)+4,re=U+T(e,o+5,31)+1;o+=14;for(var L=new A(re),te=new A(19),I=0;I<j;++I)te[xn[I]]=T(e,o+I*3,7);o+=j*3;for(var k=Ae(te),ge=(1<<k)-1,B=$(te,k,1),I=0;I<re;){var ie=B[T(e,o,ge)];o+=ie&15;var m=ie>>>4;if(m<16)L[I++]=m;else{var b=0,pe=0;for(m==16?(pe=3+T(e,o,3),o+=2,b=L[I-1]):m==17?(pe=3+T(e,o,7),o+=3):m==18&&(pe=11+T(e,o,127),o+=7);pe--;)L[I++]=b}}var je=L.subarray(0,U),P=L.subarray(U);E=Ae(je),V=Ae(P),h=$(je,E,1),v=$(P,V,1)}else y(1);else{var m=Gn(o)+4,x=e[m-4]|e[m-3]<<8,O=m+x;if(O>t){a&&y(0);break}i&&s(c+x),n.set(e.subarray(m,O),c),r.b=c+=x,r.p=o=O*8,r.f=u;continue}if(o>ne){a&&y(0);break}}i&&s(c+131072);for(var Yn=(1<<E)-1,Xn=(1<<V)-1,Se=o;;Se=o){var b=h[de(e,o)&Yn],H=b>>>4;if(o+=b&15,o>ne){a&&y(0);break}if(b||y(2),H<256)n[c++]=H;else if(H==256){Se=o,h=null;break}else{var Be=H-254;if(H>264){var I=H-257,ae=Ze[I];Be=T(e,o,(1<<ae)-1)+Fe[I],o+=ae}var xe=v[de(e,o)&Xn],Te=xe>>>4;xe||y(3),o+=xe&15;var P=Rn[Te];if(Te>3){var ae=Le[Te];P+=de(e,o)&(1<<ae)-1,o+=ae}if(o>ne){a&&y(0);break}i&&s(c+131072);for(var be=c+Be;c<be;c+=4)n[c]=n[c-P],n[c+1]=n[c+1-P],n[c+2]=n[c+2-P],n[c+3]=n[c+3-P];c=be}}r.l=h,r.p=Se,r.b=c,r.f=u,h&&(u=1,r.m=E,r.d=v,r.n=V)}while(!u);return c==n.length?n:we(n,0,c)};var gr=new A(0);var pr=function(e,n){var r={};for(var t in e)r[t]=e[t];for(var t in n)r[t]=n[t];return r},yn=function(e,n,r){for(var t=e(),i=e.toString(),a=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),s=0;s<t.length;++s){var u=t[s],o=a[s];if(typeof u=="function"){n+=";"+o+"=";var c=u.toString();if(u.prototype)if(c.indexOf("[native code]")!=-1){var h=c.indexOf(" ",8)+1;n+=c.slice(h,c.indexOf("(",h))}else{n+=c;for(var v in u.prototype)n+=";"+o+".prototype."+v+"="+u.prototype[v].toString()}else n+=c}else r[o]=u}return[n,r]},Ie=[],vr=function(e){var n=[];for(var r in e)e[r].buffer&&n.push((e[r]=new e[r].constructor(e[r])).buffer);return n},mr=function(e,n,r,t){var i;if(!Ie[r]){for(var a="",s={},u=e.length-1,o=0;o<u;++o)i=yn(e[o],a,s),a=i[0],s=i[1];Ie[r]=yn(e[u],a,s)}var c=pr({},Ie[r][1]);return fr(Ie[r][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+n.toString()+"}",r,c,vr(c),t)},Ir=function(){return[A,M,We,Ze,Le,xn,Fe,Rn,Nn,kn,ye,Vn,$,Ae,T,de,Gn,we,y,On,Ke,Un,Pn]};var Un=function(e){return postMessage(e,[e.buffer])},Pn=function(e){return e&&e.size&&new A(e.size)},Cr=function(e,n,r,t,i,a){var s=mr(r,t,i,function(u,o){s.terminate(),a(u,o)});return s.postMessage([e,n],n.consume?[e.buffer]:[]),function(){s.terminate()}};var z=function(e,n){return e[n]|e[n+1]<<8},D=function(e,n){return(e[n]|e[n+1]<<8|e[n+2]<<16|e[n+3]<<24)>>>0},Pe=function(e,n){return D(e,n)+D(e,n+4)*4294967296};function Ar(e,n,r){return r||(r=n,n={}),typeof r!="function"&&y(7),Cr(e,n,[Ir],function(t){return Un(Ke(t.data[0],Pn(t.data[1])))},1,r)}function Ke(e,n){return On(e,n)}var Me=typeof TextDecoder<"u"&&new TextDecoder,dr=0;try{Me.decode(gr,{stream:!0}),dr=1}catch{}var yr=function(e){for(var n="",r=0;;){var t=e[r++],i=(t>127)+(t>223)+(t>239);if(r+i>e.length)return[n,we(e,r-1)];i?i==3?(t=((t&15)<<18|(e[r++]&63)<<12|(e[r++]&63)<<6|e[r++]&63)-65536,n+=String.fromCharCode(55296|t>>10,56320|t&1023)):i&1?n+=String.fromCharCode((t&31)<<6|e[r++]&63):n+=String.fromCharCode((t&15)<<12|(e[r++]&63)<<6|e[r++]&63):n+=String.fromCharCode(t)}};function wr(e,n){if(n){for(var r="",t=0;t<e.length;t+=16384)r+=String.fromCharCode.apply(null,e.subarray(t,t+16384));return r}else{if(Me)return Me.decode(e);var i=yr(e),a=i[0],s=i[1];return s.length&&y(8),a}}var Sr=function(e,n){return n+30+z(e,n+26)+z(e,n+28)},xr=function(e,n,r){var t=z(e,n+28),i=wr(e.subarray(n+46,n+46+t),!(z(e,n+8)&2048)),a=n+46+t,s=D(e,n+20),u=r&&s==4294967295?Tr(e,a):[s,D(e,n+24),D(e,n+42)],o=u[0],c=u[1],h=u[2];return[z(e,n+10),o,c,i,a+z(e,n+30)+z(e,n+32),h]},Tr=function(e,n){for(;z(e,n)!=1;n+=4+z(e,n+2));return[Pe(e,n+12),Pe(e,n+4),Pe(e,n+20)]};var wn=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(e){e()};function Mn(e,n,r){r||(r=n,n={}),typeof r!="function"&&y(7);var t=[],i=function(){for(var m=0;m<t.length;++m)t[m]()},a={},s=function(m,x){wn(function(){r(m,x)})};wn(function(){s=r});for(var u=e.length-22;D(e,u)!=101010256;--u)if(!u||e.length-u>65558)return s(y(13,0,1),null),i;var o=z(e,u+8);if(o){var c=o,h=D(e,u+16),v=h==4294967295||c==65535;if(v){var E=D(e,u-12);v=D(e,E)==101075792,v&&(c=o=D(e,E+32),h=D(e,E+48))}for(var V=n&&n.filter,ne=function(m){var x=xr(e,h,v),O=x[0],U=x[1],j=x[2],re=x[3],L=x[4],te=x[5],I=Sr(e,te);h=L;var k=function(B,ie){B?(i(),s(B,null)):(ie&&(a[re]=ie),--o||s(null,a))};if(!V||V({name:re,size:U,originalSize:j,compression:O}))if(!O)k(null,we(e,I,I+U));else if(O==8){var ge=e.subarray(I,I+U);if(U<32e4)try{k(null,Ke(ge,new A(j)))}catch(B){k(B,null)}else t.push(Ar(ge,{size:j},k))}else k(y(14,"unknown compression type "+O,1),null);else k(null,null)},Z=0;Z<c;++Z)ne(Z)}else s(null,{});return i}var Ln=require("fs"),N=require("fs/promises"),ee=require("path");fe();l();function Wn(e){function n(s,u,o,c){let h=0;return h+=s<<0,h+=u<<8,h+=o<<16,h+=c<<24>>>0,h}if(e[0]===80&&e[1]===75&&e[2]===3&&e[3]===4)return e;if(e[0]!==67||e[1]!==114||e[2]!==50||e[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let r=e[4]===3,t=e[4]===2;if(!t&&!r||e[5]||e[6]||e[7])throw new Error("Unexpected crx format version number.");if(t){let s=n(e[8],e[9],e[10],e[11]),u=n(e[12],e[13],e[14],e[15]),o=16+s+u;return e.subarray(o,e.length)}let a=12+n(e[8],e[9],e[10],e[11]);return e.subarray(a,e.length)}ke();var Er=(0,ee.join)(Ve,"ExtensionCache");async function Dr(e,n){return await(0,N.mkdir)(n,{recursive:!0}),new Promise((r,t)=>{Mn(e,(i,a)=>{if(i)return void t(i);Promise.all(Object.keys(a).map(async s=>{if(s.startsWith("_metadata/"))return;if(s.endsWith("/"))return void(0,N.mkdir)((0,ee.join)(n,s),{recursive:!0});let u=s.split("/"),o=u.pop(),c=u.join("/"),h=(0,ee.join)(n,c);c&&await(0,N.mkdir)(h,{recursive:!0}),await(0,N.writeFile)((0,ee.join)(h,o),a[s])})).then(()=>r()).catch(s=>{(0,N.rm)(n,{recursive:!0,force:!0}),t(s)})})})}async function Fn(e){let n=(0,ee.join)(Er,`${e}`);try{await(0,N.access)(n,Ln.constants.F_OK)}catch{let t=e==="fmkadmapgofadopljbjfkapdkoienihi"?"https://raw.githubusercontent.com/Vendicated/random-files/f6f550e4c58ac5f2012095a130406c2ab25b984d/fmkadmapgofadopljbjfkapdkoienihi.zip":`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${e}%26uc&prodversion=32`,i=await Y(t,{headers:{"User-Agent":"Vencord (https://github.com/Vendicated/Vencord)"}});await Dr(Wn(i),n).catch(console.error)}Zn.session.defaultSession.loadExtension(n)}ve||_.app.whenReady().then(()=>{_.protocol.registerFileProtocol("vencord",({url:t},i)=>{let a=t.slice(10);switch(a.endsWith("/")&&(a=a.slice(0,-1)),a){case"renderer.js.map":case"vencordDesktopRenderer.js.map":case"preload.js.map":case"patcher.js.map":case"vencordDesktopMain.js.map":i((0,qn.join)(__dirname,a));break;default:i({statusCode:403})}});try{me().enableReactDevtools&&Fn("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(t=>console.error("[Vencord] Failed to install React Developer Tools",t))}catch{}let e=t=>{let i={};return t.split(";").forEach(a=>{let[s,...u]=a.trim().split(/\s+/g);s&&!Object.prototype.hasOwnProperty.call(i,s)&&(i[s]=u)}),i},n=t=>Object.entries(t).filter(([,i])=>i?.length).map(i=>i.flat().join(" ")).join("; ");function r(t,i){if(i in t){let a=e(t[i][0]);for(let s of["style-src","connect-src","img-src","font-src","media-src","worker-src"])a[s]=["*","blob:","data:","'unsafe-inline'"];a["script-src"]??=[],a["script-src"].push("'unsafe-eval'","https://unpkg.com","https://cdnjs.cloudflare.com"),t[i]=[n(a)]}}_.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:t,resourceType:i},a)=>{t&&(i==="mainFrame"&&r(t,"content-security-policy"),i==="stylesheet"&&(t["content-type"]=["text/css"])),a({cancel:!1,responseHeaders:t})}),_.session.defaultSession.webRequest.onHeadersReceived=()=>{}});Hn();
//# sourceURL=VencordPatcher
//# sourceMappingURL=vencord://patcher.js.map
/*! For license information please see patcher.js.LEGAL.txt */
