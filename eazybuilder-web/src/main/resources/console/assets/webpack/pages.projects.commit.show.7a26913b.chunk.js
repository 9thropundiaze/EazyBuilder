(this.webpackJsonp=this.webpackJsonp||[]).push([[298],{"/GZH":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return s})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return u})),n.d(e,"i",(function(){return d}));var r=40,o=35,i=13,a=27,s=36,c=37,l=39,u=32,d=38},"0DPl":function(t,e,n){"use strict";var r=n("EmJ/"),o=n.n(r),i=n("m/7A");const a=function(t,e,n,r){const o=Math.floor(t.offsetTop-e);if(o<=n&&!t.classList.contains("is-stuck")){const e=r?function(){const t=document.createElement("div");return t.classList.add("sticky-placeholder"),t}():null,n=t.offsetHeight;t.classList.add("is-stuck"),r&&(t.parentNode.insertBefore(e,t.nextElementSibling),e.style.height="".concat(n-t.offsetHeight,"px"))}else o>n&&t.classList.contains("is-stuck")&&(t.classList.remove("is-stuck"),r&&t.nextElementSibling&&t.nextElementSibling.classList.contains("sticky-placeholder")&&t.nextElementSibling.remove())};e.a=function(t){!function(t,e){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];t&&"undefined"!=typeof CSS&&CSS.supports("(position: -webkit-sticky) or (position: sticky)")&&document.addEventListener("scroll",(function(){return a(t,window.scrollY,e,n)}),{passive:!0})}(document.querySelector(".js-diff-files-changed"),t),Object(i.a)(o()(".js-diff-stats-dropdown"),{filterable:!0,remoteFilter:!1})}},127:function(t,e,n){n("HVBj"),n("gjpc"),t.exports=n("Fn1g")},"3A1J":function(t,e,n){"use strict";var r=n("LLbv"),o=n("4lAS"),i=n("Pyw5"),a=n.n(i);const s={components:{GlButton:o.a},directives:{GlTooltip:r.a},props:{title:{type:String,required:!1,default:"Clear"},tooltipContainer:{required:!1,default:!1,validator:function(t){return!1===t||"string"==typeof t||t instanceof HTMLElement}}}};const c=a()({render:function(){var t=this.$createElement;return(this._self._c||t)("gl-button",this._g({directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip.hover",value:{container:this.tooltipContainer},expression:"{ container: tooltipContainer }",modifiers:{hover:!0}}],staticClass:"gl-clear-icon-button",attrs:{variant:"default",category:"tertiary",size:"small",name:"clear",icon:"clear",title:this.title,"aria-label":this.title}},this.$listeners))},staticRenderFns:[]},void 0,s,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=c},"4lAS":function(t,e,n){"use strict";var r=n("ofGl"),o=n("XBTk"),i=n("g3So"),a=n("s1D3"),s=n("FkSe"),c=n("Pyw5"),l=n.n(c);const u={components:{BButton:r.a,GlIcon:a.a,GlLoadingIcon:s.a},mixins:[i.a],props:{category:{type:String,required:!1,default:o.u.primary,validator:function(t){return Object.keys(o.u).includes(t)}},variant:{type:String,required:!1,default:o.x.default,validator:function(t){return Object.keys(o.x).includes(t)}},size:{type:String,required:!1,default:o.v.medium,validator:function(t){return Object.keys(o.v).includes(t)}},selected:{type:Boolean,required:!1,default:!1},icon:{type:String,required:!1,default:""},label:{type:Boolean,required:!1,default:!1},loading:{type:Boolean,required:!1,default:!1},buttonTextClasses:{type:String,required:!1,default:""},disabled:{type:Boolean,required:!1,default:!1}},computed:{hasIcon:function(){return""!==this.icon},hasIconOnly:function(){return 0===Object.keys(this.$slots).length&&this.hasIcon},isButtonDisabled:function(){return this.disabled||this.loading},buttonClasses:function(){var t=["gl-button"];return[o.x.dashed,o.x.link].includes(this.variant)||this.category===o.u.primary||t.push("btn-".concat(this.variant,"-").concat(this.category)),t.push({"btn-icon":this.hasIconOnly,"button-ellipsis-horizontal":this.hasIconOnly&&"ellipsis_h"===this.icon,selected:this.selected}),this.label&&t.push("btn","btn-label","btn-".concat(this.buttonSize)),t},buttonSize:function(){return o.w[this.size]}}};const d=l()({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.label?"span":"b-button",t._g(t._b({directives:[{name:"safe-link",rawName:"v-safe-link:[safeLinkConfig]",arg:t.safeLinkConfig}],tag:"component",class:t.buttonClasses,attrs:{target:t.target,variant:t.variant,size:t.buttonSize,disabled:t.isButtonDisabled}},"component",t.$attrs,!1),t.$listeners),[t.loading?n("gl-loading-icon",{staticClass:"gl-button-icon gl-button-loading-indicator",attrs:{inline:""}}):t._e(),t._v(" "),!t.hasIcon||t.hasIconOnly&&t.loading?t._e():n("gl-icon",{staticClass:"gl-button-icon",attrs:{name:t.icon}}),t._v(" "),t._t("emoji"),t._v(" "),t.hasIconOnly?t._e():n("span",{staticClass:"gl-button-text",class:t.buttonTextClasses},[t._t("default")],2)],2)},staticRenderFns:[]},void 0,u,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=d},"6iM1":function(t,e,n){"use strict";e.a={methods:{listenOnRoot:function(t,e){var n=this;this.$root.$on(t,e),this.$on("hook:beforeDestroy",(function(){n.$root.$off(t,e)}))},listenOnRootOnce:function(t,e){var n=this;this.$root.$once(t,e),this.$on("hook:beforeDestroy",(function(){n.$root.$off(t,e)}))},emitOnRoot:function(t){for(var e,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];(e=this.$root).$emit.apply(e,[t].concat(r))}}}},DXSV:function(t,e,n){"use strict";e.a={props:{id:{type:String}},data:function(){return{localId_:null}},computed:{safeId:function(){var t=this.id||this.localId_;return function(e){return t?(e=String(e||"").replace(/\s+/g,"_"))?t+"_"+e:t:null}}},mounted:function(){var t=this;this.$nextTick((function(){t.localId_="__BVID__".concat(t._uid)}))}}},FkSe:function(t,e,n){"use strict";var r=n("Pyw5"),o=["sm","md","lg","xl"],i={dark:"dark",light:"light"};const a={props:{label:{type:String,required:!1,default:"Loading"},size:{type:String,required:!1,default:"sm",validator:function(t){return-1!==o.indexOf(t)}},color:{type:String,required:!1,default:i.dark,validator:function(t){return Object.keys(i).includes(t)}},inline:{type:Boolean,required:!1,default:!1}},computed:{rootElementType:function(){return this.inline?"span":"div"},cssClasses:function(){return["gl-spinner","".concat("gl-spinner","-").concat(i[this.color]),"".concat("gl-spinner","-").concat(this.size)]}}};const s=n.n(r)()({render:function(){var t=this.$createElement,e=this._self._c||t;return e(this.rootElementType,{tag:"component",staticClass:"gl-spinner-container"},[e("span",{staticClass:"align-text-bottom",class:this.cssClasses,attrs:{"aria-label":this.label}})])},staticRenderFns:[]},void 0,a,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=s},Fn1g:function(t,e,n){"use strict";n.r(e);var r=n("EmJ/"),o=n.n(r),i=n("/ode"),a=n("CX32"),s=n("DN5t"),c=n("XRO8"),l=n("0DPl"),u=n("W0S0"),d=n("2ibD"),f=n("NmEs"),p=n("/lV4"),h=n("RLvT"),b=n("Wspy"),g=n("FYnm"),m=n("Ylta");n("ILhG");const j=document.querySelector(".with-performance-bar")?35:0;Object(l.a)(document.querySelector(".navbar-gitlab").offsetHeight+j),new m.a,new a.a,Object(b.a)(),Object(u.a)();const v=o()(".js-diffs-batch");if(v.length){const t=v.data("diffFilesPath");d.a.get(t).then((function(t){let{data:e}=t;v.html(o()(e)),Object(g.a)(v),Object(f.t)(),new s.a})).catch((function(){Object(c.b)({message:Object(p.a)("An error occurred while retrieving diff files")})}))}else new s.a;Object(i.b)(),Object(h.a)()},GVjJ:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return c}));n("EWC9"),n("gNBD"),n("orcL");var r=n("0AwG");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const s=function(t){const e=new FormData(t);return function(t){return t.reduce((function(t,e){let{name:n,value:r}=e;return Object.assign(t,{[n]:r})}),{})}(Array.from(e.keys()).map((function(t){let n=e.getAll(t);return{name:t,value:1===(n=n.filter((function(t){return t}))).length?n[0]:n}})))},c=function(t){if(!t)throw new TypeError("`mountEl` argument is required");return[...t.querySelectorAll("[name]")].reduce((function(t,e){const n=e.dataset.jsName;if(!n)return t;const o=Object(r.c)(n),{id:a,placeholder:s,name:c,value:l,type:u,checked:d}=e,f=i({name:c,id:a,value:l},s&&{placeholder:s});return["radio","checkbox"].includes(u)?i(i({},t),{},{[o]:[...t[o]||[],i(i({},f),{},{checked:d})]}):i(i({},t),{},{[o]:f})}),{})}},ILhG:function(t,e,n){"use strict";var r=n("U5ZW");document.addEventListener("DOMContentLoaded",r.a)},U5ZW:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("orcL"),n("pETN");function r(){const{url:t}=gon.sourcegraph||{};if(!t)return;const e=new URL("/assets/webpack/sourcegraph/0.0.57/",window.location.href),n=new URL("scripts/integration.bundle.js",e).href;window.SOURCEGRAPH_ASSETS_URL=e.href,window.SOURCEGRAPH_URL=t,window.SOURCEGRAPH_INTEGRATION="gitlab-integration",function(t){const e=document.createElement("script");e.type="application/javascript",e.src=t,e.defer=!0,document.head.appendChild(e)}(n)}},ZeWX:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));n("QifN"),n("pBsb"),n("Ch9p"),n("+xeR"),n("orcL"),n("pETN");var r=n("EmJ/"),o=n.n(r),i=n("06tH"),a=n.n(i);var s=n("m/7A"),c=n("XRO8"),l=n("2ibD"),u=n("GVjJ"),d=n("3twG"),f=n("/lV4"),p=n("k/Fq");class h{constructor(){!function(){const t=o()("ul.clone-options-dropdown");if(t.length){const e=o()("#clone_url"),n=o()(".js-git-clone-holder .js-clone-dropdown-label"),r=document.querySelector(".js-mobile-git-clone .js-clone-dropdown-label"),i=n.text().trim();i.length>0&&o()("a:contains('".concat(i,"')"),t).addClass("is-active"),o()("a",t).on("click",(function(n){const i=o()(n.currentTarget),a=i.attr("href");if(a&&(a.startsWith("vscode://")||a.startsWith("xcode://")))return;n.preventDefault();const s=i.data("cloneType");o()(".is-active",t).removeClass("is-active"),o()('a[data-clone-type="'.concat(s,'"]')).each((function(){const t=o()(this),e=t.find(".dropdown-menu-inner-title").text(),n=t.closest(".js-git-clone-holder, .js-mobile-git-clone").find(".js-clone-dropdown-label");t.toggleClass("is-active"),n.text(e)})),r?r.dataset.clipboardText=a:e.val(a),o()(".js-git-empty .js-clone").text(a)}))}}(),document.querySelector(".js-project-refs-dropdown")&&(h.initRefSwitcher(),o()(".project-refs-select").on("change",(function(){return o()(this).parents("form").trigger("submit")}))),o()(".hide-no-ssh-message").on("click",(function(t){return a.a.set("hide_no_ssh_message","false"),o()(this).parents(".no-ssh-key-message").remove(),t.preventDefault()})),o()(".hide-no-password-message").on("click",(function(t){return a.a.set("hide_no_password_message","false"),o()(this).parents(".no-password-message").remove(),t.preventDefault()})),o()(".hide-auto-devops-implicitly-enabled-banner").on("click",(function(t){const e=o()(this).data("project-id"),n="hide_auto_devops_implicitly_enabled_banner_".concat(e);return a.a.set(n,"false"),o()(this).parents(".auto-devops-implicitly-enabled-banner").remove(),t.preventDefault()})),h.projectSelectDropdown()}static projectSelectDropdown(){Object(p.a)(),o()(".project-item-select").on("click",(function(t){return h.changeProject(o()(t.currentTarget).val())}))}static changeProject(t){return window.location=t}static initRefSwitcher(){const t=document.createElement("li"),e=document.createElement("a");return e.href="#",o()(".js-project-refs-dropdown").each((function(){const n=o()(this),r=n.data("selected"),i=n.data("fieldName"),a=Boolean(n.data("visit")),p=n.closest("form"),h=p.attr("action"),b=Object(d.q)(Object(u.b)(p[0]),h);return Object(s.a)(n,{data(t,e){l.a.get(n.data("refsUrl"),{params:{ref:n.data("ref"),search:t}}).then((function(t){let{data:n}=t;return e(n)})).catch((function(){return Object(c.c)(Object(f.a)("An error occurred while getting projects"))}))},selectable:!0,filterable:!0,filterRemote:!0,filterByText:!0,inputFieldName:n.data("inputFieldName"),fieldName:i,renderRow(n){const o=t.cloneNode(!1),s=e.cloneNode(!1);return n===r&&(s.className="is-active"),s.textContent=n,s.dataset.ref=n,n.length>0&&a&&(s.href=Object(d.q)({[i]:n},b)),o.appendChild(s),o},id:(t,e)=>e.attr("data-ref"),toggleLabel:(t,e)=>e.text().trim(),clicked(t){const{e:e}=t;if(e.preventDefault(),a){const t=new URL(e.target.href),r=window.location.href;if(r.includes("/-/")){const e=n.data("ref"),o=r.split(e)[1];if(null==o?void 0:o.startsWith("/")){const e=null==o?void 0:o.slice(1).split("#")[0];t.searchParams.set("path",e),t.hash=window.location.hash}}e.metaKey?window.open(t.href,"_blank"):window.location.href=t.href}}})}))}}},gNBD:function(t,e,n){var r=n("ZfjD"),o=n("H81m"),i=n("b05b");r({target:"Object",stat:!0},{fromEntries:function(t){var e={};return o(t,(function(t,n){i(e,t,n)}),{AS_ENTRIES:!0}),e}})},gjpc:function(t,e,n){"use strict";n.r(e);var r=n("CX32");new(n("ZeWX").a),new r.a},"k/Fq":function(t,e,n){"use strict";n("jaBk");var r=n("EmJ/"),o=n.n(r),i=n("qPgm"),a=n("qnJZ"),s=n("/lV4"),c=(n("pBsb"),n("n7CP"));class l{constructor(t){this.projectSelectInput=o()(t),this.newItemBtn=o()(".new-project-item-link"),this.resourceType=this.newItemBtn.data("type"),this.resourceLabel=this.newItemBtn.data("label"),this.formattedText=this.deriveTextVariants(),this.groupId=this.projectSelectInput.data("groupId"),this.bindEvents(),this.initLocalStorage()}bindEvents(){var t=this;this.projectSelectInput.siblings(".new-project-item-select-button").on("click",(function(e){return t.openDropdown(e)})),this.newItemBtn.on("click",(function(e){t.getProjectFromLocalStorage()||(e.preventDefault(),t.openDropdown(e))})),this.projectSelectInput.on("change",(function(){return t.selectProject()}))}initLocalStorage(){c.a.isLocalStorageAccessSafe()&&(this.localStorageKey=["group",this.groupId,this.formattedText.localStorageItemType,"recent-project"].join("-"),this.setBtnTextFromLocalStorage())}openDropdown(t){n.e(443).then(n.t.bind(null,"p9g0",7)).then((function(){Object(a.a)(gon.select2_css_path).then((function(){o()(t.currentTarget).siblings(".project-item-select").select2("open")})).catch((function(){}))})).catch((function(){}))}selectProject(){const t=JSON.parse(this.projectSelectInput.val()),e={url:"".concat(t.url,"/").concat(this.projectSelectInput.data("relativePath")),name:t.name};this.setNewItemBtnAttributes(e),this.setProjectInLocalStorage(e)}setBtnTextFromLocalStorage(){const t=this.getProjectFromLocalStorage();this.setNewItemBtnAttributes(t)}setNewItemBtnAttributes(t){t?(this.newItemBtn.attr("href",t.url),this.newItemBtn.text("".concat(this.formattedText.defaultTextPrefix," in ").concat(t.name))):this.newItemBtn.text("Select project to create ".concat(this.formattedText.presetTextSuffix))}getProjectFromLocalStorage(){const t=localStorage.getItem(this.localStorageKey);return JSON.parse(t)}setProjectInLocalStorage(t){const e=JSON.stringify(t);localStorage.setItem(this.localStorageKey,e)}deriveTextVariants(){const t=this.resourceLabel;return{localStorageItemType:"new-".concat(this.resourceType.split("_").join("-").slice(0,-1)),defaultTextPrefix:t,presetTextSuffix:this.resourceType.split("_").join(" ").slice(0,-1)}}}const u=function(){Object(a.a)(gon.select2_css_path).then((function(){o()(".ajax-project-select").each((function(t,e){var n=this;let r;const a=o()(e).data("simpleFilter")||!1,c=o()(e).data("select2");return this.groupId=o()(e).data("groupId"),this.userId=o()(e).data("userId"),this.includeGroups=o()(e).data("includeGroups"),this.allProjects=o()(e).data("allProjects")||!1,this.orderBy=o()(e).data("orderBy")||"id",this.withIssuesEnabled=o()(e).data("withIssuesEnabled"),this.withMergeRequestsEnabled=o()(e).data("withMergeRequestsEnabled"),this.withShared=void 0===o()(e).data("withShared")||o()(e).data("withShared"),this.includeProjectsInSubgroups=o()(e).data("includeProjectsInSubgroups")||!1,this.allowClear=o()(e).data("allowClear")||!1,r=Object(s.e)("ProjectSelect|Search for project"),this.includeGroups&&(r+=Object(s.e)("ProjectSelect| or group")),o()(e).select2({placeholder:r,minimumInputLength:0,query:function(t){let e;const r=function(e){const n={results:e};return t.callback(n)};return e=n.includeGroups?function(e){return i.a.groups(t.term,{},(function(t){const n=t.concat(e);return r(n)}))}:r,n.groupId?i.a.groupProjects(n.groupId,t.term,{with_issues_enabled:n.withIssuesEnabled,with_merge_requests_enabled:n.withMergeRequestsEnabled,with_shared:n.withShared,include_subgroups:n.includeProjectsInSubgroups,order_by:"similarity",simple:!0},e):n.userId?i.a.userProjects(n.userId,t.term,{with_issues_enabled:n.withIssuesEnabled,with_merge_requests_enabled:n.withMergeRequestsEnabled,with_shared:n.withShared,include_subgroups:n.includeProjectsInSubgroups},e):i.a.projects(t.term,{order_by:n.orderBy,with_issues_enabled:n.withIssuesEnabled,with_merge_requests_enabled:n.withMergeRequestsEnabled,membership:!n.allProjects},e)},id:t=>a?t.id:JSON.stringify({name:t.name,url:t.web_url}),text:t=>t.name_with_namespace||t.name,initSelection:(t,e)=>i.a.project(t.val()).then((function(t){let{data:n}=t;return e(n)})),allowClear:this.allowClear,dropdownCssClass:"ajax-project-dropdown"}),c||a?e:new l(e)}))})).catch((function(){}))};e.a=function(){o()(".ajax-project-select").length&&n.e(443).then(n.t.bind(null,"p9g0",7)).then(u).catch((function(){}))}},ofGl:function(t,e,n){"use strict";n.d(e,"a",(function(){return E}));var r=n("0zRR"),o=n("/GZH"),i=n("/Szx"),a=n("lgrP"),s=n("TjC/"),c=n("t8l0"),l=n("o/E4"),u=n("QXXq"),d=n("BrvI"),f=n("7bmO"),p=n("ua/H"),h=n("U9NU"),b=n("1m+M");function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){j(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function j(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v=Object(f.k)(b.b,["event","routerTag"]);delete v.href.default,delete v.to.default;var y=m(m({},{block:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{type:String,default:function(){return Object(c.b)(r.g,"size")}},variant:{type:String,default:function(){return Object(c.b)(r.g,"variant")}},type:{type:String,default:"button"},tag:{type:String,default:"button"},pill:{type:Boolean,default:!1},squared:{type:Boolean,default:!1},pressed:{type:Boolean,default:null}}),v),w=function(t){"focusin"===t.type?Object(l.b)(t.target,"focus"):"focusout"===t.type&&Object(l.y)(t.target,"focus")},O=function(t){return Object(h.d)(t)||Object(l.t)(t.tag,"a")},S=function(t){return Object(d.b)(t.pressed)},_=function(t){return!(O(t)||t.tag&&!Object(l.t)(t.tag,"button"))},I=function(t){return!O(t)&&!_(t)},k=function(t){var e;return["btn-".concat(t.variant||Object(c.b)(r.g,"variant")),(e={},j(e,"btn-".concat(t.size),t.size),j(e,"btn-block",t.block),j(e,"rounded-pill",t.pill),j(e,"rounded-0",t.squared&&!t.pill),j(e,"disabled",t.disabled),j(e,"active",t.pressed),e)]},x=function(t){return O(t)?Object(p.a)(v,t):{}},P=function(t,e){var n=_(t),r=O(t),o=S(t),i=I(t),a=r&&"#"===t.href,s=e.attrs&&e.attrs.role?e.attrs.role:null,c=e.attrs?e.attrs.tabindex:null;return(i||a)&&(c="0"),{type:n&&!r?t.type:null,disabled:n?t.disabled:null,role:i||a?"button":s,"aria-disabled":i?String(t.disabled):null,"aria-pressed":o?String(t.pressed):null,autocomplete:o?"off":null,tabindex:t.disabled&&!n?"-1":c}},E=i.a.extend({name:r.g,functional:!0,props:y,render:function(t,e){var n=e.props,r=e.data,i=e.listeners,c=e.children,l=S(n),f=O(n),p=I(n),h=f&&"#"===n.href,g={keydown:function(t){if(!n.disabled&&(p||h)){var e=t.keyCode;if(e===o.h||e===o.c&&p){var r=t.currentTarget||t.target;Object(u.d)(t,{propagation:!1}),r.click()}}},click:function(t){n.disabled&&Object(d.d)(t)?Object(u.d)(t):l&&i&&i["update:pressed"]&&Object(s.b)(i["update:pressed"]).forEach((function(t){Object(d.e)(t)&&t(!n.pressed)}))}};l&&(g.focusin=w,g.focusout=w);var m={staticClass:"btn",class:k(n),props:x(n),attrs:P(n,r),on:g};return t(f?b.a:n.tag,Object(a.a)(r,m),c)}})},rPnh:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return i}));var r=n("zlPX"),o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return String(t).replace(r.f,"")},i=function(t,e){return t?{innerHTML:t}:e?{textContent:e}:{}}},sHIo:function(t,e,n){"use strict";e.a=function(){return{inject:{glFeatures:{from:"glFeatures",default:function(){return{}}}}}}}},[[127,1,0,6,2,3,4,5,10,11,12,13,14,16,60,92,110]]]);
//# sourceMappingURL=pages.projects.commit.show.7a26913b.chunk.js.map