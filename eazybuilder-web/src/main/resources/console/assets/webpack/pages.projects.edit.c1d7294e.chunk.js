(this.webpackJsonp=this.webpackJsonp||[]).push([[303],{132:function(t,e,i){i("HVBj"),i("gjpc"),t.exports=i("qz/Z")},"38Gl":function(t,e,i){"use strict";i.d(e,"a",(function(){return m}));i("GzNv");var n=i("h7kv"),s=i.n(n),a=i("htNe"),r=i.n(a),o=i("EmJ/"),l=i.n(o);class c{constructor(t){this.form=t,this.dirtyInputs=[],this.isDisabled=!0,this.init()}init(){this.inputs=this.form.querySelectorAll("input, textarea, select"),this.submits=this.form.querySelectorAll("input[type=submit], button[type=submit]"),this.inputs.forEach(c.initInput),this.toggleSubmission(),this.registerListeners()}registerListeners(){var t=this;const e=r()((function(){return s()((function(e){return t.updateDirtyInput(e)}),c.THROTTLE_DURATION)})),i=function(t){e(t.target.name)(t)};this.form.addEventListener("input",i),this.form.addEventListener("change",i),l()(this.form).on("change.select2",i),this.form.addEventListener("submit",(function(e){return t.formSubmit(e)}))}updateDirtyInput(t){const{target:e}=t;e.dataset.isDirtySubmitInput&&(this.updateDirtyInputs(e),this.toggleSubmission())}updateDirtyInputs(t){const{name:e}=t,i=t.dataset.dirtySubmitOriginalValue!==c.inputCurrentValue(t),n=this.dirtyInputs.indexOf(e),s=-1!==n;i&&!s&&this.dirtyInputs.push(e),!i&&s&&this.dirtyInputs.splice(n,1)}toggleSubmission(){var t=this;this.isDisabled=0===this.dirtyInputs.length,this.submits.forEach((function(e){e.disabled=t.isDisabled}))}formSubmit(t){return this.isDisabled&&(t.preventDefault(),t.stopImmediatePropagation()),!this.isDisabled}static initInput(t){t.dataset.isDirtySubmitInput=!0,t.dataset.dirtySubmitOriginalValue=c.inputCurrentValue(t)}static isInputCheckable(t){return"checkbox"===t.type||"radio"===t.type}static inputCurrentValue(t){return c.isInputCheckable(t)?t.checked.toString():t.value}}c.THROTTLE_DURATION=500;var u=c;var d=class{constructor(t){var e=this;this.forms=t,this.dirtySubmits=[],this.forms.forEach((function(t){return e.dirtySubmits.push(new u(t))}))}};function m(t){return new(t instanceof NodeList||t instanceof Array?d:u)(t)}},KcQl:function(t,e,i){"use strict";var n=i("ZfjD"),s=i("PpKG"),a=i("O9kB"),r=i("QmHw"),o=i("OuD2"),l=i("eclS"),c=i("arHL"),u=i("fEQ0");if(n({target:"Promise",proto:!0,real:!0,forced:!!a&&r((function(){a.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var e=l(this,o("Promise")),i="function"==typeof t;return this.then(i?function(i){return c(e,t()).then((function(){return i}))}:t,i?function(i){return c(e,t()).then((function(){throw i}))}:t)}}),!s&&"function"==typeof a){var d=o("Promise").prototype.finally;a.prototype.finally!==d&&u(a.prototype,"finally",d,{unsafe:!0})}},dsWN:function(t,e,i){"use strict";var n=i("XBTk"),s=i("Ge+5"),a=i("4lAS"),r=i("s1D3"),o=i("Pyw5"),l=i.n(o);function c(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function u(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?u(Object(i),!0).forEach((function(e){c(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}const m={components:{GlIcon:r.a,CloseButton:s.a,GlButton:a.a},props:{title:{type:String,required:!1,default:""},dismissible:{type:Boolean,required:!1,default:!0},dismissLabel:{type:String,required:!1,default:"Dismiss"},variant:{type:String,required:!1,default:n.c.info,validator:function(t){return Object.keys(n.c).includes(t)}},primaryButtonLink:{type:String,required:!1,default:""},primaryButtonText:{type:String,required:!1,default:""},secondaryButtonLink:{type:String,required:!1,default:""},secondaryButtonText:{type:String,required:!1,default:""},contained:{type:Boolean,required:!1,default:!1},sticky:{type:Boolean,required:!1,default:!1}},computed:{iconName:function(){return n.b[this.variant]},shouldRenderActions:function(){return Boolean(this.$slots.actions||this.actionButtons.length)},actionButtons:function(){return[{text:this.primaryButtonText,attrs:{href:this.primaryButtonLink,variant:"confirm",category:n.u.primary},listeners:{click:this.primaryButtonClicked}},{text:this.secondaryButtonText,attrs:{href:this.secondaryButtonLink,variant:"default",category:n.u.secondary},listeners:{click:this.secondaryButtonClicked}}].reduce((function(t,e){if(!e.text)return t;var i=d({},e.attrs);return i.href||delete i.href,t.push(d(d({},e),{},{attrs:i})),t}),[])},variantClass:function(){return"gl-alert-".concat(this.variant)}},methods:{primaryButtonClicked:function(t){this.$emit("primaryAction",t)},secondaryButtonClicked:function(t){this.$emit("secondaryAction",t)},onDismiss:function(){this.$emit("dismiss")}}};const p=l()({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["gl-alert",{"gl-alert-max-content":t.contained},{"gl-alert-sticky":t.sticky},{"gl-alert-not-dismissible":!t.dismissible},t.variantClass]},[i("div",{staticClass:"gl-alert-container"},[i("gl-icon",{class:{"gl-alert-icon":!0,"gl-alert-icon-no-title":!t.title},attrs:{name:t.iconName}}),t._v(" "),t.dismissible?i("close-button",{ref:"dismiss",staticClass:"gl-dismiss-btn",attrs:{label:t.dismissLabel},on:{click:t.onDismiss}}):t._e(),t._v(" "),i("div",{staticClass:"gl-alert-content",attrs:{role:"alert"}},[t.title?i("h4",{staticClass:"gl-alert-title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),i("div",{staticClass:"gl-alert-body"},[t._t("default")],2),t._v(" "),t.shouldRenderActions?i("div",{staticClass:"gl-alert-actions"},[t._t("actions",t._l(t.actionButtons,(function(e,n){return i("gl-button",t._g(t._b({key:n,staticClass:"gl-alert-action"},"gl-button",e.attrs,!1),e.listeners),[t._v("\n            "+t._s(e.text)+"\n          ")])})))],2):t._e()])],1)])},staticRenderFns:[]},void 0,m,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=p},eRnp:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i("EmJ/"),s=i.n(n),a=i("06tH"),r=i.n(a);class o{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.options=t;const e=this.options.className||"user-callout";this.userCalloutBody=s()(".".concat(e)),this.cookieName=this.userCalloutBody.data("uid"),this.isCalloutDismissed=r.a.get(this.cookieName),this.init()}init(){var t=this;this.isCalloutDismissed&&"false"!==this.isCalloutDismissed||this.userCalloutBody.find(".js-close-callout").on("click",(function(e){return t.dismissCallout(e)}))}dismissCallout(t){const e=s()(t.currentTarget),i={};e.hasClass("js-close-session")||(i.expires=365),this.options.setCalloutPerProject&&(i.path=this.userCalloutBody.data("projectPath")),r.a.set(this.cookieName,"true",i),(e.hasClass("close")||e.hasClass("js-close"))&&this.userCalloutBody.remove()}}},h1NV:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var n=i("EmJ/"),s=i.n(n),a=i("CzKS"),r=i("NmEs");function o(){s()(document).on("click",".js-confirm-danger",(function(t){const e=s()(t.target),i=e.data("checkFieldName"),n=e.data("checkCompareValue"),o=parseInt(s()('[name="'.concat(i,'"]')).val(),10);if(!i||o<n){t.preventDefault(),function(t,e,i){const n=s()(".js-confirm-danger-input",e);n.val(""),s()(".js-confirm-text",e).text(i||""),e.modal("show");const o=s()(".js-confirm-danger-match",e).text(),l=s()(".js-confirm-danger-submit",e);l.disable(),n.focus(),n.off("input").on("input",(function(){Object(r.P)(s()(this).val())===o?l.enable():l.disable()})),s()(".js-confirm-danger-submit",e).off("click").on("click",(function(){t.data("remote")?a.a.fire(t[0],"submit"):t.submit()}))}(e.closest("form"),function(t){const e=t.prev(".modal");return e.length?e:s()("#modal-confirm-danger")}(e),e.data("confirmDangerMessage"))}}))}},"qz/Z":function(t,e,i){"use strict";i.r(e);var n=i("CPfm"),s=i("h1NV"),a=i("38Gl"),r=i("z1DD"),o=i("iImK"),l=i("jB52"),c=i("30su"),u=i("dsWN"),d=i("/lV4"),m=i("o4PY"),p=i.n(m),f=i("1cpz"),g=i("PrLL"),h=i("4lAS"),v=i("XqDB"),b=i("Qhxq"),y={components:{GlModal:f.a,GlFormInput:g.a,GlButton:h.a},directives:{GlModal:v.a},props:{confirmPhrase:{type:String,required:!0},formPath:{type:String,required:!0}},data:()=>({userInput:null,modalId:p()("delete-project-modal-")}),computed:{confirmDisabled(){return this.userInput!==this.confirmPhrase},csrfToken:()=>b.a.token,modalActionProps(){return{primary:{text:Object(d.a)("Yes, delete project"),attributes:[{variant:"danger"},{disabled:this.confirmDisabled}]},cancel:{text:Object(d.a)("Cancel, keep project")}}}},methods:{submitForm(){this.$refs.form.submit()}},strings:{deleteProject:Object(d.a)("Delete project"),title:Object(d.a)("Delete project. Are you ABSOLUTELY SURE?"),confirmText:Object(d.a)("Please type the following to confirm:")}},_=i("tBpV"),j=Object(_.a)(y,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{ref:"form",attrs:{action:t.formPath,method:"post"}},[i("input",{attrs:{type:"hidden",name:"_method",value:"delete"}}),t._v(" "),i("input",{attrs:{type:"hidden",name:"authenticity_token"},domProps:{value:t.csrfToken}}),t._v(" "),i("gl-button",{directives:[{name:"gl-modal",rawName:"v-gl-modal",value:t.modalId,expression:"modalId"}],attrs:{category:"primary",variant:"danger"}},[t._v(t._s(t.$options.strings.deleteProject))]),t._v(" "),i("gl-modal",{ref:"removeModal",attrs:{"modal-id":t.modalId,size:"sm","ok-variant":"danger","footer-class":"gl-bg-gray-10 gl-p-5","title-class":"gl-text-red-500","action-primary":t.modalActionProps.primary,"action-cancel":t.modalActionProps.cancel},on:{ok:t.submitForm},scopedSlots:t._u([{key:"modal-title",fn:function(){return[t._v(t._s(t.$options.strings.title))]},proxy:!0}])},[t._v(" "),i("div",[t._t("modal-body"),t._v(" "),i("p",{staticClass:"gl-mb-1"},[t._v(t._s(t.$options.strings.confirmText))]),t._v(" "),i("p",[i("code",{staticClass:"gl-white-space-pre-wrap"},[t._v(t._s(t.confirmPhrase))])]),t._v(" "),i("gl-form-input",{attrs:{id:"confirm_name_input",name:"confirm_name_input",type:"text"},model:{value:t.userInput,callback:function(e){t.userInput=e},expression:"userInput"}}),t._v(" "),t._t("modal-footer")],2)])],1)}),[],!1,null,null,null).exports,S={components:{GlSprintf:c.a,GlAlert:u.a,SharedDeleteButton:j},props:{confirmPhrase:{type:String,required:!0},formPath:{type:String,required:!0}},strings:{alertTitle:Object(d.a)("You are about to permanently delete this project"),alertBody:Object(d.a)("Once a project is permanently deleted, it %{strongStart}cannot be recovered%{strongEnd}. Permanently deleting this project will %{strongStart}immediately delete%{strongEnd} its repositories and %{strongStart}all related resources%{strongEnd}, including issues, merge requests etc."),modalBody:Object(d.a)("This action cannot be undone. You will lose this project's repository and all related resources, including issues, merge requests, etc.")}},k=Object(_.a)(S,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("shared-delete-button",t._b({scopedSlots:t._u([{key:"modal-body",fn:function(){return[i("gl-alert",{staticClass:"gl-mb-5",attrs:{variant:"danger",title:t.$options.strings.alertTitle,dismissible:!1}},[i("gl-sprintf",{attrs:{message:t.$options.strings.alertBody},scopedSlots:t._u([{key:"strong",fn:function(e){var n=e.content;return[i("strong",[t._v(t._s(n))])]}}])})],1),t._v(" "),i("p",[t._v(t._s(t.$options.strings.modalBody))])]},proxy:!0}])},"shared-delete-button",{confirmPhrase:t.confirmPhrase,formPath:t.formPath},!1))}),[],!1,null,null,null).exports,C=i("NmEs"),E=(i("jaBk"),i("KcQl"),i("2ibD")),x=i("Gjpj"),O=i("j00k"),P=i("FkSe"),T=i("rK/1"),B={i18n:{toggleLabel:Object(d.a)("Activate Service Desk")},components:{ClipboardButton:T.a,GlButton:h.a,GlFormSelect:x.a,GlToggle:O.a,GlLoadingIcon:P.a,GlSprintf:c.a},props:{isEnabled:{type:Boolean,required:!0},incomingEmail:{type:String,required:!1,default:""},customEmail:{type:String,required:!1,default:""},customEmailEnabled:{type:Boolean,required:!1},initialSelectedTemplate:{type:String,required:!1,default:""},initialOutgoingName:{type:String,required:!1,default:""},initialProjectKey:{type:String,required:!1,default:""},templates:{type:Array,required:!1,default:function(){return[]}},isTemplateSaving:{type:Boolean,required:!1,default:!1}},data(){return{selectedTemplate:this.initialSelectedTemplate,outgoingName:this.initialOutgoingName||Object(d.a)("GitLab Support Bot"),projectKey:this.initialProjectKey}},computed:{templateOptions(){return[""].concat(this.templates)},hasProjectKeySupport(){return Boolean(this.customEmailEnabled)},email(){return this.customEmail||this.incomingEmail},hasCustomEmail(){return this.customEmail&&this.customEmail!==this.incomingEmail}},methods:{onCheckboxToggle(t){this.$emit("toggle",t)},onSaveTemplate(){this.$emit("save",{selectedTemplate:this.selectedTemplate,outgoingName:this.outgoingName,projectKey:this.projectKey})}}},q=Object(_.a)(B,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("gl-toggle",{staticClass:"d-inline-block align-middle mr-1",attrs:{id:"service-desk-checkbox",value:t.isEnabled,label:t.$options.i18n.toggleLabel,"label-position":"hidden"},on:{change:t.onCheckboxToggle}}),t._v(" "),i("label",{staticClass:"align-middle"},[t._v("\n    "+t._s(t.$options.i18n.toggleLabel)+"\n  ")]),t._v(" "),t.isEnabled?i("div",{staticClass:"row mt-3"},[i("div",{staticClass:"col-md-9 mb-0"},[i("strong",{staticClass:"gl-display-block gl-mb-1",attrs:{id:"incoming-email-describer","data-testid":"incoming-email-describer"}},[t._v("\n        "+t._s(t.__("Email address to use for Support Desk"))+"\n      ")]),t._v(" "),t.email?[i("div",{staticClass:"input-group"},[i("input",{ref:"service-desk-incoming-email",staticClass:"form-control",attrs:{type:"text","data-testid":"incoming-email",placeholder:t.__("Incoming email"),"aria-label":t.__("Incoming email"),"aria-describedby":"incoming-email-describer",disabled:"true"},domProps:{value:t.email}}),t._v(" "),i("div",{staticClass:"input-group-append"},[i("clipboard-button",{attrs:{title:t.__("Copy"),text:t.email,"css-class":"input-group-text"}})],1)]),t._v(" "),t.hasCustomEmail?i("span",{staticClass:"form-text text-muted"},[i("gl-sprintf",{attrs:{message:t.__("Emails sent to %{email} are also supported.")},scopedSlots:t._u([{key:"email",fn:function(){return[i("code",[t._v(t._s(t.incomingEmail))])]},proxy:!0}],null,!1,3065425804)})],1):t._e()]:[i("gl-loading-icon",{attrs:{inline:!0}}),t._v(" "),i("span",{staticClass:"sr-only"},[t._v(t._s(t.__("Fetching incoming email")))])],t._v(" "),t.hasProjectKeySupport?[i("label",{staticClass:"mt-3",attrs:{for:"service-desk-project-suffix"}},[t._v("\n          "+t._s(t.__("Project name suffix"))+"\n        ")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.projectKey,expression:"projectKey",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"service-desk-project-suffix"},domProps:{value:t.projectKey},on:{input:function(e){e.target.composing||(t.projectKey=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),i("span",{staticClass:"form-text text-muted"},[t._v("\n          "+t._s(t.__("A string appended to the project path to form the Service Desk email address."))+"\n        ")])]:t._e(),t._v(" "),i("label",{staticClass:"mt-3",attrs:{for:"service-desk-template-select"}},[t._v("\n        "+t._s(t.__("Template to append to all Service Desk issues"))+"\n      ")]),t._v(" "),i("gl-form-select",{attrs:{id:"service-desk-template-select","data-qa-selector":"service_desk_template_dropdown",options:t.templateOptions},model:{value:t.selectedTemplate,callback:function(e){t.selectedTemplate=e},expression:"selectedTemplate"}}),t._v(" "),i("label",{staticClass:"mt-3",attrs:{for:"service-desk-email-from-name"}},[t._v("\n        "+t._s(t.__("Email display name"))+"\n      ")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.outgoingName,expression:"outgoingName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"service-desk-email-from-name"},domProps:{value:t.outgoingName},on:{input:function(e){e.target.composing||(t.outgoingName=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),i("span",{staticClass:"form-text text-muted"},[t._v("\n        "+t._s(t.__("Emails sent from Service Desk have this name."))+"\n      ")]),t._v(" "),i("div",{staticClass:"gl-display-flex gl-justify-content-end"},[i("gl-button",{staticClass:"gl-mt-5",attrs:{variant:"success","data-qa-selector":"save_service_desk_settings_button",disabled:t.isTemplateSaving},on:{click:t.onSaveTemplate}},[t._v("\n          "+t._s(t.__("Save changes"))+"\n        ")])],1)],2)]):t._e()],1)}),[],!1,null,null,null).exports,D={components:{GlAlert:u.a,ServiceDeskSetting:q},inject:{initialIsEnabled:{default:!1},endpoint:{default:""},initialIncomingEmail:{default:""},customEmail:{default:""},customEmailEnabled:{default:!1},selectedTemplate:{default:""},outgoingName:{default:""},projectKey:{default:""},templates:{default:[]}},data(){return{isEnabled:this.initialIsEnabled,isTemplateSaving:!1,isAlertShowing:!1,alertVariant:"danger",alertMessage:"",incomingEmail:this.initialIncomingEmail,updatedCustomEmail:this.customEmail}},methods:{onEnableToggled(t){var e=this;this.isEnabled=t,this.incomingEmail="";const i={service_desk_enabled:t};return E.a.put(this.endpoint,i).then((function(i){let{data:n}=i;const s=n.service_desk_address;if(t&&!s)throw new Error(Object(d.a)("Response didn't include `service_desk_address`"));e.incomingEmail=s})).catch((function(){const i=t?Object(d.a)("An error occurred while enabling Service Desk."):Object(d.a)("An error occurred while disabling Service Desk.");e.showAlert(i)}))},onSaveTemplate(t){var e=this;let{selectedTemplate:i,outgoingName:n,projectKey:s}=t;this.isTemplateSaving=!0;const a={issue_template_key:i,outgoing_name:n,project_key:s,service_desk_enabled:this.isEnabled};return E.a.put(this.endpoint,a).then((function(t){let{data:i}=t;e.updatedCustomEmail=null==i?void 0:i.service_desk_address,e.showAlert(Object(d.a)("Changes saved."),"success")})).catch((function(t){var i,n;e.showAlert(Object(d.f)(Object(d.a)("An error occurred while saving changes: %{error}"),{error:null==t?void 0:null===(i=t.response)||void 0===i?void 0:null===(n=i.data)||void 0===n?void 0:n.message}))})).finally((function(){e.isTemplateSaving=!1}))},showAlert(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"danger";this.isAlertShowing=!0,this.alertMessage=t,this.alertVariant=e},onDismiss(){this.isAlertShowing=!1}}},w=Object(_.a)(D,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.isAlertShowing?i("gl-alert",{staticClass:"mb-3",attrs:{variant:t.alertVariant},on:{dismiss:t.onDismiss}},[t._v("\n    "+t._s(t.alertMessage)+"\n  ")]):t._e(),t._v(" "),i("service-desk-setting",{attrs:{"is-enabled":t.isEnabled,"incoming-email":t.incomingEmail,"custom-email":t.updatedCustomEmail,"custom-email-enabled":t.customEmailEnabled,"initial-selected-template":t.selectedTemplate,"initial-outgoing-name":t.outgoingName,"initial-project-key":t.projectKey,templates:t.templates,"is-template-saving":t.isTemplateSaving},on:{save:t.onSaveTemplate,toggle:t.onEnableToggled}})],1)}),[],!1,null,null,null).exports,I=i("eoW/"),N=i("r5uf"),A=i("u5H2"),L=i("eRnp"),K=i("QRYO"),$=i("EmJ/"),G=i.n($);Object(r.a)(),Object(s.a)(),Object(N.b)(),function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#js-project-delete-button";const e=document.querySelector(t);if(!e)return;const{confirmPhrase:i,formPath:n}=e.dataset;new l.default({el:e,render:t=>t(k,{props:{confirmPhrase:i,formPath:n}})})}(),Object(o.a)(n.b),new L.a({className:"js-service-desk-callout"}),function(){const t=document.querySelector(".js-service-desk-setting-root");if(!t)return!1;const{customEmail:e,customEmailEnabled:i,enabled:n,endpoint:s,incomingEmail:a,outgoingName:r,projectKey:o,selectedTemplate:c,templates:u}=t.dataset;new l.default({el:t,provide:{customEmail:e,customEmailEnabled:Object(C.K)(i),endpoint:s,initialIncomingEmail:a,initialIsEnabled:Object(C.K)(n),outgoingName:r,projectKey:o,selectedTemplate:c,templates:JSON.parse(u)},render:function(t){return t(w)}})}(),function(){const t=G()(".project-edit-container"),e=G()(".save-project-loader");t.on("ajax:before",(function(){t.hide(),e.show()}))}(),Object(K.default)(),Object(A.a)(".js-project-transfer-form","select.select2"),Object(a.a)(document.querySelectorAll(".js-general-settings-form, .js-mr-settings-form, .js-mr-approvals-form")),Object(I.a)()},r5uf:function(t,e,i){"use strict";i.d(e,"d",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return l})),i.d(e,"b",(function(){return c}));var n=i("EmJ/"),s=i.n(n),a=i("/lV4");function r(t){return(t instanceof s.a?t[0]:t).classList.contains("expanded")}function o(t){const e=s()(t);e.find(".js-settings-toggle:not(.js-settings-toggle-trigger-only)").text(Object(a.a)("Collapse")),e.find(".settings-content").off("scroll.expandSection").scrollTop(0),e.addClass("expanded"),e.hasClass("no-animate")||e.addClass("animating").one("animationend.animateSection",(function(){return e.removeClass("animating")}))}function l(t){const e=s()(t);e.find(".js-settings-toggle:not(.js-settings-toggle-trigger-only)").text(Object(a.a)("Expand")),e.find(".settings-content").on("scroll.expandSection",(function(){return o(e)})),e.removeClass("expanded"),e.hasClass("no-animate")||e.addClass("animating").one("animationend.animateSection",(function(){return e.removeClass("animating")}))}function c(){if(s()(".settings").each((function(t,e){const i=s()(e);i.on("click.toggleSection",".js-settings-toggle",(function(){return function(t){t.removeClass("no-animate"),r(t)?l(t):o(t)}(i)})),r(i)||i.find(".settings-content").on("scroll.expandSection",(function(){i.removeClass("no-animate"),o(i)}))})),window.location.hash){const t=s()(window.location.hash);t.length&&t.hasClass("settings")&&o(t)}}},"rK/1":function(t,e,i){"use strict";var n=i("LLbv"),s=i("4lAS"),a={name:"ClipboardButton",directives:{GlTooltip:n.a},components:{GlButton:s.a},props:{text:{type:String,required:!0},gfm:{type:String,required:!1,default:null},title:{type:String,required:!0},tooltipPlacement:{type:String,required:!1,default:"top"},tooltipContainer:{type:[String,Boolean],required:!1,default:!1},tooltipBoundary:{type:String,required:!1,default:null},cssClass:{type:String,required:!1,default:null},category:{type:String,required:!1,default:"secondary"},size:{type:String,required:!1,default:"medium"}},computed:{clipboardText(){return null!==this.gfm?JSON.stringify({text:this.text,gfm:this.gfm}):this.text}}},r=i("tBpV"),o=Object(r.a)(a,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("gl-button",t._g({directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip.hover.blur.viewport",value:{placement:t.tooltipPlacement,container:t.tooltipContainer,boundary:t.tooltipBoundary},expression:"{\n    placement: tooltipPlacement,\n    container: tooltipContainer,\n    boundary: tooltipBoundary,\n  }",modifiers:{hover:!0,blur:!0,viewport:!0}}],class:t.cssClass,attrs:{title:t.title,"data-clipboard-text":t.clipboardText,category:t.category,size:t.size,icon:"copy-to-clipboard","aria-label":t.__("Copy this value")}},t.$listeners),[t._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},u5H2:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var n=i("EmJ/"),s=i.n(n);function a(t,e){const i=s()(t),n=i.find(e);n.on("change",(function(){i.find(":submit").prop("disabled",!n.val())})),n.trigger("change")}},z1DD:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));i("S26F");function n(){document.querySelectorAll(".js-filepicker").forEach((function(t){const e=t.querySelector(".js-filepicker-button");e.addEventListener("click",(function(){e.closest("form").querySelector(".js-filepicker-input").click()}));const i=t.querySelector(".js-filepicker-input");i.addEventListener("change",(function(){const t=i.closest("form"),e=i.value.replace(/^.*[\\\/]/,"");t.querySelector(".js-filepicker-filename").textContent=e}))}))}}},[[132,1,0,2,3,4,5,17,86,113]]]);
//# sourceMappingURL=pages.projects.edit.c1d7294e.chunk.js.map