// Vencord ceb1f15
// Standalone: true
// Platform: Universal
"use strict";function m(e,t=300){let r;return function(...T){clearTimeout(r),r=setTimeout(()=>{e(...T)},t)}}var o=require("electron"),a=require("fs"),S=require("path");var s=require("electron");function n(e,...t){return s.ipcRenderer.invoke(e,...t)}function E(e,...t){return s.ipcRenderer.sendSync(e,...t)}var i={updater:{getUpdates:()=>n("VencordGetUpdates"),update:()=>n("VencordUpdate"),rebuild:()=>n("VencordBuild"),getRepo:()=>n("VencordGetRepo")},settings:{get:()=>E("VencordGetSettings"),set:e=>n("VencordSetSettings",e),getSettingsDir:()=>n("VencordGetSettingsDir")},quickCss:{get:()=>n("VencordGetQuickCss"),set:e=>n("VencordSetQuickCss",e),addChangeListener(e){s.ipcRenderer.on("VencordQuickCssUpdate",(t,r)=>e(r))},openFile:()=>n("VencordOpenQuickCss"),openEditor:()=>n("VencordOpenMonacoEditor")},native:{getVersions:()=>process.versions,openExternal:e=>n("VencordOpenExternal",e)}};o.contextBridge.exposeInMainWorld("VencordNative",i);if(location.protocol!=="data:"){let e=(0,S.join)(__dirname,"renderer.css"),t=document.createElement("style");t.id="vencord-css-core",t.textContent=(0,a.readFileSync)(e,"utf-8"),document.readyState==="complete"?document.documentElement.appendChild(t):document.addEventListener("DOMContentLoaded",()=>document.documentElement.appendChild(t),{once:!0}),process.env.DISCORD_PRELOAD&&(o.webFrame.executeJavaScript((0,a.readFileSync)((0,S.join)(__dirname,"renderer.js"),"utf-8")),require(process.env.DISCORD_PRELOAD))}else o.contextBridge.exposeInMainWorld("setCss",m(i.quickCss.set)),o.contextBridge.exposeInMainWorld("getCurrentCss",i.quickCss.get),o.contextBridge.exposeInMainWorld("getTheme",()=>"vs-dark");
//# sourceURL=VencordPreload
//# sourceMappingURL=vencord://preload.js.map
