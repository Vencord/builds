// Vencord a9d44e3
// Standalone: true
// Platform: Universal
// Updater Disabled: false
"use strict";var sn=Object.create;var Ee=Object.defineProperty;var cn=Object.getOwnPropertyDescriptor;var ln=Object.getOwnPropertyNames;var un=Object.getPrototypeOf,fn=Object.prototype.hasOwnProperty;var d=(e,t)=>()=>(e&&(t=e(e=0)),t);var re=(e,t)=>{for(var r in t)Ee(e,r,{get:t[r],enumerable:!0})},St=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of ln(t))!fn.call(e,i)&&i!==r&&Ee(e,i,{get:()=>t[i],enumerable:!(n=cn(t,i))||n.enumerable});return e};var Ve=(e,t,r)=>(r=e!=null?sn(un(e)):{},St(t||!e||!e.__esModule?Ee(r,"default",{value:e,enumerable:!0}):r,e)),Ne=e=>St(Ee({},"__esModule",{value:!0}),e);var c=d(()=>{"use strict"});function ne(e,t={}){return new Promise((r,n)=>{xt.default.get(e,t,i=>{let{statusCode:o,statusMessage:a,headers:s}=i;if(o>=400)return void n(`${o}: ${a} - ${e}`);if(o>=300)return void r(ne(s.location,t));let u=[];i.on("error",n),i.on("data",m=>u.push(m)),i.once("end",()=>r(Buffer.concat(u)))})})}var xt,ze=d(()=>{"use strict";c();xt=Ve(require("https"))});var de=d(()=>{"use strict";c()});var me,Ue=d(()=>{c();me="a9d44e3"});var ie,Ge=d(()=>{c();ie="Vendicated/Vencord"});var Tt,Et=d(()=>{"use strict";c();Ue();Ge();Tt=`Vencord/${me}${ie?` (https://github.com/${ie})`:""}`});function ve(e){return async function(){try{return{ok:!0,value:await e(...arguments)}}catch(t){return{ok:!1,error:t instanceof Error?{...t}:t}}}}var Dt,bt=d(()=>{"use strict";c();Dt=["patcher.js","preload.js","renderer.js","renderer.css"]});var mn={};async function At(e){return ne(hn+e,{headers:{Accept:"application/vnd.github+json","User-Agent":Tt}})}async function pn(){if(!await Rt())return[];let t=await At(`/compare/${me}...HEAD`);return JSON.parse(t.toString("utf-8")).commits.map(n=>({hash:n.sha.slice(0,7),author:n.author.login,message:n.commit.message.split(`
`)[0]}))}async function Rt(){let e=await At("/releases/latest"),t=JSON.parse(e.toString());return t.name.slice(t.name.lastIndexOf(" ")+1)===me?!1:(t.assets.forEach(({name:n,browser_download_url:i})=>{Dt.some(o=>n.startsWith(o))&&We.push([n,i])}),!0)}async function dn(){return await Promise.all(We.map(async([e,t])=>(0,Pt.writeFile)((0,It.join)(__dirname,e),await ne(t)))),We=[],!0}var ge,Pt,It,hn,We,Ot=d(()=>{"use strict";c();ze();de();Et();ge=require("electron"),Pt=require("fs/promises"),It=require("path");Ue();Ge();bt();hn=`https://api.github.com/repos/${ie}`,We=[];ge.ipcMain.handle("VencordGetRepo",ve(()=>`https://github.com/${ie}`));ge.ipcMain.handle("VencordGetUpdates",ve(pn));ge.ipcMain.handle("VencordUpdate",ve(Rt));ge.ipcMain.handle("VencordBuild",ve(dn))});var _t=d(()=>{"use strict";c();Ot()});var He={};re(He,{fetchTrackData:()=>Sn});async function je(e){let{stdout:t}=await Lt("osascript",e.map(r=>["-e",r]).flat());return t}async function wn({id:e,name:t,artist:r,album:n}){if(e===_?.id){if("data"in _)return _.data;if("failures"in _&&_.failures>=5)return null}try{let i=new URL("https://amp-api-edge.music.apple.com/v1/catalog/us/search");i.searchParams.set("platform","web"),i.searchParams.set("l","en-US"),i.searchParams.set("limit","1"),i.searchParams.set("with","serverBubbles"),i.searchParams.set("types","songs"),i.searchParams.set("term",`${t} ${r} ${n}`),i.searchParams.set("include[songs]","artists");let o=await yn(),a=await fetch(i,{headers:{accept:"*/*","accept-language":"en-US,en;q=0.9",authorization:`Bearer ${o}`,"user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",origin:"https://music.apple.com"}}).then(s=>s.json()).then(s=>s.results.song.data[0]);return _={id:e,data:{appleMusicLink:a.attributes.url,songLink:`https://song.link/i/${a.id}`,albumArtwork:a.attributes.artwork.url.replace("{w}x{h}","512x512"),artistArtwork:a.relationships.artists.data[0].attributes.artwork.url.replace("{w}x{h}","512x512")}},_.data}catch(i){return console.error("[AppleMusicRichPresence] Failed to fetch remote data:",i),_={id:e,failures:(e===_?.id&&"failures"in _?_.failures:0)+1},null}}async function Sn(){try{await Lt("pgrep",["^Music$"])}catch{return null}if(await je(['tell application "Music"',"get player state","end tell"]).then(p=>p.trim())!=="playing")return null;let t=await je(['tell application "Music"',"get player position","end tell"]).then(p=>Number.parseFloat(p.trim())),r=await je(['set output to ""','tell application "Music"',"set t_id to database id of current track","set t_name to name of current track","set t_album to album of current track","set t_artist to artist of current track","set t_duration to duration of current track",'set output to "" & t_id & "\\n" & t_name & "\\n" & t_album & "\\n" & t_artist & "\\n" & t_duration',"end tell","return output"]),[n,i,o,a,s]=r.split(`
`).filter(p=>!!p),u=Number.parseFloat(s),m=await wn({id:n,name:i,artist:a,album:o});return{name:i,album:o,artist:a,playerPosition:t,duration:u,...m}}var kt,Ct,Lt,_,vn,gn,Ze,yn,Mt=d(()=>{"use strict";c();kt=require("child_process"),Ct=require("util"),Lt=(0,Ct.promisify)(kt.execFile);_=null,vn=/<script type="module" crossorigin src="([a-zA-Z0-9.\-/]+)"><\/script>/,gn=/\w+="([A-Za-z0-9-_]*\.[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*)",\w+="x-apple-jingle-correlation-key"/,yn=async()=>{if(Ze)return Ze;let e=await fetch("https://music.apple.com/").then(i=>i.text()),t=new URL(e.match(vn)[1],"https://music.apple.com/"),n=(await fetch(t).then(i=>i.text())).match(gn)[1];return Ze=n,n}});var Be={};re(Be,{initDevtoolsOpenEagerLoad:()=>xn});function xn(e){let t=()=>e.sender.executeJavaScript("Vencord.Plugins.plugins.ConsoleShortcuts.eagerLoad(true)");e.sender.isDevToolsOpened()?t():e.sender.once("devtools-opened",()=>t())}var Vt=d(()=>{"use strict";c()});var ye,Nt=d(()=>{"use strict";c();ye=class{pathListeners=new Map;globalListeners=new Set;constructor(t,r={}){this.plain=t,this.store=this.makeProxy(t),Object.assign(this,r)}makeProxy(t,r=t,n=""){let i=this;return new Proxy(t,{get(o,a){let s=o[a];return!(a in o)&&i.getDefaultValue&&(s=i.getDefaultValue({target:o,key:a,root:r,path:n})),typeof s=="object"&&s!==null&&!Array.isArray(s)?i.makeProxy(s,r,`${n}${n&&"."}${a}`):s},set(o,a,s){if(o[a]===s)return!0;Reflect.set(o,a,s);let u=`${n}${n&&"."}${a}`;return i.globalListeners.forEach(m=>m(s,u)),i.pathListeners.get(u)?.forEach(m=>m(s)),!0}})}setData(t,r){if(this.readOnly)throw new Error("SettingsStore is read-only");if(this.plain=t,this.store=this.makeProxy(t),r){let n=t,i=r.split(".");for(let o of i){if(!n){console.warn(`Settings#setData: Path ${r} does not exist in new data. Not dispatching update`);return}n=n[o]}this.pathListeners.get(r)?.forEach(o=>o(n))}this.markAsChanged()}addGlobalChangeListener(t){this.globalListeners.add(t)}addChangeListener(t,r){let n=this.pathListeners.get(t)??new Set;n.add(r),this.pathListeners.set(t,n)}removeGlobalChangeListener(t){this.globalListeners.delete(t)}removeChangeListener(t,r){let n=this.pathListeners.get(t);!n||(n.delete(r),n.size||this.pathListeners.delete(t))}markAsChanged(){this.globalListeners.forEach(t=>t(this.plain,""))}}});function Ke(e,t){for(let r in t){let n=t[r];typeof n=="object"&&!Array.isArray(n)?(e[r]??={},Ke(e[r],n)):e[r]??=n}return e}var zt=d(()=>{"use strict";c()});var Ut,W,De,oe,F,ae,Ye,qe,Gt,be,se=d(()=>{"use strict";c();Ut=require("electron"),W=require("path"),De=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,W.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,W.join)(Ut.app.getPath("userData"),"..","Vencord")),oe=(0,W.join)(De,"settings"),F=(0,W.join)(De,"themes"),ae=(0,W.join)(oe,"quickCss.css"),Ye=(0,W.join)(oe,"settings.json"),qe=(0,W.join)(oe,"native-settings.json"),Gt=["https:","http:","steam:","spotify:","com.epicgames.launcher:","tidal:","itunes:"],be=process.argv.includes("--vanilla")});function Ft(e,t){try{return JSON.parse((0,H.readFileSync)(t,"utf-8"))}catch(r){return r?.code!=="ENOENT"&&console.error(`Failed to read ${e} settings`,r),{}}}var Pe,H,D,Tn,jt,Wt,B=d(()=>{"use strict";c();de();Nt();zt();Pe=require("electron"),H=require("fs");se();(0,H.mkdirSync)(oe,{recursive:!0});D=new ye(Ft("renderer",Ye));D.addGlobalChangeListener(()=>{try{(0,H.writeFileSync)(Ye,JSON.stringify(D.plain,null,4))}catch(e){console.error("Failed to write renderer settings",e)}});Pe.ipcMain.handle("VencordGetSettingsDir",()=>oe);Pe.ipcMain.on("VencordGetSettings",e=>e.returnValue=D.plain);Pe.ipcMain.handle("VencordSetSettings",(e,t,r)=>{D.setData(t,r)});Tn={plugins:{}},jt=Ft("native",qe);Ke(jt,Tn);Wt=new ye(jt);Wt.addGlobalChangeListener(()=>{try{(0,H.writeFileSync)(qe,JSON.stringify(Wt.plain,null,4))}catch(e){console.error("Failed to write native settings",e)}})});var Ht={};var Zt,Bt=d(()=>{"use strict";c();B();Zt=require("electron");Zt.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(r,{frame:n})=>{n.once("dom-ready",()=>{if(n.url.startsWith("https://open.spotify.com/embed/")){let i=D.store.plugins?.FixSpotifyEmbeds;if(!i?.enabled)return;n.executeJavaScript(`
                    const original = Audio.prototype.play;
                    Audio.prototype.play = function() {
                        this.volume = ${i.volume/100||.1};
                        return original.apply(this, arguments);
                    }
                `)}})})})});var Yt={};var Kt,qt=d(()=>{"use strict";c();B();Kt=require("electron");Kt.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(r,{frame:n})=>{n.once("dom-ready",()=>{if(n.url.startsWith("https://www.youtube.com/")){if(!D.store.plugins?.FixYoutubeEmbeds?.enabled)return;n.executeJavaScript(`
                new MutationObserver(() => {
                    if(
                        document.querySelector('div.ytp-error-content-wrap-subreason a[href*="www.youtube.com/watch?v="]')
                    ) location.reload()
                }).observe(document.body, { childList: true, subtree:true });
                `)}})})})});var Je={};re(Je,{resolveRedirect:()=>Dn});function $t(e){return new Promise((t,r)=>{let n=(0,Jt.request)(new URL(e),{method:"HEAD"},i=>{t(i.headers.location?$t(i.headers.location):e)});n.on("error",r),n.end()})}async function Dn(e,t){return En.test(t)?$t(t):t}var Jt,En,Xt=d(()=>{"use strict";c();Jt=require("https"),En=/^https:\/\/(spotify\.link|s\.team)\/.+$/});var $e={};re($e,{makeDeeplTranslateRequest:()=>bn});async function bn(e,t,r,n){let i=t?"https://api.deepl.com/v2/translate":"https://api-free.deepl.com/v2/translate";try{let o=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`DeepL-Auth-Key ${r}`},body:n}),a=await o.text();return{status:o.status,data:a}}catch(o){return{status:-1,data:String(o)}}}var Qt=d(()=>{"use strict";c()});var Xe={};re(Xe,{readRecording:()=>Pn});async function Pn(e,t){t=(0,we.normalize)(t);let r=(0,we.basename)(t),n=(0,we.normalize)(er.app.getPath("userData")+"/");if(console.log(r,n,t),r!=="recording.ogg"||!t.startsWith(n))return null;try{let i=await(0,tr.readFile)(t);return new Uint8Array(i.buffer)}catch{return null}}var er,tr,we,rr=d(()=>{"use strict";c();er=require("electron"),tr=require("fs/promises"),we=require("path")});var Qe={};re(Qe,{sendToOverlay:()=>In});function In(e,t){t.messageType=t.type;let r=JSON.stringify(t);nr??=(0,ir.createSocket)("udp4"),nr.send(r,42069,"127.0.0.1")}var ir,nr,or=d(()=>{"use strict";c();ir=require("dgram")});var ar,sr=d(()=>{c();ar=`"use strict";const hiddenCSS=["#__ffYoutube1","#__ffYoutube2","#__ffYoutube3","#__ffYoutube4","#feed-pyv-container","#feedmodule-PRO","#homepage-chrome-side-promo","#merch-shelf","#offer-module",'#pla-shelf > ytd-pla-shelf-renderer[class="style-scope ytd-watch"]',"#pla-shelf","#premium-yva","#promo-info","#promo-list","#promotion-shelf","#related > ytd-watch-next-secondary-results-renderer > #items > ytd-compact-promoted-video-renderer.ytd-watch-next-secondary-results-renderer","#search-pva","#shelf-pyv-container","#video-masthead","#watch-branded-actions","#watch-buy-urls","#watch-channel-brand-div","#watch7-branded-banner","#YtKevlarVisibilityIdentifier","#YtSparklesVisibilityIdentifier",".carousel-offer-url-container",".companion-ad-container",".GoogleActiveViewElement",'.list-view[style="margin: 7px 0pt;"]',".promoted-sparkles-text-search-root-container",".promoted-videos",".searchView.list-view",".sparkles-light-cta",".watch-extra-info-column",".watch-extra-info-right",".ytd-carousel-ad-renderer",".ytd-compact-promoted-video-renderer",".ytd-companion-slot-renderer",".ytd-merch-shelf-renderer",".ytd-player-legacy-desktop-watch-ads-renderer",".ytd-promoted-sparkles-text-search-renderer",".ytd-promoted-video-renderer",".ytd-search-pyv-renderer",".ytd-video-masthead-ad-v3-renderer",".ytp-ad-action-interstitial-background-container",".ytp-ad-action-interstitial-slot",".ytp-ad-image-overlay",".ytp-ad-overlay-container",".ytp-ad-progress",".ytp-ad-progress-list",'[class*="ytd-display-ad-"]','[layout*="display-ad-"]','a[href^="http://www.youtube.com/cthru?"]','a[href^="https://www.youtube.com/cthru?"]',"ytd-action-companion-ad-renderer","ytd-banner-promo-renderer","ytd-compact-promoted-video-renderer","ytd-companion-slot-renderer","ytd-display-ad-renderer","ytd-promoted-sparkles-text-search-renderer","ytd-promoted-sparkles-web-renderer","ytd-search-pyv-renderer","ytd-single-option-survey-renderer","ytd-video-masthead-ad-advertiser-info-renderer","ytd-video-masthead-ad-v3-renderer","YTM-PROMOTED-VIDEO-RENDERER"],hideElements=()=>{const e=hiddenCSS;if(!e)return;const t=e.join(", ")+" { display: none!important; }",r=document.createElement("style");r.textContent=t,document.head.appendChild(r)},observeDomChanges=e=>{new MutationObserver(r=>{e(r)}).observe(document.documentElement,{childList:!0,subtree:!0})},hideDynamicAds=()=>{const e=document.querySelectorAll("#contents > ytd-rich-item-renderer ytd-display-ad-renderer");e.length!==0&&e.forEach(t=>{if(t.parentNode&&t.parentNode.parentNode){const r=t.parentNode.parentNode;r.localName==="ytd-rich-item-renderer"&&(r.style.display="none")}})},autoSkipAds=()=>{if(document.querySelector(".ad-showing")){const e=document.querySelector("video");e&&e.duration&&(e.currentTime=e.duration,setTimeout(()=>{const t=document.querySelector("button.ytp-ad-skip-button");t&&t.click()},100))}},overrideObject=(e,t,r)=>{if(!e)return!1;let n=!1;for(const o in e)e.hasOwnProperty(o)&&o===t?(e[o]=r,n=!0):e.hasOwnProperty(o)&&typeof e[o]=="object"&&overrideObject(e[o],t,r)&&(n=!0);return n},jsonOverride=(e,t)=>{const r=JSON.parse;JSON.parse=(...n)=>{const o=r.apply(this,n);return overrideObject(o,e,t),o},Response.prototype.json=new Proxy(Response.prototype.json,{async apply(...n){const o=await Reflect.apply(...n);return overrideObject(o,e,t),o}})};jsonOverride("adPlacements",[]),jsonOverride("playerAds",[]),hideElements(),hideDynamicAds(),autoSkipAds(),observeDomChanges(()=>{hideDynamicAds(),autoSkipAds()});
`});var lr={};var cr,ur=d(()=>{"use strict";c();B();cr=require("electron");sr();cr.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(r,{frame:n})=>{n.once("dom-ready",()=>{!D.store.plugins?.YoutubeAdblock?.enabled||(n.url.includes("youtube.com/embed/")||n.url.includes("discordsays")&&n.url.includes("youtube.com"))&&n.executeJavaScript(ar)})})})});var fr,hr=d(()=>{c();Mt();Vt();Bt();qt();Xt();Qt();rr();or();ur();fr={AppleMusicRichPresence:He,ConsoleShortcuts:Be,FixSpotifyEmbeds:Ht,FixYoutubeEmbeds:Yt,OpenInApp:Je,Translate:$e,VoiceMessages:Xe,XSOverlay:Qe,YoutubeAdblock:lr}});var et,pr,dr=d(()=>{"use strict";c();de();et=require("electron");hr();pr={};for(let[e,t]of Object.entries(fr)){let r=Object.entries(t);if(!r.length)continue;let n=pr[e]={};for(let[i,o]of r){let a=`VencordPluginNative_${e}_${i}`;et.ipcMain.handle(a,o),n[i]=a}}et.ipcMain.on("VencordGetPluginIpcMethodMap",e=>{e.returnValue=pr})});function tt(e,t=300){let r;return function(...n){clearTimeout(r),r=setTimeout(()=>{e(...n)},t)}}var mr=d(()=>{"use strict";c()});var vr,gr=d(()=>{c();vr="PCFkb2N0eXBlIGh0bWw+PGh0bWwgbGFuZz0iZW4iPjxoZWFkPjxtZXRhIGNoYXJzZXQ9InV0Zi04Ij48dGl0bGU+VmVuY29yZCBRdWlja0NTUyBFZGl0b3I8L3RpdGxlPjxsaW5rIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0iaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9tb25hY28tZWRpdG9yQDAuNTAuMC9taW4vdnMvZWRpdG9yL2VkaXRvci5tYWluLmNzcyIgaW50ZWdyaXR5PSJzaGEyNTYtdGlKUFEyTzA0ei9wWi9Bd2R5SWdock9NemV3ZitQSXZFbDFZS2JRdnNaaz0iIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciI+PHN0eWxlPiNjb250YWluZXIsYm9keSxodG1se3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO21hcmdpbjowO3BhZGRpbmc6MDtvdmVyZmxvdzpoaWRkZW59PC9zdHlsZT48L2hlYWQ+PGJvZHk+PGRpdiBpZD0iY29udGFpbmVyIj48L2Rpdj48c2NyaXB0IHNyYz0iaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9tb25hY28tZWRpdG9yQDAuNTAuMC9taW4vdnMvbG9hZGVyLmpzIiBpbnRlZ3JpdHk9InNoYTI1Ni1LY1U0OFRHcjg0cjd1bkY3SjVJZ0JvOTVhZVZyRWJyR2UwNFM3VGNGVWpzPSIgY3Jvc3NvcmlnaW49ImFub255bW91cyIgcmVmZXJyZXJwb2xpY3k9Im5vLXJlZmVycmVyIj48L3NjcmlwdD48c2NyaXB0PnJlcXVpcmUuY29uZmlnKHtwYXRoczp7dnM6Imh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vbW9uYWNvLWVkaXRvckAwLjUwLjAvbWluL3ZzIn19KSxyZXF1aXJlKFsidnMvZWRpdG9yL2VkaXRvci5tYWluIl0sKCgpPT57Z2V0Q3VycmVudENzcygpLnRoZW4oKGU9Pnt2YXIgdD1tb25hY28uZWRpdG9yLmNyZWF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiY29udGFpbmVyIikse3ZhbHVlOmUsbGFuZ3VhZ2U6ImNzcyIsdGhlbWU6Z2V0VGhlbWUoKX0pO3Qub25EaWRDaGFuZ2VNb2RlbENvbnRlbnQoKCgpPT5zZXRDc3ModC5nZXRWYWx1ZSgpKSkpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCJyZXNpemUiLCgoKT0+e3QubGF5b3V0KCl9KSl9KSl9KSk8L3NjcmlwdD48L2JvZHk+PC9odG1sPg=="});function rt(e,t={}){return{fileName:e,name:t.name??e.replace(/\.css$/i,""),author:t.author??"Unknown Author",description:t.description??"A Discord Theme.",version:t.version,license:t.license,source:t.source,website:t.website,invite:t.invite}}function yr(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function wr(e,t){if(!e)return rt(t);let r=e.split("/**",2)?.[1]?.split("*/",1)?.[0];if(!r)return rt(t);let n={},i="",o="";for(let a of r.split(An))if(a.length!==0)if(a.charAt(0)==="@"&&a.charAt(1)!==" "){n[i]=o.trim();let s=a.indexOf(" ");i=a.substring(1,s),o=a.substring(s+1)}else o+=" "+a.replace("\\n",`
`).replace(Rn,"@");return n[i]=o.trim(),delete n[""],rt(t,n)}var An,Rn,Sr=d(()=>{"use strict";c();An=/[^\S\r\n]*?\r?(?:\r\n|\n)[^\S\r\n]*?\*[^\S\r\n]?/,Rn=/^\\@/});function Tr(e){e.webContents.setWindowOpenHandler(({url:t})=>{switch(t){case"about:blank":case"https://discord.com/popout":case"https://ptb.discord.com/popout":case"https://canary.discord.com/popout":return{action:"allow"}}try{var{protocol:r}=new URL(t)}catch{return{action:"deny"}}switch(r){case"http:":case"https:":case"mailto:":case"steam:":case"spotify:":xr.shell.openExternal(t)}return{action:"deny"}})}var xr,Er=d(()=>{"use strict";c();xr=require("electron")});function nt(e,t){let r=(0,ce.normalize)(e),n=(0,ce.join)(e,t),i=(0,ce.normalize)(n);return i.startsWith(r)?i:null}function Dr(){return(0,Y.readFile)(ae,"utf-8").catch(()=>"")}async function On(){let e=await(0,Y.readdir)(F).catch(()=>[]),t=[];for(let r of e){if(!r.endsWith(".css"))continue;let n=await br(r).then(yr).catch(()=>null);n!=null&&t.push(wr(n,r))}return t}function br(e){e=e.replace(/\?v=\d+$/,"");let t=nt(F,e);return t?(0,Y.readFile)(t,"utf-8"):Promise.reject(`Unsafe path ${e}`)}function Pr(e){let t;(0,Y.open)(ae,"a+").then(n=>{n.close(),t=(0,K.watch)(ae,{persistent:!1},tt(async()=>{e.webContents.postMessage("VencordQuickCssUpdate",await Dr())},50))}).catch(()=>{});let r=(0,K.watch)(F,{persistent:!1},tt(()=>{e.webContents.postMessage("VencordThemeUpdate",void 0)}));e.once("closed",()=>{t?.close(),r.close()})}var w,K,Y,ce,it=d(()=>{"use strict";c();_t();dr();B();mr();de();w=require("electron");gr();K=require("fs"),Y=require("fs/promises"),ce=require("path");Sr();se();Er();(0,K.mkdirSync)(F,{recursive:!0});w.ipcMain.handle("VencordOpenQuickCss",()=>w.shell.openPath(ae));w.ipcMain.handle("VencordOpenExternal",(e,t)=>{try{var{protocol:r}=new URL(t)}catch{throw"Malformed URL"}if(!Gt.includes(r))throw"Disallowed protocol.";w.shell.openExternal(t)});w.ipcMain.handle("VencordGetQuickCss",()=>Dr());w.ipcMain.handle("VencordSetQuickCss",(e,t)=>(0,K.writeFileSync)(ae,t));w.ipcMain.handle("VencordGetThemesDir",()=>F);w.ipcMain.handle("VencordGetThemesList",()=>On());w.ipcMain.handle("VencordGetThemeData",(e,t)=>br(t));w.ipcMain.handle("VencordGetThemeSystemValues",()=>({"os-accent-color":`#${w.systemPreferences.getAccentColor?.()||""}`}));w.ipcMain.handle("VencordOpenMonacoEditor",async()=>{let e="Vencord QuickCSS Editor",t=w.BrowserWindow.getAllWindows().find(n=>n.title===e);if(t&&!t.isDestroyed()){t.focus();return}let r=new w.BrowserWindow({title:e,autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,ce.join)(__dirname,"preload.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!1}});Tr(r),await r.loadURL(`data:text/html;base64,${vr}`)})});function qr(e,t,r){let n=t;if(t in e)return void r(e[n]);Object.defineProperty(e,t,{set(i){delete e[n],e[n]=i,r(i)},configurable:!0,enumerable:!1})}var Jr=d(()=>{"use strict";c()});var Xn={};function Jn(e,t){let r=e.slice(4).split(".").map(Number),n=t.slice(4).split(".").map(Number);for(let i=0;i<n.length;i++){if(r[i]>n[i])return!0;if(r[i]<n[i])return!1}return!1}function $n(){if(!process.env.DISABLE_UPDATER_AUTO_PATCHING)try{let e=(0,O.dirname)(process.execPath),t=(0,O.basename)(e),r=(0,O.join)(e,".."),n=(0,b.readdirSync)(r).reduce((s,u)=>u.startsWith("app-")&&Jn(u,s)?u:s,t);if(n===t)return;let i=(0,O.join)(r,n,"resources"),o=(0,O.join)(i,"app.asar"),a=(0,O.join)(i,"_app.asar");if(!(0,b.existsSync)(o)||(0,b.statSync)(o).isDirectory())return;console.info("[Vencord] Detected Host Update. Repatching..."),(0,b.renameSync)(o,a),(0,b.mkdirSync)(o),(0,b.writeFileSync)((0,O.join)(o,"package.json"),JSON.stringify({name:"discord",main:"index.js"})),(0,b.writeFileSync)((0,O.join)(o,"index.js"),`require(${JSON.stringify((0,O.join)(__dirname,"patcher.js"))});`)}catch(e){console.error("[Vencord] Failed to repatch latest host update",e)}}var $r,b,O,Xr=d(()=>{"use strict";c();$r=require("electron"),b=require("original-fs"),O=require("path");$r.app.on("before-quit",$n)});var ri={};var y,j,Qn,ei,ft,ti,Qr=d(()=>{"use strict";c();Jr();y=Ve(require("electron")),j=require("path");it();B();se();console.log("[Vencord] Starting up...");Qn=require.main.filename,ei=require.main.path.endsWith("app.asar")?"_app.asar":"app.asar",ft=(0,j.join)((0,j.dirname)(Qn),"..",ei),ti=require((0,j.join)(ft,"package.json"));require.main.filename=(0,j.join)(ft,ti.main);y.app.setAppPath(ft);if(be)console.log("[Vencord] Running in vanilla mode. Not loading Vencord");else{let e=D.store;if(process.platform==="win32"&&(Xr(),e.winCtrlQ)){let i=y.Menu.buildFromTemplate;y.Menu.buildFromTemplate=function(o){if(o[0]?.label==="&File"){let{submenu:a}=o[0];Array.isArray(a)&&a.push({label:"Quit (Hidden)",visible:!1,acceleratorWorksWhenHidden:!0,accelerator:"Control+Q",click:()=>y.app.quit()})}return i.call(this,o)}}class t extends y.default.BrowserWindow{constructor(o){if(o?.webPreferences?.preload&&o.title){let a=o.webPreferences.preload;o.webPreferences.preload=(0,j.join)(__dirname,"preload.js"),o.webPreferences.sandbox=!1,o.webPreferences.backgroundThrottling=!1,e.frameless?o.frame=!1:process.platform==="win32"&&e.winNativeTitleBar&&delete o.frame,e.transparent&&(o.transparent=!0,o.backgroundColor="#00000000"),process.platform==="darwin"&&e.macosVibrancyStyle&&(o.backgroundColor="#00000000",e.macosVibrancyStyle&&(o.vibrancy=e.macosVibrancyStyle)),process.env.DISCORD_PRELOAD=a,super(o),Pr(this),this.webContents.on("devtools-opened",()=>{!y.nativeTheme.shouldUseDarkColors||(y.nativeTheme.themeSource="light",setTimeout(()=>{y.nativeTheme.themeSource="dark"},100))})}else super(o)}}Object.assign(t,y.default.BrowserWindow),Object.defineProperty(t,"name",{value:"BrowserWindow",configurable:!0});let r=require.resolve("electron");delete require.cache[r].exports,require.cache[r].exports={...y.default,BrowserWindow:t},qr(global,"appSettings",i=>{i.set("DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING",!0),e.disableMinSize?(i.set("MIN_WIDTH",0),i.set("MIN_HEIGHT",0)):(i.set("MIN_WIDTH",940),i.set("MIN_HEIGHT",500))}),process.env.DATA_DIR=(0,j.join)(y.app.getPath("userData"),"..","Vencord");let n=y.app.commandLine.appendSwitch;y.app.commandLine.appendSwitch=function(...i){if(i[0]==="disable-features"){let o=new Set((i[1]??"").split(","));o.add("WidgetLayering"),o.add("UseEcoQoSForBackgroundProcess"),i[1]+=[...o].join(",")}return n.apply(this,i)},y.app.commandLine.appendSwitch("disable-renderer-backgrounding"),y.app.commandLine.appendSwitch("disable-background-timer-throttling"),y.app.commandLine.appendSwitch("disable-backgrounding-occluded-windows")}console.log("[Vencord] Loading original Discord app.asar");require(require.main.filename)});c();var J=require("electron"),en=require("path");it();B();se();c();var Br=require("electron");c();var Rr=require("module"),_n=(0,Rr.createRequire)("/"),Ae,kn=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{Ae=_n("worker_threads").Worker}catch{}var Cn=Ae?function(e,t,r,n,i){var o=!1,a=new Ae(e+kn,{eval:!0}).on("error",function(s){return i(s,null)}).on("message",function(s){return i(null,s)}).on("exit",function(s){s&&!o&&i(new Error("exited with code "+s),null)});return a.postMessage(r,n),a.terminate=function(){return o=!0,Ae.prototype.terminate.call(a)},a}:function(e,t,r,n,i){setImmediate(function(){return i(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var o=function(){};return{terminate:o,postMessage:o}},E=Uint8Array,q=Uint16Array,Or=Int32Array,st=new E([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ct=new E([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),_r=new E([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),kr=function(e,t){for(var r=new q(31),n=0;n<31;++n)r[n]=t+=1<<e[n-1];for(var i=new Or(r[30]),n=1;n<30;++n)for(var o=r[n];o<r[n+1];++o)i[o]=o-r[n]<<5|n;return{b:r,r:i}},Cr=kr(st,2),lt=Cr.b,Ln=Cr.r;lt[28]=258,Ln[258]=28;var Lr=kr(ct,0),Mr=Lr.b,Ao=Lr.r,_e=new q(32768);for(v=0;v<32768;++v)z=(v&43690)>>1|(v&21845)<<1,z=(z&52428)>>2|(z&13107)<<2,z=(z&61680)>>4|(z&3855)<<4,_e[v]=((z&65280)>>8|(z&255)<<8)>>1;var z,v,le=function(e,t,r){for(var n=e.length,i=0,o=new q(t);i<n;++i)e[i]&&++o[e[i]-1];var a=new q(t);for(i=1;i<t;++i)a[i]=a[i-1]+o[i-1]<<1;var s;if(r){s=new q(1<<t);var u=15-t;for(i=0;i<n;++i)if(e[i])for(var m=i<<4|e[i],p=t-e[i],l=a[e[i]-1]++<<p,g=l|(1<<p)-1;l<=g;++l)s[_e[l]>>u]=m}else for(s=new q(n),i=0;i<n;++i)e[i]&&(s[i]=_e[a[e[i]-1]++]>>15-e[i]);return s},Se=new E(288);for(v=0;v<144;++v)Se[v]=8;var v;for(v=144;v<256;++v)Se[v]=9;var v;for(v=256;v<280;++v)Se[v]=7;var v;for(v=280;v<288;++v)Se[v]=8;var v,Vr=new E(32);for(v=0;v<32;++v)Vr[v]=5;var v;var Nr=le(Se,9,1);var zr=le(Vr,5,1),Re=function(e){for(var t=e[0],r=1;r<e.length;++r)e[r]>t&&(t=e[r]);return t},R=function(e,t,r){var n=t/8|0;return(e[n]|e[n+1]<<8)>>(t&7)&r},Oe=function(e,t){var r=t/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(t&7)},Ur=function(e){return(e+7)/8|0},ke=function(e,t,r){return(t==null||t<0)&&(t=0),(r==null||r>e.length)&&(r=e.length),new E(e.subarray(t,r))};var Gr=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],T=function(e,t,r){var n=new Error(t||Gr[e]);if(n.code=e,Error.captureStackTrace&&Error.captureStackTrace(n,T),!r)throw n;return n},Wr=function(e,t,r,n){var i=e.length,o=n?n.length:0;if(!i||t.f&&!t.l)return r||new E(0);var a=!r,s=a||t.i!=2,u=t.i;a&&(r=new E(i*3));var m=function(gt){var yt=r.length;if(gt>yt){var wt=new E(Math.max(yt*2,gt));wt.set(r),r=wt}},p=t.f||0,l=t.p||0,g=t.b||0,C=t.l,$=t.d,V=t.m,P=t.n,I=i*8;do{if(!C){p=R(e,l,1);var U=R(e,l+1,3);if(l+=3,U)if(U==1)C=Nr,$=zr,V=9,P=5;else if(U==2){var fe=R(e,l,31)+257,xe=R(e,l+10,15)+4,Z=fe+R(e,l+5,31)+1;l+=14;for(var A=new E(Z),Q=new E(19),S=0;S<xe;++S)Q[_r[S]]=R(e,l+S*3,7);l+=xe*3;for(var he=Re(Q),tn=(1<<he)-1,rn=le(Q,he,1),S=0;S<Z;){var ht=rn[R(e,l,tn)];l+=ht&15;var x=ht>>4;if(x<16)A[S++]=x;else{var ee=0,Te=0;for(x==16?(Te=3+R(e,l,3),l+=2,ee=A[S-1]):x==17?(Te=3+R(e,l,7),l+=3):x==18&&(Te=11+R(e,l,127),l+=7);Te--;)A[S++]=ee}}var pt=A.subarray(0,fe),G=A.subarray(fe);V=Re(pt),P=Re(G),C=le(pt,V,1),$=le(G,P,1)}else T(1);else{var x=Ur(l)+4,N=e[x-4]|e[x-3]<<8,X=x+N;if(X>i){u&&T(0);break}s&&m(g+N),r.set(e.subarray(x,X),g),t.b=g+=N,t.p=l=X*8,t.f=p;continue}if(l>I){u&&T(0);break}}s&&m(g+131072);for(var nn=(1<<V)-1,on=(1<<P)-1,Ce=l;;Ce=l){var ee=C[Oe(e,l)&nn],te=ee>>4;if(l+=ee&15,l>I){u&&T(0);break}if(ee||T(2),te<256)r[g++]=te;else if(te==256){Ce=l,C=null;break}else{var dt=te-254;if(te>264){var S=te-257,pe=st[S];dt=R(e,l,(1<<pe)-1)+lt[S],l+=pe}var Le=$[Oe(e,l)&on],Me=Le>>4;Le||T(3),l+=Le&15;var G=Mr[Me];if(Me>3){var pe=ct[Me];G+=Oe(e,l)&(1<<pe)-1,l+=pe}if(l>I){u&&T(0);break}s&&m(g+131072);var mt=g+dt;if(g<G){var vt=o-G,an=Math.min(G,mt);for(vt+g<0&&T(3);g<an;++g)r[g]=n[vt+g]}for(;g<mt;++g)r[g]=r[g-G]}}t.l=C,t.p=Ce,t.b=g,t.f=p,C&&(p=1,t.m=V,t.d=$,t.n=P)}while(!p);return g!=r.length&&a?ke(r,0,g):r.subarray(0,g)};var Mn=new E(0);var Vn=function(e,t){var r={};for(var n in e)r[n]=e[n];for(var n in t)r[n]=t[n];return r},Ir=function(e,t,r){for(var n=e(),i=e.toString(),o=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),a=0;a<n.length;++a){var s=n[a],u=o[a];if(typeof s=="function"){t+=";"+u+"=";var m=s.toString();if(s.prototype)if(m.indexOf("[native code]")!=-1){var p=m.indexOf(" ",8)+1;t+=m.slice(p,m.indexOf("(",p))}else{t+=m;for(var l in s.prototype)t+=";"+u+".prototype."+l+"="+s.prototype[l].toString()}else t+=m}else r[u]=s}return t},Ie=[],Nn=function(e){var t=[];for(var r in e)e[r].buffer&&t.push((e[r]=new e[r].constructor(e[r])).buffer);return t},zn=function(e,t,r,n){if(!Ie[r]){for(var i="",o={},a=e.length-1,s=0;s<a;++s)i=Ir(e[s],i,o);Ie[r]={c:Ir(e[a],i,o),e:o}}var u=Vn({},Ie[r].e);return Cn(Ie[r].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+t.toString()+"}",r,u,Nn(u),n)},Un=function(){return[E,q,Or,st,ct,_r,lt,Mr,Nr,zr,_e,Gr,le,Re,R,Oe,Ur,ke,T,Wr,ut,Fr,jr]};var Fr=function(e){return postMessage(e,[e.buffer])},jr=function(e){return e&&{out:e.size&&new E(e.size),dictionary:e.dictionary}},Gn=function(e,t,r,n,i,o){var a=zn(r,n,i,function(s,u){a.terminate(),o(s,u)});return a.postMessage([e,t],t.consume?[e.buffer]:[]),function(){a.terminate()}};var L=function(e,t){return e[t]|e[t+1]<<8},k=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},ot=function(e,t){return k(e,t)+k(e,t+4)*4294967296};function Wn(e,t,r){return r||(r=t,t={}),typeof r!="function"&&T(7),Gn(e,t,[Un],function(n){return Fr(ut(n.data[0],jr(n.data[1])))},1,r)}function ut(e,t){return Wr(e,{i:2},t&&t.out,t&&t.dictionary)}var at=typeof TextDecoder<"u"&&new TextDecoder,Fn=0;try{at.decode(Mn,{stream:!0}),Fn=1}catch{}var jn=function(e){for(var t="",r=0;;){var n=e[r++],i=(n>127)+(n>223)+(n>239);if(r+i>e.length)return{s:t,r:ke(e,r-1)};i?i==3?(n=((n&15)<<18|(e[r++]&63)<<12|(e[r++]&63)<<6|e[r++]&63)-65536,t+=String.fromCharCode(55296|n>>10,56320|n&1023)):i&1?t+=String.fromCharCode((n&31)<<6|e[r++]&63):t+=String.fromCharCode((n&15)<<12|(e[r++]&63)<<6|e[r++]&63):t+=String.fromCharCode(n)}};function Zn(e,t){if(t){for(var r="",n=0;n<e.length;n+=16384)r+=String.fromCharCode.apply(null,e.subarray(n,n+16384));return r}else{if(at)return at.decode(e);var i=jn(e),o=i.s,r=i.r;return r.length&&T(8),o}}var Hn=function(e,t){return t+30+L(e,t+26)+L(e,t+28)},Bn=function(e,t,r){var n=L(e,t+28),i=Zn(e.subarray(t+46,t+46+n),!(L(e,t+8)&2048)),o=t+46+n,a=k(e,t+20),s=r&&a==4294967295?Kn(e,o):[a,k(e,t+24),k(e,t+42)],u=s[0],m=s[1],p=s[2];return[L(e,t+10),u,m,i,o+L(e,t+30)+L(e,t+32),p]},Kn=function(e,t){for(;L(e,t)!=1;t+=4+L(e,t+2));return[ot(e,t+12),ot(e,t+4),ot(e,t+20)]};var Ar=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(e){e()};function Zr(e,t,r){r||(r=t,t={}),typeof r!="function"&&T(7);var n=[],i=function(){for(var P=0;P<n.length;++P)n[P]()},o={},a=function(P,I){Ar(function(){r(P,I)})};Ar(function(){a=r});for(var s=e.length-22;k(e,s)!=101010256;--s)if(!s||e.length-s>65558)return a(T(13,0,1),null),i;var u=L(e,s+8);if(u){var m=u,p=k(e,s+16),l=p==4294967295||m==65535;if(l){var g=k(e,s-12);l=k(e,g)==101075792,l&&(m=u=k(e,g+32),p=k(e,g+48))}for(var C=t&&t.filter,$=function(P){var I=Bn(e,p,l),U=I[0],x=I[1],N=I[2],X=I[3],fe=I[4],xe=I[5],Z=Hn(e,xe);p=fe;var A=function(S,he){S?(i(),a(S,null)):(he&&(o[X]=he),--u||a(null,o))};if(!C||C({name:X,size:x,originalSize:N,compression:U}))if(!U)A(null,ke(e,Z,Z+x));else if(U==8){var Q=e.subarray(Z,Z+x);if(N<524288||x>.8*N)try{A(null,ut(Q,{out:new E(N)}))}catch(S){A(S,null)}else n.push(Wn(Q,{size:N},A))}else A(T(14,"unknown compression type "+U,1),null);else A(null,null)},V=0;V<m;++V)$(V)}else a(null,{});return i}var Kr=require("fs"),M=require("fs/promises"),ue=require("path");se();c();function Hr(e){function t(a,s,u,m){let p=0;return p+=a<<0,p+=s<<8,p+=u<<16,p+=m<<24>>>0,p}if(e[0]===80&&e[1]===75&&e[2]===3&&e[3]===4)return e;if(e[0]!==67||e[1]!==114||e[2]!==50||e[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let r=e[4]===3,n=e[4]===2;if(!n&&!r||e[5]||e[6]||e[7])throw new Error("Unexpected crx format version number.");if(n){let a=t(e[8],e[9],e[10],e[11]),s=t(e[12],e[13],e[14],e[15]),u=16+a+s;return e.subarray(u,e.length)}let o=12+t(e[8],e[9],e[10],e[11]);return e.subarray(o,e.length)}ze();var Yn=(0,ue.join)(De,"ExtensionCache");async function qn(e,t){return await(0,M.mkdir)(t,{recursive:!0}),new Promise((r,n)=>{Zr(e,(i,o)=>{if(i)return void n(i);Promise.all(Object.keys(o).map(async a=>{if(a.startsWith("_metadata/"))return;if(a.endsWith("/"))return void(0,M.mkdir)((0,ue.join)(t,a),{recursive:!0});let s=a.split("/"),u=s.pop(),m=s.join("/"),p=(0,ue.join)(t,m);m&&await(0,M.mkdir)(p,{recursive:!0}),await(0,M.writeFile)((0,ue.join)(p,u),o[a])})).then(()=>r()).catch(a=>{(0,M.rm)(t,{recursive:!0,force:!0}),n(a)})})})}async function Yr(e){let t=(0,ue.join)(Yn,`${e}`);try{await(0,M.access)(t,Kr.constants.F_OK)}catch{let n=e==="fmkadmapgofadopljbjfkapdkoienihi"?"https://raw.githubusercontent.com/Vendicated/random-files/f6f550e4c58ac5f2012095a130406c2ab25b984d/fmkadmapgofadopljbjfkapdkoienihi.zip":`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${e}%26uc&prodversion=32`,i=await ne(n,{headers:{"User-Agent":"Vencord (https://github.com/Vendicated/Vencord)"}});await qn(Hr(i),t).catch(console.error)}Br.session.defaultSession.loadExtension(t)}be||J.app.whenReady().then(()=>{J.protocol.registerFileProtocol("vencord",({url:i},o)=>{let a=i.slice(10);if(a.endsWith("/")&&(a=a.slice(0,-1)),a.startsWith("/themes/")){let s=a.slice(8),u=nt(F,s);if(!u){o({statusCode:403});return}o(u.replace(/\?v=\d+$/,""));return}switch(a){case"renderer.js.map":case"vencordDesktopRenderer.js.map":case"preload.js.map":case"vencordDesktopPreload.js.map":case"patcher.js.map":case"vencordDesktopMain.js.map":o((0,en.join)(__dirname,a));break;default:o({statusCode:403})}});try{D.store.enableReactDevtools&&Yr("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(i=>console.error("[Vencord] Failed to install React Developer Tools",i))}catch{}let e=(i,o)=>Object.keys(i).find(a=>a.toLowerCase()===o),t=i=>{let o={};return i.split(";").forEach(a=>{let[s,...u]=a.trim().split(/\s+/g);s&&!Object.prototype.hasOwnProperty.call(o,s)&&(o[s]=u)}),o},r=i=>Object.entries(i).filter(([,o])=>o?.length).map(o=>o.flat().join(" ")).join("; "),n=i=>{let o=e(i,"content-security-policy");if(o){let a=t(i[o][0]);for(let s of["style-src","connect-src","img-src","font-src","media-src","worker-src"])a[s]??=[],a[s].push("*","blob:","data:","vencord:","'unsafe-inline'");a["script-src"]??=[],a["script-src"].push("'unsafe-eval'","https://unpkg.com","https://cdnjs.cloudflare.com"),i[o]=[r(a)]}};J.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:i,resourceType:o},a)=>{if(i&&(o==="mainFrame"&&n(i),o==="stylesheet")){let s=e(i,"content-type");s&&(i[s]=["text/css"])}a({cancel:!1,responseHeaders:i})}),J.session.defaultSession.webRequest.onHeadersReceived=()=>{}});Qr();
//# sourceURL=VencordPatcher
//# sourceMappingURL=vencord://patcher.js.map
/*! For license information please see patcher.js.LEGAL.txt */
