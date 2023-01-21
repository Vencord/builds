// Vencord 6e44b8c
// Standalone: true
// Platform: Universal
"use strict";function S(e,n=300){let r;return function(...o){clearTimeout(r),r=setTimeout(()=>{e(...o)},n)}}function T(e){let n={};for(let r in e)n[r]=e[r],n[e[r]]=r;return Object.freeze(n)}var c=T({QUICK_CSS_UPDATE:"VencordQuickCssUpdate",GET_QUICK_CSS:"VencordGetQuickCss",SET_QUICK_CSS:"VencordSetQuickCss",GET_SETTINGS_DIR:"VencordGetSettingsDir",GET_SETTINGS:"VencordGetSettings",SET_SETTINGS:"VencordSetSettings",OPEN_EXTERNAL:"VencordOpenExternal",OPEN_QUICKCSS:"VencordOpenQuickCss",GET_UPDATES:"VencordGetUpdates",GET_REPO:"VencordGetRepo",GET_HASHES:"VencordGetHashes",UPDATE:"VencordUpdate",BUILD:"VencordBuild",OPEN_MONACO_EDITOR:"VencordOpenMonacoEditor",DOWNLOAD_VENCORD_CSS:"VencordDownloadVencordCss"});var t=require("electron"),E=require("fs"),p=require("path");var s=require("electron");function d(e){if(!(e in c))throw new Error(`Event ${e} not allowed.`)}var i={getVersions:()=>process.versions,ipc:{send(e,...n){d(e),s.ipcRenderer.send(e,...n)},sendSync(e,...n){return d(e),s.ipcRenderer.sendSync(e,...n)},on(e,n){d(e),s.ipcRenderer.on(e,n)},off(e,n){d(e),s.ipcRenderer.off(e,n)},invoke(e,...n){return d(e),s.ipcRenderer.invoke(e,...n)}}};t.contextBridge.exposeInMainWorld("VencordNative",i);if(location.protocol!=="data:"){let n=function(r){let o=document.createElement("style");o.id="vencord-css-core",o.textContent=r,document.readyState==="complete"?document.documentElement.appendChild(o):document.addEventListener("DOMContentLoaded",()=>document.documentElement.appendChild(o),{once:!0})};R=n,t.webFrame.executeJavaScript((0,E.readFileSync)((0,p.join)(__dirname,"renderer.js"),"utf-8"));let e=(0,p.join)(__dirname,"renderer.css");try{let r=(0,E.readFileSync)(e,"utf-8");n(r)}catch(r){if(r?.code!=="ENOENT")throw r;t.ipcRenderer.invoke(c.DOWNLOAD_VENCORD_CSS).then(n)}require(process.env.DISCORD_PRELOAD)}else t.contextBridge.exposeInMainWorld("setCss",S(e=>i.ipc.invoke(c.SET_QUICK_CSS,e))),t.contextBridge.exposeInMainWorld("getCurrentCss",()=>i.ipc.invoke(c.GET_QUICK_CSS)),t.contextBridge.exposeInMainWorld("getTheme",()=>"vs-dark");var R;
//# sourceURL=VencordPreload
//# sourceMappingURL=vencord://preload.js.map
