(this.webpackJsonp=this.webpackJsonp||[]).push([[80],{"/GZH":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return o})),n.d(e,"e",(function(){return s})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return c})),n.d(e,"i",(function(){return d}));var i=40,r=35,a=13,o=27,s=36,u=37,l=39,c=32,d=38},"4lAS":function(t,e,n){"use strict";var i=n("ofGl"),r=n("XBTk"),a=n("g3So"),o=n("s1D3"),s=n("FkSe"),u=n("Pyw5"),l=n.n(u);const c={components:{BButton:i.a,GlIcon:o.a,GlLoadingIcon:s.a},mixins:[a.a],props:{category:{type:String,required:!1,default:r.u.primary,validator:function(t){return Object.keys(r.u).includes(t)}},variant:{type:String,required:!1,default:r.x.default,validator:function(t){return Object.keys(r.x).includes(t)}},size:{type:String,required:!1,default:r.v.medium,validator:function(t){return Object.keys(r.v).includes(t)}},selected:{type:Boolean,required:!1,default:!1},icon:{type:String,required:!1,default:""},label:{type:Boolean,required:!1,default:!1},loading:{type:Boolean,required:!1,default:!1},buttonTextClasses:{type:String,required:!1,default:""},disabled:{type:Boolean,required:!1,default:!1}},computed:{hasIcon:function(){return""!==this.icon},hasIconOnly:function(){return 0===Object.keys(this.$slots).length&&this.hasIcon},isButtonDisabled:function(){return this.disabled||this.loading},buttonClasses:function(){var t=["gl-button"];return[r.x.dashed,r.x.link].includes(this.variant)||this.category===r.u.primary||t.push("btn-".concat(this.variant,"-").concat(this.category)),t.push({"btn-icon":this.hasIconOnly,"button-ellipsis-horizontal":this.hasIconOnly&&"ellipsis_h"===this.icon,selected:this.selected}),this.label&&t.push("btn","btn-label","btn-".concat(this.buttonSize)),t},buttonSize:function(){return r.w[this.size]}}};const d=l()({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.label?"span":"b-button",t._g(t._b({directives:[{name:"safe-link",rawName:"v-safe-link:[safeLinkConfig]",arg:t.safeLinkConfig}],tag:"component",class:t.buttonClasses,attrs:{target:t.target,variant:t.variant,size:t.buttonSize,disabled:t.isButtonDisabled}},"component",t.$attrs,!1),t.$listeners),[t.loading?n("gl-loading-icon",{staticClass:"gl-button-icon gl-button-loading-indicator",attrs:{inline:""}}):t._e(),t._v(" "),!t.hasIcon||t.hasIconOnly&&t.loading?t._e():n("gl-icon",{staticClass:"gl-button-icon",attrs:{name:t.icon}}),t._v(" "),t._t("emoji"),t._v(" "),t.hasIconOnly?t._e():n("span",{staticClass:"gl-button-text",class:t.buttonTextClasses},[t._t("default")],2)],2)},staticRenderFns:[]},void 0,c,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=d},DXSV:function(t,e,n){"use strict";e.a={props:{id:{type:String}},data:function(){return{localId_:null}},computed:{safeId:function(){var t=this.id||this.localId_;return function(e){return t?(e=String(e||"").replace(/\s+/g,"_"))?t+"_"+e:t:null}}},mounted:function(){var t=this;this.$nextTick((function(){t.localId_="__BVID__".concat(t._uid)}))}}},FkSe:function(t,e,n){"use strict";var i=n("Pyw5"),r=["sm","md","lg","xl"],a={dark:"dark",light:"light"};const o={props:{label:{type:String,required:!1,default:"Loading"},size:{type:String,required:!1,default:"sm",validator:function(t){return-1!==r.indexOf(t)}},color:{type:String,required:!1,default:a.dark,validator:function(t){return Object.keys(a).includes(t)}},inline:{type:Boolean,required:!1,default:!1}},computed:{rootElementType:function(){return this.inline?"span":"div"},cssClasses:function(){return["gl-spinner","".concat("gl-spinner","-").concat(a[this.color]),"".concat("gl-spinner","-").concat(this.size)]}}};const s=n.n(i)()({render:function(){var t=this.$createElement,e=this._self._c||t;return e(this.rootElementType,{tag:"component",staticClass:"gl-spinner-container"},[e("span",{staticClass:"align-text-bottom",class:this.cssClasses,attrs:{"aria-label":this.label}})])},staticRenderFns:[]},void 0,o,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=s},GTbw:function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var i=n("0zRR"),r=n("/Szx"),a=n("TjC/"),o=n("o/E4"),s=n("QXXq"),u=n("Vxxt"),l=n("ZKBa"),c=n("Tu1i"),d=n("QlUp"),p=n("Qo4I"),f=n("xy9X"),h=n("DXSV"),b=n("H1r6");function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v=["text","password","email","number","url","tel","search","range","color","date","time","datetime","datetime-local","month","week"],O=r.a.extend({name:i.B,mixins:[b.a,h.a,u.a,c.a,d.a,p.a,l.a,f.a],props:{type:{type:String,default:"text",validator:function(t){return Object(a.a)(v,t)}},noWheel:{type:Boolean,default:!1},min:{type:[String,Number]},max:{type:[String,Number]},step:{type:[String,Number]},list:{type:String}},computed:{localType:function(){return Object(a.a)(v,this.type)?this.type:"text"},computedAttrs:function(){var t=this.localType,e=this.disabled,n=this.placeholder,i=this.required,r=this.min,a=this.max,o=this.step;return{id:this.safeId(),name:this.name||null,form:this.form||null,type:t,disabled:e,placeholder:n,required:i,autocomplete:this.autocomplete||null,readonly:this.readonly||this.plaintext,min:r,max:a,step:o,list:"password"!==t?this.list:null,"aria-required":i?"true":null,"aria-invalid":this.computedAriaInvalid}},computedListeners:function(){return m(m({},this.bvListeners),{},{input:this.onInput,change:this.onChange,blur:this.onBlur})}},watch:{noWheel:function(t){this.setWheelStopper(t)}},mounted:function(){this.setWheelStopper(this.noWheel)},deactivated:function(){this.setWheelStopper(!1)},activated:function(){this.setWheelStopper(this.noWheel)},beforeDestroy:function(){this.setWheelStopper(!1)},methods:{setWheelStopper:function(t){var e=this.$el;Object(s.c)(t,e,"focus",this.onWheelFocus),Object(s.c)(t,e,"blur",this.onWheelBlur),t||Object(s.a)(document,"wheel",this.stopWheel)},onWheelFocus:function(){Object(s.b)(document,"wheel",this.stopWheel)},onWheelBlur:function(){Object(s.a)(document,"wheel",this.stopWheel)},stopWheel:function(t){Object(s.d)(t,{propagation:!1}),Object(o.c)(this.$el)}},render:function(t){return t("input",{ref:"input",class:this.computedClass,attrs:this.computedAttrs,domProps:{value:this.localValue},on:this.computedListeners})}})},GVjJ:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return u}));n("EWC9"),n("gNBD"),n("orcL");var i=n("0AwG");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const s=function(t){const e=new FormData(t);return function(t){return t.reduce((function(t,e){let{name:n,value:i}=e;return Object.assign(t,{[n]:i})}),{})}(Array.from(e.keys()).map((function(t){let n=e.getAll(t);return{name:t,value:1===(n=n.filter((function(t){return t}))).length?n[0]:n}})))},u=function(t){if(!t)throw new TypeError("`mountEl` argument is required");return[...t.querySelectorAll("[name]")].reduce((function(t,e){const n=e.dataset.jsName;if(!n)return t;const r=Object(i.c)(n),{id:o,placeholder:s,name:u,value:l,type:c,checked:d}=e,p=a({name:u,id:o,value:l},s&&{placeholder:s});return["radio","checkbox"].includes(c)?a(a({},t),{},{[r]:[...t[r]||[],a(a({},p),{},{checked:d})]}):a(a({},t),{},{[r]:p})}),{})}},HnlB:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i=function(t,e){return Boolean(t&&e&&new Date(t).getTime()===new Date(e).getTime())}},PrLL:function(t,e,n){"use strict";var i=n("GTbw"),r=n("XBTk"),a=n("Pyw5"),o=n.n(a);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c={prop:"value",event:"input"};const d={components:{BFormInput:i.a},inheritAttrs:!1,model:c,props:{size:{type:String,required:!1,default:null,validator:function(t){return Object.values(r.o).includes(t)}}},computed:{cssClasses:function(){return s({},"gl-form-input-".concat(this.size),null!==this.size)},listeners:function(){var t=this;return l(l({},this.$listeners),{},{input:function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];t.$emit.apply(t,["update"].concat(n))},update:function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];t.$emit.apply(t,[c.event].concat(n))}})}}};const p=o()({render:function(){var t=this.$createElement;return(this._self._c||t)("b-form-input",this._g(this._b({staticClass:"gl-form-input",class:this.cssClasses},"b-form-input",this.$attrs,!1),this.listeners))},staticRenderFns:[]},void 0,d,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=p},QlUp:function(t,e,n){"use strict";var i=n("BrvI");e.a={props:{state:{type:Boolean,default:null}},computed:{computedState:function(){return Object(i.b)(this.state)?this.state:null},stateClass:function(){var t=this.computedState;return!0===t?"is-valid":!1===t?"is-invalid":null}}}},Qo4I:function(t,e,n){"use strict";var i=n("o/E4"),r=n("QXXq"),a=n("BrvI"),o=n("9aS3"),s=n("Ddgg"),u=n("bvam");e.a={model:{prop:"value",event:"update"},props:{value:{type:[String,Number],default:""},ariaInvalid:{type:[Boolean,String],default:!1},readonly:{type:Boolean,default:!1},plaintext:{type:Boolean,default:!1},autocomplete:{type:String},placeholder:{type:String},formatter:{type:Function},lazyFormatter:{type:Boolean,default:!1},trim:{type:Boolean,default:!1},number:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},debounce:{type:[Number,String],default:0}},data:function(){return{localValue:Object(u.e)(this.value),vModelValue:this.value}},computed:{computedClass:function(){return[{"custom-range":"range"===this.type,"form-control-plaintext":this.plaintext&&"range"!==this.type&&"color"!==this.type,"form-control":!this.plaintext&&"range"!==this.type||"color"===this.type},this.sizeFormClass,this.stateClass]},computedAriaInvalid:function(){return this.ariaInvalid&&"false"!==this.ariaInvalid?!0===this.ariaInvalid?"true":this.ariaInvalid:!1===this.computedState?"true":null},computedDebounce:function(){return Object(o.b)(Object(s.c)(this.debounce,0),0)},hasFormatter:function(){return Object(a.e)(this.formatter)}},watch:{value:function(t){var e=Object(u.e)(t);e!==this.localValue&&t!==this.vModelValue&&(this.clearDebounce(),this.localValue=e,this.vModelValue=t)}},created:function(){this.$_inputDebounceTimer=null},mounted:function(){this.$on("hook:beforeDestroy",this.clearDebounce);var t=this.value,e=Object(u.e)(t);e!==this.localValue&&t!==this.vModelValue&&(this.localValue=e,this.vModelValue=t)},methods:{clearDebounce:function(){clearTimeout(this.$_inputDebounceTimer),this.$_inputDebounceTimer=null},formatValue:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t=Object(u.e)(t),!this.hasFormatter||this.lazyFormatter&&!n||(t=this.formatter(t,e)),t},modifyValue:function(t){return this.trim&&(t=t.trim()),this.number&&(t=Object(s.b)(t,t)),t},updateValue:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.lazy;if(!i||n){this.clearDebounce();var r=function(){if((t=e.modifyValue(t))!==e.vModelValue)e.vModelValue=t,e.$emit("update",t);else if(e.hasFormatter){var n=e.$refs.input;n&&t!==n.value&&(n.value=t)}},a=this.computedDebounce;a>0&&!i&&!n?this.$_inputDebounceTimer=setTimeout(r,a):r()}},onInput:function(t){if(!t.target.composing){var e=t.target.value,n=this.formatValue(e,t);!1===n||t.defaultPrevented?Object(r.d)(t,{propagation:!1}):(this.localValue=n,this.updateValue(n),this.$emit("input",n))}},onChange:function(t){var e=t.target.value,n=this.formatValue(e,t);!1===n||t.defaultPrevented?Object(r.d)(t,{propagation:!1}):(this.localValue=n,this.updateValue(n,!0),this.$emit("change",n))},onBlur:function(t){var e=t.target.value,n=this.formatValue(e,t,!0);!1!==n&&(this.localValue=Object(u.e)(this.modifyValue(n)),this.updateValue(n,!0)),this.$emit("blur",t)},focus:function(){this.disabled||Object(i.d)(this.$el)},blur:function(){this.disabled||Object(i.c)(this.$el)}}}},Tu1i:function(t,e,n){"use strict";var i=n("t8l0");e.a={props:{size:{type:String,default:function(){return Object(i.b)("formControls","size")}}},computed:{sizeFormClass:function(){return[this.size?"form-control-".concat(this.size):null]},sizeBtnClass:function(){return[this.size?"btn-".concat(this.size):null]}}}},Vxxt:function(t,e,n){"use strict";var i=n("o/E4");e.a={props:{name:{type:String},id:{type:String},disabled:{type:Boolean},required:{type:Boolean,default:!1},form:{type:String},autofocus:{type:Boolean,default:!1}},mounted:function(){this.handleAutofocus()},activated:function(){this.handleAutofocus()},methods:{handleAutofocus:function(){var t=this;this.$nextTick((function(){Object(i.B)((function(){var e=t.$el;t.autofocus&&Object(i.u)(e)&&(Object(i.v)(e,"input, textarea, select")||(e=Object(i.C)("input, textarea, select",e)),Object(i.d)(e))}))}))}}}},ZKBa:function(t,e,n){"use strict";e.a={computed:{selectionStart:{cache:!1,get:function(){return this.$refs.input.selectionStart},set:function(t){this.$refs.input.selectionStart=t}},selectionEnd:{cache:!1,get:function(){return this.$refs.input.selectionEnd},set:function(t){this.$refs.input.selectionEnd=t}},selectionDirection:{cache:!1,get:function(){return this.$refs.input.selectionDirection},set:function(t){this.$refs.input.selectionDirection=t}}},methods:{select:function(){var t;(t=this.$refs.input).select.apply(t,arguments)},setSelectionRange:function(){var t;(t=this.$refs.input).setSelectionRange.apply(t,arguments)},setRangeText:function(){var t;(t=this.$refs.input).setRangeText.apply(t,arguments)}}}},gNBD:function(t,e,n){var i=n("ZfjD"),r=n("H81m"),a=n("b05b");i({target:"Object",stat:!0},{fromEntries:function(t){var e={};return r(t,(function(t,n){a(e,t,n)}),{AS_ENTRIES:!0}),e}})},ofGl:function(t,e,n){"use strict";n.d(e,"a",(function(){return P}));var i=n("0zRR"),r=n("/GZH"),a=n("/Szx"),o=n("lgrP"),s=n("TjC/"),u=n("t8l0"),l=n("o/E4"),c=n("QXXq"),d=n("BrvI"),p=n("7bmO"),f=n("ua/H"),h=n("U9NU"),b=n("1m+M");function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v=Object(p.k)(b.b,["event","routerTag"]);delete v.href.default,delete v.to.default;var O=m(m({},{block:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{type:String,default:function(){return Object(u.b)(i.g,"size")}},variant:{type:String,default:function(){return Object(u.b)(i.g,"variant")}},type:{type:String,default:"button"},tag:{type:String,default:"button"},pill:{type:Boolean,default:!1},squared:{type:Boolean,default:!1},pressed:{type:Boolean,default:null}}),v),j=function(t){"focusin"===t.type?Object(l.b)(t.target,"focus"):"focusout"===t.type&&Object(l.y)(t.target,"focus")},D=function(t){return Object(h.d)(t)||Object(l.t)(t.tag,"a")},S=function(t){return Object(d.b)(t.pressed)},w=function(t){return!(D(t)||t.tag&&!Object(l.t)(t.tag,"button"))},k=function(t){return!D(t)&&!w(t)},x=function(t){var e;return["btn-".concat(t.variant||Object(u.b)(i.g,"variant")),(e={},y(e,"btn-".concat(t.size),t.size),y(e,"btn-block",t.block),y(e,"rounded-pill",t.pill),y(e,"rounded-0",t.squared&&!t.pill),y(e,"disabled",t.disabled),y(e,"active",t.pressed),e)]},B=function(t){return D(t)?Object(f.a)(v,t):{}},q=function(t,e){var n=w(t),i=D(t),r=S(t),a=k(t),o=i&&"#"===t.href,s=e.attrs&&e.attrs.role?e.attrs.role:null,u=e.attrs?e.attrs.tabindex:null;return(a||o)&&(u="0"),{type:n&&!i?t.type:null,disabled:n?t.disabled:null,role:a||o?"button":s,"aria-disabled":a?String(t.disabled):null,"aria-pressed":r?String(t.pressed):null,autocomplete:r?"off":null,tabindex:t.disabled&&!n?"-1":u}},P=a.a.extend({name:i.g,functional:!0,props:O,render:function(t,e){var n=e.props,i=e.data,a=e.listeners,u=e.children,l=S(n),p=D(n),f=k(n),h=p&&"#"===n.href,g={keydown:function(t){if(!n.disabled&&(f||h)){var e=t.keyCode;if(e===r.h||e===r.c&&f){var i=t.currentTarget||t.target;Object(c.d)(t,{propagation:!1}),i.click()}}},click:function(t){n.disabled&&Object(d.d)(t)?Object(c.d)(t):l&&a&&a["update:pressed"]&&Object(s.b)(a["update:pressed"]).forEach((function(t){Object(d.e)(t)&&t(!n.pressed)}))}};l&&(g.focusin=j,g.focusout=j);var m={staticClass:"btn",class:x(n),props:B(n),attrs:q(n,i),on:g};return t(p?b.a:n.tag,Object(o.a)(i,m),u)}})},sx5x:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return f}));n("jaBk"),n("orcL");var i=n("jB52"),r=n("XRO8"),a=n("GVjJ"),o=n("/lV4"),s=n("vZ/O"),u=n("PrLL"),l={name:"ExpiresAtField",components:{GlDatepicker:s.a,GlFormInput:u.a},props:{inputAttrs:{type:Object,required:!1,default:function(){return{}}}},data:()=>({minDate:new Date})},c=n("tBpV"),d=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("gl-datepicker",{attrs:{target:null,"min-date":this.minDate}},[e("gl-form-input",this._b({staticClass:"datepicker gl-datepicker-input",attrs:{autocomplete:"off",inputmode:"none","data-qa-selector":"expiry_date_field"}},"gl-form-input",this.inputAttrs,!1))],1)}),[],!1,null,null,null).exports;const p=function(){const t=document.querySelector(".js-access-tokens-expires-at");if(!t)return null;const{expiresAt:e}=Object(a.a)(t);return new i.default({el:t,render:t=>t(d,{props:{inputAttrs:e}})})},f=function(){const t=document.querySelector(".js-access-tokens-projects");if(!t)return null;const{projects:e}=Object(a.a)(t);return window.gon.features.personalAccessTokensScopedToProjects?new Promise((function(a){Promise.all([Promise.all([n.e(6),n.e(97),n.e(456),n.e(463)]).then(n.bind(null,"8PW6")),n.e(6).then(n.bind(null,"GiFX")),Promise.all([n.e(6),n.e(62),n.e(465)]).then(n.bind(null,"5v28"))]).then((function(n){let[{default:r},{default:o},{default:s}]=n;const u=new o({defaultClient:s()});i.default.use(o),a(new i.default({el:t,apolloProvider:u,render:t=>t(r,{props:{inputAttrs:e}})}))})).catch((function(){Object(r.b)({message:Object(o.a)("An error occurred while loading the access tokens form, please try again.")})}))})):null}},"vZ/O":function(t,e,n){"use strict";var i=n("lx39"),r=n.n(i),a=n("+XPY"),o=n.n(a),s=n("XBTk"),u=n("HnlB"),l=n("4lAS"),c=n("PrLL"),d=n("s1D3"),p=n("Pyw5"),f=n.n(p),h=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return"0".concat(t).slice(-e)};const b={components:{GlFormInput:c.a,GlIcon:d.a,GlButton:l.a},props:{target:{type:String,required:!1,default:""},container:{type:String,required:!1,default:""},value:{type:Date,required:!1,default:null},minDate:{type:Date,required:!1,default:null},maxDate:{type:Date,required:!1,default:null},startRange:{type:Date,required:!1,default:null},endRange:{type:Date,required:!1,default:null},disableDayFn:{type:Function,required:!1,default:null},firstDay:{type:Number,required:!1,default:0},arialLabel:{type:String,required:!1,default:""},placeholder:{type:String,required:!1,default:s.m},autocomplete:{type:String,required:!1,default:""},disabled:{type:Boolean,required:!1,default:!1},displayField:{type:Boolean,required:!1,default:!0},startOpened:{type:Boolean,required:!1,default:!1},defaultDate:{type:Date,required:!1,default:null},i18n:{type:Object,required:!1,default:null},theme:{type:String,required:!1,default:""},showClearButton:{type:Boolean,required:!1,default:!1},inputId:{type:String,required:!1,default:null},inputLabel:{type:String,required:!1,default:"Enter date"},inputName:{type:String,required:!1,default:null}},data:function(){return{textInput:""}},computed:{formattedDate:function(){return this.calendar&&this.calendar.toString()},customTrigger:function(){return r()(this.target)&&""!==this.target},triggerOnFocus:function(){return null===this.target},showDefaultField:function(){return!this.customTrigger||this.triggerOnFocus},renderClearButton:function(){return this.showClearButton&&""!==this.textInput&&!this.disabled},inputAutocomplete:function(){return""!==this.autocomplete?this.autocomplete:this.triggerOnFocus?"off":null}},watch:{value:function(t){Object(u.a)(t,this.calendar.getDate())||this.calendar.setDate(t,!0)},minDate:function(t){this.calendar.setMinDate(t)},maxDate:function(t){this.calendar.setMaxDate(t)},startRange:function(t){this.calendar.setStartRange(t)},endRange:function(t){this.calendar.setEndRange(t)}},mounted:function(){var t=this.$parent.$el,e=this.draw.bind(this),n={field:this.$el.querySelector('input[type="text"]'),theme:"gl-datepicker-theme position-absolute ".concat(this.theme),defaultDate:this.defaultDate||this.value,setDefaultDate:Boolean(this.value)||Boolean(this.defaultDate),minDate:this.minDate,maxDate:this.maxDate,format:s.m,disableDayFn:this.disableDayFn,firstDay:this.firstDay,arialLabel:this.ariaLabel,toString:function(t){return function(t){var e=h(t.getDate()),n=h(t.getMonth()+1),i=t.getFullYear();return"".concat(i,"-").concat(n,"-").concat(e)}(t)},onSelect:this.selected.bind(this),onClose:this.closed.bind(this),onOpen:this.opened.bind(this),onDraw:function(t){!function(t){var e=t.el.querySelectorAll(".pika-button"),n=new Date;e.forEach((function(t){var e,i,r=t.dataset,a=r.pikaYear,o=r.pikaMonth,s=r.pikaDay,u=new Date(a,o,s);i=u,(e=n)&&i&&i.getTime()<e.getTime()&&t.classList.add("is-past-date")}))}(t),e()}};if(!this.triggerOnFocus&&!this.disabled){var i=this.customTrigger?t.querySelector(this.target):this.$refs.calendarTriggerBtn.$el;n.trigger=i,!n.field&&this.customTrigger&&(n.field=i)}if(null!==this.container){var r=this.container?t.querySelector(this.container):this.$el;n.container=r}this.i18n&&(n.i18n=this.i18n),this.calendar=new o.a(n),this.startOpened&&this.calendar.show()},beforeDestroy:function(){this.calendar.destroy()},methods:{selected:function(t){this.$emit("input",t)},closed:function(){this.$emit("close")},opened:function(){this.$emit("open")},cleared:function(){this.textInput="",this.$emit("clear")},draw:function(){this.$emit("monthChange")},onKeydown:function(){if(""===this.textInput){var t=this.minDate||null;this.calendar.setDate(t),this.selected(t)}}}};const g=f()({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"gl-datepicker d-inline-block"},[t.showDefaultField?n("div",{staticClass:"position-relative"},[t._t("default",[n("gl-form-input",{staticClass:"gl-datepicker-input",class:t.renderClearButton?"gl-pr-9!":"gl-pr-7!",attrs:{id:t.inputId,name:t.inputName,"data-testid":"gl-datepicker-input",value:t.formattedDate,placeholder:t.placeholder,autocomplete:t.inputAutocomplete,disabled:t.disabled,"aria-label":t.inputLabel},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onKeydown(e)}},model:{value:t.textInput,callback:function(e){t.textInput=e},expression:"textInput"}})],{formattedDate:t.formattedDate}),t._v(" "),n("div",{staticClass:"gl-datepicker-actions"},[t.renderClearButton?n("gl-button",{staticClass:"gl-pointer-events-auto",attrs:{"data-testid":"clear-button","aria-label":"Clear date",category:"tertiary",size:"small",icon:"clear"},on:{click:t.cleared}}):t._e(),t._v(" "),t.triggerOnFocus||t.disabled?n("span",{staticClass:"gl-px-2",class:t.disabled?"gl-text-gray-400":"gl-text-gray-500",attrs:{"data-testid":"datepicker-calendar-icon"}},[n("gl-icon",{staticClass:"gl-display-block",attrs:{name:"calendar",size:16}})],1):n("gl-button",{ref:"calendarTriggerBtn",staticClass:"gl-pointer-events-auto",attrs:{"aria-label":"Open datepicker",category:"tertiary",size:"small",icon:"calendar"}})],1)],2):t._t("default",null,{formattedDate:t.formattedDate})],2)},staticRenderFns:[]},void 0,b,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=g},xy9X:function(t,e,n){"use strict";e.a={computed:{validity:{cache:!1,get:function(){return this.$refs.input.validity}},validationMessage:{cache:!1,get:function(){return this.$refs.input.validationMessage}},willValidate:{cache:!1,get:function(){return this.$refs.input.willValidate}}},methods:{setCustomValidity:function(){var t;return(t=this.$refs.input).setCustomValidity.apply(t,arguments)},checkValidity:function(){var t;return(t=this.$refs.input).checkValidity.apply(t,arguments)},reportValidity:function(){var t;return(t=this.$refs.input).reportValidity.apply(t,arguments)}}}}}]);
//# sourceMappingURL=commons-pages.admin.impersonation_tokens-pages.profiles.personal_access_tokens-pages.projects.settin-14eab14a.25186342.chunk.js.map