(this.webpackJsonp=this.webpackJsonp||[]).push([[448],{"/GZH":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return s})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return u})),n.d(e,"i",(function(){return d}));var i=40,r=35,o=13,a=27,s=36,c=37,l=39,u=32,d=38},"11kg":function(t,e,n){"use strict";var i=n("h7kv"),r=n.n(i),o=n("Pyw5"),a=n.n(o);const s={props:{totalItems:{type:Number,required:!1,default:0},fetchedItems:{type:Number,required:!0},maxListHeight:{type:Number,required:!1,default:0}},computed:{listHeight:function(){return{maxHeight:this.maxListHeight?"".concat(this.maxListHeight,"px"):"auto"}},legendText:function(){return this.totalItems>0?"Showing ".concat(this.fetchedItems," of ").concat(this.totalItems," items"):"Showing ".concat(this.fetchedItems," items")}},watch:{fetchedItems:function(t,e){if(t>e){var n=this.$refs.infiniteContainer,i=n.scrollHeight,r=n.scrollTop;0!==i&&0===r&&(this.$options.adjustScrollHeight=i)}}},mounted:function(){var t=this;this.$nextTick((function(){t.$listeners.topReached&&!t.$listeners.bottomReached&&t.scrollDown()}))},updated:function(){var t=this;this.$nextTick((function(){if(t.$options.adjustScrollHeight){var e=t.$refs.infiniteContainer.scrollHeight-t.$options.adjustScrollHeight-5;e<1&&(e=1),t.scrollTo({top:e}),t.$options.adjustScrollHeight=null}}))},methods:{scrollUp:function(){this.scrollTo({top:5})},scrollDown:function(){var t=this.$refs.infiniteContainer.scrollHeight;this.scrollTo({top:t-5})},scrollTo:function(t){var e=t.top;this.$refs.infiniteContainer.scrollTo({top:e})},topReached:r()((function(){this.$emit("topReached")}),1e3),bottomReached:r()((function(){this.$emit("bottomReached")}),1e3),itemsListHeight:function(){return this.$refs.infiniteContainer.scrollHeight},scrollTop:function(){return this.$refs.infiniteContainer.scrollTop},handleScroll:r()((function(){this.scrollTop()+this.maxListHeight>=this.itemsListHeight()?this.bottomReached():0===this.scrollTop()&&this.topReached()}))}};const c=a()({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._t("header"),t._v(" "),n("div",t._g(t._b({ref:"infiniteContainer",staticClass:"gl-infinite-scroll-container",style:t.listHeight,on:{scroll:t.handleScroll}},"div",t.$attrs,!1),t.$listeners),[t._t("items")],2),t._v(" "),n("p",{staticClass:"gl-infinite-scroll-legend"},[t._t("default",[t._v("\n      "+t._s(t.legendText)+"\n    ")],{fetchedItems:t.fetchedItems,totalItems:t.totalItems})],2)],2)},staticRenderFns:[]},void 0,s,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=c},"4lAS":function(t,e,n){"use strict";var i=n("ofGl"),r=n("XBTk"),o=n("g3So"),a=n("s1D3"),s=n("FkSe"),c=n("Pyw5"),l=n.n(c);const u={components:{BButton:i.a,GlIcon:a.a,GlLoadingIcon:s.a},mixins:[o.a],props:{category:{type:String,required:!1,default:r.u.primary,validator:function(t){return Object.keys(r.u).includes(t)}},variant:{type:String,required:!1,default:r.x.default,validator:function(t){return Object.keys(r.x).includes(t)}},size:{type:String,required:!1,default:r.v.medium,validator:function(t){return Object.keys(r.v).includes(t)}},selected:{type:Boolean,required:!1,default:!1},icon:{type:String,required:!1,default:""},label:{type:Boolean,required:!1,default:!1},loading:{type:Boolean,required:!1,default:!1},buttonTextClasses:{type:String,required:!1,default:""},disabled:{type:Boolean,required:!1,default:!1}},computed:{hasIcon:function(){return""!==this.icon},hasIconOnly:function(){return 0===Object.keys(this.$slots).length&&this.hasIcon},isButtonDisabled:function(){return this.disabled||this.loading},buttonClasses:function(){var t=["gl-button"];return[r.x.dashed,r.x.link].includes(this.variant)||this.category===r.u.primary||t.push("btn-".concat(this.variant,"-").concat(this.category)),t.push({"btn-icon":this.hasIconOnly,"button-ellipsis-horizontal":this.hasIconOnly&&"ellipsis_h"===this.icon,selected:this.selected}),this.label&&t.push("btn","btn-label","btn-".concat(this.buttonSize)),t},buttonSize:function(){return r.w[this.size]}}};const d=l()({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.label?"span":"b-button",t._g(t._b({directives:[{name:"safe-link",rawName:"v-safe-link:[safeLinkConfig]",arg:t.safeLinkConfig}],tag:"component",class:t.buttonClasses,attrs:{target:t.target,variant:t.variant,size:t.buttonSize,disabled:t.isButtonDisabled}},"component",t.$attrs,!1),t.$listeners),[t.loading?n("gl-loading-icon",{staticClass:"gl-button-icon gl-button-loading-indicator",attrs:{inline:""}}):t._e(),t._v(" "),!t.hasIcon||t.hasIconOnly&&t.loading?t._e():n("gl-icon",{staticClass:"gl-button-icon",attrs:{name:t.icon}}),t._v(" "),t._t("emoji"),t._v(" "),t.hasIconOnly?t._e():n("span",{staticClass:"gl-button-text",class:t.buttonTextClasses},[t._t("default")],2)],2)},staticRenderFns:[]},void 0,u,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=d},FkSe:function(t,e,n){"use strict";var i=n("Pyw5"),r=["sm","md","lg","xl"],o={dark:"dark",light:"light"};const a={props:{label:{type:String,required:!1,default:"Loading"},size:{type:String,required:!1,default:"sm",validator:function(t){return-1!==r.indexOf(t)}},color:{type:String,required:!1,default:o.dark,validator:function(t){return Object.keys(o).includes(t)}},inline:{type:Boolean,required:!1,default:!1}},computed:{rootElementType:function(){return this.inline?"span":"div"},cssClasses:function(){return["gl-spinner","".concat("gl-spinner","-").concat(o[this.color]),"".concat("gl-spinner","-").concat(this.size)]}}};const s=n.n(i)()({render:function(){var t=this.$createElement,e=this._self._c||t;return e(this.rootElementType,{tag:"component",staticClass:"gl-spinner-container"},[e("span",{staticClass:"align-text-bottom",class:this.cssClasses,attrs:{"aria-label":this.label}})])},staticRenderFns:[]},void 0,a,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=s},KcQl:function(t,e,n){"use strict";var i=n("ZfjD"),r=n("PpKG"),o=n("O9kB"),a=n("QmHw"),s=n("OuD2"),c=n("eclS"),l=n("arHL"),u=n("fEQ0");if(i({target:"Promise",proto:!0,real:!0,forced:!!o&&a((function(){o.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(t){var e=c(this,s("Promise")),n="function"==typeof t;return this.then(n?function(n){return l(e,t()).then((function(){return n}))}:t,n?function(n){return l(e,t()).then((function(){throw n}))}:t)}}),!r&&"function"==typeof o){var d=s("Promise").prototype.finally;o.prototype.finally!==d&&u(o.prototype,"finally",d,{unsafe:!0})}},Lzak:function(t,e,n){"use strict";var i=n("0zRR"),r=n("/Szx"),o=n("lgrP"),a=n("t8l0"),s=n("7bmO"),c=n("ua/H"),l=n("U9NU"),u=n("1m+M");function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var p=Object(s.k)(u.b,["event","routerTag"]);delete p.href.default,delete p.to.default;var h=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({tag:{type:String,default:"span"},variant:{type:String,default:function(){return Object(a.b)(i.c,"variant")}},pill:{type:Boolean,default:!1}},p),b=r.a.extend({name:i.c,functional:!0,props:h,render:function(t,e){var n=e.props,i=e.data,r=e.children,a=Object(l.d)(n),s=a?u.a:n.tag,d={staticClass:"badge",class:[n.variant?"badge-".concat(n.variant):"badge-secondary",{"badge-pill":n.pill,active:n.active,disabled:n.disabled}],props:a?Object(c.a)(p,n):{}};return t(s,Object(o.a)(i,d),r)}}),g=n("XBTk"),v=n("s1D3"),y=n("Pyw5"),m=n.n(y);const O={components:{BBadge:b,GlIcon:v.a},inheritAttrs:!1,props:{size:{type:String,default:g.h.md,validator:function(t){return void 0!==g.h[t]},required:!1},variant:{type:String,default:g.i.muted,validator:function(t){return void 0!==g.i[t]},required:!1},icon:{type:String,required:!1,default:null}},computed:{hasIconOnly:function(){return Boolean(this.icon&&0===Object.keys(this.$slots).length)},role:function(){return this.hasIconOnly?"img":void 0}}};const j=m()({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-badge",t._b({class:["gl-badge",t.size],attrs:{variant:t.variant,role:t.role,pill:""}},"b-badge",t.$attrs,!1),[t.icon?n("gl-icon",{staticClass:"gl-badge-icon",class:{"gl-mr-2":!t.hasIconOnly},attrs:{name:t.icon}}):t._e(),t._v(" "),t._t("default")],2)},staticRenderFns:[]},void 0,O,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=j},N50s:function(t,e,n){"use strict";var i=n("Q33P"),r=n.n(i),o=n("XBTk"),a=n("4lAS"),s=n("Pyw5"),c=n.n(s);const l={components:{GlButton:a.a},props:{open:{type:Boolean,required:!0},headerHeight:{type:String,required:!1,default:""},zIndex:{type:Number,required:!1,default:o.r}},computed:{positionFromTop:function(){return r()(this.headerHeight)?0:this.headerHeight},drawerStyles:function(){var t={top:this.positionFromTop,zIndex:this.zIndex};return this.positionFromTop&&(t.maxHeight="calc(100vh - ".concat(this.positionFromTop,")")),t}},watch:{open:{immediate:!0,handler:function(t){t?document.addEventListener("keydown",this.handleEscape):document.removeEventListener("keydown",this.handleEscape)}}},beforeDestroy:function(){document.removeEventListener("keydown",this.handleEscape)},methods:{handleEscape:function(t){this.open&&27===t.keyCode&&this.$emit("close")}}};const u=c()({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"gl-drawer"}},[t.open?n("aside",{staticClass:"gl-drawer",style:t.drawerStyles},[n("div",{staticClass:"gl-drawer-header"},[n("span",[t._t("header")],2),t._v(" "),n("gl-button",{staticClass:"gl-drawer-close-button",attrs:{category:"tertiary",size:"small",icon:"close","aria-label":"Close drawer"},on:{click:function(e){return t.$emit("close")}}})],1),t._v(" "),n("div",{staticClass:"gl-drawer-body"},[t._t("default")],2)]):t._e()])},staticRenderFns:[]},void 0,l,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=u},ofGl:function(t,e,n){"use strict";n.d(e,"a",(function(){return $}));var i=n("0zRR"),r=n("/GZH"),o=n("/Szx"),a=n("lgrP"),s=n("TjC/"),c=n("t8l0"),l=n("o/E4"),u=n("QXXq"),d=n("BrvI"),f=n("7bmO"),p=n("ua/H"),h=n("U9NU"),b=n("1m+M");function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var m=Object(f.k)(b.b,["event","routerTag"]);delete m.href.default,delete m.to.default;var O=v(v({},{block:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{type:String,default:function(){return Object(c.b)(i.g,"size")}},variant:{type:String,default:function(){return Object(c.b)(i.g,"variant")}},type:{type:String,default:"button"},tag:{type:String,default:"button"},pill:{type:Boolean,default:!1},squared:{type:Boolean,default:!1},pressed:{type:Boolean,default:null}}),m),j=function(t){"focusin"===t.type?Object(l.b)(t.target,"focus"):"focusout"===t.type&&Object(l.y)(t.target,"focus")},S=function(t){return Object(h.d)(t)||Object(l.t)(t.tag,"a")},k=function(t){return Object(d.b)(t.pressed)},w=function(t){return!(S(t)||t.tag&&!Object(l.t)(t.tag,"button"))},_=function(t){return!S(t)&&!w(t)},C=function(t){var e;return["btn-".concat(t.variant||Object(c.b)(i.g,"variant")),(e={},y(e,"btn-".concat(t.size),t.size),y(e,"btn-block",t.block),y(e,"rounded-pill",t.pill),y(e,"rounded-0",t.squared&&!t.pill),y(e,"disabled",t.disabled),y(e,"active",t.pressed),e)]},x=function(t){return S(t)?Object(p.a)(m,t):{}},P=function(t,e){var n=w(t),i=S(t),r=k(t),o=_(t),a=i&&"#"===t.href,s=e.attrs&&e.attrs.role?e.attrs.role:null,c=e.attrs?e.attrs.tabindex:null;return(o||a)&&(c="0"),{type:n&&!i?t.type:null,disabled:n?t.disabled:null,role:o||a?"button":s,"aria-disabled":o?String(t.disabled):null,"aria-pressed":r?String(t.pressed):null,autocomplete:r?"off":null,tabindex:t.disabled&&!n?"-1":c}},$=o.a.extend({name:i.g,functional:!0,props:O,render:function(t,e){var n=e.props,i=e.data,o=e.listeners,c=e.children,l=k(n),f=S(n),p=_(n),h=f&&"#"===n.href,g={keydown:function(t){if(!n.disabled&&(p||h)){var e=t.keyCode;if(e===r.h||e===r.c&&p){var i=t.currentTarget||t.target;Object(u.d)(t,{propagation:!1}),i.click()}}},click:function(t){n.disabled&&Object(d.d)(t)?Object(u.d)(t):l&&o&&o["update:pressed"]&&Object(s.b)(o["update:pressed"]).forEach((function(t){Object(d.e)(t)&&t(!n.pressed)}))}};l&&(g.focusin=j,g.focusout=j);var v={staticClass:"btn",class:C(n),props:x(n),attrs:P(n,i),on:g};return t(f?b.a:n.tag,Object(a.a)(i,v),c)}})}}]);
//# sourceMappingURL=vendors-whatsNewApp.4df7fc2f.chunk.js.map