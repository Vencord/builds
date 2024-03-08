// Vencord b0d37c9
// Standalone: true
// Platform: Universal
// Updater disabled: false
"use strict";var $n=Object.create;var xe=Object.defineProperty;var et=Object.getOwnPropertyDescriptor;var nt=Object.getOwnPropertyNames;var tt=Object.getPrototypeOf,rt=Object.prototype.hasOwnProperty;var O=(e,n)=>()=>(e&&(n=e(e=0)),n);var Te=(e,n)=>{for(var t in n)xe(e,t,{get:n[t],enumerable:!0})},it=(e,n,t,r)=>{if(n&&typeof n=="object"||typeof n=="function")for(let i of nt(n))!rt.call(e,i)&&i!==t&&xe(e,i,{get:()=>n[i],enumerable:!(r=et(n,i))||r.enumerable});return e};var at=(e,n,t)=>(t=e!=null?$n(tt(e)):{},it(n||!e||!e.__esModule?xe(t,"default",{value:e,enumerable:!0}):t,e));var u=O(()=>{"use strict"});var re,Ee=O(()=>{u();re="b0d37c9"});var j,De=O(()=>{u();j="Vendicated/Vencord"});var Je,Qe=O(()=>{"use strict";u();Ee();De();Je=`Vencord/${re}${j?` (https://github.com/${j})`:""}`});var he=O(()=>{"use strict";u()});function B(e,n={}){return new Promise((t,r)=>{qe.default.get(e,n,i=>{let{statusCode:o,statusMessage:a,headers:s}=i;if(o>=400)return void r(`${o}: ${a} - ${e}`);if(o>=300)return void t(B(s.location,n));let c=[];i.on("error",r),i.on("data",f=>c.push(f)),i.once("end",()=>t(Buffer.concat(c)))})})}var qe,Re=O(()=>{"use strict";u();qe=at(require("https"))});function ie(e){return async function(){try{return{ok:!0,value:await e(...arguments)}}catch(n){return{ok:!1,error:n instanceof Error?{...n}:n}}}}var $e,en=O(()=>{"use strict";u();$e=["vencordDesktopMain.js","vencordDesktopPreload.js","vencordDesktopRenderer.js","vencordDesktopRenderer.css"]});var ut={};async function an(e){return B(ot+e,{headers:{Accept:"application/vnd.github+json","User-Agent":Je}})}async function st(){if(!await on())return[];let n=await an(`/compare/${re}...HEAD`);return JSON.parse(n.toString("utf-8")).commits.map(r=>({hash:r.sha.slice(0,7),author:r.author.login,message:r.commit.message}))}async function on(){let e=await an("/releases/latest"),n=JSON.parse(e.toString());return n.name.slice(n.name.lastIndexOf(" ")+1)===re?!1:(n.assets.forEach(({name:r,browser_download_url:i})=>{$e.some(o=>r.startsWith(o))&&ke.push([r,i])}),!0)}async function ct(){return await Promise.all(ke.map(async([e,n])=>(0,tn.writeFile)((0,rn.join)(__dirname,e),await B(n)))),ke=[],!0}var ae,tn,rn,ot,ke,sn=O(()=>{"use strict";u();Qe();he();ae=require("electron"),tn=require("fs/promises"),rn=require("path");Ee();De();Re();en();ot=`https://api.github.com/repos/${j}`,ke=[];ae.ipcMain.handle("VencordGetRepo",ie(()=>`https://github.com/${j}`));ae.ipcMain.handle("VencordGetUpdates",ie(st));ae.ipcMain.handle("VencordUpdate",ie(on));ae.ipcMain.handle("VencordBuild",ie(ct))});u();var W=require("electron"),Jn=require("path");u();u();Promise.resolve().then(()=>sn());u();he();var Ue=require("electron");u();var un={};u();var cn=require("electron");cn.app.on("browser-window-created",(e,n)=>{n.webContents.on("frame-created",(t,{frame:r})=>{r.once("dom-ready",()=>{if(r.url.startsWith("https://open.spotify.com/embed/")){let i=H().plugins?.FixSpotifyEmbeds;if(!i?.enabled)return;r.executeJavaScript(`
                    const original = Audio.prototype.play;
                    Audio.prototype.play = function() {
                        this.volume = ${i.volume/100||.1};
                        return original.apply(this, arguments);
                    }
                `)}})})});var ln={};u();var fn=require("electron");fn.app.on("browser-window-created",(e,n)=>{n.webContents.on("frame-created",(t,{frame:r})=>{r.once("dom-ready",()=>{if(r.url.startsWith("https://www.youtube.com/")){if(!H().plugins?.FixYoutubeEmbeds?.enabled)return;r.executeJavaScript(`
                new MutationObserver(() => {
                    if(
                        document.querySelector('div.ytp-error-content-wrap-subreason a[href*="www.youtube.com/watch?v="]')
                    ) location.reload()
                }).observe(document.body, { childList: true, subtree:true });
                `)}})})});var Ge={};Te(Ge,{resolveRedirect:()=>lt});u();var hn=require("https"),ft=/^https:\/\/(spotify\.link|s\.team)\/.+$/;function gn(e){return new Promise((n,t)=>{let r=(0,hn.request)(new URL(e),{method:"HEAD"},i=>{n(i.headers.location?gn(i.headers.location):e)});r.on("error",t),r.end()})}async function lt(e,n){return ft.test(n)?gn(n):n}var ze={};Te(ze,{readRecording:()=>ht});u();var pn=require("electron"),vn=require("fs/promises"),oe=require("path");async function ht(e,n){n=(0,oe.normalize)(n);let t=(0,oe.basename)(n),r=(0,oe.normalize)(pn.app.getPath("userData")+"/");if(console.log(t,r,n),t!=="recording.ogg"||!n.startsWith(r))return null;try{let i=await(0,vn.readFile)(n);return new Uint8Array(i.buffer)}catch{return null}}var Pe={};Te(Pe,{sendToOverlay:()=>gt});u();var dn=require("dgram"),mn;function gt(e,n){n.icon=Buffer.from(n.icon).toString("base64");let t=JSON.stringify(n);mn??=(0,dn.createSocket)("udp4"),mn.send(t,42069,"127.0.0.1")}var In={FixSpotifyEmbeds:un,FixYoutubeEmbeds:ln,OpenInApp:Ge,VoiceMessages:ze,XsOverlay:Pe};var An={};for(let[e,n]of Object.entries(In)){let t=Object.entries(n);if(!t.length)continue;let r=An[e]={};for(let[i,o]of t){let a=`VencordPluginNative_${e}_${i}`;Ue.ipcMain.handle(a,o),r[i]=a}}Ue.ipcMain.on("VencordGetPluginIpcMethodMap",e=>{e.returnValue=An});u();he();u();var se=class{constructor(n=1/0){this.maxSize=n}queue=[];promise;next(){let n=this.queue.shift();n?this.promise=Promise.resolve().then(n).finally(()=>this.next()):this.promise=void 0}run(){this.promise||this.next()}push(n){this.size>=this.maxSize&&this.queue.shift(),this.queue.push(n),this.run()}unshift(n){this.size>=this.maxSize&&this.queue.pop(),this.queue.unshift(n),this.run()}get size(){return this.queue.length}};var v=require("electron"),X=require("fs"),R=require("fs/promises"),Y=require("path");u();var Cn="PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KICAgIDxoZWFkPgogICAgICAgIDxtZXRhIGNoYXJzZXQ9InV0Zi04IiAvPgogICAgICAgIDx0aXRsZT5WZW5jb3JkIFF1aWNrQ1NTIEVkaXRvcjwvdGl0bGU+CiAgICAgICAgPGxpbmsKICAgICAgICAgICAgcmVsPSJzdHlsZXNoZWV0IgogICAgICAgICAgICBocmVmPSJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuNDAuMC9taW4vdnMvZWRpdG9yL2VkaXRvci5tYWluLm1pbi5jc3MiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhNTEyLU1Pb1EwMmg4MGhrbGNjZkxyWEZZa0N6RytXVmpPUmZsT3A5WnA4ZGx0aWFSUCszNUxZbk80TEtPa2xSNjRvTUdmR2dKRExPOFdKcGtNMW81Z1pYWVpRPT0iCiAgICAgICAgICAgIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiCiAgICAgICAgICAgIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciIKICAgICAgICAvPgogICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgaHRtbCwKICAgICAgICAgICAgYm9keSwKICAgICAgICAgICAgI2NvbnRhaW5lciB7CiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgICAgICAgICBsZWZ0OiAwOwogICAgICAgICAgICAgICAgdG9wOiAwOwogICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7CiAgICAgICAgICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwOwogICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgICAgICAgICAgfQogICAgICAgIDwvc3R5bGU+CiAgICA8L2hlYWQ+CgogICAgPGJvZHk+CiAgICAgICAgPGRpdiBpZD0iY29udGFpbmVyIj48L2Rpdj4KICAgICAgICA8c2NyaXB0CiAgICAgICAgICAgIHNyYz0iaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbW9uYWNvLWVkaXRvci8wLjQwLjAvbWluL3ZzL2xvYWRlci5taW4uanMiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhNTEyLVF6TXBYZUNQY2lBSFA0d2JZbFYyUFlnclFjYUVrRFFVanprUFU0eG5qeVZTRDlUMzYvdWRhbXh0TkJxYjRxSzQvYk1RTVBaOGF5ckJlOWhyR2RCRmpRPT0iCiAgICAgICAgICAgIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiCiAgICAgICAgICAgIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciIKICAgICAgICA+PC9zY3JpcHQ+CgogICAgICAgIDxzY3JpcHQ+CiAgICAgICAgICAgIHJlcXVpcmUuY29uZmlnKHsKICAgICAgICAgICAgICAgIHBhdGhzOiB7CiAgICAgICAgICAgICAgICAgICAgdnM6ICJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuNDAuMC9taW4vdnMiLAogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgfSk7CgogICAgICAgICAgICByZXF1aXJlKFsidnMvZWRpdG9yL2VkaXRvci5tYWluIl0sICgpID0+IHsKICAgICAgICAgICAgICAgIGdldEN1cnJlbnRDc3MoKS50aGVuKChjc3MpID0+IHsKICAgICAgICAgICAgICAgICAgICB2YXIgZWRpdG9yID0gbW9uYWNvLmVkaXRvci5jcmVhdGUoCiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJjb250YWluZXIiKSwKICAgICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNzcywKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAiY3NzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiBnZXRUaGVtZSgpLAogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICBlZGl0b3Iub25EaWRDaGFuZ2VNb2RlbENvbnRlbnQoKCkgPT4KICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3NzKGVkaXRvci5nZXRWYWx1ZSgpKQogICAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoInJlc2l6ZSIsICgpID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBtb25hY28gcmUtbGF5b3V0CiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRvci5sYXlvdXQoKTsKICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9KTsKICAgICAgICA8L3NjcmlwdD4KICAgIDwvYm9keT4KPC9odG1sPgo=";u();var pt=/[^\S\r\n]*?\r?(?:\r\n|\n)[^\S\r\n]*?\*[^\S\r\n]?/,vt=/^\\@/;function Oe(e,n={}){return{fileName:e,name:n.name??e.replace(/\.css$/i,""),author:n.author??"Unknown Author",description:n.description??"A Discord Theme.",version:n.version,license:n.license,source:n.source,website:n.website,invite:n.invite}}function yn(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function wn(e,n){if(!e)return Oe(n);let t=e.split("/**",2)?.[1]?.split("*/",1)?.[0];if(!t)return Oe(n);let r={},i="",o="";for(let a of t.split(pt))if(a.length!==0)if(a.charAt(0)==="@"&&a.charAt(1)!==" "){r[i]=o.trim();let s=a.indexOf(" ");i=a.substring(1,s),o=a.substring(s+1)}else o+=" "+a.replace("\\n",`
`).replace(vt,"@");return r[i]=o.trim(),delete r[""],Oe(n,r)}u();var Sn=require("electron"),_=require("path"),ge=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,_.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,_.join)(Sn.app.getPath("userData"),"..","Vencord")),ce=(0,_.join)(ge,"settings"),L=(0,_.join)(ge,"themes"),pe=(0,_.join)(ce,"quickCss.css"),Ne=(0,_.join)(ce,"settings.json"),xn=["https:","http:","steam:","spotify:","com.epicgames.launcher:"];u();var Tn=require("electron");function En(e){e.webContents.setWindowOpenHandler(({url:n})=>{switch(n){case"about:blank":case"https://discord.com/popout":case"https://ptb.discord.com/popout":case"https://canary.discord.com/popout":return{action:"allow"}}try{var{protocol:t}=new URL(n)}catch{return{action:"deny"}}switch(t){case"http:":case"https:":case"mailto:":case"steam:":case"spotify:":Tn.shell.openExternal(n)}return{action:"deny"}})}(0,X.mkdirSync)(ce,{recursive:!0});(0,X.mkdirSync)(L,{recursive:!0});function Ve(e,n){let t=(0,Y.normalize)(e),r=(0,Y.join)(e,n),i=(0,Y.normalize)(r);return i.startsWith(t)?i:null}function mt(){return(0,R.readFile)(pe,"utf-8").catch(()=>"")}async function dt(){let e=await(0,R.readdir)(L).catch(()=>[]),n=[];for(let t of e){if(!t.endsWith(".css"))continue;let r=await Dn(t).then(yn).catch(()=>null);r!=null&&n.push(wn(r,t))}return n}function Dn(e){e=e.replace(/\?v=\d+$/,"");let n=Ve(L,e);return n?(0,R.readFile)(n,"utf-8"):Promise.reject(`Unsafe path ${e}`)}function Rn(){try{return(0,X.readFileSync)(Ne,"utf-8")}catch{return"{}"}}function H(){try{return JSON.parse(Rn())}catch{return{}}}v.ipcMain.handle("VencordOpenQuickCss",()=>v.shell.openPath(pe));v.ipcMain.handle("VencordOpenExternal",(e,n)=>{try{var{protocol:t}=new URL(n)}catch{throw"Malformed URL"}if(!xn.includes(t))throw"Disallowed protocol.";v.shell.openExternal(n)});var It=new se,At=new se;v.ipcMain.handle("VencordGetQuickCss",()=>mt());v.ipcMain.handle("VencordSetQuickCss",(e,n)=>It.push(()=>(0,R.writeFile)(pe,n)));v.ipcMain.handle("VencordGetThemesDir",()=>L);v.ipcMain.handle("VencordGetThemesList",()=>dt());v.ipcMain.handle("VencordGetThemeData",(e,n)=>Dn(n));v.ipcMain.handle("VencordGetThemeSystemValues",()=>({"os-accent-color":`#${v.systemPreferences.getAccentColor?.()||""}`}));v.ipcMain.handle("VencordGetSettingsDir",()=>ce);v.ipcMain.on("VencordGetSettings",e=>e.returnValue=Rn());v.ipcMain.handle("VencordSetSettings",(e,n)=>{At.push(()=>(0,R.writeFile)(Ne,n))});v.ipcMain.handle("VencordOpenMonacoEditor",async()=>{let e="Vencord QuickCSS Editor",n=v.BrowserWindow.getAllWindows().find(r=>r.title===e);if(n&&!n.isDestroyed()){n.focus();return}let t=new v.BrowserWindow({title:e,autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,Y.join)(__dirname,"vencordDesktopPreload.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!1}});En(t),await t.loadURL(`data:text/html;base64,${Cn}`)});u();var Hn=require("electron");u();var zn=require("module"),Ct=(0,zn.createRequire)("/"),me,yt=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{me=Ct("worker_threads").Worker}catch{}var wt=me?function(e,n,t,r,i){var o=!1,a=new me(e+yt,{eval:!0}).on("error",function(s){return i(s,null)}).on("message",function(s){return i(null,s)}).on("exit",function(s){s&&!o&&i(new Error("exited with code "+s),null)});return a.postMessage(t,r),a.terminate=function(){return o=!0,me.prototype.terminate.call(a)},a}:function(e,n,t,r,i){setImmediate(function(){return i(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var o=function(){};return{terminate:o,postMessage:o}},A=Uint8Array,N=Uint16Array,Le=Uint32Array,We=new A([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ze=new A([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Pn=new A([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Un=function(e,n){for(var t=new N(31),r=0;r<31;++r)t[r]=n+=1<<e[r-1];for(var i=new Le(t[30]),r=1;r<30;++r)for(var o=t[r];o<t[r+1];++o)i[o]=o-t[r]<<5|r;return[t,i]},On=Un(We,2),Fe=On[0],St=On[1];Fe[28]=258,St[258]=28;var Nn=Un(Ze,0),Vn=Nn[0],Yr=Nn[1],Ae=new N(32768);for(l=0;l<32768;++l)k=(l&43690)>>>1|(l&21845)<<1,k=(k&52428)>>>2|(k&13107)<<2,k=(k&61680)>>>4|(k&3855)<<4,Ae[l]=((k&65280)>>>8|(k&255)<<8)>>>1;var k,l,J=function(e,n,t){for(var r=e.length,i=0,o=new N(n);i<r;++i)e[i]&&++o[e[i]-1];var a=new N(n);for(i=0;i<n;++i)a[i]=a[i-1]+o[i-1]<<1;var s;if(t){s=new N(1<<n);var c=15-n;for(i=0;i<r;++i)if(e[i])for(var f=i<<4|e[i],h=n-e[i],m=a[e[i]-1]++<<h,S=m|(1<<h)-1;m<=S;++m)s[Ae[m]>>>c]=f}else for(s=new N(r),i=0;i<r;++i)e[i]&&(s[i]=Ae[a[e[i]-1]++]>>>15-e[i]);return s},ue=new A(288);for(l=0;l<144;++l)ue[l]=8;var l;for(l=144;l<256;++l)ue[l]=9;var l;for(l=256;l<280;++l)ue[l]=7;var l;for(l=280;l<288;++l)ue[l]=8;var l,Mn=new A(32);for(l=0;l<32;++l)Mn[l]=5;var l;var _n=J(ue,9,1);var Ln=J(Mn,5,1),de=function(e){for(var n=e[0],t=1;t<e.length;++t)e[t]>n&&(n=e[t]);return n},w=function(e,n,t){var r=n/8|0;return(e[r]|e[r+1]<<8)>>(n&7)&t},Ie=function(e,n){var t=n/8|0;return(e[t]|e[t+1]<<8|e[t+2]<<16)>>(n&7)},Wn=function(e){return(e+7)/8|0},Ce=function(e,n,t){(n==null||n<0)&&(n=0),(t==null||t>e.length)&&(t=e.length);var r=new(e.BYTES_PER_ELEMENT==2?N:e.BYTES_PER_ELEMENT==4?Le:A)(t-n);return r.set(e.subarray(n,t)),r};var Zn=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],C=function(e,n,t){var r=new Error(n||Zn[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,C),!t)throw r;return r},Fn=function(e,n,t){var r=e.length;if(!r||t&&t.f&&!t.l)return n||new A(0);var i=!n||t,o=!t||t.i;t||(t={}),n||(n=new A(r*3));var a=function(He){var Ye=n.length;if(He>Ye){var Xe=new A(Math.max(Ye*2,He));Xe.set(n),n=Xe}},s=t.f||0,c=t.p||0,f=t.b||0,h=t.l,m=t.d,S=t.m,G=t.n,q=r*8;do{if(!h){s=w(e,c,1);var V=w(e,c+1,3);if(c+=3,V)if(V==1)h=_n,m=Ln,S=9,G=5;else if(V==2){var P=w(e,c,31)+257,Z=w(e,c+10,15)+4,$=P+w(e,c+5,31)+1;c+=14;for(var M=new A($),ee=new A(19),I=0;I<Z;++I)ee[Pn[I]]=w(e,c+I*3,7);c+=Z*3;for(var D=de(ee),fe=(1<<D)-1,F=J(ee,D,1),I=0;I<$;){var ne=F[w(e,c,fe)];c+=ne&15;var d=ne>>>4;if(d<16)M[I++]=d;else{var b=0,le=0;for(d==16?(le=3+w(e,c,3),c+=2,b=M[I-1]):d==17?(le=3+w(e,c,7),c+=3):d==18&&(le=11+w(e,c,127),c+=7);le--;)M[I++]=b}}var Ke=M.subarray(0,P),U=M.subarray(P);S=de(Ke),G=de(U),h=J(Ke,S,1),m=J(U,G,1)}else C(1);else{var d=Wn(c)+4,y=e[d-4]|e[d-3]<<8,z=d+y;if(z>r){o&&C(0);break}i&&a(f+y),n.set(e.subarray(d,z),f),t.b=f+=y,t.p=c=z*8,t.f=s;continue}if(c>q){o&&C(0);break}}i&&a(f+131072);for(var Qn=(1<<S)-1,qn=(1<<G)-1,ye=c;;ye=c){var b=h[Ie(e,c)&Qn],K=b>>>4;if(c+=b&15,c>q){o&&C(0);break}if(b||C(2),K<256)n[f++]=K;else if(K==256){ye=c,h=null;break}else{var je=K-254;if(K>264){var I=K-257,te=We[I];je=w(e,c,(1<<te)-1)+Fe[I],c+=te}var we=m[Ie(e,c)&qn],Se=we>>>4;we||C(3),c+=we&15;var U=Vn[Se];if(Se>3){var te=Ze[Se];U+=Ie(e,c)&(1<<te)-1,c+=te}if(c>q){o&&C(0);break}i&&a(f+131072);for(var Be=f+je;f<Be;f+=4)n[f]=n[f-U],n[f+1]=n[f+1-U],n[f+2]=n[f+2-U],n[f+3]=n[f+3-U];f=Be}}t.l=h,t.p=ye,t.b=f,t.f=s,h&&(s=1,t.m=S,t.d=m,t.n=G)}while(!s);return f==n.length?n:Ce(n,0,f)};var xt=new A(0);var Tt=function(e,n){var t={};for(var r in e)t[r]=e[r];for(var r in n)t[r]=n[r];return t},kn=function(e,n,t){for(var r=e(),i=e.toString(),o=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),a=0;a<r.length;++a){var s=r[a],c=o[a];if(typeof s=="function"){n+=";"+c+"=";var f=s.toString();if(s.prototype)if(f.indexOf("[native code]")!=-1){var h=f.indexOf(" ",8)+1;n+=f.slice(h,f.indexOf("(",h))}else{n+=f;for(var m in s.prototype)n+=";"+c+".prototype."+m+"="+s.prototype[m].toString()}else n+=f}else t[c]=s}return[n,t]},ve=[],Et=function(e){var n=[];for(var t in e)e[t].buffer&&n.push((e[t]=new e[t].constructor(e[t])).buffer);return n},Dt=function(e,n,t,r){var i;if(!ve[t]){for(var o="",a={},s=e.length-1,c=0;c<s;++c)i=kn(e[c],o,a),o=i[0],a=i[1];ve[t]=kn(e[s],o,a)}var f=Tt({},ve[t][1]);return wt(ve[t][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+n.toString()+"}",t,f,Et(f),r)},Rt=function(){return[A,N,Le,We,Ze,Pn,Fe,Vn,_n,Ln,Ae,Zn,J,de,w,Ie,Wn,Ce,C,Fn,be,bn,Kn]};var bn=function(e){return postMessage(e,[e.buffer])},Kn=function(e){return e&&e.size&&new A(e.size)},kt=function(e,n,t,r,i,o){var a=Dt(t,r,i,function(s,c){a.terminate(),o(s,c)});return a.postMessage([e,n],n.consume?[e.buffer]:[]),function(){a.terminate()}};var T=function(e,n){return e[n]|e[n+1]<<8},x=function(e,n){return(e[n]|e[n+1]<<8|e[n+2]<<16|e[n+3]<<24)>>>0},Me=function(e,n){return x(e,n)+x(e,n+4)*4294967296};function Gt(e,n,t){return t||(t=n,n={}),typeof t!="function"&&C(7),kt(e,n,[Rt],function(r){return bn(be(r.data[0],Kn(r.data[1])))},1,t)}function be(e,n){return Fn(e,n)}var _e=typeof TextDecoder<"u"&&new TextDecoder,zt=0;try{_e.decode(xt,{stream:!0}),zt=1}catch{}var Pt=function(e){for(var n="",t=0;;){var r=e[t++],i=(r>127)+(r>223)+(r>239);if(t+i>e.length)return[n,Ce(e,t-1)];i?i==3?(r=((r&15)<<18|(e[t++]&63)<<12|(e[t++]&63)<<6|e[t++]&63)-65536,n+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?n+=String.fromCharCode((r&31)<<6|e[t++]&63):n+=String.fromCharCode((r&15)<<12|(e[t++]&63)<<6|e[t++]&63):n+=String.fromCharCode(r)}};function Ut(e,n){if(n){for(var t="",r=0;r<e.length;r+=16384)t+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return t}else{if(_e)return _e.decode(e);var i=Pt(e),o=i[0],a=i[1];return a.length&&C(8),o}}var Ot=function(e,n){return n+30+T(e,n+26)+T(e,n+28)},Nt=function(e,n,t){var r=T(e,n+28),i=Ut(e.subarray(n+46,n+46+r),!(T(e,n+8)&2048)),o=n+46+r,a=x(e,n+20),s=t&&a==4294967295?Vt(e,o):[a,x(e,n+24),x(e,n+42)],c=s[0],f=s[1],h=s[2];return[T(e,n+10),c,f,i,o+T(e,n+30)+T(e,n+32),h]},Vt=function(e,n){for(;T(e,n)!=1;n+=4+T(e,n+2));return[Me(e,n+12),Me(e,n+4),Me(e,n+20)]};var Gn=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(e){e()};function jn(e,n,t){t||(t=n,n={}),typeof t!="function"&&C(7);var r=[],i=function(){for(var d=0;d<r.length;++d)r[d]()},o={},a=function(d,y){Gn(function(){t(d,y)})};Gn(function(){a=t});for(var s=e.length-22;x(e,s)!=101010256;--s)if(!s||e.length-s>65558)return a(C(13,0,1),null),i;var c=T(e,s+8);if(c){var f=c,h=x(e,s+16),m=h==4294967295||f==65535;if(m){var S=x(e,s-12);m=x(e,S)==101075792,m&&(f=c=x(e,S+32),h=x(e,S+48))}for(var G=n&&n.filter,q=function(d){var y=Nt(e,h,m),z=y[0],P=y[1],Z=y[2],$=y[3],M=y[4],ee=y[5],I=Ot(e,ee);h=M;var D=function(F,ne){F?(i(),a(F,null)):(ne&&(o[$]=ne),--c||a(null,o))};if(!G||G({name:$,size:P,originalSize:Z,compression:z}))if(!z)D(null,Ce(e,I,I+P));else if(z==8){var fe=e.subarray(I,I+P);if(P<32e4)try{D(null,be(fe,new A(Z)))}catch(F){D(F,null)}else r.push(Gt(fe,{size:Z},D))}else D(C(14,"unknown compression type "+z,1),null);else D(null,null)},V=0;V<f;++V)q(V)}else a(null,{});return i}var Yn=require("fs"),E=require("fs/promises"),Q=require("path");u();function Bn(e){function n(a,s,c,f){let h=0;return h+=a<<0,h+=s<<8,h+=c<<16,h+=f<<24>>>0,h}if(e[0]===80&&e[1]===75&&e[2]===3&&e[3]===4)return e;if(e[0]!==67||e[1]!==114||e[2]!==50||e[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let t=e[4]===3,r=e[4]===2;if(!r&&!t||e[5]||e[6]||e[7])throw new Error("Unexpected crx format version number.");if(r){let a=n(e[8],e[9],e[10],e[11]),s=n(e[12],e[13],e[14],e[15]),c=16+a+s;return e.subarray(c,e.length)}let o=12+n(e[8],e[9],e[10],e[11]);return e.subarray(o,e.length)}Re();var Mt=(0,Q.join)(ge,"ExtensionCache");async function _t(e,n){return await(0,E.mkdir)(n,{recursive:!0}),new Promise((t,r)=>{jn(e,(i,o)=>{if(i)return void r(i);Promise.all(Object.keys(o).map(async a=>{if(a.startsWith("_metadata/"))return;if(a.endsWith("/"))return void(0,E.mkdir)((0,Q.join)(n,a),{recursive:!0});let s=a.split("/"),c=s.pop(),f=s.join("/"),h=(0,Q.join)(n,f);f&&await(0,E.mkdir)(h,{recursive:!0}),await(0,E.writeFile)((0,Q.join)(h,c),o[a])})).then(()=>t()).catch(a=>{(0,E.rm)(n,{recursive:!0,force:!0}),r(a)})})})}async function Xn(e){let n=(0,Q.join)(Mt,`${e}`);try{await(0,E.access)(n,Yn.constants.F_OK)}catch{let r=e==="fmkadmapgofadopljbjfkapdkoienihi"?"https://raw.githubusercontent.com/Vendicated/random-files/f6f550e4c58ac5f2012095a130406c2ab25b984d/fmkadmapgofadopljbjfkapdkoienihi.zip":`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${e}%26uc&prodversion=32`,i=await B(r,{headers:{"User-Agent":"Vencord (https://github.com/Vendicated/Vencord)"}});await _t(Bn(i),n).catch(console.error)}Hn.session.defaultSession.loadExtension(n)}W.app.whenReady().then(()=>{W.protocol.registerFileProtocol("vencord",({url:i},o)=>{let a=i.slice(10);if(a.endsWith("/")&&(a=a.slice(0,-1)),a.startsWith("/themes/")){let s=a.slice(8),c=Ve(L,s);if(!c){o({statusCode:403});return}o(c.replace(/\?v=\d+$/,""));return}switch(a){case"renderer.js.map":case"vencordDesktopRenderer.js.map":case"preload.js.map":case"vencordDesktopPreload.js.map":case"patcher.js.map":case"vencordDesktopMain.js.map":o((0,Jn.join)(__dirname,a));break;default:o({statusCode:403})}});try{H().enableReactDevtools&&Xn("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(i=>console.error("[Vencord] Failed to install React Developer Tools",i))}catch{}let e=(i,o)=>Object.keys(i).find(a=>a.toLowerCase()===o),n=i=>{let o={};return i.split(";").forEach(a=>{let[s,...c]=a.trim().split(/\s+/g);s&&!Object.prototype.hasOwnProperty.call(o,s)&&(o[s]=c)}),o},t=i=>Object.entries(i).filter(([,o])=>o?.length).map(o=>o.flat().join(" ")).join("; "),r=i=>{let o=e(i,"content-security-policy");if(o){let a=n(i[o][0]);for(let s of["style-src","connect-src","img-src","font-src","media-src","worker-src"])a[s]??=[],a[s].push("*","blob:","data:","vencord:","'unsafe-inline'");a["script-src"]??=[],a["script-src"].push("'unsafe-eval'","https://unpkg.com","https://cdnjs.cloudflare.com"),i[o]=[t(a)]}};W.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:i,resourceType:o},a)=>{if(i&&(o==="mainFrame"&&r(i),o==="stylesheet")){let s=e(i,"content-type");s&&(i[s]=["text/css"])}a({cancel:!1,responseHeaders:i})}),W.session.defaultSession.webRequest.onHeadersReceived=()=>{}});
//# sourceURL=VencordDesktopMain
//# sourceMappingURL=vencord://vencordDesktopMain.js.map
/*! For license information please see vencordDesktopMain.js.LEGAL.txt */
