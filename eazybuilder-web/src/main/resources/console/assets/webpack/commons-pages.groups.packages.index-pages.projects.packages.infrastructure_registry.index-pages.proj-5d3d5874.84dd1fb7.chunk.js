(this.webpackJsonp=this.webpackJsonp||[]).push([[72],{A5dm:function(t,e,a){"use strict";var i=a("iQdY"),n=a("Pyw5"),s=a.n(n);const r={props:{text:{type:String,required:!0},position:{type:String,required:!1,default:i.a.END,validator:function(t){return Object.values(i.a).includes(t)}}},data:function(){return{POSITION:i.a}},computed:{middleIndex:function(){return Math.floor(this.text.length/2)},first:function(){return this.text.slice(0,this.middleIndex)},last:function(){return this.text.slice(this.middleIndex)}}};const l=s()({render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.position===t.POSITION.START?a("span",{staticClass:"gl-truncate",attrs:{title:t.text}},[a("span",{staticClass:"gl-truncate-start gl-text-overflow-ellipsis!"},[t._v("‎"+t._s(t.text)+"‎")])]):t.position===t.POSITION.MIDDLE?a("span",{staticClass:"gl-truncate",attrs:{title:t.text}},[a("span",{staticClass:"gl-truncate-end"},[t._v(t._s(t.first))]),a("span",{staticClass:"gl-truncate-start"},[t._v("‎"+t._s(t.last)+"‎")])]):a("span",{staticClass:"gl-truncate",attrs:{title:t.text}},[a("span",{staticClass:"gl-truncate-end"},[t._v(t._s(t.text))])])},staticRenderFns:[]},void 0,r,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=l},GCSh:function(t,e,a){"use strict";a("jaBk");var i=a("4lAS"),n=a("MV2A"),s=a("30su"),r=a("A5dm"),l=a("LLbv"),o=a("/lV4"),c=a("Igzg"),d=a("5QKO"),g=a("azG2"),p=a("rk9O"),u=(a("pBsb"),a("s1D3")),h=a("3twG"),m={name:"PackagePath",components:{GlIcon:u.a,GlLink:n.a},directives:{GlTooltip:l.a},props:{path:{type:String,required:!0},disabled:{type:Boolean,required:!1,default:!1}},computed:{pathPieces(){return this.path.split("/")},root(){return this.pathPieces[1]},rootLink(){return Object(h.p)(this.pathPieces[0],this.root)},leaf(){return this.pathPieces[this.pathPieces.length-1]},deeplyNested(){return this.pathPieces.length>3},hasGroup(){return this.root!==this.leaf}}},y=a("tBpV"),f=Object(y.a)(m,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gl-display-flex gl-align-items-center",attrs:{"data-qa-selector":"package-path"}},[a("gl-icon",{staticClass:"gl-mx-3 gl-min-w-0",attrs:{"data-testid":"base-icon",name:"project"}}),t._v(" "),a("gl-link",{staticClass:"gl-text-gray-500 gl-min-w-0",attrs:{"data-testid":"root-link",href:"/"+t.rootLink,disabled:t.disabled}},[t._v("\n    "+t._s(t.root)+"\n  ")]),t._v(" "),t.hasGroup?[a("gl-icon",{staticClass:"gl-mx-2 gl-min-w-0",attrs:{"data-testid":"root-chevron",name:"chevron-right"}}),t._v(" "),t.deeplyNested?[a("span",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip",value:{title:t.path},expression:"{ title: path }"}],staticClass:"gl-inset-border-1-gray-200 gl-rounded-base gl-px-2 gl-min-w-0",attrs:{"data-testid":"ellipsis-icon"}},[a("gl-icon",{attrs:{name:"ellipsis_h"}})],1),t._v(" "),a("gl-icon",{staticClass:"gl-mx-2 gl-min-w-0",attrs:{"data-testid":"ellipsis-chevron",name:"chevron-right"}})]:t._e(),t._v(" "),a("gl-link",{staticClass:"gl-text-gray-500 gl-min-w-0",attrs:{"data-testid":"leaf-link",href:"/"+t.path,disabled:t.disabled}},[t._v("\n      "+t._s(t.leaf)+"\n    ")])]:t._e()],2)}),[],!1,null,null,null).exports,v=a("JQA7"),_={name:"PublishMethod",components:{ClipboardButton:a("rK/1").a,GlIcon:u.a,GlLink:n.a},props:{packageEntity:{type:Object,required:!0},isGroup:{type:Boolean,required:!1,default:!1}},computed:{hasPipeline(){return Boolean(this.packageEntity.pipeline)},packageShaShort(){var t;return null===(t=this.packageEntity.pipeline)||void 0===t?void 0:t.sha.substring(0,8)},linkToCommit(){return Object(p.b)(this.packageEntity,this.isGroup)}}},b=Object(y.a)(_,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gl-display-flex gl-align-items-center"},[t.hasPipeline?[a("gl-icon",{staticClass:"gl-mr-2",attrs:{name:"git-merge"}}),t._v(" "),a("span",{staticClass:"gl-mr-2",attrs:{"data-testid":"pipeline-ref"}},[t._v(t._s(t.packageEntity.pipeline.ref))]),t._v(" "),a("gl-icon",{staticClass:"gl-mr-2",attrs:{name:"commit"}}),t._v(" "),a("gl-link",{staticClass:"gl-mr-2",attrs:{"data-testid":"pipeline-sha",href:t.linkToCommit}},[t._v(t._s(t.packageShaShort))]),t._v(" "),a("clipboard-button",{attrs:{text:t.packageEntity.pipeline.sha,title:t.__("Copy commit SHA"),category:"tertiary",size:"small"}})]:[a("gl-icon",{staticClass:"gl-mr-2",attrs:{name:"upload"}}),t._v(" "),a("span",{attrs:{"data-testid":"manually-published"}},[t._v("\n      "+t._s(t.s__("PackageRegistry|Manually Published"))+"\n    ")])]],2)}),[],!1,null,null,null).exports,k={name:"PackageListRow",components:{GlButton:i.a,GlLink:n.a,GlSprintf:s.a,GlTruncate:r.a,PackageTags:v.a,PackagePath:f,PublishMethod:b,ListItem:c.a,PackageIconAndName:function(){return Promise.all([a.e(78),a.e(134),a.e(170)]).then(a.bind(null,"0gqD"))},InfrastructureIconAndName:function(){return Promise.all([a.e(78),a.e(134),a.e(161)]).then(a.bind(null,"p7hp"))}},directives:{GlTooltip:l.a},mixins:[d.a],inject:{iconComponent:{from:"iconComponent",default:"PackageIconAndName"}},props:{packageEntity:{type:Object,required:!0},packageLink:{type:String,required:!0},disableDelete:{type:Boolean,default:!1,required:!1},isGroup:{type:Boolean,default:!1,required:!1},showPackageType:{type:Boolean,default:!0,required:!1}},computed:{packageType(){return Object(p.c)(this.packageEntity.package_type)},hasPipeline(){return Boolean(this.packageEntity.pipeline)},hasProjectLink(){return Boolean(this.packageEntity.project_path)},showWarningIcon(){return this.packageEntity.status===g.c},disabledRow(){return this.packageEntity.status&&this.packageEntity.status!==g.b},disabledDeleteButton(){return this.disabledRow||!this.packageEntity._links.delete_api_path}},i18n:{erroredPackageText:Object(o.e)("PackageRegistry|Invalid Package: failed metadata extraction")}},x=Object(y.a)(k,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("list-item",{attrs:{"data-qa-selector":"package_row",disabled:t.disabledRow},scopedSlots:t._u([{key:"left-primary",fn:function(){return[a("div",{staticClass:"gl-display-flex gl-align-items-center gl-mr-3 gl-min-w-0"},[a("gl-link",{staticClass:"gl-text-body gl-min-w-0",attrs:{href:t.packageLink,"data-qa-selector":"package_link",disabled:t.disabledRow}},[a("gl-truncate",{attrs:{text:t.packageEntity.name}})],1),t._v(" "),t.showWarningIcon?a("gl-button",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip",value:{title:t.$options.i18n.erroredPackageText},expression:"{ title: $options.i18n.erroredPackageText }"}],staticClass:"gl-hover-bg-transparent!",attrs:{icon:"warning",category:"tertiary","data-testid":"warning-icon","aria-label":t.__("Warning")}}):t._e(),t._v(" "),t.packageEntity.tags&&t.packageEntity.tags.length?a("package-tags",{staticClass:"gl-ml-3",attrs:{tags:t.packageEntity.tags,"hide-label":"","tag-display-limit":1}}):t._e()],1)]},proxy:!0},{key:"left-secondary",fn:function(){return[a("div",{staticClass:"gl-display-flex"},[a("span",[t._v(t._s(t.packageEntity.version))]),t._v(" "),t.hasPipeline?a("div",{staticClass:"gl-display-none gl-sm-display-flex gl-ml-2"},[a("gl-sprintf",{attrs:{message:t.s__("PackageRegistry|published by %{author}")},scopedSlots:t._u([{key:"author",fn:function(){return[t._v(t._s(t.packageEntity.pipeline.user.name))]},proxy:!0}],null,!1,166229790)})],1):t._e(),t._v(" "),t.showPackageType?a(t.iconComponent,{tag:"component"},[t._v("\n        "+t._s(t.packageType)+"\n      ")]):t._e(),t._v(" "),t.hasProjectLink?a("package-path",{attrs:{path:t.packageEntity.project_path,disabled:t.disabledRow}}):t._e()],1)]},proxy:!0},{key:"right-primary",fn:function(){return[a("publish-method",{attrs:{"package-entity":t.packageEntity,"is-group":t.isGroup}})]},proxy:!0},{key:"right-secondary",fn:function(){return[a("span",[a("gl-sprintf",{attrs:{message:t.__("Created %{timestamp}")},scopedSlots:t._u([{key:"timestamp",fn:function(){return[a("span",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip"}],attrs:{title:t.tooltipTitle(t.packageEntity.created_at)}},[t._v("\n            "+t._s(t.timeFormatted(t.packageEntity.created_at))+"\n          ")])]},proxy:!0}])})],1)]},proxy:!0},t.disableDelete?null:{key:"right-action",fn:function(){return[a("gl-button",{attrs:{"data-testid":"action-delete",icon:"remove",category:"secondary",variant:"danger",title:t.s__("PackageRegistry|Remove package"),"aria-label":t.s__("PackageRegistry|Remove package"),disabled:t.disabledDeleteButton},on:{click:function(e){return t.$emit("packageToDelete",t.packageEntity)}}})]},proxy:!0}],null,!0)})}),[],!1,null,null,null);e.a=x.exports},JQA7:function(t,e,a){"use strict";var i=a("Lzak"),n=a("s1D3"),s=a("30su"),r=a("LLbv"),l=a("/lV4"),o={name:"PackageTags",components:{GlBadge:i.a,GlIcon:n.a,GlSprintf:s.a},directives:{GlTooltip:r.a},props:{tagDisplayLimit:{type:Number,required:!1,default:2},tags:{type:Array,required:!0,default:function(){return[]}},hideLabel:{type:Boolean,required:!1,default:!1}},computed:{tagCount(){return this.tags.length},tagsToRender(){return this.tags.slice(0,this.tagDisplayLimit)},moreTagsDisplay(){return Math.max(0,this.tags.length-this.tagDisplayLimit)},moreTagsTooltip(){return this.moreTagsDisplay?this.tags.slice(this.tagDisplayLimit).map((function(t){return t.name})).join(", "):""},tagsDisplay(){return Object(l.d)("%d tag","%d tags",this.tagCount)}},methods:{tagBadgeClass(t){return{"gl-display-none":!0,"gl-display-flex":1===this.tagCount,"d-md-flex":this.tagCount>1,"gl-mr-2":t!==this.tagsToRender.length-1,"gl-ml-3":!this.hideLabel&&0===t}}}},c=a("tBpV"),d=Object(c.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gl-display-flex gl-align-items-center"},[t.hideLabel?t._e():a("div",{staticClass:"gl-display-flex gl-align-items-center",attrs:{"data-testid":"tagLabel"}},[a("gl-icon",{staticClass:"gl-text-gray-500 gl-mr-3",attrs:{name:"labels"}}),t._v(" "),a("span",{staticClass:"gl-font-weight-bold"},[t._v(t._s(t.tagsDisplay))])],1),t._v(" "),t._l(t.tagsToRender,(function(e,i){return a("gl-badge",{key:i,class:t.tagBadgeClass(i),attrs:{"data-testid":"tagBadge",variant:"info",size:"sm"}},[t._v(t._s(e.name))])})),t._v(" "),t.moreTagsDisplay?a("gl-badge",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip"}],staticClass:"gl-display-none gl-md-display-flex gl-ml-2",attrs:{"data-testid":"moreBadge",variant:"muted",title:t.moreTagsTooltip,size:"sm"}},[a("gl-sprintf",{attrs:{message:t.__("+%{tags} more")},scopedSlots:t._u([{key:"tags",fn:function(){return[t._v("\n        "+t._s(t.moreTagsDisplay)+"\n      ")]},proxy:!0}],null,!1,1778193567)})],1):t._e(),t._v(" "),t.moreTagsDisplay&&t.hideLabel?a("gl-badge",{staticClass:"gl-md-display-none gl-ml-2",attrs:{"data-testid":"moreBadge",variant:"muted"}},[t._v(t._s(t.tagsDisplay))]):t._e()],2)}),[],!1,null,null,null);e.a=d.exports},Lzak:function(t,e,a){"use strict";var i=a("0zRR"),n=a("/Szx"),s=a("lgrP"),r=a("t8l0"),l=a("7bmO"),o=a("ua/H"),c=a("U9NU"),d=a("1m+M");function g(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function p(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var u=Object(l.k)(d.b,["event","routerTag"]);delete u.href.default,delete u.to.default;var h=function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?g(Object(a),!0).forEach((function(e){p(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({tag:{type:String,default:"span"},variant:{type:String,default:function(){return Object(r.b)(i.c,"variant")}},pill:{type:Boolean,default:!1}},u),m=n.a.extend({name:i.c,functional:!0,props:h,render:function(t,e){var a=e.props,i=e.data,n=e.children,r=Object(c.d)(a),l=r?d.a:a.tag,g={staticClass:"badge",class:[a.variant?"badge-".concat(a.variant):"badge-secondary",{"badge-pill":a.pill,active:a.active,disabled:a.disabled}],props:r?Object(o.a)(u,a):{}};return t(l,Object(s.a)(i,g),n)}}),y=a("XBTk"),f=a("s1D3"),v=a("Pyw5"),_=a.n(v);const b={components:{BBadge:m,GlIcon:f.a},inheritAttrs:!1,props:{size:{type:String,default:y.h.md,validator:function(t){return void 0!==y.h[t]},required:!1},variant:{type:String,default:y.i.muted,validator:function(t){return void 0!==y.i[t]},required:!1},icon:{type:String,required:!1,default:null}},computed:{hasIconOnly:function(){return Boolean(this.icon&&0===Object.keys(this.$slots).length)},role:function(){return this.hasIconOnly?"img":void 0}}};const k=_()({render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-badge",t._b({class:["gl-badge",t.size],attrs:{variant:t.variant,role:t.role,pill:""}},"b-badge",t.$attrs,!1),[t.icon?a("gl-icon",{staticClass:"gl-badge-icon",class:{"gl-mr-2":!t.hasIconOnly},attrs:{name:t.icon}}):t._e(),t._v(" "),t._t("default")],2)},staticRenderFns:[]},void 0,b,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=k},QWDc:function(t,e,a){"use strict";var i={components:{GlSkeletonLoader:a("4+8U").a},shapes:[{type:"rect",width:"220",height:"10",x:"0",y:"20"},{type:"rect",width:"60",height:"10",x:"305",y:"20"},{type:"rect",width:"60",height:"10",x:"535",y:"20"},{type:"rect",width:"100",height:"10",x:"760",y:"20"},{type:"rect",width:"30",height:"30",x:"970",y:"10",ref:"button-loader"}],rowsToRender:{mobile:5,desktop:20}},n=a("tBpV"),s=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"gl-flex-direction-column gl-sm-display-none",attrs:{"data-testid":"mobile-loader"}},t._l(t.$options.rowsToRender.mobile,(function(e){return a("gl-skeleton-loader",{key:e,attrs:{width:500,height:170,"preserve-aspect-ratio":"xMinYMax meet"}},[a("rect",{attrs:{width:"500",height:"10",x:"0",y:"15",rx:"4"}}),t._v(" "),a("rect",{attrs:{width:"500",height:"10",x:"0",y:"45",rx:"4"}}),t._v(" "),a("rect",{attrs:{width:"500",height:"10",x:"0",y:"75",rx:"4"}}),t._v(" "),a("rect",{attrs:{width:"500",height:"10",x:"0",y:"105",rx:"4"}}),t._v(" "),a("rect",{attrs:{width:"500",height:"10",x:"0",y:"135",rx:"4"}})])})),1),t._v(" "),a("div",{staticClass:"gl-display-none gl-sm-display-flex gl-flex-direction-column",attrs:{"data-testid":"desktop-loader"}},t._l(t.$options.rowsToRender.desktop,(function(e){return a("gl-skeleton-loader",{key:e,attrs:{width:1e3,height:54,"preserve-aspect-ratio":"xMinYMax meet"}},t._l(t.$options.shapes,(function(e,i){return a(e.type,t._b({key:i,tag:"component",attrs:{rx:"4"}},"component",e,!1))})),1)})),1)])}),[],!1,null,null,null);e.a=s.exports},azG2:function(t,e,a){"use strict";a.d(e,"d",(function(){return n})),a.d(e,"f",(function(){return s})),a.d(e,"g",(function(){return r})),a.d(e,"e",(function(){return l})),a.d(e,"a",(function(){return o})),a.d(e,"c",(function(){return c})),a.d(e,"b",(function(){return d}));var i=a("/lV4");const n={CONAN:"conan",MAVEN:"maven",NPM:"npm",NUGET:"nuget",PYPI:"pypi",COMPOSER:"composer",RUBYGEMS:"rubygems",GENERIC:"generic"},s={DELETE_PACKAGE:"delete_package",REQUEST_DELETE_PACKAGE:"request_delete_package",CANCEL_DELETE_PACKAGE:"cancel_delete_package",PULL_PACKAGE:"pull_package"},r={[n.MAVEN]:"MavenPackages",[n.NPM]:"NpmPackages",[n.CONAN]:"ConanPackages"},l="showSuccessDeleteAlert",o=Object(i.a)("Something went wrong while deleting the package."),c="error",d="default"},rk9O:function(t,e,a){"use strict";a.d(e,"d",(function(){return s})),a.d(e,"a",(function(){return r})),a.d(e,"c",(function(){return l})),a.d(e,"b",(function(){return o}));a("pBsb");var i=a("/lV4"),n=a("azG2");const s=function(t){return"UI::".concat(n.g[t])},r=function(t){return t?t.split("/").join(" / "):""},l=function(t){switch(t){case n.d.CONAN:return Object(i.e)("PackageRegistry|Conan");case n.d.MAVEN:return Object(i.e)("PackageRegistry|Maven");case n.d.NPM:return Object(i.e)("PackageRegistry|npm");case n.d.NUGET:return Object(i.e)("PackageRegistry|NuGet");case n.d.PYPI:return Object(i.e)("PackageRegistry|PyPI");case n.d.RUBYGEMS:return Object(i.e)("PackageRegistry|RubyGems");case n.d.COMPOSER:return Object(i.e)("PackageRegistry|Composer");case n.d.GENERIC:return Object(i.e)("PackageRegistry|Generic");default:return null}},o=function(t){let{project_path:e,pipeline:a={}}=t,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return i?"/".concat(e,"/commit/").concat(a.sha):"../commit/".concat(a.sha)}}}]);
//# sourceMappingURL=commons-pages.groups.packages.index-pages.projects.packages.infrastructure_registry.index-pages.proj-5d3d5874.84dd1fb7.chunk.js.map