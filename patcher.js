// Vencord 15aa229
// Standalone: true
// Platform: Universal
"use strict";var qr=Object.create;var Te=Object.defineProperty;var Hr=Object.getOwnPropertyDescriptor;var Yr=Object.getOwnPropertyNames;var Qr=Object.getPrototypeOf,br=Object.prototype.hasOwnProperty;var P=(e,r)=>()=>(e&&(r=e(e=0)),r);var Ye=(e,r,n,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of Yr(r))!br.call(e,i)&&i!==n&&Te(e,i,{get:()=>r[i],enumerable:!(t=Hr(r,i))||t.enumerable});return e};var Ee=(e,r,n)=>(n=e!=null?qr(Qr(e)):{},Ye(r||!e||!e.__esModule?Te(n,"default",{value:e,enumerable:!0}):n,e)),Xr=e=>Ye(Te({},"__esModule",{value:!0}),e);var f=P(()=>{"use strict"});function Jr(e){let r={};for(let n in e)r[n]=e[n],r[e[n]]=n;return Object.freeze(r)}var g,ve=P(()=>{"use strict";f();g=Jr({QUICK_CSS_UPDATE:"VencordQuickCssUpdate",GET_QUICK_CSS:"VencordGetQuickCss",SET_QUICK_CSS:"VencordSetQuickCss",GET_SETTINGS_DIR:"VencordGetSettingsDir",GET_SETTINGS:"VencordGetSettings",SET_SETTINGS:"VencordSetSettings",OPEN_EXTERNAL:"VencordOpenExternal",OPEN_QUICKCSS:"VencordOpenQuickCss",GET_UPDATES:"VencordGetUpdates",GET_REPO:"VencordGetRepo",GET_HASHES:"VencordGetHashes",UPDATE:"VencordUpdate",BUILD:"VencordBuild",GET_DESKTOP_CAPTURE_SOURCES:"VencordGetDesktopCaptureSources",OPEN_MONACO_EDITOR:"VencordOpenMonacoEditor",DOWNLOAD_VENCORD_CSS:"VencordDownloadVencordCss"})});function _(e,r={}){return new Promise((n,t)=>{be.default.get(e,r,i=>{let{statusCode:u,statusMessage:a,headers:o}=i;if(u>=400)return void t(`${u}: ${a} - ${e}`);if(u>=300)return void n(_(o.location,r));let s=[];i.on("error",t),i.on("data",c=>s.push(c)),i.once("end",()=>n(Buffer.concat(s)))})})}var be,ge=P(()=>{"use strict";f();be=Ee(require("https"))});var ue,De=P(()=>{f();ue="15aa229"});var Q,ze=P(()=>{f();Q="Vendicated/Vencord"});var er,rr=P(()=>{"use strict";f();De();ze();er=`Vencord/${ue}${Q?` (https://github.com/${Q})`:""}`});async function ar(){let e={};return await Promise.all(["patcher.js","preload.js","renderer.js","renderer.css"].map(r=>new Promise(n=>{let t=(0,tr.createReadStream)((0,ir.join)(__dirname,r)),i=(0,nr.createHash)("sha1",{encoding:"hex"});t.once("end",()=>{i.end(),e[r]=i.read(),n()}),t.pipe(i)}))),e}function b(e){return async function(){try{return{ok:!0,value:await e(...arguments)}}catch(r){return{ok:!1,error:r instanceof Error?{...r}:r}}}}var nr,tr,ir,or=P(()=>{"use strict";f();nr=require("crypto"),tr=require("fs"),ir=require("path")});var nn={};async function cr(e){return _($r+e,{headers:{Accept:"application/vnd.github+json","User-Agent":er}})}async function en(){if(!await fr())return[];let r=await cr(`/compare/${ue}...HEAD`);return JSON.parse(r.toString("utf-8")).commits.map(t=>({hash:t.sha.slice(0,7),author:t.author.login,message:t.commit.message}))}async function fr(){let e=await cr("/releases/latest"),r=JSON.parse(e.toString());return r.name.slice(r.name.lastIndexOf(" ")+1)===ue?!1:(r.assets.forEach(({name:t,browser_download_url:i})=>{["patcher.js","preload.js","renderer.js","renderer.css"].some(u=>t.startsWith(u))&&Re.push([t,i])}),!0)}async function rn(){return await Promise.all(Re.map(async([e,r])=>(0,sr.writeFile)((0,ur.join)(__dirname,e),await _(r)))),Re=[],!0}var X,sr,ur,$r,Re,lr=P(()=>{"use strict";f();rr();ve();X=require("electron"),sr=require("fs/promises"),ur=require("path");De();ze();ge();or();$r=`https://api.github.com/repos/${Q}`,Re=[];X.ipcMain.handle(g.GET_HASHES,b(ar));X.ipcMain.handle(g.GET_REPO,b(()=>`https://github.com/${Q}`));X.ipcMain.handle(g.GET_UPDATES,b(en));X.ipcMain.handle(g.UPDATE,b(fr));X.ipcMain.handle(g.BUILD,b(rn))});var Dn={};function Tn(e,r){let n=e.slice(4).split(".").map(Number),t=r.slice(4).split(".").map(Number);for(let i=0;i<t.length;i++){if(n[i]>t[i])return!0;if(n[i]<t[i])return!1}return!1}function je(){let e=(0,w.dirname)(process.execPath),r=(0,w.basename)(e),n=(0,w.join)(e,".."),t=(0,U.readdirSync)(n).reduce((a,o)=>o.startsWith("app-")&&Tn(o,a)?o:a,r);if(t===r)return;let i=(0,w.join)(n,t,"resources","app");if((0,U.existsSync)(i))return;console.info("[Vencord] Detected Host Update. Repatching...");let u=(0,w.join)(__dirname,"patcher.js");(0,U.mkdirSync)(i),(0,U.writeFileSync)((0,w.join)(i,"package.json"),JSON.stringify({name:"discord",main:"index.js"})),(0,U.writeFileSync)((0,w.join)(i,"index.js"),`require(${JSON.stringify(u)});`)}function En(){let e=require.main,r=require((0,w.join)(process.resourcesPath,"build_info.json"));try{if(r?.newUpdater){let n=(0,w.join)(e.filename,"..","autoStart","win32.js"),{update:t}=require(n);require.cache[n].exports.update=function(){je(),t.apply(this,arguments)}}else{let n=(0,w.join)(e.filename,"..","hostUpdater.js"),{quitAndInstall:t}=require(n);require.cache[n].exports.quitAndInstall=function(){je(),t.apply(this,arguments)}}}catch{let{quitAndInstall:n}=Z.autoUpdater;Z.autoUpdater.quitAndInstall=function(){je(),n.call(this)}}}var Z,U,w,jr,Br=P(()=>{"use strict";f();Z=require("electron"),U=require("fs"),w=require("path"),{setAppUserModelId:jr}=Z.app;Z.app.setAppUserModelId=function(e){Z.app.setAppUserModelId=jr,jr.call(this,e),En()}});f();f();function Qe(e,r,n){let t=r;if(r in e)return void n(e[t]);Object.defineProperty(e,r,{set(i){delete e[t],e[t]=i,n(i)},configurable:!0,enumerable:!1})}var x=Ee(require("electron")),Lr=require("fs"),k=require("path");f();f();ve();var Xe=require("electron"),Je=require("fs/promises"),$e=require("path");ge();Xe.ipcMain.handleOnce(g.DOWNLOAD_VENCORD_CSS,async()=>{let e=await _("https://github.com/Vendicated/Vencord/releases/download/devbuild/renderer.css");return await(0,Je.writeFile)((0,$e.join)(__dirname,"renderer.css"),e),e.toString("utf-8")});f();Promise.resolve().then(()=>lr());f();function hr(e,r=300){let n;return function(...t){clearTimeout(n),n=setTimeout(()=>{e(...t)},r)}}ve();f();var ce=class{constructor(r=1/0){this.maxSize=r}queue=[];promise;next(){let r=this.queue.shift();r?this.promise=Promise.resolve().then(r).finally(()=>this.next()):this.promise=void 0}run(){this.promise||this.next()}push(r){this.size>=this.maxSize&&this.queue.shift(),this.queue.push(r),this.run()}unshift(r){this.size>=this.maxSize&&this.queue.pop(),this.queue.unshift(r),this.run()}get size(){return this.queue.length}};var I=require("electron"),ee=require("fs"),F=require("fs/promises"),mr=require("path");f();var pr="PCFkb2N0eXBlIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KCjxoZWFkPgogICAgPG1ldGEgY2hhcnNldD0idXRmLTgiPgogICAgPHRpdGxlPlF1aWNrQ3NzIEVkaXRvcjwvdGl0bGU+CiAgICA8bGluayByZWw9InN0eWxlc2hlZXQiIGRhdGEtbmFtZT0idnMvZWRpdG9yL2VkaXRvci5tYWluIgogICAgICAgIGhyZWY9Imh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21vbmFjby1lZGl0b3IvMC4zNC4wL21pbi92cy9lZGl0b3IvZWRpdG9yLm1haW4ubWluLmNzcyI+CiAgICA8c3R5bGU+CiAgICAgICAgaHRtbCwKICAgICAgICBib2R5LAogICAgICAgICNjb250YWluZXIgewogICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgICAgIGxlZnQ6IDA7CiAgICAgICAgICAgIHRvcDogMDsKICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgICAgIGhlaWdodDogMTAwJTsKICAgICAgICAgICAgbWFyZ2luOiAwOwogICAgICAgICAgICBwYWRkaW5nOiAwOwogICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOwogICAgICAgIH0KICAgIDwvc3R5bGU+CjwvaGVhZD4KCjxib2R5PgogICAgPGRpdiBpZD0iY29udGFpbmVyIj48L2Rpdj4KICAgIDxzY3JpcHQgc3JjPSJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuMzQuMC9taW4vdnMvbG9hZGVyLm1pbi5qcyI+PC9zY3JpcHQ+CgogICAgPHNjcmlwdD4KICAgICAgICByZXF1aXJlLmNvbmZpZyh7IHBhdGhzOiB7ICd2cyc6ICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuMzQuMC9taW4vdnMnIH0gfSk7CiAgICAgICAgcmVxdWlyZShbInZzL2VkaXRvci9lZGl0b3IubWFpbiJdLCAoKSA9PiB7CiAgICAgICAgICAgIGdldEN1cnJlbnRDc3MoKS50aGVuKGNzcyA9PiB7CiAgICAgICAgICAgICAgICB2YXIgZWRpdG9yID0gbW9uYWNvLmVkaXRvci5jcmVhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpLCB7CiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNzcywKICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZTogJ2NzcycsCiAgICAgICAgICAgICAgICAgICAgdGhlbWU6IGdldFRoZW1lKCksCiAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIGVkaXRvci5vbkRpZENoYW5nZU1vZGVsQ29udGVudCgoKSA9PgogICAgICAgICAgICAgICAgICAgIHNldENzcyhlZGl0b3IuZ2V0VmFsdWUoKSkKICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigicmVzaXplIiwgKCkgPT4gewogICAgICAgICAgICAgICAgICAgIC8vIG1ha2UgbW9uYWNvIHJlLWxheW91dAogICAgICAgICAgICAgICAgICAgIGVkaXRvci5sYXlvdXQoKTsKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9KTsKICAgICAgICB9KTsKCgogICAgPC9zY3JpcHQ+CjwvYm9keT4KCjwvaHRtbD4K";f();var vr=require("electron"),J=require("path"),Ge=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,J.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,J.join)(vr.app.getPath("userData"),"..","Vencord")),fe=(0,J.join)(Ge,"settings"),$=(0,J.join)(fe,"quickCss.css"),Pe=(0,J.join)(fe,"settings.json"),gr=["https:","http:","steam:","spotify:"];(0,ee.mkdirSync)(fe,{recursive:!0});function dr(){return(0,F.readFile)($,"utf-8").catch(()=>"")}function Oe(){try{return(0,ee.readFileSync)(Pe,"utf-8")}catch{return"{}"}}I.ipcMain.handle(g.GET_DESKTOP_CAPTURE_SOURCES,(e,r)=>I.desktopCapturer.getSources(r));I.ipcMain.handle(g.OPEN_QUICKCSS,()=>I.shell.openPath($));I.ipcMain.handle(g.OPEN_EXTERNAL,(e,r)=>{try{var{protocol:n}=new URL(r)}catch{throw"Malformed URL"}if(!gr.includes(n))throw"Disallowed protocol.";I.shell.openExternal(r)});var tn=new ce,an=new ce;I.ipcMain.handle(g.GET_QUICK_CSS,()=>dr());I.ipcMain.handle(g.SET_QUICK_CSS,(e,r)=>tn.push(()=>(0,F.writeFile)($,r)));I.ipcMain.handle(g.GET_SETTINGS_DIR,()=>fe);I.ipcMain.on(g.GET_SETTINGS,e=>e.returnValue=Oe());I.ipcMain.handle(g.SET_SETTINGS,(e,r)=>{an.push(()=>(0,F.writeFile)(Pe,r))});function Cr(e){(0,F.open)($,"a+").then(r=>{r.close(),(0,ee.watch)($,hr(async()=>{e.webContents.postMessage(g.QUICK_CSS_UPDATE,await dr())},50))})}I.ipcMain.handle(g.OPEN_MONACO_EDITOR,async()=>{await new I.BrowserWindow({title:"QuickCss Editor",autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,mr.join)(__dirname,"preload.js"),contextIsolation:!0,nodeIntegration:!1}}).loadURL(`data:text/html;base64,${pr}`)});f();var Wr=require("electron");f();var Ar=require("module"),on=(0,Ar.createRequire)("/"),de,sn=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{de=on("worker_threads").Worker}catch{}var un=de?function(e,r,n,t,i){var u=!1,a=new de(e+sn,{eval:!0}).on("error",function(o){return i(o,null)}).on("message",function(o){return i(null,o)}).on("exit",function(o){o&&!u&&i(new Error("exited with code "+o),null)});return a.postMessage(n,t),a.terminate=function(){return u=!0,de.prototype.terminate.call(a)},a}:function(e,r,n,t,i){setImmediate(function(){return i(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var u=function(){};return{terminate:u,postMessage:u}},y=Uint8Array,j=Uint16Array,Ne=Uint32Array,Ve=new y([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),We=new y([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),wr=new y([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),xr=function(e,r){for(var n=new j(31),t=0;t<31;++t)n[t]=r+=1<<e[t-1];for(var i=new Ne(n[30]),t=1;t<30;++t)for(var u=n[t];u<n[t+1];++u)i[u]=u-n[t]<<5|t;return[n,i]},Sr=xr(Ve,2),Me=Sr[0],cn=Sr[1];Me[28]=258,cn[258]=28;var Tr=xr(We,0),Er=Tr[0],wt=Tr[1],ye=new j(32768);for(l=0;l<32768;++l)O=(l&43690)>>>1|(l&21845)<<1,O=(O&52428)>>>2|(O&13107)<<2,O=(O&61680)>>>4|(O&3855)<<4,ye[l]=((O&65280)>>>8|(O&255)<<8)>>>1;var O,l,re=function(e,r,n){for(var t=e.length,i=0,u=new j(r);i<t;++i)e[i]&&++u[e[i]-1];var a=new j(r);for(i=0;i<r;++i)a[i]=a[i-1]+u[i-1]<<1;var o;if(n){o=new j(1<<r);var s=15-r;for(i=0;i<t;++i)if(e[i])for(var c=i<<4|e[i],h=r-e[i],m=a[e[i]-1]++<<h,E=m|(1<<h)-1;m<=E;++m)o[ye[m]>>>s]=c}else for(o=new j(t),i=0;i<t;++i)e[i]&&(o[i]=ye[a[e[i]-1]++]>>>15-e[i]);return o},le=new y(288);for(l=0;l<144;++l)le[l]=8;var l;for(l=144;l<256;++l)le[l]=9;var l;for(l=256;l<280;++l)le[l]=7;var l;for(l=280;l<288;++l)le[l]=8;var l,Dr=new y(32);for(l=0;l<32;++l)Dr[l]=5;var l;var zr=re(le,9,1);var Rr=re(Dr,5,1),Ce=function(e){for(var r=e[0],n=1;n<e.length;++n)e[n]>r&&(r=e[n]);return r},T=function(e,r,n){var t=r/8|0;return(e[t]|e[t+1]<<8)>>(r&7)&n},Ie=function(e,r){var n=r/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(r&7)},Gr=function(e){return(e+7)/8|0},Ae=function(e,r,n){(r==null||r<0)&&(r=0),(n==null||n>e.length)&&(n=e.length);var t=new(e.BYTES_PER_ELEMENT==2?j:e.BYTES_PER_ELEMENT==4?Ne:y)(n-r);return t.set(e.subarray(r,n)),t};var Pr=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],A=function(e,r,n){var t=new Error(r||Pr[e]);if(t.code=e,Error.captureStackTrace&&Error.captureStackTrace(t,A),!n)throw t;return t},Or=function(e,r,n){var t=e.length;if(!t||n&&n.f&&!n.l)return r||new y(0);var i=!r||n,u=!n||n.i;n||(n={}),r||(r=new y(t*3));var a=function(Ke){var qe=r.length;if(Ke>qe){var He=new y(Math.max(qe*2,Ke));He.set(r),r=He}},o=n.f||0,s=n.p||0,c=n.b||0,h=n.l,m=n.d,E=n.m,N=n.n,te=t*8;do{if(!h){o=T(e,s,1);var B=T(e,s+1,3);if(s+=3,B)if(B==1)h=zr,m=Rr,E=9,N=5;else if(B==2){var W=T(e,s,31)+257,K=T(e,s+10,15)+4,ie=W+T(e,s+5,31)+1;s+=14;for(var L=new y(ie),ae=new y(19),C=0;C<K;++C)ae[wr[C]]=T(e,s+C*3,7);s+=K*3;for(var G=Ce(ae),he=(1<<G)-1,q=re(ae,G,1),C=0;C<ie;){var oe=q[T(e,s,he)];s+=oe&15;var d=oe>>>4;if(d<16)L[C++]=d;else{var H=0,pe=0;for(d==16?(pe=3+T(e,s,3),s+=2,H=L[C-1]):d==17?(pe=3+T(e,s,7),s+=3):d==18&&(pe=11+T(e,s,127),s+=7);pe--;)L[C++]=H}}var Le=L.subarray(0,W),M=L.subarray(W);E=Ce(Le),N=Ce(M),h=re(Le,E,1),m=re(M,N,1)}else A(1);else{var d=Gr(s)+4,S=e[d-4]|e[d-3]<<8,V=d+S;if(V>t){u&&A(0);break}i&&a(c+S),r.set(e.subarray(d,V),c),n.b=c+=S,n.p=s=V*8,n.f=o;continue}if(s>te){u&&A(0);break}}i&&a(c+131072);for(var Zr=(1<<E)-1,Kr=(1<<N)-1,we=s;;we=s){var H=h[Ie(e,s)&Zr],Y=H>>>4;if(s+=H&15,s>te){u&&A(0);break}if(H||A(2),Y<256)r[c++]=Y;else if(Y==256){we=s,h=null;break}else{var Fe=Y-254;if(Y>264){var C=Y-257,se=Ve[C];Fe=T(e,s,(1<<se)-1)+Me[C],s+=se}var xe=m[Ie(e,s)&Kr],Se=xe>>>4;xe||A(3),s+=xe&15;var M=Er[Se];if(Se>3){var se=We[Se];M+=Ie(e,s)&(1<<se)-1,s+=se}if(s>te){u&&A(0);break}i&&a(c+131072);for(var Ze=c+Fe;c<Ze;c+=4)r[c]=r[c-M],r[c+1]=r[c+1-M],r[c+2]=r[c+2-M],r[c+3]=r[c+3-M];c=Ze}}n.l=h,n.p=we,n.b=c,n.f=o,h&&(o=1,n.m=E,n.d=m,n.n=N)}while(!o);return c==r.length?r:Ae(r,0,c)};var fn=new y(0);var ln=function(e,r){var n={};for(var t in e)n[t]=e[t];for(var t in r)n[t]=r[t];return n},Ir=function(e,r,n){for(var t=e(),i=e.toString(),u=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),a=0;a<t.length;++a){var o=t[a],s=u[a];if(typeof o=="function"){r+=";"+s+"=";var c=o.toString();if(o.prototype)if(c.indexOf("[native code]")!=-1){var h=c.indexOf(" ",8)+1;r+=c.slice(h,c.indexOf("(",h))}else{r+=c;for(var m in o.prototype)r+=";"+s+".prototype."+m+"="+o.prototype[m].toString()}else r+=c}else n[s]=o}return[r,n]},me=[],hn=function(e){var r=[];for(var n in e)e[n].buffer&&r.push((e[n]=new e[n].constructor(e[n])).buffer);return r},pn=function(e,r,n,t){var i;if(!me[n]){for(var u="",a={},o=e.length-1,s=0;s<o;++s)i=Ir(e[s],u,a),u=i[0],a=i[1];me[n]=Ir(e[o],u,a)}var c=ln({},me[n][1]);return un(me[n][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+r.toString()+"}",n,c,hn(c),t)},vn=function(){return[y,j,Ne,Ve,We,wr,Me,Er,zr,Rr,ye,Pr,re,Ce,T,Ie,Gr,Ae,A,Or,_e,Ur,kr]};var Ur=function(e){return postMessage(e,[e.buffer])},kr=function(e){return e&&e.size&&new y(e.size)},gn=function(e,r,n,t,i,u){var a=pn(n,t,i,function(o,s){a.terminate(),u(o,s)});return a.postMessage([e,r],r.consume?[e.buffer]:[]),function(){a.terminate()}};var z=function(e,r){return e[r]|e[r+1]<<8},D=function(e,r){return(e[r]|e[r+1]<<8|e[r+2]<<16|e[r+3]<<24)>>>0},Ue=function(e,r){return D(e,r)+D(e,r+4)*4294967296};function mn(e,r,n){return n||(n=r,r={}),typeof n!="function"&&A(7),gn(e,r,[vn],function(t){return Ur(_e(t.data[0],kr(t.data[1])))},1,n)}function _e(e,r){return Or(e,r)}var ke=typeof TextDecoder<"u"&&new TextDecoder,dn=0;try{ke.decode(fn,{stream:!0}),dn=1}catch{}var Cn=function(e){for(var r="",n=0;;){var t=e[n++],i=(t>127)+(t>223)+(t>239);if(n+i>e.length)return[r,Ae(e,n-1)];i?i==3?(t=((t&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,r+=String.fromCharCode(55296|t>>10,56320|t&1023)):i&1?r+=String.fromCharCode((t&31)<<6|e[n++]&63):r+=String.fromCharCode((t&15)<<12|(e[n++]&63)<<6|e[n++]&63):r+=String.fromCharCode(t)}};function In(e,r){if(r){for(var n="",t=0;t<e.length;t+=16384)n+=String.fromCharCode.apply(null,e.subarray(t,t+16384));return n}else{if(ke)return ke.decode(e);var i=Cn(e),u=i[0],a=i[1];return a.length&&A(8),u}}var yn=function(e,r){return r+30+z(e,r+26)+z(e,r+28)},An=function(e,r,n){var t=z(e,r+28),i=In(e.subarray(r+46,r+46+t),!(z(e,r+8)&2048)),u=r+46+t,a=D(e,r+20),o=n&&a==4294967295?wn(e,u):[a,D(e,r+24),D(e,r+42)],s=o[0],c=o[1],h=o[2];return[z(e,r+10),s,c,i,u+z(e,r+30)+z(e,r+32),h]},wn=function(e,r){for(;z(e,r)!=1;r+=4+z(e,r+2));return[Ue(e,r+12),Ue(e,r+4),Ue(e,r+20)]};var yr=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(e){e()};function Nr(e,r,n){n||(n=r,r={}),typeof n!="function"&&A(7);var t=[],i=function(){for(var d=0;d<t.length;++d)t[d]()},u={},a=function(d,S){yr(function(){n(d,S)})};yr(function(){a=n});for(var o=e.length-22;D(e,o)!=101010256;--o)if(!o||e.length-o>65558)return a(A(13,0,1),null),i;var s=z(e,o+8);if(s){var c=s,h=D(e,o+16),m=h==4294967295||c==65535;if(m){var E=D(e,o-12);m=D(e,E)==101075792,m&&(c=s=D(e,E+32),h=D(e,E+48))}for(var N=r&&r.filter,te=function(d){var S=An(e,h,m),V=S[0],W=S[1],K=S[2],ie=S[3],L=S[4],ae=S[5],C=yn(e,ae);h=L;var G=function(q,oe){q?(i(),a(q,null)):(oe&&(u[ie]=oe),--s||a(null,u))};if(!N||N({name:ie,size:W,originalSize:K,compression:V}))if(!V)G(null,Ae(e,C,C+W));else if(V==8){var he=e.subarray(C,C+W);if(W<32e4)try{G(null,_e(he,new y(K)))}catch(q){G(q,null)}else t.push(mn(he,{size:K},G))}else G(A(14,"unknown compression type "+V,1),null);else G(null,null)},B=0;B<c;++B)te(B)}else a(null,{});return i}var Mr=require("fs"),R=require("fs/promises"),ne=require("path");f();function Vr(e){function r(a,o,s,c){let h=0;return h+=a<<0,h+=o<<8,h+=s<<16,h+=c<<24>>>0,h}if(e[0]===80&&e[1]===75&&e[2]===3&&e[3]===4)return e;if(e[0]!==67||e[1]!==114||e[2]!==50||e[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let n=e[4]===3,t=e[4]===2;if(!t&&!n||e[5]||e[6]||e[7])throw new Error("Unexpected crx format version number.");if(t){let a=r(e[8],e[9],e[10],e[11]),o=r(e[12],e[13],e[14],e[15]),s=16+a+o;return e.subarray(s,e.length)}let u=12+r(e[8],e[9],e[10],e[11]);return e.subarray(u,e.length)}ge();var xn=(0,ne.join)(Ge,"ExtensionCache");async function Sn(e,r){return await(0,R.mkdir)(r,{recursive:!0}),new Promise((n,t)=>{Nr(e,(i,u)=>{if(i)return void t(i);Promise.all(Object.keys(u).map(async a=>{if(a.startsWith("_metadata/"))return;if(a.endsWith("/"))return void(0,R.mkdir)((0,ne.join)(r,a),{recursive:!0});let o=a.split("/"),s=o.pop(),c=o.join("/"),h=(0,ne.join)(r,c);c&&await(0,R.mkdir)(h,{recursive:!0}),await(0,R.writeFile)((0,ne.join)(h,s),u[a])})).then(()=>n()).catch(a=>{(0,R.rm)(r,{recursive:!0,force:!0}),t(a)})})})}async function _r(e){let r=(0,ne.join)(xn,`${e}`);try{await(0,R.access)(r,Mr.constants.F_OK)}catch{let t=`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${e}%26uc&prodversion=32`,i=await _(t);await Sn(Vr(i),r)}Wr.session.defaultSession.loadExtension(r)}console.log("[Vencord] Starting up...");var Fr=require.main.filename,zn=require.main.path.endsWith("app.asar")?"_app.asar":"app.asar",Be=(0,k.join)((0,k.dirname)(Fr),"..",zn),Rn=require((0,k.join)(Be,"package.json"));require.main.filename=(0,k.join)(Be,Rn.main);x.app.setAppPath(Be);if(process.argv.includes("--vanilla"))console.log("[Vencord] Running in vanilla mode. Not loading Vencord");else{process.platform==="win32"&&(Br(),Xr(Dn));class e extends x.default.BrowserWindow{constructor(t){if(t?.webPreferences?.preload&&t.title){let i=t.webPreferences.preload;t.webPreferences.preload=(0,k.join)(__dirname,"preload.js"),t.webPreferences.sandbox=!1,process.env.DISCORD_PRELOAD=i,super(t),Cr(this)}else super(t)}}Object.assign(e,x.default.BrowserWindow),Object.defineProperty(e,"name",{value:"BrowserWindow",configurable:!0});let r=require.resolve("electron");delete require.cache[r].exports,require.cache[r].exports={...x.default,BrowserWindow:e},Qe(global,"appSettings",n=>n.set("DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING",!0)),process.env.DATA_DIR=(0,k.join)(x.app.getPath("userData"),"..","Vencord"),x.default.app.whenReady().then(()=>{x.default.protocol.registerFileProtocol("vencord",({url:u},a)=>{let o=u.slice(10);switch(o.endsWith("/")&&(o=o.slice(0,-1)),o){case"renderer.js.map":case"preload.js.map":case"patcher.js.map":a((0,k.join)(__dirname,o));break;default:a({statusCode:403})}});try{JSON.parse(Oe()).enableReactDevtools&&_r("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(a=>console.error("[Vencord] Failed to install React Developer Tools",a))}catch{}let n=u=>{let a={};return u.split(";").forEach(o=>{let[s,...c]=o.trim().split(/\s+/g);s&&!Object.prototype.hasOwnProperty.call(a,s)&&(a[s]=c)}),a},t=u=>Object.entries(u).filter(([,a])=>a?.length).map(a=>a.flat().join(" ")).join("; ");function i(u,a){if(a in u){let o=n(u[a][0]);for(let s of["style-src","connect-src","img-src","font-src","media-src","worker-src"])o[s]=["*","blob:","data:","'unsafe-inline'"];o["script-src"]??=[],o["script-src"].push("'unsafe-eval'","https://unpkg.com","https://cdnjs.cloudflare.com"),u[a]=[t(o)]}}x.default.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:u,resourceType:a},o)=>{u&&(a==="mainFrame"&&i(u,"content-security-policy"),a==="stylesheet"&&(u["content-type"]=["text/css"])),o({cancel:!1,responseHeaders:u}),process.platform==="win32"&&x.globalShortcut.register("Control+Q",()=>{x.app.quit()})})})}console.log("[Vencord] Loading original Discord app.asar");if((0,Lr.readFileSync)(Fr,"utf-8").includes('require("../app.asar")')){console.warn("[Vencord] [--> WARNING <--] You have a legacy Vencord install. Please reinject");let e=require("module"),r=e._load;e._load=function(n){return n==="../app.asar"&&(e._load=r,arguments[0]=require.main.filename),r.apply(this,arguments)}}else require(require.main.filename);
//# sourceURL=VencordPatcher
//# sourceMappingURL=vencord://patcher.js.map
/*! For license information please see patcher.js.LEGAL.txt */
