(this.webpackJsonp=this.webpackJsonp||[]).push([[286],{115:function(e,t,n){n("HVBj"),n("gjpc"),e.exports=n("QA9M")},GVjJ:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));n("EWC9"),n("gNBD"),n("orcL");var r=n("0AwG");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const s=function(e){const t=new FormData(e);return function(e){return e.reduce((function(e,t){let{name:n,value:r}=t;return Object.assign(e,{[n]:r})}),{})}(Array.from(t.keys()).map((function(e){let n=t.getAll(e);return{name:e,value:1===(n=n.filter((function(e){return e}))).length?n[0]:n}})))},i=function(e){if(!e)throw new TypeError("`mountEl` argument is required");return[...e.querySelectorAll("[name]")].reduce((function(e,t){const n=t.dataset.jsName;if(!n)return e;const o=Object(r.c)(n),{id:a,placeholder:s,name:i,value:l,type:u,checked:d}=t,h=c({name:i,id:a,value:l},s&&{placeholder:s});return["radio","checkbox"].includes(u)?c(c({},e),{},{[o]:[...e[o]||[],c(c({},h),{},{checked:d})]}):c(c({},e),{},{[o]:h})}),{})}},QA9M:function(e,t,n){"use strict";n.r(t);var r=n("CX32"),o=n("lqk7");new(n("yYhH").default),new r.a,Object(o.a)()},ZeWX:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));n("QifN"),n("pBsb"),n("Ch9p"),n("+xeR"),n("orcL"),n("pETN");var r=n("EmJ/"),o=n.n(r),c=n("06tH"),a=n.n(c);var s=n("m/7A"),i=n("XRO8"),l=n("2ibD"),u=n("GVjJ"),d=n("3twG"),h=n("/lV4"),p=n("k/Fq");class f{constructor(){!function(){const e=o()("ul.clone-options-dropdown");if(e.length){const t=o()("#clone_url"),n=o()(".js-git-clone-holder .js-clone-dropdown-label"),r=document.querySelector(".js-mobile-git-clone .js-clone-dropdown-label"),c=n.text().trim();c.length>0&&o()("a:contains('".concat(c,"')"),e).addClass("is-active"),o()("a",e).on("click",(function(n){const c=o()(n.currentTarget),a=c.attr("href");if(a&&(a.startsWith("vscode://")||a.startsWith("xcode://")))return;n.preventDefault();const s=c.data("cloneType");o()(".is-active",e).removeClass("is-active"),o()('a[data-clone-type="'.concat(s,'"]')).each((function(){const e=o()(this),t=e.find(".dropdown-menu-inner-title").text(),n=e.closest(".js-git-clone-holder, .js-mobile-git-clone").find(".js-clone-dropdown-label");e.toggleClass("is-active"),n.text(t)})),r?r.dataset.clipboardText=a:t.val(a),o()(".js-git-empty .js-clone").text(a)}))}}(),document.querySelector(".js-project-refs-dropdown")&&(f.initRefSwitcher(),o()(".project-refs-select").on("change",(function(){return o()(this).parents("form").trigger("submit")}))),o()(".hide-no-ssh-message").on("click",(function(e){return a.a.set("hide_no_ssh_message","false"),o()(this).parents(".no-ssh-key-message").remove(),e.preventDefault()})),o()(".hide-no-password-message").on("click",(function(e){return a.a.set("hide_no_password_message","false"),o()(this).parents(".no-password-message").remove(),e.preventDefault()})),o()(".hide-auto-devops-implicitly-enabled-banner").on("click",(function(e){const t=o()(this).data("project-id"),n="hide_auto_devops_implicitly_enabled_banner_".concat(t);return a.a.set(n,"false"),o()(this).parents(".auto-devops-implicitly-enabled-banner").remove(),e.preventDefault()})),f.projectSelectDropdown()}static projectSelectDropdown(){Object(p.a)(),o()(".project-item-select").on("click",(function(e){return f.changeProject(o()(e.currentTarget).val())}))}static changeProject(e){return window.location=e}static initRefSwitcher(){const e=document.createElement("li"),t=document.createElement("a");return t.href="#",o()(".js-project-refs-dropdown").each((function(){const n=o()(this),r=n.data("selected"),c=n.data("fieldName"),a=Boolean(n.data("visit")),p=n.closest("form"),f=p.attr("action"),m=Object(d.q)(Object(u.b)(p[0]),f);return Object(s.a)(n,{data(e,t){l.a.get(n.data("refsUrl"),{params:{ref:n.data("ref"),search:e}}).then((function(e){let{data:n}=e;return t(n)})).catch((function(){return Object(i.c)(Object(h.a)("An error occurred while getting projects"))}))},selectable:!0,filterable:!0,filterRemote:!0,filterByText:!0,inputFieldName:n.data("inputFieldName"),fieldName:c,renderRow(n){const o=e.cloneNode(!1),s=t.cloneNode(!1);return n===r&&(s.className="is-active"),s.textContent=n,s.dataset.ref=n,n.length>0&&a&&(s.href=Object(d.q)({[c]:n},m)),o.appendChild(s),o},id:(e,t)=>t.attr("data-ref"),toggleLabel:(e,t)=>t.text().trim(),clicked(e){const{e:t}=e;if(t.preventDefault(),a){const e=new URL(t.target.href),r=window.location.href;if(r.includes("/-/")){const t=n.data("ref"),o=r.split(t)[1];if(null==o?void 0:o.startsWith("/")){const t=null==o?void 0:o.slice(1).split("#")[0];e.searchParams.set("path",t),e.hash=window.location.hash}}t.metaKey?window.open(e.href,"_blank"):window.location.href=e.href}}})}))}}},gNBD:function(e,t,n){var r=n("ZfjD"),o=n("H81m"),c=n("b05b");r({target:"Object",stat:!0},{fromEntries:function(e){var t={};return o(e,(function(e,n){c(t,e,n)}),{AS_ENTRIES:!0}),t}})},gjpc:function(e,t,n){"use strict";n.r(t);var r=n("CX32");new(n("ZeWX").a),new r.a},"k/Fq":function(e,t,n){"use strict";n("jaBk");var r=n("EmJ/"),o=n.n(r),c=n("qPgm"),a=n("qnJZ"),s=n("/lV4"),i=(n("pBsb"),n("n7CP"));class l{constructor(e){this.projectSelectInput=o()(e),this.newItemBtn=o()(".new-project-item-link"),this.resourceType=this.newItemBtn.data("type"),this.resourceLabel=this.newItemBtn.data("label"),this.formattedText=this.deriveTextVariants(),this.groupId=this.projectSelectInput.data("groupId"),this.bindEvents(),this.initLocalStorage()}bindEvents(){var e=this;this.projectSelectInput.siblings(".new-project-item-select-button").on("click",(function(t){return e.openDropdown(t)})),this.newItemBtn.on("click",(function(t){e.getProjectFromLocalStorage()||(t.preventDefault(),e.openDropdown(t))})),this.projectSelectInput.on("change",(function(){return e.selectProject()}))}initLocalStorage(){i.a.isLocalStorageAccessSafe()&&(this.localStorageKey=["group",this.groupId,this.formattedText.localStorageItemType,"recent-project"].join("-"),this.setBtnTextFromLocalStorage())}openDropdown(e){n.e(443).then(n.t.bind(null,"p9g0",7)).then((function(){Object(a.a)(gon.select2_css_path).then((function(){o()(e.currentTarget).siblings(".project-item-select").select2("open")})).catch((function(){}))})).catch((function(){}))}selectProject(){const e=JSON.parse(this.projectSelectInput.val()),t={url:"".concat(e.url,"/").concat(this.projectSelectInput.data("relativePath")),name:e.name};this.setNewItemBtnAttributes(t),this.setProjectInLocalStorage(t)}setBtnTextFromLocalStorage(){const e=this.getProjectFromLocalStorage();this.setNewItemBtnAttributes(e)}setNewItemBtnAttributes(e){e?(this.newItemBtn.attr("href",e.url),this.newItemBtn.text("".concat(this.formattedText.defaultTextPrefix," in ").concat(e.name))):this.newItemBtn.text("Select project to create ".concat(this.formattedText.presetTextSuffix))}getProjectFromLocalStorage(){const e=localStorage.getItem(this.localStorageKey);return JSON.parse(e)}setProjectInLocalStorage(e){const t=JSON.stringify(e);localStorage.setItem(this.localStorageKey,t)}deriveTextVariants(){const e=this.resourceLabel;return{localStorageItemType:"new-".concat(this.resourceType.split("_").join("-").slice(0,-1)),defaultTextPrefix:e,presetTextSuffix:this.resourceType.split("_").join(" ").slice(0,-1)}}}const u=function(){Object(a.a)(gon.select2_css_path).then((function(){o()(".ajax-project-select").each((function(e,t){var n=this;let r;const a=o()(t).data("simpleFilter")||!1,i=o()(t).data("select2");return this.groupId=o()(t).data("groupId"),this.userId=o()(t).data("userId"),this.includeGroups=o()(t).data("includeGroups"),this.allProjects=o()(t).data("allProjects")||!1,this.orderBy=o()(t).data("orderBy")||"id",this.withIssuesEnabled=o()(t).data("withIssuesEnabled"),this.withMergeRequestsEnabled=o()(t).data("withMergeRequestsEnabled"),this.withShared=void 0===o()(t).data("withShared")||o()(t).data("withShared"),this.includeProjectsInSubgroups=o()(t).data("includeProjectsInSubgroups")||!1,this.allowClear=o()(t).data("allowClear")||!1,r=Object(s.e)("ProjectSelect|Search for project"),this.includeGroups&&(r+=Object(s.e)("ProjectSelect| or group")),o()(t).select2({placeholder:r,minimumInputLength:0,query:function(e){let t;const r=function(t){const n={results:t};return e.callback(n)};return t=n.includeGroups?function(t){return c.a.groups(e.term,{},(function(e){const n=e.concat(t);return r(n)}))}:r,n.groupId?c.a.groupProjects(n.groupId,e.term,{with_issues_enabled:n.withIssuesEnabled,with_merge_requests_enabled:n.withMergeRequestsEnabled,with_shared:n.withShared,include_subgroups:n.includeProjectsInSubgroups,order_by:"similarity",simple:!0},t):n.userId?c.a.userProjects(n.userId,e.term,{with_issues_enabled:n.withIssuesEnabled,with_merge_requests_enabled:n.withMergeRequestsEnabled,with_shared:n.withShared,include_subgroups:n.includeProjectsInSubgroups},t):c.a.projects(e.term,{order_by:n.orderBy,with_issues_enabled:n.withIssuesEnabled,with_merge_requests_enabled:n.withMergeRequestsEnabled,membership:!n.allProjects},t)},id:e=>a?e.id:JSON.stringify({name:e.name,url:e.web_url}),text:e=>e.name_with_namespace||e.name,initSelection:(e,t)=>c.a.project(e.val()).then((function(e){let{data:n}=e;return t(n)})),allowClear:this.allowClear,dropdownCssClass:"ajax-project-dropdown"}),i||a?t:new l(t)}))})).catch((function(){}))};t.a=function(){o()(".ajax-project-select").length&&n.e(443).then(n.t.bind(null,"p9g0",7)).then(u).catch((function(){}))}}},[[115,1,0,6,2,3,4,5,7,12,15,18,20,21,26,45,67,84,101]]]);
//# sourceMappingURL=pages.projects.boards.0c0cb57e.chunk.js.map