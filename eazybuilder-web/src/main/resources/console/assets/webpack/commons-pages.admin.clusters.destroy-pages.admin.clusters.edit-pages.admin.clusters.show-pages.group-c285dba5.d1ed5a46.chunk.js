(this.webpackJsonp=this.webpackJsonp||[]).push([[30],{"++NP":function(t,e,n){"use strict";var r=n("XBTk"),i=n("4lAS"),s=n("BXQK"),a=n("Pyw5"),o=n.n(a);const l={name:"GlBanner",components:{GlButton:i.a,GlCard:s.a},props:{title:{type:String,required:!0},buttonText:{type:String,required:!0},buttonLink:{type:String,required:!1,default:null},svgPath:{type:String,required:!1,default:null},variant:{type:String,required:!1,default:r.j[0],validator:function(t){return r.j.includes(t)}}},computed:{isIntroducing:function(){return this.variant===r.j[1]}},methods:{handleClose:function(){this.$emit("close")}}};const c=o()({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("gl-card",{staticClass:"gl-px-8 gl-py-6 gl-line-height-20",class:{"gl-banner-introduction":t.isIntroducing},attrs:{"body-class":"gl-display-flex gl-p-0!"}},[t.svgPath?n("div",{staticClass:"gl-banner-illustration"},[n("img",{attrs:{src:t.svgPath,alt:"",role:"presentation"}})]):t._e(),t._v(" "),n("div",{staticClass:"gl-banner-content"},[n("h1",{staticClass:"gl-banner-title"},[t._v(t._s(t.title))]),t._v(" "),t._t("default"),t._v(" "),n("gl-button",{attrs:{variant:"confirm",category:"primary","data-testid":"gl-banner-primary-button",href:t.buttonLink},on:{click:function(e){return t.$emit("primary")}}},[t._v(t._s(t.buttonText))]),t._v(" "),t._t("actions")],2),t._v(" "),n("gl-button",{staticClass:"gl-banner-close",attrs:{variant:t.isIntroducing?"confirm":"default",category:"tertiary",size:"small",icon:"close","aria-label":"Close banner"},on:{click:t.handleClose}})],1)},staticRenderFns:[]},void 0,l,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=c},"/GZH":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return o})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return u})),n.d(e,"i",(function(){return d}));var r=40,i=35,s=13,a=27,o=36,l=37,c=39,u=32,d=38},"4lAS":function(t,e,n){"use strict";var r=n("ofGl"),i=n("XBTk"),s=n("g3So"),a=n("s1D3"),o=n("FkSe"),l=n("Pyw5"),c=n.n(l);const u={components:{BButton:r.a,GlIcon:a.a,GlLoadingIcon:o.a},mixins:[s.a],props:{category:{type:String,required:!1,default:i.u.primary,validator:function(t){return Object.keys(i.u).includes(t)}},variant:{type:String,required:!1,default:i.x.default,validator:function(t){return Object.keys(i.x).includes(t)}},size:{type:String,required:!1,default:i.v.medium,validator:function(t){return Object.keys(i.v).includes(t)}},selected:{type:Boolean,required:!1,default:!1},icon:{type:String,required:!1,default:""},label:{type:Boolean,required:!1,default:!1},loading:{type:Boolean,required:!1,default:!1},buttonTextClasses:{type:String,required:!1,default:""},disabled:{type:Boolean,required:!1,default:!1}},computed:{hasIcon:function(){return""!==this.icon},hasIconOnly:function(){return 0===Object.keys(this.$slots).length&&this.hasIcon},isButtonDisabled:function(){return this.disabled||this.loading},buttonClasses:function(){var t=["gl-button"];return[i.x.dashed,i.x.link].includes(this.variant)||this.category===i.u.primary||t.push("btn-".concat(this.variant,"-").concat(this.category)),t.push({"btn-icon":this.hasIconOnly,"button-ellipsis-horizontal":this.hasIconOnly&&"ellipsis_h"===this.icon,selected:this.selected}),this.label&&t.push("btn","btn-label","btn-".concat(this.buttonSize)),t},buttonSize:function(){return i.w[this.size]}}};const d=c()({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.label?"span":"b-button",t._g(t._b({directives:[{name:"safe-link",rawName:"v-safe-link:[safeLinkConfig]",arg:t.safeLinkConfig}],tag:"component",class:t.buttonClasses,attrs:{target:t.target,variant:t.variant,size:t.buttonSize,disabled:t.isButtonDisabled}},"component",t.$attrs,!1),t.$listeners),[t.loading?n("gl-loading-icon",{staticClass:"gl-button-icon gl-button-loading-indicator",attrs:{inline:""}}):t._e(),t._v(" "),!t.hasIcon||t.hasIconOnly&&t.loading?t._e():n("gl-icon",{staticClass:"gl-button-icon",attrs:{name:t.icon}}),t._v(" "),t._t("emoji"),t._v(" "),t.hasIconOnly?t._e():n("span",{staticClass:"gl-button-text",class:t.buttonTextClasses},[t._t("default")],2)],2)},staticRenderFns:[]},void 0,u,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=d},BXQK:function(t,e,n){"use strict";var r=n("Pyw5");const i={props:{headerClass:{type:[String,Object,Array],required:!1,default:""},bodyClass:{type:[String,Object,Array],required:!1,default:""},footerClass:{type:[String,Object,Array],required:!1,default:""}}};const s=n.n(r)()({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gl-card"},[this.$slots.header?n("div",{staticClass:"gl-card-header",class:t.headerClass},[t._t("header")],2):t._e(),t._v(" "),n("div",{staticClass:"gl-card-body",class:t.bodyClass},[t._t("default")],2),t._v(" "),this.$slots.footer?n("div",{staticClass:"gl-card-footer",class:t.footerClass},[t._t("footer")],2):t._e()])},staticRenderFns:[]},void 0,i,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=s},FkSe:function(t,e,n){"use strict";var r=n("Pyw5"),i=["sm","md","lg","xl"],s={dark:"dark",light:"light"};const a={props:{label:{type:String,required:!1,default:"Loading"},size:{type:String,required:!1,default:"sm",validator:function(t){return-1!==i.indexOf(t)}},color:{type:String,required:!1,default:s.dark,validator:function(t){return Object.keys(s).includes(t)}},inline:{type:Boolean,required:!1,default:!1}},computed:{rootElementType:function(){return this.inline?"span":"div"},cssClasses:function(){return["gl-spinner","".concat("gl-spinner","-").concat(s[this.color]),"".concat("gl-spinner","-").concat(this.size)]}}};const o=n.n(r)()({render:function(){var t=this.$createElement,e=this._self._c||t;return e(this.rootElementType,{tag:"component",staticClass:"gl-spinner-container"},[e("span",{staticClass:"align-text-bottom",class:this.cssClasses,attrs:{"aria-label":this.label}})])},staticRenderFns:[]},void 0,a,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=o},QwBj:function(t,e,n){"use strict";n.d(e,"b",(function(){return i}));const r={ABORTED:0,OK:200,CREATED:201,ACCEPTED:202,NON_AUTHORITATIVE_INFORMATION:203,NO_CONTENT:204,RESET_CONTENT:205,PARTIAL_CONTENT:206,MULTI_STATUS:207,ALREADY_REPORTED:208,IM_USED:226,MULTIPLE_CHOICES:300,BAD_REQUEST:400,UNAUTHORIZED:401,FORBIDDEN:403,NOT_FOUND:404,METHOD_NOT_ALLOWED:405,CONFLICT:409,GONE:410,UNPROCESSABLE_ENTITY:422,TOO_MANY_REQUESTS:429,INTERNAL_SERVER_ERROR:500,SERVICE_UNAVAILABLE:503},i=[r.OK,r.CREATED,r.ACCEPTED,r.NON_AUTHORITATIVE_INFORMATION,r.NO_CONTENT,r.RESET_CONTENT,r.PARTIAL_CONTENT,r.MULTI_STATUS,r.ALREADY_REPORTED,r.IM_USED];e.a=r},"k/Fq":function(t,e,n){"use strict";n("jaBk");var r=n("EmJ/"),i=n.n(r),s=n("qPgm"),a=n("qnJZ"),o=n("/lV4"),l=(n("pBsb"),n("n7CP"));class c{constructor(t){this.projectSelectInput=i()(t),this.newItemBtn=i()(".new-project-item-link"),this.resourceType=this.newItemBtn.data("type"),this.resourceLabel=this.newItemBtn.data("label"),this.formattedText=this.deriveTextVariants(),this.groupId=this.projectSelectInput.data("groupId"),this.bindEvents(),this.initLocalStorage()}bindEvents(){var t=this;this.projectSelectInput.siblings(".new-project-item-select-button").on("click",(function(e){return t.openDropdown(e)})),this.newItemBtn.on("click",(function(e){t.getProjectFromLocalStorage()||(e.preventDefault(),t.openDropdown(e))})),this.projectSelectInput.on("change",(function(){return t.selectProject()}))}initLocalStorage(){l.a.isLocalStorageAccessSafe()&&(this.localStorageKey=["group",this.groupId,this.formattedText.localStorageItemType,"recent-project"].join("-"),this.setBtnTextFromLocalStorage())}openDropdown(t){n.e(443).then(n.t.bind(null,"p9g0",7)).then((function(){Object(a.a)(gon.select2_css_path).then((function(){i()(t.currentTarget).siblings(".project-item-select").select2("open")})).catch((function(){}))})).catch((function(){}))}selectProject(){const t=JSON.parse(this.projectSelectInput.val()),e={url:"".concat(t.url,"/").concat(this.projectSelectInput.data("relativePath")),name:t.name};this.setNewItemBtnAttributes(e),this.setProjectInLocalStorage(e)}setBtnTextFromLocalStorage(){const t=this.getProjectFromLocalStorage();this.setNewItemBtnAttributes(t)}setNewItemBtnAttributes(t){t?(this.newItemBtn.attr("href",t.url),this.newItemBtn.text("".concat(this.formattedText.defaultTextPrefix," in ").concat(t.name))):this.newItemBtn.text("Select project to create ".concat(this.formattedText.presetTextSuffix))}getProjectFromLocalStorage(){const t=localStorage.getItem(this.localStorageKey);return JSON.parse(t)}setProjectInLocalStorage(t){const e=JSON.stringify(t);localStorage.setItem(this.localStorageKey,e)}deriveTextVariants(){const t=this.resourceLabel;return{localStorageItemType:"new-".concat(this.resourceType.split("_").join("-").slice(0,-1)),defaultTextPrefix:t,presetTextSuffix:this.resourceType.split("_").join(" ").slice(0,-1)}}}const u=function(){Object(a.a)(gon.select2_css_path).then((function(){i()(".ajax-project-select").each((function(t,e){var n=this;let r;const a=i()(e).data("simpleFilter")||!1,l=i()(e).data("select2");return this.groupId=i()(e).data("groupId"),this.userId=i()(e).data("userId"),this.includeGroups=i()(e).data("includeGroups"),this.allProjects=i()(e).data("allProjects")||!1,this.orderBy=i()(e).data("orderBy")||"id",this.withIssuesEnabled=i()(e).data("withIssuesEnabled"),this.withMergeRequestsEnabled=i()(e).data("withMergeRequestsEnabled"),this.withShared=void 0===i()(e).data("withShared")||i()(e).data("withShared"),this.includeProjectsInSubgroups=i()(e).data("includeProjectsInSubgroups")||!1,this.allowClear=i()(e).data("allowClear")||!1,r=Object(o.e)("ProjectSelect|Search for project"),this.includeGroups&&(r+=Object(o.e)("ProjectSelect| or group")),i()(e).select2({placeholder:r,minimumInputLength:0,query:function(t){let e;const r=function(e){const n={results:e};return t.callback(n)};return e=n.includeGroups?function(e){return s.a.groups(t.term,{},(function(t){const n=t.concat(e);return r(n)}))}:r,n.groupId?s.a.groupProjects(n.groupId,t.term,{with_issues_enabled:n.withIssuesEnabled,with_merge_requests_enabled:n.withMergeRequestsEnabled,with_shared:n.withShared,include_subgroups:n.includeProjectsInSubgroups,order_by:"similarity",simple:!0},e):n.userId?s.a.userProjects(n.userId,t.term,{with_issues_enabled:n.withIssuesEnabled,with_merge_requests_enabled:n.withMergeRequestsEnabled,with_shared:n.withShared,include_subgroups:n.includeProjectsInSubgroups},e):s.a.projects(t.term,{order_by:n.orderBy,with_issues_enabled:n.withIssuesEnabled,with_merge_requests_enabled:n.withMergeRequestsEnabled,membership:!n.allProjects},e)},id:t=>a?t.id:JSON.stringify({name:t.name,url:t.web_url}),text:t=>t.name_with_namespace||t.name,initSelection:(t,e)=>s.a.project(t.val()).then((function(t){let{data:n}=t;return e(n)})),allowClear:this.allowClear,dropdownCssClass:"ajax-project-dropdown"}),l||a?e:new c(e)}))})).catch((function(){}))};e.a=function(){i()(".ajax-project-select").length&&n.e(443).then(n.t.bind(null,"p9g0",7)).then(u).catch((function(){}))}},ofGl:function(t,e,n){"use strict";n.d(e,"a",(function(){return x}));var r=n("0zRR"),i=n("/GZH"),s=n("/Szx"),a=n("lgrP"),o=n("TjC/"),l=n("t8l0"),c=n("o/E4"),u=n("QXXq"),d=n("BrvI"),p=n("7bmO"),f=n("ua/H"),b=n("U9NU"),h=n("1m+M");function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m=Object(p.k)(h.b,["event","routerTag"]);delete m.href.default,delete m.to.default;var S=v(v({},{block:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{type:String,default:function(){return Object(l.b)(r.g,"size")}},variant:{type:String,default:function(){return Object(l.b)(r.g,"variant")}},type:{type:String,default:"button"},tag:{type:String,default:"button"},pill:{type:Boolean,default:!1},squared:{type:Boolean,default:!1},pressed:{type:Boolean,default:null}}),m),_=function(t){"focusin"===t.type?Object(c.b)(t.target,"focus"):"focusout"===t.type&&Object(c.y)(t.target,"focus")},O=function(t){return Object(b.d)(t)||Object(c.t)(t.tag,"a")},j=function(t){return Object(d.b)(t.pressed)},I=function(t){return!(O(t)||t.tag&&!Object(c.t)(t.tag,"button"))},T=function(t){return!O(t)&&!I(t)},w=function(t){var e;return["btn-".concat(t.variant||Object(l.b)(r.g,"variant")),(e={},y(e,"btn-".concat(t.size),t.size),y(e,"btn-block",t.block),y(e,"rounded-pill",t.pill),y(e,"rounded-0",t.squared&&!t.pill),y(e,"disabled",t.disabled),y(e,"active",t.pressed),e)]},E=function(t){return O(t)?Object(f.a)(m,t):{}},C=function(t,e){var n=I(t),r=O(t),i=j(t),s=T(t),a=r&&"#"===t.href,o=e.attrs&&e.attrs.role?e.attrs.role:null,l=e.attrs?e.attrs.tabindex:null;return(s||a)&&(l="0"),{type:n&&!r?t.type:null,disabled:n?t.disabled:null,role:s||a?"button":o,"aria-disabled":s?String(t.disabled):null,"aria-pressed":i?String(t.pressed):null,autocomplete:i?"off":null,tabindex:t.disabled&&!n?"-1":l}},x=s.a.extend({name:r.g,functional:!0,props:S,render:function(t,e){var n=e.props,r=e.data,s=e.listeners,l=e.children,c=j(n),p=O(n),f=T(n),b=p&&"#"===n.href,g={keydown:function(t){if(!n.disabled&&(f||b)){var e=t.keyCode;if(e===i.h||e===i.c&&f){var r=t.currentTarget||t.target;Object(u.d)(t,{propagation:!1}),r.click()}}},click:function(t){n.disabled&&Object(d.d)(t)?Object(u.d)(t):c&&s&&s["update:pressed"]&&Object(o.b)(s["update:pressed"]).forEach((function(t){Object(d.e)(t)&&t(!n.pressed)}))}};c&&(g.focusin=_,g.focusout=_);var v={staticClass:"btn",class:w(n),props:E(n),attrs:C(n,r),on:g};return t(p?h.a:n.tag,Object(a.a)(r,v),l)}})},"rK/1":function(t,e,n){"use strict";var r=n("LLbv"),i=n("4lAS"),s={name:"ClipboardButton",directives:{GlTooltip:r.a},components:{GlButton:i.a},props:{text:{type:String,required:!0},gfm:{type:String,required:!1,default:null},title:{type:String,required:!0},tooltipPlacement:{type:String,required:!1,default:"top"},tooltipContainer:{type:[String,Boolean],required:!1,default:!1},tooltipBoundary:{type:String,required:!1,default:null},cssClass:{type:String,required:!1,default:null},category:{type:String,required:!1,default:"secondary"},size:{type:String,required:!1,default:"medium"}},computed:{clipboardText(){return null!==this.gfm?JSON.stringify({text:this.text,gfm:this.gfm}):this.text}}},a=n("tBpV"),o=Object(a.a)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("gl-button",t._g({directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip.hover.blur.viewport",value:{placement:t.tooltipPlacement,container:t.tooltipContainer,boundary:t.tooltipBoundary},expression:"{\n    placement: tooltipPlacement,\n    container: tooltipContainer,\n    boundary: tooltipBoundary,\n  }",modifiers:{hover:!0,blur:!0,viewport:!0}}],class:t.cssClass,attrs:{title:t.title,"data-clipboard-text":t.clipboardText,category:t.category,size:t.size,icon:"copy-to-clipboard","aria-label":t.__("Copy this value")}},t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},vb9m:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var r=n("jB52"),i=n("3twG"),s=n("++NP"),a=n("06tH"),o=n.n(a),l=n("NmEs"),c={components:{GlBanner:s.a},props:{surveyUrl:{type:String,required:!0}},data:()=>({visible:!0}),created(){Object(l.K)(o.a.get("hide_serverless_survey"))&&(this.visible=!1)},methods:{handleClose(){o.a.set("hide_serverless_survey","true",{expires:3650}),this.visible=!1}}},u=n("tBpV"),d=Object(u.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.visible?n("gl-banner",{staticClass:"mt-4",attrs:{title:t.s__("Serverless|Help shape the future of Serverless at GitLab"),"button-text":t.s__("Serverless|Sign up for First Look"),"button-link":t.surveyUrl},on:{close:t.handleClose}},[n("p",[t._v("\n    "+t._s(t.s__("Serverless|We are continually striving to improve our Serverless functionality. As a Knative user, we would love to hear how we can make this experience better for you. Sign up for GitLab First Look today and we will be in touch shortly."))+"\n  ")])]):t._e()}),[],!1,null,null,null).exports;let p;const f="https://gitlab.fra1.qualtrics.com/jfe/form/SV_00PfofFfY9s8Shf";function b(){const t=document.querySelector(".js-serverless-survey-banner");if(t&&!p){const{userName:e,userEmail:n}=t.dataset,s=Object(i.y)({Q_PopulateResponse:JSON.stringify({QID1:n,QID2:e,QID16:"1"})},f);p=new r.default({el:t,render:t=>t(d,{props:{surveyUrl:s}})})}}},z4I3:function(t,e,n){"use strict";var r=n("ZfjD"),i=n("jl4x"),s=n("kd5c"),a=n("YEnO"),o=n("wZF9"),l=n("OhKz").f,c=n("oRA1"),u=s.Symbol;if(i&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};c(p,u);var f=p.prototype=u.prototype;f.constructor=p;var b=f.toString,h="Symbol(test)"==String(u("test")),g=/^Symbol\((.*)\)[^)]+$/;l(f,"description",{configurable:!0,get:function(){var t=o(this)?this.valueOf():this,e=b.call(t);if(a(d,t))return"";var n=h?e.slice(7,-1):e.replace(g,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:p})}}}]);
//# sourceMappingURL=commons-pages.admin.clusters.destroy-pages.admin.clusters.edit-pages.admin.clusters.show-pages.group-c285dba5.d1ed5a46.chunk.js.map