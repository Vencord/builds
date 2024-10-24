// Vencord f5f59be
// Standalone: true
// Platform: Universal
// Updater Disabled: false
"use strict";var Tr=Object.create;var me=Object.defineProperty;var Er=Object.getOwnPropertyDescriptor;var Dr=Object.getOwnPropertyNames;var br=Object.getPrototypeOf,Rr=Object.prototype.hasOwnProperty;var L=(e,t)=>()=>(e&&(t=e(e=0)),t);var $=(e,t)=>{for(var r in t)me(e,r,{get:t[r],enumerable:!0})},ct=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Dr(t))!Rr.call(e,i)&&i!==r&&me(e,i,{get:()=>t[i],enumerable:!(n=Er(t,i))||n.enumerable});return e};var Ar=(e,t,r)=>(r=e!=null?Tr(br(e)):{},ct(t||!e||!e.__esModule?me(r,"default",{value:e,enumerable:!0}):r,e)),Ir=e=>ct(me({},"__esModule",{value:!0}),e);var c=L(()=>{"use strict"});function J(e,t={}){return new Promise((r,n)=>{lt.default.get(e,t,i=>{let{statusCode:a,statusMessage:o,headers:s}=i;if(a>=400)return void n(`${a}: ${o} - ${e}`);if(a>=300)return void r(J(s.location,t));let u=[];i.on("error",n),i.on("data",d=>u.push(d)),i.once("end",()=>r(Buffer.concat(u)))})})}var lt,Pe=L(()=>{"use strict";c();lt=Ar(require("https"))});var ae=L(()=>{"use strict";c()});var se,Oe=L(()=>{c();se="f5f59be"});var X,ke=L(()=>{c();X="Vendicated/Vencord"});var ut,ft=L(()=>{"use strict";c();Oe();ke();ut=`Vencord/${se}${X?` (https://github.com/${X})`:""}`});function ce(e){return async function(){try{return{ok:!0,value:await e(...arguments)}}catch(t){return{ok:!1,error:t instanceof Error?{...t}:t}}}}var ht,pt=L(()=>{"use strict";c();ht=["vencordDesktopMain.js","vencordDesktopPreload.js","vencordDesktopRenderer.js","vencordDesktopRenderer.css"]});var Cr={};async function mt(e){return J(Pr+e,{headers:{Accept:"application/vnd.github+json","User-Agent":ut}})}async function Or(){if(!await gt())return[];let t=await mt(`/compare/${se}...HEAD`);return JSON.parse(t.toString("utf-8")).commits.map(n=>({hash:n.sha.slice(0,7),author:n.author.login,message:n.commit.message.split(`
`)[0]}))}async function gt(){let e=await mt("/releases/latest"),t=JSON.parse(e.toString());return t.name.slice(t.name.lastIndexOf(" ")+1)===se?!1:(t.assets.forEach(({name:n,browser_download_url:i})=>{ht.some(a=>n.startsWith(a))&&Ce.push([n,i])}),!0)}async function kr(){return await Promise.all(Ce.map(async([e,t])=>(0,dt.writeFile)((0,vt.join)(__dirname,e),await J(t)))),Ce=[],!0}var le,dt,vt,Pr,Ce,yt=L(()=>{"use strict";c();Pe();ae();ft();le=require("electron"),dt=require("fs/promises"),vt=require("path");Oe();ke();pt();Pr=`https://api.github.com/repos/${X}`,Ce=[];le.ipcMain.handle("VencordGetRepo",ce(()=>`https://github.com/${X}`));le.ipcMain.handle("VencordGetUpdates",ce(Or));le.ipcMain.handle("VencordUpdate",ce(gt));le.ipcMain.handle("VencordBuild",ce(kr))});c();var W=require("electron"),mr=require("path");c();c();yt();c();ae();var He=require("electron");c();var Ge={};$(Ge,{fetchTrackData:()=>Lr});c();var wt=require("child_process"),St=require("util"),xt=(0,St.promisify)(wt.execFile);async function ze(e){let{stdout:t}=await xt("osascript",e.map(r=>["-e",r]).flat());return t}var A=null,_r=/<script type="module" crossorigin src="([a-zA-Z0-9.\-/]+)"><\/script>/,zr=/\w+="([A-Za-z0-9-_]*\.[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*)",\w+="x-apple-jingle-correlation-key"/,Me,Mr=async()=>{if(Me)return Me;let e=await fetch("https://music.apple.com/").then(i=>i.text()),t=new URL(e.match(_r)[1],"https://music.apple.com/"),n=(await fetch(t).then(i=>i.text())).match(zr)[1];return Me=n,n};async function Gr({id:e,name:t,artist:r,album:n}){if(e===A?.id){if("data"in A)return A.data;if("failures"in A&&A.failures>=5)return null}try{let i=new URL("https://amp-api-edge.music.apple.com/v1/catalog/us/search");i.searchParams.set("platform","web"),i.searchParams.set("l","en-US"),i.searchParams.set("limit","1"),i.searchParams.set("with","serverBubbles"),i.searchParams.set("types","songs"),i.searchParams.set("term",`${t} ${r} ${n}`),i.searchParams.set("include[songs]","artists");let a=await Mr(),o=await fetch(i,{headers:{accept:"*/*","accept-language":"en-US,en;q=0.9",authorization:`Bearer ${a}`,"user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",origin:"https://music.apple.com"}}).then(s=>s.json()).then(s=>s.results.song.data[0]);return A={id:e,data:{appleMusicLink:o.attributes.url,songLink:`https://song.link/i/${o.id}`,albumArtwork:o.attributes.artwork.url.replace("{w}x{h}","512x512"),artistArtwork:o.relationships.artists.data[0].attributes.artwork.url.replace("{w}x{h}","512x512")}},A.data}catch(i){return console.error("[AppleMusicRichPresence] Failed to fetch remote data:",i),A={id:e,failures:(e===A?.id&&"failures"in A?A.failures:0)+1},null}}async function Lr(){try{await xt("pgrep",["^Music$"])}catch{return null}if(await ze(['tell application "Music"',"get player state","end tell"]).then(f=>f.trim())!=="playing")return null;let t=await ze(['tell application "Music"',"get player position","end tell"]).then(f=>Number.parseFloat(f.trim())),r=await ze(['set output to ""','tell application "Music"',"set t_id to database id of current track","set t_name to name of current track","set t_album to album of current track","set t_artist to artist of current track","set t_duration to duration of current track",'set output to "" & t_id & "\\n" & t_name & "\\n" & t_album & "\\n" & t_artist & "\\n" & t_duration',"end tell","return output"]),[n,i,a,o,s]=r.split(`
`).filter(f=>!!f),u=Number.parseFloat(s),d=await Gr({id:n,name:i,artist:o,album:a});return{name:i,album:a,artist:o,playerPosition:t,duration:u,...d}}var Le={};$(Le,{initDevtoolsOpenEagerLoad:()=>Vr});c();function Vr(e){let t=()=>e.sender.executeJavaScript("Vencord.Plugins.plugins.ConsoleShortcuts.eagerLoad(true)");e.sender.isDevToolsOpened()?t():e.sender.once("devtools-opened",()=>t())}var It={};c();c();ae();c();var ue=class{pathListeners=new Map;globalListeners=new Set;constructor(t,r={}){this.plain=t,this.store=this.makeProxy(t),Object.assign(this,r)}makeProxy(t,r=t,n=""){let i=this;return new Proxy(t,{get(a,o){let s=a[o];return!(o in a)&&i.getDefaultValue&&(s=i.getDefaultValue({target:a,key:o,root:r,path:n})),typeof s=="object"&&s!==null&&!Array.isArray(s)?i.makeProxy(s,r,`${n}${n&&"."}${o}`):s},set(a,o,s){if(a[o]===s)return!0;Reflect.set(a,o,s);let u=`${n}${n&&"."}${o}`;return i.globalListeners.forEach(d=>d(s,u)),i.pathListeners.get(u)?.forEach(d=>d(s)),!0}})}setData(t,r){if(this.readOnly)throw new Error("SettingsStore is read-only");if(this.plain=t,this.store=this.makeProxy(t),r){let n=t,i=r.split(".");for(let a of i){if(!n){console.warn(`Settings#setData: Path ${r} does not exist in new data. Not dispatching update`);return}n=n[a]}this.pathListeners.get(r)?.forEach(a=>a(n))}this.markAsChanged()}addGlobalChangeListener(t){this.globalListeners.add(t)}addChangeListener(t,r){let n=this.pathListeners.get(t)??new Set;n.add(r),this.pathListeners.set(t,n)}removeGlobalChangeListener(t){this.globalListeners.delete(t)}removeChangeListener(t,r){let n=this.pathListeners.get(t);!n||(n.delete(r),n.size||this.pathListeners.delete(t))}markAsChanged(){this.globalListeners.forEach(t=>t(this.plain,""))}};c();function Ve(e,t){for(let r in t){let n=t[r];typeof n=="object"&&!Array.isArray(n)?(e[r]??={},Ve(e[r],n)):e[r]??=n}return e}var we=require("electron"),Z=require("fs");c();var Tt=require("electron"),V=require("path"),ge=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,V.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,V.join)(Tt.app.getPath("userData"),"..","Vencord")),q=(0,V.join)(ge,"settings"),N=(0,V.join)(ge,"themes"),ye=(0,V.join)(q,"quickCss.css"),Ue=(0,V.join)(q,"settings.json"),Ne=(0,V.join)(q,"native-settings.json"),Et=["https:","http:","steam:","spotify:","com.epicgames.launcher:","tidal:","itunes:"];(0,Z.mkdirSync)(q,{recursive:!0});function bt(e,t){try{return JSON.parse((0,Z.readFileSync)(t,"utf-8"))}catch(r){return r?.code!=="ENOENT"&&console.error(`Failed to read ${e} settings`,r),{}}}var b=new ue(bt("renderer",Ue));b.addGlobalChangeListener(()=>{try{(0,Z.writeFileSync)(Ue,JSON.stringify(b.plain,null,4))}catch(e){console.error("Failed to write renderer settings",e)}});we.ipcMain.handle("VencordGetSettingsDir",()=>q);we.ipcMain.on("VencordGetSettings",e=>e.returnValue=b.plain);we.ipcMain.handle("VencordSetSettings",(e,t,r)=>{b.setData(t,r)});var Ur={plugins:{}},Rt=bt("native",Ne);Ve(Rt,Ur);var Dt=new ue(Rt);Dt.addGlobalChangeListener(()=>{try{(0,Z.writeFileSync)(Ne,JSON.stringify(Dt.plain,null,4))}catch(e){console.error("Failed to write native settings",e)}});var At=require("electron");At.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(r,{frame:n})=>{n.once("dom-ready",()=>{if(n.url.startsWith("https://open.spotify.com/embed/")){let i=b.store.plugins?.FixSpotifyEmbeds;if(!i?.enabled)return;n.executeJavaScript(`
                    const original = Audio.prototype.play;
                    Audio.prototype.play = function() {
                        this.volume = ${i.volume/100||.1};
                        return original.apply(this, arguments);
                    }
                `)}})})});var Ot={};c();var Pt=require("electron");Pt.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(r,{frame:n})=>{n.once("dom-ready",()=>{if(n.url.startsWith("https://www.youtube.com/")){if(!b.store.plugins?.FixYoutubeEmbeds?.enabled)return;n.executeJavaScript(`
                new MutationObserver(() => {
                    if(
                        document.querySelector('div.ytp-error-content-wrap-subreason a[href*="www.youtube.com/watch?v="]')
                    ) location.reload()
                }).observe(document.body, { childList: true, subtree:true });
                `)}})})});var Ze={};$(Ze,{resolveRedirect:()=>Zr});c();var kt=require("https"),Nr=/^https:\/\/(spotify\.link|s\.team)\/.+$/;function Ct(e){return new Promise((t,r)=>{let n=(0,kt.request)(new URL(e),{method:"HEAD"},i=>{t(i.headers.location?Ct(i.headers.location):e)});n.on("error",r),n.end()})}async function Zr(e,t){return Nr.test(t)?Ct(t):t}var Fe={};$(Fe,{makeDeeplTranslateRequest:()=>Fr});c();async function Fr(e,t,r,n){let i=t?"https://api.deepl.com/v2/translate":"https://api-free.deepl.com/v2/translate";try{let a=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`DeepL-Auth-Key ${r}`},body:n}),o=await a.text();return{status:a.status,data:o}}catch(a){return{status:-1,data:String(a)}}}var We={};$(We,{readRecording:()=>Wr});c();var _t=require("electron"),zt=require("fs/promises"),fe=require("path");async function Wr(e,t){t=(0,fe.normalize)(t);let r=(0,fe.basename)(t),n=(0,fe.normalize)(_t.app.getPath("userData")+"/");if(console.log(r,n,t),r!=="recording.ogg"||!t.startsWith(n))return null;try{let i=await(0,zt.readFile)(t);return new Uint8Array(i.buffer)}catch{return null}}var je={};$(je,{sendToOverlay:()=>jr});c();var Gt=require("dgram"),Mt;function jr(e,t){t.messageType=t.type;let r=JSON.stringify(t);Mt??=(0,Gt.createSocket)("udp4"),Mt.send(r,42069,"127.0.0.1")}var Ut={};c();var Vt=require("electron");c();var Lt=`"use strict";const hiddenCSS=["#__ffYoutube1","#__ffYoutube2","#__ffYoutube3","#__ffYoutube4","#feed-pyv-container","#feedmodule-PRO","#homepage-chrome-side-promo","#merch-shelf","#offer-module",'#pla-shelf > ytd-pla-shelf-renderer[class="style-scope ytd-watch"]',"#pla-shelf","#premium-yva","#promo-info","#promo-list","#promotion-shelf","#related > ytd-watch-next-secondary-results-renderer > #items > ytd-compact-promoted-video-renderer.ytd-watch-next-secondary-results-renderer","#search-pva","#shelf-pyv-container","#video-masthead","#watch-branded-actions","#watch-buy-urls","#watch-channel-brand-div","#watch7-branded-banner","#YtKevlarVisibilityIdentifier","#YtSparklesVisibilityIdentifier",".carousel-offer-url-container",".companion-ad-container",".GoogleActiveViewElement",'.list-view[style="margin: 7px 0pt;"]',".promoted-sparkles-text-search-root-container",".promoted-videos",".searchView.list-view",".sparkles-light-cta",".watch-extra-info-column",".watch-extra-info-right",".ytd-carousel-ad-renderer",".ytd-compact-promoted-video-renderer",".ytd-companion-slot-renderer",".ytd-merch-shelf-renderer",".ytd-player-legacy-desktop-watch-ads-renderer",".ytd-promoted-sparkles-text-search-renderer",".ytd-promoted-video-renderer",".ytd-search-pyv-renderer",".ytd-video-masthead-ad-v3-renderer",".ytp-ad-action-interstitial-background-container",".ytp-ad-action-interstitial-slot",".ytp-ad-image-overlay",".ytp-ad-overlay-container",".ytp-ad-progress",".ytp-ad-progress-list",'[class*="ytd-display-ad-"]','[layout*="display-ad-"]','a[href^="http://www.youtube.com/cthru?"]','a[href^="https://www.youtube.com/cthru?"]',"ytd-action-companion-ad-renderer","ytd-banner-promo-renderer","ytd-compact-promoted-video-renderer","ytd-companion-slot-renderer","ytd-display-ad-renderer","ytd-promoted-sparkles-text-search-renderer","ytd-promoted-sparkles-web-renderer","ytd-search-pyv-renderer","ytd-single-option-survey-renderer","ytd-video-masthead-ad-advertiser-info-renderer","ytd-video-masthead-ad-v3-renderer","YTM-PROMOTED-VIDEO-RENDERER"],hideElements=()=>{const e=hiddenCSS;if(!e)return;const t=e.join(", ")+" { display: none!important; }",r=document.createElement("style");r.textContent=t,document.head.appendChild(r)},observeDomChanges=e=>{new MutationObserver(r=>{e(r)}).observe(document.documentElement,{childList:!0,subtree:!0})},hideDynamicAds=()=>{const e=document.querySelectorAll("#contents > ytd-rich-item-renderer ytd-display-ad-renderer");e.length!==0&&e.forEach(t=>{if(t.parentNode&&t.parentNode.parentNode){const r=t.parentNode.parentNode;r.localName==="ytd-rich-item-renderer"&&(r.style.display="none")}})},autoSkipAds=()=>{if(document.querySelector(".ad-showing")){const e=document.querySelector("video");e&&e.duration&&(e.currentTime=e.duration,setTimeout(()=>{const t=document.querySelector("button.ytp-ad-skip-button");t&&t.click()},100))}},overrideObject=(e,t,r)=>{if(!e)return!1;let n=!1;for(const o in e)e.hasOwnProperty(o)&&o===t?(e[o]=r,n=!0):e.hasOwnProperty(o)&&typeof e[o]=="object"&&overrideObject(e[o],t,r)&&(n=!0);return n},jsonOverride=(e,t)=>{const r=JSON.parse;JSON.parse=(...n)=>{const o=r.apply(this,n);return overrideObject(o,e,t),o},Response.prototype.json=new Proxy(Response.prototype.json,{async apply(...n){const o=await Reflect.apply(...n);return overrideObject(o,e,t),o}})};jsonOverride("adPlacements",[]),jsonOverride("playerAds",[]),hideElements(),hideDynamicAds(),autoSkipAds(),observeDomChanges(()=>{hideDynamicAds(),autoSkipAds()});
`;Vt.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(r,{frame:n})=>{n.once("dom-ready",()=>{!b.store.plugins?.YoutubeAdblock?.enabled||(n.url.includes("youtube.com/embed/")||n.url.includes("discordsays")&&n.url.includes("youtube.com"))&&n.executeJavaScript(Lt)})})});var Nt={AppleMusicRichPresence:Ge,ConsoleShortcuts:Le,FixSpotifyEmbeds:It,FixYoutubeEmbeds:Ot,OpenInApp:Ze,Translate:Fe,VoiceMessages:We,XSOverlay:je,YoutubeAdblock:Ut};var Zt={};for(let[e,t]of Object.entries(Nt)){let r=Object.entries(t);if(!r.length)continue;let n=Zt[e]={};for(let[i,a]of r){let o=`VencordPluginNative_${e}_${i}`;He.ipcMain.handle(o,a),n[i]=o}}He.ipcMain.on("VencordGetPluginIpcMethodMap",e=>{e.returnValue=Zt});c();ae();var g=require("electron");c();var Ft="PCFkb2N0eXBlIGh0bWw+PGh0bWwgbGFuZz0iZW4iPjxoZWFkPjxtZXRhIGNoYXJzZXQ9InV0Zi04Ij48dGl0bGU+VmVuY29yZCBRdWlja0NTUyBFZGl0b3I8L3RpdGxlPjxsaW5rIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0iaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9tb25hY28tZWRpdG9yQDAuNTAuMC9taW4vdnMvZWRpdG9yL2VkaXRvci5tYWluLmNzcyIgaW50ZWdyaXR5PSJzaGEyNTYtdGlKUFEyTzA0ei9wWi9Bd2R5SWdock9NemV3ZitQSXZFbDFZS2JRdnNaaz0iIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciI+PHN0eWxlPiNjb250YWluZXIsYm9keSxodG1se3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO21hcmdpbjowO3BhZGRpbmc6MDtvdmVyZmxvdzpoaWRkZW59PC9zdHlsZT48L2hlYWQ+PGJvZHk+PGRpdiBpZD0iY29udGFpbmVyIj48L2Rpdj48c2NyaXB0IHNyYz0iaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9tb25hY28tZWRpdG9yQDAuNTAuMC9taW4vdnMvbG9hZGVyLmpzIiBpbnRlZ3JpdHk9InNoYTI1Ni1LY1U0OFRHcjg0cjd1bkY3SjVJZ0JvOTVhZVZyRWJyR2UwNFM3VGNGVWpzPSIgY3Jvc3NvcmlnaW49ImFub255bW91cyIgcmVmZXJyZXJwb2xpY3k9Im5vLXJlZmVycmVyIj48L3NjcmlwdD48c2NyaXB0PnJlcXVpcmUuY29uZmlnKHtwYXRoczp7dnM6Imh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vbW9uYWNvLWVkaXRvckAwLjUwLjAvbWluL3ZzIn19KSxyZXF1aXJlKFsidnMvZWRpdG9yL2VkaXRvci5tYWluIl0sKCgpPT57Z2V0Q3VycmVudENzcygpLnRoZW4oKGU9Pnt2YXIgdD1tb25hY28uZWRpdG9yLmNyZWF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiY29udGFpbmVyIikse3ZhbHVlOmUsbGFuZ3VhZ2U6ImNzcyIsdGhlbWU6Z2V0VGhlbWUoKX0pO3Qub25EaWRDaGFuZ2VNb2RlbENvbnRlbnQoKCgpPT5zZXRDc3ModC5nZXRWYWx1ZSgpKSkpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCJyZXNpemUiLCgoKT0+e3QubGF5b3V0KCl9KSl9KSl9KSk8L3NjcmlwdD48L2JvZHk+PC9odG1sPg==";var he=require("fs"),ee=require("fs/promises"),Q=require("path");c();var Hr=/[^\S\r\n]*?\r?(?:\r\n|\n)[^\S\r\n]*?\*[^\S\r\n]?/,Br=/^\\@/;function Be(e,t={}){return{fileName:e,name:t.name??e.replace(/\.css$/i,""),author:t.author??"Unknown Author",description:t.description??"A Discord Theme.",version:t.version,license:t.license,source:t.source,website:t.website,invite:t.invite}}function Wt(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function jt(e,t){if(!e)return Be(t);let r=e.split("/**",2)?.[1]?.split("*/",1)?.[0];if(!r)return Be(t);let n={},i="",a="";for(let o of r.split(Hr))if(o.length!==0)if(o.charAt(0)==="@"&&o.charAt(1)!==" "){n[i]=a.trim();let s=o.indexOf(" ");i=o.substring(1,s),a=o.substring(s+1)}else a+=" "+o.replace("\\n",`
`).replace(Br,"@");return n[i]=a.trim(),delete n[""],Be(t,n)}c();var Ht=require("electron");function Bt(e){e.webContents.setWindowOpenHandler(({url:t})=>{switch(t){case"about:blank":case"https://discord.com/popout":case"https://ptb.discord.com/popout":case"https://canary.discord.com/popout":return{action:"allow"}}try{var{protocol:r}=new URL(t)}catch{return{action:"deny"}}switch(r){case"http:":case"https:":case"mailto:":case"steam:":case"spotify:":Ht.shell.openExternal(t)}return{action:"deny"}})}(0,he.mkdirSync)(N,{recursive:!0});function Ke(e,t){let r=(0,Q.normalize)(e),n=(0,Q.join)(e,t),i=(0,Q.normalize)(n);return i.startsWith(r)?i:null}function Kr(){return(0,ee.readFile)(ye,"utf-8").catch(()=>"")}async function Yr(){let e=await(0,ee.readdir)(N).catch(()=>[]),t=[];for(let r of e){if(!r.endsWith(".css"))continue;let n=await Kt(r).then(Wt).catch(()=>null);n!=null&&t.push(jt(n,r))}return t}function Kt(e){e=e.replace(/\?v=\d+$/,"");let t=Ke(N,e);return t?(0,ee.readFile)(t,"utf-8"):Promise.reject(`Unsafe path ${e}`)}g.ipcMain.handle("VencordOpenQuickCss",()=>g.shell.openPath(ye));g.ipcMain.handle("VencordOpenExternal",(e,t)=>{try{var{protocol:r}=new URL(t)}catch{throw"Malformed URL"}if(!Et.includes(r))throw"Disallowed protocol.";g.shell.openExternal(t)});g.ipcMain.handle("VencordGetQuickCss",()=>Kr());g.ipcMain.handle("VencordSetQuickCss",(e,t)=>(0,he.writeFileSync)(ye,t));g.ipcMain.handle("VencordGetThemesDir",()=>N);g.ipcMain.handle("VencordGetThemesList",()=>Yr());g.ipcMain.handle("VencordGetThemeData",(e,t)=>Kt(t));g.ipcMain.handle("VencordGetThemeSystemValues",()=>({"os-accent-color":`#${g.systemPreferences.getAccentColor?.()||""}`}));g.ipcMain.handle("VencordOpenMonacoEditor",async()=>{let e="Vencord QuickCSS Editor",t=g.BrowserWindow.getAllWindows().find(n=>n.title===e);if(t&&!t.isDestroyed()){t.focus();return}let r=new g.BrowserWindow({title:e,autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,Q.join)(__dirname,"vencordDesktopPreload.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!1}});Bt(r),await r.loadURL(`data:text/html;base64,${Ft}`)});c();var pr=require("electron");c();var Jt=require("module"),$r=(0,Jt.createRequire)("/"),xe,Jr=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{xe=$r("worker_threads").Worker}catch{}var Xr=xe?function(e,t,r,n,i){var a=!1,o=new xe(e+Jr,{eval:!0}).on("error",function(s){return i(s,null)}).on("message",function(s){return i(null,s)}).on("exit",function(s){s&&!a&&i(new Error("exited with code "+s),null)});return o.postMessage(r,n),o.terminate=function(){return a=!0,xe.prototype.terminate.call(o)},o}:function(e,t,r,n,i){setImmediate(function(){return i(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var a=function(){};return{terminate:a,postMessage:a}},x=Uint8Array,F=Uint16Array,Xt=Int32Array,Je=new x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Xe=new x([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),qt=new x([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Qt=function(e,t){for(var r=new F(31),n=0;n<31;++n)r[n]=t+=1<<e[n-1];for(var i=new Xt(r[30]),n=1;n<30;++n)for(var a=r[n];a<r[n+1];++a)i[a]=a-r[n]<<5|n;return{b:r,r:i}},er=Qt(Je,2),qe=er.b,qr=er.r;qe[28]=258,qr[258]=28;var tr=Qt(Xe,0),rr=tr.b,Ni=tr.r,De=new F(32768);for(v=0;v<32768;++v)z=(v&43690)>>1|(v&21845)<<1,z=(z&52428)>>2|(z&13107)<<2,z=(z&61680)>>4|(z&3855)<<4,De[v]=((z&65280)>>8|(z&255)<<8)>>1;var z,v,te=function(e,t,r){for(var n=e.length,i=0,a=new F(t);i<n;++i)e[i]&&++a[e[i]-1];var o=new F(t);for(i=1;i<t;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(r){s=new F(1<<t);var u=15-t;for(i=0;i<n;++i)if(e[i])for(var d=i<<4|e[i],f=t-e[i],l=o[e[i]-1]++<<f,m=l|(1<<f)-1;l<=m;++l)s[De[l]>>u]=d}else for(s=new F(n),i=0;i<n;++i)e[i]&&(s[i]=De[o[e[i]-1]++]>>15-e[i]);return s},pe=new x(288);for(v=0;v<144;++v)pe[v]=8;var v;for(v=144;v<256;++v)pe[v]=9;var v;for(v=256;v<280;++v)pe[v]=7;var v;for(v=280;v<288;++v)pe[v]=8;var v,nr=new x(32);for(v=0;v<32;++v)nr[v]=5;var v;var ir=te(pe,9,1);var or=te(nr,5,1),Te=function(e){for(var t=e[0],r=1;r<e.length;++r)e[r]>t&&(t=e[r]);return t},R=function(e,t,r){var n=t/8|0;return(e[n]|e[n+1]<<8)>>(t&7)&r},Ee=function(e,t){var r=t/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(t&7)},ar=function(e){return(e+7)/8|0},be=function(e,t,r){return(t==null||t<0)&&(t=0),(r==null||r>e.length)&&(r=e.length),new x(e.subarray(t,r))};var sr=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],S=function(e,t,r){var n=new Error(t||sr[e]);if(n.code=e,Error.captureStackTrace&&Error.captureStackTrace(n,S),!r)throw n;return n},cr=function(e,t,r,n){var i=e.length,a=n?n.length:0;if(!i||t.f&&!t.l)return r||new x(0);var o=!r,s=o||t.i!=2,u=t.i;o&&(r=new x(i*3));var d=function(ot){var at=r.length;if(ot>at){var st=new x(Math.max(at*2,ot));st.set(r),r=st}},f=t.f||0,l=t.p||0,m=t.b||0,P=t.l,j=t.d,C=t.m,T=t.n,E=i*8;do{if(!P){f=R(e,l,1);var M=R(e,l+1,3);if(l+=3,M)if(M==1)P=ir,j=or,C=9,T=5;else if(M==2){var ne=R(e,l,31)+257,de=R(e,l+10,15)+4,U=ne+R(e,l+5,31)+1;l+=14;for(var D=new x(U),B=new x(19),y=0;y<de;++y)B[qt[y]]=R(e,l+y*3,7);l+=de*3;for(var ie=Te(B),gr=(1<<ie)-1,yr=te(B,ie,1),y=0;y<U;){var et=yr[R(e,l,gr)];l+=et&15;var w=et>>4;if(w<16)D[y++]=w;else{var K=0,ve=0;for(w==16?(ve=3+R(e,l,3),l+=2,K=D[y-1]):w==17?(ve=3+R(e,l,7),l+=3):w==18&&(ve=11+R(e,l,127),l+=7);ve--;)D[y++]=K}}var tt=D.subarray(0,ne),G=D.subarray(ne);C=Te(tt),T=Te(G),P=te(tt,C,1),j=te(G,T,1)}else S(1);else{var w=ar(l)+4,_=e[w-4]|e[w-3]<<8,H=w+_;if(H>i){u&&S(0);break}s&&d(m+_),r.set(e.subarray(w,H),m),t.b=m+=_,t.p=l=H*8,t.f=f;continue}if(l>E){u&&S(0);break}}s&&d(m+131072);for(var wr=(1<<C)-1,Sr=(1<<T)-1,Re=l;;Re=l){var K=P[Ee(e,l)&wr],Y=K>>4;if(l+=K&15,l>E){u&&S(0);break}if(K||S(2),Y<256)r[m++]=Y;else if(Y==256){Re=l,P=null;break}else{var rt=Y-254;if(Y>264){var y=Y-257,oe=Je[y];rt=R(e,l,(1<<oe)-1)+qe[y],l+=oe}var Ae=j[Ee(e,l)&Sr],Ie=Ae>>4;Ae||S(3),l+=Ae&15;var G=rr[Ie];if(Ie>3){var oe=Xe[Ie];G+=Ee(e,l)&(1<<oe)-1,l+=oe}if(l>E){u&&S(0);break}s&&d(m+131072);var nt=m+rt;if(m<G){var it=a-G,xr=Math.min(G,nt);for(it+m<0&&S(3);m<xr;++m)r[m]=n[it+m]}for(;m<nt;++m)r[m]=r[m-G]}}t.l=P,t.p=Re,t.b=m,t.f=f,P&&(f=1,t.m=C,t.d=j,t.n=T)}while(!f);return m!=r.length&&o?be(r,0,m):r.subarray(0,m)};var Qr=new x(0);var en=function(e,t){var r={};for(var n in e)r[n]=e[n];for(var n in t)r[n]=t[n];return r},Yt=function(e,t,r){for(var n=e(),i=e.toString(),a=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),o=0;o<n.length;++o){var s=n[o],u=a[o];if(typeof s=="function"){t+=";"+u+"=";var d=s.toString();if(s.prototype)if(d.indexOf("[native code]")!=-1){var f=d.indexOf(" ",8)+1;t+=d.slice(f,d.indexOf("(",f))}else{t+=d;for(var l in s.prototype)t+=";"+u+".prototype."+l+"="+s.prototype[l].toString()}else t+=d}else r[u]=s}return t},Se=[],tn=function(e){var t=[];for(var r in e)e[r].buffer&&t.push((e[r]=new e[r].constructor(e[r])).buffer);return t},rn=function(e,t,r,n){if(!Se[r]){for(var i="",a={},o=e.length-1,s=0;s<o;++s)i=Yt(e[s],i,a);Se[r]={c:Yt(e[o],i,a),e:a}}var u=en({},Se[r].e);return Xr(Se[r].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+t.toString()+"}",r,u,tn(u),n)},nn=function(){return[x,F,Xt,Je,Xe,qt,qe,rr,ir,or,De,sr,te,Te,R,Ee,ar,be,S,cr,Qe,lr,ur]};var lr=function(e){return postMessage(e,[e.buffer])},ur=function(e){return e&&{out:e.size&&new x(e.size),dictionary:e.dictionary}},on=function(e,t,r,n,i,a){var o=rn(r,n,i,function(s,u){o.terminate(),a(s,u)});return o.postMessage([e,t],t.consume?[e.buffer]:[]),function(){o.terminate()}};var O=function(e,t){return e[t]|e[t+1]<<8},I=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},Ye=function(e,t){return I(e,t)+I(e,t+4)*4294967296};function an(e,t,r){return r||(r=t,t={}),typeof r!="function"&&S(7),on(e,t,[nn],function(n){return lr(Qe(n.data[0],ur(n.data[1])))},1,r)}function Qe(e,t){return cr(e,{i:2},t&&t.out,t&&t.dictionary)}var $e=typeof TextDecoder<"u"&&new TextDecoder,sn=0;try{$e.decode(Qr,{stream:!0}),sn=1}catch{}var cn=function(e){for(var t="",r=0;;){var n=e[r++],i=(n>127)+(n>223)+(n>239);if(r+i>e.length)return{s:t,r:be(e,r-1)};i?i==3?(n=((n&15)<<18|(e[r++]&63)<<12|(e[r++]&63)<<6|e[r++]&63)-65536,t+=String.fromCharCode(55296|n>>10,56320|n&1023)):i&1?t+=String.fromCharCode((n&31)<<6|e[r++]&63):t+=String.fromCharCode((n&15)<<12|(e[r++]&63)<<6|e[r++]&63):t+=String.fromCharCode(n)}};function ln(e,t){if(t){for(var r="",n=0;n<e.length;n+=16384)r+=String.fromCharCode.apply(null,e.subarray(n,n+16384));return r}else{if($e)return $e.decode(e);var i=cn(e),a=i.s,r=i.r;return r.length&&S(8),a}}var un=function(e,t){return t+30+O(e,t+26)+O(e,t+28)},fn=function(e,t,r){var n=O(e,t+28),i=ln(e.subarray(t+46,t+46+n),!(O(e,t+8)&2048)),a=t+46+n,o=I(e,t+20),s=r&&o==4294967295?hn(e,a):[o,I(e,t+24),I(e,t+42)],u=s[0],d=s[1],f=s[2];return[O(e,t+10),u,d,i,a+O(e,t+30)+O(e,t+32),f]},hn=function(e,t){for(;O(e,t)!=1;t+=4+O(e,t+2));return[Ye(e,t+12),Ye(e,t+4),Ye(e,t+20)]};var $t=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(e){e()};function fr(e,t,r){r||(r=t,t={}),typeof r!="function"&&S(7);var n=[],i=function(){for(var T=0;T<n.length;++T)n[T]()},a={},o=function(T,E){$t(function(){r(T,E)})};$t(function(){o=r});for(var s=e.length-22;I(e,s)!=101010256;--s)if(!s||e.length-s>65558)return o(S(13,0,1),null),i;var u=O(e,s+8);if(u){var d=u,f=I(e,s+16),l=f==4294967295||d==65535;if(l){var m=I(e,s-12);l=I(e,m)==101075792,l&&(d=u=I(e,m+32),f=I(e,m+48))}for(var P=t&&t.filter,j=function(T){var E=fn(e,f,l),M=E[0],w=E[1],_=E[2],H=E[3],ne=E[4],de=E[5],U=un(e,de);f=ne;var D=function(y,ie){y?(i(),o(y,null)):(ie&&(a[H]=ie),--u||o(null,a))};if(!P||P({name:H,size:w,originalSize:_,compression:M}))if(!M)D(null,be(e,U,U+w));else if(M==8){var B=e.subarray(U,U+w);if(_<524288||w>.8*_)try{D(null,Qe(B,{out:new x(_)}))}catch(y){D(y,null)}else n.push(an(B,{size:_},D))}else D(S(14,"unknown compression type "+M,1),null);else D(null,null)},C=0;C<d;++C)j(C)}else o(null,{});return i}var dr=require("fs"),k=require("fs/promises"),re=require("path");c();function hr(e){function t(o,s,u,d){let f=0;return f+=o<<0,f+=s<<8,f+=u<<16,f+=d<<24>>>0,f}if(e[0]===80&&e[1]===75&&e[2]===3&&e[3]===4)return e;if(e[0]!==67||e[1]!==114||e[2]!==50||e[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let r=e[4]===3,n=e[4]===2;if(!n&&!r||e[5]||e[6]||e[7])throw new Error("Unexpected crx format version number.");if(n){let o=t(e[8],e[9],e[10],e[11]),s=t(e[12],e[13],e[14],e[15]),u=16+o+s;return e.subarray(u,e.length)}let a=12+t(e[8],e[9],e[10],e[11]);return e.subarray(a,e.length)}Pe();var pn=(0,re.join)(ge,"ExtensionCache");async function dn(e,t){return await(0,k.mkdir)(t,{recursive:!0}),new Promise((r,n)=>{fr(e,(i,a)=>{if(i)return void n(i);Promise.all(Object.keys(a).map(async o=>{if(o.startsWith("_metadata/"))return;if(o.endsWith("/"))return void(0,k.mkdir)((0,re.join)(t,o),{recursive:!0});let s=o.split("/"),u=s.pop(),d=s.join("/"),f=(0,re.join)(t,d);d&&await(0,k.mkdir)(f,{recursive:!0}),await(0,k.writeFile)((0,re.join)(f,u),a[o])})).then(()=>r()).catch(o=>{(0,k.rm)(t,{recursive:!0,force:!0}),n(o)})})})}async function vr(e){let t=(0,re.join)(pn,`${e}`);try{await(0,k.access)(t,dr.constants.F_OK)}catch{let n=e==="fmkadmapgofadopljbjfkapdkoienihi"?"https://raw.githubusercontent.com/Vendicated/random-files/f6f550e4c58ac5f2012095a130406c2ab25b984d/fmkadmapgofadopljbjfkapdkoienihi.zip":`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${e}%26uc&prodversion=32`,i=await J(n,{headers:{"User-Agent":"Vencord (https://github.com/Vendicated/Vencord)"}});await dn(hr(i),t).catch(console.error)}pr.session.defaultSession.loadExtension(t)}W.app.whenReady().then(()=>{W.protocol.registerFileProtocol("vencord",({url:i},a)=>{let o=i.slice(10);if(o.endsWith("/")&&(o=o.slice(0,-1)),o.startsWith("/themes/")){let s=o.slice(8),u=Ke(N,s);if(!u){a({statusCode:403});return}a(u.replace(/\?v=\d+$/,""));return}switch(o){case"renderer.js.map":case"vencordDesktopRenderer.js.map":case"preload.js.map":case"vencordDesktopPreload.js.map":case"patcher.js.map":case"vencordDesktopMain.js.map":a((0,mr.join)(__dirname,o));break;default:a({statusCode:403})}});try{b.store.enableReactDevtools&&vr("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(i=>console.error("[Vencord] Failed to install React Developer Tools",i))}catch{}let e=(i,a)=>Object.keys(i).find(o=>o.toLowerCase()===a),t=i=>{let a={};return i.split(";").forEach(o=>{let[s,...u]=o.trim().split(/\s+/g);s&&!Object.prototype.hasOwnProperty.call(a,s)&&(a[s]=u)}),a},r=i=>Object.entries(i).filter(([,a])=>a?.length).map(a=>a.flat().join(" ")).join("; "),n=i=>{let a=e(i,"content-security-policy");if(a){let o=t(i[a][0]);for(let s of["style-src","connect-src","img-src","font-src","media-src","worker-src"])o[s]??=[],o[s].push("*","blob:","data:","vencord:","'unsafe-inline'");o["script-src"]??=[],o["script-src"].push("'unsafe-eval'","https://unpkg.com","https://cdnjs.cloudflare.com"),i[a]=[r(o)]}};W.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:i,resourceType:a},o)=>{if(i&&(a==="mainFrame"&&n(i),a==="stylesheet")){let s=e(i,"content-type");s&&(i[s]=["text/css"])}o({cancel:!1,responseHeaders:i})}),W.session.defaultSession.webRequest.onHeadersReceived=()=>{}});
//# sourceURL=VencordDesktopMain
//# sourceMappingURL=vencord://vencordDesktopMain.js.map
/*! For license information please see vencordDesktopMain.js.LEGAL.txt */
