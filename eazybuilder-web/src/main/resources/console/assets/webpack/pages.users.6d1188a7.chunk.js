(this.webpackJsonp=this.webpackJsonp||[]).push([[417],{247:function(s,t,e){e("HVBj"),s.exports=e("W9i/")},"W9i/":function(s,t,e){"use strict";e.r(t);e("pBsb");var i=e("EmJ/"),o=e.n(i),a=e("06tH"),l=e.n(a),n=e("eRnp"),c=e("umie");!function(s){var t=this;new c.a({parentEl:".user-profile",action:s}),o()(".hide-project-limit-message").on("click",(function(s){s.preventDefault(),l.a.set("hide_project_limit_message","false"),o()(t).parents(".project-limit-message").remove()}))}(o()("body").attr("data-page").split(":")[1]),new n.a},eRnp:function(s,t,e){"use strict";e.d(t,"a",(function(){return n}));var i=e("EmJ/"),o=e.n(i),a=e("06tH"),l=e.n(a);class n{constructor(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.options=s;const t=this.options.className||"user-callout";this.userCalloutBody=o()(".".concat(t)),this.cookieName=this.userCalloutBody.data("uid"),this.isCalloutDismissed=l.a.get(this.cookieName),this.init()}init(){var s=this;this.isCalloutDismissed&&"false"!==this.isCalloutDismissed||this.userCalloutBody.find(".js-close-callout").on("click",(function(t){return s.dismissCallout(t)}))}dismissCallout(s){const t=o()(s.currentTarget),e={};t.hasClass("js-close-session")||(e.expires=365),this.options.setCalloutPerProject&&(e.path=this.userCalloutBody.data("projectPath")),l.a.set(this.cookieName,"true",e),(t.hasClass("close")||t.hasClass("js-close"))&&this.userCalloutBody.remove()}}}},[[247,1,0,85]]]);
//# sourceMappingURL=pages.users.6d1188a7.chunk.js.map