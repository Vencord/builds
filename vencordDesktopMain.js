// Vencord 9b987d1
// Standalone: true
// Platform: Universal
// Updater disabled: false
"use strict";var Zn=Object.create;var Be=Object.defineProperty;var Wn=Object.getOwnPropertyDescriptor;var Fn=Object.getOwnPropertyNames;var Kn=Object.getPrototypeOf,jn=Object.prototype.hasOwnProperty;var P=(e,n)=>()=>(e&&(n=e(e=0)),n);var Bn=(e,n,t,r)=>{if(n&&typeof n=="object"||typeof n=="function")for(let i of Fn(n))!jn.call(e,i)&&i!==t&&Be(e,i,{get:()=>n[i],enumerable:!(r=Wn(n,i))||r.enumerable});return e};var Hn=(e,n,t)=>(t=e!=null?Zn(Kn(e)):{},Bn(n||!e||!e.__esModule?Be(t,"default",{value:e,enumerable:!0}):t,e));var f=P(()=>{"use strict"});var re,Te=P(()=>{f();re="9b987d1"});var B,Ee=P(()=>{f();B="Vendicated/Vencord"});var He,be=P(()=>{"use strict";f();Te();Ee();He=`Vencord/${re}${B?` (https://github.com/${B})`:""}`});var he=P(()=>{"use strict";f()});function H(e,n={}){return new Promise((t,r)=>{Ye.default.get(e,n,i=>{let{statusCode:a,statusMessage:o,headers:c}=i;if(a>=400)return void r(`${a}: ${o} - ${e}`);if(a>=300)return void t(H(c.location,n));let s=[];i.on("error",r),i.on("data",u=>s.push(u)),i.once("end",()=>t(Buffer.concat(s)))})})}var Ye,De=P(()=>{"use strict";f();Ye=Hn(require("https"))});function ie(e){return async function(){try{return{ok:!0,value:await e(...arguments)}}catch(n){return{ok:!1,error:n instanceof Error?{...n}:n}}}}var Xe,Je=P(()=>{"use strict";f();Xe=["vencordDesktopMain.js","vencordDesktopPreload.js","vencordDesktopRenderer.js","vencordDesktopRenderer.css"]});var Jn={};async function en(e){return H(bn+e,{headers:{Accept:"application/vnd.github+json","User-Agent":He}})}async function Yn(){if(!await nn())return[];let n=await en(`/compare/${re}...HEAD`);return JSON.parse(n.toString("utf-8")).commits.map(r=>({hash:r.sha.slice(0,7),author:r.author.login,message:r.commit.message}))}async function nn(){let e=await en("/releases/latest"),n=JSON.parse(e.toString());return n.name.slice(n.name.lastIndexOf(" ")+1)===re?!1:(n.assets.forEach(({name:r,browser_download_url:i})=>{Xe.some(a=>r.startsWith(a))&&Re.push([r,i])}),!0)}async function Xn(){return await Promise.all(Re.map(async([e,n])=>(0,qe.writeFile)((0,$e.join)(__dirname,e),await H(n)))),Re=[],!0}var ae,qe,$e,bn,Re,tn=P(()=>{"use strict";f();be();he();ae=require("electron"),qe=require("fs/promises"),$e=require("path");Te();Ee();De();Je();bn=`https://api.github.com/repos/${B}`,Re=[];ae.ipcMain.handle("VencordGetRepo",ie(()=>`https://github.com/${B}`));ae.ipcMain.handle("VencordGetUpdates",ie(Yn));ae.ipcMain.handle("VencordUpdate",ie(nn));ae.ipcMain.handle("VencordBuild",ie(Xn))});f();var Z=require("electron"),_n=require("path");f();f();Promise.resolve().then(()=>tn());f();he();var b=require("electron"),rn=require("fs/promises"),an=require("https"),oe=require("path");b.app.on("browser-window-created",(e,n)=>{n.webContents.on("frame-created",(t,{frame:r})=>{r.once("dom-ready",()=>{if(r.url.startsWith("https://open.spotify.com/embed/")){let i=ge().plugins?.FixSpotifyEmbeds;if(!i?.enabled)return;r.executeJavaScript(`
                    const original = Audio.prototype.play;
                    Audio.prototype.play = function() {
                        this.volume = ${i.volume/100||.1};
                        return original.apply(this, arguments);
                    }
                `)}})})});var Qn=/^https:\/\/(spotify\.link|s\.team)\/.+$/;function on(e){return new Promise((n,t)=>{let r=(0,an.request)(new URL(e),{method:"HEAD"},i=>{n(i.headers.location?on(i.headers.location):e)});r.on("error",t),r.end()})}b.ipcMain.handle("VencordOIAResolveRedirect",async(e,n)=>Qn.test(n)?on(n):n);b.ipcMain.handle("VencordVMReadRecording",async(e,n)=>{n=(0,oe.normalize)(n);let t=(0,oe.basename)(n),r=(0,oe.normalize)(b.app.getPath("userData")+"/");if(console.log(t,r,n),t!=="recording.ogg"||!n.startsWith(r))return null;try{let i=await(0,rn.readFile)(n);return new Uint8Array(i.buffer)}catch{return null}});f();he();f();var se=class{constructor(n=1/0){this.maxSize=n}queue=[];promise;next(){let n=this.queue.shift();n?this.promise=Promise.resolve().then(n).finally(()=>this.next()):this.promise=void 0}run(){this.promise||this.next()}push(n){this.size>=this.maxSize&&this.queue.shift(),this.queue.push(n),this.run()}unshift(n){this.size>=this.maxSize&&this.queue.pop(),this.queue.unshift(n),this.run()}get size(){return this.queue.length}};var A=require("electron"),X=require("fs"),R=require("fs/promises"),Y=require("path");f();var sn="PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KICAgIDxoZWFkPgogICAgICAgIDxtZXRhIGNoYXJzZXQ9InV0Zi04IiAvPgogICAgICAgIDx0aXRsZT5WZW5jb3JkIFF1aWNrQ1NTIEVkaXRvcjwvdGl0bGU+CiAgICAgICAgPGxpbmsKICAgICAgICAgICAgcmVsPSJzdHlsZXNoZWV0IgogICAgICAgICAgICBocmVmPSJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuNDAuMC9taW4vdnMvZWRpdG9yL2VkaXRvci5tYWluLm1pbi5jc3MiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhNTEyLU1Pb1EwMmg4MGhrbGNjZkxyWEZZa0N6RytXVmpPUmZsT3A5WnA4ZGx0aWFSUCszNUxZbk80TEtPa2xSNjRvTUdmR2dKRExPOFdKcGtNMW81Z1pYWVpRPT0iCiAgICAgICAgICAgIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiCiAgICAgICAgICAgIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciIKICAgICAgICAvPgogICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgaHRtbCwKICAgICAgICAgICAgYm9keSwKICAgICAgICAgICAgI2NvbnRhaW5lciB7CiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgICAgICAgICBsZWZ0OiAwOwogICAgICAgICAgICAgICAgdG9wOiAwOwogICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7CiAgICAgICAgICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwOwogICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgICAgICAgICAgfQogICAgICAgIDwvc3R5bGU+CiAgICA8L2hlYWQ+CgogICAgPGJvZHk+CiAgICAgICAgPGRpdiBpZD0iY29udGFpbmVyIj48L2Rpdj4KICAgICAgICA8c2NyaXB0CiAgICAgICAgICAgIHNyYz0iaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbW9uYWNvLWVkaXRvci8wLjQwLjAvbWluL3ZzL2xvYWRlci5taW4uanMiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhNTEyLVF6TXBYZUNQY2lBSFA0d2JZbFYyUFlnclFjYUVrRFFVanprUFU0eG5qeVZTRDlUMzYvdWRhbXh0TkJxYjRxSzQvYk1RTVBaOGF5ckJlOWhyR2RCRmpRPT0iCiAgICAgICAgICAgIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiCiAgICAgICAgICAgIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciIKICAgICAgICA+PC9zY3JpcHQ+CgogICAgICAgIDxzY3JpcHQ+CiAgICAgICAgICAgIHJlcXVpcmUuY29uZmlnKHsKICAgICAgICAgICAgICAgIHBhdGhzOiB7CiAgICAgICAgICAgICAgICAgICAgdnM6ICJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuNDAuMC9taW4vdnMiLAogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgfSk7CgogICAgICAgICAgICByZXF1aXJlKFsidnMvZWRpdG9yL2VkaXRvci5tYWluIl0sICgpID0+IHsKICAgICAgICAgICAgICAgIGdldEN1cnJlbnRDc3MoKS50aGVuKChjc3MpID0+IHsKICAgICAgICAgICAgICAgICAgICB2YXIgZWRpdG9yID0gbW9uYWNvLmVkaXRvci5jcmVhdGUoCiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJjb250YWluZXIiKSwKICAgICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNzcywKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAiY3NzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiBnZXRUaGVtZSgpLAogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICBlZGl0b3Iub25EaWRDaGFuZ2VNb2RlbENvbnRlbnQoKCkgPT4KICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3NzKGVkaXRvci5nZXRWYWx1ZSgpKQogICAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoInJlc2l6ZSIsICgpID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBtb25hY28gcmUtbGF5b3V0CiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRvci5sYXlvdXQoKTsKICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9KTsKICAgICAgICA8L3NjcmlwdD4KICAgIDwvYm9keT4KPC9odG1sPgo=";f();var qn=/[^\S\r\n]*?\r?(?:\r\n|\n)[^\S\r\n]*?\*[^\S\r\n]?/,$n=/^\\@/;function ze(e,n={}){return{fileName:e,name:n.name??e.replace(/\.css$/i,""),author:n.author??"Unknown Author",description:n.description??"A Discord Theme.",version:n.version,license:n.license,source:n.source,website:n.website,invite:n.invite}}function cn(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function un(e,n){if(!e)return ze(n);let t=e.split("/**",2)?.[1]?.split("*/",1)?.[0];if(!t)return ze(n);let r={},i="",a="";for(let o of t.split(qn))if(o.length!==0)if(o.charAt(0)==="@"&&o.charAt(1)!==" "){r[i]=a.trim();let c=o.indexOf(" ");i=o.substring(1,c),a=o.substring(c+1)}else a+=" "+o.replace("\\n",`
`).replace($n,"@");return r[i]=a.trim(),delete r[""],ze(n,r)}f();var fn=require("electron"),M=require("path"),pe=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,M.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,M.join)(fn.app.getPath("userData"),"..","Vencord")),ce=(0,M.join)(pe,"settings"),L=(0,M.join)(pe,"themes"),ve=(0,M.join)(ce,"quickCss.css"),Ge=(0,M.join)(ce,"settings.json"),ln=["https:","http:","steam:","spotify:","com.epicgames.launcher:"];f();var hn=require("electron");function gn(e){e.webContents.setWindowOpenHandler(({url:n})=>{switch(n){case"about:blank":case"https://discord.com/popout":case"https://ptb.discord.com/popout":case"https://canary.discord.com/popout":return{action:"allow"}}try{var{protocol:t}=new URL(n)}catch{return{action:"deny"}}switch(t){case"http:":case"https:":case"mailto:":case"steam:":case"spotify:":hn.shell.openExternal(n)}return{action:"deny"}})}(0,X.mkdirSync)(ce,{recursive:!0});(0,X.mkdirSync)(L,{recursive:!0});function ke(e,n){let t=(0,Y.normalize)(e),r=(0,Y.join)(e,n),i=(0,Y.normalize)(r);return i.startsWith(t)?i:null}function et(){return(0,R.readFile)(ve,"utf-8").catch(()=>"")}async function nt(){let e=await(0,R.readdir)(L).catch(()=>[]),n=[];for(let t of e){if(!t.endsWith(".css"))continue;let r=await pn(t).then(cn).catch(()=>null);r!=null&&n.push(un(r,t))}return n}function pn(e){e=e.replace(/\?v=\d+$/,"");let n=ke(L,e);return n?(0,R.readFile)(n,"utf-8"):Promise.reject(`Unsafe path ${e}`)}function vn(){try{return(0,X.readFileSync)(Ge,"utf-8")}catch{return"{}"}}function ge(){try{return JSON.parse(vn())}catch{return{}}}A.ipcMain.handle("VencordOpenQuickCss",()=>A.shell.openPath(ve));A.ipcMain.handle("VencordOpenExternal",(e,n)=>{try{var{protocol:t}=new URL(n)}catch{throw"Malformed URL"}if(!ln.includes(t))throw"Disallowed protocol.";A.shell.openExternal(n)});var tt=new se,rt=new se;A.ipcMain.handle("VencordGetQuickCss",()=>et());A.ipcMain.handle("VencordSetQuickCss",(e,n)=>tt.push(()=>(0,R.writeFile)(ve,n)));A.ipcMain.handle("VencordGetThemesDir",()=>L);A.ipcMain.handle("VencordGetThemesList",()=>nt());A.ipcMain.handle("VencordGetThemeData",(e,n)=>pn(n));A.ipcMain.handle("VencordGetSettingsDir",()=>ce);A.ipcMain.on("VencordGetSettings",e=>e.returnValue=vn());A.ipcMain.handle("VencordSetSettings",(e,n)=>{rt.push(()=>(0,R.writeFile)(Ge,n))});A.ipcMain.handle("VencordOpenMonacoEditor",async()=>{let e=new A.BrowserWindow({title:"Vencord QuickCSS Editor",autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,Y.join)(__dirname,"vencordDesktopPreload.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!1}});gn(e),await e.loadURL(`data:text/html;base64,${sn}`)});f();var Pn=require("electron");f();var An=require("module"),it=(0,An.createRequire)("/"),Ie,at=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{Ie=it("worker_threads").Worker}catch{}var ot=Ie?function(e,n,t,r,i){var a=!1,o=new Ie(e+at,{eval:!0}).on("error",function(c){return i(c,null)}).on("message",function(c){return i(null,c)}).on("exit",function(c){c&&!a&&i(new Error("exited with code "+c),null)});return o.postMessage(t,r),o.terminate=function(){return a=!0,Ie.prototype.terminate.call(o)},o}:function(e,n,t,r,i){setImmediate(function(){return i(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var a=function(){};return{terminate:a,postMessage:a}},C=Uint8Array,N=Uint16Array,Pe=Uint32Array,Ne=new C([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ve=new C([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Cn=new C([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),dn=function(e,n){for(var t=new N(31),r=0;r<31;++r)t[r]=n+=1<<e[r-1];for(var i=new Pe(t[30]),r=1;r<30;++r)for(var a=t[r];a<t[r+1];++a)i[a]=a-t[r]<<5|r;return[t,i]},yn=dn(Ne,2),_e=yn[0],st=yn[1];_e[28]=258,st[258]=28;var wn=dn(Ve,0),Sn=wn[0],yr=wn[1],de=new N(32768);for(l=0;l<32768;++l)z=(l&43690)>>>1|(l&21845)<<1,z=(z&52428)>>>2|(z&13107)<<2,z=(z&61680)>>>4|(z&3855)<<4,de[l]=((z&65280)>>>8|(z&255)<<8)>>>1;var z,l,J=function(e,n,t){for(var r=e.length,i=0,a=new N(n);i<r;++i)e[i]&&++a[e[i]-1];var o=new N(n);for(i=0;i<n;++i)o[i]=o[i-1]+a[i-1]<<1;var c;if(t){c=new N(1<<n);var s=15-n;for(i=0;i<r;++i)if(e[i])for(var u=i<<4|e[i],h=n-e[i],v=o[e[i]-1]++<<h,S=v|(1<<h)-1;v<=S;++v)c[de[v]>>>s]=u}else for(c=new N(r),i=0;i<r;++i)e[i]&&(c[i]=de[o[e[i]-1]++]>>>15-e[i]);return c},ue=new C(288);for(l=0;l<144;++l)ue[l]=8;var l;for(l=144;l<256;++l)ue[l]=9;var l;for(l=256;l<280;++l)ue[l]=7;var l;for(l=280;l<288;++l)ue[l]=8;var l,xn=new C(32);for(l=0;l<32;++l)xn[l]=5;var l;var Tn=J(ue,9,1);var En=J(xn,5,1),Ae=function(e){for(var n=e[0],t=1;t<e.length;++t)e[t]>n&&(n=e[t]);return n},w=function(e,n,t){var r=n/8|0;return(e[r]|e[r+1]<<8)>>(n&7)&t},Ce=function(e,n){var t=n/8|0;return(e[t]|e[t+1]<<8|e[t+2]<<16)>>(n&7)},Dn=function(e){return(e+7)/8|0},ye=function(e,n,t){(n==null||n<0)&&(n=0),(t==null||t>e.length)&&(t=e.length);var r=new(e.BYTES_PER_ELEMENT==2?N:e.BYTES_PER_ELEMENT==4?Pe:C)(t-n);return r.set(e.subarray(n,t)),r};var Rn=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],d=function(e,n,t){var r=new Error(n||Rn[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,d),!t)throw r;return r},zn=function(e,n,t){var r=e.length;if(!r||t&&t.f&&!t.l)return n||new C(0);var i=!n||t,a=!t||t.i;t||(t={}),n||(n=new C(r*3));var o=function(Fe){var Ke=n.length;if(Fe>Ke){var je=new C(Math.max(Ke*2,Fe));je.set(n),n=je}},c=t.f||0,s=t.p||0,u=t.b||0,h=t.l,v=t.d,S=t.m,G=t.n,q=r*8;do{if(!h){c=w(e,s,1);var V=w(e,s+1,3);if(s+=3,V)if(V==1)h=Tn,v=En,S=9,G=5;else if(V==2){var U=w(e,s,31)+257,W=w(e,s+10,15)+4,$=U+w(e,s+5,31)+1;s+=14;for(var _=new C($),ee=new C(19),I=0;I<W;++I)ee[Cn[I]]=w(e,s+I*3,7);s+=W*3;for(var D=Ae(ee),fe=(1<<D)-1,F=J(ee,D,1),I=0;I<$;){var ne=F[w(e,s,fe)];s+=ne&15;var m=ne>>>4;if(m<16)_[I++]=m;else{var K=0,le=0;for(m==16?(le=3+w(e,s,3),s+=2,K=_[I-1]):m==17?(le=3+w(e,s,7),s+=3):m==18&&(le=11+w(e,s,127),s+=7);le--;)_[I++]=K}}var Le=_.subarray(0,U),O=_.subarray(U);S=Ae(Le),G=Ae(O),h=J(Le,S,1),v=J(O,G,1)}else d(1);else{var m=Dn(s)+4,y=e[m-4]|e[m-3]<<8,k=m+y;if(k>r){a&&d(0);break}i&&o(u+y),n.set(e.subarray(m,k),u),t.b=u+=y,t.p=s=k*8,t.f=c;continue}if(s>q){a&&d(0);break}}i&&o(u+131072);for(var Mn=(1<<S)-1,Ln=(1<<G)-1,we=s;;we=s){var K=h[Ce(e,s)&Mn],j=K>>>4;if(s+=K&15,s>q){a&&d(0);break}if(K||d(2),j<256)n[u++]=j;else if(j==256){we=s,h=null;break}else{var Ze=j-254;if(j>264){var I=j-257,te=Ne[I];Ze=w(e,s,(1<<te)-1)+_e[I],s+=te}var Se=v[Ce(e,s)&Ln],xe=Se>>>4;Se||d(3),s+=Se&15;var O=Sn[xe];if(xe>3){var te=Ve[xe];O+=Ce(e,s)&(1<<te)-1,s+=te}if(s>q){a&&d(0);break}i&&o(u+131072);for(var We=u+Ze;u<We;u+=4)n[u]=n[u-O],n[u+1]=n[u+1-O],n[u+2]=n[u+2-O],n[u+3]=n[u+3-O];u=We}}t.l=h,t.p=we,t.b=u,t.f=c,h&&(c=1,t.m=S,t.d=v,t.n=G)}while(!c);return u==n.length?n:ye(n,0,u)};var ct=new C(0);var ut=function(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t},mn=function(e,n,t){for(var r=e(),i=e.toString(),a=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),o=0;o<r.length;++o){var c=r[o],s=a[o];if(typeof c=="function"){n+=";"+s+"=";var u=c.toString();if(c.prototype)if(u.indexOf("[native code]")!=-1){var h=u.indexOf(" ",8)+1;n+=u.slice(h,u.indexOf("(",h))}else{n+=u;for(var v in c.prototype)n+=";"+s+".prototype."+v+"="+c.prototype[v].toString()}else n+=u}else t[s]=c}return[n,t]},me=[],ft=function(e){var n=[];for(var t in e)e[t].buffer&&n.push((e[t]=new e[t].constructor(e[t])).buffer);return n},lt=function(e,n,t,r){var i;if(!me[t]){for(var a="",o={},c=e.length-1,s=0;s<c;++s)i=mn(e[s],a,o),a=i[0],o=i[1];me[t]=mn(e[c],a,o)}var u=ut({},me[t][1]);return ot(me[t][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+n.toString()+"}",t,u,ft(u),r)},ht=function(){return[C,N,Pe,Ne,Ve,Cn,_e,Sn,Tn,En,de,Rn,J,Ae,w,Ce,Dn,ye,d,zn,Me,Gn,kn]};var Gn=function(e){return postMessage(e,[e.buffer])},kn=function(e){return e&&e.size&&new C(e.size)},gt=function(e,n,t,r,i,a){var o=lt(t,r,i,function(c,s){o.terminate(),a(c,s)});return o.postMessage([e,n],n.consume?[e.buffer]:[]),function(){o.terminate()}};var T=function(e,n){return e[n]|e[n+1]<<8},x=function(e,n){return(e[n]|e[n+1]<<8|e[n+2]<<16|e[n+3]<<24)>>>0},Ue=function(e,n){return x(e,n)+x(e,n+4)*4294967296};function pt(e,n,t){return t||(t=n,n={}),typeof t!="function"&&d(7),gt(e,n,[ht],function(r){return Gn(Me(r.data[0],kn(r.data[1])))},1,t)}function Me(e,n){return zn(e,n)}var Oe=typeof TextDecoder<"u"&&new TextDecoder,vt=0;try{Oe.decode(ct,{stream:!0}),vt=1}catch{}var mt=function(e){for(var n="",t=0;;){var r=e[t++],i=(r>127)+(r>223)+(r>239);if(t+i>e.length)return[n,ye(e,t-1)];i?i==3?(r=((r&15)<<18|(e[t++]&63)<<12|(e[t++]&63)<<6|e[t++]&63)-65536,n+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?n+=String.fromCharCode((r&31)<<6|e[t++]&63):n+=String.fromCharCode((r&15)<<12|(e[t++]&63)<<6|e[t++]&63):n+=String.fromCharCode(r)}};function It(e,n){if(n){for(var t="",r=0;r<e.length;r+=16384)t+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return t}else{if(Oe)return Oe.decode(e);var i=mt(e),a=i[0],o=i[1];return o.length&&d(8),a}}var At=function(e,n){return n+30+T(e,n+26)+T(e,n+28)},Ct=function(e,n,t){var r=T(e,n+28),i=It(e.subarray(n+46,n+46+r),!(T(e,n+8)&2048)),a=n+46+r,o=x(e,n+20),c=t&&o==4294967295?dt(e,a):[o,x(e,n+24),x(e,n+42)],s=c[0],u=c[1],h=c[2];return[T(e,n+10),s,u,i,a+T(e,n+30)+T(e,n+32),h]},dt=function(e,n){for(;T(e,n)!=1;n+=4+T(e,n+2));return[Ue(e,n+12),Ue(e,n+4),Ue(e,n+20)]};var In=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(e){e()};function Un(e,n,t){t||(t=n,n={}),typeof t!="function"&&d(7);var r=[],i=function(){for(var m=0;m<r.length;++m)r[m]()},a={},o=function(m,y){In(function(){t(m,y)})};In(function(){o=t});for(var c=e.length-22;x(e,c)!=101010256;--c)if(!c||e.length-c>65558)return o(d(13,0,1),null),i;var s=T(e,c+8);if(s){var u=s,h=x(e,c+16),v=h==4294967295||u==65535;if(v){var S=x(e,c-12);v=x(e,S)==101075792,v&&(u=s=x(e,S+32),h=x(e,S+48))}for(var G=n&&n.filter,q=function(m){var y=Ct(e,h,v),k=y[0],U=y[1],W=y[2],$=y[3],_=y[4],ee=y[5],I=At(e,ee);h=_;var D=function(F,ne){F?(i(),o(F,null)):(ne&&(a[$]=ne),--s||o(null,a))};if(!G||G({name:$,size:U,originalSize:W,compression:k}))if(!k)D(null,ye(e,I,I+U));else if(k==8){var fe=e.subarray(I,I+U);if(U<32e4)try{D(null,Me(fe,new C(W)))}catch(F){D(F,null)}else r.push(pt(fe,{size:W},D))}else D(d(14,"unknown compression type "+k,1),null);else D(null,null)},V=0;V<u;++V)q(V)}else o(null,{});return i}var Nn=require("fs"),E=require("fs/promises"),Q=require("path");f();function On(e){function n(o,c,s,u){let h=0;return h+=o<<0,h+=c<<8,h+=s<<16,h+=u<<24>>>0,h}if(e[0]===80&&e[1]===75&&e[2]===3&&e[3]===4)return e;if(e[0]!==67||e[1]!==114||e[2]!==50||e[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let t=e[4]===3,r=e[4]===2;if(!r&&!t||e[5]||e[6]||e[7])throw new Error("Unexpected crx format version number.");if(r){let o=n(e[8],e[9],e[10],e[11]),c=n(e[12],e[13],e[14],e[15]),s=16+o+c;return e.subarray(s,e.length)}let a=12+n(e[8],e[9],e[10],e[11]);return e.subarray(a,e.length)}De();var yt=(0,Q.join)(pe,"ExtensionCache");async function wt(e,n){return await(0,E.mkdir)(n,{recursive:!0}),new Promise((t,r)=>{Un(e,(i,a)=>{if(i)return void r(i);Promise.all(Object.keys(a).map(async o=>{if(o.startsWith("_metadata/"))return;if(o.endsWith("/"))return void(0,E.mkdir)((0,Q.join)(n,o),{recursive:!0});let c=o.split("/"),s=c.pop(),u=c.join("/"),h=(0,Q.join)(n,u);u&&await(0,E.mkdir)(h,{recursive:!0}),await(0,E.writeFile)((0,Q.join)(h,s),a[o])})).then(()=>t()).catch(o=>{(0,E.rm)(n,{recursive:!0,force:!0}),r(o)})})})}async function Vn(e){let n=(0,Q.join)(yt,`${e}`);try{await(0,E.access)(n,Nn.constants.F_OK)}catch{let r=e==="fmkadmapgofadopljbjfkapdkoienihi"?"https://raw.githubusercontent.com/Vendicated/random-files/f6f550e4c58ac5f2012095a130406c2ab25b984d/fmkadmapgofadopljbjfkapdkoienihi.zip":`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${e}%26uc&prodversion=32`,i=await H(r,{headers:{"User-Agent":"Vencord (https://github.com/Vendicated/Vencord)"}});await wt(On(i),n).catch(console.error)}Pn.session.defaultSession.loadExtension(n)}Z.app.whenReady().then(()=>{Z.protocol.registerFileProtocol("vencord",({url:r},i)=>{let a=r.slice(10);if(a.endsWith("/")&&(a=a.slice(0,-1)),a.startsWith("/themes/")){let o=a.slice(8),c=ke(L,o);if(!c){i({statusCode:403});return}i(c.replace(/\?v=\d+$/,""));return}switch(a){case"renderer.js.map":case"vencordDesktopRenderer.js.map":case"preload.js.map":case"vencordDesktopPreload.js.map":case"patcher.js.map":case"vencordDesktopMain.js.map":i((0,_n.join)(__dirname,a));break;default:i({statusCode:403})}});try{ge().enableReactDevtools&&Vn("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(r=>console.error("[Vencord] Failed to install React Developer Tools",r))}catch{}let e=r=>{let i={};return r.split(";").forEach(a=>{let[o,...c]=a.trim().split(/\s+/g);o&&!Object.prototype.hasOwnProperty.call(i,o)&&(i[o]=c)}),i},n=r=>Object.entries(r).filter(([,i])=>i?.length).map(i=>i.flat().join(" ")).join("; ");function t(r,i){if(i in r){let a=e(r[i][0]);for(let o of["style-src","connect-src","img-src","font-src","media-src","worker-src"])a[o]=["*","blob:","data:","vencord:","'unsafe-inline'"];a["script-src"]??=[],a["script-src"].push("'unsafe-eval'","https://unpkg.com","https://cdnjs.cloudflare.com"),r[i]=[n(a)]}}Z.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:r,resourceType:i},a)=>{r&&(i==="mainFrame"&&t(r,"content-security-policy"),i==="stylesheet"&&(r["content-type"]=["text/css"])),a({cancel:!1,responseHeaders:r})}),Z.session.defaultSession.webRequest.onHeadersReceived=()=>{}});
//# sourceURL=VencordDesktopMain
//# sourceMappingURL=vencord://vencordDesktopMain.js.map
/*! For license information please see vencordDesktopMain.js.LEGAL.txt */
