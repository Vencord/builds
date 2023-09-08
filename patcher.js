// Vencord 25a1d93
// Standalone: true
// Platform: Universal
// Updater disabled: false
"use strict";var hr=Object.create;var Ne=Object.defineProperty;var gr=Object.getOwnPropertyDescriptor;var pr=Object.getOwnPropertyNames;var vr=Object.getPrototypeOf,mr=Object.prototype.hasOwnProperty;var v=(e,n)=>()=>(e&&(n=e(e=0)),n);var rn=(e,n,r,t)=>{if(n&&typeof n=="object"||typeof n=="function")for(let i of pr(n))!mr.call(e,i)&&i!==r&&Ne(e,i,{get:()=>n[i],enumerable:!(t=gr(n,i))||t.enumerable});return e};var Ge=(e,n,r)=>(r=e!=null?hr(vr(e)):{},rn(n||!e||!e.__esModule?Ne(r,"default",{value:e,enumerable:!0}):r,e)),tn=e=>rn(Ne({},"__esModule",{value:!0}),e);var u=v(()=>{"use strict"});var ue,Ue=v(()=>{u();ue="25a1d93"});var q,_e=v(()=>{u();q="Vendicated/Vencord"});var an,on=v(()=>{"use strict";u();Ue();_e();an=`Vencord/${ue}${q?` (https://github.com/${q})`:""}`});var Ae=v(()=>{"use strict";u()});function J(e,n={}){return new Promise((r,t)=>{sn.default.get(e,n,i=>{let{statusCode:a,statusMessage:o,headers:c}=i;if(a>=400)return void t(`${a}: ${o} - ${e}`);if(a>=300)return void r(J(c.location,n));let s=[];i.on("error",t),i.on("data",l=>s.push(l)),i.once("end",()=>r(Buffer.concat(s)))})})}var sn,ze=v(()=>{"use strict";u();sn=Ge(require("https"))});function le(e){return async function(){try{return{ok:!0,value:await e(...arguments)}}catch(n){return{ok:!1,error:n instanceof Error?{...n}:n}}}}var cn,un=v(()=>{"use strict";u();cn=["patcher.js","preload.js","renderer.js","renderer.css"]});var Cr={};async function gn(e){return J(dr+e,{headers:{Accept:"application/vnd.github+json","User-Agent":an}})}async function Ir(){if(!await pn())return[];let n=await gn(`/compare/${ue}...HEAD`);return JSON.parse(n.toString("utf-8")).commits.map(t=>({hash:t.sha.slice(0,7),author:t.author.login,message:t.commit.message}))}async function pn(){let e=await gn("/releases/latest"),n=JSON.parse(e.toString());return n.name.slice(n.name.lastIndexOf(" ")+1)===ue?!1:(n.assets.forEach(({name:t,browser_download_url:i})=>{cn.some(a=>t.startsWith(a))&&Ve.push([t,i])}),!0)}async function Ar(){return await Promise.all(Ve.map(async([e,n])=>(0,fn.writeFile)((0,hn.join)(__dirname,e),await J(n)))),Ve=[],!0}var fe,fn,hn,dr,Ve,vn=v(()=>{"use strict";u();on();Ae();fe=require("electron"),fn=require("fs/promises"),hn=require("path");Ue();_e();ze();un();dr=`https://api.github.com/repos/${q}`,Ve=[];fe.ipcMain.handle("VencordGetRepo",le(()=>`https://github.com/${q}`));fe.ipcMain.handle("VencordGetUpdates",le(Ir));fe.ipcMain.handle("VencordUpdate",le(pn));fe.ipcMain.handle("VencordBuild",le(Ar))});var mn=v(()=>{"use strict";u();Promise.resolve().then(()=>vn())});function An(e){return new Promise((n,r)=>{let t=(0,In.request)(new URL(e),{method:"HEAD"},i=>{n(i.headers.location?An(i.headers.location):e)});t.on("error",r),t.end()})}var Q,dn,In,he,yr,Cn=v(()=>{"use strict";u();Ae();Q=require("electron"),dn=require("fs/promises"),In=require("https"),he=require("path");Ce();Q.app.on("browser-window-created",(e,n)=>{n.webContents.on("frame-created",(r,{frame:t})=>{t.once("dom-ready",()=>{if(t.url.startsWith("https://open.spotify.com/embed/")){let i=$().plugins?.FixSpotifyEmbeds;if(!i?.enabled)return;t.executeJavaScript(`
                    const original = Audio.prototype.play;
                    Audio.prototype.play = function() {
                        this.volume = ${i.volume/100||.1};
                        return original.apply(this, arguments);
                    }
                `)}})})});yr=/^https:\/\/(spotify\.link|s\.team)\/.+$/;Q.ipcMain.handle("VencordOIAResolveRedirect",async(e,n)=>yr.test(n)?An(n):n);Q.ipcMain.handle("VencordVMReadRecording",async(e,n)=>{n=(0,he.normalize)(n);let r=(0,he.basename)(n),t=(0,he.normalize)(Q.app.getPath("userData")+"/");if(console.log(r,t,n),r!=="recording.ogg"||!n.startsWith(t))return null;try{let i=await(0,dn.readFile)(n);return new Uint8Array(i.buffer)}catch{return null}})});function Le(e,n=300){let r;return function(...t){clearTimeout(r),r=setTimeout(()=>{e(...t)},n)}}var yn=v(()=>{"use strict";u()});var ge,wn=v(()=>{"use strict";u();ge=class{constructor(n=1/0){this.maxSize=n}queue=[];promise;next(){let n=this.queue.shift();n?this.promise=Promise.resolve().then(n).finally(()=>this.next()):this.promise=void 0}run(){this.promise||this.next()}push(n){this.size>=this.maxSize&&this.queue.shift(),this.queue.push(n),this.run()}unshift(n){this.size>=this.maxSize&&this.queue.pop(),this.queue.unshift(n),this.run()}get size(){return this.queue.length}}});var Sn,Tn=v(()=>{u();Sn="PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KICAgIDxoZWFkPgogICAgICAgIDxtZXRhIGNoYXJzZXQ9InV0Zi04IiAvPgogICAgICAgIDx0aXRsZT5WZW5jb3JkIFF1aWNrQ1NTIEVkaXRvcjwvdGl0bGU+CiAgICAgICAgPGxpbmsKICAgICAgICAgICAgcmVsPSJzdHlsZXNoZWV0IgogICAgICAgICAgICBocmVmPSJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuNDAuMC9taW4vdnMvZWRpdG9yL2VkaXRvci5tYWluLm1pbi5jc3MiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhNTEyLU1Pb1EwMmg4MGhrbGNjZkxyWEZZa0N6RytXVmpPUmZsT3A5WnA4ZGx0aWFSUCszNUxZbk80TEtPa2xSNjRvTUdmR2dKRExPOFdKcGtNMW81Z1pYWVpRPT0iCiAgICAgICAgICAgIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiCiAgICAgICAgICAgIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciIKICAgICAgICAvPgogICAgICAgIDxzdHlsZT4KICAgICAgICAgICAgaHRtbCwKICAgICAgICAgICAgYm9keSwKICAgICAgICAgICAgI2NvbnRhaW5lciB7CiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7CiAgICAgICAgICAgICAgICBsZWZ0OiAwOwogICAgICAgICAgICAgICAgdG9wOiAwOwogICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7CiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7CiAgICAgICAgICAgICAgICBtYXJnaW46IDA7CiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwOwogICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsKICAgICAgICAgICAgfQogICAgICAgIDwvc3R5bGU+CiAgICA8L2hlYWQ+CgogICAgPGJvZHk+CiAgICAgICAgPGRpdiBpZD0iY29udGFpbmVyIj48L2Rpdj4KICAgICAgICA8c2NyaXB0CiAgICAgICAgICAgIHNyYz0iaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbW9uYWNvLWVkaXRvci8wLjQwLjAvbWluL3ZzL2xvYWRlci5taW4uanMiCiAgICAgICAgICAgIGludGVncml0eT0ic2hhNTEyLVF6TXBYZUNQY2lBSFA0d2JZbFYyUFlnclFjYUVrRFFVanprUFU0eG5qeVZTRDlUMzYvdWRhbXh0TkJxYjRxSzQvYk1RTVBaOGF5ckJlOWhyR2RCRmpRPT0iCiAgICAgICAgICAgIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiCiAgICAgICAgICAgIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciIKICAgICAgICA+PC9zY3JpcHQ+CgogICAgICAgIDxzY3JpcHQ+CiAgICAgICAgICAgIHJlcXVpcmUuY29uZmlnKHsKICAgICAgICAgICAgICAgIHBhdGhzOiB7CiAgICAgICAgICAgICAgICAgICAgdnM6ICJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9tb25hY28tZWRpdG9yLzAuNDAuMC9taW4vdnMiLAogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgfSk7CgogICAgICAgICAgICByZXF1aXJlKFsidnMvZWRpdG9yL2VkaXRvci5tYWluIl0sICgpID0+IHsKICAgICAgICAgICAgICAgIGdldEN1cnJlbnRDc3MoKS50aGVuKChjc3MpID0+IHsKICAgICAgICAgICAgICAgICAgICB2YXIgZWRpdG9yID0gbW9uYWNvLmVkaXRvci5jcmVhdGUoCiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJjb250YWluZXIiKSwKICAgICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGNzcywKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlOiAiY3NzIiwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoZW1lOiBnZXRUaGVtZSgpLAogICAgICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICAgICAgKTsKICAgICAgICAgICAgICAgICAgICBlZGl0b3Iub25EaWRDaGFuZ2VNb2RlbENvbnRlbnQoKCkgPT4KICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3NzKGVkaXRvci5nZXRWYWx1ZSgpKQogICAgICAgICAgICAgICAgICAgICk7CiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoInJlc2l6ZSIsICgpID0+IHsKICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFrZSBtb25hY28gcmUtbGF5b3V0CiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRvci5sYXlvdXQoKTsKICAgICAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgICAgIH0pOwogICAgICAgICAgICB9KTsKICAgICAgICA8L3NjcmlwdD4KICAgIDwvYm9keT4KPC9odG1sPgo="});function We(e,n={}){return{fileName:e,name:n.name??e.replace(/\.css$/i,""),author:n.author??"Unknown Author",description:n.description??"A Discord Theme.",version:n.version,license:n.license,source:n.source,website:n.website,invite:n.invite}}function xn(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function En(e,n){if(!e)return We(n);let r=e.split("/**",2)?.[1]?.split("*/",1)?.[0];if(!r)return We(n);let t={},i="",a="";for(let o of r.split(wr))if(o.length!==0)if(o.charAt(0)==="@"&&o.charAt(1)!==" "){t[i]=a.trim();let c=o.indexOf(" ");i=o.substring(1,c),a=o.substring(c+1)}else a+=" "+o.replace("\\n",`
`).replace(Sr,"@");return t[i]=a.trim(),delete t[""],We(n,t)}var wr,Sr,Dn=v(()=>{"use strict";u();wr=/[^\S\r\n]*?\r?(?:\r\n|\n)[^\S\r\n]*?\*[^\S\r\n]?/,Sr=/^\\@/});var Rn,b,ye,pe,L,ee,Me,On,we,ve=v(()=>{"use strict";u();Rn=require("electron"),b=require("path"),ye=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,b.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,b.join)(Rn.app.getPath("userData"),"..","Vencord")),pe=(0,b.join)(ye,"settings"),L=(0,b.join)(ye,"themes"),ee=(0,b.join)(pe,"quickCss.css"),Me=(0,b.join)(pe,"settings.json"),On=["https:","http:","steam:","spotify:","com.epicgames.launcher:"],we=process.argv.includes("--vanilla")});function kn(e){e.webContents.setWindowOpenHandler(({url:n})=>{switch(n){case"about:blank":case"https://discord.com/popout":case"https://ptb.discord.com/popout":case"https://canary.discord.com/popout":return{action:"allow"}}try{var{protocol:r}=new URL(n)}catch{return{action:"deny"}}switch(r){case"http:":case"https:":case"mailto:":case"steam:":case"spotify:":Pn.shell.openExternal(n)}return{action:"deny"}})}var Pn,Nn=v(()=>{"use strict";u();Pn=require("electron")});function Fe(e,n){let r=(0,ne.normalize)(e),t=(0,ne.join)(e,n),i=(0,ne.normalize)(t);return i.startsWith(r)?i:null}function Gn(){return(0,O.readFile)(ee,"utf-8").catch(()=>"")}async function Tr(){let e=await(0,O.readdir)(L).catch(()=>[]),n=[];for(let r of e){if(!r.endsWith(".css"))continue;let t=await Un(r).then(xn).catch(()=>null);t!=null&&n.push(En(t,r))}return n}function Un(e){e=e.replace(/\?v=\d+$/,"");let n=Fe(L,e);return n?(0,O.readFile)(n,"utf-8"):Promise.reject(`Unsafe path ${e}`)}function _n(){try{return(0,W.readFileSync)(Me,"utf-8")}catch{return"{}"}}function $(){try{return JSON.parse(_n())}catch{return{}}}function zn(e){(0,O.open)(ee,"a+").then(n=>{n.close(),(0,W.watch)(ee,{persistent:!1},Le(async()=>{e.webContents.postMessage("VencordQuickCssUpdate",await Gn())},50))}),(0,W.watch)(L,{persistent:!1},Le(()=>{e.webContents.postMessage("VencordThemeUpdate",void 0)}))}var A,W,O,ne,xr,Er,Ce=v(()=>{"use strict";u();mn();Cn();yn();Ae();wn();A=require("electron"),W=require("fs"),O=require("fs/promises"),ne=require("path");Tn();Dn();ve();Nn();(0,W.mkdirSync)(pe,{recursive:!0});(0,W.mkdirSync)(L,{recursive:!0});A.ipcMain.handle("VencordOpenQuickCss",()=>A.shell.openPath(ee));A.ipcMain.handle("VencordOpenExternal",(e,n)=>{try{var{protocol:r}=new URL(n)}catch{throw"Malformed URL"}if(!On.includes(r))throw"Disallowed protocol.";A.shell.openExternal(n)});xr=new ge,Er=new ge;A.ipcMain.handle("VencordGetQuickCss",()=>Gn());A.ipcMain.handle("VencordSetQuickCss",(e,n)=>xr.push(()=>(0,O.writeFile)(ee,n)));A.ipcMain.handle("VencordGetThemesDir",()=>L);A.ipcMain.handle("VencordGetThemesList",()=>Tr());A.ipcMain.handle("VencordGetThemeData",(e,n)=>Un(n));A.ipcMain.handle("VencordGetSettingsDir",()=>pe);A.ipcMain.on("VencordGetSettings",e=>e.returnValue=_n());A.ipcMain.handle("VencordSetSettings",(e,n)=>{Er.push(()=>(0,O.writeFile)(Me,n))});A.ipcMain.handle("VencordOpenMonacoEditor",async()=>{let e=new A.BrowserWindow({title:"Vencord QuickCSS Editor",autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,ne.join)(__dirname,"preload.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!1}});kn(e),await e.loadURL(`data:text/html;base64,${Sn}`)})});function ir(e,n,r){let t=n;if(n in e)return void r(e[t]);Object.defineProperty(e,n,{set(i){delete e[t],e[t]=i,r(i)},configurable:!0,enumerable:!1})}var ar=v(()=>{"use strict";u()});var Yr={};function Kr(e,n){let r=e.slice(4).split(".").map(Number),t=n.slice(4).split(".").map(Number);for(let i=0;i<t.length;i++){if(r[i]>t[i])return!0;if(r[i]<t[i])return!1}return!1}function Hr(){try{let e=(0,x.dirname)(process.execPath),n=(0,x.basename)(e),r=(0,x.join)(e,".."),t=(0,w.readdirSync)(r).reduce((c,s)=>s.startsWith("app-")&&Kr(s,c)?s:c,n);if(t===n)return;let i=(0,x.join)(r,t,"resources"),a=(0,x.join)(i,"app.asar"),o=(0,x.join)(i,"_app.asar");if(!(0,w.existsSync)(a)||(0,w.statSync)(a).isDirectory())return;console.info("[Vencord] Detected Host Update. Repatching..."),(0,w.renameSync)(a,o),(0,w.mkdirSync)(a),(0,w.writeFileSync)((0,x.join)(a,"package.json"),JSON.stringify({name:"discord",main:"index.js"})),(0,w.writeFileSync)((0,x.join)(a,"index.js"),`require(${JSON.stringify((0,x.join)(__dirname,"patcher.js"))});`)}catch(e){console.error("[Vencord] Failed to repatch latest host update",e)}}var or,w,x,sr=v(()=>{"use strict";u();or=require("electron"),w=require("fs"),x=require("path");or.app.on("before-quit",Hr)});var Qr={};var R,F,Xr,qr,Xe,Jr,cr=v(()=>{"use strict";u();ar();R=Ge(require("electron")),F=require("path");Ce();ve();console.log("[Vencord] Starting up...");Xr=require.main.filename,qr=require.main.path.endsWith("app.asar")?"_app.asar":"app.asar",Xe=(0,F.join)((0,F.dirname)(Xr),"..",qr),Jr=require((0,F.join)(Xe,"package.json"));require.main.filename=(0,F.join)(Xe,Jr.main);R.app.setAppPath(Xe);if(we)console.log("[Vencord] Running in vanilla mode. Not loading Vencord");else{let e=$();if(process.platform==="win32"&&(sr(),e.winCtrlQ)){let t=R.Menu.buildFromTemplate;R.Menu.buildFromTemplate=function(i){if(i[0]?.label==="&File"){let{submenu:a}=i[0];Array.isArray(a)&&a.push({label:"Quit (Hidden)",visible:!1,acceleratorWorksWhenHidden:!0,accelerator:"Control+Q",click:()=>R.app.quit()})}return t.call(this,i)}}class n extends R.default.BrowserWindow{constructor(i){if(i?.webPreferences?.preload&&i.title){let a=i.webPreferences.preload;i.webPreferences.preload=(0,F.join)(__dirname,"preload.js"),i.webPreferences.sandbox=!1,e.frameless?i.frame=!1:process.platform==="win32"&&e.winNativeTitleBar&&delete i.frame,e.transparentUNSAFE_USE_AT_OWN_RISK&&(i.transparent=!0,i.backgroundColor="#00000000"),e.macosTranslucency&&process.platform==="darwin"&&(i.backgroundColor="#00000000",i.vibrancy="sidebar"),process.env.DISCORD_PRELOAD=a,super(i),zn(this)}else super(i)}}Object.assign(n,R.default.BrowserWindow),Object.defineProperty(n,"name",{value:"BrowserWindow",configurable:!0});let r=require.resolve("electron");delete require.cache[r].exports,require.cache[r].exports={...R.default,BrowserWindow:n},ir(global,"appSettings",t=>{t.set("DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING",!0),e.disableMinSize?(t.set("MIN_WIDTH",0),t.set("MIN_HEIGHT",0)):(t.set("MIN_WIDTH",940),t.set("MIN_HEIGHT",500))}),process.env.DATA_DIR=(0,F.join)(R.app.getPath("userData"),"..","Vencord")}console.log("[Vencord] Loading original Discord app.asar");require(require.main.filename)});u();var B=require("electron"),ur=require("path");Ce();ve();u();var nr=require("electron");u();var Wn=require("module"),Dr=(0,Wn.createRequire)("/"),Te,Rr=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{Te=Dr("worker_threads").Worker}catch{}var Or=Te?function(e,n,r,t,i){var a=!1,o=new Te(e+Rr,{eval:!0}).on("error",function(c){return i(c,null)}).on("message",function(c){return i(null,c)}).on("exit",function(c){c&&!a&&i(new Error("exited with code "+c),null)});return o.postMessage(r,t),o.terminate=function(){return a=!0,Te.prototype.terminate.call(o)},o}:function(e,n,r,t,i){setImmediate(function(){return i(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var a=function(){};return{terminate:a,postMessage:a}},C=Uint8Array,M=Uint16Array,be=Uint32Array,Be=new C([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ke=new C([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Mn=new C([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Fn=function(e,n){for(var r=new M(31),t=0;t<31;++t)r[t]=n+=1<<e[t-1];for(var i=new be(r[30]),t=1;t<30;++t)for(var a=r[t];a<r[t+1];++a)i[a]=a-r[t]<<5|t;return[r,i]},Zn=Fn(Be,2),He=Zn[0],Pr=Zn[1];He[28]=258,Pr[258]=28;var jn=Fn(Ke,0),bn=jn[0],qt=jn[1],De=new M(32768);for(f=0;f<32768;++f)G=(f&43690)>>>1|(f&21845)<<1,G=(G&52428)>>>2|(G&13107)<<2,G=(G&61680)>>>4|(G&3855)<<4,De[f]=((G&65280)>>>8|(G&255)<<8)>>>1;var G,f,re=function(e,n,r){for(var t=e.length,i=0,a=new M(n);i<t;++i)e[i]&&++a[e[i]-1];var o=new M(n);for(i=0;i<n;++i)o[i]=o[i-1]+a[i-1]<<1;var c;if(r){c=new M(1<<n);var s=15-n;for(i=0;i<t;++i)if(e[i])for(var l=i<<4|e[i],h=n-e[i],m=o[e[i]-1]++<<h,E=m|(1<<h)-1;m<=E;++m)c[De[m]>>>s]=l}else for(c=new M(t),i=0;i<t;++i)e[i]&&(c[i]=De[o[e[i]-1]++]>>>15-e[i]);return c},me=new C(288);for(f=0;f<144;++f)me[f]=8;var f;for(f=144;f<256;++f)me[f]=9;var f;for(f=256;f<280;++f)me[f]=7;var f;for(f=280;f<288;++f)me[f]=8;var f,Bn=new C(32);for(f=0;f<32;++f)Bn[f]=5;var f;var Kn=re(me,9,1);var Hn=re(Bn,5,1),xe=function(e){for(var n=e[0],r=1;r<e.length;++r)e[r]>n&&(n=e[r]);return n},T=function(e,n,r){var t=n/8|0;return(e[t]|e[t+1]<<8)>>(n&7)&r},Ee=function(e,n){var r=n/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(n&7)},Yn=function(e){return(e+7)/8|0},Re=function(e,n,r){(n==null||n<0)&&(n=0),(r==null||r>e.length)&&(r=e.length);var t=new(e.BYTES_PER_ELEMENT==2?M:e.BYTES_PER_ELEMENT==4?be:C)(r-n);return t.set(e.subarray(n,r)),t};var Xn=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],y=function(e,n,r){var t=new Error(n||Xn[e]);if(t.code=e,Error.captureStackTrace&&Error.captureStackTrace(t,y),!r)throw t;return t},qn=function(e,n,r){var t=e.length;if(!t||r&&r.f&&!r.l)return n||new C(0);var i=!n||r,a=!r||r.i;r||(r={}),n||(n=new C(t*3));var o=function($e){var en=n.length;if($e>en){var nn=new C(Math.max(en*2,$e));nn.set(n),n=nn}},c=r.f||0,s=r.p||0,l=r.b||0,h=r.l,m=r.d,E=r.m,U=r.n,ie=t*8;do{if(!h){c=T(e,s,1);var Z=T(e,s+1,3);if(s+=3,Z)if(Z==1)h=Kn,m=Hn,E=9,U=5;else if(Z==2){var z=T(e,s,31)+257,K=T(e,s+10,15)+4,ae=z+T(e,s+5,31)+1;s+=14;for(var j=new C(ae),oe=new C(19),I=0;I<K;++I)oe[Mn[I]]=T(e,s+I*3,7);s+=K*3;for(var N=xe(oe),de=(1<<N)-1,H=re(oe,N,1),I=0;I<ae;){var se=H[T(e,s,de)];s+=se&15;var d=se>>>4;if(d<16)j[I++]=d;else{var Y=0,Ie=0;for(d==16?(Ie=3+T(e,s,3),s+=2,Y=j[I-1]):d==17?(Ie=3+T(e,s,7),s+=3):d==18&&(Ie=11+T(e,s,127),s+=7);Ie--;)j[I++]=Y}}var qe=j.subarray(0,z),V=j.subarray(z);E=xe(qe),U=xe(V),h=re(qe,E,1),m=re(V,U,1)}else y(1);else{var d=Yn(s)+4,S=e[d-4]|e[d-3]<<8,_=d+S;if(_>t){a&&y(0);break}i&&o(l+S),n.set(e.subarray(d,_),l),r.b=l+=S,r.p=s=_*8,r.f=c;continue}if(s>ie){a&&y(0);break}}i&&o(l+131072);for(var lr=(1<<E)-1,fr=(1<<U)-1,Oe=s;;Oe=s){var Y=h[Ee(e,s)&lr],X=Y>>>4;if(s+=Y&15,s>ie){a&&y(0);break}if(Y||y(2),X<256)n[l++]=X;else if(X==256){Oe=s,h=null;break}else{var Je=X-254;if(X>264){var I=X-257,ce=Be[I];Je=T(e,s,(1<<ce)-1)+He[I],s+=ce}var Pe=m[Ee(e,s)&fr],ke=Pe>>>4;Pe||y(3),s+=Pe&15;var V=bn[ke];if(ke>3){var ce=Ke[ke];V+=Ee(e,s)&(1<<ce)-1,s+=ce}if(s>ie){a&&y(0);break}i&&o(l+131072);for(var Qe=l+Je;l<Qe;l+=4)n[l]=n[l-V],n[l+1]=n[l+1-V],n[l+2]=n[l+2-V],n[l+3]=n[l+3-V];l=Qe}}r.l=h,r.p=Oe,r.b=l,r.f=c,h&&(c=1,r.m=E,r.d=m,r.n=U)}while(!c);return l==n.length?n:Re(n,0,l)};var kr=new C(0);var Nr=function(e,n){var r={};for(var t in e)r[t]=e[t];for(var t in n)r[t]=n[t];return r},Vn=function(e,n,r){for(var t=e(),i=e.toString(),a=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),o=0;o<t.length;++o){var c=t[o],s=a[o];if(typeof c=="function"){n+=";"+s+"=";var l=c.toString();if(c.prototype)if(l.indexOf("[native code]")!=-1){var h=l.indexOf(" ",8)+1;n+=l.slice(h,l.indexOf("(",h))}else{n+=l;for(var m in c.prototype)n+=";"+s+".prototype."+m+"="+c.prototype[m].toString()}else n+=l}else r[s]=c}return[n,r]},Se=[],Gr=function(e){var n=[];for(var r in e)e[r].buffer&&n.push((e[r]=new e[r].constructor(e[r])).buffer);return n},Ur=function(e,n,r,t){var i;if(!Se[r]){for(var a="",o={},c=e.length-1,s=0;s<c;++s)i=Vn(e[s],a,o),a=i[0],o=i[1];Se[r]=Vn(e[c],a,o)}var l=Nr({},Se[r][1]);return Or(Se[r][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+n.toString()+"}",r,l,Gr(l),t)},_r=function(){return[C,M,be,Be,Ke,Mn,He,bn,Kn,Hn,De,Xn,re,xe,T,Ee,Yn,Re,y,qn,Ye,Jn,Qn]};var Jn=function(e){return postMessage(e,[e.buffer])},Qn=function(e){return e&&e.size&&new C(e.size)},zr=function(e,n,r,t,i,a){var o=Ur(r,t,i,function(c,s){o.terminate(),a(c,s)});return o.postMessage([e,n],n.consume?[e.buffer]:[]),function(){o.terminate()}};var P=function(e,n){return e[n]|e[n+1]<<8},D=function(e,n){return(e[n]|e[n+1]<<8|e[n+2]<<16|e[n+3]<<24)>>>0},Ze=function(e,n){return D(e,n)+D(e,n+4)*4294967296};function Vr(e,n,r){return r||(r=n,n={}),typeof r!="function"&&y(7),zr(e,n,[_r],function(t){return Jn(Ye(t.data[0],Qn(t.data[1])))},1,r)}function Ye(e,n){return qn(e,n)}var je=typeof TextDecoder<"u"&&new TextDecoder,Lr=0;try{je.decode(kr,{stream:!0}),Lr=1}catch{}var Wr=function(e){for(var n="",r=0;;){var t=e[r++],i=(t>127)+(t>223)+(t>239);if(r+i>e.length)return[n,Re(e,r-1)];i?i==3?(t=((t&15)<<18|(e[r++]&63)<<12|(e[r++]&63)<<6|e[r++]&63)-65536,n+=String.fromCharCode(55296|t>>10,56320|t&1023)):i&1?n+=String.fromCharCode((t&31)<<6|e[r++]&63):n+=String.fromCharCode((t&15)<<12|(e[r++]&63)<<6|e[r++]&63):n+=String.fromCharCode(t)}};function Mr(e,n){if(n){for(var r="",t=0;t<e.length;t+=16384)r+=String.fromCharCode.apply(null,e.subarray(t,t+16384));return r}else{if(je)return je.decode(e);var i=Wr(e),a=i[0],o=i[1];return o.length&&y(8),a}}var Fr=function(e,n){return n+30+P(e,n+26)+P(e,n+28)},Zr=function(e,n,r){var t=P(e,n+28),i=Mr(e.subarray(n+46,n+46+t),!(P(e,n+8)&2048)),a=n+46+t,o=D(e,n+20),c=r&&o==4294967295?jr(e,a):[o,D(e,n+24),D(e,n+42)],s=c[0],l=c[1],h=c[2];return[P(e,n+10),s,l,i,a+P(e,n+30)+P(e,n+32),h]},jr=function(e,n){for(;P(e,n)!=1;n+=4+P(e,n+2));return[Ze(e,n+12),Ze(e,n+4),Ze(e,n+20)]};var Ln=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(e){e()};function $n(e,n,r){r||(r=n,n={}),typeof r!="function"&&y(7);var t=[],i=function(){for(var d=0;d<t.length;++d)t[d]()},a={},o=function(d,S){Ln(function(){r(d,S)})};Ln(function(){o=r});for(var c=e.length-22;D(e,c)!=101010256;--c)if(!c||e.length-c>65558)return o(y(13,0,1),null),i;var s=P(e,c+8);if(s){var l=s,h=D(e,c+16),m=h==4294967295||l==65535;if(m){var E=D(e,c-12);m=D(e,E)==101075792,m&&(l=s=D(e,E+32),h=D(e,E+48))}for(var U=n&&n.filter,ie=function(d){var S=Zr(e,h,m),_=S[0],z=S[1],K=S[2],ae=S[3],j=S[4],oe=S[5],I=Fr(e,oe);h=j;var N=function(H,se){H?(i(),o(H,null)):(se&&(a[ae]=se),--s||o(null,a))};if(!U||U({name:ae,size:z,originalSize:K,compression:_}))if(!_)N(null,Re(e,I,I+z));else if(_==8){var de=e.subarray(I,I+z);if(z<32e4)try{N(null,Ye(de,new C(K)))}catch(H){N(H,null)}else t.push(Vr(de,{size:K},N))}else N(y(14,"unknown compression type "+_,1),null);else N(null,null)},Z=0;Z<l;++Z)ie(Z)}else o(null,{});return i}var rr=require("fs"),k=require("fs/promises"),te=require("path");ve();u();function er(e){function n(o,c,s,l){let h=0;return h+=o<<0,h+=c<<8,h+=s<<16,h+=l<<24>>>0,h}if(e[0]===80&&e[1]===75&&e[2]===3&&e[3]===4)return e;if(e[0]!==67||e[1]!==114||e[2]!==50||e[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let r=e[4]===3,t=e[4]===2;if(!t&&!r||e[5]||e[6]||e[7])throw new Error("Unexpected crx format version number.");if(t){let o=n(e[8],e[9],e[10],e[11]),c=n(e[12],e[13],e[14],e[15]),s=16+o+c;return e.subarray(s,e.length)}let a=12+n(e[8],e[9],e[10],e[11]);return e.subarray(a,e.length)}ze();var br=(0,te.join)(ye,"ExtensionCache");async function Br(e,n){return await(0,k.mkdir)(n,{recursive:!0}),new Promise((r,t)=>{$n(e,(i,a)=>{if(i)return void t(i);Promise.all(Object.keys(a).map(async o=>{if(o.startsWith("_metadata/"))return;if(o.endsWith("/"))return void(0,k.mkdir)((0,te.join)(n,o),{recursive:!0});let c=o.split("/"),s=c.pop(),l=c.join("/"),h=(0,te.join)(n,l);l&&await(0,k.mkdir)(h,{recursive:!0}),await(0,k.writeFile)((0,te.join)(h,s),a[o])})).then(()=>r()).catch(o=>{(0,k.rm)(n,{recursive:!0,force:!0}),t(o)})})})}async function tr(e){let n=(0,te.join)(br,`${e}`);try{await(0,k.access)(n,rr.constants.F_OK)}catch{let t=e==="fmkadmapgofadopljbjfkapdkoienihi"?"https://raw.githubusercontent.com/Vendicated/random-files/f6f550e4c58ac5f2012095a130406c2ab25b984d/fmkadmapgofadopljbjfkapdkoienihi.zip":`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${e}%26uc&prodversion=32`,i=await J(t,{headers:{"User-Agent":"Vencord (https://github.com/Vendicated/Vencord)"}});await Br(er(i),n).catch(console.error)}nr.session.defaultSession.loadExtension(n)}we||B.app.whenReady().then(()=>{B.protocol.registerFileProtocol("vencord",({url:t},i)=>{let a=t.slice(10);if(a.endsWith("/")&&(a=a.slice(0,-1)),a.startsWith("/themes/")){let o=a.slice(8),c=Fe(L,o);if(!c){i({statusCode:403});return}i(c.replace(/\?v=\d+$/,""));return}switch(a){case"renderer.js.map":case"vencordDesktopRenderer.js.map":case"preload.js.map":case"vencordDesktopPreload.js.map":case"patcher.js.map":case"vencordDesktopMain.js.map":i((0,ur.join)(__dirname,a));break;default:i({statusCode:403})}});try{$().enableReactDevtools&&tr("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(t=>console.error("[Vencord] Failed to install React Developer Tools",t))}catch{}let e=t=>{let i={};return t.split(";").forEach(a=>{let[o,...c]=a.trim().split(/\s+/g);o&&!Object.prototype.hasOwnProperty.call(i,o)&&(i[o]=c)}),i},n=t=>Object.entries(t).filter(([,i])=>i?.length).map(i=>i.flat().join(" ")).join("; ");function r(t,i){if(i in t){let a=e(t[i][0]);for(let o of["style-src","connect-src","img-src","font-src","media-src","worker-src"])a[o]=["*","blob:","data:","vencord:","'unsafe-inline'"];a["script-src"]??=[],a["script-src"].push("'unsafe-eval'","https://unpkg.com","https://cdnjs.cloudflare.com"),t[i]=[n(a)]}}B.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:t,resourceType:i},a)=>{t&&(i==="mainFrame"&&r(t,"content-security-policy"),i==="stylesheet"&&(t["content-type"]=["text/css"])),a({cancel:!1,responseHeaders:t})}),B.session.defaultSession.webRequest.onHeadersReceived=()=>{}});cr();
//# sourceURL=VencordPatcher
//# sourceMappingURL=vencord://patcher.js.map
/*! For license information please see patcher.js.LEGAL.txt */
