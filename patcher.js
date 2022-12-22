// Vencord 6dd705f
// Standalone: true
// Platform: Universal
"use strict";var Zr=Object.create;var xe=Object.defineProperty;var Fr=Object.getOwnPropertyDescriptor;var Kr=Object.getOwnPropertyNames;var qr=Object.getPrototypeOf,Hr=Object.prototype.hasOwnProperty;var P=(e,r)=>()=>(e&&(r=e(e=0)),r);var Ye=(e,r,n,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of Kr(r))!Hr.call(e,i)&&i!==n&&xe(e,i,{get:()=>r[i],enumerable:!(t=Fr(r,i))||t.enumerable});return e};var Se=(e,r,n)=>(n=e!=null?Zr(qr(e)):{},Ye(r||!e||!e.__esModule?xe(n,"default",{value:e,enumerable:!0}):n,e)),Yr=e=>Ye(xe({},"__esModule",{value:!0}),e);var p,f=P(()=>{"use strict";p=Symbol.for("react.fragment")});var ue,Te=P(()=>{f();ue="6dd705f"});var Y,Ee=P(()=>{f();Y="Vendicated/Vencord"});var Xe,Vn,be=P(()=>{"use strict";f();Te();Ee();Xe=`Vencord/${ue}${Y?` (https://github.com/${Y})`:""}`,Vn=Object.freeze({Ven:{name:"Vendicated",id:343383572805058560n},Arjix:{name:"ArjixWasTaken",id:674710789138939916n},Cyn:{name:"Cynosphere",id:150745989836308480n},Megu:{name:"Megumin",id:545581357812678656n},botato:{name:"botato",id:440990343899643943n},obscurity:{name:"obscurity",id:336678828233588736n},rushii:{name:"rushii",id:295190422244950017n},Glitch:{name:"Glitchy",id:269567451199569920n},Samu:{name:"Samu",id:702973430449832038n},Animal:{name:"Animal",id:118437263754395652n},MaiKokain:{name:"Mai",id:722647978577363026n},echo:{name:"ECHO",id:712639419785412668n},katlyn:{name:"katlyn",id:250322741406859265n},nea:{name:"nea",id:310702108997320705n},Nuckyz:{name:"Nuckyz",id:235834946571337729n},D3SOX:{name:"D3SOX",id:201052085641281538n},Nickyux:{name:"Nickyux",id:427146305651998721n},mantikafasi:{name:"mantikafasi",id:287555395151593473n},Xinto:{name:"Xinto",id:423915768191647755n},JacobTm:{name:"Jacob.Tm",id:302872992097107991n},DustyAngel47:{name:"DustyAngel47",id:714583473804935238n},BanTheNons:{name:"BanTheNons",id:460478012794863637n},BigDuck:{name:"BigDuck",id:1024588272623681609n},AverageReactEnjoyer:{name:"Average React Enjoyer",id:1004904120056029256n},adryd:{name:"adryd",id:0n},Tyman:{name:"Tyman",id:487443883127472129n},afn:{name:"afn",id:420043923822608384n},KraXen72:{name:"KraXen72",id:379304073515499530n},kemo:{name:"kemo",id:299693897859465228n},dzshn:{name:"dzshn",id:310449948011528192n},Ducko:{name:"Ducko",id:506482395269169153n},jewdev:{name:"jewdev",id:222369866529636353n},Luna:{name:"Luny",id:821472922140803112n},Vap:{name:"Vap0r1ze",id:454072114492866560n},KingFish:{name:"King Fish",id:499400512559382538n},Commandtechno:{name:"Commandtechno",id:296776625432035328n},TheSun:{name:"ActuallyTheSun",id:406028027768733696n},axyie:{name:"'ax",id:273562710745284628n}})});function Qr(e){let r={};for(let n in e)r[n]=e[n],r[e[n]]=n;return Object.freeze(r)}var C,ze=P(()=>{"use strict";f();C=Qr({QUICK_CSS_UPDATE:"VencordQuickCssUpdate",GET_QUICK_CSS:"VencordGetQuickCss",SET_QUICK_CSS:"VencordSetQuickCss",GET_SETTINGS_DIR:"VencordGetSettingsDir",GET_SETTINGS:"VencordGetSettings",SET_SETTINGS:"VencordSetSettings",OPEN_EXTERNAL:"VencordOpenExternal",OPEN_QUICKCSS:"VencordOpenQuickCss",GET_UPDATES:"VencordGetUpdates",GET_REPO:"VencordGetRepo",GET_HASHES:"VencordGetHashes",UPDATE:"VencordUpdate",BUILD:"VencordBuild",GET_DESKTOP_CAPTURE_SOURCES:"VencordGetDesktopCaptureSources",OPEN_MONACO_EDITOR:"VencordOpenMonacoEditor"})});function Q(e,r={}){return new Promise((n,t)=>{Je.default.get(e,r,i=>{let{statusCode:u,statusMessage:a,headers:o}=i;if(u>=400)return void t(`${u}: ${a} - ${e}`);if(u>=300)return void n(Q(o.location,r));let s=[];i.on("error",t),i.on("data",c=>s.push(c)),i.once("end",()=>n(Buffer.concat(s)))})})}var Je,De=P(()=>{"use strict";f();Je=Se(require("https"))});async function nr(){let e={};return await Promise.all(["patcher.js","preload.js","renderer.js"].map(r=>new Promise(n=>{let t=(0,er.createReadStream)((0,rr.join)(__dirname,r)),i=(0,$e.createHash)("sha1",{encoding:"hex"});t.once("end",()=>{i.end(),e[r]=i.read(),n()}),t.pipe(i)}))),e}function X(e){return async function(){try{return{ok:!0,value:await e(...arguments)}}catch(r){return{ok:!1,error:r instanceof Error?{...r}:r}}}}var $e,er,rr,tr=P(()=>{"use strict";f();$e=require("crypto"),er=require("fs"),rr=require("path")});var $r={};async function or(e){return Q(Xr+e,{headers:{Accept:"application/vnd.github+json","User-Agent":Xe}})}async function br(){if(!await sr())return[];let r=await or(`/compare/${ue}...HEAD`);return JSON.parse(r.toString("utf-8")).commits.map(t=>({hash:t.sha.slice(0,7),author:t.author.login,message:t.commit.message}))}async function sr(){let e=await or("/releases/latest"),r=JSON.parse(e.toString());return r.name.slice(r.name.lastIndexOf(" ")+1)===ue?!1:(r.assets.forEach(({name:t,browser_download_url:i})=>{["patcher.js","preload.js","renderer.js"].some(u=>t.startsWith(u))&&Re.push([t,i])}),!0)}async function Jr(){return await Promise.all(Re.map(async([e,r])=>(0,ir.writeFile)((0,ar.join)(__dirname,e),await Q(r)))),Re=[],!0}var b,ir,ar,Xr,Re,ur=P(()=>{"use strict";f();be();ze();b=require("electron"),ir=require("fs/promises"),ar=require("path");Te();Ee();De();tr();Xr=`https://api.github.com/repos/${Y}`,Re=[];b.ipcMain.handle(C.GET_HASHES,X(nr));b.ipcMain.handle(C.GET_REPO,X(()=>`https://github.com/${Y}`));b.ipcMain.handle(C.GET_UPDATES,X(br));b.ipcMain.handle(C.UPDATE,X(sr));b.ipcMain.handle(C.BUILD,X(Jr))});var Sn={};function wn(e,r){let n=e.slice(4).split(".").map(Number),t=r.slice(4).split(".").map(Number);for(let i=0;i<t.length;i++){if(n[i]>t[i])return!0;if(n[i]<t[i])return!1}return!1}function Be(){let e=(0,w.dirname)(process.execPath),r=(0,w.basename)(e),n=(0,w.join)(e,".."),t=(0,k.readdirSync)(n).reduce((a,o)=>o.startsWith("app-")&&wn(o,a)?o:a,r);if(t===r)return;let i=(0,w.join)(n,t,"resources","app");if((0,k.existsSync)(i))return;console.info("[Vencord] Detected Host Update. Repatching...");let u=(0,w.join)(__dirname,"patcher.js");(0,k.mkdirSync)(i),(0,k.writeFileSync)((0,w.join)(i,"package.json"),JSON.stringify({name:"discord",main:"index.js"})),(0,k.writeFileSync)((0,w.join)(i,"index.js"),`require(${JSON.stringify(u)});`)}function xn(){let e=require.main,r=require((0,w.join)(process.resourcesPath,"build_info.json"));try{if(r?.newUpdater){let n=(0,w.join)(e.filename,"..","autoStart","win32.js"),{update:t}=require(n);require.cache[n].exports.update=function(){Be(),t.apply(this,arguments)}}else{let n=(0,w.join)(e.filename,"..","hostUpdater.js"),{quitAndInstall:t}=require(n);require.cache[n].exports.quitAndInstall=function(){Be(),t.apply(this,arguments)}}}catch{let{quitAndInstall:n}=Z.autoUpdater;Z.autoUpdater.quitAndInstall=function(){Be(),n.call(this)}}}var Z,k,w,Vr,Mr=P(()=>{"use strict";f();Z=require("electron"),k=require("fs"),w=require("path"),{setAppUserModelId:Vr}=Z.app;Z.app.setAppUserModelId=function(e){Z.app.setAppUserModelId=Vr,Vr.call(this,e),xn()}});f();f();function Qe(e,r,n){let t=r;if(r in e)return void n(e[t]);Object.defineProperty(e,r,{set(i){delete e[t],e[t]=i,n(i)},configurable:!0,enumerable:!1})}var R=Se(require("electron")),jr=require("fs"),O=require("path");f();f();Promise.resolve().then(()=>ur());f();function cr(e,r=300){let n;return function(...t){clearTimeout(n),n=setTimeout(()=>{e(...t)},r)}}ze();f();var ce=class{constructor(r=1/0){this.maxSize=r}queue=[];promise;next(){let r=this.queue.shift();r?this.promise=Promise.resolve().then(r).finally(()=>this.next()):this.promise=void 0}run(){this.promise||this.next()}push(r){this.size>=this.maxSize&&this.queue.shift(),this.queue.push(r),this.run()}unshift(r){this.size>=this.maxSize&&this.queue.pop(),this.queue.unshift(r),this.run()}get size(){return this.queue.length}};var I=require("electron"),ee=require("fs"),_=require("fs/promises"),pr=require("path");f();var fr="PCFkb2N0eXBlIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KCjxoZWFkPgogICAgPG1ldGEgY2hhcnNldD0idXRmLTgiPgogICAgPHRpdGxlPlF1aWNrQ3NzIEVkaXRvcjwvdGl0bGU+CiAgICA8bGluayByZWw9InN0eWxlc2hlZXQiIGRhdGEtbmFtZT0idnMvZWRpdG9yL2VkaXRvci5tYWluIgogICAgICAgIGhyZWY9Imh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21vbmFjby1lZGl0b3IvMC4zNC4wL21pbi92cy9lZGl0b3IvZWRpdG9yLm1haW4ubWluLmNzcyI+CiAgICA8c3R5bGU+CiAgICAgICAgaHRtbCwKICAgICAgICBib2R5LAogICAgICAgICNjb250YWluZXIgewogICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgICAgIGxlZnQ6IDA7CiAgICAgICAgICAgIHRvcDogMDsKICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgICAgIGhlaWdodDogMTAwJTsKICAgICAgICAgICAgbWFyZ2luOiAwOwogICAgICAgICAgICBwYWRkaW5nOiAwOwogICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOwogICAgICAgIH0KICAgIDwvc3R5bGU+CjwvaGVhZD4KCjxib2R5PgogICAgPGRpdiBpZD0iY29udGFpbmVyIj48L2Rpdj4KICAgIDxzY3JpcHQgc3JjPSJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuMzQuMC9taW4vdnMvbG9hZGVyLm1pbi5qcyI+PC9zY3JpcHQ+CgogICAgPHNjcmlwdD4KICAgICAgICByZXF1aXJlLmNvbmZpZyh7IHBhdGhzOiB7ICd2cyc6ICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuMzQuMC9taW4vdnMnIH0gfSk7CiAgICAgICAgcmVxdWlyZShbInZzL2VkaXRvci9lZGl0b3IubWFpbiJdLCAoKSA9PiB7CiAgICAgICAgICAgIGdldEN1cnJlbnRDc3MoKS50aGVuKGNzcyA9PiB7CiAgICAgICAgICAgICAgICB2YXIgZWRpdG9yID0gbW9uYWNvLmVkaXRvci5jcmVhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpLCB7CiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNzcywKICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZTogJ2NzcycsCiAgICAgICAgICAgICAgICAgICAgdGhlbWU6IGdldFRoZW1lKCksCiAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIGVkaXRvci5vbkRpZENoYW5nZU1vZGVsQ29udGVudCgoKSA9PgogICAgICAgICAgICAgICAgICAgIHNldENzcyhlZGl0b3IuZ2V0VmFsdWUoKSkKICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigicmVzaXplIiwgKCkgPT4gewogICAgICAgICAgICAgICAgICAgIC8vIG1ha2UgbW9uYWNvIHJlLWxheW91dAogICAgICAgICAgICAgICAgICAgIGVkaXRvci5sYXlvdXQoKTsKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9KTsKICAgICAgICB9KTsKCgogICAgPC9zY3JpcHQ+CjwvYm9keT4KCjwvaHRtbD4K";f();var lr=require("electron"),J=require("path"),Ge=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,J.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,J.join)(lr.app.getPath("userData"),"..","Vencord")),fe=(0,J.join)(Ge,"settings"),$=(0,J.join)(fe,"quickCss.css"),Pe=(0,J.join)(fe,"settings.json"),hr=["https:","http:","steam:","spotify:"];(0,ee.mkdirSync)(fe,{recursive:!0});function vr(){return(0,_.readFile)($,"utf-8").catch(()=>"")}function Ue(){try{return(0,ee.readFileSync)(Pe,"utf-8")}catch{return"{}"}}I.ipcMain.handle(C.GET_DESKTOP_CAPTURE_SOURCES,(e,r)=>I.desktopCapturer.getSources(r));I.ipcMain.handle(C.OPEN_QUICKCSS,()=>I.shell.openPath($));I.ipcMain.handle(C.OPEN_EXTERNAL,(e,r)=>{try{var{protocol:n}=new URL(r)}catch{throw"Malformed URL"}if(!hr.includes(n))throw"Disallowed protocol.";I.shell.openExternal(r)});var en=new ce,rn=new ce;I.ipcMain.handle(C.GET_QUICK_CSS,()=>vr());I.ipcMain.handle(C.SET_QUICK_CSS,(e,r)=>en.push(()=>(0,_.writeFile)($,r)));I.ipcMain.handle(C.GET_SETTINGS_DIR,()=>fe);I.ipcMain.on(C.GET_SETTINGS,e=>e.returnValue=Ue());I.ipcMain.handle(C.SET_SETTINGS,(e,r)=>{rn.push(()=>(0,_.writeFile)(Pe,r))});function gr(e){(0,_.open)($,"a+").then(r=>{r.close(),(0,ee.watch)($,cr(async()=>{e.webContents.postMessage(C.QUICK_CSS_UPDATE,await vr())},50))})}I.ipcMain.handle(C.OPEN_MONACO_EDITOR,async()=>{await new I.BrowserWindow({title:"QuickCss Editor",autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,pr.join)(__dirname,"preload.js"),contextIsolation:!0,nodeIntegration:!1}}).loadURL(`data:text/html;base64,${fr}`)});f();var Or=require("electron");f();var Cr=require("module"),nn=(0,Cr.createRequire)("/"),ge,tn=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{ge=nn("worker_threads").Worker}catch{}var an=ge?function(e,r,n,t,i){var u=!1,a=new ge(e+tn,{eval:!0}).on("error",function(o){return i(o,null)}).on("message",function(o){return i(null,o)}).on("exit",function(o){o&&!u&&i(new Error("exited with code "+o),null)});return a.postMessage(n,t),a.terminate=function(){return u=!0,ge.prototype.terminate.call(a)},a}:function(e,r,n,t,i){setImmediate(function(){return i(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var u=function(){};return{terminate:u,postMessage:u}},y=Uint8Array,j=Uint16Array,Ne=Uint32Array,We=new y([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ve=new y([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Ir=new y([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),yr=function(e,r){for(var n=new j(31),t=0;t<31;++t)n[t]=r+=1<<e[t-1];for(var i=new Ne(n[30]),t=1;t<30;++t)for(var u=n[t];u<n[t+1];++u)i[u]=u-n[t]<<5|t;return[n,i]},Ar=yr(We,2),Me=Ar[0],on=Ar[1];Me[28]=258,on[258]=28;var wr=yr(Ve,0),xr=wr[0],mt=wr[1],Ce=new j(32768);for(l=0;l<32768;++l)U=(l&43690)>>>1|(l&21845)<<1,U=(U&52428)>>>2|(U&13107)<<2,U=(U&61680)>>>4|(U&3855)<<4,Ce[l]=((U&65280)>>>8|(U&255)<<8)>>>1;var U,l,re=function(e,r,n){for(var t=e.length,i=0,u=new j(r);i<t;++i)e[i]&&++u[e[i]-1];var a=new j(r);for(i=0;i<r;++i)a[i]=a[i-1]+u[i-1]<<1;var o;if(n){o=new j(1<<r);var s=15-r;for(i=0;i<t;++i)if(e[i])for(var c=i<<4|e[i],h=r-e[i],g=a[e[i]-1]++<<h,T=g|(1<<h)-1;g<=T;++g)o[Ce[g]>>>s]=c}else for(o=new j(t),i=0;i<t;++i)e[i]&&(o[i]=Ce[a[e[i]-1]++]>>>15-e[i]);return o},le=new y(288);for(l=0;l<144;++l)le[l]=8;var l;for(l=144;l<256;++l)le[l]=9;var l;for(l=256;l<280;++l)le[l]=7;var l;for(l=280;l<288;++l)le[l]=8;var l,Sr=new y(32);for(l=0;l<32;++l)Sr[l]=5;var l;var Tr=re(le,9,1);var Er=re(Sr,5,1),me=function(e){for(var r=e[0],n=1;n<e.length;++n)e[n]>r&&(r=e[n]);return r},S=function(e,r,n){var t=r/8|0;return(e[t]|e[t+1]<<8)>>(r&7)&n},de=function(e,r){var n=r/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(r&7)},zr=function(e){return(e+7)/8|0},Ie=function(e,r,n){(r==null||r<0)&&(r=0),(n==null||n>e.length)&&(n=e.length);var t=new(e.BYTES_PER_ELEMENT==2?j:e.BYTES_PER_ELEMENT==4?Ne:y)(n-r);return t.set(e.subarray(r,n)),t};var Dr=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],A=function(e,r,n){var t=new Error(r||Dr[e]);if(t.code=e,Error.captureStackTrace&&Error.captureStackTrace(t,A),!n)throw t;return t},Rr=function(e,r,n){var t=e.length;if(!t||n&&n.f&&!n.l)return r||new y(0);var i=!r||n,u=!n||n.i;n||(n={}),r||(r=new y(t*3));var a=function(Ke){var qe=r.length;if(Ke>qe){var He=new y(Math.max(qe*2,Ke));He.set(r),r=He}},o=n.f||0,s=n.p||0,c=n.b||0,h=n.l,g=n.d,T=n.m,N=n.n,te=t*8;do{if(!h){o=S(e,s,1);var B=S(e,s+1,3);if(s+=3,B)if(B==1)h=Tr,g=Er,T=9,N=5;else if(B==2){var V=S(e,s,31)+257,F=S(e,s+10,15)+4,ie=V+S(e,s+5,31)+1;s+=14;for(var L=new y(ie),ae=new y(19),d=0;d<F;++d)ae[Ir[d]]=S(e,s+d*3,7);s+=F*3;for(var G=me(ae),he=(1<<G)-1,K=re(ae,G,1),d=0;d<ie;){var oe=K[S(e,s,he)];s+=oe&15;var m=oe>>>4;if(m<16)L[d++]=m;else{var q=0,pe=0;for(m==16?(pe=3+S(e,s,3),s+=2,q=L[d-1]):m==17?(pe=3+S(e,s,7),s+=3):m==18&&(pe=11+S(e,s,127),s+=7);pe--;)L[d++]=q}}var _e=L.subarray(0,V),M=L.subarray(V);T=me(_e),N=me(M),h=re(_e,T,1),g=re(M,N,1)}else A(1);else{var m=zr(s)+4,x=e[m-4]|e[m-3]<<8,W=m+x;if(W>t){u&&A(0);break}i&&a(c+x),r.set(e.subarray(m,W),c),n.b=c+=x,n.p=s=W*8,n.f=o;continue}if(s>te){u&&A(0);break}}i&&a(c+131072);for(var Lr=(1<<T)-1,_r=(1<<N)-1,ye=s;;ye=s){var q=h[de(e,s)&Lr],H=q>>>4;if(s+=q&15,s>te){u&&A(0);break}if(q||A(2),H<256)r[c++]=H;else if(H==256){ye=s,h=null;break}else{var Ze=H-254;if(H>264){var d=H-257,se=We[d];Ze=S(e,s,(1<<se)-1)+Me[d],s+=se}var Ae=g[de(e,s)&_r],we=Ae>>>4;Ae||A(3),s+=Ae&15;var M=xr[we];if(we>3){var se=Ve[we];M+=de(e,s)&(1<<se)-1,s+=se}if(s>te){u&&A(0);break}i&&a(c+131072);for(var Fe=c+Ze;c<Fe;c+=4)r[c]=r[c-M],r[c+1]=r[c+1-M],r[c+2]=r[c+2-M],r[c+3]=r[c+3-M];c=Fe}}n.l=h,n.p=ye,n.b=c,n.f=o,h&&(o=1,n.m=T,n.d=g,n.n=N)}while(!o);return c==r.length?r:Ie(r,0,c)};var sn=new y(0);var un=function(e,r){var n={};for(var t in e)n[t]=e[t];for(var t in r)n[t]=r[t];return n},mr=function(e,r,n){for(var t=e(),i=e.toString(),u=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),a=0;a<t.length;++a){var o=t[a],s=u[a];if(typeof o=="function"){r+=";"+s+"=";var c=o.toString();if(o.prototype)if(c.indexOf("[native code]")!=-1){var h=c.indexOf(" ",8)+1;r+=c.slice(h,c.indexOf("(",h))}else{r+=c;for(var g in o.prototype)r+=";"+s+".prototype."+g+"="+o.prototype[g].toString()}else r+=c}else n[s]=o}return[r,n]},ve=[],cn=function(e){var r=[];for(var n in e)e[n].buffer&&r.push((e[n]=new e[n].constructor(e[n])).buffer);return r},fn=function(e,r,n,t){var i;if(!ve[n]){for(var u="",a={},o=e.length-1,s=0;s<o;++s)i=mr(e[s],u,a),u=i[0],a=i[1];ve[n]=mr(e[o],u,a)}var c=un({},ve[n][1]);return an(ve[n][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+r.toString()+"}",n,c,cn(c),t)},ln=function(){return[y,j,Ne,We,Ve,Ir,Me,xr,Tr,Er,Ce,Dr,re,me,S,de,zr,Ie,A,Rr,je,Gr,Pr]};var Gr=function(e){return postMessage(e,[e.buffer])},Pr=function(e){return e&&e.size&&new y(e.size)},hn=function(e,r,n,t,i,u){var a=fn(n,t,i,function(o,s){a.terminate(),u(o,s)});return a.postMessage([e,r],r.consume?[e.buffer]:[]),function(){a.terminate()}};var z=function(e,r){return e[r]|e[r+1]<<8},E=function(e,r){return(e[r]|e[r+1]<<8|e[r+2]<<16|e[r+3]<<24)>>>0},ke=function(e,r){return E(e,r)+E(e,r+4)*4294967296};function pn(e,r,n){return n||(n=r,r={}),typeof n!="function"&&A(7),hn(e,r,[ln],function(t){return Gr(je(t.data[0],Pr(t.data[1])))},1,n)}function je(e,r){return Rr(e,r)}var Oe=typeof TextDecoder<"u"&&new TextDecoder,vn=0;try{Oe.decode(sn,{stream:!0}),vn=1}catch{}var gn=function(e){for(var r="",n=0;;){var t=e[n++],i=(t>127)+(t>223)+(t>239);if(n+i>e.length)return[r,Ie(e,n-1)];i?i==3?(t=((t&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,r+=String.fromCharCode(55296|t>>10,56320|t&1023)):i&1?r+=String.fromCharCode((t&31)<<6|e[n++]&63):r+=String.fromCharCode((t&15)<<12|(e[n++]&63)<<6|e[n++]&63):r+=String.fromCharCode(t)}};function mn(e,r){if(r){for(var n="",t=0;t<e.length;t+=16384)n+=String.fromCharCode.apply(null,e.subarray(t,t+16384));return n}else{if(Oe)return Oe.decode(e);var i=gn(e),u=i[0],a=i[1];return a.length&&A(8),u}}var dn=function(e,r){return r+30+z(e,r+26)+z(e,r+28)},Cn=function(e,r,n){var t=z(e,r+28),i=mn(e.subarray(r+46,r+46+t),!(z(e,r+8)&2048)),u=r+46+t,a=E(e,r+20),o=n&&a==4294967295?In(e,u):[a,E(e,r+24),E(e,r+42)],s=o[0],c=o[1],h=o[2];return[z(e,r+10),s,c,i,u+z(e,r+30)+z(e,r+32),h]},In=function(e,r){for(;z(e,r)!=1;r+=4+z(e,r+2));return[ke(e,r+12),ke(e,r+4),ke(e,r+20)]};var dr=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(e){e()};function Ur(e,r,n){n||(n=r,r={}),typeof n!="function"&&A(7);var t=[],i=function(){for(var m=0;m<t.length;++m)t[m]()},u={},a=function(m,x){dr(function(){n(m,x)})};dr(function(){a=n});for(var o=e.length-22;E(e,o)!=101010256;--o)if(!o||e.length-o>65558)return a(A(13,0,1),null),i;var s=z(e,o+8);if(s){var c=s,h=E(e,o+16),g=h==4294967295||c==65535;if(g){var T=E(e,o-12);g=E(e,T)==101075792,g&&(c=s=E(e,T+32),h=E(e,T+48))}for(var N=r&&r.filter,te=function(m){var x=Cn(e,h,g),W=x[0],V=x[1],F=x[2],ie=x[3],L=x[4],ae=x[5],d=dn(e,ae);h=L;var G=function(K,oe){K?(i(),a(K,null)):(oe&&(u[ie]=oe),--s||a(null,u))};if(!N||N({name:ie,size:V,originalSize:F,compression:W}))if(!W)G(null,Ie(e,d,d+V));else if(W==8){var he=e.subarray(d,d+V);if(V<32e4)try{G(null,je(he,new y(F)))}catch(K){G(K,null)}else t.push(pn(he,{size:F},G))}else G(A(14,"unknown compression type "+W,1),null);else G(null,null)},B=0;B<c;++B)te(B)}else a(null,{});return i}var Nr=require("fs"),D=require("fs/promises"),ne=require("path");f();function kr(e){function r(a,o,s,c){let h=0;return h+=a<<0,h+=o<<8,h+=s<<16,h+=c<<24>>>0,h}if(e[0]===80&&e[1]===75&&e[2]===3&&e[3]===4)return e;if(e[0]!==67||e[1]!==114||e[2]!==50||e[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let n=e[4]===3,t=e[4]===2;if(!t&&!n||e[5]||e[6]||e[7])throw new Error("Unexpected crx format version number.");if(t){let a=r(e[8],e[9],e[10],e[11]),o=r(e[12],e[13],e[14],e[15]),s=16+a+o;return e.subarray(s,e.length)}let u=12+r(e[8],e[9],e[10],e[11]);return e.subarray(u,e.length)}De();var yn=(0,ne.join)(Ge,"ExtensionCache");async function An(e,r){return await(0,D.mkdir)(r,{recursive:!0}),new Promise((n,t)=>{Ur(e,(i,u)=>{if(i)return void t(i);Promise.all(Object.keys(u).map(async a=>{if(a.startsWith("_metadata/"))return;if(a.endsWith("/"))return void(0,D.mkdir)((0,ne.join)(r,a),{recursive:!0});let o=a.split("/"),s=o.pop(),c=o.join("/"),h=(0,ne.join)(r,c);c&&await(0,D.mkdir)(h,{recursive:!0}),await(0,D.writeFile)((0,ne.join)(h,s),u[a])})).then(()=>n()).catch(a=>{(0,D.rm)(r,{recursive:!0,force:!0}),t(a)})})})}async function Wr(e){let r=(0,ne.join)(yn,`${e}`);try{await(0,D.access)(r,Nr.constants.F_OK)}catch{let t=`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${e}%26uc&prodversion=32`,i=await Q(t);await An(kr(i),r)}Or.session.defaultSession.loadExtension(r)}console.log("[Vencord] Starting up...");var Br=require.main.filename,Tn=require.main.path.endsWith("app.asar")?"_app.asar":"app.asar",Le=(0,O.join)((0,O.dirname)(Br),"..",Tn),En=require((0,O.join)(Le,"package.json"));require.main.filename=(0,O.join)(Le,En.main);R.app.setAppPath(Le);if(process.argv.includes("--vanilla"))console.log("[Vencord] Running in vanilla mode. Not loading Vencord");else{process.platform==="win32"&&(Mr(),Yr(Sn));class e extends R.default.BrowserWindow{constructor(t){if(t?.webPreferences?.preload&&t.title){let i=t.webPreferences.preload;t.webPreferences.preload=(0,O.join)(__dirname,"preload.js"),t.webPreferences.sandbox=!1,process.env.DISCORD_PRELOAD=i,super(t),gr(this)}else super(t)}}Object.assign(e,R.default.BrowserWindow),Object.defineProperty(e,"name",{value:"BrowserWindow",configurable:!0});let r=require.resolve("electron");delete require.cache[r].exports,require.cache[r].exports={...R.default,BrowserWindow:e},Qe(global,"appSettings",n=>n.set("DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING",!0)),process.env.DATA_DIR=(0,O.join)(R.app.getPath("userData"),"..","Vencord"),R.default.app.whenReady().then(()=>{R.default.protocol.registerFileProtocol("vencord",({url:u},a)=>{let o=u.slice(10);switch(o.endsWith("/")&&(o=o.slice(0,-1)),o){case"renderer.js.map":case"preload.js.map":case"patcher.js.map":a((0,O.join)(__dirname,o));break;default:a({statusCode:403})}});try{JSON.parse(Ue()).enableReactDevtools&&Wr("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(a=>console.error("[Vencord] Failed to install React Developer Tools",a))}catch{}let n=u=>{let a={};return u.split(";").forEach(o=>{let[s,...c]=o.trim().split(/\s+/g);s&&!Object.prototype.hasOwnProperty.call(a,s)&&(a[s]=c)}),a},t=u=>Object.entries(u).filter(([,a])=>a?.length).map(a=>a.flat().join(" ")).join("; ");function i(u,a){if(a in u){let o=n(u[a][0]);for(let s of["style-src","connect-src","img-src","font-src","media-src","worker-src"])o[s]=["*","blob:","data:","'unsafe-inline'"];o["script-src"]??=[],o["script-src"].push("'unsafe-eval'","https://unpkg.com","https://cdnjs.cloudflare.com"),u[a]=[t(o)]}}R.default.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:u,resourceType:a},o)=>{u&&(a==="mainFrame"&&i(u,"content-security-policy"),a==="stylesheet"&&(u["content-type"]=["text/css"])),o({cancel:!1,responseHeaders:u})})})}console.log("[Vencord] Loading original Discord app.asar");if((0,jr.readFileSync)(Br,"utf-8").includes('require("../app.asar")')){console.warn("[Vencord] [--> WARNING <--] You have a legacy Vencord install. Please reinject");let e=require("module"),r=e._load;e._load=function(n){return n==="../app.asar"&&(e._load=r,arguments[0]=require.main.filename),r.apply(this,arguments)}}else require(require.main.filename);
//# sourceURL=VencordPatcher
//# sourceMappingURL=vencord://patcher.js.map
/*! For license information please see patcher.js.LEGAL.txt */
