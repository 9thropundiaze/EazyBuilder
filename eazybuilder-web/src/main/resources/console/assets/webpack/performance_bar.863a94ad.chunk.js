(this.webpackJsonp=this.webpackJsonp||[]).push([[419],{"0c6/":function(e,t,n){"use strict";n.r(t);n("jaBk"),n("S26F"),n("Ch9p");var r,i,a=n("jB52"),o=n("2ibD"),s=n("SNRI"),c=n("/lV4"),u=n("0KyK"),d=function(){return"".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return{name:e,value:t,delta:0,entries:[],id:d(),isFinal:!1}},f=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},p=!1,h=!1,m=function(e){p=!e.persisted},b=function(){addEventListener("pagehide",m),addEventListener("beforeunload",(function(){}))},g=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];h||(b(),h=!0),addEventListener("visibilitychange",(function(t){var n=t.timeStamp;"hidden"===document.visibilityState&&e({timeStamp:n,isUnloading:p})}),{capture:!0,once:t})},v=function(e,t,n,r){var i;return function(){n&&t.isFinal&&n.disconnect(),t.value>=0&&(r||t.isFinal||"hidden"===document.visibilityState)&&(t.delta=t.value-(i||0),(t.delta||t.isFinal||void 0===i)&&(e(t),i=t.value))}},y=function(){return void 0===r&&(r="hidden"===document.visibilityState?0:1/0,g((function(e){var t=e.timeStamp;return r=t}),!0)),{get timeStamp(){return r}}},w=function(){return i||(i=new Promise((function(e){return["scroll","keydown","pointerdown"].map((function(t){addEventListener(t,e,{once:!0,passive:!0,capture:!0})}))}))),i},D=n("0ch9");const O=function(){const e=function(e){console.log("".concat(String.fromCodePoint(128200)," ").concat(e.name," : "),e)};console.log("".concat(String.fromCodePoint(128209)," To get the final web vital numbers reported you maybe need to switch away and back to the tab")),function(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=l("CLS",0),i=function(e){e.hadRecentInput||(r.value+=e.value,r.entries.push(e),t())},a=f("layout-shift",i);a&&(t=v(e,r,a,n),g((function(e){var n=e.isUnloading;a.takeRecords().map(i),n&&(r.isFinal=!0),t()})))}(e),function(e){var t=l("FID"),n=y(),r=function(e){e.startTime<n.timeStamp&&(t.value=e.processingStart-e.startTime,t.entries.push(e),t.isFinal=!0,a())},i=f("first-input",r),a=v(e,t,i);i?g((function(){i.takeRecords().map(r),i.disconnect()}),!0):window.perfMetrics&&window.perfMetrics.onFirstInputDelay&&window.perfMetrics.onFirstInputDelay((function(e,r){r.timeStamp<n.timeStamp&&(t.value=e,t.isFinal=!0,t.entries=[{entryType:"first-input",name:r.type,target:r.target,cancelable:r.cancelable,startTime:r.timeStamp,processingStart:r.timeStamp+e}],a())}))}(e),function(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=l("LCP"),i=y(),a=function(e){var n=e.startTime;n<i.timeStamp?(r.value=n,r.entries.push(e)):r.isFinal=!0,t()},o=f("largest-contentful-paint",a);if(o){t=v(e,r,o,n);var s=function(){r.isFinal||(o.takeRecords().map(a),r.isFinal=!0,t())};w().then(s),g(s,!0)}}(e)};var q=function(){console.log("%c ".concat(String.fromCodePoint(129418)," GitLab performance bar"),"width:100%; background-color: #292961; color: #FFFFFF; padding: 10px; display:block;"),O(),new PerformanceObserver((function(e){e.getEntries().forEach((function(e){const{name:t,entryType:n,startTime:r,duration:i}=e,a={[D.h]:String.fromCodePoint(127919),[D.i]:String.fromCodePoint(128208)};console.group("".concat(a[n]," ").concat(t)),n===D.h?console.log("Start time: ".concat(r)):n===D.i&&console.log("Duration: ".concat(i)),console.log(e),console.groupEnd()}))})).observe({entryTypes:[D.i,D.h]})},P=n("hamy");n("AVOg"),n("l9AF"),n("pBsb"),n("orcL");function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class E{constructor(){this.requests=[]}addRequest(e,t){if(!this.findRequest(e)){const n=E.truncateUrl(t);this.requests.push({id:e,url:t,truncatedUrl:n,details:{},hasWarnings:!1})}return this.requests}findRequest(e){return this.requests.find((function(t){return t.id===e}))}addRequestDetails(e,t){const n=this.findRequest(e);return n.details=t.data,n.hasWarnings=t.has_warnings,n}setRequestDetailsData(e,t,n){const r=this.findRequest(e);r&&(r.details=F(F({},r.details),{},{[t]:n}))}requestsWithDetails(){return this.requests.filter((function(e){return e.details}))}canTrackRequest(e){const t=e.endsWith("/api/graphql")?10:2;return this.requests.filter((function(t){return t.url===e})).length<t}static truncateUrl(e){const[t]=e.split("#"),[n,r]=t.split("?"),i=n.replace(/\/$/,"").split("/");let a=i[i.length-1];return a.match(/^\d+$/)&&(a="".concat(i[i.length-2],"/").concat(a)),r&&(a+="?".concat(r)),a}}a.default.use(u.a);const R=function(e){if(!e)return;const t=e.dataset;return new a.default({el:e,components:{PerformanceBarApp:function(){return Promise.all([n.e(52),n.e(450),n.e(461)]).then(n.bind(null,"HSIU"))}},data:()=>({store:new E,env:t.env,requestId:t.requestId,peekUrl:t.peekUrl,profileUrl:t.profileUrl,statsUrl:t.statsUrl}),mounted(){P.a.registerInterceptor(this.peekUrl,this.loadRequestDetails),this.loadRequestDetails(this.requestId,window.location.href)},beforeDestroy(){P.a.removeInterceptor()},methods:{addRequestManually(e){e.startsWith("https://")||e.startsWith("http://")?o.a.get(e):this.loadRequestDetails(e,e)},loadRequestDetails(e,t){var n=this;this.store.canTrackRequest(t)&&(this.store.addRequest(e,t),P.a.fetchRequestDetails(this.peekUrl,e).then((function(t){n.store.addRequestDetails(e,t.data),n.requestId===e&&n.collectFrontendPerformanceMetrics()})).catch((function(){return console.warn("Error getting performance bar results for ".concat(e))})))},collectFrontendPerformanceMetrics(){var e=this;if(performance){const t=performance.getEntriesByType("navigation"),n=performance.getEntriesByType("paint"),r=performance.getEntriesByType("resource");let i="",a={};if(t.length>0){const e=Math.round(t[0].responseEnd),r=Math.round(n[1].startTime),o=Math.round(t[0].domContentLoadedEventEnd);a={[Object(c.e)("PerformanceBar|Backend")]:e,[Object(c.e)("PerformanceBar|First Contentful Paint")]:r,[Object(c.e)("PerformanceBar|DOM Content Loaded")]:o},i="".concat(e," | ").concat(r," | ").concat(o)}let o=r.map(this.transformResourceEntry);if(this.updateFrontendPerformanceMetrics(i,a,o),"PerformanceObserver"in window){new PerformanceObserver((function(t){o=o.concat(t.getEntries().map(e.transformResourceEntry)),e.updateFrontendPerformanceMetrics(i,a,o)})).observe({entryTypes:["resource"]})}}},updateFrontendPerformanceMetrics(e,t,n){this.store.setRequestDetailsData(this.requestId,"total",{duration:e,calls:n.length,details:n,summaryOptions:{hideDuration:!0},summary:t})},transformResourceEntry:e=>({start:e.startTime,name:e.name.replace(document.location.origin,""),duration:Math.round(e.duration),size:e.transferSize?Object(s.c)(e.transferSize):"cached"})},render(e){return e("performance-bar-app",{props:{store:this.store,env:this.env,requestId:this.requestId,peekUrl:this.peekUrl,profileUrl:this.profileUrl,statsUrl:this.statsUrl},on:{"add-request":this.addRequestManually}})}})};R(document.querySelector("#js-peek")),q();t.default=R},"0ch9":function(e,t,n){"use strict";n.d(t,"h",(function(){return r})),n.d(t,"i",(function(){return i})),n.d(t,"u",(function(){return a})),n.d(t,"t",(function(){return o})),n.d(t,"s",(function(){return s})),n.d(t,"v",(function(){return c})),n.d(t,"w",(function(){return u})),n.d(t,"F",(function(){return d})),n.d(t,"G",(function(){return l})),n.d(t,"I",(function(){return f})),n.d(t,"H",(function(){return p})),n.d(t,"y",(function(){return h})),n.d(t,"x",(function(){return m})),n.d(t,"C",(function(){return b})),n.d(t,"B",(function(){return g})),n.d(t,"A",(function(){return v})),n.d(t,"z",(function(){return y})),n.d(t,"E",(function(){return w})),n.d(t,"D",(function(){return D})),n.d(t,"O",(function(){return O})),n.d(t,"N",(function(){return q})),n.d(t,"K",(function(){return P})),n.d(t,"M",(function(){return k})),n.d(t,"J",(function(){return F})),n.d(t,"P",(function(){return j})),n.d(t,"L",(function(){return E})),n.d(t,"d",(function(){return R})),n.d(t,"c",(function(){return S})),n.d(t,"b",(function(){return I})),n.d(t,"e",(function(){return B})),n.d(t,"a",(function(){return M})),n.d(t,"g",(function(){return U})),n.d(t,"f",(function(){return T})),n.d(t,"l",(function(){return _})),n.d(t,"k",(function(){return L})),n.d(t,"m",(function(){return z})),n.d(t,"o",(function(){return C})),n.d(t,"n",(function(){return W})),n.d(t,"j",(function(){return x})),n.d(t,"r",(function(){return G})),n.d(t,"q",(function(){return K})),n.d(t,"p",(function(){return N}));const r="mark",i="measure",a="snippet-view-app-start",o="snippet-edit-app-start",s="snippet-blobs-content-finished",c="snippet-blobs-content",u="webide-app-start",d="webide-file-clicked",l="webide-file-finished",f="webide-init-editor-start",p="webide-init-editor-finish",h="webide-getBranchData-start",m="webide-getBranchData-finish",b="webide-getFileData-start",g="webide-getFileData-finish",v="webide-getFiles-start",y="webide-getFiles-finish",w="webide-getProjectData-start",D="webide-getProjectData-finish",O="webide-file-loading-after-interaction",q="WebIDE: Project data",P="WebIDE: Branch data",k="WebIDE: File data",F="WebIDE: Before Vue app",j="WebIDE: Repo Editor",E="WebIDE: Fetch Files",R="mr-diffs-mark-file-tree-start",S="mr-diffs-mark-file-tree-end",I="mr-diffs-mark-diff-files-start",B="mr-diffs-mark-first-diff-file-shown",M="mr-diffs-mark-diff-files-end",U="mr-diffs-measure-file-tree-done",T="mr-diffs-measure-diff-files-done",_="pipelines-detail-links-mark-calculate-start",L="pipelines-detail-links-mark-calculate-end",z="Pipelines Detail Graph: Links Calculation",C="pipeline_graph_link_calculation_duration_seconds",W="pipeline_graph_links_total",x="pipeline_graph_links_per_job_ratio",G="blobviewer-load-viewer-start",K="blobviewer-load-viewer-finish",N="Repository File Viewer: loading the content"},SNRI:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return u}));n("MoW5"),n("GzNv"),n("pBsb"),n("orcL");var r=n("/lV4"),i=n("GuZl");function a(e){return e/(i.d*i.d)}function o(e){return e/(i.d*i.d*i.d)}function s(e){return e<i.d?Object(r.f)(Object(r.a)("%{size} bytes"),{size:e}):e<i.d*i.d?Object(r.f)(Object(r.a)("%{size} KiB"),{size:(t=e,t/i.d).toFixed(2)}):e<i.d*i.d*i.d?Object(r.f)(Object(r.a)("%{size} MiB"),{size:a(e).toFixed(2)}):Object(r.f)(Object(r.a)("%{size} GiB"),{size:o(e).toFixed(2)});var t}const c=/^[0-9]+$/,u=function(e){return c.test(e)}},hamy:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("orcL");var r,i,a,o=n("NmEs"),s=n("2ibD");class c{static fetchRequestDetails(e,t){return s.a.get(e,{params:{request_id:t}})}static registerInterceptor(e,t){return c.interceptor=function(n){const[r,i,a]=c.callbackParams(n,e);return r&&t(i,a),n},s.a.interceptors.response.use(c.interceptor)}static removeInterceptor(){s.a.interceptors.response.eject(c.interceptor),c.interceptor=null}static callbackParams(e,t){var n;const r=e.headers&&e.headers["x-request-id"],i=null===(n=e.config)||void 0===n?void 0:n.url,a=e.headers&&Object(o.K)(e.headers["x-gitlab-from-cache"]);return[i!==t&&Boolean(r)&&!a,r,i]}}a=null,(i="interceptor")in(r=c)?Object.defineProperty(r,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[i]=a}},[["0c6/",1,0]]]);
//# sourceMappingURL=performance_bar.863a94ad.chunk.js.map