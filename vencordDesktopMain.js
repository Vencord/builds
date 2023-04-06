// Vencord 2672dea
// Standalone: true
// Platform: Universal
"use strict";var ke=Object.create;var Zn=Object.defineProperty;var Ge=Object.getOwnPropertyDescriptor;var Oe=Object.getOwnPropertyNames;var Ne=Object.getPrototypeOf,Pe=Object.prototype.hasOwnProperty;var P=(n,e)=>()=>(n&&(e=n(n=0)),e);var Ue=(n,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Oe(e))!Pe.call(n,i)&&i!==t&&Zn(n,i,{get:()=>e[i],enumerable:!(r=Ge(e,i))||r.enumerable});return n};var Ve=(n,e,t)=>(t=n!=null?ke(Ne(n)):{},Ue(e||!n||!n.__esModule?Zn(t,"default",{value:n,enumerable:!0}):t,n));var c=P(()=>{"use strict"});var tn,yn=P(()=>{c();tn="2672dea"});var K,An=P(()=>{c();K="Vendicated/Vencord"});var jn,Fn=P(()=>{"use strict";c();yn();An();jn=`Vencord/${tn}${K?` (https://github.com/${K})`:""}`});function We(n){let e={};for(let t in n)e[t]=n[t],e[n[t]]=t;return Object.freeze(e)}var C,wn=P(()=>{"use strict";c();C=We({QUICK_CSS_UPDATE:"VencordQuickCssUpdate",GET_QUICK_CSS:"VencordGetQuickCss",SET_QUICK_CSS:"VencordSetQuickCss",GET_SETTINGS_DIR:"VencordGetSettingsDir",GET_SETTINGS:"VencordGetSettings",SET_SETTINGS:"VencordSetSettings",OPEN_EXTERNAL:"VencordOpenExternal",OPEN_QUICKCSS:"VencordOpenQuickCss",GET_UPDATES:"VencordGetUpdates",GET_REPO:"VencordGetRepo",GET_HASHES:"VencordGetHashes",UPDATE:"VencordUpdate",BUILD:"VencordBuild",OPEN_MONACO_EDITOR:"VencordOpenMonacoEditor"})});function B(n,e={}){return new Promise((t,r)=>{Kn.default.get(n,e,i=>{let{statusCode:o,statusMessage:s,headers:u}=i;if(o>=400)return void r(`${o}: ${s} - ${n}`);if(o>=300)return void t(B(u.location,e));let a=[];i.on("error",r),i.on("data",f=>a.push(f)),i.once("end",()=>t(Buffer.concat(a)))})})}var Kn,xn=P(()=>{"use strict";c();Kn=Ve(require("https"))});async function Yn(){let n={};return await Promise.all(["main.js","preload.js","renderer.js","renderer.css"].map(e=>new Promise(t=>{let r=(0,_n.createReadStream)((0,Hn.join)(__dirname,e)),i=(0,Bn.createHash)("sha1",{encoding:"hex"});r.once("end",()=>{i.end(),n[e]=i.read(),t()}),r.pipe(i)}))),n}function _(n){return async function(){try{return{ok:!0,value:await n(...arguments)}}catch(e){return{ok:!1,error:e instanceof Error?{...e}:e}}}}var Bn,_n,Hn,Qn=P(()=>{"use strict";c();Bn=require("crypto"),_n=require("fs"),Hn=require("path")});var Fe={};async function Jn(n){return B(Le+n,{headers:{Accept:"application/vnd.github+json","User-Agent":jn}})}async function Me(){if(!await bn())return[];let e=await Jn(`/compare/${tn}...HEAD`);return JSON.parse(e.toString("utf-8")).commits.map(r=>({hash:r.sha.slice(0,7),author:r.author.login,message:r.commit.message}))}async function bn(){let n=await Jn("/releases/latest"),e=JSON.parse(n.toString());return e.name.slice(e.name.lastIndexOf(" ")+1)===tn?!1:(e.assets.forEach(({name:r,browser_download_url:i})=>{Ze.some(o=>r.startsWith(o))&&Sn.push([r,i])}),!0)}async function je(){return await Promise.all(Sn.map(async([n,e])=>(0,Xn.writeFile)((0,qn.join)(__dirname,n.replace(/vencordDesktop(\w)/,(t,r)=>r.toLowerCase())),await B(e)))),Sn=[],!0}var H,Xn,qn,Le,Sn,Ze,$n=P(()=>{"use strict";c();Fn();wn();H=require("electron"),Xn=require("fs/promises"),qn=require("path");yn();An();xn();Qn();Le=`https://api.github.com/repos/${K}`,Sn=[];Ze=["vencordDesktopMain.js","preload.js","vencordDesktopRenderer.js","renderer.css"];H.ipcMain.handle(C.GET_HASHES,_(Yn));H.ipcMain.handle(C.GET_REPO,_(()=>`https://github.com/${K}`));H.ipcMain.handle(C.GET_UPDATES,_(Me));H.ipcMain.handle(C.UPDATE,_(bn));H.ipcMain.handle(C.BUILD,_(je))});c();var L=require("electron"),De=require("path");c();c();Promise.resolve().then(()=>$n());c();wn();c();var rn=class{constructor(e=1/0){this.maxSize=e}queue=[];promise;next(){let e=this.queue.shift();e?this.promise=Promise.resolve().then(e).finally(()=>this.next()):this.promise=void 0}run(){this.promise||this.next()}push(e){this.size>=this.maxSize&&this.queue.shift(),this.queue.push(e),this.run()}unshift(e){this.size>=this.maxSize&&this.queue.pop(),this.queue.unshift(e),this.run()}get size(){return this.queue.length}};var y=require("electron"),on=require("fs"),Q=require("fs/promises"),re=require("path");c();var ne="PCFkb2N0eXBlIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KCjxoZWFkPgogICAgPG1ldGEgY2hhcnNldD0idXRmLTgiPgogICAgPHRpdGxlPlF1aWNrQ3NzIEVkaXRvcjwvdGl0bGU+CiAgICA8bGluayByZWw9InN0eWxlc2hlZXQiIGRhdGEtbmFtZT0idnMvZWRpdG9yL2VkaXRvci5tYWluIgogICAgICAgIGhyZWY9Imh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21vbmFjby1lZGl0b3IvMC4zNC4wL21pbi92cy9lZGl0b3IvZWRpdG9yLm1haW4ubWluLmNzcyI+CiAgICA8c3R5bGU+CiAgICAgICAgaHRtbCwKICAgICAgICBib2R5LAogICAgICAgICNjb250YWluZXIgewogICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgICAgIGxlZnQ6IDA7CiAgICAgICAgICAgIHRvcDogMDsKICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgICAgIGhlaWdodDogMTAwJTsKICAgICAgICAgICAgbWFyZ2luOiAwOwogICAgICAgICAgICBwYWRkaW5nOiAwOwogICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOwogICAgICAgIH0KICAgIDwvc3R5bGU+CjwvaGVhZD4KCjxib2R5PgogICAgPGRpdiBpZD0iY29udGFpbmVyIj48L2Rpdj4KICAgIDxzY3JpcHQgc3JjPSJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuMzQuMC9taW4vdnMvbG9hZGVyLm1pbi5qcyI+PC9zY3JpcHQ+CgogICAgPHNjcmlwdD4KICAgICAgICByZXF1aXJlLmNvbmZpZyh7IHBhdGhzOiB7ICd2cyc6ICdodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuMzQuMC9taW4vdnMnIH0gfSk7CiAgICAgICAgcmVxdWlyZShbInZzL2VkaXRvci9lZGl0b3IubWFpbiJdLCAoKSA9PiB7CiAgICAgICAgICAgIGdldEN1cnJlbnRDc3MoKS50aGVuKGNzcyA9PiB7CiAgICAgICAgICAgICAgICB2YXIgZWRpdG9yID0gbW9uYWNvLmVkaXRvci5jcmVhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpLCB7CiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNzcywKICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZTogJ2NzcycsCiAgICAgICAgICAgICAgICAgICAgdGhlbWU6IGdldFRoZW1lKCksCiAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIGVkaXRvci5vbkRpZENoYW5nZU1vZGVsQ29udGVudCgoKSA9PgogICAgICAgICAgICAgICAgICAgIHNldENzcyhlZGl0b3IuZ2V0VmFsdWUoKSkKICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigicmVzaXplIiwgKCkgPT4gewogICAgICAgICAgICAgICAgICAgIC8vIG1ha2UgbW9uYWNvIHJlLWxheW91dAogICAgICAgICAgICAgICAgICAgIGVkaXRvci5sYXlvdXQoKTsKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9KTsKICAgICAgICB9KTsKCgogICAgPC9zY3JpcHQ+CjwvYm9keT4KCjwvaHRtbD4K";c();var ee=require("electron"),Y=require("path"),Tn=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,Y.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,Y.join)(ee.app.getPath("userData"),"..","Vencord")),an=(0,Y.join)(Tn,"settings"),cn=(0,Y.join)(an,"quickCss.css"),En=(0,Y.join)(an,"settings.json"),te=["https:","http:","steam:","spotify:"];(0,on.mkdirSync)(an,{recursive:!0});function Ke(){return(0,Q.readFile)(cn,"utf-8").catch(()=>"")}function ie(){try{return(0,on.readFileSync)(En,"utf-8")}catch{return"{}"}}function ae(){try{return JSON.parse(ie())}catch{return{}}}y.ipcMain.handle(C.OPEN_QUICKCSS,()=>y.shell.openPath(cn));y.ipcMain.handle(C.OPEN_EXTERNAL,(n,e)=>{try{var{protocol:t}=new URL(e)}catch{throw"Malformed URL"}if(!te.includes(t))throw"Disallowed protocol.";y.shell.openExternal(e)});var Be=new rn,_e=new rn;y.ipcMain.handle(C.GET_QUICK_CSS,()=>Ke());y.ipcMain.handle(C.SET_QUICK_CSS,(n,e)=>Be.push(()=>(0,Q.writeFile)(cn,e)));y.ipcMain.handle(C.GET_SETTINGS_DIR,()=>an);y.ipcMain.on(C.GET_SETTINGS,n=>n.returnValue=ie());y.ipcMain.handle(C.SET_SETTINGS,(n,e)=>{_e.push(()=>(0,Q.writeFile)(En,e))});y.ipcMain.handle(C.OPEN_MONACO_EDITOR,async()=>{await new y.BrowserWindow({title:"QuickCss Editor",autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,re.join)(__dirname,"preload.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!1}}).loadURL(`data:text/html;base64,${ne}`)});c();var Se=require("electron");c();var ue=require("module"),He=(0,ue.createRequire)("/"),hn,Ye=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{hn=He("worker_threads").Worker}catch{}var Qe=hn?function(n,e,t,r,i){var o=!1,s=new hn(n+Ye,{eval:!0}).on("error",function(u){return i(u,null)}).on("message",function(u){return i(null,u)}).on("exit",function(u){u&&!o&&i(new Error("exited with code "+u),null)});return s.postMessage(t,r),s.terminate=function(){return o=!0,hn.prototype.terminate.call(s)},s}:function(n,e,t,r,i){setImmediate(function(){return i(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var o=function(){};return{terminate:o,postMessage:o}},I=Uint8Array,U=Uint16Array,Rn=Uint32Array,kn=new I([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Gn=new I([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),fe=new I([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),ce=function(n,e){for(var t=new U(31),r=0;r<31;++r)t[r]=e+=1<<n[r-1];for(var i=new Rn(t[30]),r=1;r<30;++r)for(var o=t[r];o<t[r+1];++o)i[o]=o-t[r]<<5|r;return[t,i]},le=ce(kn,2),On=le[0],Xe=le[1];On[28]=258,Xe[258]=28;var he=ce(Gn,0),ve=he[0],bt=he[1],gn=new U(32768);for(l=0;l<32768;++l)R=(l&43690)>>>1|(l&21845)<<1,R=(R&52428)>>>2|(R&13107)<<2,R=(R&61680)>>>4|(R&3855)<<4,gn[l]=((R&65280)>>>8|(R&255)<<8)>>>1;var R,l,X=function(n,e,t){for(var r=n.length,i=0,o=new U(e);i<r;++i)n[i]&&++o[n[i]-1];var s=new U(e);for(i=0;i<e;++i)s[i]=s[i-1]+o[i-1]<<1;var u;if(t){u=new U(1<<e);var a=15-e;for(i=0;i<r;++i)if(n[i])for(var f=i<<4|n[i],h=e-n[i],v=s[n[i]-1]++<<h,S=v|(1<<h)-1;v<=S;++v)u[gn[v]>>>a]=f}else for(u=new U(r),i=0;i<r;++i)n[i]&&(u[i]=gn[s[n[i]-1]++]>>>15-n[i]);return u},sn=new I(288);for(l=0;l<144;++l)sn[l]=8;var l;for(l=144;l<256;++l)sn[l]=9;var l;for(l=256;l<280;++l)sn[l]=7;var l;for(l=280;l<288;++l)sn[l]=8;var l,pe=new I(32);for(l=0;l<32;++l)pe[l]=5;var l;var ge=X(sn,9,1);var me=X(pe,5,1),vn=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},x=function(n,e,t){var r=e/8|0;return(n[r]|n[r+1]<<8)>>(e&7)&t},pn=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},de=function(n){return(n+7)/8|0},mn=function(n,e,t){(e==null||e<0)&&(e=0),(t==null||t>n.length)&&(t=n.length);var r=new(n.BYTES_PER_ELEMENT==2?U:n.BYTES_PER_ELEMENT==4?Rn:I)(t-e);return r.set(n.subarray(e,t)),r};var Ce=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],A=function(n,e,t){var r=new Error(e||Ce[n]);if(r.code=n,Error.captureStackTrace&&Error.captureStackTrace(r,A),!t)throw r;return r},Ie=function(n,e,t){var r=n.length;if(!r||t&&t.f&&!t.l)return e||new I(0);var i=!e||t,o=!t||t.i;t||(t={}),e||(e=new I(r*3));var s=function(Wn){var Ln=e.length;if(Wn>Ln){var Mn=new I(Math.max(Ln*2,Wn));Mn.set(e),e=Mn}},u=t.f||0,a=t.p||0,f=t.b||0,h=t.l,v=t.d,S=t.m,k=t.n,J=r*8;do{if(!h){u=x(n,a,1);var V=x(n,a+1,3);if(a+=3,V)if(V==1)h=ge,v=me,S=9,k=5;else if(V==2){var O=x(n,a,31)+257,M=x(n,a+10,15)+4,b=O+x(n,a+5,31)+1;a+=14;for(var W=new I(b),$=new I(19),g=0;g<M;++g)$[fe[g]]=x(n,a+g*3,7);a+=M*3;for(var z=vn($),un=(1<<z)-1,Z=X($,z,1),g=0;g<b;){var nn=Z[x(n,a,un)];a+=nn&15;var p=nn>>>4;if(p<16)W[g++]=p;else{var j=0,fn=0;for(p==16?(fn=3+x(n,a,3),a+=2,j=W[g-1]):p==17?(fn=3+x(n,a,7),a+=3):p==18&&(fn=11+x(n,a,127),a+=7);fn--;)W[g++]=j}}var Pn=W.subarray(0,O),N=W.subarray(O);S=vn(Pn),k=vn(N),h=X(Pn,S,1),v=X(N,k,1)}else A(1);else{var p=de(a)+4,w=n[p-4]|n[p-3]<<8,G=p+w;if(G>r){o&&A(0);break}i&&s(f+w),e.set(n.subarray(p,G),f),t.b=f+=w,t.p=a=G*8,t.f=u;continue}if(a>J){o&&A(0);break}}i&&s(f+131072);for(var ze=(1<<S)-1,Re=(1<<k)-1,dn=a;;dn=a){var j=h[pn(n,a)&ze],F=j>>>4;if(a+=j&15,a>J){o&&A(0);break}if(j||A(2),F<256)e[f++]=F;else if(F==256){dn=a,h=null;break}else{var Un=F-254;if(F>264){var g=F-257,en=kn[g];Un=x(n,a,(1<<en)-1)+On[g],a+=en}var Cn=v[pn(n,a)&Re],In=Cn>>>4;Cn||A(3),a+=Cn&15;var N=ve[In];if(In>3){var en=Gn[In];N+=pn(n,a)&(1<<en)-1,a+=en}if(a>J){o&&A(0);break}i&&s(f+131072);for(var Vn=f+Un;f<Vn;f+=4)e[f]=e[f-N],e[f+1]=e[f+1-N],e[f+2]=e[f+2-N],e[f+3]=e[f+3-N];f=Vn}}t.l=h,t.p=dn,t.b=f,t.f=u,h&&(u=1,t.m=S,t.d=v,t.n=k)}while(!u);return f==e.length?e:mn(e,0,f)};var qe=new I(0);var Je=function(n,e){var t={};for(var r in n)t[r]=n[r];for(var r in e)t[r]=e[r];return t},oe=function(n,e,t){for(var r=n(),i=n.toString(),o=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),s=0;s<r.length;++s){var u=r[s],a=o[s];if(typeof u=="function"){e+=";"+a+"=";var f=u.toString();if(u.prototype)if(f.indexOf("[native code]")!=-1){var h=f.indexOf(" ",8)+1;e+=f.slice(h,f.indexOf("(",h))}else{e+=f;for(var v in u.prototype)e+=";"+a+".prototype."+v+"="+u.prototype[v].toString()}else e+=f}else t[a]=u}return[e,t]},ln=[],be=function(n){var e=[];for(var t in n)n[t].buffer&&e.push((n[t]=new n[t].constructor(n[t])).buffer);return e},$e=function(n,e,t,r){var i;if(!ln[t]){for(var o="",s={},u=n.length-1,a=0;a<u;++a)i=oe(n[a],o,s),o=i[0],s=i[1];ln[t]=oe(n[u],o,s)}var f=Je({},ln[t][1]);return Qe(ln[t][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",t,f,be(f),r)},nt=function(){return[I,U,Rn,kn,Gn,fe,On,ve,ge,me,gn,Ce,X,vn,x,pn,de,mn,A,Ie,Nn,ye,Ae]};var ye=function(n){return postMessage(n,[n.buffer])},Ae=function(n){return n&&n.size&&new I(n.size)},et=function(n,e,t,r,i,o){var s=$e(t,r,i,function(u,a){s.terminate(),o(u,a)});return s.postMessage([n,e],e.consume?[n.buffer]:[]),function(){s.terminate()}};var E=function(n,e){return n[e]|n[e+1]<<8},T=function(n,e){return(n[e]|n[e+1]<<8|n[e+2]<<16|n[e+3]<<24)>>>0},Dn=function(n,e){return T(n,e)+T(n,e+4)*4294967296};function tt(n,e,t){return t||(t=e,e={}),typeof t!="function"&&A(7),et(n,e,[nt],function(r){return ye(Nn(r.data[0],Ae(r.data[1])))},1,t)}function Nn(n,e){return Ie(n,e)}var zn=typeof TextDecoder<"u"&&new TextDecoder,rt=0;try{zn.decode(qe,{stream:!0}),rt=1}catch{}var it=function(n){for(var e="",t=0;;){var r=n[t++],i=(r>127)+(r>223)+(r>239);if(t+i>n.length)return[e,mn(n,t-1)];i?i==3?(r=((r&15)<<18|(n[t++]&63)<<12|(n[t++]&63)<<6|n[t++]&63)-65536,e+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?e+=String.fromCharCode((r&31)<<6|n[t++]&63):e+=String.fromCharCode((r&15)<<12|(n[t++]&63)<<6|n[t++]&63):e+=String.fromCharCode(r)}};function at(n,e){if(e){for(var t="",r=0;r<n.length;r+=16384)t+=String.fromCharCode.apply(null,n.subarray(r,r+16384));return t}else{if(zn)return zn.decode(n);var i=it(n),o=i[0],s=i[1];return s.length&&A(8),o}}var ot=function(n,e){return e+30+E(n,e+26)+E(n,e+28)},st=function(n,e,t){var r=E(n,e+28),i=at(n.subarray(e+46,e+46+r),!(E(n,e+8)&2048)),o=e+46+r,s=T(n,e+20),u=t&&s==4294967295?ut(n,o):[s,T(n,e+24),T(n,e+42)],a=u[0],f=u[1],h=u[2];return[E(n,e+10),a,f,i,o+E(n,e+30)+E(n,e+32),h]},ut=function(n,e){for(;E(n,e)!=1;e+=4+E(n,e+2));return[Dn(n,e+12),Dn(n,e+4),Dn(n,e+20)]};var se=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(n){n()};function we(n,e,t){t||(t=e,e={}),typeof t!="function"&&A(7);var r=[],i=function(){for(var p=0;p<r.length;++p)r[p]()},o={},s=function(p,w){se(function(){t(p,w)})};se(function(){s=t});for(var u=n.length-22;T(n,u)!=101010256;--u)if(!u||n.length-u>65558)return s(A(13,0,1),null),i;var a=E(n,u+8);if(a){var f=a,h=T(n,u+16),v=h==4294967295||f==65535;if(v){var S=T(n,u-12);v=T(n,S)==101075792,v&&(f=a=T(n,S+32),h=T(n,S+48))}for(var k=e&&e.filter,J=function(p){var w=st(n,h,v),G=w[0],O=w[1],M=w[2],b=w[3],W=w[4],$=w[5],g=ot(n,$);h=W;var z=function(Z,nn){Z?(i(),s(Z,null)):(nn&&(o[b]=nn),--a||s(null,o))};if(!k||k({name:b,size:O,originalSize:M,compression:G}))if(!G)z(null,mn(n,g,g+O));else if(G==8){var un=n.subarray(g,g+O);if(O<32e4)try{z(null,Nn(un,new I(M)))}catch(Z){z(Z,null)}else r.push(tt(un,{size:M},z))}else z(A(14,"unknown compression type "+G,1),null);else z(null,null)},V=0;V<f;++V)J(V)}else s(null,{});return i}var Te=require("fs"),D=require("fs/promises"),q=require("path");c();function xe(n){function e(s,u,a,f){let h=0;return h+=s<<0,h+=u<<8,h+=a<<16,h+=f<<24>>>0,h}if(n[0]===80&&n[1]===75&&n[2]===3&&n[3]===4)return n;if(n[0]!==67||n[1]!==114||n[2]!==50||n[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let t=n[4]===3,r=n[4]===2;if(!r&&!t||n[5]||n[6]||n[7])throw new Error("Unexpected crx format version number.");if(r){let s=e(n[8],n[9],n[10],n[11]),u=e(n[12],n[13],n[14],n[15]),a=16+s+u;return n.subarray(a,n.length)}let o=12+e(n[8],n[9],n[10],n[11]);return n.subarray(o,n.length)}xn();var ft=(0,q.join)(Tn,"ExtensionCache");async function ct(n,e){return await(0,D.mkdir)(e,{recursive:!0}),new Promise((t,r)=>{we(n,(i,o)=>{if(i)return void r(i);Promise.all(Object.keys(o).map(async s=>{if(s.startsWith("_metadata/"))return;if(s.endsWith("/"))return void(0,D.mkdir)((0,q.join)(e,s),{recursive:!0});let u=s.split("/"),a=u.pop(),f=u.join("/"),h=(0,q.join)(e,f);f&&await(0,D.mkdir)(h,{recursive:!0}),await(0,D.writeFile)((0,q.join)(h,a),o[s])})).then(()=>t()).catch(s=>{(0,D.rm)(e,{recursive:!0,force:!0}),r(s)})})})}async function Ee(n){let e=(0,q.join)(ft,`${n}`);try{await(0,D.access)(e,Te.constants.F_OK)}catch{let r=n==="fmkadmapgofadopljbjfkapdkoienihi"?"https://raw.githubusercontent.com/Vendicated/random-files/f6f550e4c58ac5f2012095a130406c2ab25b984d/fmkadmapgofadopljbjfkapdkoienihi.zip":`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${n}%26uc&prodversion=32`,i=await B(r,{headers:{"User-Agent":"Vencord (https://github.com/Vendicated/Vencord)"}});await ct(xe(i),e).catch(console.error)}Se.session.defaultSession.loadExtension(e)}L.app.whenReady().then(()=>{L.protocol.registerFileProtocol("vencord",({url:r},i)=>{let o=r.slice(10);switch(o.endsWith("/")&&(o=o.slice(0,-1)),o){case"renderer.js.map":case"preload.js.map":case"patcher.js.map":case"main.js.map":i((0,De.join)(__dirname,o));break;default:i({statusCode:403})}});try{ae().enableReactDevtools&&Ee("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(r=>console.error("[Vencord] Failed to install React Developer Tools",r))}catch{}let n=r=>{let i={};return r.split(";").forEach(o=>{let[s,...u]=o.trim().split(/\s+/g);s&&!Object.prototype.hasOwnProperty.call(i,s)&&(i[s]=u)}),i},e=r=>Object.entries(r).filter(([,i])=>i?.length).map(i=>i.flat().join(" ")).join("; ");function t(r,i){if(i in r){let o=n(r[i][0]);for(let s of["style-src","connect-src","img-src","font-src","media-src","worker-src"])o[s]=["*","blob:","data:","'unsafe-inline'"];o["script-src"]??=[],o["script-src"].push("'unsafe-eval'","https://unpkg.com","https://cdnjs.cloudflare.com"),r[i]=[e(o)]}}L.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:r,resourceType:i},o)=>{r&&(i==="mainFrame"&&t(r,"content-security-policy"),i==="stylesheet"&&(r["content-type"]=["text/css"])),o({cancel:!1,responseHeaders:r})}),L.session.defaultSession.webRequest.onHeadersReceived=()=>{}});
//# sourceURL=VencordDesktopMain
//# sourceMappingURL=vencord://vencordDesktopMain.js.map
/*! For license information please see vencordDesktopMain.js.LEGAL.txt */
