(this.webpackJsonp=this.webpackJsonp||[]).push([[297],{126:function(t,e,n){n("HVBj"),n("gjpc"),t.exports=n("z9zc")},"5M4W":function(t,e,n){"use strict";var i=n("Tx+D"),a=n("KG2+"),r=n("FUyg"),o=function(t,e,n,s,l,u,c,p){for(var d,h=l,f=0,g=!!c&&r(c,p,3);f<s;){if(f in n){if(d=g?g(n[f],f,e):n[f],u>0&&i(d))h=o(t,e,d,a(d.length),h,u-1)-1;else{if(h>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[h]=d}h++}f++}return h};t.exports=o},"Ge+5":function(t,e,n){"use strict";var i=n("4lAS"),a=n("Pyw5"),r=n.n(a);const o={name:"CloseButton",components:{GlButton:i.a},props:{label:{type:String,required:!1,default:"Close"}}};const s=r()({render:function(){var t=this.$createElement;return(this._self._c||t)("gl-button",this._g(this._b({attrs:{category:"tertiary",size:"small",icon:"close","aria-label":this.label}},"gl-button",this.$attrs,!1),this.$listeners))},staticRenderFns:[]},void 0,o,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=s},KcQl:function(t,e,n){"use strict";var i=n("ZfjD"),a=n("PpKG"),r=n("O9kB"),o=n("QmHw"),s=n("OuD2"),l=n("eclS"),u=n("arHL"),c=n("fEQ0");if(i({target:"Promise",proto:!0,real:!0,forced:!!r&&o((function(){r.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var e=l(this,s("Promise")),n="function"==typeof t;return this.then(n?function(n){return u(e,t()).then((function(){return n}))}:t,n?function(n){return u(e,t()).then((function(){throw n}))}:t)}}),!a&&"function"==typeof r){var p=s("Promise").prototype.finally;r.prototype.finally!==p&&c(r.prototype,"finally",p,{unsafe:!0})}},LkaW:function(t,e,n){"use strict";var i=n("0zRR"),a=n("/Szx"),r=n("lgrP");var o=a.a.extend({name:i.v,functional:!0,props:{tag:{type:String,default:"p"},textClass:{type:[String,Array,Object]},variant:{type:String}},render:function(t,e){var n,i,a,o=e.props,s=e.data,l=e.children,u=o.tag,c=o.textClass,p=o.variant,d=s.attrs||{};return s.attrs={},t("li",Object(r.a)(s,{attrs:{role:"presentation"}}),[t(u,{staticClass:"b-dropdown-text",class:[c,(n={},i="text-".concat(p),a=p,i in n?Object.defineProperty(n,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[i]=a,n)],props:o,attrs:d,ref:"text"},l)])}}),s=n("Pyw5");const l={components:{BDropdownText:o},inheritAttrs:!1};const u=n.n(s)()({render:function(){var t=this.$createElement;return(this._self._c||t)("b-dropdown-text",this._g(this._b({staticClass:"gl-new-dropdown-text"},"b-dropdown-text",this.$attrs,!1),this.$listeners),[this._t("default")],2)},staticRenderFns:[]},void 0,l,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=u},QlUp:function(t,e,n){"use strict";var i=n("BrvI");e.a={props:{state:{type:Boolean,default:null}},computed:{computedState:function(){return Object(i.b)(this.state)?this.state:null},stateClass:function(){var t=this.computedState;return!0===t?"is-valid":!1===t?"is-invalid":null}}}},Qo4I:function(t,e,n){"use strict";var i=n("o/E4"),a=n("QXXq"),r=n("BrvI"),o=n("9aS3"),s=n("Ddgg"),l=n("bvam");e.a={model:{prop:"value",event:"update"},props:{value:{type:[String,Number],default:""},ariaInvalid:{type:[Boolean,String],default:!1},readonly:{type:Boolean,default:!1},plaintext:{type:Boolean,default:!1},autocomplete:{type:String},placeholder:{type:String},formatter:{type:Function},lazyFormatter:{type:Boolean,default:!1},trim:{type:Boolean,default:!1},number:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},debounce:{type:[Number,String],default:0}},data:function(){return{localValue:Object(l.e)(this.value),vModelValue:this.value}},computed:{computedClass:function(){return[{"custom-range":"range"===this.type,"form-control-plaintext":this.plaintext&&"range"!==this.type&&"color"!==this.type,"form-control":!this.plaintext&&"range"!==this.type||"color"===this.type},this.sizeFormClass,this.stateClass]},computedAriaInvalid:function(){return this.ariaInvalid&&"false"!==this.ariaInvalid?!0===this.ariaInvalid?"true":this.ariaInvalid:!1===this.computedState?"true":null},computedDebounce:function(){return Object(o.b)(Object(s.c)(this.debounce,0),0)},hasFormatter:function(){return Object(r.e)(this.formatter)}},watch:{value:function(t){var e=Object(l.e)(t);e!==this.localValue&&t!==this.vModelValue&&(this.clearDebounce(),this.localValue=e,this.vModelValue=t)}},created:function(){this.$_inputDebounceTimer=null},mounted:function(){this.$on("hook:beforeDestroy",this.clearDebounce);var t=this.value,e=Object(l.e)(t);e!==this.localValue&&t!==this.vModelValue&&(this.localValue=e,this.vModelValue=t)},methods:{clearDebounce:function(){clearTimeout(this.$_inputDebounceTimer),this.$_inputDebounceTimer=null},formatValue:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t=Object(l.e)(t),!this.hasFormatter||this.lazyFormatter&&!n||(t=this.formatter(t,e)),t},modifyValue:function(t){return this.trim&&(t=t.trim()),this.number&&(t=Object(s.b)(t,t)),t},updateValue:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.lazy;if(!i||n){this.clearDebounce();var a=function(){if((t=e.modifyValue(t))!==e.vModelValue)e.vModelValue=t,e.$emit("update",t);else if(e.hasFormatter){var n=e.$refs.input;n&&t!==n.value&&(n.value=t)}},r=this.computedDebounce;r>0&&!i&&!n?this.$_inputDebounceTimer=setTimeout(a,r):a()}},onInput:function(t){if(!t.target.composing){var e=t.target.value,n=this.formatValue(e,t);!1===n||t.defaultPrevented?Object(a.d)(t,{propagation:!1}):(this.localValue=n,this.updateValue(n),this.$emit("input",n))}},onChange:function(t){var e=t.target.value,n=this.formatValue(e,t);!1===n||t.defaultPrevented?Object(a.d)(t,{propagation:!1}):(this.localValue=n,this.updateValue(n,!0),this.$emit("change",n))},onBlur:function(t){var e=t.target.value,n=this.formatValue(e,t,!0);!1!==n&&(this.localValue=Object(l.e)(this.modifyValue(n)),this.updateValue(n,!0)),this.$emit("blur",t)},focus:function(){this.disabled||Object(i.d)(this.$el)},blur:function(){this.disabled||Object(i.c)(this.$el)}}}},QzWB:function(t,e,n){"use strict";var i=n("ZfjD"),a=n("5M4W"),r=n("/EoU"),o=n("KG2+"),s=n("AgLN"),l=n("yqOl");i({target:"Array",proto:!0},{flatMap:function(t){var e,n=r(this),i=o(n.length);return s(t),(e=l(n,0)).length=a(e,n,n,i,0,1,t,arguments.length>1?arguments[1]:void 0),e}})},T3gz:function(t,e,n){"use strict";n("jslJ");var i=n("4lAS"),a=n("dsLq"),r=n("MV2A"),o=n("FkSe"),s=n("1cpz"),l=n("NmEs"),u=n("8K50"),c=n("s5BM"),p=n("tBXH"),d=n("olcB"),h=n("69Ig"),f=n("QSe5"),g=n("sHIo"),v={components:{GlButton:i.a,GlEmptyState:a.a,GlLink:r.a,GlLoadingIcon:o.a,GlModal:s.a,PipelinesTableComponent:u.a,TablePagination:f.a},mixins:[p.a,Object(g.a)()],props:{endpoint:{type:String,required:!0},errorStateSvgPath:{type:String,required:!0},viewType:{type:String,required:!1,default:"child"},canCreatePipelineInTargetProject:{type:Boolean,required:!1,default:!1},sourceProjectFullPath:{type:String,required:!1,default:""},targetProjectFullPath:{type:String,required:!1,default:""},projectId:{type:String,required:!1,default:""},mergeRequestId:{type:Number,required:!1,default:0}},data(){const t=new h.a;return{store:t,state:t.state,page:Object(l.p)("page")||"1",requestData:{},modalId:"create-pipeline-for-fork-merge-request-modal"}},computed:{shouldRenderTable(){return!this.isLoading&&this.state.pipelines.length>0&&!this.hasError},shouldRenderErrorState(){return this.hasError&&!this.isLoading},canRenderPipelineButton(){return this.latestPipelineDetachedFlag},isForkMergeRequest(){return this.sourceProjectFullPath!==this.targetProjectFullPath},isLatestPipelineCreatedInTargetProject(){var t;const e=this.state.pipelines[0];return(null==e?void 0:null===(t=e.project)||void 0===t?void 0:t.full_path)==="/".concat(this.targetProjectFullPath)},shouldShowSecurityWarning(){return this.canCreatePipelineInTargetProject&&this.isForkMergeRequest&&!this.isLatestPipelineCreatedInTargetProject},latestPipelineDetachedFlag(){const t=this.state.pipelines[0];return t&&t.flags&&(t.flags.detached_merge_request_pipeline||t.flags.merge_request_pipeline)}},created(){this.service=new d.a(this.endpoint),this.requestData={page:this.page}},methods:{successCallback(t){const e=t.data.pipelines||t.data;this.store.storePagination(t.headers),this.setCommonData(e);const n=new CustomEvent("update-pipelines-count",{detail:{pipelines:t.data}});this.$el.parentElement&&this.$el.parentElement.dispatchEvent(n)},onClickRunPipeline(){c.a.$emit("runMergeRequestPipeline",{projectId:this.projectId,mergeRequestId:this.mergeRequestId})},tryRunPipeline(){this.shouldShowSecurityWarning?this.$refs.modal.show():this.onClickRunPipeline()}}},m=n("tBpV"),b=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-list pipelines"},[t.isLoading?n("gl-loading-icon",{staticClass:"prepend-top-20",attrs:{label:t.s__("Pipelines|Loading pipelines"),size:"lg"}}):t.shouldRenderErrorState?n("gl-empty-state",{attrs:{"svg-path":t.errorStateSvgPath,title:t.s__("Pipelines|There was an error fetching the pipelines.\n      Try again in a few moments or contact your support team.")}}):t.shouldRenderTable?n("div",[t.canRenderPipelineButton?n("gl-button",{staticClass:"gl-mt-3 gl-mb-3 gl-lg-display-none",attrs:{block:"",variant:"confirm","data-testid":"run_pipeline_button_mobile",loading:t.state.isRunningMergeRequestPipeline},on:{click:t.tryRunPipeline}},[t._v("\n      "+t._s(t.s__("Pipeline|Run pipeline"))+"\n    ")]):t._e(),t._v(" "),n("pipelines-table-component",{attrs:{pipelines:t.state.pipelines,"update-graph-dropdown":t.updateGraphDropdown,"view-type":t.viewType},scopedSlots:t._u([{key:"table-header-actions",fn:function(){return[t.canRenderPipelineButton?n("div",{staticClass:"gl-text-right"},[n("gl-button",{attrs:{variant:"confirm","data-testid":"run_pipeline_button",loading:t.state.isRunningMergeRequestPipeline},on:{click:t.tryRunPipeline}},[t._v("\n            "+t._s(t.s__("Pipeline|Run pipeline"))+"\n          ")])],1):t._e()]},proxy:!0}])})],1):t._e(),t._v(" "),t.canRenderPipelineButton?n("gl-modal",{ref:"modal",attrs:{id:t.modalId,"modal-id":t.modalId,title:t.s__("Pipelines|Are you sure you want to run this pipeline?"),"ok-title":t.s__("Pipeline|Run pipeline"),"ok-variant":"danger"},on:{ok:t.onClickRunPipeline}},[n("p",[t._v("\n      "+t._s(t.s__("Pipelines|This pipeline will run code originating from a forked project merge request. This means that the code can potentially have security considerations like exposing CI variables."))+"\n    ")]),t._v(" "),n("p",[t._v("\n      "+t._s(t.s__("Pipelines|It is recommended the code is reviewed thoroughly before running this pipeline with the parent project's CI resource."))+"\n    ")]),t._v(" "),n("p",[t._v("\n      "+t._s(t.s__("Pipelines|If you are unsure, please ask a project maintainer to review it for you."))+"\n    ")]),t._v(" "),n("gl-link",{attrs:{href:"/help/ci/merge_request_pipelines/index.html#run-pipelines-in-the-parent-project-for-merge-requests-from-a-forked-project",target:"_blank"}},[t._v("\n      "+t._s(t.s__("Pipelines|More Information"))+"\n    ")])],1):t._e(),t._v(" "),t.shouldRenderPagination?n("table-pagination",{attrs:{change:t.onChangePage,"page-info":t.state.pageInfo}}):t._e()],1)}),[],!1,null,null,null);e.a=b.exports},TXLM:function(t,e,n){n("x5C5")("flatMap")},Tu1i:function(t,e,n){"use strict";var i=n("t8l0");e.a={props:{size:{type:String,default:function(){return Object(i.b)("formControls","size")}}},computed:{sizeFormClass:function(){return[this.size?"form-control-".concat(this.size):null]},sizeBtnClass:function(){return[this.size?"btn-".concat(this.size):null]}}}},"Tx+D":function(t,e,n){var i=n("WmU+");t.exports=Array.isArray||function(t){return"Array"==i(t)}},UtYG:function(t,e,n){"use strict";var i=n("jB52"),a=n("T3gz");e.a=function(){const t=document.querySelector("#commit-pipeline-table-view");if(t&&(t.addEventListener("update-pipelines-count",(function(t){if(t.detail.pipelines&&t.detail.pipelines.count&&t.detail.pipelines.count.all){document.querySelector(".js-pipelines-mr-count").textContent=t.detail.pipelines.count.all}})),void 0===t.dataset.disableInitialization)){const e=new i.default({provide:{artifactsEndpoint:t.dataset.artifactsEndpoint,artifactsEndpointPlaceholder:t.dataset.artifactsEndpointPlaceholder},render:e=>e(a.a,{props:{endpoint:t.dataset.endpoint,emptyStateSvgPath:t.dataset.emptyStateSvgPath,errorStateSvgPath:t.dataset.errorStateSvgPath}})}).$mount();t.appendChild(e.$el)}}},VNnR:function(t,e,n){var i=n("7/U+");t.exports=function(t,e){return i(t,e)}},Vxxt:function(t,e,n){"use strict";var i=n("o/E4");e.a={props:{name:{type:String},id:{type:String},disabled:{type:Boolean},required:{type:Boolean,default:!1},form:{type:String},autofocus:{type:Boolean,default:!1}},mounted:function(){this.handleAutofocus()},activated:function(){this.handleAutofocus()},methods:{handleAutofocus:function(){var t=this;this.$nextTick((function(){Object(i.B)((function(){var e=t.$el;t.autofocus&&Object(i.u)(e)&&(Object(i.v)(e,"input, textarea, select")||(e=Object(i.C)("input, textarea, select",e)),Object(i.d)(e))}))}))}}}},XqDB:function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var i=n("h3Ey"),a=n("/GZH"),r=n("o/E4"),o=n("QXXq"),s=n("BrvI"),l=n("7bmO"),u="__bv_modal_directive__",c=function(t){var e=t.modifiers,n=void 0===e?{}:e,i=t.arg,a=t.value;return Object(s.l)(a)?a:Object(s.l)(i)?i:Object(l.i)(n).reverse()[0]},p=function(t){return t&&Object(r.v)(t,".dropdown-menu > li, li.nav-item")&&Object(r.C)("a, button",t)||t},d=function(t){t&&"BUTTON"!==t.tagName&&(Object(r.o)(t,"role")||Object(r.E)(t,"role","button"),"A"===t.tagName||Object(r.o)(t,"tabindex")||Object(r.E)(t,"tabindex","0"))},h=function(t){var e=t[u]||{},n=e.trigger,a=e.handler;n&&a&&(Object(o.a)(n,"click",a,i.b),Object(o.a)(n,"keydown",a,i.b),Object(o.a)(t,"click",a,i.b),Object(o.a)(t,"keydown",a,i.b)),delete t[u]},f=function(t,e,n){var s=t[u]||{},l=c(e),f=p(t);l===s.target&&f===s.trigger||(h(t),function(t,e,n){var s=c(e),l=p(t);if(s&&l){var h=function(t){var e=t.currentTarget;if(!Object(r.r)(e)){var i=t.type,o=t.keyCode;"click"!==i&&("keydown"!==i||o!==a.c&&o!==a.h)||n.context.$root.$emit("bv::show::modal",s,e)}};t[u]={handler:h,target:s,trigger:l},d(l),Object(o.b)(l,"click",h,i.b),"BUTTON"!==l.tagName&&"button"===Object(r.h)(l,"role")&&Object(o.b)(l,"keydown",h,i.b)}}(t,e,n)),d(f)},g={inserted:f,updated:function(){},componentUpdated:f,unbind:h}},ZKBa:function(t,e,n){"use strict";e.a={computed:{selectionStart:{cache:!1,get:function(){return this.$refs.input.selectionStart},set:function(t){this.$refs.input.selectionStart=t}},selectionEnd:{cache:!1,get:function(){return this.$refs.input.selectionEnd},set:function(t){this.$refs.input.selectionEnd=t}},selectionDirection:{cache:!1,get:function(){return this.$refs.input.selectionDirection},set:function(t){this.$refs.input.selectionDirection=t}}},methods:{select:function(){var t;(t=this.$refs.input).select.apply(t,arguments)},setSelectionRange:function(){var t;(t=this.$refs.input).setSelectionRange.apply(t,arguments)},setRangeText:function(){var t;(t=this.$refs.input).setRangeText.apply(t,arguments)}}}},"d+lS":function(t,e,n){var i=n("dA+0");t.exports=function(t){return t&&t.length?i(t):[]}},xy9X:function(t,e,n){"use strict";e.a={computed:{validity:{cache:!1,get:function(){return this.$refs.input.validity}},validationMessage:{cache:!1,get:function(){return this.$refs.input.validationMessage}},willValidate:{cache:!1,get:function(){return this.$refs.input.willValidate}}},methods:{setCustomValidity:function(){var t;return(t=this.$refs.input).setCustomValidity.apply(t,arguments)},checkValidity:function(){var t;return(t=this.$refs.input).checkValidity.apply(t,arguments)},reportValidity:function(){var t;return(t=this.$refs.input).reportValidity.apply(t,arguments)}}}},yqOl:function(t,e,n){var i=n("wZF9"),a=n("Tx+D"),r=n("7Sby")("species");t.exports=function(t,e){var n;return a(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!a(n.prototype)?i(n)&&null===(n=n[r])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},z9zc:function(t,e,n){"use strict";n.r(e);var i=n("UtYG"),a=n("RLvT"),r=n("Wspy");Object(r.a)(),Object(i.a)(),Object(a.a)()}},[[126,1,0,2,3,4,5,7,12,24,27,91,111,110]]]);
//# sourceMappingURL=pages.projects.commit.pipelines.4f5a614e.chunk.js.map