(this.webpackJsonp=this.webpackJsonp||[]).push([[473],{"aG+H":function(e,t,a){"use strict";a.r(t),a.d(t,"waitForCaptchaToBeSolved",(function(){return m}));a("jaBk");var n=a("jB52"),c=a("o4PY"),o=a.n(c),s=a("1cpz"),i=a("htNe");const r=a.n(i)()((function(){return new Promise((function(e){window.recaptchaOnloadCallback=function(){delete window.recaptchaOnloadCallback,e(window.grecaptcha)},function(){const e=document.createElement("script");e.src="".concat("https://www.google.com/recaptcha/api.js","?onload=").concat("recaptchaOnloadCallback","&render=explicit"),e.classList.add("js-recaptcha-script"),document.head.appendChild(e)}()}))}));var d={components:{GlModal:s.a},props:{needsCaptchaResponse:{type:Boolean,required:!1,default:!1},captchaSiteKey:{type:String,required:!0}},data:()=>({modalId:o()("captcha-modal-")}),watch:{needsCaptchaResponse(e){e&&this.$refs.modal.show()}},mounted(){this.needsCaptchaResponse&&this.$refs.modal.show()},methods:{emitReceivedCaptchaResponse(e){this.$refs.modal.hide(),this.$emit("receivedCaptchaResponse",e)},emitNullReceivedCaptchaResponse(){this.emitReceivedCaptchaResponse(null)},shown(){var e=this;const t=this.$refs.captcha;r().then((function(a){a.render(t,{sitekey:e.captchaSiteKey,callback:e.emitReceivedCaptchaResponse})})).catch((function(t){e.emitNullReceivedCaptchaResponse(),e.$refs.modal.hide(),console.error("[gitlab] an unexpected exception was caught while initializing captcha",t)}))},hide(e){e.trigger&&this.emitNullReceivedCaptchaResponse()}}},l=a("tBpV"),p=Object(l.a)(d,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("gl-modal",{ref:"modal",attrs:{"modal-id":e.modalId,title:e.__("Please solve the captcha"),"action-cancel":{text:e.__("Cancel")}},on:{shown:e.shown,hide:e.hide,hidden:function(t){return e.$emit("hidden")}}},[a("div",{ref:"captcha"}),e._v(" "),a("p",[e._v(e._s(e.__("We want to be sure it is you, please confirm you are not a robot.")))])])}),[],!1,null,null,null).exports,h=a("/lV4");var u=class extends Error{constructor(e){super(e||Object(h.a)("You must solve the CAPTCHA in order to submit")),this.name="UnsolvedCaptchaError"}};function m(e){return new Promise((function(t,a){let c=document.createElement("div");document.body.append(c);let o=new n.default({el:c,render:function(n){return n(p,{props:{captchaSiteKey:e,needsCaptchaResponse:!0},on:{hidden:function(){o.$destroy(),o.$el.remove(),c.remove(),c=null,o=null},receivedCaptchaResponse:function(e){if(e)t(e);else{const e=new u;a(e)}}}})}})}))}}}]);
//# sourceMappingURL=473.21f35f81.chunk.js.map