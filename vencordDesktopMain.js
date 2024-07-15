// Vencord 5bd10c8
// Standalone: true
// Platform: Universal
// Updater Disabled: false
"use strict";var gr=Object.create;var me=Object.defineProperty;var yr=Object.getOwnPropertyDescriptor;var wr=Object.getOwnPropertyNames;var Sr=Object.getPrototypeOf,xr=Object.prototype.hasOwnProperty;var b=(e,t)=>()=>(e&&(t=e(e=0)),t);var ie=(e,t)=>{for(var r in t)me(e,r,{get:t[r],enumerable:!0})},it=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of wr(t))!xr.call(e,o)&&o!==r&&me(e,o,{get:()=>t[o],enumerable:!(n=yr(t,o))||n.enumerable});return e};var Tr=(e,t,r)=>(r=e!=null?gr(Sr(e)):{},it(t||!e||!e.__esModule?me(r,"default",{value:e,enumerable:!0}):r,e)),Er=e=>it(me({},"__esModule",{value:!0}),e);var l=b(()=>{"use strict"});var ae=b(()=>{"use strict";l()});var se,Oe=b(()=>{l();se="5bd10c8"});var Y,ke=b(()=>{l();Y="Vendicated/Vencord"});var at,st=b(()=>{"use strict";l();Oe();ke();at=`Vencord/${se}${Y?` (https://github.com/${Y})`:""}`});function J(e,t={}){return new Promise((r,n)=>{ct.default.get(e,t,o=>{let{statusCode:a,statusMessage:i,headers:s}=o;if(a>=400)return void n(`${a}: ${i} - ${e}`);if(a>=300)return void r(J(s.location,t));let c=[];o.on("error",n),o.on("data",u=>c.push(u)),o.once("end",()=>r(Buffer.concat(c)))})})}var ct,_e=b(()=>{"use strict";l();ct=Tr(require("https"))});function ce(e){return async function(){try{return{ok:!0,value:await e(...arguments)}}catch(t){return{ok:!1,error:t instanceof Error?{...t}:t}}}}var lt,ut=b(()=>{"use strict";l();lt=["vencordDesktopMain.js","vencordDesktopPreload.js","vencordDesktopRenderer.js","vencordDesktopRenderer.css"]});var Ir={};async function ht(e){return J(Dr+e,{headers:{Accept:"application/vnd.github+json","User-Agent":at}})}async function Rr(){if(!await dt())return[];let t=await ht(`/compare/${se}...HEAD`);return JSON.parse(t.toString("utf-8")).commits.map(n=>({hash:n.sha.slice(0,7),author:n.author.login,message:n.commit.message.split(`
`)[0]}))}async function dt(){let e=await ht("/releases/latest"),t=JSON.parse(e.toString());return t.name.slice(t.name.lastIndexOf(" ")+1)===se?!1:(t.assets.forEach(({name:n,browser_download_url:o})=>{lt.some(a=>n.startsWith(a))&&Ce.push([n,o])}),!0)}async function Ar(){return await Promise.all(Ce.map(async([e,t])=>(0,ft.writeFile)((0,pt.join)(__dirname,e),await J(t)))),Ce=[],!0}var le,ft,pt,Dr,Ce,vt=b(()=>{"use strict";l();ae();st();le=require("electron"),ft=require("fs/promises"),pt=require("path");Oe();ke();_e();ut();Dr=`https://api.github.com/repos/${Y}`,Ce=[];le.ipcMain.handle("VencordGetRepo",ce(()=>`https://github.com/${Y}`));le.ipcMain.handle("VencordGetUpdates",ce(Rr));le.ipcMain.handle("VencordUpdate",ce(dt));le.ipcMain.handle("VencordBuild",ce(Ar))});l();var F=require("electron"),dr=require("path");l();l();vt();l();ae();var We=require("electron");l();var be={};ie(be,{fetchTrackData:()=>Or});l();var yt=require("child_process"),wt=require("util"),St=(0,wt.promisify)(yt.execFile);async function Ge(e){let{stdout:t}=await St("osascript",e.map(r=>["-e",r]).flat());return t}function mt(e,t){let r=new URL("https://tools.applemediaservices.com/api/apple-media/music/US/search.json");return r.searchParams.set("types",e),r.searchParams.set("limit","1"),r.searchParams.set("term",t),r}var gt={headers:{"user-agent":"Mozilla/5.0 (Windows NT 10.0; rv:125.0) Gecko/20100101 Firefox/125.0"}},R=null;async function Pr({id:e,name:t,artist:r,album:n}){if(e===R?.id){if("data"in R)return R.data;if("failures"in R&&R.failures>=5)return null}try{let[o,a]=await Promise.all([fetch(mt("songs",r+" "+n+" "+t),gt).then(f=>f.json()),fetch(mt("artists",r.split(/ *[,&] */)[0]),gt).then(f=>f.json())]),i=o?.songs?.data[0]?.attributes.url,s=o?.songs?.data[0]?.id?`https://song.link/i/${o?.songs?.data[0]?.id}`:void 0,c=o?.songs?.data[0]?.attributes.artwork.url.replace("{w}","512").replace("{h}","512"),u=a?.artists?.data[0]?.attributes.artwork.url.replace("{w}","512").replace("{h}","512");return R={id:e,data:{appleMusicLink:i,songLink:s,albumArtwork:c,artistArtwork:u}},R.data}catch(o){return console.error("[AppleMusicRichPresence] Failed to fetch remote data:",o),R={id:e,failures:(e===R?.id&&"failures"in R?R.failures:0)+1},null}}async function Or(){try{await St("pgrep",["^Music$"])}catch{return null}if(await Ge(['tell application "Music"',"get player state","end tell"]).then(f=>f.trim())!=="playing")return null;let t=await Ge(['tell application "Music"',"get player position","end tell"]).then(f=>Number.parseFloat(f.trim())),r=await Ge(['set output to ""','tell application "Music"',"set t_id to database id of current track","set t_name to name of current track","set t_album to album of current track","set t_artist to artist of current track","set t_duration to duration of current track",'set output to "" & t_id & "\\n" & t_name & "\\n" & t_album & "\\n" & t_artist & "\\n" & t_duration',"end tell","return output"]),[n,o,a,i,s]=r.split(`
`).filter(f=>!!f),c=Number.parseFloat(s),u=await Pr({id:n,name:o,artist:i,album:a});return{name:o,album:a,artist:i,playerPosition:t,duration:c,...u}}var Me={};ie(Me,{initDevtoolsOpenEagerLoad:()=>kr});l();function kr(e){let t=()=>e.sender.executeJavaScript("Vencord.Plugins.plugins.ConsoleShortcuts.eagerLoad(true)");e.sender.isDevToolsOpened()?t():e.sender.once("devtools-opened",()=>t())}var It={};l();l();ae();l();var ue=class{pathListeners=new Map;globalListeners=new Set;constructor(t,r={}){this.plain=t,this.store=this.makeProxy(t),Object.assign(this,r)}makeProxy(t,r=t,n=""){let o=this;return new Proxy(t,{get(a,i){let s=a[i];return!(i in a)&&o.getDefaultValue&&(s=o.getDefaultValue({target:a,key:i,root:r,path:n})),typeof s=="object"&&s!==null&&!Array.isArray(s)?o.makeProxy(s,r,`${n}${n&&"."}${i}`):s},set(a,i,s){if(a[i]===s)return!0;Reflect.set(a,i,s);let c=`${n}${n&&"."}${i}`;return o.globalListeners.forEach(u=>u(s,c)),o.pathListeners.get(c)?.forEach(u=>u(s)),!0}})}setData(t,r){if(this.readOnly)throw new Error("SettingsStore is read-only");if(this.plain=t,this.store=this.makeProxy(t),r){let n=t,o=r.split(".");for(let a of o){if(!n){console.warn(`Settings#setData: Path ${r} does not exist in new data. Not dispatching update`);return}n=n[a]}this.pathListeners.get(r)?.forEach(a=>a(n))}this.markAsChanged()}addGlobalChangeListener(t){this.globalListeners.add(t)}addChangeListener(t,r){let n=this.pathListeners.get(t)??new Set;n.add(r),this.pathListeners.set(t,n)}removeGlobalChangeListener(t){this.globalListeners.delete(t)}removeChangeListener(t,r){let n=this.pathListeners.get(t);!n||(n.delete(r),n.size||this.pathListeners.delete(t))}markAsChanged(){this.globalListeners.forEach(t=>t(this.plain,""))}};l();function Ve(e,t){for(let r in t){let n=t[r];typeof n=="object"&&!Array.isArray(n)?(e[r]??={},Ve(e[r],n)):e[r]??=n}return e}var we=require("electron"),Z=require("fs");l();var xt=require("electron"),M=require("path"),ge=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,M.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,M.join)(xt.app.getPath("userData"),"..","Vencord")),K=(0,M.join)(ge,"settings"),z=(0,M.join)(ge,"themes"),ye=(0,M.join)(K,"quickCss.css"),Ne=(0,M.join)(K,"settings.json"),Ue=(0,M.join)(K,"native-settings.json"),Tt=["https:","http:","steam:","spotify:","com.epicgames.launcher:","tidal:"];(0,Z.mkdirSync)(K,{recursive:!0});function Dt(e,t){try{return JSON.parse((0,Z.readFileSync)(t,"utf-8"))}catch(r){return r?.code!=="ENOENT"&&console.error(`Failed to read ${e} settings`,r),{}}}var T=new ue(Dt("renderer",Ne));T.addGlobalChangeListener(()=>{try{(0,Z.writeFileSync)(Ne,JSON.stringify(T.plain,null,4))}catch(e){console.error("Failed to write renderer settings",e)}});we.ipcMain.handle("VencordGetSettingsDir",()=>K);we.ipcMain.on("VencordGetSettings",e=>e.returnValue=T.plain);we.ipcMain.handle("VencordSetSettings",(e,t,r)=>{T.setData(t,r)});var _r={plugins:{}},Rt=Dt("native",Ue);Ve(Rt,_r);var Et=new ue(Rt);Et.addGlobalChangeListener(()=>{try{(0,Z.writeFileSync)(Ue,JSON.stringify(Et.plain,null,4))}catch(e){console.error("Failed to write native settings",e)}});var At=require("electron");At.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(r,{frame:n})=>{n.once("dom-ready",()=>{if(n.url.startsWith("https://open.spotify.com/embed/")){let o=T.store.plugins?.FixSpotifyEmbeds;if(!o?.enabled)return;n.executeJavaScript(`
                    const original = Audio.prototype.play;
                    Audio.prototype.play = function() {
                        this.volume = ${o.volume/100||.1};
                        return original.apply(this, arguments);
                    }
                `)}})})});var Ot={};l();var Pt=require("electron");Pt.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(r,{frame:n})=>{n.once("dom-ready",()=>{if(n.url.startsWith("https://www.youtube.com/")){if(!T.store.plugins?.FixYoutubeEmbeds?.enabled)return;n.executeJavaScript(`
                new MutationObserver(() => {
                    if(
                        document.querySelector('div.ytp-error-content-wrap-subreason a[href*="www.youtube.com/watch?v="]')
                    ) location.reload()
                }).observe(document.body, { childList: true, subtree:true });
                `)}})})});var ze={};ie(ze,{resolveRedirect:()=>Lr});l();var kt=require("https"),Cr=/^https:\/\/(spotify\.link|s\.team)\/.+$/;function _t(e){return new Promise((t,r)=>{let n=(0,kt.request)(new URL(e),{method:"HEAD"},o=>{t(o.headers.location?_t(o.headers.location):e)});n.on("error",r),n.end()})}async function Lr(e,t){return Cr.test(t)?_t(t):t}var Ze={};ie(Ze,{readRecording:()=>Gr});l();var Ct=require("electron"),Lt=require("fs/promises"),fe=require("path");async function Gr(e,t){t=(0,fe.normalize)(t);let r=(0,fe.basename)(t),n=(0,fe.normalize)(Ct.app.getPath("userData")+"/");if(console.log(r,n,t),r!=="recording.ogg"||!t.startsWith(n))return null;try{let o=await(0,Lt.readFile)(t);return new Uint8Array(o.buffer)}catch{return null}}var Mt={};l();var bt=require("electron");l();var Gt=`"use strict";const LOGO_ID="block-youtube-ads-logo",hiddenCSS=["#__ffYoutube1","#__ffYoutube2","#__ffYoutube3","#__ffYoutube4","#feed-pyv-container","#feedmodule-PRO","#homepage-chrome-side-promo","#merch-shelf","#offer-module",'#pla-shelf > ytd-pla-shelf-renderer[class="style-scope ytd-watch"]',"#pla-shelf","#premium-yva","#promo-info","#promo-list","#promotion-shelf","#related > ytd-watch-next-secondary-results-renderer > #items > ytd-compact-promoted-video-renderer.ytd-watch-next-secondary-results-renderer","#search-pva","#shelf-pyv-container","#video-masthead","#watch-branded-actions","#watch-buy-urls","#watch-channel-brand-div","#watch7-branded-banner","#YtKevlarVisibilityIdentifier","#YtSparklesVisibilityIdentifier",".carousel-offer-url-container",".companion-ad-container",".GoogleActiveViewElement",'.list-view[style="margin: 7px 0pt;"]',".promoted-sparkles-text-search-root-container",".promoted-videos",".searchView.list-view",".sparkles-light-cta",".watch-extra-info-column",".watch-extra-info-right",".ytd-carousel-ad-renderer",".ytd-compact-promoted-video-renderer",".ytd-companion-slot-renderer",".ytd-merch-shelf-renderer",".ytd-player-legacy-desktop-watch-ads-renderer",".ytd-promoted-sparkles-text-search-renderer",".ytd-promoted-video-renderer",".ytd-search-pyv-renderer",".ytd-video-masthead-ad-v3-renderer",".ytp-ad-action-interstitial-background-container",".ytp-ad-action-interstitial-slot",".ytp-ad-image-overlay",".ytp-ad-overlay-container",".ytp-ad-progress",".ytp-ad-progress-list",'[class*="ytd-display-ad-"]','[layout*="display-ad-"]','a[href^="http://www.youtube.com/cthru?"]','a[href^="https://www.youtube.com/cthru?"]',"ytd-action-companion-ad-renderer","ytd-banner-promo-renderer","ytd-compact-promoted-video-renderer","ytd-companion-slot-renderer","ytd-display-ad-renderer","ytd-promoted-sparkles-text-search-renderer","ytd-promoted-sparkles-web-renderer","ytd-search-pyv-renderer","ytd-single-option-survey-renderer","ytd-video-masthead-ad-advertiser-info-renderer","ytd-video-masthead-ad-v3-renderer","YTM-PROMOTED-VIDEO-RENDERER"],hideElements=()=>{const e=hiddenCSS;if(!e)return;const t=e.join(", ")+" { display: none!important; }",r=document.createElement("style");r.innerHTML=t,document.head.appendChild(r)},observeDomChanges=e=>{new MutationObserver(r=>{e(r)}).observe(document.documentElement,{childList:!0,subtree:!0})},hideDynamicAds=()=>{const e=document.querySelectorAll("#contents > ytd-rich-item-renderer ytd-display-ad-renderer");e.length!==0&&e.forEach(t=>{if(t.parentNode&&t.parentNode.parentNode){const r=t.parentNode.parentNode;r.localName==="ytd-rich-item-renderer"&&(r.style.display="none")}})},autoSkipAds=()=>{if(document.querySelector(".ad-showing")){const e=document.querySelector("video");e&&e.duration&&(e.currentTime=e.duration,setTimeout(()=>{const t=document.querySelector("button.ytp-ad-skip-button");t&&t.click()},100))}},overrideObject=(e,t,r)=>{if(!e)return!1;let n=!1;for(const o in e)e.hasOwnProperty(o)&&o===t?(e[o]=r,n=!0):e.hasOwnProperty(o)&&typeof e[o]=="object"&&overrideObject(e[o],t,r)&&(n=!0);return n},jsonOverride=(e,t)=>{const r=JSON.parse;JSON.parse=(...o)=>{const d=r.apply(this,o);return overrideObject(d,e,t),d};const n=Response.prototype.json;Response.prototype.json=new Proxy(n,{apply(...o){const d=Reflect.apply(...o);return new Promise((s,i)=>{d.then(a=>{overrideObject(a,e,t),s(a)}).catch(a=>i(a))})}})},addAdGuardLogoStyle=()=>{},addAdGuardLogo=()=>{if(document.getElementById(LOGO_ID))return;const e=document.createElement("span");if(e.innerHTML="__logo_text__",e.setAttribute("id",LOGO_ID),window.location.hostname==="m.youtube.com"){const t=document.querySelector("header.mobile-topbar-header > button");t&&(t.parentNode?.insertBefore(e,t.nextSibling),addAdGuardLogoStyle())}else if(window.location.hostname==="www.youtube.com"){const t=document.getElementById("country-code");t&&(t.innerHTML="",t.appendChild(e),addAdGuardLogoStyle())}else if(window.location.hostname==="music.youtube.com"){const t=document.querySelector(".ytmusic-nav-bar#left-content");t&&(t.appendChild(e),addAdGuardLogoStyle())}else if(window.location.hostname==="www.youtube-nocookie.com"){const t=document.querySelector("#yt-masthead #logo-container .content-region");t&&(t.innerHTML="",t.appendChild(e),addAdGuardLogoStyle())}};jsonOverride("adPlacements",[]),jsonOverride("playerAds",[]),hideElements(),addAdGuardLogo(),hideDynamicAds(),autoSkipAds(),observeDomChanges(()=>{addAdGuardLogo(),hideDynamicAds(),autoSkipAds()});
`;bt.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(r,{frame:n})=>{n.once("dom-ready",()=>{if(n.url.includes("discordsays")&&n.url.includes("youtube.com")){if(!T.store.plugins?.WatchTogetherAdblock?.enabled)return;n.executeJavaScript(Gt)}})})});var Fe={};ie(Fe,{sendToOverlay:()=>br});l();var Nt=require("dgram"),Vt;function br(e,t){t.icon=Buffer.from(t.icon).toString("base64");let r=JSON.stringify(t);Vt??=(0,Nt.createSocket)("udp4"),Vt.send(r,42069,"127.0.0.1")}var Ut={AppleMusicRichPresence:be,ConsoleShortcuts:Me,FixSpotifyEmbeds:It,FixYoutubeEmbeds:Ot,OpenInApp:ze,VoiceMessages:Ze,WatchTogetherAdblock:Mt,XSOverlay:Fe};var zt={};for(let[e,t]of Object.entries(Ut)){let r=Object.entries(t);if(!r.length)continue;let n=zt[e]={};for(let[o,a]of r){let i=`VencordPluginNative_${e}_${o}`;We.ipcMain.handle(i,a),n[o]=i}}We.ipcMain.on("VencordGetPluginIpcMethodMap",e=>{e.returnValue=zt});l();ae();var v=require("electron");l();var Zt="PCFkb2N0eXBlIGh0bWw+PGh0bWwgbGFuZz0iZW4iPjxoZWFkPjxtZXRhIGNoYXJzZXQ9InV0Zi04Ij48dGl0bGU+VmVuY29yZCBRdWlja0NTUyBFZGl0b3I8L3RpdGxlPjxsaW5rIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0iaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9tb25hY28tZWRpdG9yQDAuNTAuMC9taW4vdnMvZWRpdG9yL2VkaXRvci5tYWluLmNzcyIgaW50ZWdyaXR5PSJzaGEyNTYtdGlKUFEyTzA0ei9wWi9Bd2R5SWdock9NemV3ZitQSXZFbDFZS2JRdnNaaz0iIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciI+PHN0eWxlPiNjb250YWluZXIsYm9keSxodG1se3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO21hcmdpbjowO3BhZGRpbmc6MDtvdmVyZmxvdzpoaWRkZW59PC9zdHlsZT48L2hlYWQ+PGJvZHk+PGRpdiBpZD0iY29udGFpbmVyIj48L2Rpdj48c2NyaXB0IHNyYz0iaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9tb25hY28tZWRpdG9yQDAuNTAuMC9taW4vdnMvbG9hZGVyLmpzIiBpbnRlZ3JpdHk9InNoYTI1Ni1LY1U0OFRHcjg0cjd1bkY3SjVJZ0JvOTVhZVZyRWJyR2UwNFM3VGNGVWpzPSIgY3Jvc3NvcmlnaW49ImFub255bW91cyIgcmVmZXJyZXJwb2xpY3k9Im5vLXJlZmVycmVyIj48L3NjcmlwdD48c2NyaXB0PnJlcXVpcmUuY29uZmlnKHtwYXRoczp7dnM6Imh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vbW9uYWNvLWVkaXRvckAwLjUwLjAvbWluL3ZzIn19KSxyZXF1aXJlKFsidnMvZWRpdG9yL2VkaXRvci5tYWluIl0sKCgpPT57Z2V0Q3VycmVudENzcygpLnRoZW4oKGU9Pnt2YXIgdD1tb25hY28uZWRpdG9yLmNyZWF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiY29udGFpbmVyIikse3ZhbHVlOmUsbGFuZ3VhZ2U6ImNzcyIsdGhlbWU6Z2V0VGhlbWUoKX0pO3Qub25EaWRDaGFuZ2VNb2RlbENvbnRlbnQoKCgpPT5zZXRDc3ModC5nZXRWYWx1ZSgpKSkpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCJyZXNpemUiLCgoKT0+e3QubGF5b3V0KCl9KSl9KSl9KSk8L3NjcmlwdD48L2JvZHk+PC9odG1sPg==";var pe=require("fs"),X=require("fs/promises"),$=require("path");l();var Mr=/[^\S\r\n]*?\r?(?:\r\n|\n)[^\S\r\n]*?\*[^\S\r\n]?/,Vr=/^\\@/;function je(e,t={}){return{fileName:e,name:t.name??e.replace(/\.css$/i,""),author:t.author??"Unknown Author",description:t.description??"A Discord Theme.",version:t.version,license:t.license,source:t.source,website:t.website,invite:t.invite}}function Ft(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function Wt(e,t){if(!e)return je(t);let r=e.split("/**",2)?.[1]?.split("*/",1)?.[0];if(!r)return je(t);let n={},o="",a="";for(let i of r.split(Mr))if(i.length!==0)if(i.charAt(0)==="@"&&i.charAt(1)!==" "){n[o]=a.trim();let s=i.indexOf(" ");o=i.substring(1,s),a=i.substring(s+1)}else a+=" "+i.replace("\\n",`
`).replace(Vr,"@");return n[o]=a.trim(),delete n[""],je(t,n)}l();var jt=require("electron");function Ht(e){e.webContents.setWindowOpenHandler(({url:t})=>{switch(t){case"about:blank":case"https://discord.com/popout":case"https://ptb.discord.com/popout":case"https://canary.discord.com/popout":return{action:"allow"}}try{var{protocol:r}=new URL(t)}catch{return{action:"deny"}}switch(r){case"http:":case"https:":case"mailto:":case"steam:":case"spotify:":jt.shell.openExternal(t)}return{action:"deny"}})}(0,pe.mkdirSync)(z,{recursive:!0});function He(e,t){let r=(0,$.normalize)(e),n=(0,$.join)(e,t),o=(0,$.normalize)(n);return o.startsWith(r)?o:null}function Nr(){return(0,X.readFile)(ye,"utf-8").catch(()=>"")}async function Ur(){let e=await(0,X.readdir)(z).catch(()=>[]),t=[];for(let r of e){if(!r.endsWith(".css"))continue;let n=await Bt(r).then(Ft).catch(()=>null);n!=null&&t.push(Wt(n,r))}return t}function Bt(e){e=e.replace(/\?v=\d+$/,"");let t=He(z,e);return t?(0,X.readFile)(t,"utf-8"):Promise.reject(`Unsafe path ${e}`)}v.ipcMain.handle("VencordOpenQuickCss",()=>v.shell.openPath(ye));v.ipcMain.handle("VencordOpenExternal",(e,t)=>{try{var{protocol:r}=new URL(t)}catch{throw"Malformed URL"}if(!Tt.includes(r))throw"Disallowed protocol.";v.shell.openExternal(t)});v.ipcMain.handle("VencordGetQuickCss",()=>Nr());v.ipcMain.handle("VencordSetQuickCss",(e,t)=>(0,pe.writeFileSync)(ye,t));v.ipcMain.handle("VencordGetThemesDir",()=>z);v.ipcMain.handle("VencordGetThemesList",()=>Ur());v.ipcMain.handle("VencordGetThemeData",(e,t)=>Bt(t));v.ipcMain.handle("VencordGetThemeSystemValues",()=>({"os-accent-color":`#${v.systemPreferences.getAccentColor?.()||""}`}));v.ipcMain.handle("VencordOpenMonacoEditor",async()=>{let e="Vencord QuickCSS Editor",t=v.BrowserWindow.getAllWindows().find(n=>n.title===e);if(t&&!t.isDestroyed()){t.focus();return}let r=new v.BrowserWindow({title:e,autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,$.join)(__dirname,"vencordDesktopPreload.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!1}});Ht(r),await r.loadURL(`data:text/html;base64,${Zt}`)});l();var fr=require("electron");l();var Kt=require("module"),zr=(0,Kt.createRequire)("/"),xe,Zr=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{xe=zr("worker_threads").Worker}catch{}var Fr=xe?function(e,t,r,n,o){var a=!1,i=new xe(e+Zr,{eval:!0}).on("error",function(s){return o(s,null)}).on("message",function(s){return o(null,s)}).on("exit",function(s){s&&!a&&o(new Error("exited with code "+s),null)});return i.postMessage(r,n),i.terminate=function(){return a=!0,xe.prototype.terminate.call(i)},i}:function(e,t,r,n,o){setImmediate(function(){return o(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var a=function(){};return{terminate:a,postMessage:a}},w=Uint8Array,V=Uint16Array,Je=Uint32Array,Ke=new w([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),$e=new w([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),$t=new w([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Xt=function(e,t){for(var r=new V(31),n=0;n<31;++n)r[n]=t+=1<<e[n-1];for(var o=new Je(r[30]),n=1;n<30;++n)for(var a=r[n];a<r[n+1];++a)o[a]=a-r[n]<<5|n;return[r,o]},Qt=Xt(Ke,2),Xe=Qt[0],Wr=Qt[1];Xe[28]=258,Wr[258]=28;var qt=Xt($e,0),er=qt[0],_o=qt[1],De=new V(32768);for(d=0;d<32768;++d)k=(d&43690)>>>1|(d&21845)<<1,k=(k&52428)>>>2|(k&13107)<<2,k=(k&61680)>>>4|(k&3855)<<4,De[d]=((k&65280)>>>8|(k&255)<<8)>>>1;var k,d,Q=function(e,t,r){for(var n=e.length,o=0,a=new V(t);o<n;++o)e[o]&&++a[e[o]-1];var i=new V(t);for(o=0;o<t;++o)i[o]=i[o-1]+a[o-1]<<1;var s;if(r){s=new V(1<<t);var c=15-t;for(o=0;o<n;++o)if(e[o])for(var u=o<<4|e[o],f=t-e[o],m=i[e[o]-1]++<<f,D=m|(1<<f)-1;m<=D;++m)s[De[m]>>>c]=u}else for(s=new V(n),o=0;o<n;++o)e[o]&&(s[o]=De[i[e[o]-1]++]>>>15-e[o]);return s},he=new w(288);for(d=0;d<144;++d)he[d]=8;var d;for(d=144;d<256;++d)he[d]=9;var d;for(d=256;d<280;++d)he[d]=7;var d;for(d=280;d<288;++d)he[d]=8;var d,tr=new w(32);for(d=0;d<32;++d)tr[d]=5;var d;var rr=Q(he,9,1);var nr=Q(tr,5,1),Te=function(e){for(var t=e[0],r=1;r<e.length;++r)e[r]>t&&(t=e[r]);return t},E=function(e,t,r){var n=t/8|0;return(e[n]|e[n+1]<<8)>>(t&7)&r},Ee=function(e,t){var r=t/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(t&7)},or=function(e){return(e+7)/8|0},Re=function(e,t,r){(t==null||t<0)&&(t=0),(r==null||r>e.length)&&(r=e.length);var n=new(e.BYTES_PER_ELEMENT==2?V:e.BYTES_PER_ELEMENT==4?Je:w)(r-t);return n.set(e.subarray(t,r)),n};var ir=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],S=function(e,t,r){var n=new Error(t||ir[e]);if(n.code=e,Error.captureStackTrace&&Error.captureStackTrace(n,S),!r)throw n;return n},ar=function(e,t,r){var n=e.length;if(!n||r&&r.f&&!r.l)return t||new w(0);var o=!t||r,a=!r||r.i;r||(r={}),t||(t=new w(n*3));var i=function(rt){var nt=t.length;if(rt>nt){var ot=new w(Math.max(nt*2,rt));ot.set(t),t=ot}},s=r.f||0,c=r.p||0,u=r.b||0,f=r.l,m=r.d,D=r.m,_=r.n,ee=n*8;do{if(!f){s=E(e,c,1);var N=E(e,c+1,3);if(c+=3,N)if(N==1)f=rr,m=nr,D=9,_=5;else if(N==2){var L=E(e,c,31)+257,W=E(e,c+10,15)+4,te=L+E(e,c+5,31)+1;c+=14;for(var U=new w(te),re=new w(19),y=0;y<W;++y)re[$t[y]]=E(e,c+y*3,7);c+=W*3;for(var O=Te(re),de=(1<<O)-1,j=Q(re,O,1),y=0;y<te;){var ne=j[E(e,c,de)];c+=ne&15;var g=ne>>>4;if(g<16)U[y++]=g;else{var H=0,ve=0;for(g==16?(ve=3+E(e,c,3),c+=2,H=U[y-1]):g==17?(ve=3+E(e,c,7),c+=3):g==18&&(ve=11+E(e,c,127),c+=7);ve--;)U[y++]=H}}var qe=U.subarray(0,L),G=U.subarray(L);D=Te(qe),_=Te(G),f=Q(qe,D,1),m=Q(G,_,1)}else S(1);else{var g=or(c)+4,x=e[g-4]|e[g-3]<<8,C=g+x;if(C>n){a&&S(0);break}o&&i(u+x),t.set(e.subarray(g,C),u),r.b=u+=x,r.p=c=C*8,r.f=s;continue}if(c>ee){a&&S(0);break}}o&&i(u+131072);for(var vr=(1<<D)-1,mr=(1<<_)-1,Ae=c;;Ae=c){var H=f[Ee(e,c)&vr],B=H>>>4;if(c+=H&15,c>ee){a&&S(0);break}if(H||S(2),B<256)t[u++]=B;else if(B==256){Ae=c,f=null;break}else{var et=B-254;if(B>264){var y=B-257,oe=Ke[y];et=E(e,c,(1<<oe)-1)+Xe[y],c+=oe}var Ie=m[Ee(e,c)&mr],Pe=Ie>>>4;Ie||S(3),c+=Ie&15;var G=er[Pe];if(Pe>3){var oe=$e[Pe];G+=Ee(e,c)&(1<<oe)-1,c+=oe}if(c>ee){a&&S(0);break}o&&i(u+131072);for(var tt=u+et;u<tt;u+=4)t[u]=t[u-G],t[u+1]=t[u+1-G],t[u+2]=t[u+2-G],t[u+3]=t[u+3-G];u=tt}}r.l=f,r.p=Ae,r.b=u,r.f=s,f&&(s=1,r.m=D,r.d=m,r.n=_)}while(!s);return u==t.length?t:Re(t,0,u)};var jr=new w(0);var Hr=function(e,t){var r={};for(var n in e)r[n]=e[n];for(var n in t)r[n]=t[n];return r},Yt=function(e,t,r){for(var n=e(),o=e.toString(),a=o.slice(o.indexOf("[")+1,o.lastIndexOf("]")).replace(/\s+/g,"").split(","),i=0;i<n.length;++i){var s=n[i],c=a[i];if(typeof s=="function"){t+=";"+c+"=";var u=s.toString();if(s.prototype)if(u.indexOf("[native code]")!=-1){var f=u.indexOf(" ",8)+1;t+=u.slice(f,u.indexOf("(",f))}else{t+=u;for(var m in s.prototype)t+=";"+c+".prototype."+m+"="+s.prototype[m].toString()}else t+=u}else r[c]=s}return[t,r]},Se=[],Br=function(e){var t=[];for(var r in e)e[r].buffer&&t.push((e[r]=new e[r].constructor(e[r])).buffer);return t},Yr=function(e,t,r,n){var o;if(!Se[r]){for(var a="",i={},s=e.length-1,c=0;c<s;++c)o=Yt(e[c],a,i),a=o[0],i=o[1];Se[r]=Yt(e[s],a,i)}var u=Hr({},Se[r][1]);return Fr(Se[r][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+t.toString()+"}",r,u,Br(u),n)},Jr=function(){return[w,V,Je,Ke,$e,$t,Xe,er,rr,nr,De,ir,Q,Te,E,Ee,or,Re,S,ar,Qe,sr,cr]};var sr=function(e){return postMessage(e,[e.buffer])},cr=function(e){return e&&e.size&&new w(e.size)},Kr=function(e,t,r,n,o,a){var i=Yr(r,n,o,function(s,c){i.terminate(),a(s,c)});return i.postMessage([e,t],t.consume?[e.buffer]:[]),function(){i.terminate()}};var I=function(e,t){return e[t]|e[t+1]<<8},A=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},Be=function(e,t){return A(e,t)+A(e,t+4)*4294967296};function $r(e,t,r){return r||(r=t,t={}),typeof r!="function"&&S(7),Kr(e,t,[Jr],function(n){return sr(Qe(n.data[0],cr(n.data[1])))},1,r)}function Qe(e,t){return ar(e,t)}var Ye=typeof TextDecoder<"u"&&new TextDecoder,Xr=0;try{Ye.decode(jr,{stream:!0}),Xr=1}catch{}var Qr=function(e){for(var t="",r=0;;){var n=e[r++],o=(n>127)+(n>223)+(n>239);if(r+o>e.length)return[t,Re(e,r-1)];o?o==3?(n=((n&15)<<18|(e[r++]&63)<<12|(e[r++]&63)<<6|e[r++]&63)-65536,t+=String.fromCharCode(55296|n>>10,56320|n&1023)):o&1?t+=String.fromCharCode((n&31)<<6|e[r++]&63):t+=String.fromCharCode((n&15)<<12|(e[r++]&63)<<6|e[r++]&63):t+=String.fromCharCode(n)}};function qr(e,t){if(t){for(var r="",n=0;n<e.length;n+=16384)r+=String.fromCharCode.apply(null,e.subarray(n,n+16384));return r}else{if(Ye)return Ye.decode(e);var o=Qr(e),a=o[0],i=o[1];return i.length&&S(8),a}}var en=function(e,t){return t+30+I(e,t+26)+I(e,t+28)},tn=function(e,t,r){var n=I(e,t+28),o=qr(e.subarray(t+46,t+46+n),!(I(e,t+8)&2048)),a=t+46+n,i=A(e,t+20),s=r&&i==4294967295?rn(e,a):[i,A(e,t+24),A(e,t+42)],c=s[0],u=s[1],f=s[2];return[I(e,t+10),c,u,o,a+I(e,t+30)+I(e,t+32),f]},rn=function(e,t){for(;I(e,t)!=1;t+=4+I(e,t+2));return[Be(e,t+12),Be(e,t+4),Be(e,t+20)]};var Jt=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(e){e()};function lr(e,t,r){r||(r=t,t={}),typeof r!="function"&&S(7);var n=[],o=function(){for(var g=0;g<n.length;++g)n[g]()},a={},i=function(g,x){Jt(function(){r(g,x)})};Jt(function(){i=r});for(var s=e.length-22;A(e,s)!=101010256;--s)if(!s||e.length-s>65558)return i(S(13,0,1),null),o;var c=I(e,s+8);if(c){var u=c,f=A(e,s+16),m=f==4294967295||u==65535;if(m){var D=A(e,s-12);m=A(e,D)==101075792,m&&(u=c=A(e,D+32),f=A(e,D+48))}for(var _=t&&t.filter,ee=function(g){var x=tn(e,f,m),C=x[0],L=x[1],W=x[2],te=x[3],U=x[4],re=x[5],y=en(e,re);f=U;var O=function(j,ne){j?(o(),i(j,null)):(ne&&(a[te]=ne),--c||i(null,a))};if(!_||_({name:te,size:L,originalSize:W,compression:C}))if(!C)O(null,Re(e,y,y+L));else if(C==8){var de=e.subarray(y,y+L);if(L<32e4)try{O(null,Qe(de,new w(W)))}catch(j){O(j,null)}else n.push($r(de,{size:W},O))}else O(S(14,"unknown compression type "+C,1),null);else O(null,null)},N=0;N<u;++N)ee(N)}else i(null,{});return o}var pr=require("fs"),P=require("fs/promises"),q=require("path");l();function ur(e){function t(i,s,c,u){let f=0;return f+=i<<0,f+=s<<8,f+=c<<16,f+=u<<24>>>0,f}if(e[0]===80&&e[1]===75&&e[2]===3&&e[3]===4)return e;if(e[0]!==67||e[1]!==114||e[2]!==50||e[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let r=e[4]===3,n=e[4]===2;if(!n&&!r||e[5]||e[6]||e[7])throw new Error("Unexpected crx format version number.");if(n){let i=t(e[8],e[9],e[10],e[11]),s=t(e[12],e[13],e[14],e[15]),c=16+i+s;return e.subarray(c,e.length)}let a=12+t(e[8],e[9],e[10],e[11]);return e.subarray(a,e.length)}_e();var nn=(0,q.join)(ge,"ExtensionCache");async function on(e,t){return await(0,P.mkdir)(t,{recursive:!0}),new Promise((r,n)=>{lr(e,(o,a)=>{if(o)return void n(o);Promise.all(Object.keys(a).map(async i=>{if(i.startsWith("_metadata/"))return;if(i.endsWith("/"))return void(0,P.mkdir)((0,q.join)(t,i),{recursive:!0});let s=i.split("/"),c=s.pop(),u=s.join("/"),f=(0,q.join)(t,u);u&&await(0,P.mkdir)(f,{recursive:!0}),await(0,P.writeFile)((0,q.join)(f,c),a[i])})).then(()=>r()).catch(i=>{(0,P.rm)(t,{recursive:!0,force:!0}),n(i)})})})}async function hr(e){let t=(0,q.join)(nn,`${e}`);try{await(0,P.access)(t,pr.constants.F_OK)}catch{let n=e==="fmkadmapgofadopljbjfkapdkoienihi"?"https://raw.githubusercontent.com/Vendicated/random-files/f6f550e4c58ac5f2012095a130406c2ab25b984d/fmkadmapgofadopljbjfkapdkoienihi.zip":`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${e}%26uc&prodversion=32`,o=await J(n,{headers:{"User-Agent":"Vencord (https://github.com/Vendicated/Vencord)"}});await on(ur(o),t).catch(console.error)}fr.session.defaultSession.loadExtension(t)}F.app.whenReady().then(()=>{F.protocol.registerFileProtocol("vencord",({url:o},a)=>{let i=o.slice(10);if(i.endsWith("/")&&(i=i.slice(0,-1)),i.startsWith("/themes/")){let s=i.slice(8),c=He(z,s);if(!c){a({statusCode:403});return}a(c.replace(/\?v=\d+$/,""));return}switch(i){case"renderer.js.map":case"vencordDesktopRenderer.js.map":case"preload.js.map":case"vencordDesktopPreload.js.map":case"patcher.js.map":case"vencordDesktopMain.js.map":a((0,dr.join)(__dirname,i));break;default:a({statusCode:403})}});try{T.store.enableReactDevtools&&hr("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(o=>console.error("[Vencord] Failed to install React Developer Tools",o))}catch{}let e=(o,a)=>Object.keys(o).find(i=>i.toLowerCase()===a),t=o=>{let a={};return o.split(";").forEach(i=>{let[s,...c]=i.trim().split(/\s+/g);s&&!Object.prototype.hasOwnProperty.call(a,s)&&(a[s]=c)}),a},r=o=>Object.entries(o).filter(([,a])=>a?.length).map(a=>a.flat().join(" ")).join("; "),n=o=>{let a=e(o,"content-security-policy");if(a){let i=t(o[a][0]);for(let s of["style-src","connect-src","img-src","font-src","media-src","worker-src"])i[s]??=[],i[s].push("*","blob:","data:","vencord:","'unsafe-inline'");i["script-src"]??=[],i["script-src"].push("'unsafe-eval'","https://unpkg.com","https://cdnjs.cloudflare.com"),o[a]=[r(i)]}};F.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:o,resourceType:a},i)=>{if(o&&(a==="mainFrame"&&n(o),a==="stylesheet")){let s=e(o,"content-type");s&&(o[s]=["text/css"])}i({cancel:!1,responseHeaders:o})}),F.session.defaultSession.webRequest.onHeadersReceived=()=>{}});
//# sourceURL=VencordDesktopMain
//# sourceMappingURL=vencord://vencordDesktopMain.js.map
/*! For license information please see vencordDesktopMain.js.LEGAL.txt */
