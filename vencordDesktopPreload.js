// Vencord d9933c5
// Standalone: true
// Platform: Universal
// Updater disabled: false
"use strict";function T(e,t=300){let i;return function(..._){clearTimeout(i),i=setTimeout(()=>{e(..._)},t)}}var o=require("electron"),a=require("fs"),c=require("path");var n=require("electron");function r(e,...t){return n.ipcRenderer.invoke(e,...t)}function S(e,...t){return n.ipcRenderer.sendSync(e,...t)}var d={themes:{uploadTheme:(e,t)=>r("VencordUploadTheme",e,t),deleteTheme:e=>r("VencordDeleteTheme",e),getThemesDir:()=>r("VencordGetThemesDir"),getThemesList:()=>r("VencordGetThemesList"),getThemeData:e=>r("VencordGetThemeData",e)},updater:{getUpdates:()=>r("VencordGetUpdates"),update:()=>r("VencordUpdate"),rebuild:()=>r("VencordBuild"),getRepo:()=>r("VencordGetRepo")},settings:{get:()=>S("VencordGetSettings"),set:e=>r("VencordSetSettings",e),getSettingsDir:()=>r("VencordGetSettingsDir")},quickCss:{get:()=>r("VencordGetQuickCss"),set:e=>r("VencordSetQuickCss",e),addChangeListener(e){n.ipcRenderer.on("VencordQuickCssUpdate",(t,i)=>e(i))},addThemeChangeListener(e){n.ipcRenderer.on("VencordThemeUpdate",()=>e())},openFile:()=>r("VencordOpenQuickCss"),openEditor:()=>r("VencordOpenMonacoEditor")},native:{getVersions:()=>process.versions,openExternal:e=>r("VencordOpenExternal",e)},pluginHelpers:{OpenInApp:{resolveRedirect:e=>r("VencordOIAResolveRedirect",e)},VoiceMessages:{readRecording:e=>r("VencordVMReadRecording",e)}}};o.contextBridge.exposeInMainWorld("VencordNative",d);if(location.protocol!=="data:"){let e=(0,c.join)(__dirname,"vencordDesktopRenderer.css"),t=document.createElement("style");t.id="vencord-css-core",t.textContent=(0,a.readFileSync)(e,"utf-8"),document.readyState==="complete"?document.documentElement.appendChild(t):document.addEventListener("DOMContentLoaded",()=>document.documentElement.appendChild(t),{once:!0})}else o.contextBridge.exposeInMainWorld("setCss",T(d.quickCss.set)),o.contextBridge.exposeInMainWorld("getCurrentCss",d.quickCss.get),o.contextBridge.exposeInMainWorld("getTheme",()=>"vs-dark");
//# sourceURL=VencordPreload
//# sourceMappingURL=vencord://vencordDesktopPreload.js.map
