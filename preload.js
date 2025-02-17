// Vencord 1f67203
// Standalone: true
// Platform: Universal
// Updater Disabled: false
"use strict";function _(e,r=300){let o;return function(...d){clearTimeout(o),o=setTimeout(()=>{e(...d)},r)}}var n=require("electron"),a=require("fs"),c=require("path");var s=require("electron");function t(e,...r){return s.ipcRenderer.invoke(e,...r)}function m(e,...r){return s.ipcRenderer.sendSync(e,...r)}var S={},u=m("VencordGetPluginIpcMethodMap");for(let[e,r]of Object.entries(u)){let o=S[e]={};for(let[d,g]of Object.entries(r))o[d]=(...p)=>t(g,...p)}var i={themes:{uploadTheme:(e,r)=>t("VencordUploadTheme",e,r),deleteTheme:e=>t("VencordDeleteTheme",e),getThemesDir:()=>t("VencordGetThemesDir"),getThemesList:()=>t("VencordGetThemesList"),getThemeData:e=>t("VencordGetThemeData",e),getSystemValues:()=>t("VencordGetThemeSystemValues")},updater:{getUpdates:()=>t("VencordGetUpdates"),update:()=>t("VencordUpdate"),rebuild:()=>t("VencordBuild"),getRepo:()=>t("VencordGetRepo")},settings:{get:()=>m("VencordGetSettings"),set:(e,r)=>t("VencordSetSettings",e,r),getSettingsDir:()=>t("VencordGetSettingsDir")},quickCss:{get:()=>t("VencordGetQuickCss"),set:e=>t("VencordSetQuickCss",e),addChangeListener(e){s.ipcRenderer.on("VencordQuickCssUpdate",(r,o)=>e(o))},addThemeChangeListener(e){s.ipcRenderer.on("VencordThemeUpdate",()=>e())},openFile:()=>t("VencordOpenQuickCss"),openEditor:()=>t("VencordOpenMonacoEditor")},native:{getVersions:()=>process.versions,openExternal:e=>t("VencordOpenExternal",e)},pluginHelpers:S};n.contextBridge.exposeInMainWorld("VencordNative",i);if(location.protocol!=="data:"){let e=(0,c.join)(__dirname,"renderer.css"),r=document.createElement("style");r.id="vencord-css-core",r.textContent=(0,a.readFileSync)(e,"utf-8"),document.readyState==="complete"?document.documentElement.appendChild(r):document.addEventListener("DOMContentLoaded",()=>document.documentElement.appendChild(r),{once:!0}),n.webFrame.executeJavaScript((0,a.readFileSync)((0,c.join)(__dirname,"renderer.js"),"utf-8")),require(process.env.DISCORD_PRELOAD)}else n.contextBridge.exposeInMainWorld("setCss",_(i.quickCss.set)),n.contextBridge.exposeInMainWorld("getCurrentCss",i.quickCss.get),n.contextBridge.exposeInMainWorld("getTheme",()=>"vs-dark");
//# sourceURL=VencordPreload
//# sourceMappingURL=vencord://preload.js.map
