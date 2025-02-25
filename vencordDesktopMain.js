// Vencord 8d0f312
// Standalone: true
// Platform: Universal
// Updater Disabled: false
"use strict";var Nr=Object.create;var Et=Object.defineProperty;var Vr=Object.getOwnPropertyDescriptor;var Zr=Object.getOwnPropertyNames;var Fr=Object.getPrototypeOf,jr=Object.prototype.hasOwnProperty;var F=(e,t)=>()=>(e&&(t=e(e=0)),t);var tt=(e,t)=>{for(var r in t)Et(e,r,{get:t[r],enumerable:!0})},ge=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Zr(t))!jr.call(e,n)&&n!==r&&Et(e,n,{get:()=>t[n],enumerable:!(i=Vr(t,n))||i.enumerable});return e};var Wr=(e,t,r)=>(r=e!=null?Nr(Fr(e)):{},ge(t||!e||!e.__esModule?Et(r,"default",{value:e,enumerable:!0}):r,e)),Br=e=>ge(Et({},"__esModule",{value:!0}),e);var c=F(()=>{"use strict"});function et(e,t={}){return new Promise((r,i)=>{ye.default.get(e,t,n=>{let{statusCode:a,statusMessage:o,headers:s}=n;if(a>=400)return void i(`${a}: ${o} - ${e}`);if(a>=300)return void r(et(s.location,t));let l=[];n.on("error",i),n.on("data",v=>l.push(v)),n.once("end",()=>r(Buffer.concat(l)))})})}var ye,Lt=F(()=>{"use strict";c();ye=Wr(require("https"))});var ft=F(()=>{"use strict";c()});var pt,Ut=F(()=>{c();pt="8d0f312"});var rt,Gt=F(()=>{c();rt="Vendicated/Vencord"});var we,Se=F(()=>{"use strict";c();Ut();Gt();we=`Vencord/${pt}${rt?` (https://github.com/${rt})`:""}`});function dt(e){return async function(){try{return{ok:!0,value:await e(...arguments)}}catch(t){return{ok:!1,error:t instanceof Error?{...t}:t}}}}var xe,Te=F(()=>{"use strict";c();xe=["vencordDesktopMain.js","vencordDesktopPreload.js","vencordDesktopRenderer.js","vencordDesktopRenderer.css"]});var Yr={};async function De(e){return et(Hr+e,{headers:{Accept:"application/vnd.github+json","User-Agent":we}})}async function $r(){if(!await be())return[];let t=await De(`/compare/${pt}...HEAD`);return JSON.parse(t.toString("utf-8")).commits.map(i=>({hash:i.sha.slice(0,7),author:i.author.login,message:i.commit.message.split(`
`)[0]}))}async function be(){let e=await De("/releases/latest"),t=JSON.parse(e.toString());return t.name.slice(t.name.lastIndexOf(" ")+1)===pt?!1:(t.assets.forEach(({name:i,browser_download_url:n})=>{xe.some(a=>i.startsWith(a))&&Nt.push([i,n])}),!0)}async function Kr(){return await Promise.all(Nt.map(async([e,t])=>(0,Ee.writeFile)((0,Ie.join)(__dirname,e),await et(t)))),Nt=[],!0}var vt,Ee,Ie,Hr,Nt,Re=F(()=>{"use strict";c();Lt();ft();Se();vt=require("electron"),Ee=require("fs/promises"),Ie=require("path");Ut();Gt();Te();Hr=`https://api.github.com/repos/${rt}`,Nt=[];vt.ipcMain.handle("VencordGetRepo",dt(()=>`https://github.com/${rt}`));vt.ipcMain.handle("VencordGetUpdates",dt($r));vt.ipcMain.handle("VencordUpdate",dt(be));vt.ipcMain.handle("VencordBuild",dt(Kr))});c();var K=require("electron"),Mr=require("path");c();c();Re();c();ft();var te=require("electron");c();var Wt={};tt(Wt,{fetchTrackData:()=>on});c();c();c();c();var y=11400714785074694791n,T=14029467366897019727n,Pe=1609587929392839161n,mt=9650029242287828579n,Ae=2870177450012600261n,Oe=64n,Jr=2n**Oe-1n,Xr=new TextEncoder;function Ce(e,t,r,i){return BigInt(e)|BigInt(t)<<16n|BigInt(r)<<32n|BigInt(i)<<48n}function G(e,t){return BigInt(e[t])|BigInt(e[t+1])<<8n|BigInt(e[t+2])<<16n|BigInt(e[t+3])<<24n|BigInt(e[t+4])<<32n|BigInt(e[t+5])<<40n|BigInt(e[t+6])<<48n|BigInt(e[t+7])<<56n}function w(e,t){return e<<t&Jr|e>>Oe-t}function h(e){return BigInt.asUintN(64,e)}var Zt=class{#e;#r;#n;#i;#o;#a;#s;#t;constructor(t=0){this.reset(t)}reset(t=this.#e){return this.#e=BigInt.asUintN(32,BigInt(t)),this.#r=h(this.#e+y+T),this.#n=h(this.#e+T),this.#i=this.#e,this.#o=h(this.#e-y),this.#a=null,this.#s=0,this.#t=0,this}update(t){typeof t=="string"&&(t=Xr.encode(t));let r=0,i=t.length,n=r+i;if(i===0)return this;if(this.#s+=i,this.#t===0&&(this.#a=new Uint8Array(32)),this.#t+i<32)return this.#a.set(t.subarray(0,i),this.#t),this.#t+=i,this;if(this.#t>0){this.#a.set(t.subarray(0,32-this.#t),this.#t);let a=0,o;o=G(this.#a,a),this.#r=h(w(h(this.#r+o*T),31n)*y),a+=8,o=G(this.memory,a),this.#n=h(w(h(this.#n+o*T),31n)*y),a+=8,o=G(this.memory,a),this.#i=h(w(h(this.#i+o*T),31n)*y),a+=8,o=G(this.memory,a),this.#o=h(w(h(this.#o+o*T),31n)*y),r+=32-this.#t,this.#t=0}if(r<=n-32){let a=n-32;do{let o;o=G(t,r),this.#r=h(w(h(this.#r+o*T),31n)*y),r+=8,o=G(t,r),this.#n=h(w(h(this.#n+o*T),31n)*y),r+=8,o=G(t,r),this.#i=h(w(h(this.#i+o*T),31n)*y),r+=8,o=G(t,r),this.#o=h(w(h(this.#o+o*T),31n)*y),r+=8}while(r<=a)}return r<n&&(this.#a.set(t.subarray(r,n),this.#t),this.#t=n-r),this}digest(){let t=this.#a,r=this.#t,i=0,n=0n,a=0n,o=0n;for(this.#s>=32?(n=w(this.#r,1n)+w(this.#n,7n)+w(this.#i,12n)+w(this.#o,18n),n=h(n^w(h(this.#r*T),31n)*y),n=h(n*y+mt),n=h(n^w(h(this.#n*T),31n)*y),n=h(n*y+mt),n=h(n^w(h(this.#i*T),31n)*y),n=h(n*y+mt),n=h(n^w(h(this.#o*T),31n)*y),n=h(n*y+mt)):n=h(this.#e+Ae),n+=BigInt(this.#s);i<=r-8;)o=G(t,i),o=h(w(h(o*T),31n)*y),n=h(w(n^o,27n)*y+mt),i+=8;for(i+4<=r&&(o=Ce(t[i+1]<<8|t[i],t[i+3]<<8|t[i+2],0,0),n=h(w(n^h(o*y),23n)*T+Pe),i+=4);i<r;)o=Ce(t[i++],0,0,0),n=h(w(n^h(o*Ae),11n)*y);return a=h(n>>33n),n=h((n^a)*T),a=h(n>>29n),n=h((n^a)*Pe),a=h(n>>32n),n=h(n^a),n}};function _e(e,t=0){return new Zt(t).update(e).digest()}var nt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),qr=(()=>{let e=new Uint8Array(4),t=new Uint32Array(e.buffer);return!((t[0]=1)&e[0])})();function Qr(e){e=BigInt(e);let t=[],r=Math.ceil(Math.floor(Math.log2(Number(e))+1)/8);for(let n=0;n<r;n++)t.unshift(Number(e>>BigInt(8*n)&BigInt(255)));let i=new Uint8Array(t);return qr?i:i.reverse()}function Me(e){let t=_e(e,0),r=Qr(t);return[nt[r[0]>>2],nt[(r[0]&3)<<4|r[1]>>4],nt[(r[1]&15)<<2|r[2]>>6],nt[r[2]&63],nt[r[3]>>2],nt[(r[3]&3)<<4|r[3]>>4]].join("")}function ze(e){let t=typeof e=="string"?e:e.source;if(t=t.replaceAll(/#{intl::([\w$+/]*)(?:::(\w+))?}/g,(n,a,o)=>{let s=o==="raw"?a:Me(a),l=typeof e=="string";return!Number.isNaN(Number(s[0]))||s.includes("+")||s.includes("/")?l?`["${s}"]`:String.raw`(?:\["${s}"\])`.replaceAll("+","\\+"):l?`.${s}`:String.raw`(?:\.${s})`}),typeof e=="string")return t;let r=t.replaceAll("\\i",String.raw`(?:[A-Za-z_$][\w$]*)`),i=new RegExp(r,e.flags);return i.toString=e.toString.bind(e),i}var ke=require("child_process"),Le=require("util"),Ue=(0,Le.promisify)(ke.execFile);async function Ft(e){let{stdout:t}=await Ue("osascript",e.map(r=>["-e",r]).flat());return t}var O=null,tn=/<script type="module" crossorigin src="([a-zA-Z0-9.\-/]+)"><\/script>/,en=ze(/Promise.allSettled\(\i\)\}const \i="([A-Za-z0-9-_]*\.[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*)"/),jt,rn=async()=>{if(jt)return jt;let e=await fetch("https://music.apple.com/").then(n=>n.text()),t=new URL(e.match(tn)[1],"https://music.apple.com/"),i=(await fetch(t).then(n=>n.text())).match(en)[1];return jt=i,i};async function nn({id:e,name:t,artist:r,album:i}){if(e===O?.id){if("data"in O)return O.data;if("failures"in O&&O.failures>=5)return null}try{let n=new URL("https://amp-api-edge.music.apple.com/v1/catalog/us/search");n.searchParams.set("platform","web"),n.searchParams.set("l","en-US"),n.searchParams.set("limit","1"),n.searchParams.set("with","serverBubbles"),n.searchParams.set("types","songs"),n.searchParams.set("term",`${t} ${r} ${i}`),n.searchParams.set("include[songs]","artists");let a=await rn(),o=await fetch(n,{headers:{accept:"*/*","accept-language":"en-US,en;q=0.9",authorization:`Bearer ${a}`,"user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",origin:"https://music.apple.com"}}).then(s=>s.json()).then(s=>s.results.song.data[0]);return O={id:e,data:{appleMusicLink:o.attributes.url,songLink:`https://song.link/i/${o.id}`,albumArtwork:o.attributes.artwork.url.replace("{w}x{h}","512x512"),artistArtwork:o.relationships.artists.data[0].attributes.artwork.url.replace("{w}x{h}","512x512")}},O.data}catch(n){return console.error("[AppleMusicRichPresence] Failed to fetch remote data:",n),O={id:e,failures:(e===O?.id&&"failures"in O?O.failures:0)+1},null}}async function on(){try{await Ue("pgrep",["^Music$"])}catch{return null}if(await Ft(['tell application "Music"',"get player state","end tell"]).then(d=>d.trim())!=="playing")return null;let t=await Ft(['tell application "Music"',"get player position","end tell"]).then(d=>Number.parseFloat(d.trim())),r=await Ft(['set output to ""','tell application "Music"',"set t_id to database id of current track","set t_name to name of current track","set t_album to album of current track","set t_artist to artist of current track","set t_duration to duration of current track",'set output to "" & t_id & "\\n" & t_name & "\\n" & t_album & "\\n" & t_artist & "\\n" & t_duration',"end tell","return output"]),[i,n,a,o,s]=r.split(`
`).filter(d=>!!d),l=Number.parseFloat(s),v=await nn({id:i,name:n,artist:o,album:a});return{name:n,album:a,artist:o,playerPosition:t,duration:l,...v}}var Bt={};tt(Bt,{initDevtoolsOpenEagerLoad:()=>an});c();function an(e){let t=()=>e.sender.executeJavaScript("Vencord.Plugins.plugins.ConsoleShortcuts.eagerLoad(true)");e.sender.isDevToolsOpened()?t():e.sender.once("devtools-opened",()=>t())}var Be={};c();c();ft();c();var Ht=Symbol("SettingsStore.isProxy"),Ge=Symbol("SettingsStore.getRawTarget"),gt=class{pathListeners=new Map;globalListeners=new Set;proxyContexts=new WeakMap;proxyHandler=(()=>{let t=this;return{get(r,i,n){if(i===Ht)return!0;if(i===Ge)return r;let a=Reflect.get(r,i,n),o=t.proxyContexts.get(r);if(o==null)return a;let{root:s,path:l}=o;if(!(i in r)&&t.getDefaultValue!=null&&(a=t.getDefaultValue({target:r,key:i,root:s,path:l})),typeof a=="object"&&a!==null&&!a[Ht]){let v=`${l}${l&&"."}${i}`;return t.makeProxy(a,s,v)}return a},set(r,i,n){if(n?.[Ht]&&(n=n[Ge]),r[i]===n)return!0;if(!Reflect.set(r,i,n))return!1;let a=t.proxyContexts.get(r);if(a==null)return!0;let{root:o,path:s}=a,l=`${s}${s&&"."}${i}`;return t.notifyListeners(l,n,o),!0},deleteProperty(r,i){if(!Reflect.deleteProperty(r,i))return!1;let n=t.proxyContexts.get(r);if(n==null)return!0;let{root:a,path:o}=n,s=`${o}${o&&"."}${i}`;return t.notifyListeners(s,void 0,a),!0}}})();constructor(t,r={}){this.plain=t,this.store=this.makeProxy(t),Object.assign(this,r)}makeProxy(t,r=t,i=""){return this.proxyContexts.set(t,{root:r,path:i}),new Proxy(t,this.proxyHandler)}notifyListeners(t,r,i){let n=t.split(".");if(n.length>2&&n[0]==="plugins"){let a=n.slice(0,3),o=a.join("."),s=a.reduce((l,v)=>l[v],i);this.globalListeners.forEach(l=>l(i,o)),this.pathListeners.get(o)?.forEach(l=>l(s))}else this.globalListeners.forEach(a=>a(i,t));this.pathListeners.get(t)?.forEach(a=>a(r))}setData(t,r){if(this.readOnly)throw new Error("SettingsStore is read-only");if(this.plain=t,this.store=this.makeProxy(t),r){let i=t,n=r.split(".");for(let a of n){if(!i){console.warn(`Settings#setData: Path ${r} does not exist in new data. Not dispatching update`);return}i=i[a]}this.pathListeners.get(r)?.forEach(a=>a(i))}this.markAsChanged()}addGlobalChangeListener(t){this.globalListeners.add(t)}addChangeListener(t,r){let i=this.pathListeners.get(t)??new Set;i.add(r),this.pathListeners.set(t,i)}removeGlobalChangeListener(t){this.globalListeners.delete(t)}removeChangeListener(t,r){let i=this.pathListeners.get(t);i&&(i.delete(r),i.size||this.pathListeners.delete(t))}markAsChanged(){this.globalListeners.forEach(t=>t(this.plain,""))}};c();function $t(e,t){for(let r in t){let i=t[r];typeof i=="object"&&!Array.isArray(i)?(e[r]??={},$t(e[r],i)):e[r]??=i}return e}var bt=require("electron"),H=require("fs");c();var Ne=require("electron"),j=require("path"),It=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,j.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,j.join)(Ne.app.getPath("userData"),"..","Vencord")),it=(0,j.join)(It,"settings"),B=(0,j.join)(It,"themes"),Dt=(0,j.join)(it,"quickCss.css"),Kt=(0,j.join)(it,"settings.json"),Yt=(0,j.join)(it,"native-settings.json"),Ve=["https:","http:","steam:","spotify:","com.epicgames.launcher:","tidal:","itunes:"];(0,H.mkdirSync)(it,{recursive:!0});function Fe(e,t){try{return JSON.parse((0,H.readFileSync)(t,"utf-8"))}catch(r){return r?.code!=="ENOENT"&&console.error(`Failed to read ${e} settings`,r),{}}}var A=new gt(Fe("renderer",Kt));A.addGlobalChangeListener(()=>{try{(0,H.writeFileSync)(Kt,JSON.stringify(A.plain,null,4))}catch(e){console.error("Failed to write renderer settings",e)}});bt.ipcMain.handle("VencordGetSettingsDir",()=>it);bt.ipcMain.on("VencordGetSettings",e=>e.returnValue=A.plain);bt.ipcMain.handle("VencordSetSettings",(e,t,r)=>{A.setData(t,r)});var sn={plugins:{}},je=Fe("native",Yt);$t(je,sn);var Ze=new gt(je);Ze.addGlobalChangeListener(()=>{try{(0,H.writeFileSync)(Yt,JSON.stringify(Ze.plain,null,4))}catch(e){console.error("Failed to write native settings",e)}});var We=require("electron");We.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(r,{frame:i})=>{i?.once("dom-ready",()=>{if(i.url.startsWith("https://open.spotify.com/embed/")){let n=A.store.plugins?.FixSpotifyEmbeds;if(!n?.enabled)return;i.executeJavaScript(`
                    const original = Audio.prototype.play;
                    Audio.prototype.play = function() {
                        this.volume = ${n.volume/100||.1};
                        return original.apply(this, arguments);
                    }
                `)}})})});var $e={};c();var He=require("electron");He.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(r,{frame:i})=>{i?.once("dom-ready",()=>{if(i.url.startsWith("https://www.youtube.com/")){if(!A.store.plugins?.FixYoutubeEmbeds?.enabled)return;i.executeJavaScript(`
                new MutationObserver(() => {
                    if(
                        document.querySelector('div.ytp-error-content-wrap-subreason a[href*="www.youtube.com/watch?v="]')
                    ) location.reload()
                }).observe(document.body, { childList: true, subtree:true });
                `)}})})});var Jt={};tt(Jt,{resolveRedirect:()=>ln});c();var Ke=require("https"),cn=/^https:\/\/(spotify\.link|s\.team)\/.+$/;function Ye(e){return new Promise((t,r)=>{let i=(0,Ke.request)(new URL(e),{method:"HEAD"},n=>{t(n.headers.location?Ye(n.headers.location):e)});i.on("error",r),i.end()})}async function ln(e,t){return cn.test(t)?Ye(t):t}var Xt={};tt(Xt,{makeDeeplTranslateRequest:()=>un});c();async function un(e,t,r,i){let n=t?"https://api.deepl.com/v2/translate":"https://api-free.deepl.com/v2/translate";try{let a=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`DeepL-Auth-Key ${r}`},body:i}),o=await a.text();return{status:a.status,data:o}}catch(a){return{status:-1,data:String(a)}}}var qt={};tt(qt,{readRecording:()=>hn});c();var Je=require("electron"),Xe=require("fs/promises"),yt=require("path");async function hn(e,t){t=(0,yt.normalize)(t);let r=(0,yt.basename)(t),i=(0,yt.normalize)(Je.app.getPath("userData")+"/");if(console.log(r,i,t),r!=="recording.ogg"||!t.startsWith(i))return null;try{let n=await(0,Xe.readFile)(t);return new Uint8Array(n.buffer)}catch{return null}}var Qt={};tt(Qt,{sendToOverlay:()=>fn});c();var Qe=require("dgram"),qe;function fn(e,t){t.messageType=t.type;let r=JSON.stringify(t);qe??=(0,Qe.createSocket)("udp4"),qe.send(r,42069,"127.0.0.1")}var rr={};c();var er=require("electron");c();var tr=`"use strict";const hiddenCSS=["#__ffYoutube1","#__ffYoutube2","#__ffYoutube3","#__ffYoutube4","#feed-pyv-container","#feedmodule-PRO","#homepage-chrome-side-promo","#merch-shelf","#offer-module",'#pla-shelf > ytd-pla-shelf-renderer[class="style-scope ytd-watch"]',"#pla-shelf","#premium-yva","#promo-info","#promo-list","#promotion-shelf","#related > ytd-watch-next-secondary-results-renderer > #items > ytd-compact-promoted-video-renderer.ytd-watch-next-secondary-results-renderer","#search-pva","#shelf-pyv-container","#video-masthead","#watch-branded-actions","#watch-buy-urls","#watch-channel-brand-div","#watch7-branded-banner","#YtKevlarVisibilityIdentifier","#YtSparklesVisibilityIdentifier",".carousel-offer-url-container",".companion-ad-container",".GoogleActiveViewElement",'.list-view[style="margin: 7px 0pt;"]',".promoted-sparkles-text-search-root-container",".promoted-videos",".searchView.list-view",".sparkles-light-cta",".watch-extra-info-column",".watch-extra-info-right",".ytd-carousel-ad-renderer",".ytd-compact-promoted-video-renderer",".ytd-companion-slot-renderer",".ytd-merch-shelf-renderer",".ytd-player-legacy-desktop-watch-ads-renderer",".ytd-promoted-sparkles-text-search-renderer",".ytd-promoted-video-renderer",".ytd-search-pyv-renderer",".ytd-video-masthead-ad-v3-renderer",".ytp-ad-action-interstitial-background-container",".ytp-ad-action-interstitial-slot",".ytp-ad-image-overlay",".ytp-ad-overlay-container",".ytp-ad-progress",".ytp-ad-progress-list",'[class*="ytd-display-ad-"]','[layout*="display-ad-"]','a[href^="http://www.youtube.com/cthru?"]','a[href^="https://www.youtube.com/cthru?"]',"ytd-action-companion-ad-renderer","ytd-banner-promo-renderer","ytd-compact-promoted-video-renderer","ytd-companion-slot-renderer","ytd-display-ad-renderer","ytd-promoted-sparkles-text-search-renderer","ytd-promoted-sparkles-web-renderer","ytd-search-pyv-renderer","ytd-single-option-survey-renderer","ytd-video-masthead-ad-advertiser-info-renderer","ytd-video-masthead-ad-v3-renderer","YTM-PROMOTED-VIDEO-RENDERER"],hideElements=()=>{const e=hiddenCSS;if(!e)return;const t=e.join(", ")+" { display: none!important; }",r=document.createElement("style");r.textContent=t,document.head.appendChild(r)},observeDomChanges=e=>{new MutationObserver(r=>{e(r)}).observe(document.documentElement,{childList:!0,subtree:!0})},hideDynamicAds=()=>{const e=document.querySelectorAll("#contents > ytd-rich-item-renderer ytd-display-ad-renderer");e.length!==0&&e.forEach(t=>{if(t.parentNode&&t.parentNode.parentNode){const r=t.parentNode.parentNode;r.localName==="ytd-rich-item-renderer"&&(r.style.display="none")}})},autoSkipAds=()=>{if(document.querySelector(".ad-showing")){const e=document.querySelector("video");e&&e.duration&&(e.currentTime=e.duration,setTimeout(()=>{const t=document.querySelector("button.ytp-ad-skip-button");t&&t.click()},100))}},overrideObject=(e,t,r)=>{if(!e)return!1;let n=!1;for(const o in e)e.hasOwnProperty(o)&&o===t?(e[o]=r,n=!0):e.hasOwnProperty(o)&&typeof e[o]=="object"&&overrideObject(e[o],t,r)&&(n=!0);return n},jsonOverride=(e,t)=>{const r=JSON.parse;JSON.parse=(...n)=>{const o=r.apply(this,n);return overrideObject(o,e,t),o},Response.prototype.json=new Proxy(Response.prototype.json,{async apply(...n){const o=await Reflect.apply(...n);return overrideObject(o,e,t),o}})};jsonOverride("adPlacements",[]),jsonOverride("playerAds",[]),hideElements(),hideDynamicAds(),autoSkipAds(),observeDomChanges(()=>{hideDynamicAds(),autoSkipAds()});
`;er.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(r,{frame:i})=>{i?.once("dom-ready",()=>{A.store.plugins?.YoutubeAdblock?.enabled&&(i.url.includes("youtube.com/embed/")||i.url.includes("discordsays")&&i.url.includes("youtube.com"))&&i.executeJavaScript(tr)})})});var nr={AppleMusicRichPresence:Wt,ConsoleShortcuts:Bt,FixSpotifyEmbeds:Be,FixYoutubeEmbeds:$e,OpenInApp:Jt,Translate:Xt,VoiceMessages:qt,XSOverlay:Qt,YoutubeAdblock:rr};var ir={};for(let[e,t]of Object.entries(nr)){let r=Object.entries(t);if(!r.length)continue;let i=ir[e]={};for(let[n,a]of r){let o=`VencordPluginNative_${e}_${n}`;te.ipcMain.handle(o,a),i[n]=o}}te.ipcMain.on("VencordGetPluginIpcMethodMap",e=>{e.returnValue=ir});c();ft();var S=require("electron");c();var or="PCFkb2N0eXBlIGh0bWw+PGh0bWwgbGFuZz0iZW4iPjxoZWFkPjxtZXRhIGNoYXJzZXQ9InV0Zi04Ij48dGl0bGU+VmVuY29yZCBRdWlja0NTUyBFZGl0b3I8L3RpdGxlPjxsaW5rIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0iaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9tb25hY28tZWRpdG9yQDAuNTAuMC9taW4vdnMvZWRpdG9yL2VkaXRvci5tYWluLmNzcyIgaW50ZWdyaXR5PSJzaGEyNTYtdGlKUFEyTzA0ei9wWi9Bd2R5SWdock9NemV3ZitQSXZFbDFZS2JRdnNaaz0iIGNyb3Nzb3JpZ2luPSJhbm9ueW1vdXMiIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciI+PHN0eWxlPiNjb250YWluZXIsYm9keSxodG1se3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO21hcmdpbjowO3BhZGRpbmc6MDtvdmVyZmxvdzpoaWRkZW59PC9zdHlsZT48L2hlYWQ+PGJvZHk+PGRpdiBpZD0iY29udGFpbmVyIj48L2Rpdj48c2NyaXB0IHNyYz0iaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9tb25hY28tZWRpdG9yQDAuNTAuMC9taW4vdnMvbG9hZGVyLmpzIiBpbnRlZ3JpdHk9InNoYTI1Ni1LY1U0OFRHcjg0cjd1bkY3SjVJZ0JvOTVhZVZyRWJyR2UwNFM3VGNGVWpzPSIgY3Jvc3NvcmlnaW49ImFub255bW91cyIgcmVmZXJyZXJwb2xpY3k9Im5vLXJlZmVycmVyIj48L3NjcmlwdD48c2NyaXB0PnJlcXVpcmUuY29uZmlnKHtwYXRoczp7dnM6Imh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vbW9uYWNvLWVkaXRvckAwLjUwLjAvbWluL3ZzIn19KSxyZXF1aXJlKFsidnMvZWRpdG9yL2VkaXRvci5tYWluIl0sKCgpPT57Z2V0Q3VycmVudENzcygpLnRoZW4oKGU9Pnt2YXIgdD1tb25hY28uZWRpdG9yLmNyZWF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiY29udGFpbmVyIikse3ZhbHVlOmUsbGFuZ3VhZ2U6ImNzcyIsdGhlbWU6Z2V0VGhlbWUoKX0pO3Qub25EaWRDaGFuZ2VNb2RlbENvbnRlbnQoKCgpPT5zZXRDc3ModC5nZXRWYWx1ZSgpKSkpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCJyZXNpemUiLCgoKT0+e3QubGF5b3V0KCl9KSl9KSl9KSk8L3NjcmlwdD48L2JvZHk+PC9odG1sPg==";var wt=require("fs"),at=require("fs/promises"),ot=require("path");c();var pn=/[^\S\r\n]*?\r?(?:\r\n|\n)[^\S\r\n]*?\*[^\S\r\n]?/,dn=/^\\@/;function ee(e,t={}){return{fileName:e,name:t.name??e.replace(/\.css$/i,""),author:t.author??"Unknown Author",description:t.description??"A Discord Theme.",version:t.version,license:t.license,source:t.source,website:t.website,invite:t.invite}}function ar(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function sr(e,t){if(!e)return ee(t);let r=e.split("/**",2)?.[1]?.split("*/",1)?.[0];if(!r)return ee(t);let i={},n="",a="";for(let o of r.split(pn))if(o.length!==0)if(o.charAt(0)==="@"&&o.charAt(1)!==" "){i[n]=a.trim();let s=o.indexOf(" ");n=o.substring(1,s),a=o.substring(s+1)}else a+=" "+o.replace("\\n",`
`).replace(dn,"@");return i[n]=a.trim(),delete i[""],ee(t,i)}c();var cr=require("electron");function lr(e){e.webContents.setWindowOpenHandler(({url:t})=>{switch(t){case"about:blank":case"https://discord.com/popout":case"https://ptb.discord.com/popout":case"https://canary.discord.com/popout":return{action:"allow"}}try{var{protocol:r}=new URL(t)}catch{return{action:"deny"}}switch(r){case"http:":case"https:":case"mailto:":case"steam:":case"spotify:":cr.shell.openExternal(t)}return{action:"deny"}})}(0,wt.mkdirSync)(B,{recursive:!0});function re(e,t){let r=(0,ot.normalize)(e),i=(0,ot.join)(e,t),n=(0,ot.normalize)(i);return n.startsWith(r)?n:null}function vn(){return(0,at.readFile)(Dt,"utf-8").catch(()=>"")}async function mn(){let e=await(0,at.readdir)(B).catch(()=>[]),t=[];for(let r of e){if(!r.endsWith(".css"))continue;let i=await ur(r).then(ar).catch(()=>null);i!=null&&t.push(sr(i,r))}return t}function ur(e){e=e.replace(/\?v=\d+$/,"");let t=re(B,e);return t?(0,at.readFile)(t,"utf-8"):Promise.reject(`Unsafe path ${e}`)}S.ipcMain.handle("VencordOpenQuickCss",()=>S.shell.openPath(Dt));S.ipcMain.handle("VencordOpenExternal",(e,t)=>{try{var{protocol:r}=new URL(t)}catch{throw"Malformed URL"}if(!Ve.includes(r))throw"Disallowed protocol.";S.shell.openExternal(t)});S.ipcMain.handle("VencordGetQuickCss",()=>vn());S.ipcMain.handle("VencordSetQuickCss",(e,t)=>(0,wt.writeFileSync)(Dt,t));S.ipcMain.handle("VencordGetThemesDir",()=>B);S.ipcMain.handle("VencordGetThemesList",()=>mn());S.ipcMain.handle("VencordGetThemeData",(e,t)=>ur(t));S.ipcMain.handle("VencordGetThemeSystemValues",()=>({"os-accent-color":`#${S.systemPreferences.getAccentColor?.()||""}`}));S.ipcMain.handle("VencordOpenMonacoEditor",async()=>{let e="Vencord QuickCSS Editor",t=S.BrowserWindow.getAllWindows().find(i=>i.title===e);if(t&&!t.isDestroyed()){t.focus();return}let r=new S.BrowserWindow({title:e,autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,ot.join)(__dirname,"vencordDesktopPreload.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!1}});lr(r),await r.loadURL(`data:text/html;base64,${or}`)});c();var Cr=require("electron");c();var pr=require("module"),gn=(0,pr.createRequire)("/"),Pt,yn=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{Pt=gn("worker_threads").Worker}catch{}var wn=Pt?function(e,t,r,i,n){var a=!1,o=new Pt(e+yn,{eval:!0}).on("error",function(s){return n(s,null)}).on("message",function(s){return n(null,s)}).on("exit",function(s){s&&!a&&n(new Error("exited with code "+s),null)});return o.postMessage(r,i),o.terminate=function(){return a=!0,Pt.prototype.terminate.call(o)},o}:function(e,t,r,i,n){setImmediate(function(){return n(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var a=function(){};return{terminate:a,postMessage:a}},D=Uint8Array,$=Uint16Array,dr=Int32Array,oe=new D([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ae=new D([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),vr=new D([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),mr=function(e,t){for(var r=new $(31),i=0;i<31;++i)r[i]=t+=1<<e[i-1];for(var n=new dr(r[30]),i=1;i<30;++i)for(var a=r[i];a<r[i+1];++a)n[a]=a-r[i]<<5|i;return{b:r,r:n}},gr=mr(oe,2),se=gr.b,Sn=gr.r;se[28]=258,Sn[258]=28;var yr=mr(ae,0),wr=yr.b,go=yr.r,Ot=new $(32768);for(m=0;m<32768;++m)N=(m&43690)>>1|(m&21845)<<1,N=(N&52428)>>2|(N&13107)<<2,N=(N&61680)>>4|(N&3855)<<4,Ot[m]=((N&65280)>>8|(N&255)<<8)>>1;var N,m,st=function(e,t,r){for(var i=e.length,n=0,a=new $(t);n<i;++n)e[n]&&++a[e[n]-1];var o=new $(t);for(n=1;n<t;++n)o[n]=o[n-1]+a[n-1]<<1;var s;if(r){s=new $(1<<t);var l=15-t;for(n=0;n<i;++n)if(e[n])for(var v=n<<4|e[n],d=t-e[n],u=o[e[n]-1]++<<d,g=u|(1<<d)-1;u<=g;++u)s[Ot[u]>>l]=v}else for(s=new $(i),n=0;n<i;++n)e[n]&&(s[n]=Ot[o[e[n]-1]++]>>15-e[n]);return s},St=new D(288);for(m=0;m<144;++m)St[m]=8;var m;for(m=144;m<256;++m)St[m]=9;var m;for(m=256;m<280;++m)St[m]=7;var m;for(m=280;m<288;++m)St[m]=8;var m,Sr=new D(32);for(m=0;m<32;++m)Sr[m]=5;var m;var xr=st(St,9,1);var Tr=st(Sr,5,1),At=function(e){for(var t=e[0],r=1;r<e.length;++r)e[r]>t&&(t=e[r]);return t},C=function(e,t,r){var i=t/8|0;return(e[i]|e[i+1]<<8)>>(t&7)&r},Ct=function(e,t){var r=t/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(t&7)},Er=function(e){return(e+7)/8|0},_t=function(e,t,r){return(t==null||t<0)&&(t=0),(r==null||r>e.length)&&(r=e.length),new D(e.subarray(t,r))};var Ir=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],I=function(e,t,r){var i=new Error(t||Ir[e]);if(i.code=e,Error.captureStackTrace&&Error.captureStackTrace(i,I),!r)throw i;return i},Dr=function(e,t,r,i){var n=e.length,a=i?i.length:0;if(!n||t.f&&!t.l)return r||new D(0);var o=!r,s=o||t.i!=2,l=t.i;o&&(r=new D(n*3));var v=function(de){var ve=r.length;if(de>ve){var me=new D(Math.max(ve*2,de));me.set(r),r=me}},d=t.f||0,u=t.p||0,g=t.b||0,M=t.l,Y=t.d,L=t.m,b=t.n,R=n*8;do{if(!M){d=C(e,u,1);var V=C(e,u+1,3);if(u+=3,V)if(V==1)M=xr,Y=Tr,L=9,b=5;else if(V==2){var lt=C(e,u,31)+257,xt=C(e,u+10,15)+4,W=lt+C(e,u+5,31)+1;u+=14;for(var P=new D(W),X=new D(19),x=0;x<xt;++x)X[vr[x]]=C(e,u+x*3,7);u+=xt*3;for(var ut=At(X),zr=(1<<ut)-1,kr=st(X,ut,1),x=0;x<W;){var le=kr[C(e,u,zr)];u+=le&15;var E=le>>4;if(E<16)P[x++]=E;else{var q=0,Tt=0;for(E==16?(Tt=3+C(e,u,3),u+=2,q=P[x-1]):E==17?(Tt=3+C(e,u,7),u+=3):E==18&&(Tt=11+C(e,u,127),u+=7);Tt--;)P[x++]=q}}var ue=P.subarray(0,lt),Z=P.subarray(lt);L=At(ue),b=At(Z),M=st(ue,L,1),Y=st(Z,b,1)}else I(1);else{var E=Er(u)+4,U=e[E-4]|e[E-3]<<8,J=E+U;if(J>n){l&&I(0);break}s&&v(g+U),r.set(e.subarray(E,J),g),t.b=g+=U,t.p=u=J*8,t.f=d;continue}if(u>R){l&&I(0);break}}s&&v(g+131072);for(var Lr=(1<<L)-1,Ur=(1<<b)-1,Mt=u;;Mt=u){var q=M[Ct(e,u)&Lr],Q=q>>4;if(u+=q&15,u>R){l&&I(0);break}if(q||I(2),Q<256)r[g++]=Q;else if(Q==256){Mt=u,M=null;break}else{var he=Q-254;if(Q>264){var x=Q-257,ht=oe[x];he=C(e,u,(1<<ht)-1)+se[x],u+=ht}var zt=Y[Ct(e,u)&Ur],kt=zt>>4;zt||I(3),u+=zt&15;var Z=wr[kt];if(kt>3){var ht=ae[kt];Z+=Ct(e,u)&(1<<ht)-1,u+=ht}if(u>R){l&&I(0);break}s&&v(g+131072);var fe=g+he;if(g<Z){var pe=a-Z,Gr=Math.min(Z,fe);for(pe+g<0&&I(3);g<Gr;++g)r[g]=i[pe+g]}for(;g<fe;++g)r[g]=r[g-Z]}}t.l=M,t.p=Mt,t.b=g,t.f=d,M&&(d=1,t.m=L,t.d=Y,t.n=b)}while(!d);return g!=r.length&&o?_t(r,0,g):r.subarray(0,g)};var xn=new D(0);var Tn=function(e,t){var r={};for(var i in e)r[i]=e[i];for(var i in t)r[i]=t[i];return r},hr=function(e,t,r){for(var i=e(),n=e.toString(),a=n.slice(n.indexOf("[")+1,n.lastIndexOf("]")).replace(/\s+/g,"").split(","),o=0;o<i.length;++o){var s=i[o],l=a[o];if(typeof s=="function"){t+=";"+l+"=";var v=s.toString();if(s.prototype)if(v.indexOf("[native code]")!=-1){var d=v.indexOf(" ",8)+1;t+=v.slice(d,v.indexOf("(",d))}else{t+=v;for(var u in s.prototype)t+=";"+l+".prototype."+u+"="+s.prototype[u].toString()}else t+=v}else r[l]=s}return t},Rt=[],En=function(e){var t=[];for(var r in e)e[r].buffer&&t.push((e[r]=new e[r].constructor(e[r])).buffer);return t},In=function(e,t,r,i){if(!Rt[r]){for(var n="",a={},o=e.length-1,s=0;s<o;++s)n=hr(e[s],n,a);Rt[r]={c:hr(e[o],n,a),e:a}}var l=Tn({},Rt[r].e);return wn(Rt[r].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+t.toString()+"}",r,l,En(l),i)},Dn=function(){return[D,$,dr,oe,ae,vr,se,wr,xr,Tr,Ot,Ir,st,At,C,Ct,Er,_t,I,Dr,ce,br,Rr]};var br=function(e){return postMessage(e,[e.buffer])},Rr=function(e){return e&&{out:e.size&&new D(e.size),dictionary:e.dictionary}},bn=function(e,t,r,i,n,a){var o=In(r,i,n,function(s,l){o.terminate(),a(s,l)});return o.postMessage([e,t],t.consume?[e.buffer]:[]),function(){o.terminate()}};var z=function(e,t){return e[t]|e[t+1]<<8},_=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},ne=function(e,t){return _(e,t)+_(e,t+4)*4294967296};function Rn(e,t,r){return r||(r=t,t={}),typeof r!="function"&&I(7),bn(e,t,[Dn],function(i){return br(ce(i.data[0],Rr(i.data[1])))},1,r)}function ce(e,t){return Dr(e,{i:2},t&&t.out,t&&t.dictionary)}var ie=typeof TextDecoder<"u"&&new TextDecoder,Pn=0;try{ie.decode(xn,{stream:!0}),Pn=1}catch{}var An=function(e){for(var t="",r=0;;){var i=e[r++],n=(i>127)+(i>223)+(i>239);if(r+n>e.length)return{s:t,r:_t(e,r-1)};n?n==3?(i=((i&15)<<18|(e[r++]&63)<<12|(e[r++]&63)<<6|e[r++]&63)-65536,t+=String.fromCharCode(55296|i>>10,56320|i&1023)):n&1?t+=String.fromCharCode((i&31)<<6|e[r++]&63):t+=String.fromCharCode((i&15)<<12|(e[r++]&63)<<6|e[r++]&63):t+=String.fromCharCode(i)}};function Cn(e,t){if(t){for(var r="",i=0;i<e.length;i+=16384)r+=String.fromCharCode.apply(null,e.subarray(i,i+16384));return r}else{if(ie)return ie.decode(e);var n=An(e),a=n.s,r=n.r;return r.length&&I(8),a}}var On=function(e,t){return t+30+z(e,t+26)+z(e,t+28)},_n=function(e,t,r){var i=z(e,t+28),n=Cn(e.subarray(t+46,t+46+i),!(z(e,t+8)&2048)),a=t+46+i,o=_(e,t+20),s=r&&o==4294967295?Mn(e,a):[o,_(e,t+24),_(e,t+42)],l=s[0],v=s[1],d=s[2];return[z(e,t+10),l,v,n,a+z(e,t+30)+z(e,t+32),d]},Mn=function(e,t){for(;z(e,t)!=1;t+=4+z(e,t+2));return[ne(e,t+12),ne(e,t+4),ne(e,t+20)]};var fr=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(e){e()};function Pr(e,t,r){r||(r=t,t={}),typeof r!="function"&&I(7);var i=[],n=function(){for(var b=0;b<i.length;++b)i[b]()},a={},o=function(b,R){fr(function(){r(b,R)})};fr(function(){o=r});for(var s=e.length-22;_(e,s)!=101010256;--s)if(!s||e.length-s>65558)return o(I(13,0,1),null),n;var l=z(e,s+8);if(l){var v=l,d=_(e,s+16),u=d==4294967295||v==65535;if(u){var g=_(e,s-12);u=_(e,g)==101075792,u&&(v=l=_(e,g+32),d=_(e,g+48))}for(var M=t&&t.filter,Y=function(b){var R=_n(e,d,u),V=R[0],E=R[1],U=R[2],J=R[3],lt=R[4],xt=R[5],W=On(e,xt);d=lt;var P=function(x,ut){x?(n(),o(x,null)):(ut&&(a[J]=ut),--l||o(null,a))};if(!M||M({name:J,size:E,originalSize:U,compression:V}))if(!V)P(null,_t(e,W,W+E));else if(V==8){var X=e.subarray(W,W+E);if(U<524288||E>.8*U)try{P(null,ce(X,{out:new D(U)}))}catch(x){P(x,null)}else i.push(Rn(X,{size:U},P))}else P(I(14,"unknown compression type "+V,1),null);else P(null,null)},L=0;L<v;++L)Y(L)}else o(null,{});return n}var Or=require("fs"),k=require("fs/promises"),ct=require("path");c();function Ar(e){function t(o,s,l,v){let d=0;return d+=o<<0,d+=s<<8,d+=l<<16,d+=v<<24>>>0,d}if(e[0]===80&&e[1]===75&&e[2]===3&&e[3]===4)return e;if(e[0]!==67||e[1]!==114||e[2]!==50||e[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let r=e[4]===3,i=e[4]===2;if(!i&&!r||e[5]||e[6]||e[7])throw new Error("Unexpected crx format version number.");if(i){let o=t(e[8],e[9],e[10],e[11]),s=t(e[12],e[13],e[14],e[15]),l=16+o+s;return e.subarray(l,e.length)}let a=12+t(e[8],e[9],e[10],e[11]);return e.subarray(a,e.length)}Lt();var zn=(0,ct.join)(It,"ExtensionCache");async function kn(e,t){return await(0,k.mkdir)(t,{recursive:!0}),new Promise((r,i)=>{Pr(e,(n,a)=>{if(n)return void i(n);Promise.all(Object.keys(a).map(async o=>{if(o.startsWith("_metadata/"))return;if(o.endsWith("/"))return void(0,k.mkdir)((0,ct.join)(t,o),{recursive:!0});let s=o.split("/"),l=s.pop(),v=s.join("/"),d=(0,ct.join)(t,v);v&&await(0,k.mkdir)(d,{recursive:!0}),await(0,k.writeFile)((0,ct.join)(d,l),a[o])})).then(()=>r()).catch(o=>{(0,k.rm)(t,{recursive:!0,force:!0}),i(o)})})})}async function _r(e){let t=(0,ct.join)(zn,`${e}`);try{await(0,k.access)(t,Or.constants.F_OK)}catch{let i=e==="fmkadmapgofadopljbjfkapdkoienihi"?"https://raw.githubusercontent.com/Vendicated/random-files/f6f550e4c58ac5f2012095a130406c2ab25b984d/fmkadmapgofadopljbjfkapdkoienihi.zip":`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${e}%26uc&prodversion=${process.versions.chrome}`,n=await et(i,{headers:{"User-Agent":`Electron ${process.versions.electron} ~ Vencord (https://github.com/Vendicated/Vencord)`}});await kn(Ar(n),t).catch(console.error)}Cr.session.defaultSession.loadExtension(t)}K.app.whenReady().then(()=>{K.protocol.registerFileProtocol("vencord",({url:n},a)=>{let o=n.slice(10);if(o.endsWith("/")&&(o=o.slice(0,-1)),o.startsWith("/themes/")){let s=o.slice(8),l=re(B,s);if(!l){a({statusCode:403});return}a(l.replace(/\?v=\d+$/,""));return}switch(o){case"renderer.js.map":case"vencordDesktopRenderer.js.map":case"preload.js.map":case"vencordDesktopPreload.js.map":case"patcher.js.map":case"vencordDesktopMain.js.map":a((0,Mr.join)(__dirname,o));break;default:a({statusCode:403})}});try{A.store.enableReactDevtools&&_r("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(n=>console.error("[Vencord] Failed to install React Developer Tools",n))}catch{}let e=(n,a)=>Object.keys(n).find(o=>o.toLowerCase()===a),t=n=>{let a={};return n.split(";").forEach(o=>{let[s,...l]=o.trim().split(/\s+/g);s&&!Object.prototype.hasOwnProperty.call(a,s)&&(a[s]=l)}),a},r=n=>Object.entries(n).filter(([,a])=>a?.length).map(a=>a.flat().join(" ")).join("; "),i=n=>{let a=e(n,"content-security-policy");if(a){let o=t(n[a][0]);for(let s of["style-src","connect-src","img-src","font-src","media-src","worker-src"])o[s]??=[],o[s].push("*","blob:","data:","vencord:","'unsafe-inline'");o["script-src"]??=[],o["script-src"].push("'unsafe-eval'","https://unpkg.com","https://cdnjs.cloudflare.com"),n[a]=[r(o)]}};K.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:n,resourceType:a},o)=>{if(n&&(a==="mainFrame"&&i(n),a==="stylesheet")){let s=e(n,"content-type");s&&(n[s]=["text/css"])}o({cancel:!1,responseHeaders:n})}),K.session.defaultSession.webRequest.onHeadersReceived=()=>{}});
//# sourceURL=VencordDesktopMain
//# sourceMappingURL=vencord://vencordDesktopMain.js.map
/*! For license information please see vencordDesktopMain.js.LEGAL.txt */
