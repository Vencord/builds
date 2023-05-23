// Vencord 458c7ed
// Standalone: true
// Platform: Universal
"use strict";var Ee=Object.create;var Wn=Object.defineProperty;var De=Object.getOwnPropertyDescriptor;var ze=Object.getOwnPropertyNames;var Re=Object.getPrototypeOf,Ge=Object.prototype.hasOwnProperty;var U=(n,e)=>()=>(n&&(e=n(n=0)),e);var Ne=(n,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of ze(e))!Ge.call(n,i)&&i!==t&&Wn(n,i,{get:()=>e[i],enumerable:!(r=De(e,i))||r.enumerable});return n};var ke=(n,e,t)=>(t=n!=null?Ee(Re(n)):{},Ne(e||!n||!n.__esModule?Wn(t,"default",{value:n,enumerable:!0}):t,n));var c=U(()=>{"use strict"});var $,An=U(()=>{c();$="458c7ed"});var F,dn=U(()=>{c();F="Vendicated/Vencord"});var Ln,Kn=U(()=>{"use strict";c();An();dn();Ln=`Vencord/${$}${F?` (https://github.com/${F})`:""}`});var yn=U(()=>{"use strict";c()});function j(n,e={}){return new Promise((t,r)=>{Fn.default.get(n,e,i=>{let{statusCode:o,statusMessage:s,headers:u}=i;if(o>=400)return void r(`${o}: ${s} - ${n}`);if(o>=300)return void t(j(u.location,e));let a=[];i.on("error",r),i.on("data",f=>a.push(f)),i.once("end",()=>t(Buffer.concat(a)))})})}var Fn,wn=U(()=>{"use strict";c();Fn=ke(require("https"))});function nn(n){return async function(){try{return{ok:!0,value:await n(...arguments)}}catch(e){return{ok:!1,error:e instanceof Error?{...e}:e}}}}var jn,Bn=U(()=>{"use strict";c();jn=["vencordDesktopMain.js","preload.js","vencordDesktopRenderer.js","renderer.css"]});var Pe={};async function Yn(n){return j(Ve+n,{headers:{Accept:"application/vnd.github+json","User-Agent":Ln}})}async function Oe(){if(!await Hn())return[];let e=await Yn(`/compare/${$}...HEAD`);return JSON.parse(e.toString("utf-8")).commits.map(r=>({hash:r.sha.slice(0,7),author:r.author.login,message:r.commit.message}))}async function Hn(){let n=await Yn("/releases/latest"),e=JSON.parse(n.toString());return e.name.slice(e.name.lastIndexOf(" ")+1)===$?!1:(e.assets.forEach(({name:r,browser_download_url:i})=>{jn.some(o=>r.startsWith(o))&&xn.push([r,i])}),!0)}async function Ze(){return await Promise.all(xn.map(async([n,e])=>(0,_n.writeFile)((0,Xn.join)(__dirname,n),await j(e)))),xn=[],!0}var en,_n,Xn,Ve,xn,Jn=U(()=>{"use strict";c();Kn();yn();en=require("electron"),_n=require("fs/promises"),Xn=require("path");An();dn();wn();Bn();Ve=`https://api.github.com/repos/${F}`,xn=[];en.ipcMain.handle("VencordGetRepo",nn(()=>`https://github.com/${F}`));en.ipcMain.handle("VencordGetUpdates",nn(Oe));en.ipcMain.handle("VencordUpdate",nn(Hn));en.ipcMain.handle("VencordBuild",nn(Ze))});c();var P=require("electron"),xe=require("path");c();c();Promise.resolve().then(()=>Jn());c();yn();c();var tn=class{constructor(e=1/0){this.maxSize=e}queue=[];promise;next(){let e=this.queue.shift();e?this.promise=Promise.resolve().then(e).finally(()=>this.next()):this.promise=void 0}run(){this.promise||this.next()}push(e){this.size>=this.maxSize&&this.queue.shift(),this.queue.push(e),this.run()}unshift(e){this.size>=this.maxSize&&this.queue.pop(),this.queue.unshift(e),this.run()}get size(){return this.queue.length}};var A=require("electron"),an=require("fs"),_=require("fs/promises"),$n=require("path");c();var Qn="PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KICAgIDxoZWFkPgogICAgICAgIDxtZXRhIGNoYXJzZXQ9InV0Zi04IiAvPgogICAgICAgIDx0aXRsZT5WZW5jb3JkIFF1aWNrQ1NTIEVkaXRvcjwvdGl0bGU+CiAgICAgICAgPGxpbmsKICAgICAgICAgICAgcmVsPSJzdHlsZXNoZWV0IgogICAgICAgICAgICBocmVmPSJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuMzcuMS9taW4vdnMvZWRpdG9yL2VkaXRvci5tYWluLm1pbi5jc3MiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhNTEyLXdCM3hmTDk4aFdnMWJwa1ZZU3lMMGpzL0p4OXM3RnNEZzlhWU82bk9NU0pUZ1B1ay9QRnF4WFFKS0tTVWp0ZVpqZVlyZmdvOU5GQk9BMXI5SHdEdVp3PT0iCiAgICAgICAgICAgIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiCiAgICAgICAgICAgIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciIKICAgICAgICAvPgogICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgaHRtbCwKICAgICAgICAgICAgYm9keSwKICAgICAgICAgICAgI2NvbnRhaW5lciB7CiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgICAgICAgICBsZWZ0OiAwOwogICAgICAgICAgICAgICAgdG9wOiAwOwogICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7CiAgICAgICAgICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwOwogICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgICAgICAgICAgfQogICAgICAgIDwvc3R5bGU+CiAgICA8L2hlYWQ+CgogICAgPGJvZHk+CiAgICAgICAgPGRpdiBpZD0iY29udGFpbmVyIj48L2Rpdj4KICAgICAgICA8c2NyaXB0CiAgICAgICAgICAgIHNyYz0iaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbW9uYWNvLWVkaXRvci8wLjM3LjEvbWluL3ZzL2xvYWRlci5taW4uanMiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhNTEyLUErNlN2UEdrSU45UmYwbVVYbVc0eGg3ckR2QUxYZi9mMFZ0T1VpSGxEVVNQa251MmtjZnoxS3pMcE9KeUwycE8rblpTMTNoaElqTHFWZ2lRRXhMSnJ3PT0iCiAgICAgICAgICAgIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiCiAgICAgICAgICAgIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciIKICAgICAgICA+PC9zY3JpcHQ+CgogICAgICAgIDxzY3JpcHQ+CiAgICAgICAgICAgIHJlcXVpcmUuY29uZmlnKHsKICAgICAgICAgICAgICAgIHBhdGhzOiB7CiAgICAgICAgICAgICAgICAgICAgdnM6ICJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuMzcuMS9taW4vdnMiLAogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgfSk7CgogICAgICAgICAgICByZXF1aXJlKFsidnMvZWRpdG9yL2VkaXRvci5tYWluIl0sICgpID0+IHsKICAgICAgICAgICAgICAgIGdldEN1cnJlbnRDc3MoKS50aGVuKChjc3MpID0+IHsKICAgICAgICAgICAgICAgICAgICB2YXIgZWRpdG9yID0gbW9uYWNvLmVkaXRvci5jcmVhdGUoCiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJjb250YWluZXIiKSwKICAgICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNzcywKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAiY3NzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiBnZXRUaGVtZSgpLAogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICBlZGl0b3Iub25EaWRDaGFuZ2VNb2RlbENvbnRlbnQoKCkgPT4KICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3NzKGVkaXRvci5nZXRWYWx1ZSgpKQogICAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoInJlc2l6ZSIsICgpID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBtb25hY28gcmUtbGF5b3V0CiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRvci5sYXlvdXQoKTsKICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9KTsKICAgICAgICA8L3NjcmlwdD4KICAgIDwvYm9keT4KPC9odG1sPgo=";c();var bn=require("electron"),B=require("path"),Sn=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,B.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,B.join)(bn.app.getPath("userData"),"..","Vencord")),rn=(0,B.join)(Sn,"settings"),fn=(0,B.join)(rn,"quickCss.css"),Tn=(0,B.join)(rn,"settings.json"),qn=["https:","http:","steam:","spotify:"];(0,an.mkdirSync)(rn,{recursive:!0});function Me(){return(0,_.readFile)(fn,"utf-8").catch(()=>"")}function ne(){try{return(0,an.readFileSync)(Tn,"utf-8")}catch{return"{}"}}function ee(){try{return JSON.parse(ne())}catch{return{}}}A.ipcMain.handle("VencordOpenQuickCss",()=>A.shell.openPath(fn));A.ipcMain.handle("VencordOpenExternal",(n,e)=>{try{var{protocol:t}=new URL(e)}catch{throw"Malformed URL"}if(!qn.includes(t))throw"Disallowed protocol.";A.shell.openExternal(e)});var We=new tn,Le=new tn;A.ipcMain.handle("VencordGetQuickCss",()=>Me());A.ipcMain.handle("VencordSetQuickCss",(n,e)=>We.push(()=>(0,_.writeFile)(fn,e)));A.ipcMain.handle("VencordGetSettingsDir",()=>rn);A.ipcMain.on("VencordGetSettings",n=>n.returnValue=ne());A.ipcMain.handle("VencordSetSettings",(n,e)=>{Le.push(()=>(0,_.writeFile)(Tn,e))});A.ipcMain.handle("VencordOpenMonacoEditor",async()=>{await new A.BrowserWindow({title:"Vencord QuickCSS Editor",autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,$n.join)(__dirname,"preload.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!1}}).loadURL(`data:text/html;base64,${Qn}`)});c();var de=require("electron");c();var ie=require("module"),Ke=(0,ie.createRequire)("/"),ln,Fe=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{ln=Ke("worker_threads").Worker}catch{}var je=ln?function(n,e,t,r,i){var o=!1,s=new ln(n+Fe,{eval:!0}).on("error",function(u){return i(u,null)}).on("message",function(u){return i(null,u)}).on("exit",function(u){u&&!o&&i(new Error("exited with code "+u),null)});return s.postMessage(t,r),s.terminate=function(){return o=!0,ln.prototype.terminate.call(s)},s}:function(n,e,t,r,i){setImmediate(function(){return i(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var o=function(){};return{terminate:o,postMessage:o}},I=Uint8Array,V=Uint16Array,zn=Uint32Array,Rn=new I([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Gn=new I([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ae=new I([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),oe=function(n,e){for(var t=new V(31),r=0;r<31;++r)t[r]=e+=1<<n[r-1];for(var i=new zn(t[30]),r=1;r<30;++r)for(var o=t[r];o<t[r+1];++o)i[o]=o-t[r]<<5|r;return[t,i]},se=oe(Rn,2),Nn=se[0],Be=se[1];Nn[28]=258,Be[258]=28;var ue=oe(Gn,0),fe=ue[0],Yt=ue[1],vn=new V(32768);for(l=0;l<32768;++l)z=(l&43690)>>>1|(l&21845)<<1,z=(z&52428)>>>2|(z&13107)<<2,z=(z&61680)>>>4|(z&3855)<<4,vn[l]=((z&65280)>>>8|(z&255)<<8)>>>1;var z,l,X=function(n,e,t){for(var r=n.length,i=0,o=new V(e);i<r;++i)n[i]&&++o[n[i]-1];var s=new V(e);for(i=0;i<e;++i)s[i]=s[i-1]+o[i-1]<<1;var u;if(t){u=new V(1<<e);var a=15-e;for(i=0;i<r;++i)if(n[i])for(var f=i<<4|n[i],h=e-n[i],g=s[n[i]-1]++<<h,x=g|(1<<h)-1;g<=x;++g)u[vn[g]>>>a]=f}else for(u=new V(r),i=0;i<r;++i)n[i]&&(u[i]=vn[s[n[i]-1]++]>>>15-n[i]);return u},on=new I(288);for(l=0;l<144;++l)on[l]=8;var l;for(l=144;l<256;++l)on[l]=9;var l;for(l=256;l<280;++l)on[l]=7;var l;for(l=280;l<288;++l)on[l]=8;var l,ce=new I(32);for(l=0;l<32;++l)ce[l]=5;var l;var le=X(on,9,1);var he=X(ce,5,1),hn=function(n){for(var e=n[0],t=1;t<n.length;++t)n[t]>e&&(e=n[t]);return e},w=function(n,e,t){var r=e/8|0;return(n[r]|n[r+1]<<8)>>(e&7)&t},gn=function(n,e){var t=e/8|0;return(n[t]|n[t+1]<<8|n[t+2]<<16)>>(e&7)},ge=function(n){return(n+7)/8|0},pn=function(n,e,t){(e==null||e<0)&&(e=0),(t==null||t>n.length)&&(t=n.length);var r=new(n.BYTES_PER_ELEMENT==2?V:n.BYTES_PER_ELEMENT==4?zn:I)(t-e);return r.set(n.subarray(e,t)),r};var ve=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],d=function(n,e,t){var r=new Error(e||ve[n]);if(r.code=n,Error.captureStackTrace&&Error.captureStackTrace(r,d),!t)throw r;return r},pe=function(n,e,t){var r=n.length;if(!r||t&&t.f&&!t.l)return e||new I(0);var i=!e||t,o=!t||t.i;t||(t={}),e||(e=new I(r*3));var s=function(Zn){var Pn=e.length;if(Zn>Pn){var Mn=new I(Math.max(Pn*2,Zn));Mn.set(e),e=Mn}},u=t.f||0,a=t.p||0,f=t.b||0,h=t.l,g=t.d,x=t.m,R=t.n,H=r*8;do{if(!h){u=w(n,a,1);var O=w(n,a+1,3);if(a+=3,O)if(O==1)h=le,g=he,x=9,R=5;else if(O==2){var N=w(n,a,31)+257,M=w(n,a+10,15)+4,J=N+w(n,a+5,31)+1;a+=14;for(var Z=new I(J),Q=new I(19),p=0;p<M;++p)Q[ae[p]]=w(n,a+p*3,7);a+=M*3;for(var D=hn(Q),sn=(1<<D)-1,W=X(Q,D,1),p=0;p<J;){var b=W[w(n,a,sn)];a+=b&15;var v=b>>>4;if(v<16)Z[p++]=v;else{var L=0,un=0;for(v==16?(un=3+w(n,a,3),a+=2,L=Z[p-1]):v==17?(un=3+w(n,a,7),a+=3):v==18&&(un=11+w(n,a,127),a+=7);un--;)Z[p++]=L}}var Un=Z.subarray(0,N),k=Z.subarray(N);x=hn(Un),R=hn(k),h=X(Un,x,1),g=X(k,R,1)}else d(1);else{var v=ge(a)+4,y=n[v-4]|n[v-3]<<8,G=v+y;if(G>r){o&&d(0);break}i&&s(f+y),e.set(n.subarray(v,G),f),t.b=f+=y,t.p=a=G*8,t.f=u;continue}if(a>H){o&&d(0);break}}i&&s(f+131072);for(var Se=(1<<x)-1,Te=(1<<R)-1,mn=a;;mn=a){var L=h[gn(n,a)&Se],K=L>>>4;if(a+=L&15,a>H){o&&d(0);break}if(L||d(2),K<256)e[f++]=K;else if(K==256){mn=a,h=null;break}else{var Vn=K-254;if(K>264){var p=K-257,q=Rn[p];Vn=w(n,a,(1<<q)-1)+Nn[p],a+=q}var Cn=g[gn(n,a)&Te],In=Cn>>>4;Cn||d(3),a+=Cn&15;var k=fe[In];if(In>3){var q=Gn[In];k+=gn(n,a)&(1<<q)-1,a+=q}if(a>H){o&&d(0);break}i&&s(f+131072);for(var On=f+Vn;f<On;f+=4)e[f]=e[f-k],e[f+1]=e[f+1-k],e[f+2]=e[f+2-k],e[f+3]=e[f+3-k];f=On}}t.l=h,t.p=mn,t.b=f,t.f=u,h&&(u=1,t.m=x,t.d=g,t.n=R)}while(!u);return f==e.length?e:pn(e,0,f)};var _e=new I(0);var Xe=function(n,e){var t={};for(var r in n)t[r]=n[r];for(var r in e)t[r]=e[r];return t},te=function(n,e,t){for(var r=n(),i=n.toString(),o=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),s=0;s<r.length;++s){var u=r[s],a=o[s];if(typeof u=="function"){e+=";"+a+"=";var f=u.toString();if(u.prototype)if(f.indexOf("[native code]")!=-1){var h=f.indexOf(" ",8)+1;e+=f.slice(h,f.indexOf("(",h))}else{e+=f;for(var g in u.prototype)e+=";"+a+".prototype."+g+"="+u.prototype[g].toString()}else e+=f}else t[a]=u}return[e,t]},cn=[],Ye=function(n){var e=[];for(var t in n)n[t].buffer&&e.push((n[t]=new n[t].constructor(n[t])).buffer);return e},He=function(n,e,t,r){var i;if(!cn[t]){for(var o="",s={},u=n.length-1,a=0;a<u;++a)i=te(n[a],o,s),o=i[0],s=i[1];cn[t]=te(n[u],o,s)}var f=Xe({},cn[t][1]);return je(cn[t][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",t,f,Ye(f),r)},Je=function(){return[I,V,zn,Rn,Gn,ae,Nn,fe,le,he,vn,ve,X,hn,w,gn,ge,pn,d,pe,kn,me,Ce]};var me=function(n){return postMessage(n,[n.buffer])},Ce=function(n){return n&&n.size&&new I(n.size)},Qe=function(n,e,t,r,i,o){var s=He(t,r,i,function(u,a){s.terminate(),o(u,a)});return s.postMessage([n,e],e.consume?[n.buffer]:[]),function(){s.terminate()}};var T=function(n,e){return n[e]|n[e+1]<<8},S=function(n,e){return(n[e]|n[e+1]<<8|n[e+2]<<16|n[e+3]<<24)>>>0},En=function(n,e){return S(n,e)+S(n,e+4)*4294967296};function be(n,e,t){return t||(t=e,e={}),typeof t!="function"&&d(7),Qe(n,e,[Je],function(r){return me(kn(r.data[0],Ce(r.data[1])))},1,t)}function kn(n,e){return pe(n,e)}var Dn=typeof TextDecoder<"u"&&new TextDecoder,qe=0;try{Dn.decode(_e,{stream:!0}),qe=1}catch{}var $e=function(n){for(var e="",t=0;;){var r=n[t++],i=(r>127)+(r>223)+(r>239);if(t+i>n.length)return[e,pn(n,t-1)];i?i==3?(r=((r&15)<<18|(n[t++]&63)<<12|(n[t++]&63)<<6|n[t++]&63)-65536,e+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?e+=String.fromCharCode((r&31)<<6|n[t++]&63):e+=String.fromCharCode((r&15)<<12|(n[t++]&63)<<6|n[t++]&63):e+=String.fromCharCode(r)}};function nt(n,e){if(e){for(var t="",r=0;r<n.length;r+=16384)t+=String.fromCharCode.apply(null,n.subarray(r,r+16384));return t}else{if(Dn)return Dn.decode(n);var i=$e(n),o=i[0],s=i[1];return s.length&&d(8),o}}var et=function(n,e){return e+30+T(n,e+26)+T(n,e+28)},tt=function(n,e,t){var r=T(n,e+28),i=nt(n.subarray(e+46,e+46+r),!(T(n,e+8)&2048)),o=e+46+r,s=S(n,e+20),u=t&&s==4294967295?rt(n,o):[s,S(n,e+24),S(n,e+42)],a=u[0],f=u[1],h=u[2];return[T(n,e+10),a,f,i,o+T(n,e+30)+T(n,e+32),h]},rt=function(n,e){for(;T(n,e)!=1;e+=4+T(n,e+2));return[En(n,e+12),En(n,e+4),En(n,e+20)]};var re=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(n){n()};function Ie(n,e,t){t||(t=e,e={}),typeof t!="function"&&d(7);var r=[],i=function(){for(var v=0;v<r.length;++v)r[v]()},o={},s=function(v,y){re(function(){t(v,y)})};re(function(){s=t});for(var u=n.length-22;S(n,u)!=101010256;--u)if(!u||n.length-u>65558)return s(d(13,0,1),null),i;var a=T(n,u+8);if(a){var f=a,h=S(n,u+16),g=h==4294967295||f==65535;if(g){var x=S(n,u-12);g=S(n,x)==101075792,g&&(f=a=S(n,x+32),h=S(n,x+48))}for(var R=e&&e.filter,H=function(v){var y=tt(n,h,g),G=y[0],N=y[1],M=y[2],J=y[3],Z=y[4],Q=y[5],p=et(n,Q);h=Z;var D=function(W,b){W?(i(),s(W,null)):(b&&(o[J]=b),--a||s(null,o))};if(!R||R({name:J,size:N,originalSize:M,compression:G}))if(!G)D(null,pn(n,p,p+N));else if(G==8){var sn=n.subarray(p,p+N);if(N<32e4)try{D(null,kn(sn,new I(M)))}catch(W){D(W,null)}else r.push(be(sn,{size:M},D))}else D(d(14,"unknown compression type "+G,1),null);else D(null,null)},O=0;O<f;++O)H(O)}else s(null,{});return i}var ye=require("fs"),E=require("fs/promises"),Y=require("path");c();function Ae(n){function e(s,u,a,f){let h=0;return h+=s<<0,h+=u<<8,h+=a<<16,h+=f<<24>>>0,h}if(n[0]===80&&n[1]===75&&n[2]===3&&n[3]===4)return n;if(n[0]!==67||n[1]!==114||n[2]!==50||n[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let t=n[4]===3,r=n[4]===2;if(!r&&!t||n[5]||n[6]||n[7])throw new Error("Unexpected crx format version number.");if(r){let s=e(n[8],n[9],n[10],n[11]),u=e(n[12],n[13],n[14],n[15]),a=16+s+u;return n.subarray(a,n.length)}let o=12+e(n[8],n[9],n[10],n[11]);return n.subarray(o,n.length)}wn();var it=(0,Y.join)(Sn,"ExtensionCache");async function at(n,e){return await(0,E.mkdir)(e,{recursive:!0}),new Promise((t,r)=>{Ie(n,(i,o)=>{if(i)return void r(i);Promise.all(Object.keys(o).map(async s=>{if(s.startsWith("_metadata/"))return;if(s.endsWith("/"))return void(0,E.mkdir)((0,Y.join)(e,s),{recursive:!0});let u=s.split("/"),a=u.pop(),f=u.join("/"),h=(0,Y.join)(e,f);f&&await(0,E.mkdir)(h,{recursive:!0}),await(0,E.writeFile)((0,Y.join)(h,a),o[s])})).then(()=>t()).catch(s=>{(0,E.rm)(e,{recursive:!0,force:!0}),r(s)})})})}async function we(n){let e=(0,Y.join)(it,`${n}`);try{await(0,E.access)(e,ye.constants.F_OK)}catch{let r=n==="fmkadmapgofadopljbjfkapdkoienihi"?"https://raw.githubusercontent.com/Vendicated/random-files/f6f550e4c58ac5f2012095a130406c2ab25b984d/fmkadmapgofadopljbjfkapdkoienihi.zip":`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${n}%26uc&prodversion=32`,i=await j(r,{headers:{"User-Agent":"Vencord (https://github.com/Vendicated/Vencord)"}});await at(Ae(i),e).catch(console.error)}de.session.defaultSession.loadExtension(e)}P.app.whenReady().then(()=>{P.protocol.registerFileProtocol("vencord",({url:r},i)=>{let o=r.slice(10);switch(o.endsWith("/")&&(o=o.slice(0,-1)),o){case"renderer.js.map":case"vencordDesktopRenderer.js.map":case"preload.js.map":case"patcher.js.map":case"vencordDesktopMain.js.map":i((0,xe.join)(__dirname,o));break;default:i({statusCode:403})}});try{ee().enableReactDevtools&&we("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(r=>console.error("[Vencord] Failed to install React Developer Tools",r))}catch{}let n=r=>{let i={};return r.split(";").forEach(o=>{let[s,...u]=o.trim().split(/\s+/g);s&&!Object.prototype.hasOwnProperty.call(i,s)&&(i[s]=u)}),i},e=r=>Object.entries(r).filter(([,i])=>i?.length).map(i=>i.flat().join(" ")).join("; ");function t(r,i){if(i in r){let o=n(r[i][0]);for(let s of["style-src","connect-src","img-src","font-src","media-src","worker-src"])o[s]=["*","blob:","data:","'unsafe-inline'"];o["script-src"]??=[],o["script-src"].push("'unsafe-eval'","https://unpkg.com","https://cdnjs.cloudflare.com"),r[i]=[e(o)]}}P.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:r,resourceType:i},o)=>{r&&(i==="mainFrame"&&t(r,"content-security-policy"),i==="stylesheet"&&(r["content-type"]=["text/css"])),o({cancel:!1,responseHeaders:r})}),P.session.defaultSession.webRequest.onHeadersReceived=()=>{}});
//# sourceURL=VencordDesktopMain
//# sourceMappingURL=vencord://vencordDesktopMain.js.map
/*! For license information please see vencordDesktopMain.js.LEGAL.txt */
