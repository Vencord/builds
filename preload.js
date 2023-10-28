// Vencord 4b958d1
// Standalone: true
// Platform: Universal
// Updater disabled: false
"use strict";function _(e,t=300){let s;return function(...c){clearTimeout(s),s=setTimeout(()=>{e(...c)},t)}}var n=require("electron"),T=require("fs"),a=require("path");var o=require("electron");function r(e,...t){return o.ipcRenderer.invoke(e,...t)}function S(e,...t){return o.ipcRenderer.sendSync(e,...t)}var d={themes:{uploadTheme:(e,t)=>r("VencordUploadTheme",e,t),deleteTheme:e=>r("VencordDeleteTheme",e),getThemesDir:()=>r("VencordGetThemesDir"),getThemesList:()=>r("VencordGetThemesList"),getThemeData:e=>r("VencordGetThemeData",e),getSystemValues:()=>r("VencordGetThemeSystemValues")},updater:{getUpdates:()=>r("VencordGetUpdates"),update:()=>r("VencordUpdate"),rebuild:()=>r("VencordBuild"),getRepo:()=>r("VencordGetRepo")},settings:{get:()=>S("VencordGetSettings"),set:e=>r("VencordSetSettings",e),getSettingsDir:()=>r("VencordGetSettingsDir")},quickCss:{get:()=>r("VencordGetQuickCss"),set:e=>r("VencordSetQuickCss",e),addChangeListener(e){o.ipcRenderer.on("VencordQuickCssUpdate",(t,s)=>e(s))},addThemeChangeListener(e){o.ipcRenderer.on("VencordThemeUpdate",()=>e())},openFile:()=>r("VencordOpenQuickCss"),openEditor:()=>r("VencordOpenMonacoEditor")},native:{getVersions:()=>process.versions,openExternal:e=>r("VencordOpenExternal",e)},pluginHelpers:{OpenInApp:{resolveRedirect:e=>r("VencordOIAResolveRedirect",e)},VoiceMessages:{readRecording:e=>r("VencordVMReadRecording",e)}}};n.contextBridge.exposeInMainWorld("VencordNative",d);if(location.protocol!=="data:"){let e=(0,a.join)(__dirname,"renderer.css"),t=document.createElement("style");t.id="vencord-css-core",t.textContent=(0,T.readFileSync)(e,"utf-8"),document.readyState==="complete"?document.documentElement.appendChild(t):document.addEventListener("DOMContentLoaded",()=>document.documentElement.appendChild(t),{once:!0}),n.webFrame.executeJavaScript((0,T.readFileSync)((0,a.join)(__dirname,"renderer.js"),"utf-8")),require(process.env.DISCORD_PRELOAD)}else n.contextBridge.exposeInMainWorld("setCss",_(d.quickCss.set)),n.contextBridge.exposeInMainWorld("getCurrentCss",d.quickCss.get),n.contextBridge.exposeInMainWorld("getTheme",()=>"vs-dark");
//# sourceURL=VencordPreload
//# sourceMappingURL=vencord://preload.js.map
