(this.webpackJsonp=this.webpackJsonp||[]).push([[216],{"05sH":function(t,e,o){var n=o("8FVE"),r=o("zxUd"),i=o("r6dd"),s=o("aTSC"),a=o("7Zqv"),c=o("M1vi"),d=o("etTJ"),l=o("/NDV"),u=o("Ksks"),p=o("WlOc"),f=o("rhmX"),h="Invalid `variable` option passed into `_.template`",v=/\b__p \+= '';/g,b=/\b(__p \+=) '' \+/g,g=/(__e\(.*?\)|\b__t\)) \+\n'';/g,m=/[()=,{}\[\]\/\s]/,j=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,_=/($^)/,w=/['\n\r\u2028\u2029\\]/g,k=Object.prototype.hasOwnProperty;t.exports=function(t,e,o){var x=p.imports._.templateSettings||p;o&&d(t,e,o)&&(e=void 0),t=f(t),e=n({},e,x,s);var S,y,L=n({},e.imports,x.imports,s),O=l(L),A=i(L,O),E=0,R=e.interpolate||_,T="__p += '",q=RegExp((e.escape||_).source+"|"+R.source+"|"+(R===u?j:_).source+"|"+(e.evaluate||_).source+"|$","g"),F=k.call(e,"sourceURL")?"//# sourceURL="+(e.sourceURL+"").replace(/\s/g," ")+"\n":"";t.replace(q,(function(e,o,n,r,i,s){return n||(n=r),T+=t.slice(E,s).replace(w,a),o&&(S=!0,T+="' +\n__e("+o+") +\n'"),i&&(y=!0,T+="';\n"+i+";\n__p += '"),n&&(T+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'"),E=s+e.length,e})),T+="';\n";var P=k.call(e,"variable")&&e.variable;if(P){if(m.test(P))throw new Error(h)}else T="with (obj) {\n"+T+"\n}\n";T=(y?T.replace(v,""):T).replace(b,"$1").replace(g,"$1;"),T="function("+(P||"obj")+") {\n"+(P?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(S?", __e = _.escape":"")+(y?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+T+"return __p\n}";var D=r((function(){return Function(O,F+"return "+T).apply(void 0,A)}));if(D.source=T,c(D))throw D;return D}},46:function(t,e,o){o("HVBj"),t.exports=o("RjzT")},"7Zqv":function(t,e){var o={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"};t.exports=function(t){return"\\"+o[t]}},"8FVE":function(t,e,o){var n=o("xJuT"),r=o("eiA/"),i=o("UwPs"),s=r((function(t,e,o,r){n(e,i(e),t,r)}));t.exports=s},"9RX+":function(t,e){t.exports=function(t){return t!=t}},GY8p:function(t,e){t.exports=function(t,e,o){for(var n=-1,r=null==t?0:t.length;++n<r;)if(o(e,t[n]))return!0;return!1}},KZGt:function(t,e){t.exports=function(){}},Ksks:function(t,e){t.exports=/<%=([\s\S]+?)%>/g},M1vi:function(t,e,o){var n=o("XpzN"),r=o("QA6A"),i=o("8Ei6"),s="[object DOMException]",a="[object Error]";t.exports=function(t){if(!r(t))return!1;var e=n(t);return e==a||e==s||"string"==typeof t.message&&"string"==typeof t.name&&!i(t)}},P9pc:function(t,e){t.exports=function(t,e,o){for(var n=o-1,r=t.length;++n<r;)if(t[n]===e)return n;return-1}},QPL1:function(t,e,o){var n=o("pFYY"),r=o("KZGt"),i=o("1XSk"),s=n&&1/i(new n([,-0]))[1]==1/0?function(t){return new n(t)}:r;t.exports=s},QPeP:function(t,e,o){var n=o("q+Dt");t.exports=function(t,e){return!!(null==t?0:t.length)&&n(t,e,0)>-1}},RjzT:function(t,e,o){"use strict";o.r(e);var n=o("EmJ/"),r=o.n(n),i=o("kHc+"),s=o("kk/e"),a=o("m/7A"),c=o("XRO8"),d=o("2ibD"),l=o("NmEs"),u=o("0AwG"),p=o("3twG"),f=o("/lV4"),h=o("yYhH");new class{constructor(){this.initFilters(),this.bindEvents(),this.todo_ids=[],this.cleanupWrapper=this.cleanup.bind(this),document.addEventListener("beforeunload",this.cleanupWrapper)}cleanup(){this.unbindEvents(),document.removeEventListener("beforeunload",this.cleanupWrapper)}unbindEvents(){r()(".js-done-todo, .js-undo-todo, .js-add-todo").off("click",this.updateRowStateClickedWrapper),r()(".js-todos-mark-all",".js-todos-undo-all").off("click",this.updateallStateClickedWrapper),r()(".todo").off("click",this.goToTodoUrl)}bindEvents(){this.updateRowStateClickedWrapper=this.updateRowStateClicked.bind(this),this.updateAllStateClickedWrapper=this.updateAllStateClicked.bind(this),r()(".js-done-todo, .js-undo-todo, .js-add-todo").on("click",this.updateRowStateClickedWrapper),r()(".js-todos-mark-all, .js-todos-undo-all").on("click",this.updateAllStateClickedWrapper),r()(".todo").on("click",this.goToTodoUrl)}initFilters(){return this.initAjaxFilterDropdown(i.a,r()(".js-group-search"),"group_id"),this.initAjaxFilterDropdown(s.a,r()(".js-project-search"),"project_id"),this.initFilterDropdown(r()(".js-type-search"),"type"),this.initFilterDropdown(r()(".js-action-search"),"action_id"),new h.default}initAjaxFilterDropdown(t,e,o){Object(a.a)(e,{fieldName:o,selectable:!0,filterable:!0,filterRemote:!0,data:(e,o)=>t(e,{},(function(t){o(t.map((function(t){return{id:t.id,text:t.full_name||t.name_with_namespace}})))})),clicked:function(){e.closest("form.filter-form").submit()}})}initFilterDropdown(t,e,o){Object(a.a)(t,{fieldName:e,selectable:!0,filterable:!!o,search:{fields:o},data:t.data("data"),clicked:function(){t.closest("form.filter-form").submit()}})}updateRowStateClicked(t){var e=this;t.stopPropagation(),t.preventDefault();const{target:o}=t;o.setAttribute("disabled",!0),o.classList.add("disabled"),d.a[o.dataset.method](o.dataset.href).then((function(t){let{data:n}=t;e.updateRowState(o),e.updateBadges(n)})).catch((function(){return e.updateRowState(o,!0),Object(c.c)(Object(f.a)("Error updating status of to-do item."))}))}updateRowState(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const o=t.closest("li"),n=o.querySelector(".js-undo-todo"),r=o.querySelector(".js-done-todo");t.classList.add("hidden"),t.removeAttribute("disabled"),t.classList.remove("disabled"),!0===e?(n.classList.add("hidden"),r.classList.remove("hidden")):t===r?(o.classList.add("done-reversible"),n.classList.remove("hidden")):t===n?(o.classList.remove("done-reversible"),r.classList.remove("hidden")):o.parentNode.removeChild(o)}updateAllStateClicked(t){var e=this;t.stopPropagation(),t.preventDefault();const o=t.currentTarget;o.setAttribute("disabled",!0),o.classList.add("disabled"),d.a[o.dataset.method](o.dataset.href,{ids:this.todo_ids}).then((function(t){let{data:n}=t;e.updateAllState(o,n),e.updateBadges(n)})).catch((function(){return Object(c.c)(Object(f.a)("Error updating status for all to-do items."))}))}updateAllState(t,e){const o=document.querySelector(".js-todos-mark-all"),n=document.querySelector(".js-todos-undo-all"),r=document.querySelector(".js-todos-list-container"),i=document.querySelector(".js-nothing-here-container");t.removeAttribute("disabled"),t.classList.remove("disabled"),this.todo_ids=t===o?e.updated_ids:[],n.classList.toggle("hidden"),o.classList.toggle("hidden"),r.classList.toggle("hidden"),i.classList.toggle("hidden")}updateBadges(t){r()(document).trigger("todo:toggle",t.count),document.querySelector(".todos-pending .badge").innerHTML=Object(u.a)(t.count),document.querySelector(".todos-done .badge").innerHTML=Object(u.a)(t.done_count)}goToTodoUrl(t){const e=this.dataset.url;if(e&&!t.target.closest("a"))if(t.stopPropagation(),t.preventDefault(),Object(l.F)(t)){const t="_blank";window.open(e,t)}else Object(p.D)(e)}}},WlOc:function(t,e,o){var n=o("G3fq"),r={escape:o("ecp+"),evaluate:o("cKyt"),interpolate:o("Ksks"),variable:"",imports:{_:{escape:n}}};t.exports=r},aTSC:function(t,e,o){var n=o("hmyg"),r=Object.prototype,i=r.hasOwnProperty;t.exports=function(t,e,o,s){return void 0===t||n(t,r[o])&&!i.call(s,o)?e:t}},cKyt:function(t,e){t.exports=/<%([\s\S]+?)%>/g},"dA+0":function(t,e,o){var n=o("4O6w"),r=o("QPeP"),i=o("GY8p"),s=o("5PFN"),a=o("QPL1"),c=o("1XSk"),d=200;t.exports=function(t,e,o){var l=-1,u=r,p=t.length,f=!0,h=[],v=h;if(o)f=!1,u=i;else if(p>=d){var b=e?null:a(t);if(b)return c(b);f=!1,u=s,v=new n}else v=e?[]:h;t:for(;++l<p;){var g=t[l],m=e?e(g):g;if(g=o||0!==g?g:0,f&&m==m){for(var j=v.length;j--;)if(v[j]===m)continue t;e&&v.push(m),h.push(g)}else u(v,m,o)||(v!==h&&v.push(m),h.push(g))}return h}},"ecp+":function(t,e){t.exports=/<%-([\s\S]+?)%>/g},"eiA/":function(t,e,o){var n=o("Opi0"),r=o("etTJ");t.exports=function(t){return n((function(e,o){var n=-1,i=o.length,s=i>1?o[i-1]:void 0,a=i>2?o[2]:void 0;for(s=t.length>3&&"function"==typeof s?(i--,s):void 0,a&&r(o[0],o[1],a)&&(s=i<3?void 0:s,i=1),e=Object(e);++n<i;){var c=o[n];c&&t(e,c,n,s)}return e}))}},"q+Dt":function(t,e,o){var n=o("sjqF"),r=o("9RX+"),i=o("P9pc");t.exports=function(t,e,o){return e==e?i(t,e,o):n(t,r,o)}},sjqF:function(t,e){t.exports=function(t,e,o,n){for(var r=t.length,i=o+(n?1:-1);n?i--:++i<r;)if(e(t[i],i,t))return i;return-1}},xJuT:function(t,e,o){var n=o("1/+g"),r=o("vkS7");t.exports=function(t,e,o,i){var s=!o;o||(o={});for(var a=-1,c=e.length;++a<c;){var d=e[a],l=i?i(o[d],t[d],d,o,t):void 0;void 0===l&&(l=t[d]),s?r(o,d,l):n(o,d,l)}return o}},zxUd:function(t,e,o){var n=o("PIq0"),r=o("Opi0"),i=o("M1vi"),s=r((function(t,e){try{return n(t,void 0,e)}catch(t){return i(t)?t:new Error(t)}}));t.exports=s}},[[46,1,0,3,18]]]);
//# sourceMappingURL=pages.dashboard.todos.index.df964f5d.chunk.js.map