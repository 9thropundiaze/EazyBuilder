(this.webpackJsonp=this.webpackJsonp||[]).push([[179,78],{7:function(t,e,i){i("HVBj"),i("iooJ"),i("doab"),t.exports=i("DTtf")},DTtf:function(t,e,i){"use strict";i.r(e);var n=i("Pz+3");document.addEventListener("DOMContentLoaded",(function(){new n.a}))},GTbw:function(t,e,i){"use strict";i.d(e,"a",(function(){return O}));var n=i("0zRR"),r=i("/Szx"),o=i("TjC/"),s=i("o/E4"),a=i("QXXq"),c=i("Vxxt"),l=i("ZKBa"),u=i("Tu1i"),d=i("QlUp"),p=i("Qo4I"),h=i("xy9X"),f=i("DXSV"),b=i("H1r6");function g(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function v(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?g(Object(i),!0).forEach((function(e){m(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):g(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function m(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var y=["text","password","email","number","url","tel","search","range","color","date","time","datetime","datetime-local","month","week"],O=r.a.extend({name:n.B,mixins:[b.a,f.a,c.a,u.a,d.a,p.a,l.a,h.a],props:{type:{type:String,default:"text",validator:function(t){return Object(o.a)(y,t)}},noWheel:{type:Boolean,default:!1},min:{type:[String,Number]},max:{type:[String,Number]},step:{type:[String,Number]},list:{type:String}},computed:{localType:function(){return Object(o.a)(y,this.type)?this.type:"text"},computedAttrs:function(){var t=this.localType,e=this.disabled,i=this.placeholder,n=this.required,r=this.min,o=this.max,s=this.step;return{id:this.safeId(),name:this.name||null,form:this.form||null,type:t,disabled:e,placeholder:i,required:n,autocomplete:this.autocomplete||null,readonly:this.readonly||this.plaintext,min:r,max:o,step:s,list:"password"!==t?this.list:null,"aria-required":n?"true":null,"aria-invalid":this.computedAriaInvalid}},computedListeners:function(){return v(v({},this.bvListeners),{},{input:this.onInput,change:this.onChange,blur:this.onBlur})}},watch:{noWheel:function(t){this.setWheelStopper(t)}},mounted:function(){this.setWheelStopper(this.noWheel)},deactivated:function(){this.setWheelStopper(!1)},activated:function(){this.setWheelStopper(this.noWheel)},beforeDestroy:function(){this.setWheelStopper(!1)},methods:{setWheelStopper:function(t){var e=this.$el;Object(a.c)(t,e,"focus",this.onWheelFocus),Object(a.c)(t,e,"blur",this.onWheelBlur),t||Object(a.a)(document,"wheel",this.stopWheel)},onWheelFocus:function(){Object(a.b)(document,"wheel",this.stopWheel)},onWheelBlur:function(){Object(a.a)(document,"wheel",this.stopWheel)},stopWheel:function(t){Object(a.d)(t,{propagation:!1}),Object(s.c)(this.$el)}},render:function(t){return t("input",{ref:"input",class:this.computedClass,attrs:this.computedAttrs,domProps:{value:this.localValue},on:this.computedListeners})}})},LLbv:function(t,e,i){"use strict";i.d(e,"a",(function(){return D}));var n=i("0zRR"),r=i("EGUT"),o=i("qTlp"),s=i("NSGy"),a=i("TjC/"),c=i("t8l0"),l=i("EGlP"),u=i("BrvI"),d=i("Ddgg"),p=i("7bmO"),h=i("RhHz");function f(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function b(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?f(Object(i),!0).forEach((function(e){g(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):f(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function g(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var v="__BV_Tooltip__",m={focus:!0,hover:!0,click:!0,blur:!0,manual:!0},y=/^html$/i,O=/^noninteractive$/i,j=/^nofade$/i,w=/^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/i,S=/^(window|viewport|scrollParent)$/i,C=/^d\d+$/i,_=/^ds\d+$/i,k=/^dh\d+$/i,P=/^o-?\d+$/i,$=/^v-.+$/i,E=/\s+/,x=function(t,e,i){if(l.g){var f=function(t,e){var i={title:void 0,trigger:"",placement:"top",fallbackPlacement:"flip",container:!1,animation:!0,offset:0,id:null,html:!1,interactive:!0,disabled:!1,delay:Object(c.b)(n.Eb,"delay"),boundary:String(Object(c.b)(n.Eb,"boundary")),boundaryPadding:Object(d.c)(Object(c.b)(n.Eb,"boundaryPadding"),0),variant:Object(c.b)(n.Eb,"variant"),customClass:Object(c.b)(n.Eb,"customClass")};if(Object(u.l)(t.value)||Object(u.g)(t.value)?i.title=t.value:Object(u.e)(t.value)?i.title=t.value:Object(u.i)(t.value)&&(i=b(b({},i),t.value)),Object(u.m)(i.title)){var r=e.data||{};i.title=r.attrs&&!Object(u.n)(r.attrs.title)?r.attrs.title:void 0}Object(u.i)(i.delay)||(i.delay={show:Object(d.c)(i.delay,0),hide:Object(d.c)(i.delay,0)}),t.arg&&(i.container="#".concat(t.arg)),Object(p.i)(t.modifiers).forEach((function(t){if(y.test(t))i.html=!0;else if(O.test(t))i.interactive=!1;else if(j.test(t))i.animation=!1;else if(w.test(t))i.placement=t;else if(S.test(t))t="scrollparent"===t?"scrollParent":t,i.boundary=t;else if(C.test(t)){var e=Object(d.c)(t.slice(1),0);i.delay.show=e,i.delay.hide=e}else _.test(t)?i.delay.show=Object(d.c)(t.slice(2),0):k.test(t)?i.delay.hide=Object(d.c)(t.slice(2),0):P.test(t)?i.offset=Object(d.c)(t.slice(1),0):$.test(t)&&(i.variant=t.slice(2)||null)}));var s={};return Object(a.b)(i.trigger||"").filter(o.a).join(" ").trim().toLowerCase().split(E).forEach((function(t){m[t]&&(s[t]=!0)})),Object(p.i)(t.modifiers).forEach((function(t){t=t.toLowerCase(),m[t]&&(s[t]=!0)})),i.trigger=Object(p.i)(s).join(" "),"blur"===i.trigger&&(i.trigger="focus"),i.trigger||(i.trigger="hover focus"),i}(e,i);if(!t[v]){var g=i.context;t[v]=new h.a({parent:g,_scopeId:Object(r.a)(g,void 0)}),t[v].__bv_prev_data__={},t[v].$on("show",(function(){Object(u.e)(f.title)&&t[v].updateData({title:f.title(t)})}))}var x={title:f.title,triggers:f.trigger,placement:f.placement,fallbackPlacement:f.fallbackPlacement,variant:f.variant,customClass:f.customClass,container:f.container,boundary:f.boundary,delay:f.delay,offset:f.offset,noFade:!f.animation,id:f.id,interactive:f.interactive,disabled:f.disabled,html:f.html},D=t[v].__bv_prev_data__;if(t[v].__bv_prev_data__=x,!Object(s.a)(x,D)){var I={target:t};Object(p.i)(x).forEach((function(e){x[e]!==D[e]&&(I[e]="title"===e&&Object(u.e)(x[e])?x[e](t):x[e])})),t[v].updateData(I)}}},D={bind:function(t,e,i){x(t,e,i)},componentUpdated:function(t,e,i){i.context.$nextTick((function(){x(t,e,i)}))},unbind:function(t){!function(t){t[v]&&(t[v].$destroy(),t[v]=null),delete t[v]}(t)}}},QlUp:function(t,e,i){"use strict";var n=i("BrvI");e.a={props:{state:{type:Boolean,default:null}},computed:{computedState:function(){return Object(n.b)(this.state)?this.state:null},stateClass:function(){var t=this.computedState;return!0===t?"is-valid":!1===t?"is-invalid":null}}}},Qo4I:function(t,e,i){"use strict";var n=i("o/E4"),r=i("QXXq"),o=i("BrvI"),s=i("9aS3"),a=i("Ddgg"),c=i("bvam");e.a={model:{prop:"value",event:"update"},props:{value:{type:[String,Number],default:""},ariaInvalid:{type:[Boolean,String],default:!1},readonly:{type:Boolean,default:!1},plaintext:{type:Boolean,default:!1},autocomplete:{type:String},placeholder:{type:String},formatter:{type:Function},lazyFormatter:{type:Boolean,default:!1},trim:{type:Boolean,default:!1},number:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},debounce:{type:[Number,String],default:0}},data:function(){return{localValue:Object(c.e)(this.value),vModelValue:this.value}},computed:{computedClass:function(){return[{"custom-range":"range"===this.type,"form-control-plaintext":this.plaintext&&"range"!==this.type&&"color"!==this.type,"form-control":!this.plaintext&&"range"!==this.type||"color"===this.type},this.sizeFormClass,this.stateClass]},computedAriaInvalid:function(){return this.ariaInvalid&&"false"!==this.ariaInvalid?!0===this.ariaInvalid?"true":this.ariaInvalid:!1===this.computedState?"true":null},computedDebounce:function(){return Object(s.b)(Object(a.c)(this.debounce,0),0)},hasFormatter:function(){return Object(o.e)(this.formatter)}},watch:{value:function(t){var e=Object(c.e)(t);e!==this.localValue&&t!==this.vModelValue&&(this.clearDebounce(),this.localValue=e,this.vModelValue=t)}},created:function(){this.$_inputDebounceTimer=null},mounted:function(){this.$on("hook:beforeDestroy",this.clearDebounce);var t=this.value,e=Object(c.e)(t);e!==this.localValue&&t!==this.vModelValue&&(this.localValue=e,this.vModelValue=t)},methods:{clearDebounce:function(){clearTimeout(this.$_inputDebounceTimer),this.$_inputDebounceTimer=null},formatValue:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t=Object(c.e)(t),!this.hasFormatter||this.lazyFormatter&&!i||(t=this.formatter(t,e)),t},modifyValue:function(t){return this.trim&&(t=t.trim()),this.number&&(t=Object(a.b)(t,t)),t},updateValue:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.lazy;if(!n||i){this.clearDebounce();var r=function(){if((t=e.modifyValue(t))!==e.vModelValue)e.vModelValue=t,e.$emit("update",t);else if(e.hasFormatter){var i=e.$refs.input;i&&t!==i.value&&(i.value=t)}},o=this.computedDebounce;o>0&&!n&&!i?this.$_inputDebounceTimer=setTimeout(r,o):r()}},onInput:function(t){if(!t.target.composing){var e=t.target.value,i=this.formatValue(e,t);!1===i||t.defaultPrevented?Object(r.d)(t,{propagation:!1}):(this.localValue=i,this.updateValue(i),this.$emit("input",i))}},onChange:function(t){var e=t.target.value,i=this.formatValue(e,t);!1===i||t.defaultPrevented?Object(r.d)(t,{propagation:!1}):(this.localValue=i,this.updateValue(i,!0),this.$emit("change",i))},onBlur:function(t){var e=t.target.value,i=this.formatValue(e,t,!0);!1!==i&&(this.localValue=Object(c.e)(this.modifyValue(i)),this.updateValue(i,!0)),this.$emit("blur",t)},focus:function(){this.disabled||Object(n.d)(this.$el)},blur:function(){this.disabled||Object(n.c)(this.$el)}}}},Tu1i:function(t,e,i){"use strict";var n=i("t8l0");e.a={props:{size:{type:String,default:function(){return Object(n.b)("formControls","size")}}},computed:{sizeFormClass:function(){return[this.size?"form-control-".concat(this.size):null]},sizeBtnClass:function(){return[this.size?"btn-".concat(this.size):null]}}}},Vxxt:function(t,e,i){"use strict";var n=i("o/E4");e.a={props:{name:{type:String},id:{type:String},disabled:{type:Boolean},required:{type:Boolean,default:!1},form:{type:String},autofocus:{type:Boolean,default:!1}},mounted:function(){this.handleAutofocus()},activated:function(){this.handleAutofocus()},methods:{handleAutofocus:function(){var t=this;this.$nextTick((function(){Object(n.B)((function(){var e=t.$el;t.autofocus&&Object(n.u)(e)&&(Object(n.v)(e,"input, textarea, select")||(e=Object(n.C)("input, textarea, select",e)),Object(n.d)(e))}))}))}}}},XLEV:function(t,e,i){"use strict";i.d(e,"b",(function(){return v})),i.d(e,"a",(function(){return m}));var n=i("0zRR"),r=i("6nFr"),o=i("/Szx"),s=i("TjC/"),a=i("t8l0"),c=i("rPnh"),l=i("bvam"),u=i("lj/0"),d=i("DXSV"),p=i("EQ0+"),h=i("ofGl");function f(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function b(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?f(Object(i),!0).forEach((function(e){g(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):f(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function g(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var v={text:{type:String},html:{type:String},variant:{type:String,default:function(){return Object(a.b)(n.p,"variant")}},size:{type:String,default:function(){return Object(a.b)(n.p,"size")}},block:{type:Boolean,default:!1},menuClass:{type:[String,Array,Object]},toggleTag:{type:String,default:"button"},toggleText:{type:String,default:function(){return Object(a.b)(n.p,"toggleText")}},toggleClass:{type:[String,Array,Object]},noCaret:{type:Boolean,default:!1},split:{type:Boolean,default:!1},splitHref:{type:String},splitTo:{type:[String,Object]},splitVariant:{type:String,default:function(){return Object(a.b)(n.p,"splitVariant")}},splitClass:{type:[String,Array,Object]},splitButtonType:{type:String,default:"button",validator:function(t){return Object(s.a)(["button","submit","reset"],t)}},lazy:{type:Boolean,default:!1},role:{type:String,default:"menu"}},m=o.a.extend({name:n.p,mixins:[d.a,u.a,p.a],props:v,computed:{dropdownClasses:function(){var t=this.block,e=this.split;return[this.directionClass,this.boundaryClass,{show:this.visible,"btn-group":e||!t,"d-flex":t&&e}]},menuClasses:function(){return[this.menuClass,{"dropdown-menu-right":this.right,show:this.visible}]},toggleClasses:function(){var t=this.split;return[this.toggleClass,{"dropdown-toggle-split":t,"dropdown-toggle-no-caret":this.noCaret&&!t}]}},render:function(t){var e=this.visible,i=this.variant,n=this.size,o=this.block,s=this.disabled,a=this.split,u=this.role,d=this.hide,p=this.toggle,f={variant:i,size:n,block:o,disabled:s},g=this.normalizeSlot("button-content"),v=this.hasNormalizedSlot("button-content")?{}:Object(c.a)(this.html,this.text),m=t();if(a){var y=this.splitTo,O=this.splitHref,j=this.splitButtonType,w=b(b({},f),{},{variant:this.splitVariant||i});y?w.to=y:O?w.href=O:j&&(w.type=j),m=t(h.a,{class:this.splitClass,attrs:{id:this.safeId("_BV_button_")},props:w,domProps:v,on:{click:this.onSplitClick},ref:"button"},g),g=[t("span",{class:["sr-only"]},[this.toggleText])],v={}}var S=t(h.a,{staticClass:"dropdown-toggle",class:this.toggleClasses,attrs:{id:this.safeId("_BV_toggle_"),"aria-haspopup":"true","aria-expanded":Object(l.e)(e)},props:b(b({},f),{},{tag:this.toggleTag,block:o&&!a}),domProps:v,on:{mousedown:this.onMousedown,click:p,keydown:p},ref:"toggle"},g),C=t("ul",{staticClass:"dropdown-menu",class:this.menuClasses,attrs:{role:u,tabindex:"-1","aria-labelledby":this.safeId(a?"_BV_button_":"_BV_toggle_")},on:{keydown:this.onKeydown},ref:"menu"},[!this.lazy||e?this.normalizeSlot(r.c,{hide:d}):t()]);return t("div",{staticClass:"dropdown b-dropdown",class:this.dropdownClasses,attrs:{id:this.safeId()}},[m,S,C])}})},Yyc1:function(t,e,i){"use strict";var n=i("XLEV"),r=i("o/E4"),o=i("XBTk"),s={computed:{buttonSize:function(){return o.w[this.size]}}},a=i("s1D3"),c=i("FkSe"),l=i("Pyw5"),u=i.n(l);function d(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var p=".dropdown-item:not(.disabled):not([disabled]),.form-control:not(.disabled):not([disabled])";const h={components:{BDropdown:{extends:n.a,methods:{getItems:function(){return(Object(r.D)(p,this.$refs.menu)||[]).filter(r.u)}}},GlIcon:a.a,GlLoadingIcon:c.a},mixins:[s],props:{headerText:{type:String,required:!1,default:""},hideHeaderBorder:{type:Boolean,required:!1,default:!0},text:{type:String,required:!1,default:""},textSrOnly:{type:Boolean,required:!1,default:!1},split:{type:Boolean,required:!1,default:!1},category:{type:String,required:!1,default:o.u.primary,validator:function(t){return Object.keys(o.u).includes(t)}},variant:{type:String,required:!1,default:o.y.default,validator:function(t){return Object.keys(o.y).includes(t)}},size:{type:String,required:!1,default:o.v.medium,validator:function(t){return Object.keys(o.v).includes(t)}},icon:{type:String,required:!1,default:null},block:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},loading:{type:Boolean,required:!1,default:!1},toggleClass:{type:[String,Array,Object],required:!1,default:null},right:{type:Boolean,required:!1,default:!1}},computed:{renderCaret:function(){return!this.split},isIconOnly:function(){var t;return Boolean(this.icon&&(!(null!==(t=this.text)&&void 0!==t&&t.length)||this.textSrOnly))},isIconWithText:function(){var t;return Boolean(this.icon&&(null===(t=this.text)||void 0===t?void 0:t.length)&&!this.textSrOnly)},toggleButtonClasses:function(){var t;return[this.toggleClass,(t={"gl-button":!0,"gl-dropdown-toggle":!0},d(t,"btn-".concat(this.variant,"-secondary"),this.category===o.u.secondary||this.category===o.u.tertiary&&this.split),d(t,"btn-".concat(this.variant,"-tertiary"),this.category===o.u.tertiary&&!this.split),d(t,"dropdown-icon-only",this.isIconOnly),d(t,"dropdown-icon-text",this.isIconWithText),t)]},splitButtonClasses:function(){return[this.toggleClass,d({"gl-button":!0,"split-content-button":Boolean(this.text),"icon-split-content-button":Boolean(this.icon)},"btn-".concat(this.variant,"-secondary"),this.category===o.u.secondary||this.category===o.u.tertiary)]},buttonText:function(){return this.split&&this.icon?null:this.text}},methods:{hasSlotContents:function(t){return Boolean(this.$slots[t])},show:function(){var t;(t=this.$refs.dropdown).show.apply(t,arguments)},hide:function(){var t;(t=this.$refs.dropdown).hide.apply(t,arguments)}}};const f=u()({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-dropdown",t._g(t._b({ref:"dropdown",staticClass:"gl-new-dropdown",attrs:{split:t.split,variant:t.variant,size:t.buttonSize,"toggle-class":[t.toggleButtonClasses],"split-class":t.splitButtonClasses,block:t.block,disabled:t.disabled||t.loading,right:t.right}},"b-dropdown",t.$attrs,!1),t.$listeners),[i("div",{staticClass:"gl-new-dropdown-inner"},[t.hasSlotContents("header")||t.headerText?i("div",{staticClass:"gl-new-dropdown-header",class:{"gl-border-b-0!":t.hideHeaderBorder}},[t.headerText?i("p",{staticClass:"gl-new-dropdown-header-top"},[t._v(t._s(t.headerText))]):t._e(),t._v(" "),t._t("header")],2):t._e(),t._v(" "),i("div",{staticClass:"gl-new-dropdown-contents"},[t._t("default")],2),t._v(" "),t.hasSlotContents("footer")?i("div",{staticClass:"gl-new-dropdown-footer"},[t._t("footer")],2):t._e()]),t._v(" "),t._t("button-content",[t.loading?i("gl-loading-icon",{staticClass:"gl-mr-2"}):t._e(),t._v(" "),t.icon?i("gl-icon",{staticClass:"dropdown-icon",attrs:{name:t.icon}}):t._e(),t._v(" "),i("span",{staticClass:"gl-new-dropdown-button-text",class:{"gl-sr-only":t.textSrOnly}},[t._t("button-text",[t._v(t._s(t.buttonText))])],2),t._v(" "),t.renderCaret?i("gl-icon",{staticClass:"gl-button-icon dropdown-chevron",attrs:{name:"chevron-down"}}):t._e()],{slot:"button-content"})],2)},staticRenderFns:[]},void 0,h,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=f},ZKBa:function(t,e,i){"use strict";e.a={computed:{selectionStart:{cache:!1,get:function(){return this.$refs.input.selectionStart},set:function(t){this.$refs.input.selectionStart=t}},selectionEnd:{cache:!1,get:function(){return this.$refs.input.selectionEnd},set:function(t){this.$refs.input.selectionEnd=t}},selectionDirection:{cache:!1,get:function(){return this.$refs.input.selectionDirection},set:function(t){this.$refs.input.selectionDirection=t}}},methods:{select:function(){var t;(t=this.$refs.input).select.apply(t,arguments)},setSelectionRange:function(){var t;(t=this.$refs.input).setSelectionRange.apply(t,arguments)},setRangeText:function(){var t;(t=this.$refs.input).setRangeText.apply(t,arguments)}}}},doab:function(t,e,i){"use strict";i.r(e);var n=i("vtCS");document.addEventListener("DOMContentLoaded",(function(){Object(n.a)(document,gon)}))},iooJ:function(t,e,i){"use strict";i.r(e);var n={};i.r(n),i.d(n,"requestStatistics",(function(){return y})),i.d(n,"fetchStatistics",(function(){return O})),i.d(n,"receiveStatisticsSuccess",(function(){return j})),i.d(n,"receiveStatisticsError",(function(){return w}));var r={};i.r(r),i.d(r,"getStatistics",(function(){return S}));var o=i("jB52"),s=i("FkSe"),a=i("yi8e"),c=i("/lV4");var l={forks:Object(c.e)("AdminStatistics|Forks"),issues:Object(c.e)("AdminStatistics|Issues"),mergeRequests:Object(c.e)("AdminStatistics|Merge requests"),notes:Object(c.e)("AdminStatistics|Notes"),snippets:Object(c.e)("AdminStatistics|Snippets"),sshKeys:Object(c.e)("AdminStatistics|SSH Keys"),milestones:Object(c.e)("AdminStatistics|Milestones"),activeUsers:Object(c.e)("AdminStatistics|Active Users")};function u(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?u(Object(i),!0).forEach((function(e){p(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function p(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var h={components:{GlLoadingIcon:s.a},data:()=>({statisticsLabels:l}),computed:d(d({},Object(a.f)(["isLoading","statistics"])),Object(a.d)(["getStatistics"])),mounted(){this.fetchStatistics()},methods:d({},Object(a.c)(["fetchStatistics"]))},f=i("tBpV"),b=Object(f.a)(h,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"gl-card"},[i("div",{staticClass:"gl-card-body"},[i("h4",[t._v(t._s(t.__("Statistics")))]),t._v(" "),t.isLoading?i("gl-loading-icon",{staticClass:"my-3",attrs:{size:"md"}}):t._l(t.getStatistics(t.statisticsLabels),(function(e){return i("p",{key:e.key,staticClass:"js-stats"},[t._v("\n        "+t._s(e.label)+"\n        "),i("span",{staticClass:"light float-right"},[t._v(t._s(e.value))])])}))],2)])}),[],!1,null,null,null).exports,g=i("qPgm"),v=i("XRO8"),m=i("NmEs");const y=function(t){let{commit:e}=t;return e("REQUEST_STATISTICS")},O=function(t){let{dispatch:e}=t;e("requestStatistics"),g.a.adminStatistics().then((function(t){let{data:i}=t;e("receiveStatisticsSuccess",Object(m.h)(i,{deep:!0}))})).catch((function(t){return e("receiveStatisticsError",t)}))},j=function(t,e){let{commit:i}=t;return i("RECEIVE_STATISTICS_SUCCESS",e)},w=function(t,e){let{commit:i}=t;i("RECEIVE_STATISTICS_ERROR",e),Object(v.c)(Object(c.e)("AdminDashboard|Error loading the statistics. Please try again"))},S=function(t){return function(e){return Object.keys(e).map((function(i){return{key:i,label:e[i],value:t.statistics&&t.statistics[i]?t.statistics[i]:null}}))}};var C={REQUEST_STATISTICS(t){t.isLoading=!0},RECEIVE_STATISTICS_SUCCESS(t,e){t.isLoading=!1,t.error=null,t.statistics=e},RECEIVE_STATISTICS_ERROR(t,e){t.isLoading=!1,t.error=e}};o.default.use(a.b);var _=function(){return new a.b.Store({actions:n,getters:r,mutations:C,state:{error:null,isLoading:!1,statistics:null}})};i("orcL");var k={components:{GlAlert:i("dsWN").a},props:{html:{type:String,required:!1,default:""}},data:()=>({isDismissed:!1}),methods:{dismiss(){this.isDismissed=!0}}},P=Object(f.a)(k,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isDismissed?t._e():i("gl-alert",t._g(t._b({on:{dismiss:t.dismiss}},"gl-alert",t.$attrs,!1),t.$listeners),[i("div",{domProps:{innerHTML:t._s(t.html)}})])}),[],!1,null,null,null).exports;function $(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function E(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?$(Object(i),!0).forEach((function(e){x(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):$(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function x(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const D=function(t){const e={html:t.innerHTML},i=E(E({},t.dataset),{},{dismissible:Object(m.K)(t.dataset.dismissible)});return new o.default({el:t,render:t=>t(P,{props:e,attrs:i})})};var I=i("EmJ/"),T=i.n(I),B=i("3twG");[...document.querySelectorAll(".js-vue-alert")].map(D);const V=document.getElementById("js-admin-statistics-container");T()("input#user_force_random_password").on("change",(function(){const t=T()("#user_password, #user_password_confirmation");T()(this).attr("checked")?t.val("").prop("disabled",!0):t.prop("disabled",!1)})),T()("body").on("click",".js-toggle-colors-link",(function(t){t.preventDefault(),T()(".js-toggle-colors-container").toggleClass("hide")})),T()("li.project_member, li.group_member").on("ajax:success",B.u),function(t){if(!t)return!1;const e=_();new o.default({el:t,store:e,components:{StatisticsPanelApp:b},render:t=>t(b)})}(V)},"lj/0":function(t,e,i){"use strict";var n=i("Z4o9"),r=i("0zRR"),o=i("/GZH"),s=i("sOG4"),a=i("o/E4"),c=i("QXXq"),l=i("BrvI"),u=i("7bmO"),d=i("oSBg"),p=i("kI/X"),h=i("h3Ey"),f={data:function(){return{listenForClickOut:!1}},watch:{listenForClickOut:function(t,e){t!==e&&(Object(c.a)(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,h.a),t&&Object(c.b)(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,h.a))}},beforeCreate:function(){this.clickOutElement=null,this.clickOutEventName=null},mounted:function(){this.clickOutElement||(this.clickOutElement=document),this.clickOutEventName||(this.clickOutEventName="click"),this.listenForClickOut&&Object(c.b)(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,h.a)},beforeDestroy:function(){Object(c.a)(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,h.a)},methods:{isClickOut:function(t){return!Object(a.f)(this.$el,t.target)},_clickOutHandler:function(t){this.clickOutHandler&&this.isClickOut(t)&&this.clickOutHandler(t)}}},b={data:function(){return{listenForFocusIn:!1}},watch:{listenForFocusIn:function(t,e){t!==e&&(Object(c.a)(this.focusInElement,"focusin",this._focusInHandler,h.a),t&&Object(c.b)(this.focusInElement,"focusin",this._focusInHandler,h.a))}},beforeCreate:function(){this.focusInElement=null},mounted:function(){this.focusInElement||(this.focusInElement=document),this.listenForFocusIn&&Object(c.b)(this.focusInElement,"focusin",this._focusInHandler,h.a)},beforeDestroy:function(){Object(c.a)(this.focusInElement,"focusin",this._focusInHandler,h.a)},methods:{_focusInHandler:function(t){this.focusInHandler&&this.focusInHandler(t)}}},g=i("DXSV");function v(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function m(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?v(Object(i),!0).forEach((function(e){y(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):v(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function y(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var O="".concat("bv::dropdown::","shown"),j="".concat("bv::dropdown::","hidden"),w=[".dropdown-item",".b-dropdown-form"].map((function(t){return"".concat(t,":not(.disabled):not([disabled])")})).join(", "),S={dropup:{type:Boolean,default:!1},dropright:{type:Boolean,default:!1},dropleft:{type:Boolean,default:!1},right:{type:Boolean,default:!1},offset:{type:[Number,String],default:0},noFlip:{type:Boolean,default:!1},popperOpts:{type:Object,default:function(){}},boundary:{type:[String,d.b],default:"scrollParent"}};e.a={mixins:[g.a,f,b],provide:function(){return{bvDropdown:this}},inject:{bvNavbar:{default:null}},props:m(m({},S),{},{disabled:{type:Boolean,default:!1}}),data:function(){return{visible:!1,visibleChangePrevented:!1}},computed:{inNavbar:function(){return!Object(l.f)(this.bvNavbar)},toggler:function(){var t=this.$refs.toggle;return t?t.$el||t:null},directionClass:function(){return this.dropup?"dropup":this.dropright?"dropright":this.dropleft?"dropleft":""},boundaryClass:function(){return"scrollParent"===this.boundary||this.inNavbar?"":"position-static"}},watch:{visible:function(t,e){if(this.visibleChangePrevented)this.visibleChangePrevented=!1;else if(t!==e){var i=t?"show":"hide",n=new s.a(i,{cancelable:!0,vueTarget:this,target:this.$refs.menu,relatedTarget:null,componentId:this.safeId?this.safeId():this.id||null});if(this.emitEvent(n),n.defaultPrevented)return this.visibleChangePrevented=!0,this.visible=e,void this.$off("hidden",this.focusToggler);"show"===i?this.showMenu():this.hideMenu()}},disabled:function(t,e){t!==e&&t&&this.visible&&(this.visible=!1)}},created:function(){this.$_popper=null},deactivated:function(){this.visible=!1,this.whileOpenListen(!1),this.destroyPopper()},beforeDestroy:function(){this.visible=!1,this.whileOpenListen(!1),this.destroyPopper()},methods:{emitEvent:function(t){var e=t.type;this.$emit(e,t),this.$root.$emit("".concat("bv::dropdown::").concat(e),t)},showMenu:function(){var t=this;if(!this.disabled){if(!this.inNavbar)if(void 0===n.default)Object(p.a)("Popper.js not found. Falling back to CSS positioning",r.p);else{var e=this.dropup&&this.right||this.split?this.$el:this.$refs.toggle;e=e.$el||e,this.createPopper(e)}this.$root.$emit(O,this),this.whileOpenListen(!0),this.$nextTick((function(){t.focusMenu(),t.$emit("shown")}))}},hideMenu:function(){this.whileOpenListen(!1),this.$root.$emit(j,this),this.$emit("hidden"),this.destroyPopper()},createPopper:function(t){this.destroyPopper(),this.$_popper=new n.default(t,this.$refs.menu,this.getPopperConfig())},destroyPopper:function(){this.$_popper&&this.$_popper.destroy(),this.$_popper=null},updatePopper:function(){try{this.$_popper.scheduleUpdate()}catch(t){}},getPopperConfig:function(){var t="bottom-start";this.dropup?t=this.right?"top-end":"top-start":this.dropright?t="right-start":this.dropleft?t="left-start":this.right&&(t="bottom-end");var e={placement:t,modifiers:{offset:{offset:this.offset||0},flip:{enabled:!this.noFlip}}},i=this.boundary;return i&&(e.modifiers.preventOverflow={boundariesElement:i}),Object(u.j)(e,this.popperOpts||{})},whileOpenListen:function(t){this.listenForClickOut=t,this.listenForFocusIn=t;var e=t?"$on":"$off";this.$root[e](O,this.rootCloseListener)},rootCloseListener:function(t){t!==this&&(this.visible=!1)},show:function(){var t=this;this.disabled||Object(a.B)((function(){t.visible=!0}))},hide:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.disabled||(this.visible=!1,t&&this.$once("hidden",this.focusToggler))},toggle:function(t){var e=t=t||{},i=e.type,n=e.keyCode;("click"===i||"keydown"===i&&-1!==[o.c,o.h,o.a].indexOf(n))&&(this.disabled?this.visible=!1:(this.$emit("toggle",t),Object(c.d)(t),this.visible?this.hide(!0):this.show()))},onMousedown:function(t){Object(c.d)(t,{propagation:!1})},onKeydown:function(t){var e=t.keyCode;e===o.d?this.onEsc(t):e===o.a?this.focusNext(t,!1):e===o.i&&this.focusNext(t,!0)},onEsc:function(t){this.visible&&(this.visible=!1,Object(c.d)(t),this.$once("hidden",this.focusToggler))},onSplitClick:function(t){this.disabled?this.visible=!1:this.$emit("click",t)},hideHandler:function(t){var e=t.target;!this.visible||Object(a.f)(this.$refs.menu,e)||Object(a.f)(this.toggler,e)||this.hide()},clickOutHandler:function(t){this.hideHandler(t)},focusInHandler:function(t){this.hideHandler(t)},focusNext:function(t,e){var i=this,n=t.target;!this.visible||t&&Object(a.e)(".dropdown form",n)||(Object(c.d)(t),this.$nextTick((function(){var t=i.getItems();if(!(t.length<1)){var r=t.indexOf(n);e&&r>0?r--:!e&&r<t.length-1&&r++,r<0&&(r=0),i.focusItem(r,t)}})))},focusItem:function(t,e){var i=e.find((function(e,i){return i===t}));Object(a.d)(i)},getItems:function(){return(Object(a.D)(w,this.$refs.menu)||[]).filter(a.u)},focusMenu:function(){Object(a.d)(this.$refs.menu)},focusToggler:function(){var t=this;this.$nextTick((function(){Object(a.d)(t.toggler)}))}}}},tbP8:function(t,e,i){"use strict";var n=i("XBTk"),r=i("Pyw5"),o=i.n(r);const s={props:{entityId:{type:Number,required:!1,default:0},entityName:{type:String,required:!1,default:""},src:{type:String,required:!1,default:""},alt:{type:String,required:!1,default:"avatar"},size:{type:Number,required:!1,default:n.f[1],validator:function(t){var e=n.f.includes(t);return e||console.error("Avatar size should be one of [".concat(n.f,"], received: ").concat(t)),e}},shape:{type:String,required:!1,default:n.e.circle}},computed:{sizeClass:function(){return"gl-avatar-s".concat(this.size)},isCircle:function(){return this.shape===n.e.circle},identiconBackgroundClass:function(){var t=this.entityId%7+1;return"gl-avatar-identicon-bg".concat(t)},identiconText:function(){return this.entityName?this.entityName.charAt(0).toUpperCase():""}}};const a=o()({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.src?i("img",{class:["gl-avatar",{"gl-avatar-circle":t.isCircle},t.sizeClass],attrs:{src:t.src,alt:t.alt}}):i("div",{class:["gl-avatar gl-avatar-identicon",{"gl-avatar-circle":t.isCircle},t.sizeClass,t.identiconBackgroundClass]},[t._v("\n  "+t._s(t.identiconText)+"\n")])},staticRenderFns:[]},void 0,s,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=a},wP8z:function(t,e,i){"use strict";var n=i("0zRR"),r=i("/Szx"),o=i("o/E4"),s=i("7bmO"),a=i("P/DV"),c=i("EQ0+"),l=i("1m+M");function u(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function d(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?u(Object(i),!0).forEach((function(e){p(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function p(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var h=Object(s.k)(l.b,["event","routerTag"]),f=r.a.extend({name:n.t,mixins:[a.a,c.a],inheritAttrs:!1,inject:{bvDropdown:{default:null}},props:d(d({},h),{},{linkClass:{type:[String,Array,Object]},variant:{type:String}}),computed:{computedAttrs:function(){return d(d({},this.bvAttrs),{},{role:"menuitem"})}},methods:{closeDropdown:function(){var t=this;Object(o.B)((function(){t.bvDropdown&&t.bvDropdown.hide(!0)}))},onClick:function(t){this.$emit("click",t),this.closeDropdown()}},render:function(t){var e=this.linkClass,i=this.variant,n=this.active,r=this.disabled,o=this.onClick;return t("li",{attrs:{role:"presentation"}},[t(l.a,{staticClass:"dropdown-item",class:[e,p({},"text-".concat(i),i&&!(n||r))],props:this.$props,attrs:this.computedAttrs,on:{click:o},ref:"item"},this.normalizeSlot())])}});function b(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function g(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?b(Object(i),!0).forEach((function(e){v(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):b(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function v(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var m={active:{type:Boolean,default:!1},activeClass:{type:String,default:"active"},buttonClass:{type:[String,Array,Object]},disabled:{type:Boolean,default:!1},variant:{type:String}},y=r.a.extend({name:n.u,mixins:[a.a,c.a],inheritAttrs:!1,inject:{bvDropdown:{default:null}},props:m,computed:{computedAttrs:function(){return g(g({},this.bvAttrs),{},{role:"menuitem",type:"button",disabled:this.disabled})}},methods:{closeDropdown:function(){this.bvDropdown&&this.bvDropdown.hide(!0)},onClick:function(t){this.$emit("click",t),this.closeDropdown()}},render:function(t){var e;return t("li",{attrs:{role:"presentation"}},[t("button",{staticClass:"dropdown-item",class:[this.buttonClass,(e={},v(e,this.activeClass,this.active),v(e,"text-".concat(this.variant),this.variant&&!(this.active||this.disabled)),e)],attrs:this.computedAttrs,on:{click:this.onClick},ref:"button"},this.normalizeSlot())])}}),O=i("XBTk"),j=i("tbP8"),w=i("4lAS"),S=i("s1D3"),C=i("Pyw5"),_=i.n(C);const k={components:{GlIcon:S.a,GlAvatar:j.a,GlButton:w.a},inheritAttrs:!1,props:{avatarUrl:{type:String,required:!1,default:""},iconColor:{type:String,required:!1,default:""},iconName:{type:String,required:!1,default:""},iconRightAriaLabel:{type:String,required:!1,default:""},iconRightName:{type:String,required:!1,default:""},isChecked:{type:Boolean,required:!1,default:!1},isCheckItem:{type:Boolean,required:!1,default:!1},isCheckCentered:{type:Boolean,required:!1,default:!1},secondaryText:{type:String,required:!1,default:""}},computed:{bootstrapComponent:function(){var t=this.$attrs,e=t.href,i=t.to;return e||i?f:y},iconColorCss:function(){return O.F[this.iconColor]||"gl-text-gray-700"},shouldShowCheckIcon:function(){return this.isChecked||this.isCheckItem},checkedClasses:function(){return this.isCheckCentered?"":"gl-mt-3 gl-align-self-start"}},methods:{handleClickIconRight:function(){this.$emit("click-icon-right")}}};const P=_()({render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i(t.bootstrapComponent,t._g(t._b({tag:"component",staticClass:"gl-new-dropdown-item"},"component",t.$attrs,!1),t.$listeners),[t.shouldShowCheckIcon?i("gl-icon",{class:["gl-new-dropdown-item-check-icon",{"gl-visibility-hidden":!t.isChecked},t.checkedClasses],attrs:{name:"mobile-issue-close","data-testid":"dropdown-item-checkbox"}}):t._e(),t._v(" "),t.iconName?i("gl-icon",{class:["gl-new-dropdown-item-icon",t.iconColorCss],attrs:{name:t.iconName}}):t._e(),t._v(" "),t.avatarUrl?i("gl-avatar",{attrs:{size:32,src:t.avatarUrl}}):t._e(),t._v(" "),i("div",{staticClass:"gl-new-dropdown-item-text-wrapper"},[i("p",{staticClass:"gl-new-dropdown-item-text-primary"},[t._t("default")],2),t._v(" "),t.secondaryText?i("p",{staticClass:"gl-new-dropdown-item-text-secondary"},[t._v(t._s(t.secondaryText))]):t._e()]),t._v(" "),t.iconRightName?i("gl-button",{attrs:{size:"small",icon:t.iconRightName,"aria-label":t.iconRightAriaLabel||t.iconRightName},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.handleClickIconRight(e)}}}):t._e()],1)},staticRenderFns:[]},void 0,k,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=P},xy9X:function(t,e,i){"use strict";e.a={computed:{validity:{cache:!1,get:function(){return this.$refs.input.validity}},validationMessage:{cache:!1,get:function(){return this.$refs.input.validationMessage}},willValidate:{cache:!1,get:function(){return this.$refs.input.willValidate}}},methods:{setCustomValidity:function(){var t;return(t=this.$refs.input).setCustomValidity.apply(t,arguments)},checkValidity:function(){var t;return(t=this.$refs.input).checkValidity.apply(t,arguments)},reportValidity:function(){var t;return(t=this.$refs.input).reportValidity.apply(t,arguments)}}}}},[[7,1,0,2,19,30,31]]]);
//# sourceMappingURL=pages.admin.clusters.destroy.4d20562d.chunk.js.map