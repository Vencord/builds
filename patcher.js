// Vencord 6fd5c78
// Standalone: true
// Platform: Universal
"use strict";var Qn=Object.create;var De=Object.defineProperty;var $n=Object.getOwnPropertyDescriptor;var er=Object.getOwnPropertyNames;var nr=Object.getPrototypeOf,rr=Object.prototype.hasOwnProperty;var y=(e,n)=>()=>(e&&(n=e(e=0)),n);var Xe=(e,n,r,t)=>{if(n&&typeof n=="object"||typeof n=="function")for(let i of er(n))!rr.call(e,i)&&i!==r&&De(e,i,{get:()=>n[i],enumerable:!(t=$n(n,i))||t.enumerable});return e};var Re=(e,n,r)=>(r=e!=null?Qn(nr(e)):{},Xe(n||!e||!e.__esModule?De(r,"default",{value:e,enumerable:!0}):r,e)),Qe=e=>Xe(De({},"__esModule",{value:!0}),e);var f=y(()=>{"use strict"});var se,ze=y(()=>{f();se="6fd5c78"});var Y,Pe=y(()=>{f();Y="Vendicated/Vencord"});var $e,en=y(()=>{"use strict";f();ze();Pe();$e=`Vencord/${se}${Y?` (https://github.com/${Y})`:""}`});function tr(e){let n={};for(let r in e)n[r]=e[r],n[e[r]]=r;return Object.freeze(n)}var I,Oe=y(()=>{"use strict";f();I=tr({QUICK_CSS_UPDATE:"VencordQuickCssUpdate",GET_QUICK_CSS:"VencordGetQuickCss",SET_QUICK_CSS:"VencordSetQuickCss",GET_SETTINGS_DIR:"VencordGetSettingsDir",GET_SETTINGS:"VencordGetSettings",SET_SETTINGS:"VencordSetSettings",OPEN_EXTERNAL:"VencordOpenExternal",OPEN_QUICKCSS:"VencordOpenQuickCss",GET_UPDATES:"VencordGetUpdates",GET_REPO:"VencordGetRepo",UPDATE:"VencordUpdate",BUILD:"VencordBuild",OPEN_MONACO_EDITOR:"VencordOpenMonacoEditor"})});function J(e,n={}){return new Promise((r,t)=>{nn.default.get(e,n,i=>{let{statusCode:a,statusMessage:s,headers:u}=i;if(a>=400)return void t(`${a}: ${s} - ${e}`);if(a>=300)return void r(J(u.location,n));let o=[];i.on("error",t),i.on("data",c=>o.push(c)),i.once("end",()=>r(Buffer.concat(o)))})})}var nn,ke=y(()=>{"use strict";f();nn=Re(require("https"))});function ue(e){return async function(){try{return{ok:!0,value:await e(...arguments)}}catch(n){return{ok:!1,error:n instanceof Error?{...n}:n}}}}var rn,tn=y(()=>{"use strict";f();rn=["patcher.js","preload.js","renderer.js","renderer.css"]});var sr={};async function sn(e){return J(ir+e,{headers:{Accept:"application/vnd.github+json","User-Agent":$e}})}async function ar(){if(!await un())return[];let n=await sn(`/compare/${se}...HEAD`);return JSON.parse(n.toString("utf-8")).commits.map(t=>({hash:t.sha.slice(0,7),author:t.author.login,message:t.commit.message}))}async function un(){let e=await sn("/releases/latest"),n=JSON.parse(e.toString());return n.name.slice(n.name.lastIndexOf(" ")+1)===se?!1:(n.assets.forEach(({name:t,browser_download_url:i})=>{rn.some(a=>t.startsWith(a))&&Ne.push([t,i])}),!0)}async function or(){return await Promise.all(Ne.map(async([e,n])=>(0,an.writeFile)((0,on.join)(__dirname,e),await J(n)))),Ne=[],!0}var ce,an,on,ir,Ne,cn=y(()=>{"use strict";f();en();Oe();ce=require("electron"),an=require("fs/promises"),on=require("path");ze();Pe();ke();tn();ir=`https://api.github.com/repos/${Y}`,Ne=[];ce.ipcMain.handle(I.GET_REPO,ue(()=>`https://github.com/${Y}`));ce.ipcMain.handle(I.GET_UPDATES,ue(ar));ce.ipcMain.handle(I.UPDATE,ue(un));ce.ipcMain.handle(I.BUILD,ue(or))});var fn=y(()=>{"use strict";f();Promise.resolve().then(()=>cn())});function ln(e,n=300){let r;return function(...t){clearTimeout(r),r=setTimeout(()=>{e(...t)},n)}}var hn=y(()=>{"use strict";f()});var fe,pn=y(()=>{"use strict";f();fe=class{constructor(n=1/0){this.maxSize=n}queue=[];promise;next(){let n=this.queue.shift();n?this.promise=Promise.resolve().then(n).finally(()=>this.next()):this.promise=void 0}run(){this.promise||this.next()}push(n){this.size>=this.maxSize&&this.queue.shift(),this.queue.push(n),this.run()}unshift(n){this.size>=this.maxSize&&this.queue.pop(),this.queue.unshift(n),this.run()}get size(){return this.queue.length}}});var vn,gn=y(()=>{f();vn="PCFkb2N0eXBlIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KCjxoZWFkPgogICAgPG1ldGEgY2hhcnNldD0idXRmLTgiPgogICAgPHRpdGxlPlZlbmNvcmQgUXVpY2tDU1MgRWRpdG9yPC90aXRsZT4KICAgIDxsaW5rIHJlbD0ic3R5bGVzaGVldCIgZGF0YS1uYW1lPSJ2cy9lZGl0b3IvZWRpdG9yLm1haW4iCiAgICAgICAgaHJlZj0iaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbW9uYWNvLWVkaXRvci8wLjM0LjAvbWluL3ZzL2VkaXRvci9lZGl0b3IubWFpbi5taW4uY3NzIj4KICAgIDxzdHlsZT4KICAgICAgICBodG1sLAogICAgICAgIGJvZHksCiAgICAgICAgI2NvbnRhaW5lciB7CiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgICAgICAgICAgbGVmdDogMDsKICAgICAgICAgICAgdG9wOiAwOwogICAgICAgICAgICB3aWR0aDogMTAwJTsKICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOwogICAgICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgICAgIHBhZGRpbmc6IDA7CiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47CiAgICAgICAgfQogICAgPC9zdHlsZT4KPC9oZWFkPgoKPGJvZHk+CiAgICA8ZGl2IGlkPSJjb250YWluZXIiPjwvZGl2PgogICAgPHNjcmlwdCBzcmM9Imh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21vbmFjby1lZGl0b3IvMC4zNC4wL21pbi92cy9sb2FkZXIubWluLmpzIj48L3NjcmlwdD4KCiAgICA8c2NyaXB0PgogICAgICAgIHJlcXVpcmUuY29uZmlnKHsgcGF0aHM6IHsgJ3ZzJzogJ2h0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21vbmFjby1lZGl0b3IvMC4zNC4wL21pbi92cycgfSB9KTsKICAgICAgICByZXF1aXJlKFsidnMvZWRpdG9yL2VkaXRvci5tYWluIl0sICgpID0+IHsKICAgICAgICAgICAgZ2V0Q3VycmVudENzcygpLnRoZW4oY3NzID0+IHsKICAgICAgICAgICAgICAgIHZhciBlZGl0b3IgPSBtb25hY28uZWRpdG9yLmNyZWF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyksIHsKICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY3NzLAogICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAnY3NzJywKICAgICAgICAgICAgICAgICAgICB0aGVtZTogZ2V0VGhlbWUoKSwKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICAgICAgZWRpdG9yLm9uRGlkQ2hhbmdlTW9kZWxDb250ZW50KCgpID0+CiAgICAgICAgICAgICAgICAgICAgc2V0Q3NzKGVkaXRvci5nZXRWYWx1ZSgpKQogICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCJyZXNpemUiLCAoKSA9PiB7CiAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBtb25hY28gcmUtbGF5b3V0CiAgICAgICAgICAgICAgICAgICAgZWRpdG9yLmxheW91dCgpOwogICAgICAgICAgICAgICAgfSk7CiAgICAgICAgICAgIH0pOwogICAgICAgIH0pOwoKCiAgICA8L3NjcmlwdD4KPC9ib2R5PgoKPC9odG1sPgo="});var mn,X,Ge,le,Q,Ve,dn,me,he=y(()=>{"use strict";f();mn=require("electron"),X=require("path"),Ge=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,X.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,X.join)(mn.app.getPath("userData"),"..","Vencord")),le=(0,X.join)(Ge,"settings"),Q=(0,X.join)(le,"quickCss.css"),Ve=(0,X.join)(le,"settings.json"),dn=["https:","http:","steam:","spotify:"],me=process.argv.includes("--vanilla")});function In(){return(0,_.readFile)(Q,"utf-8").catch(()=>"")}function Cn(){try{return(0,$.readFileSync)(Ve,"utf-8")}catch{return"{}"}}function de(){try{return JSON.parse(Cn())}catch{return{}}}function An(e){(0,_.open)(Q,"a+").then(n=>{n.close(),(0,$.watch)(Q,{persistent:!1},ln(async()=>{e.webContents.postMessage(I.QUICK_CSS_UPDATE,await In())},50))})}var A,$,_,yn,ur,cr,Ue=y(()=>{"use strict";f();fn();hn();Oe();pn();A=require("electron"),$=require("fs"),_=require("fs/promises"),yn=require("path");gn();he();(0,$.mkdirSync)(le,{recursive:!0});A.ipcMain.handle(I.OPEN_QUICKCSS,()=>A.shell.openPath(Q));A.ipcMain.handle(I.OPEN_EXTERNAL,(e,n)=>{try{var{protocol:r}=new URL(n)}catch{throw"Malformed URL"}if(!dn.includes(r))throw"Disallowed protocol.";A.shell.openExternal(n)});ur=new fe,cr=new fe;A.ipcMain.handle(I.GET_QUICK_CSS,()=>In());A.ipcMain.handle(I.SET_QUICK_CSS,(e,n)=>ur.push(()=>(0,_.writeFile)(Q,n)));A.ipcMain.handle(I.GET_SETTINGS_DIR,()=>le);A.ipcMain.on(I.GET_SETTINGS,e=>e.returnValue=Cn());A.ipcMain.handle(I.SET_SETTINGS,(e,n)=>{cr.push(()=>(0,_.writeFile)(Ve,n))});A.ipcMain.handle(I.OPEN_MONACO_EDITOR,async()=>{await new A.BrowserWindow({title:"Vencord QuickCSS Editor",autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,yn.join)(__dirname,"preload.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!1}}).loadURL(`data:text/html;base64,${vn}`)})});function jn(e,n,r){let t=n;if(n in e)return void r(e[t]);Object.defineProperty(e,n,{set(i){delete e[t],e[t]=i,r(i)},configurable:!0,enumerable:!1})}var Bn=y(()=>{"use strict";f()});var Or={};function zr(e,n){let r=e.slice(4).split(".").map(Number),t=n.slice(4).split(".").map(Number);for(let i=0;i<t.length;i++){if(r[i]>t[i])return!0;if(r[i]<t[i])return!1}return!1}function Hn(){try{let e=(0,x.dirname)(process.execPath),n=(0,x.basename)(e),r=(0,x.join)(e,".."),t=(0,S.readdirSync)(r).reduce((u,o)=>o.startsWith("app-")&&zr(o,u)?o:u,n);if(t===n)return;let i=(0,x.join)(r,t,"resources"),a=(0,x.join)(i,"app.asar"),s=(0,x.join)(i,"_app.asar");if(!(0,S.existsSync)(a)||(0,S.statSync)(a).isDirectory())return;console.info("[Vencord] Detected Host Update. Repatching..."),(0,S.renameSync)(a,s),(0,S.mkdirSync)(a),(0,S.writeFileSync)((0,x.join)(a,"package.json"),JSON.stringify({name:"discord",main:"index.js"})),(0,S.writeFileSync)((0,x.join)(a,"index.js"),`require(${JSON.stringify((0,x.join)(__dirname,"patcher.js"))});`)}catch(e){console.error("[Vencord] Failed to repatch latest host update",e)}}function Pr(){try{let e=(0,x.join)(require.main.filename,"..","autoStart","win32.js"),{update:n}=require(e);require.cache[e].exports.update=function(){n.apply(this,arguments),Hn()}}catch{let{quitAndInstall:e}=j.autoUpdater;j.autoUpdater.quitAndInstall=function(){Hn(),e.call(this)}}}var j,S,x,Kn,bn=y(()=>{"use strict";f();j=require("electron"),S=require("fs"),x=require("path"),{setAppUserModelId:Kn}=j.app;j.app.setAppUserModelId=function(e){j.app.setAppUserModelId=Kn,Kn.call(this,e),Pr()}});var Vr={};var z,L,kr,Nr,Be,Gr,qn=y(()=>{"use strict";f();Bn();z=Re(require("electron")),L=require("path");Ue();he();console.log("[Vencord] Starting up...");kr=require.main.filename,Nr=require.main.path.endsWith("app.asar")?"_app.asar":"app.asar",Be=(0,L.join)((0,L.dirname)(kr),"..",Nr),Gr=require((0,L.join)(Be,"package.json"));require.main.filename=(0,L.join)(Be,Gr.main);z.app.setAppPath(Be);if(me)console.log("[Vencord] Running in vanilla mode. Not loading Vencord");else{let e=de();if(process.platform==="win32"&&(bn(),e.winCtrlQ)){let t=z.Menu.buildFromTemplate;z.Menu.buildFromTemplate=function(i){if(i[0]?.label==="&File"){let{submenu:a}=i[0];Array.isArray(a)&&a.push({label:"Quit (Hidden)",visible:!1,acceleratorWorksWhenHidden:!0,accelerator:"Control+Q",click:()=>z.app.quit()})}return t.call(this,i)}}class n extends z.default.BrowserWindow{constructor(i){if(i?.webPreferences?.preload&&i.title){let a=i.webPreferences.preload;i.webPreferences.preload=(0,L.join)(__dirname,"preload.js"),i.webPreferences.sandbox=!1,e.frameless?i.frame=!1:process.platform==="win32"&&e.winNativeTitleBar&&delete i.frame,e.transparentUNSAFE_USE_AT_OWN_RISK&&(i.transparent=!0,i.backgroundColor="#00000000"),e.macosTranslucency&&process.platform==="darwin"&&(i.backgroundColor="#00000000",i.vibrancy="sidebar"),process.env.DISCORD_PRELOAD=a,super(i),An(this)}else super(i)}}Object.assign(n,z.default.BrowserWindow),Object.defineProperty(n,"name",{value:"BrowserWindow",configurable:!0});let r=require.resolve("electron");delete require.cache[r].exports,require.cache[r].exports={...z.default,BrowserWindow:n},jn(global,"appSettings",t=>{t.set("DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING",!0),e.disableMinSize?(t.set("MIN_WIDTH",0),t.set("MIN_HEIGHT",0)):(t.set("MIN_WIDTH",940),t.set("MIN_HEIGHT",500))}),process.env.DATA_DIR=(0,L.join)(z.app.getPath("userData"),"..","Vencord")}console.log("[Vencord] Loading original Discord app.asar");require(require.main.filename)});f();var B=require("electron"),Yn=require("path");Ue();he();f();var Fn=require("electron");f();var Sn=require("module"),fr=(0,Sn.createRequire)("/"),Ie,lr=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{Ie=fr("worker_threads").Worker}catch{}var hr=Ie?function(e,n,r,t,i){var a=!1,s=new Ie(e+lr,{eval:!0}).on("error",function(u){return i(u,null)}).on("message",function(u){return i(null,u)}).on("exit",function(u){u&&!a&&i(new Error("exited with code "+u),null)});return s.postMessage(r,t),s.terminate=function(){return a=!0,Ie.prototype.terminate.call(s)},s}:function(e,n,r,t,i){setImmediate(function(){return i(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var a=function(){};return{terminate:a,postMessage:a}},C=Uint8Array,Z=Uint16Array,Le=Uint32Array,Fe=new C([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Me=new C([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Tn=new C([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),En=function(e,n){for(var r=new Z(31),t=0;t<31;++t)r[t]=n+=1<<e[t-1];for(var i=new Le(r[30]),t=1;t<30;++t)for(var a=r[t];a<r[t+1];++a)i[a]=a-r[t]<<5|t;return[r,i]},Dn=En(Fe,2),_e=Dn[0],pr=Dn[1];_e[28]=258,pr[258]=28;var Rn=En(Me,0),zn=Rn[0],wt=Rn[1],we=new Z(32768);for(l=0;l<32768;++l)N=(l&43690)>>>1|(l&21845)<<1,N=(N&52428)>>>2|(N&13107)<<2,N=(N&61680)>>>4|(N&3855)<<4,we[l]=((N&65280)>>>8|(N&255)<<8)>>>1;var N,l,ee=function(e,n,r){for(var t=e.length,i=0,a=new Z(n);i<t;++i)e[i]&&++a[e[i]-1];var s=new Z(n);for(i=0;i<n;++i)s[i]=s[i-1]+a[i-1]<<1;var u;if(r){u=new Z(1<<n);var o=15-n;for(i=0;i<t;++i)if(e[i])for(var c=i<<4|e[i],h=n-e[i],g=s[e[i]-1]++<<h,D=g|(1<<h)-1;g<=D;++g)u[we[g]>>>o]=c}else for(u=new Z(t),i=0;i<t;++i)e[i]&&(u[i]=we[s[e[i]-1]++]>>>15-e[i]);return u},pe=new C(288);for(l=0;l<144;++l)pe[l]=8;var l;for(l=144;l<256;++l)pe[l]=9;var l;for(l=256;l<280;++l)pe[l]=7;var l;for(l=280;l<288;++l)pe[l]=8;var l,Pn=new C(32);for(l=0;l<32;++l)Pn[l]=5;var l;var On=ee(pe,9,1);var kn=ee(Pn,5,1),Ce=function(e){for(var n=e[0],r=1;r<e.length;++r)e[r]>n&&(n=e[r]);return n},E=function(e,n,r){var t=n/8|0;return(e[t]|e[t+1]<<8)>>(n&7)&r},Ae=function(e,n){var r=n/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(n&7)},Nn=function(e){return(e+7)/8|0},xe=function(e,n,r){(n==null||n<0)&&(n=0),(r==null||r>e.length)&&(r=e.length);var t=new(e.BYTES_PER_ELEMENT==2?Z:e.BYTES_PER_ELEMENT==4?Le:C)(r-n);return t.set(e.subarray(n,r)),t};var Gn=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],w=function(e,n,r){var t=new Error(n||Gn[e]);if(t.code=e,Error.captureStackTrace&&Error.captureStackTrace(t,w),!r)throw t;return t},Vn=function(e,n,r){var t=e.length;if(!t||r&&r.f&&!r.l)return n||new C(0);var i=!n||r,a=!r||r.i;r||(r={}),n||(n=new C(t*3));var s=function(qe){var Ye=n.length;if(qe>Ye){var Je=new C(Math.max(Ye*2,qe));Je.set(n),n=Je}},u=r.f||0,o=r.p||0,c=r.b||0,h=r.l,g=r.d,D=r.m,G=r.n,re=t*8;do{if(!h){u=E(e,o,1);var F=E(e,o+1,3);if(o+=3,F)if(F==1)h=On,g=kn,D=9,G=5;else if(F==2){var U=E(e,o,31)+257,K=E(e,o+10,15)+4,te=U+E(e,o+5,31)+1;o+=14;for(var M=new C(te),ie=new C(19),d=0;d<K;++d)ie[Tn[d]]=E(e,o+d*3,7);o+=K*3;for(var k=Ce(ie),ve=(1<<k)-1,H=ee(ie,k,1),d=0;d<te;){var ae=H[E(e,o,ve)];o+=ae&15;var m=ae>>>4;if(m<16)M[d++]=m;else{var b=0,ge=0;for(m==16?(ge=3+E(e,o,3),o+=2,b=M[d-1]):m==17?(ge=3+E(e,o,7),o+=3):m==18&&(ge=11+E(e,o,127),o+=7);ge--;)M[d++]=b}}var Ke=M.subarray(0,U),W=M.subarray(U);D=Ce(Ke),G=Ce(W),h=ee(Ke,D,1),g=ee(W,G,1)}else w(1);else{var m=Nn(o)+4,T=e[m-4]|e[m-3]<<8,V=m+T;if(V>t){a&&w(0);break}i&&s(c+T),n.set(e.subarray(m,V),c),r.b=c+=T,r.p=o=V*8,r.f=u;continue}if(o>re){a&&w(0);break}}i&&s(c+131072);for(var Jn=(1<<D)-1,Xn=(1<<G)-1,Se=o;;Se=o){var b=h[Ae(e,o)&Jn],q=b>>>4;if(o+=b&15,o>re){a&&w(0);break}if(b||w(2),q<256)n[c++]=q;else if(q==256){Se=o,h=null;break}else{var He=q-254;if(q>264){var d=q-257,oe=Fe[d];He=E(e,o,(1<<oe)-1)+_e[d],o+=oe}var Te=g[Ae(e,o)&Xn],Ee=Te>>>4;Te||w(3),o+=Te&15;var W=zn[Ee];if(Ee>3){var oe=Me[Ee];W+=Ae(e,o)&(1<<oe)-1,o+=oe}if(o>re){a&&w(0);break}i&&s(c+131072);for(var be=c+He;c<be;c+=4)n[c]=n[c-W],n[c+1]=n[c+1-W],n[c+2]=n[c+2-W],n[c+3]=n[c+3-W];c=be}}r.l=h,r.p=Se,r.b=c,r.f=u,h&&(u=1,r.m=D,r.d=g,r.n=G)}while(!u);return c==n.length?n:xe(n,0,c)};var vr=new C(0);var gr=function(e,n){var r={};for(var t in e)r[t]=e[t];for(var t in n)r[t]=n[t];return r},wn=function(e,n,r){for(var t=e(),i=e.toString(),a=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),s=0;s<t.length;++s){var u=t[s],o=a[s];if(typeof u=="function"){n+=";"+o+"=";var c=u.toString();if(u.prototype)if(c.indexOf("[native code]")!=-1){var h=c.indexOf(" ",8)+1;n+=c.slice(h,c.indexOf("(",h))}else{n+=c;for(var g in u.prototype)n+=";"+o+".prototype."+g+"="+u.prototype[g].toString()}else n+=c}else r[o]=u}return[n,r]},ye=[],mr=function(e){var n=[];for(var r in e)e[r].buffer&&n.push((e[r]=new e[r].constructor(e[r])).buffer);return n},dr=function(e,n,r,t){var i;if(!ye[r]){for(var a="",s={},u=e.length-1,o=0;o<u;++o)i=wn(e[o],a,s),a=i[0],s=i[1];ye[r]=wn(e[u],a,s)}var c=gr({},ye[r][1]);return hr(ye[r][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+n.toString()+"}",r,c,mr(c),t)},yr=function(){return[C,Z,Le,Fe,Me,Tn,_e,zn,On,kn,we,Gn,ee,Ce,E,Ae,Nn,xe,w,Vn,je,Un,Wn]};var Un=function(e){return postMessage(e,[e.buffer])},Wn=function(e){return e&&e.size&&new C(e.size)},Ir=function(e,n,r,t,i,a){var s=dr(r,t,i,function(u,o){s.terminate(),a(u,o)});return s.postMessage([e,n],n.consume?[e.buffer]:[]),function(){s.terminate()}};var P=function(e,n){return e[n]|e[n+1]<<8},R=function(e,n){return(e[n]|e[n+1]<<8|e[n+2]<<16|e[n+3]<<24)>>>0},We=function(e,n){return R(e,n)+R(e,n+4)*4294967296};function Cr(e,n,r){return r||(r=n,n={}),typeof r!="function"&&w(7),Ir(e,n,[yr],function(t){return Un(je(t.data[0],Wn(t.data[1])))},1,r)}function je(e,n){return Vn(e,n)}var Ze=typeof TextDecoder<"u"&&new TextDecoder,Ar=0;try{Ze.decode(vr,{stream:!0}),Ar=1}catch{}var wr=function(e){for(var n="",r=0;;){var t=e[r++],i=(t>127)+(t>223)+(t>239);if(r+i>e.length)return[n,xe(e,r-1)];i?i==3?(t=((t&15)<<18|(e[r++]&63)<<12|(e[r++]&63)<<6|e[r++]&63)-65536,n+=String.fromCharCode(55296|t>>10,56320|t&1023)):i&1?n+=String.fromCharCode((t&31)<<6|e[r++]&63):n+=String.fromCharCode((t&15)<<12|(e[r++]&63)<<6|e[r++]&63):n+=String.fromCharCode(t)}};function xr(e,n){if(n){for(var r="",t=0;t<e.length;t+=16384)r+=String.fromCharCode.apply(null,e.subarray(t,t+16384));return r}else{if(Ze)return Ze.decode(e);var i=wr(e),a=i[0],s=i[1];return s.length&&w(8),a}}var Sr=function(e,n){return n+30+P(e,n+26)+P(e,n+28)},Tr=function(e,n,r){var t=P(e,n+28),i=xr(e.subarray(n+46,n+46+t),!(P(e,n+8)&2048)),a=n+46+t,s=R(e,n+20),u=r&&s==4294967295?Er(e,a):[s,R(e,n+24),R(e,n+42)],o=u[0],c=u[1],h=u[2];return[P(e,n+10),o,c,i,a+P(e,n+30)+P(e,n+32),h]},Er=function(e,n){for(;P(e,n)!=1;n+=4+P(e,n+2));return[We(e,n+12),We(e,n+4),We(e,n+20)]};var xn=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(e){e()};function Zn(e,n,r){r||(r=n,n={}),typeof r!="function"&&w(7);var t=[],i=function(){for(var m=0;m<t.length;++m)t[m]()},a={},s=function(m,T){xn(function(){r(m,T)})};xn(function(){s=r});for(var u=e.length-22;R(e,u)!=101010256;--u)if(!u||e.length-u>65558)return s(w(13,0,1),null),i;var o=P(e,u+8);if(o){var c=o,h=R(e,u+16),g=h==4294967295||c==65535;if(g){var D=R(e,u-12);g=R(e,D)==101075792,g&&(c=o=R(e,D+32),h=R(e,D+48))}for(var G=n&&n.filter,re=function(m){var T=Tr(e,h,g),V=T[0],U=T[1],K=T[2],te=T[3],M=T[4],ie=T[5],d=Sr(e,ie);h=M;var k=function(H,ae){H?(i(),s(H,null)):(ae&&(a[te]=ae),--o||s(null,a))};if(!G||G({name:te,size:U,originalSize:K,compression:V}))if(!V)k(null,xe(e,d,d+U));else if(V==8){var ve=e.subarray(d,d+U);if(U<32e4)try{k(null,je(ve,new C(K)))}catch(H){k(H,null)}else t.push(Cr(ve,{size:K},k))}else k(w(14,"unknown compression type "+V,1),null);else k(null,null)},F=0;F<c;++F)re(F)}else s(null,{});return i}var Mn=require("fs"),O=require("fs/promises"),ne=require("path");he();f();function Ln(e){function n(s,u,o,c){let h=0;return h+=s<<0,h+=u<<8,h+=o<<16,h+=c<<24>>>0,h}if(e[0]===80&&e[1]===75&&e[2]===3&&e[3]===4)return e;if(e[0]!==67||e[1]!==114||e[2]!==50||e[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let r=e[4]===3,t=e[4]===2;if(!t&&!r||e[5]||e[6]||e[7])throw new Error("Unexpected crx format version number.");if(t){let s=n(e[8],e[9],e[10],e[11]),u=n(e[12],e[13],e[14],e[15]),o=16+s+u;return e.subarray(o,e.length)}let a=12+n(e[8],e[9],e[10],e[11]);return e.subarray(a,e.length)}ke();var Dr=(0,ne.join)(Ge,"ExtensionCache");async function Rr(e,n){return await(0,O.mkdir)(n,{recursive:!0}),new Promise((r,t)=>{Zn(e,(i,a)=>{if(i)return void t(i);Promise.all(Object.keys(a).map(async s=>{if(s.startsWith("_metadata/"))return;if(s.endsWith("/"))return void(0,O.mkdir)((0,ne.join)(n,s),{recursive:!0});let u=s.split("/"),o=u.pop(),c=u.join("/"),h=(0,ne.join)(n,c);c&&await(0,O.mkdir)(h,{recursive:!0}),await(0,O.writeFile)((0,ne.join)(h,o),a[s])})).then(()=>r()).catch(s=>{(0,O.rm)(n,{recursive:!0,force:!0}),t(s)})})})}async function _n(e){let n=(0,ne.join)(Dr,`${e}`);try{await(0,O.access)(n,Mn.constants.F_OK)}catch{let t=e==="fmkadmapgofadopljbjfkapdkoienihi"?"https://raw.githubusercontent.com/Vendicated/random-files/f6f550e4c58ac5f2012095a130406c2ab25b984d/fmkadmapgofadopljbjfkapdkoienihi.zip":`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${e}%26uc&prodversion=32`,i=await J(t,{headers:{"User-Agent":"Vencord (https://github.com/Vendicated/Vencord)"}});await Rr(Ln(i),n).catch(console.error)}Fn.session.defaultSession.loadExtension(n)}me||B.app.whenReady().then(()=>{B.protocol.registerFileProtocol("vencord",({url:t},i)=>{let a=t.slice(10);switch(a.endsWith("/")&&(a=a.slice(0,-1)),a){case"renderer.js.map":case"vencordDesktopRenderer.js.map":case"preload.js.map":case"patcher.js.map":case"vencordDesktopMain.js.map":i((0,Yn.join)(__dirname,a));break;default:i({statusCode:403})}});try{de().enableReactDevtools&&_n("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(t=>console.error("[Vencord] Failed to install React Developer Tools",t))}catch{}let e=t=>{let i={};return t.split(";").forEach(a=>{let[s,...u]=a.trim().split(/\s+/g);s&&!Object.prototype.hasOwnProperty.call(i,s)&&(i[s]=u)}),i},n=t=>Object.entries(t).filter(([,i])=>i?.length).map(i=>i.flat().join(" ")).join("; ");function r(t,i){if(i in t){let a=e(t[i][0]);for(let s of["style-src","connect-src","img-src","font-src","media-src","worker-src"])a[s]=["*","blob:","data:","'unsafe-inline'"];a["script-src"]??=[],a["script-src"].push("'unsafe-eval'","https://unpkg.com","https://cdnjs.cloudflare.com"),t[i]=[n(a)]}}B.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:t,resourceType:i},a)=>{t&&(i==="mainFrame"&&r(t,"content-security-policy"),i==="stylesheet"&&(t["content-type"]=["text/css"])),a({cancel:!1,responseHeaders:t})}),B.session.defaultSession.webRequest.onHeadersReceived=()=>{}});qn();
//# sourceURL=VencordPatcher
//# sourceMappingURL=vencord://patcher.js.map
/*! For license information please see patcher.js.LEGAL.txt */
