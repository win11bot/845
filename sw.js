if(!self.define){let e,r={};const s=(s,i)=>(s=new URL(s+".js",i).href,r[s]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=r,document.head.appendChild(e)}else e=s,importScripts(s),r()})).then((()=>{let e=r[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(r[n])return;let o={};const d=e=>s(e,n),l={module:{uri:n},exports:o,require:d};r[n]=Promise.all(i.map((e=>l[e]||d(e)))).then((e=>(c(...e),o)))}}define(["./workbox-87098c68"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"df3927e02639de450c74d101c021d6af"},{url:"assets/index.ebd655c1.css",revision:null},{url:"console.js",revision:"6271abe80422cf62499c5c1f2bb9b0e8"},{url:"dycalendar.css",revision:"c3f95b0d457fc09e1fb5cb8d40082771"},{url:"dycalendar.js",revision:"11445374a1ed092479bd7133f10b7b28"},{url:"google5c2eff7d87cfc5e5.html",revision:"225b1ad0896ac46918f0740ac7d0146a"},{url:"index.html",revision:"343849e705dc95c4754281e9c2acee60"},{url:"react-pwa.js",revision:"98c89265d0a182bed1dd329e1bff75f9"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"script.js",revision:"de7598e75e867ada699e97f190ca890a"},{url:"serviceWorker.js",revision:"7ae89bc5caf2de9b7e82b4afc0ae2574"},{url:"style.css",revision:"34741ec84f2c05e353fbe59ad370fc66"},{url:"manifest.webmanifest",revision:"d8801b9a9a617c0234933675774554fe"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
