(this.webpackJsonp=this.webpackJsonp||[]).push([[239],{69:function(t,e,n){n("HVBj"),t.exports=n("lqJx")},DwHV:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("S26F");var s=n("i79D"),i=n("2ibD");const a="/api/:version/namespaces/:id/exists";function o(t,e){const n=Object(s.a)(a).replace(":id",encodeURIComponent(t));return i.a.get(n,{params:{parent_id:e}})}},"I+Ey":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("orcL");var s=n("XRO8"),i=n("/lV4"),a=n("DwHV"),o=n("0AwG");class r{constructor(){var t=this;this.groupPaths=Array.from(document.querySelectorAll(".js-autofill-group-path")),this.groupNames=Array.from(document.querySelectorAll(".js-autofill-group-name")),this.parentId=document.getElementById("group_parent_id"),this.updateHandler=this.update.bind(this),this.resetHandler=this.reset.bind(this),this.updateGroupPathSlugHandler=this.updateGroupPathSlug.bind(this),this.groupNames.forEach((function(e){""===e.value&&(e.addEventListener("keyup",t.updateHandler),e.addEventListener("blur",t.updateGroupPathSlugHandler))})),this.groupPaths.forEach((function(e){e.addEventListener("keydown",t.resetHandler)}))}update(t){let{currentTarget:{value:e}}=t;const n=Object(o.n)(e);this.groupNames.forEach((function(t){t.value=e})),this.groupPaths.forEach((function(t){t.value=n}))}reset(){var t=this;this.groupNames.forEach((function(e){e.removeEventListener("keyup",t.updateHandler),e.removeEventListener("blur",t.checkPathHandler)})),this.groupPaths.forEach((function(e){e.removeEventListener("keydown",t.resetHandler)}))}updateGroupPathSlug(){var t,e,n=this;let{currentTarget:{value:r}=""}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const c=(null===(t=this.groupPaths[0])||void 0===t?void 0:t.value)||Object(o.n)(r);c&&Object(a.a)(c,null===(e=this.parentId)||void 0===e?void 0:e.value).then((function(t){let{data:e}=t;return e})).then((function(t){let{exists:e,suggests:a}=t;if(e&&a.length){const[t]=a;n.groupPaths.forEach((function(e){e.value=t}))}else e&&!a.length&&Object(s.c)(Object(i.a)("Unable to suggest a path. Please refresh and try again."))})).catch((function(){return Object(s.c)(Object(i.a)("An error occurred while checking group path. Please refresh and try again."))}))}}},KXtm:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));const s="gl-field-error-outline";class i{constructor(){this.inputDomElement={},this.inputErrorMessage={},this.errorMessage=null,this.invalidInput=null}setValidationStateAndMessage(){this.setValidationMessage();const t=!this.inputDomElement.checkValidity();this.inputDomElement.classList.toggle(s,t),this.inputErrorMessage.classList.toggle("hide",!t)}setValidationMessage(){this.invalidInput?(this.inputDomElement.setCustomValidity(this.errorMessage),this.inputErrorMessage.innerHTML=this.errorMessage):this.resetValidationMessage()}resetValidationMessage(){this.inputDomElement.validationMessage===this.errorMessage&&(this.inputDomElement.setCustomValidity(""),this.inputErrorMessage.innerHTML=this.inputDomElement.title)}}},lqJx:function(t,e,n){"use strict";n.r(e);var s=n("EmJ/"),i=n.n(s),a=n("+uFe"),o=n("z1DD"),r=n("I+Ey"),c=n("sxGh"),u=n("Tmea"),l=n.n(u),h=n("XRO8"),d=n("/lV4"),p=n("KXtm"),g=n("DwHV");const f=1e3,v="gl-field-error-outline",m="gl-field-success-outline",b="group_parent_id",E=".validation-success",y=".validation-pending",w=".validation-error",S=".gl-path-suggestions",V=".input-group";class j extends p.a{constructor(){var t;let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(),t=this;const n=e.container||"",s=document.querySelectorAll("".concat(n," .js-validate-group-path")),i=document.getElementById(b);this.debounceValidateInput=l()((function(t){j.validateGroupPathInput(t,i)}),f),s.forEach((function(e){return e.addEventListener("input",t.eventHandler.bind(t))}))}eventHandler(t){const e=t.target;j.resetInputState(e),this.debounceValidateInput(e)}static validateGroupPathInput(t,e){const n=t.value,s=e.value;t.checkValidity()&&n.length>1&&(j.setMessageVisibility(t,y),Object(g.a)(n,s).then((function(t){let{data:e}=t;return e})).then((function(e){j.setInputState(t,!e.exists),j.setMessageVisibility(t,y,!1),j.setMessageVisibility(t,e.exists?w:E),e.exists&&j.showSuggestions(t,e.suggests)})).catch((function(){return Object(h.c)(Object(d.a)("An error occurred while validating group path"))})))}static showSuggestions(t,e){const n=t.parentElement.parentElement.querySelector(S),s=e&&e.length>0?e.join(", "):"none";n.textContent=s}static setMessageVisibility(t,e){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];t.closest(V).parentElement.querySelector(e).classList.toggle("hide",!n)}static setInputState(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.classList.toggle(m,e),t.classList.toggle(v,!e)}static resetInputState(t){j.setMessageVisibility(t,E,!1),j.setMessageVisibility(t,w,!1),t.checkValidity()&&t.classList.remove(m,v)}}new j,a.a.initAll(),Object(o.a)(),new r.a;new c.a({defaultAction:"#create-group-pane",parentEl:".group-edit-container .nav-tabs",hashedTabs:!0}),window.location.hash&&i()(".group-edit-container .nav-tabs").find('a[href="'.concat(window.location.hash,'"]')).tab("show")},sxGh:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("S26F"),n("TZoF");var s=n("EmJ/"),i=n.n(s);class a{constructor(){var t=this;let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.options=e,this.defaultAction=this.options.defaultAction,this.action=this.options.action||this.defaultAction,this.hashedTabs=this.options.hashedTabs||!1,"show"===this.action&&(this.action=this.defaultAction),this.currentLocation=window.location,this.hashedTabs&&(this.action=this.currentLocation.hash||this.action);const n="".concat(this.options.parentEl,' a[data-toggle="tab"]');i()(document).off("shown.bs.tab",n).on("shown.bs.tab",n,(function(e){return t.tabShown(e)})),this.activateTab(this.action)}tabShown(t){const e=t.target.getAttribute("href");return this.setCurrentAction(e)}setCurrentAction(t){const e=t;e.replace(/\/+$/,"");const n=this.hashedTabs?e:"".concat(e).concat(this.currentLocation.search).concat(this.currentLocation.hash);return window.history.replaceState({url:n},document.title,n),n}activateTab(){return i()("".concat(this.options.parentEl," a[data-action='").concat(this.action,"']")).tab("show")}}},z1DD:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("S26F");function s(){document.querySelectorAll(".js-filepicker").forEach((function(t){const e=t.querySelector(".js-filepicker-button");e.addEventListener("click",(function(){e.closest("form").querySelector(".js-filepicker-input").click()}));const n=t.querySelector(".js-filepicker-input");n.addEventListener("change",(function(){const t=n.closest("form"),e=n.value.replace(/^.*[\\\/]/,"");t.querySelector(".js-filepicker-filename").textContent=e}))}))}}},[[69,1,0]]]);
//# sourceMappingURL=pages.groups.new.d497ecc8.chunk.js.map