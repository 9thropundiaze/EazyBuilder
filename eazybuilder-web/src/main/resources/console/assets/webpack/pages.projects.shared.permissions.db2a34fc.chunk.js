(this.webpackJsonp=this.webpackJsonp||[]).push([[394],{224:function(t,e,n){n("HVBj"),n("gjpc"),t.exports=n("QRYO")},DXSV:function(t,e,n){"use strict";e.a={props:{id:{type:String}},data:function(){return{localId_:null}},computed:{safeId:function(){var t=this.id||this.localId_;return function(e){return t?(e=String(e||"").replace(/\s+/g,"_"))?t+"_"+e:t:null}}},mounted:function(){var t=this;this.$nextTick((function(){t.localId_="__BVID__".concat(t._uid)}))}}},FkSe:function(t,e,n){"use strict";var i=n("Pyw5"),s=["sm","md","lg","xl"],o={dark:"dark",light:"light"};const a={props:{label:{type:String,required:!1,default:"Loading"},size:{type:String,required:!1,default:"sm",validator:function(t){return-1!==s.indexOf(t)}},color:{type:String,required:!1,default:o.dark,validator:function(t){return Object.keys(o).includes(t)}},inline:{type:Boolean,required:!1,default:!1}},computed:{rootElementType:function(){return this.inline?"span":"div"},cssClasses:function(){return["gl-spinner","".concat("gl-spinner","-").concat(o[this.color]),"".concat("gl-spinner","-").concat(this.size)]}}};const r=n.n(i)()({render:function(){var t=this.$createElement,e=this._self._c||t;return e(this.rootElementType,{tag:"component",staticClass:"gl-spinner-container"},[e("span",{staticClass:"align-text-bottom",class:this.cssClasses,attrs:{"aria-label":this.label}})])},staticRenderFns:[]},void 0,a,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=r},QlUp:function(t,e,n){"use strict";var i=n("BrvI");e.a={props:{state:{type:Boolean,default:null}},computed:{computedState:function(){return Object(i.b)(this.state)?this.state:null},stateClass:function(){var t=this.computedState;return!0===t?"is-valid":!1===t?"is-invalid":null}}}},Tu1i:function(t,e,n){"use strict";var i=n("t8l0");e.a={props:{size:{type:String,default:function(){return Object(i.b)("formControls","size")}}},computed:{sizeFormClass:function(){return[this.size?"form-control-".concat(this.size):null]},sizeBtnClass:function(){return[this.size?"btn-".concat(this.size):null]}}}},Vxxt:function(t,e,n){"use strict";var i=n("o/E4");e.a={props:{name:{type:String},id:{type:String},disabled:{type:Boolean},required:{type:Boolean,default:!1},form:{type:String},autofocus:{type:Boolean,default:!1}},mounted:function(){this.handleAutofocus()},activated:function(){this.handleAutofocus()},methods:{handleAutofocus:function(){var t=this;this.$nextTick((function(){Object(i.B)((function(){var e=t.$el;t.autofocus&&Object(i.u)(e)&&(Object(i.v)(e,"input, textarea, select")||(e=Object(i.C)("input, textarea, select",e)),Object(i.d)(e))}))}))}}}}},[[224,1,0,2,3,4,5,113]]]);
//# sourceMappingURL=pages.projects.shared.permissions.db2a34fc.chunk.js.map