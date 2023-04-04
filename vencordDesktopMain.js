// Vencord 2e6dfaa
// Standalone: true
// Platform: Universal
"use strict";var kn=Object.create;var Me=Object.defineProperty;var Gn=Object.getOwnPropertyDescriptor;var On=Object.getOwnPropertyNames;var Nn=Object.getPrototypeOf,Pn=Object.prototype.hasOwnProperty;var P=(e,n)=>()=>(e&&(n=e(e=0)),n);var Un=(e,n,t,r)=>{if(n&&typeof n=="object"||typeof n=="function")for(let i of On(n))!Pn.call(e,i)&&i!==t&&Me(e,i,{get:()=>n[i],enumerable:!(r=Gn(n,i))||r.enumerable});return e};var Vn=(e,n,t)=>(t=e!=null?kn(Nn(e)):{},Un(n||!e||!e.__esModule?Me(t,"default",{value:e,enumerable:!0}):t,e));var c=P(()=>{"use strict"});var te,Ie=P(()=>{c();te="2e6dfaa"});var B,ye=P(()=>{c();B="Vendicated/Vencord"});var Ze,Fe=P(()=>{"use strict";c();Ie();ye();Ze=`Vencord/${te}${B?` (https://github.com/${B})`:""}`});function Wn(e){let n={};for(let t in e)n[t]=e[t],n[e[t]]=t;return Object.freeze(n)}var C,Ae=P(()=>{"use strict";c();C=Wn({QUICK_CSS_UPDATE:"VencordQuickCssUpdate",GET_QUICK_CSS:"VencordGetQuickCss",SET_QUICK_CSS:"VencordSetQuickCss",GET_SETTINGS_DIR:"VencordGetSettingsDir",GET_SETTINGS:"VencordGetSettings",SET_SETTINGS:"VencordSetSettings",OPEN_EXTERNAL:"VencordOpenExternal",OPEN_QUICKCSS:"VencordOpenQuickCss",GET_UPDATES:"VencordGetUpdates",GET_REPO:"VencordGetRepo",GET_HASHES:"VencordGetHashes",UPDATE:"VencordUpdate",BUILD:"VencordBuild",OPEN_MONACO_EDITOR:"VencordOpenMonacoEditor"})});function K(e,n={}){return new Promise((t,r)=>{je.default.get(e,n,i=>{let{statusCode:o,statusMessage:s,headers:u}=i;if(o>=400)return void r(`${o}: ${s} - ${e}`);if(o>=300)return void t(K(u.location,n));let a=[];i.on("error",r),i.on("data",f=>a.push(f)),i.once("end",()=>t(Buffer.concat(a)))})})}var je,we=P(()=>{"use strict";c();je=Vn(require("https"))});async function He(){let e={};return await Promise.all(["patcher.js","preload.js","renderer.js","renderer.css"].map(n=>new Promise(t=>{let r=(0,Ke.createReadStream)((0,_e.join)(__dirname,n)),i=(0,Be.createHash)("sha1",{encoding:"hex"});r.once("end",()=>{i.end(),e[n]=i.read(),t()}),r.pipe(i)}))),e}function _(e){return async function(){try{return{ok:!0,value:await e(...arguments)}}catch(n){return{ok:!1,error:n instanceof Error?{...n}:n}}}}var Be,Ke,_e,Ye=P(()=>{"use strict";c();Be=require("crypto"),Ke=require("fs"),_e=require("path")});var jn={};async function qe(e){return K(Ln+e,{headers:{Accept:"application/vnd.github+json","User-Agent":Ze}})}async function Mn(){if(!await Je())return[];let n=await qe(`/compare/${te}...HEAD`);return JSON.parse(n.toString("utf-8")).commits.map(r=>({hash:r.sha.slice(0,7),author:r.author.login,message:r.commit.message}))}async function Je(){let e=await qe("/releases/latest"),n=JSON.parse(e.toString());return n.name.slice(n.name.lastIndexOf(" ")+1)===te?!1:(n.assets.forEach(({name:r,browser_download_url:i})=>{Zn.some(o=>r.startsWith(o))&&xe.push([r,i])}),!0)}async function Fn(){return await Promise.all(xe.map(async([e,n])=>(0,Qe.writeFile)((0,Xe.join)(__dirname,e.replace(/vencordDesktop(\w)/,(t,r)=>r.toLowerCase())),await K(n)))),xe=[],!0}var H,Qe,Xe,Ln,xe,Zn,be=P(()=>{"use strict";c();Fe();Ae();H=require("electron"),Qe=require("fs/promises"),Xe=require("path");Ie();ye();we();Ye();Ln=`https://api.github.com/repos/${B}`,xe=[];Zn=["vencordDesktopMain.js","preload.js","vencordDesktopRenderer.js","renderer.css"];H.ipcMain.handle(C.GET_HASHES,_(He));H.ipcMain.handle(C.GET_REPO,_(()=>`https://github.com/${B}`));H.ipcMain.handle(C.GET_UPDATES,_(Mn));H.ipcMain.handle(C.UPDATE,_(Je));H.ipcMain.handle(C.BUILD,_(Fn))});c();var L=require("electron"),Dn=require("path");c();c();Promise.resolve().then(()=>be());c();Ae();c();var re=class{constructor(n=1/0){this.maxSize=n}queue=[];promise;next(){let n=this.queue.shift();n?this.promise=Promise.resolve().then(n).finally(()=>this.next()):this.promise=void 0}run(){this.promise||this.next()}push(n){this.size>=this.maxSize&&this.queue.shift(),this.queue.push(n),this.run()}unshift(n){this.size>=this.maxSize&&this.queue.pop(),this.queue.unshift(n),this.run()}get size(){return this.queue.length}};var y=require("electron"),ae=require("fs"),Q=require("fs/promises"),tn=require("path");c();var $e="PCFkb2N0eXBlIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KCjxoZWFkPgogICAgPG1ldGEgY2hhcnNldD0idXRmLTgiPgogICAgPHRpdGxlPlF1aWNrQ3NzIEVkaXRvcjwvdGl0bGU+CiAgICA8bGluayByZWw9InN0eWxlc2hlZXQiIGRhdGEtbmFtZT0idnMvZWRpdG9yL2VkaXRvci5tYWluIgogICAgICAgIGhyZWY9Imh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21vbmFjby1lZGl0b3IvMC4zNC4wL21pbi92cy9lZGl0b3IvZWRpdG9yLm1haW4ubWluLmNzcyI+CiAgICA8c3R5bGU+CiAgICAgICAgaHRtbCwKICAgICAgICBib2R5LAogICAgICAgICNjb250YWluZXIgewogICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgICAgIGxlZnQ6IDA7CiAgICAgICAgICAgIHRvcDogMDsKICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgICAgIGhlaWdodDogMTAwJTsKICAgICAgICAgICAgbWFyZ2luOiAwOwogICAgICAgICAgICBwYWRkaW5nOiAwOwogICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOwogICAgICAgIH0KICAgIDwvc3R5bGU+CjwvaGVhZD4KCjxib2R5PgogICAgPGRpdiBpZD0iY29udGFpbmVyIj48L2Rpdj4KICAgIDxzY3JpcHQgc3JjPSJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuMzQuMC9taW4vdnMvbG9hZGVyLm1pbi5qcyI+PC9zY3JpcHQ+CgogICAgPHNjcmlwdD4KICAgICAgICByZXF1aXJlLmNvbmZpZyh7IHBhdGhzOiB7ICd2cyc6ICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuMzQuMC9taW4vdnMnIH0gfSk7CiAgICAgICAgcmVxdWlyZShbInZzL2VkaXRvci9lZGl0b3IubWFpbiJdLCAoKSA9PiB7CiAgICAgICAgICAgIGdldEN1cnJlbnRDc3MoKS50aGVuKGNzcyA9PiB7CiAgICAgICAgICAgICAgICB2YXIgZWRpdG9yID0gbW9uYWNvLmVkaXRvci5jcmVhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpLCB7CiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNzcywKICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZTogJ2NzcycsCiAgICAgICAgICAgICAgICAgICAgdGhlbWU6IGdldFRoZW1lKCksCiAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIGVkaXRvci5vbkRpZENoYW5nZU1vZGVsQ29udGVudCgoKSA9PgogICAgICAgICAgICAgICAgICAgIHNldENzcyhlZGl0b3IuZ2V0VmFsdWUoKSkKICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigicmVzaXplIiwgKCkgPT4gewogICAgICAgICAgICAgICAgICAgIC8vIG1ha2UgbW9uYWNvIHJlLWxheW91dAogICAgICAgICAgICAgICAgICAgIGVkaXRvci5sYXlvdXQoKTsKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9KTsKICAgICAgICB9KTsKCgogICAgPC9zY3JpcHQ+CjwvYm9keT4KCjwvaHRtbD4K";c();var en=require("electron"),Y=require("path"),Se=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,Y.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,Y.join)(en.app.getPath("userData"),"..","Vencord")),ie=(0,Y.join)(Se,"settings"),fe=(0,Y.join)(ie,"quickCss.css"),Te=(0,Y.join)(ie,"settings.json"),nn=["https:","http:","steam:","spotify:"];(0,ae.mkdirSync)(ie,{recursive:!0});function Bn(){return(0,Q.readFile)(fe,"utf-8").catch(()=>"")}function rn(){try{return(0,ae.readFileSync)(Te,"utf-8")}catch{return"{}"}}function an(){try{return JSON.parse(rn())}catch{return{}}}y.ipcMain.handle(C.OPEN_QUICKCSS,()=>y.shell.openPath(fe));y.ipcMain.handle(C.OPEN_EXTERNAL,(e,n)=>{try{var{protocol:t}=new URL(n)}catch{throw"Malformed URL"}if(!nn.includes(t))throw"Disallowed protocol.";y.shell.openExternal(n)});var Kn=new re,_n=new re;y.ipcMain.handle(C.GET_QUICK_CSS,()=>Bn());y.ipcMain.handle(C.SET_QUICK_CSS,(e,n)=>Kn.push(()=>(0,Q.writeFile)(fe,n)));y.ipcMain.handle(C.GET_SETTINGS_DIR,()=>ie);y.ipcMain.on(C.GET_SETTINGS,e=>e.returnValue=rn());y.ipcMain.handle(C.SET_SETTINGS,(e,n)=>{_n.push(()=>(0,Q.writeFile)(Te,n))});y.ipcMain.handle(C.OPEN_MONACO_EDITOR,async()=>{await new y.BrowserWindow({title:"QuickCss Editor",autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,tn.join)(__dirname,"preload.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!1}}).loadURL(`data:text/html;base64,${$e}`)});c();var Sn=require("electron");c();var un=require("module"),Hn=(0,un.createRequire)("/"),le,Yn=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{le=Hn("worker_threads").Worker}catch{}var Qn=le?function(e,n,t,r,i){var o=!1,s=new le(e+Yn,{eval:!0}).on("error",function(u){return i(u,null)}).on("message",function(u){return i(null,u)}).on("exit",function(u){u&&!o&&i(new Error("exited with code "+u),null)});return s.postMessage(t,r),s.terminate=function(){return o=!0,le.prototype.terminate.call(s)},s}:function(e,n,t,r,i){setImmediate(function(){return i(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var o=function(){};return{terminate:o,postMessage:o}},I=Uint8Array,U=Uint16Array,ze=Uint32Array,Re=new I([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ke=new I([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),fn=new I([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),cn=function(e,n){for(var t=new U(31),r=0;r<31;++r)t[r]=n+=1<<e[r-1];for(var i=new ze(t[30]),r=1;r<30;++r)for(var o=t[r];o<t[r+1];++o)i[o]=o-t[r]<<5|r;return[t,i]},ln=cn(Re,2),Ge=ln[0],Xn=ln[1];Ge[28]=258,Xn[258]=28;var hn=cn(ke,0),vn=hn[0],bt=hn[1],pe=new U(32768);for(l=0;l<32768;++l)R=(l&43690)>>>1|(l&21845)<<1,R=(R&52428)>>>2|(R&13107)<<2,R=(R&61680)>>>4|(R&3855)<<4,pe[l]=((R&65280)>>>8|(R&255)<<8)>>>1;var R,l,X=function(e,n,t){for(var r=e.length,i=0,o=new U(n);i<r;++i)e[i]&&++o[e[i]-1];var s=new U(n);for(i=0;i<n;++i)s[i]=s[i-1]+o[i-1]<<1;var u;if(t){u=new U(1<<n);var a=15-n;for(i=0;i<r;++i)if(e[i])for(var f=i<<4|e[i],h=n-e[i],v=s[e[i]-1]++<<h,S=v|(1<<h)-1;v<=S;++v)u[pe[v]>>>a]=f}else for(u=new U(r),i=0;i<r;++i)e[i]&&(u[i]=pe[s[e[i]-1]++]>>>15-e[i]);return u},oe=new I(288);for(l=0;l<144;++l)oe[l]=8;var l;for(l=144;l<256;++l)oe[l]=9;var l;for(l=256;l<280;++l)oe[l]=7;var l;for(l=280;l<288;++l)oe[l]=8;var l,pn=new I(32);for(l=0;l<32;++l)pn[l]=5;var l;var gn=X(oe,9,1);var mn=X(pn,5,1),he=function(e){for(var n=e[0],t=1;t<e.length;++t)e[t]>n&&(n=e[t]);return n},x=function(e,n,t){var r=n/8|0;return(e[r]|e[r+1]<<8)>>(n&7)&t},ve=function(e,n){var t=n/8|0;return(e[t]|e[t+1]<<8|e[t+2]<<16)>>(n&7)},dn=function(e){return(e+7)/8|0},ge=function(e,n,t){(n==null||n<0)&&(n=0),(t==null||t>e.length)&&(t=e.length);var r=new(e.BYTES_PER_ELEMENT==2?U:e.BYTES_PER_ELEMENT==4?ze:I)(t-n);return r.set(e.subarray(n,t)),r};var Cn=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],A=function(e,n,t){var r=new Error(n||Cn[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,A),!t)throw r;return r},In=function(e,n,t){var r=e.length;if(!r||t&&t.f&&!t.l)return n||new I(0);var i=!n||t,o=!t||t.i;t||(t={}),n||(n=new I(r*3));var s=function(Ve){var We=n.length;if(Ve>We){var Le=new I(Math.max(We*2,Ve));Le.set(n),n=Le}},u=t.f||0,a=t.p||0,f=t.b||0,h=t.l,v=t.d,S=t.m,k=t.n,J=r*8;do{if(!h){u=x(e,a,1);var V=x(e,a+1,3);if(a+=3,V)if(V==1)h=gn,v=mn,S=9,k=5;else if(V==2){var O=x(e,a,31)+257,M=x(e,a+10,15)+4,b=O+x(e,a+5,31)+1;a+=14;for(var W=new I(b),$=new I(19),g=0;g<M;++g)$[fn[g]]=x(e,a+g*3,7);a+=M*3;for(var z=he($),se=(1<<z)-1,Z=X($,z,1),g=0;g<b;){var ee=Z[x(e,a,se)];a+=ee&15;var p=ee>>>4;if(p<16)W[g++]=p;else{var F=0,ue=0;for(p==16?(ue=3+x(e,a,3),a+=2,F=W[g-1]):p==17?(ue=3+x(e,a,7),a+=3):p==18&&(ue=11+x(e,a,127),a+=7);ue--;)W[g++]=F}}var Ne=W.subarray(0,O),N=W.subarray(O);S=he(Ne),k=he(N),h=X(Ne,S,1),v=X(N,k,1)}else A(1);else{var p=dn(a)+4,w=e[p-4]|e[p-3]<<8,G=p+w;if(G>r){o&&A(0);break}i&&s(f+w),n.set(e.subarray(p,G),f),t.b=f+=w,t.p=a=G*8,t.f=u;continue}if(a>J){o&&A(0);break}}i&&s(f+131072);for(var zn=(1<<S)-1,Rn=(1<<k)-1,me=a;;me=a){var F=h[ve(e,a)&zn],j=F>>>4;if(a+=F&15,a>J){o&&A(0);break}if(F||A(2),j<256)n[f++]=j;else if(j==256){me=a,h=null;break}else{var Pe=j-254;if(j>264){var g=j-257,ne=Re[g];Pe=x(e,a,(1<<ne)-1)+Ge[g],a+=ne}var de=v[ve(e,a)&Rn],Ce=de>>>4;de||A(3),a+=de&15;var N=vn[Ce];if(Ce>3){var ne=ke[Ce];N+=ve(e,a)&(1<<ne)-1,a+=ne}if(a>J){o&&A(0);break}i&&s(f+131072);for(var Ue=f+Pe;f<Ue;f+=4)n[f]=n[f-N],n[f+1]=n[f+1-N],n[f+2]=n[f+2-N],n[f+3]=n[f+3-N];f=Ue}}t.l=h,t.p=me,t.b=f,t.f=u,h&&(u=1,t.m=S,t.d=v,t.n=k)}while(!u);return f==n.length?n:ge(n,0,f)};var qn=new I(0);var Jn=function(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t},on=function(e,n,t){for(var r=e(),i=e.toString(),o=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),s=0;s<r.length;++s){var u=r[s],a=o[s];if(typeof u=="function"){n+=";"+a+"=";var f=u.toString();if(u.prototype)if(f.indexOf("[native code]")!=-1){var h=f.indexOf(" ",8)+1;n+=f.slice(h,f.indexOf("(",h))}else{n+=f;for(var v in u.prototype)n+=";"+a+".prototype."+v+"="+u.prototype[v].toString()}else n+=f}else t[a]=u}return[n,t]},ce=[],bn=function(e){var n=[];for(var t in e)e[t].buffer&&n.push((e[t]=new e[t].constructor(e[t])).buffer);return n},$n=function(e,n,t,r){var i;if(!ce[t]){for(var o="",s={},u=e.length-1,a=0;a<u;++a)i=on(e[a],o,s),o=i[0],s=i[1];ce[t]=on(e[u],o,s)}var f=Jn({},ce[t][1]);return Qn(ce[t][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+n.toString()+"}",t,f,bn(f),r)},et=function(){return[I,U,ze,Re,ke,fn,Ge,vn,gn,mn,pe,Cn,X,he,x,ve,dn,ge,A,In,Oe,yn,An]};var yn=function(e){return postMessage(e,[e.buffer])},An=function(e){return e&&e.size&&new I(e.size)},nt=function(e,n,t,r,i,o){var s=$n(t,r,i,function(u,a){s.terminate(),o(u,a)});return s.postMessage([e,n],n.consume?[e.buffer]:[]),function(){s.terminate()}};var E=function(e,n){return e[n]|e[n+1]<<8},T=function(e,n){return(e[n]|e[n+1]<<8|e[n+2]<<16|e[n+3]<<24)>>>0},Ee=function(e,n){return T(e,n)+T(e,n+4)*4294967296};function tt(e,n,t){return t||(t=n,n={}),typeof t!="function"&&A(7),nt(e,n,[et],function(r){return yn(Oe(r.data[0],An(r.data[1])))},1,t)}function Oe(e,n){return In(e,n)}var De=typeof TextDecoder<"u"&&new TextDecoder,rt=0;try{De.decode(qn,{stream:!0}),rt=1}catch{}var it=function(e){for(var n="",t=0;;){var r=e[t++],i=(r>127)+(r>223)+(r>239);if(t+i>e.length)return[n,ge(e,t-1)];i?i==3?(r=((r&15)<<18|(e[t++]&63)<<12|(e[t++]&63)<<6|e[t++]&63)-65536,n+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?n+=String.fromCharCode((r&31)<<6|e[t++]&63):n+=String.fromCharCode((r&15)<<12|(e[t++]&63)<<6|e[t++]&63):n+=String.fromCharCode(r)}};function at(e,n){if(n){for(var t="",r=0;r<e.length;r+=16384)t+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return t}else{if(De)return De.decode(e);var i=it(e),o=i[0],s=i[1];return s.length&&A(8),o}}var ot=function(e,n){return n+30+E(e,n+26)+E(e,n+28)},st=function(e,n,t){var r=E(e,n+28),i=at(e.subarray(n+46,n+46+r),!(E(e,n+8)&2048)),o=n+46+r,s=T(e,n+20),u=t&&s==4294967295?ut(e,o):[s,T(e,n+24),T(e,n+42)],a=u[0],f=u[1],h=u[2];return[E(e,n+10),a,f,i,o+E(e,n+30)+E(e,n+32),h]},ut=function(e,n){for(;E(e,n)!=1;n+=4+E(e,n+2));return[Ee(e,n+12),Ee(e,n+4),Ee(e,n+20)]};var sn=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(e){e()};function wn(e,n,t){t||(t=n,n={}),typeof t!="function"&&A(7);var r=[],i=function(){for(var p=0;p<r.length;++p)r[p]()},o={},s=function(p,w){sn(function(){t(p,w)})};sn(function(){s=t});for(var u=e.length-22;T(e,u)!=101010256;--u)if(!u||e.length-u>65558)return s(A(13,0,1),null),i;var a=E(e,u+8);if(a){var f=a,h=T(e,u+16),v=h==4294967295||f==65535;if(v){var S=T(e,u-12);v=T(e,S)==101075792,v&&(f=a=T(e,S+32),h=T(e,S+48))}for(var k=n&&n.filter,J=function(p){var w=st(e,h,v),G=w[0],O=w[1],M=w[2],b=w[3],W=w[4],$=w[5],g=ot(e,$);h=W;var z=function(Z,ee){Z?(i(),s(Z,null)):(ee&&(o[b]=ee),--a||s(null,o))};if(!k||k({name:b,size:O,originalSize:M,compression:G}))if(!G)z(null,ge(e,g,g+O));else if(G==8){var se=e.subarray(g,g+O);if(O<32e4)try{z(null,Oe(se,new I(M)))}catch(Z){z(Z,null)}else r.push(tt(se,{size:M},z))}else z(A(14,"unknown compression type "+G,1),null);else z(null,null)},V=0;V<f;++V)J(V)}else s(null,{});return i}var Tn=require("fs"),D=require("fs/promises"),q=require("path");c();function xn(e){function n(s,u,a,f){let h=0;return h+=s<<0,h+=u<<8,h+=a<<16,h+=f<<24>>>0,h}if(e[0]===80&&e[1]===75&&e[2]===3&&e[3]===4)return e;if(e[0]!==67||e[1]!==114||e[2]!==50||e[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let t=e[4]===3,r=e[4]===2;if(!r&&!t||e[5]||e[6]||e[7])throw new Error("Unexpected crx format version number.");if(r){let s=n(e[8],e[9],e[10],e[11]),u=n(e[12],e[13],e[14],e[15]),a=16+s+u;return e.subarray(a,e.length)}let o=12+n(e[8],e[9],e[10],e[11]);return e.subarray(o,e.length)}we();var ft=(0,q.join)(Se,"ExtensionCache");async function ct(e,n){return await(0,D.mkdir)(n,{recursive:!0}),new Promise((t,r)=>{wn(e,(i,o)=>{if(i)return void r(i);Promise.all(Object.keys(o).map(async s=>{if(s.startsWith("_metadata/"))return;if(s.endsWith("/"))return void(0,D.mkdir)((0,q.join)(n,s),{recursive:!0});let u=s.split("/"),a=u.pop(),f=u.join("/"),h=(0,q.join)(n,f);f&&await(0,D.mkdir)(h,{recursive:!0}),await(0,D.writeFile)((0,q.join)(h,a),o[s])})).then(()=>t()).catch(s=>{(0,D.rm)(n,{recursive:!0,force:!0}),r(s)})})})}async function En(e){let n=(0,q.join)(ft,`${e}`);try{await(0,D.access)(n,Tn.constants.F_OK)}catch{let r=e==="fmkadmapgofadopljbjfkapdkoienihi"?"https://raw.githubusercontent.com/Vendicated/random-files/f6f550e4c58ac5f2012095a130406c2ab25b984d/fmkadmapgofadopljbjfkapdkoienihi.zip":`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${e}%26uc&prodversion=32`,i=await K(r,{headers:{"User-Agent":"Vencord (https://github.com/Vendicated/Vencord)"}});await ct(xn(i),n).catch(console.error)}Sn.session.defaultSession.loadExtension(n)}L.app.whenReady().then(()=>{L.protocol.registerFileProtocol("vencord",({url:r},i)=>{let o=r.slice(10);switch(o.endsWith("/")&&(o=o.slice(0,-1)),o){case"renderer.js.map":case"preload.js.map":case"patcher.js.map":i((0,Dn.join)(__dirname,o));break;default:i({statusCode:403})}});try{an().enableReactDevtools&&En("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(r=>console.error("[Vencord] Failed to install React Developer Tools",r))}catch{}let e=r=>{let i={};return r.split(";").forEach(o=>{let[s,...u]=o.trim().split(/\s+/g);s&&!Object.prototype.hasOwnProperty.call(i,s)&&(i[s]=u)}),i},n=r=>Object.entries(r).filter(([,i])=>i?.length).map(i=>i.flat().join(" ")).join("; ");function t(r,i){if(i in r){let o=e(r[i][0]);for(let s of["style-src","connect-src","img-src","font-src","media-src","worker-src"])o[s]=["*","blob:","data:","'unsafe-inline'"];o["script-src"]??=[],o["script-src"].push("'unsafe-eval'","https://unpkg.com","https://cdnjs.cloudflare.com"),r[i]=[n(o)]}}L.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:r,resourceType:i},o)=>{r&&(i==="mainFrame"&&t(r,"content-security-policy"),i==="stylesheet"&&(r["content-type"]=["text/css"])),o({cancel:!1,responseHeaders:r})}),L.session.defaultSession.webRequest.onHeadersReceived=()=>{}});
//# sourceURL=VencordDesktopMain
//# sourceMappingURL=vencord://vencordDesktopMain.js.map
/*! For license information please see vencordDesktopMain.js.LEGAL.txt */
