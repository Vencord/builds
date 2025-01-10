// Vencord 3243120
// Standalone: true
// Platform: Universal
// Updater Disabled: false
"use strict";var Ur=Object.create;var Ee=Object.defineProperty;var Gr=Object.getOwnPropertyDescriptor;var Lr=Object.getOwnPropertyNames;var Vr=Object.getPrototypeOf,Zr=Object.prototype.hasOwnProperty;var F=(e,t)=>()=>(e&&(t=e(e=0)),t);var ee=(e,t)=>{for(var r in t)Ee(e,r,{get:t[r],enumerable:!0})},mt=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Lr(t))!Zr.call(e,n)&&n!==r&&Ee(e,n,{get:()=>t[n],enumerable:!(i=Gr(t,n))||i.enumerable});return e};var Fr=(e,t,r)=>(r=e!=null?Ur(Vr(e)):{},mt(t||!e||!e.__esModule?Ee(r,"default",{value:e,enumerable:!0}):r,e)),jr=e=>mt(Ee({},"__esModule",{value:!0}),e);var c=F(()=>{"use strict"});function te(e,t={}){return new Promise((r,i)=>{gt.default.get(e,t,n=>{let{statusCode:a,statusMessage:o,headers:s}=n;if(a>=400)return void i(`${a}: ${o} - ${e}`);if(a>=300)return void r(te(s.location,t));let h=[];n.on("error",i),n.on("data",v=>h.push(v)),n.once("end",()=>r(Buffer.concat(h)))})})}var gt,Ne=F(()=>{"use strict";c();gt=Fr(require("https"))});var fe=F(()=>{"use strict";c()});var pe,Ue=F(()=>{c();pe="3243120"});var re,Ge=F(()=>{c();re="Vendicated/Vencord"});var yt,wt=F(()=>{"use strict";c();Ue();Ge();yt=`Vencord/${pe}${re?` (https://github.com/${re})`:""}`});function de(e){return async function(){try{return{ok:!0,value:await e(...arguments)}}catch(t){return{ok:!1,error:t instanceof Error?{...t}:t}}}}var St,xt=F(()=>{"use strict";c();St=["vencordDesktopMain.js","vencordDesktopPreload.js","vencordDesktopRenderer.js","vencordDesktopRenderer.css"]});var $r={};async function Dt(e){return te(Wr+e,{headers:{Accept:"application/vnd.github+json","User-Agent":yt}})}async function Br(){if(!await It())return[];let t=await Dt(`/compare/${pe}...HEAD`);return JSON.parse(t.toString("utf-8")).commits.map(i=>({hash:i.sha.slice(0,7),author:i.author.login,message:i.commit.message.split(`
`)[0]}))}async function It(){let e=await Dt("/releases/latest"),t=JSON.parse(e.toString());return t.name.slice(t.name.lastIndexOf(" ")+1)===pe?!1:(t.assets.forEach(({name:i,browser_download_url:n})=>{St.some(a=>i.startsWith(a))&&Le.push([i,n])}),!0)}async function Hr(){return await Promise.all(Le.map(async([e,t])=>(0,Tt.writeFile)((0,Et.join)(__dirname,e),await te(t)))),Le=[],!0}var ve,Tt,Et,Wr,Le,bt=F(()=>{"use strict";c();Ne();fe();wt();ve=require("electron"),Tt=require("fs/promises"),Et=require("path");Ue();Ge();xt();Wr=`https://api.github.com/repos/${re}`,Le=[];ve.ipcMain.handle("VencordGetRepo",de(()=>`https://github.com/${re}`));ve.ipcMain.handle("VencordGetUpdates",de(Br));ve.ipcMain.handle("VencordUpdate",de(It));ve.ipcMain.handle("VencordBuild",de(Hr))});c();var K=require("electron"),Mr=require("path");c();c();bt();c();fe();var Qe=require("electron");c();var We={};ee(We,{fetchTrackData:()=>rn});c();c();c();c();var y=11400714785074694791n,T=14029467366897019727n,Rt=1609587929392839161n,me=9650029242287828579n,At=2870177450012600261n,Ot=64n,Kr=2n**Ot-1n,Yr=new TextEncoder;function Pt(e,t,r,i){return BigInt(e)|BigInt(t)<<16n|BigInt(r)<<32n|BigInt(i)<<48n}function G(e,t){return BigInt(e[t])|BigInt(e[t+1])<<8n|BigInt(e[t+2])<<16n|BigInt(e[t+3])<<24n|BigInt(e[t+4])<<32n|BigInt(e[t+5])<<40n|BigInt(e[t+6])<<48n|BigInt(e[t+7])<<56n}function w(e,t){return e<<t&Kr|e>>Ot-t}function u(e){return BigInt.asUintN(64,e)}var Ze=class{#t;#r;#n;#i;#o;#a;#s;#e;constructor(t=0){this.reset(t)}reset(t=this.#t){return this.#t=BigInt.asUintN(32,BigInt(t)),this.#r=u(this.#t+y+T),this.#n=u(this.#t+T),this.#i=this.#t,this.#o=u(this.#t-y),this.#a=null,this.#s=0,this.#e=0,this}update(t){typeof t=="string"&&(t=Yr.encode(t));let r=0,i=t.length,n=r+i;if(i===0)return this;if(this.#s+=i,this.#e===0&&(this.#a=new Uint8Array(32)),this.#e+i<32)return this.#a.set(t.subarray(0,i),this.#e),this.#e+=i,this;if(this.#e>0){this.#a.set(t.subarray(0,32-this.#e),this.#e);let a=0,o;o=G(this.#a,a),this.#r=u(w(u(this.#r+o*T),31n)*y),a+=8,o=G(this.memory,a),this.#n=u(w(u(this.#n+o*T),31n)*y),a+=8,o=G(this.memory,a),this.#i=u(w(u(this.#i+o*T),31n)*y),a+=8,o=G(this.memory,a),this.#o=u(w(u(this.#o+o*T),31n)*y),r+=32-this.#e,this.#e=0}if(r<=n-32){let a=n-32;do{let o;o=G(t,r),this.#r=u(w(u(this.#r+o*T),31n)*y),r+=8,o=G(t,r),this.#n=u(w(u(this.#n+o*T),31n)*y),r+=8,o=G(t,r),this.#i=u(w(u(this.#i+o*T),31n)*y),r+=8,o=G(t,r),this.#o=u(w(u(this.#o+o*T),31n)*y),r+=8}while(r<=a)}return r<n&&(this.#a.set(t.subarray(r,n),this.#e),this.#e=n-r),this}digest(){let t=this.#a,r=this.#e,i=0,n=0n,a=0n,o=0n;for(this.#s>=32?(n=w(this.#r,1n)+w(this.#n,7n)+w(this.#i,12n)+w(this.#o,18n),n=u(n^w(u(this.#r*T),31n)*y),n=u(n*y+me),n=u(n^w(u(this.#n*T),31n)*y),n=u(n*y+me),n=u(n^w(u(this.#i*T),31n)*y),n=u(n*y+me),n=u(n^w(u(this.#o*T),31n)*y),n=u(n*y+me)):n=u(this.#t+At),n+=BigInt(this.#s);i<=r-8;)o=G(t,i),o=u(w(u(o*T),31n)*y),n=u(w(n^o,27n)*y+me),i+=8;for(i+4<=r&&(o=Pt(t[i+1]<<8|t[i],t[i+3]<<8|t[i+2],0,0),n=u(w(n^u(o*y),23n)*T+Rt),i+=4);i<r;)o=Pt(t[i++],0,0,0),n=u(w(n^u(o*At),11n)*y);return a=u(n>>33n),n=u((n^a)*T),a=u(n>>29n),n=u((n^a)*Rt),a=u(n>>32n),n=u(n^a),n}};function Mt(e,t=0){return new Ze(t).update(e).digest()}var ne="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),Jr=(()=>{let e=new Uint8Array(4),t=new Uint32Array(e.buffer);return!((t[0]=1)&e[0])})();function Xr(e){e=BigInt(e);let t=[],r=Math.ceil(Math.floor(Math.log2(Number(e))+1)/8);for(let n=0;n<r;n++)t.unshift(Number(e>>BigInt(8*n)&BigInt(255)));let i=new Uint8Array(t);return Jr?i:i.reverse()}function _t(e){let t=Mt(e,0),r=Xr(t);return[ne[r[0]>>2],ne[(r[0]&3)<<4|r[1]>>4],ne[(r[1]&15)<<2|r[2]>>6],ne[r[2]&63],ne[r[3]>>2],ne[(r[3]&3)<<4|r[3]>>4]].join("")}function Ct(e){let t=typeof e=="string"?e:e.source;if(t=t.replaceAll(/#{intl::([\w$+/]*)(?:::(\w+))?}/g,(i,n,a)=>{let o=a==="raw"?n:_t(n),s=typeof e=="string";return!Number.isNaN(Number(o[0]))||o.includes("+")||o.includes("/")?s?`["${o}"]`:String.raw`(?:\["${o}"\])`.replaceAll("+","\\+"):s?`.${o}`:String.raw`(?:\.${o})`}),typeof e=="string")return t;let r=t.replaceAll("\\i",String.raw`(?:[A-Za-z_$][\w$]*)`);return new RegExp(r,e.flags)}var kt=require("child_process"),zt=require("util"),Nt=(0,zt.promisify)(kt.execFile);async function Fe(e){let{stdout:t}=await Nt("osascript",e.map(r=>["-e",r]).flat());return t}var M=null,qr=/<script type="module" crossorigin src="([a-zA-Z0-9.\-/]+)"><\/script>/,Qr=Ct(/Promise.allSettled\(\i\)\}const \i="([A-Za-z0-9-_]*\.[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*)"/),je,en=async()=>{if(je)return je;let e=await fetch("https://music.apple.com/").then(n=>n.text()),t=new URL(e.match(qr)[1],"https://music.apple.com/"),i=(await fetch(t).then(n=>n.text())).match(Qr)[1];return je=i,i};async function tn({id:e,name:t,artist:r,album:i}){if(e===M?.id){if("data"in M)return M.data;if("failures"in M&&M.failures>=5)return null}try{let n=new URL("https://amp-api-edge.music.apple.com/v1/catalog/us/search");n.searchParams.set("platform","web"),n.searchParams.set("l","en-US"),n.searchParams.set("limit","1"),n.searchParams.set("with","serverBubbles"),n.searchParams.set("types","songs"),n.searchParams.set("term",`${t} ${r} ${i}`),n.searchParams.set("include[songs]","artists");let a=await en(),o=await fetch(n,{headers:{accept:"*/*","accept-language":"en-US,en;q=0.9",authorization:`Bearer ${a}`,"user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",origin:"https://music.apple.com"}}).then(s=>s.json()).then(s=>s.results.song.data[0]);return M={id:e,data:{appleMusicLink:o.attributes.url,songLink:`https://song.link/i/${o.id}`,albumArtwork:o.attributes.artwork.url.replace("{w}x{h}","512x512"),artistArtwork:o.relationships.artists.data[0].attributes.artwork.url.replace("{w}x{h}","512x512")}},M.data}catch(n){return console.error("[AppleMusicRichPresence] Failed to fetch remote data:",n),M={id:e,failures:(e===M?.id&&"failures"in M?M.failures:0)+1},null}}async function rn(){try{await Nt("pgrep",["^Music$"])}catch{return null}if(await Fe(['tell application "Music"',"get player state","end tell"]).then(d=>d.trim())!=="playing")return null;let t=await Fe(['tell application "Music"',"get player position","end tell"]).then(d=>Number.parseFloat(d.trim())),r=await Fe(['set output to ""','tell application "Music"',"set t_id to database id of current track","set t_name to name of current track","set t_album to album of current track","set t_artist to artist of current track","set t_duration to duration of current track",'set output to "" & t_id & "\\n" & t_name & "\\n" & t_album & "\\n" & t_artist & "\\n" & t_duration',"end tell","return output"]),[i,n,a,o,s]=r.split(`
`).filter(d=>!!d),h=Number.parseFloat(s),v=await tn({id:i,name:n,artist:o,album:a});return{name:n,album:a,artist:o,playerPosition:t,duration:h,...v}}var Be={};ee(Be,{initDevtoolsOpenEagerLoad:()=>nn});c();function nn(e){let t=()=>e.sender.executeJavaScript("Vencord.Plugins.plugins.ConsoleShortcuts.eagerLoad(true)");e.sender.isDevToolsOpened()?t():e.sender.once("devtools-opened",()=>t())}var jt={};c();c();fe();c();var ge=class{pathListeners=new Map;globalListeners=new Set;constructor(t,r={}){this.plain=t,this.store=this.makeProxy(t),Object.assign(this,r)}makeProxy(t,r=t,i=""){let n=this;return new Proxy(t,{get(a,o){let s=a[o];return!(o in a)&&n.getDefaultValue&&(s=n.getDefaultValue({target:a,key:o,root:r,path:i})),typeof s=="object"&&s!==null&&!Array.isArray(s)?n.makeProxy(s,r,`${i}${i&&"."}${o}`):s},set(a,o,s){if(a[o]===s)return!0;Reflect.set(a,o,s);let h=`${i}${i&&"."}${o}`;return n.globalListeners.forEach(v=>v(s,h)),n.pathListeners.get(h)?.forEach(v=>v(s)),!0}})}setData(t,r){if(this.readOnly)throw new Error("SettingsStore is read-only");if(this.plain=t,this.store=this.makeProxy(t),r){let i=t,n=r.split(".");for(let a of n){if(!i){console.warn(`Settings#setData: Path ${r} does not exist in new data. Not dispatching update`);return}i=i[a]}this.pathListeners.get(r)?.forEach(a=>a(i))}this.markAsChanged()}addGlobalChangeListener(t){this.globalListeners.add(t)}addChangeListener(t,r){let i=this.pathListeners.get(t)??new Set;i.add(r),this.pathListeners.set(t,i)}removeGlobalChangeListener(t){this.globalListeners.delete(t)}removeChangeListener(t,r){let i=this.pathListeners.get(t);!i||(i.delete(r),i.size||this.pathListeners.delete(t))}markAsChanged(){this.globalListeners.forEach(t=>t(this.plain,""))}};c();function He(e,t){for(let r in t){let i=t[r];typeof i=="object"&&!Array.isArray(i)?(e[r]??={},He(e[r],i)):e[r]??=i}return e}var be=require("electron"),H=require("fs");c();var Ut=require("electron"),j=require("path"),De=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,j.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,j.join)(Ut.app.getPath("userData"),"..","Vencord")),ie=(0,j.join)(De,"settings"),B=(0,j.join)(De,"themes"),Ie=(0,j.join)(ie,"quickCss.css"),$e=(0,j.join)(ie,"settings.json"),Ke=(0,j.join)(ie,"native-settings.json"),Gt=["https:","http:","steam:","spotify:","com.epicgames.launcher:","tidal:","itunes:"];(0,H.mkdirSync)(ie,{recursive:!0});function Vt(e,t){try{return JSON.parse((0,H.readFileSync)(t,"utf-8"))}catch(r){return r?.code!=="ENOENT"&&console.error(`Failed to read ${e} settings`,r),{}}}var P=new ge(Vt("renderer",$e));P.addGlobalChangeListener(()=>{try{(0,H.writeFileSync)($e,JSON.stringify(P.plain,null,4))}catch(e){console.error("Failed to write renderer settings",e)}});be.ipcMain.handle("VencordGetSettingsDir",()=>ie);be.ipcMain.on("VencordGetSettings",e=>e.returnValue=P.plain);be.ipcMain.handle("VencordSetSettings",(e,t,r)=>{P.setData(t,r)});var on={plugins:{}},Zt=Vt("native",Ke);He(Zt,on);var Lt=new ge(Zt);Lt.addGlobalChangeListener(()=>{try{(0,H.writeFileSync)(Ke,JSON.stringify(Lt.plain,null,4))}catch(e){console.error("Failed to write native settings",e)}});var Ft=require("electron");Ft.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(r,{frame:i})=>{i.once("dom-ready",()=>{if(i.url.startsWith("https://open.spotify.com/embed/")){let n=P.store.plugins?.FixSpotifyEmbeds;if(!n?.enabled)return;i.executeJavaScript(`
                    const original = Audio.prototype.play;
                    Audio.prototype.play = function() {
                        this.volume = ${n.volume/100||.1};
                        return original.apply(this, arguments);
                    }
                `)}})})});var Bt={};c();var Wt=require("electron");Wt.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(r,{frame:i})=>{i.once("dom-ready",()=>{if(i.url.startsWith("https://www.youtube.com/")){if(!P.store.plugins?.FixYoutubeEmbeds?.enabled)return;i.executeJavaScript(`
                new MutationObserver(() => {
                    if(
                        document.querySelector('div.ytp-error-content-wrap-subreason a[href*="www.youtube.com/watch?v="]')
                    ) location.reload()
                }).observe(document.body, { childList: true, subtree:true });
                `)}})})});var Ye={};ee(Ye,{resolveRedirect:()=>sn});c();var Ht=require("https"),an=/^https:\/\/(spotify\.link|s\.team)\/.+$/;function $t(e){return new Promise((t,r)=>{let i=(0,Ht.request)(new URL(e),{method:"HEAD"},n=>{t(n.headers.location?$t(n.headers.location):e)});i.on("error",r),i.end()})}async function sn(e,t){return an.test(t)?$t(t):t}var Je={};ee(Je,{makeDeeplTranslateRequest:()=>cn});c();async function cn(e,t,r,i){let n=t?"https://api.deepl.com/v2/translate":"https://api-free.deepl.com/v2/translate";try{let a=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`DeepL-Auth-Key ${r}`},body:i}),o=await a.text();return{status:a.status,data:o}}catch(a){return{status:-1,data:String(a)}}}var Xe={};ee(Xe,{readRecording:()=>ln});c();var Kt=require("electron"),Yt=require("fs/promises"),ye=require("path");async function ln(e,t){t=(0,ye.normalize)(t);let r=(0,ye.basename)(t),i=(0,ye.normalize)(Kt.app.getPath("userData")+"/");if(console.log(r,i,t),r!=="recording.ogg"||!t.startsWith(i))return null;try{let n=await(0,Yt.readFile)(t);return new Uint8Array(n.buffer)}catch{return null}}var qe={};ee(qe,{sendToOverlay:()=>un});c();var Xt=require("dgram"),Jt;function un(e,t){t.messageType=t.type;let r=JSON.stringify(t);Jt??=(0,Xt.createSocket)("udp4"),Jt.send(r,42069,"127.0.0.1")}var er={};c();var Qt=require("electron");c();var qt=`"use strict";const hiddenCSS=["#__ffYoutube1","#__ffYoutube2","#__ffYoutube3","#__ffYoutube4","#feed-pyv-container","#feedmodule-PRO","#homepage-chrome-side-promo","#merch-shelf","#offer-module",'#pla-shelf > ytd-pla-shelf-renderer[class="style-scope ytd-watch"]',"#pla-shelf","#premium-yva","#promo-info","#promo-list","#promotion-shelf","#related > ytd-watch-next-secondary-results-renderer > #items > ytd-compact-promoted-video-renderer.ytd-watch-next-secondary-results-renderer","#search-pva","#shelf-pyv-container","#video-masthead","#watch-branded-actions","#watch-buy-urls","#watch-channel-brand-div","#watch7-branded-banner","#YtKevlarVisibilityIdentifier","#YtSparklesVisibilityIdentifier",".carousel-offer-url-container",".companion-ad-container",".GoogleActiveViewElement",'.list-view[style="margin: 7px 0pt;"]',".promoted-sparkles-text-search-root-container",".promoted-videos",".searchView.list-view",".sparkles-light-cta",".watch-extra-info-column",".watch-extra-info-right",".ytd-carousel-ad-renderer",".ytd-compact-promoted-video-renderer",".ytd-companion-slot-renderer",".ytd-merch-shelf-renderer",".ytd-player-legacy-desktop-watch-ads-renderer",".ytd-promoted-sparkles-text-search-renderer",".ytd-promoted-video-renderer",".ytd-search-pyv-renderer",".ytd-video-masthead-ad-v3-renderer",".ytp-ad-action-interstitial-background-container",".ytp-ad-action-interstitial-slot",".ytp-ad-image-overlay",".ytp-ad-overlay-container",".ytp-ad-progress",".ytp-ad-progress-list",'[class*="ytd-display-ad-"]','[layout*="display-ad-"]','a[href^="http://www.youtube.com/cthru?"]','a[href^="https://www.youtube.com/cthru?"]',"ytd-action-companion-ad-renderer","ytd-banner-promo-renderer","ytd-compact-promoted-video-renderer","ytd-companion-slot-renderer","ytd-display-ad-renderer","ytd-promoted-sparkles-text-search-renderer","ytd-promoted-sparkles-web-renderer","ytd-search-pyv-renderer","ytd-single-option-survey-renderer","ytd-video-masthead-ad-advertiser-info-renderer","ytd-video-masthead-ad-v3-renderer","YTM-PROMOTED-VIDEO-RENDERER"],hideElements=()=>{const e=hiddenCSS;if(!e)return;const t=e.join(", ")+" { display: none!important; }",r=document.createElement("style");r.textContent=t,document.head.appendChild(r)},observeDomChanges=e=>{new MutationObserver(r=>{e(r)}).observe(document.documentElement,{childList:!0,subtree:!0})},hideDynamicAds=()=>{const e=document.querySelectorAll("#contents > ytd-rich-item-renderer ytd-display-ad-renderer");e.length!==0&&e.forEach(t=>{if(t.parentNode&&t.parentNode.parentNode){const r=t.parentNode.parentNode;r.localName==="ytd-rich-item-renderer"&&(r.style.display="none")}})},autoSkipAds=()=>{if(document.querySelector(".ad-showing")){const e=document.querySelector("video");e&&e.duration&&(e.currentTime=e.duration,setTimeout(()=>{const t=document.querySelector("button.ytp-ad-skip-button");t&&t.click()},100))}},overrideObject=(e,t,r)=>{if(!e)return!1;let n=!1;for(const o in e)e.hasOwnProperty(o)&&o===t?(e[o]=r,n=!0):e.hasOwnProperty(o)&&typeof e[o]=="object"&&overrideObject(e[o],t,r)&&(n=!0);return n},jsonOverride=(e,t)=>{const r=JSON.parse;JSON.parse=(...n)=>{const o=r.apply(this,n);return overrideObject(o,e,t),o},Response.prototype.json=new Proxy(Response.prototype.json,{async apply(...n){const o=await Reflect.apply(...n);return overrideObject(o,e,t),o}})};jsonOverride("adPlacements",[]),jsonOverride("playerAds",[]),hideElements(),hideDynamicAds(),autoSkipAds(),observeDomChanges(()=>{hideDynamicAds(),autoSkipAds()});
`;Qt.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(r,{frame:i})=>{i.once("dom-ready",()=>{!P.store.plugins?.YoutubeAdblock?.enabled||(i.url.includes("youtube.com/embed/")||i.url.includes("discordsays")&&i.url.includes("youtube.com"))&&i.executeJavaScript(qt)})})});var tr={AppleMusicRichPresence:We,ConsoleShortcuts:Be,FixSpotifyEmbeds:jt,FixYoutubeEmbeds:Bt,OpenInApp:Ye,Translate:Je,VoiceMessages:Xe,XSOverlay:qe,YoutubeAdblock:er};var rr={};for(let[e,t]of Object.entries(tr)){let r=Object.entries(t);if(!r.length)continue;let i=rr[e]={};for(let[n,a]of r){let o=`VencordPluginNative_${e}_${n}`;Qe.ipcMain.handle(o,a),i[n]=o}}Qe.ipcMain.on("VencordGetPluginIpcMethodMap",e=>{e.returnValue=rr});c();fe();var S=require("electron");c();var nr="PCFkb2N0eXBlIGh0bWw+PGh0bWwgbGFuZz0iZW4iPjxoZWFkPjxtZXRhIGNoYXJzZXQ9InV0Zi04Ij48dGl0bGU+VmVuY29yZCBRdWlja0NTUyBFZGl0b3I8L3RpdGxlPjxsaW5rIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0iaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9tb25hY28tZWRpdG9yQDAuNTAuMC9taW4vdnMvZWRpdG9yL2VkaXRvci5tYWluLmNzcyIgaW50ZWdyaXR5PSJzaGEyNTYtdGlKUFEyTzA0ei9wWi9Bd2R5SWdock9NemV3ZitQSXZFbDFZS2JRdnNaaz0iIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciI+PHN0eWxlPiNjb250YWluZXIsYm9keSxodG1se3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO21hcmdpbjowO3BhZGRpbmc6MDtvdmVyZmxvdzpoaWRkZW59PC9zdHlsZT48L2hlYWQ+PGJvZHk+PGRpdiBpZD0iY29udGFpbmVyIj48L2Rpdj48c2NyaXB0IHNyYz0iaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9tb25hY28tZWRpdG9yQDAuNTAuMC9taW4vdnMvbG9hZGVyLmpzIiBpbnRlZ3JpdHk9InNoYTI1Ni1LY1U0OFRHcjg0cjd1bkY3SjVJZ0JvOTVhZVZyRWJyR2UwNFM3VGNGVWpzPSIgY3Jvc3NvcmlnaW49ImFub255bW91cyIgcmVmZXJyZXJwb2xpY3k9Im5vLXJlZmVycmVyIj48L3NjcmlwdD48c2NyaXB0PnJlcXVpcmUuY29uZmlnKHtwYXRoczp7dnM6Imh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vbW9uYWNvLWVkaXRvckAwLjUwLjAvbWluL3ZzIn19KSxyZXF1aXJlKFsidnMvZWRpdG9yL2VkaXRvci5tYWluIl0sKCgpPT57Z2V0Q3VycmVudENzcygpLnRoZW4oKGU9Pnt2YXIgdD1tb25hY28uZWRpdG9yLmNyZWF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiY29udGFpbmVyIikse3ZhbHVlOmUsbGFuZ3VhZ2U6ImNzcyIsdGhlbWU6Z2V0VGhlbWUoKX0pO3Qub25EaWRDaGFuZ2VNb2RlbENvbnRlbnQoKCgpPT5zZXRDc3ModC5nZXRWYWx1ZSgpKSkpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCJyZXNpemUiLCgoKT0+e3QubGF5b3V0KCl9KSl9KSl9KSk8L3NjcmlwdD48L2JvZHk+PC9odG1sPg==";var we=require("fs"),ae=require("fs/promises"),oe=require("path");c();var hn=/[^\S\r\n]*?\r?(?:\r\n|\n)[^\S\r\n]*?\*[^\S\r\n]?/,fn=/^\\@/;function et(e,t={}){return{fileName:e,name:t.name??e.replace(/\.css$/i,""),author:t.author??"Unknown Author",description:t.description??"A Discord Theme.",version:t.version,license:t.license,source:t.source,website:t.website,invite:t.invite}}function ir(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function or(e,t){if(!e)return et(t);let r=e.split("/**",2)?.[1]?.split("*/",1)?.[0];if(!r)return et(t);let i={},n="",a="";for(let o of r.split(hn))if(o.length!==0)if(o.charAt(0)==="@"&&o.charAt(1)!==" "){i[n]=a.trim();let s=o.indexOf(" ");n=o.substring(1,s),a=o.substring(s+1)}else a+=" "+o.replace("\\n",`
`).replace(fn,"@");return i[n]=a.trim(),delete i[""],et(t,i)}c();var ar=require("electron");function sr(e){e.webContents.setWindowOpenHandler(({url:t})=>{switch(t){case"about:blank":case"https://discord.com/popout":case"https://ptb.discord.com/popout":case"https://canary.discord.com/popout":return{action:"allow"}}try{var{protocol:r}=new URL(t)}catch{return{action:"deny"}}switch(r){case"http:":case"https:":case"mailto:":case"steam:":case"spotify:":ar.shell.openExternal(t)}return{action:"deny"}})}(0,we.mkdirSync)(B,{recursive:!0});function tt(e,t){let r=(0,oe.normalize)(e),i=(0,oe.join)(e,t),n=(0,oe.normalize)(i);return n.startsWith(r)?n:null}function pn(){return(0,ae.readFile)(Ie,"utf-8").catch(()=>"")}async function dn(){let e=await(0,ae.readdir)(B).catch(()=>[]),t=[];for(let r of e){if(!r.endsWith(".css"))continue;let i=await cr(r).then(ir).catch(()=>null);i!=null&&t.push(or(i,r))}return t}function cr(e){e=e.replace(/\?v=\d+$/,"");let t=tt(B,e);return t?(0,ae.readFile)(t,"utf-8"):Promise.reject(`Unsafe path ${e}`)}S.ipcMain.handle("VencordOpenQuickCss",()=>S.shell.openPath(Ie));S.ipcMain.handle("VencordOpenExternal",(e,t)=>{try{var{protocol:r}=new URL(t)}catch{throw"Malformed URL"}if(!Gt.includes(r))throw"Disallowed protocol.";S.shell.openExternal(t)});S.ipcMain.handle("VencordGetQuickCss",()=>pn());S.ipcMain.handle("VencordSetQuickCss",(e,t)=>(0,we.writeFileSync)(Ie,t));S.ipcMain.handle("VencordGetThemesDir",()=>B);S.ipcMain.handle("VencordGetThemesList",()=>dn());S.ipcMain.handle("VencordGetThemeData",(e,t)=>cr(t));S.ipcMain.handle("VencordGetThemeSystemValues",()=>({"os-accent-color":`#${S.systemPreferences.getAccentColor?.()||""}`}));S.ipcMain.handle("VencordOpenMonacoEditor",async()=>{let e="Vencord QuickCSS Editor",t=S.BrowserWindow.getAllWindows().find(i=>i.title===e);if(t&&!t.isDestroyed()){t.focus();return}let r=new S.BrowserWindow({title:e,autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,oe.join)(__dirname,"vencordDesktopPreload.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!1}});sr(r),await r.loadURL(`data:text/html;base64,${nr}`)});c();var Ar=require("electron");c();var hr=require("module"),vn=(0,hr.createRequire)("/"),Ae,mn=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{Ae=vn("worker_threads").Worker}catch{}var gn=Ae?function(e,t,r,i,n){var a=!1,o=new Ae(e+mn,{eval:!0}).on("error",function(s){return n(s,null)}).on("message",function(s){return n(null,s)}).on("exit",function(s){s&&!a&&n(new Error("exited with code "+s),null)});return o.postMessage(r,i),o.terminate=function(){return a=!0,Ae.prototype.terminate.call(o)},o}:function(e,t,r,i,n){setImmediate(function(){return n(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var a=function(){};return{terminate:a,postMessage:a}},I=Uint8Array,$=Uint16Array,fr=Int32Array,it=new I([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ot=new I([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),pr=new I([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),dr=function(e,t){for(var r=new $(31),i=0;i<31;++i)r[i]=t+=1<<e[i-1];for(var n=new fr(r[30]),i=1;i<30;++i)for(var a=r[i];a<r[i+1];++a)n[a]=a-r[i]<<5|i;return{b:r,r:n}},vr=dr(it,2),at=vr.b,yn=vr.r;at[28]=258,yn[258]=28;var mr=dr(ot,0),gr=mr.b,vo=mr.r,Me=new $(32768);for(m=0;m<32768;++m)L=(m&43690)>>1|(m&21845)<<1,L=(L&52428)>>2|(L&13107)<<2,L=(L&61680)>>4|(L&3855)<<4,Me[m]=((L&65280)>>8|(L&255)<<8)>>1;var L,m,se=function(e,t,r){for(var i=e.length,n=0,a=new $(t);n<i;++n)e[n]&&++a[e[n]-1];var o=new $(t);for(n=1;n<t;++n)o[n]=o[n-1]+a[n-1]<<1;var s;if(r){s=new $(1<<t);var h=15-t;for(n=0;n<i;++n)if(e[n])for(var v=n<<4|e[n],d=t-e[n],l=o[e[n]-1]++<<d,g=l|(1<<d)-1;l<=g;++l)s[Me[l]>>h]=v}else for(s=new $(i),n=0;n<i;++n)e[n]&&(s[n]=Me[o[e[n]-1]++]>>15-e[n]);return s},Se=new I(288);for(m=0;m<144;++m)Se[m]=8;var m;for(m=144;m<256;++m)Se[m]=9;var m;for(m=256;m<280;++m)Se[m]=7;var m;for(m=280;m<288;++m)Se[m]=8;var m,yr=new I(32);for(m=0;m<32;++m)yr[m]=5;var m;var wr=se(Se,9,1);var Sr=se(yr,5,1),Pe=function(e){for(var t=e[0],r=1;r<e.length;++r)e[r]>t&&(t=e[r]);return t},O=function(e,t,r){var i=t/8|0;return(e[i]|e[i+1]<<8)>>(t&7)&r},Oe=function(e,t){var r=t/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(t&7)},xr=function(e){return(e+7)/8|0},_e=function(e,t,r){return(t==null||t<0)&&(t=0),(r==null||r>e.length)&&(r=e.length),new I(e.subarray(t,r))};var Tr=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],D=function(e,t,r){var i=new Error(t||Tr[e]);if(i.code=e,Error.captureStackTrace&&Error.captureStackTrace(i,D),!r)throw i;return i},Er=function(e,t,r,i){var n=e.length,a=i?i.length:0;if(!n||t.f&&!t.l)return r||new I(0);var o=!r,s=o||t.i!=2,h=t.i;o&&(r=new I(n*3));var v=function(pt){var dt=r.length;if(pt>dt){var vt=new I(Math.max(dt*2,pt));vt.set(r),r=vt}},d=t.f||0,l=t.p||0,g=t.b||0,C=t.l,Y=t.d,N=t.m,b=t.n,R=n*8;do{if(!C){d=O(e,l,1);var V=O(e,l+1,3);if(l+=3,V)if(V==1)C=wr,Y=Sr,N=9,b=5;else if(V==2){var le=O(e,l,31)+257,xe=O(e,l+10,15)+4,W=le+O(e,l+5,31)+1;l+=14;for(var A=new I(W),X=new I(19),x=0;x<xe;++x)X[pr[x]]=O(e,l+x*3,7);l+=xe*3;for(var ue=Pe(X),_r=(1<<ue)-1,Cr=se(X,ue,1),x=0;x<W;){var ct=Cr[O(e,l,_r)];l+=ct&15;var E=ct>>4;if(E<16)A[x++]=E;else{var q=0,Te=0;for(E==16?(Te=3+O(e,l,3),l+=2,q=A[x-1]):E==17?(Te=3+O(e,l,7),l+=3):E==18&&(Te=11+O(e,l,127),l+=7);Te--;)A[x++]=q}}var lt=A.subarray(0,le),Z=A.subarray(le);N=Pe(lt),b=Pe(Z),C=se(lt,N,1),Y=se(Z,b,1)}else D(1);else{var E=xr(l)+4,U=e[E-4]|e[E-3]<<8,J=E+U;if(J>n){h&&D(0);break}s&&v(g+U),r.set(e.subarray(E,J),g),t.b=g+=U,t.p=l=J*8,t.f=d;continue}if(l>R){h&&D(0);break}}s&&v(g+131072);for(var kr=(1<<N)-1,zr=(1<<b)-1,Ce=l;;Ce=l){var q=C[Oe(e,l)&kr],Q=q>>4;if(l+=q&15,l>R){h&&D(0);break}if(q||D(2),Q<256)r[g++]=Q;else if(Q==256){Ce=l,C=null;break}else{var ut=Q-254;if(Q>264){var x=Q-257,he=it[x];ut=O(e,l,(1<<he)-1)+at[x],l+=he}var ke=Y[Oe(e,l)&zr],ze=ke>>4;ke||D(3),l+=ke&15;var Z=gr[ze];if(ze>3){var he=ot[ze];Z+=Oe(e,l)&(1<<he)-1,l+=he}if(l>R){h&&D(0);break}s&&v(g+131072);var ht=g+ut;if(g<Z){var ft=a-Z,Nr=Math.min(Z,ht);for(ft+g<0&&D(3);g<Nr;++g)r[g]=i[ft+g]}for(;g<ht;++g)r[g]=r[g-Z]}}t.l=C,t.p=Ce,t.b=g,t.f=d,C&&(d=1,t.m=N,t.d=Y,t.n=b)}while(!d);return g!=r.length&&o?_e(r,0,g):r.subarray(0,g)};var wn=new I(0);var Sn=function(e,t){var r={};for(var i in e)r[i]=e[i];for(var i in t)r[i]=t[i];return r},lr=function(e,t,r){for(var i=e(),n=e.toString(),a=n.slice(n.indexOf("[")+1,n.lastIndexOf("]")).replace(/\s+/g,"").split(","),o=0;o<i.length;++o){var s=i[o],h=a[o];if(typeof s=="function"){t+=";"+h+"=";var v=s.toString();if(s.prototype)if(v.indexOf("[native code]")!=-1){var d=v.indexOf(" ",8)+1;t+=v.slice(d,v.indexOf("(",d))}else{t+=v;for(var l in s.prototype)t+=";"+h+".prototype."+l+"="+s.prototype[l].toString()}else t+=v}else r[h]=s}return t},Re=[],xn=function(e){var t=[];for(var r in e)e[r].buffer&&t.push((e[r]=new e[r].constructor(e[r])).buffer);return t},Tn=function(e,t,r,i){if(!Re[r]){for(var n="",a={},o=e.length-1,s=0;s<o;++s)n=lr(e[s],n,a);Re[r]={c:lr(e[o],n,a),e:a}}var h=Sn({},Re[r].e);return gn(Re[r].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+t.toString()+"}",r,h,xn(h),i)},En=function(){return[I,$,fr,it,ot,pr,at,gr,wr,Sr,Me,Tr,se,Pe,O,Oe,xr,_e,D,Er,st,Dr,Ir]};var Dr=function(e){return postMessage(e,[e.buffer])},Ir=function(e){return e&&{out:e.size&&new I(e.size),dictionary:e.dictionary}},Dn=function(e,t,r,i,n,a){var o=Tn(r,i,n,function(s,h){o.terminate(),a(s,h)});return o.postMessage([e,t],t.consume?[e.buffer]:[]),function(){o.terminate()}};var k=function(e,t){return e[t]|e[t+1]<<8},_=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},rt=function(e,t){return _(e,t)+_(e,t+4)*4294967296};function In(e,t,r){return r||(r=t,t={}),typeof r!="function"&&D(7),Dn(e,t,[En],function(i){return Dr(st(i.data[0],Ir(i.data[1])))},1,r)}function st(e,t){return Er(e,{i:2},t&&t.out,t&&t.dictionary)}var nt=typeof TextDecoder<"u"&&new TextDecoder,bn=0;try{nt.decode(wn,{stream:!0}),bn=1}catch{}var Rn=function(e){for(var t="",r=0;;){var i=e[r++],n=(i>127)+(i>223)+(i>239);if(r+n>e.length)return{s:t,r:_e(e,r-1)};n?n==3?(i=((i&15)<<18|(e[r++]&63)<<12|(e[r++]&63)<<6|e[r++]&63)-65536,t+=String.fromCharCode(55296|i>>10,56320|i&1023)):n&1?t+=String.fromCharCode((i&31)<<6|e[r++]&63):t+=String.fromCharCode((i&15)<<12|(e[r++]&63)<<6|e[r++]&63):t+=String.fromCharCode(i)}};function An(e,t){if(t){for(var r="",i=0;i<e.length;i+=16384)r+=String.fromCharCode.apply(null,e.subarray(i,i+16384));return r}else{if(nt)return nt.decode(e);var n=Rn(e),a=n.s,r=n.r;return r.length&&D(8),a}}var Pn=function(e,t){return t+30+k(e,t+26)+k(e,t+28)},On=function(e,t,r){var i=k(e,t+28),n=An(e.subarray(t+46,t+46+i),!(k(e,t+8)&2048)),a=t+46+i,o=_(e,t+20),s=r&&o==4294967295?Mn(e,a):[o,_(e,t+24),_(e,t+42)],h=s[0],v=s[1],d=s[2];return[k(e,t+10),h,v,n,a+k(e,t+30)+k(e,t+32),d]},Mn=function(e,t){for(;k(e,t)!=1;t+=4+k(e,t+2));return[rt(e,t+12),rt(e,t+4),rt(e,t+20)]};var ur=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(e){e()};function br(e,t,r){r||(r=t,t={}),typeof r!="function"&&D(7);var i=[],n=function(){for(var b=0;b<i.length;++b)i[b]()},a={},o=function(b,R){ur(function(){r(b,R)})};ur(function(){o=r});for(var s=e.length-22;_(e,s)!=101010256;--s)if(!s||e.length-s>65558)return o(D(13,0,1),null),n;var h=k(e,s+8);if(h){var v=h,d=_(e,s+16),l=d==4294967295||v==65535;if(l){var g=_(e,s-12);l=_(e,g)==101075792,l&&(v=h=_(e,g+32),d=_(e,g+48))}for(var C=t&&t.filter,Y=function(b){var R=On(e,d,l),V=R[0],E=R[1],U=R[2],J=R[3],le=R[4],xe=R[5],W=Pn(e,xe);d=le;var A=function(x,ue){x?(n(),o(x,null)):(ue&&(a[J]=ue),--h||o(null,a))};if(!C||C({name:J,size:E,originalSize:U,compression:V}))if(!V)A(null,_e(e,W,W+E));else if(V==8){var X=e.subarray(W,W+E);if(U<524288||E>.8*U)try{A(null,st(X,{out:new I(U)}))}catch(x){A(x,null)}else i.push(In(X,{size:U},A))}else A(D(14,"unknown compression type "+V,1),null);else A(null,null)},N=0;N<v;++N)Y(N)}else o(null,{});return n}var Pr=require("fs"),z=require("fs/promises"),ce=require("path");c();function Rr(e){function t(o,s,h,v){let d=0;return d+=o<<0,d+=s<<8,d+=h<<16,d+=v<<24>>>0,d}if(e[0]===80&&e[1]===75&&e[2]===3&&e[3]===4)return e;if(e[0]!==67||e[1]!==114||e[2]!==50||e[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let r=e[4]===3,i=e[4]===2;if(!i&&!r||e[5]||e[6]||e[7])throw new Error("Unexpected crx format version number.");if(i){let o=t(e[8],e[9],e[10],e[11]),s=t(e[12],e[13],e[14],e[15]),h=16+o+s;return e.subarray(h,e.length)}let a=12+t(e[8],e[9],e[10],e[11]);return e.subarray(a,e.length)}Ne();var _n=(0,ce.join)(De,"ExtensionCache");async function Cn(e,t){return await(0,z.mkdir)(t,{recursive:!0}),new Promise((r,i)=>{br(e,(n,a)=>{if(n)return void i(n);Promise.all(Object.keys(a).map(async o=>{if(o.startsWith("_metadata/"))return;if(o.endsWith("/"))return void(0,z.mkdir)((0,ce.join)(t,o),{recursive:!0});let s=o.split("/"),h=s.pop(),v=s.join("/"),d=(0,ce.join)(t,v);v&&await(0,z.mkdir)(d,{recursive:!0}),await(0,z.writeFile)((0,ce.join)(d,h),a[o])})).then(()=>r()).catch(o=>{(0,z.rm)(t,{recursive:!0,force:!0}),i(o)})})})}async function Or(e){let t=(0,ce.join)(_n,`${e}`);try{await(0,z.access)(t,Pr.constants.F_OK)}catch{let i=e==="fmkadmapgofadopljbjfkapdkoienihi"?"https://raw.githubusercontent.com/Vendicated/random-files/f6f550e4c58ac5f2012095a130406c2ab25b984d/fmkadmapgofadopljbjfkapdkoienihi.zip":`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${e}%26uc&prodversion=${process.versions.chrome}`,n=await te(i,{headers:{"User-Agent":`Electron ${process.versions.electron} ~ Vencord (https://github.com/Vendicated/Vencord)`}});await Cn(Rr(n),t).catch(console.error)}Ar.session.defaultSession.loadExtension(t)}K.app.whenReady().then(()=>{K.protocol.registerFileProtocol("vencord",({url:n},a)=>{let o=n.slice(10);if(o.endsWith("/")&&(o=o.slice(0,-1)),o.startsWith("/themes/")){let s=o.slice(8),h=tt(B,s);if(!h){a({statusCode:403});return}a(h.replace(/\?v=\d+$/,""));return}switch(o){case"renderer.js.map":case"vencordDesktopRenderer.js.map":case"preload.js.map":case"vencordDesktopPreload.js.map":case"patcher.js.map":case"vencordDesktopMain.js.map":a((0,Mr.join)(__dirname,o));break;default:a({statusCode:403})}});try{P.store.enableReactDevtools&&Or("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(n=>console.error("[Vencord] Failed to install React Developer Tools",n))}catch{}let e=(n,a)=>Object.keys(n).find(o=>o.toLowerCase()===a),t=n=>{let a={};return n.split(";").forEach(o=>{let[s,...h]=o.trim().split(/\s+/g);s&&!Object.prototype.hasOwnProperty.call(a,s)&&(a[s]=h)}),a},r=n=>Object.entries(n).filter(([,a])=>a?.length).map(a=>a.flat().join(" ")).join("; "),i=n=>{let a=e(n,"content-security-policy");if(a){let o=t(n[a][0]);for(let s of["style-src","connect-src","img-src","font-src","media-src","worker-src"])o[s]??=[],o[s].push("*","blob:","data:","vencord:","'unsafe-inline'");o["script-src"]??=[],o["script-src"].push("'unsafe-eval'","https://unpkg.com","https://cdnjs.cloudflare.com"),n[a]=[r(o)]}};K.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:n,resourceType:a},o)=>{if(n&&(a==="mainFrame"&&i(n),a==="stylesheet")){let s=e(n,"content-type");s&&(n[s]=["text/css"])}o({cancel:!1,responseHeaders:n})}),K.session.defaultSession.webRequest.onHeadersReceived=()=>{}});
//# sourceURL=VencordDesktopMain
//# sourceMappingURL=vencord://vencordDesktopMain.js.map
/*! For license information please see vencordDesktopMain.js.LEGAL.txt */
