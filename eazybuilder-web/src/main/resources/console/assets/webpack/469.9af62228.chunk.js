(this.webpackJsonp=this.webpackJsonp||[]).push([[469],{"7uFw":function(e,t,n){"use strict";n.r(t);n("jaBk"),n("KcQl");var o=n("XRO8"),i=n("3twG"),s=n("/lV4"),a=n("sHIo"),r=n("dxmq"),l=n("4lAS"),p=n("LLbv"),c={name:"DeploymentActionButton",components:{GlButton:l.a},directives:{GlTooltip:p.a},props:{actionsConfiguration:{type:Object,required:!0},actionInProgress:{type:String,required:!1,default:null},buttonTitle:{type:String,required:!1,default:""},computedDeploymentStatus:{type:String,required:!0},containerClasses:{type:String,required:!1,default:""},icon:{type:String,required:!0}},computed:{isActionInProgress(){return Boolean("running"===this.computedDeploymentStatus||this.actionInProgress)},actionInProgressTooltip(){switch(this.actionInProgress){case this.actionsConfiguration.actionName:return this.actionsConfiguration.busyText;case null:return"";default:return Object(s.a)("Another action is currently in progress")}},isLoading(){return this.actionInProgress===this.actionsConfiguration.actionName}}},u=n("tBpV"),d=Object(u.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip"}],staticClass:"gl-display-inline-block",attrs:{title:e.actionInProgressTooltip,tabindex:"0"}},[n("gl-button",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip"}],class:"inline gl-ml-2 "+e.containerClasses,attrs:{category:"primary",size:"small",title:e.buttonTitle,"aria-label":e.buttonTitle,loading:e.isLoading,disabled:e.isActionInProgress,icon:e.icon},on:{click:function(t){return e.$emit("click")}}},[e._t("default")],2)],1)}),[],!1,null,null,null).exports,m=(n("QifN"),n("1fc5")),y=n("Yyc1"),h=n("wP8z"),g=n("s1D3"),v=n("MV2A"),f=n("iN9h"),b=n("aKbY"),_={components:{GlButton:l.a,GlIcon:g.a},directives:{GlTooltip:p.a},props:{cssClass:{type:String,required:!0},display:{type:Object,required:!0},link:{type:String,required:!0},size:{type:String,required:!1,default:"medium"}}},w=Object(u.a)(_,(function(){var e=this.$createElement,t=this._self._c||e;return t("gl-button",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip"}],class:this.cssClass,attrs:{title:this.display.tooltip,href:this.link,size:this.size,target:"_blank",rel:"noopener noreferrer nofollow","data-track-event":"open_review_app","data-track-label":"review_app"}},[this._v("\n  "+this._s(this.display.text)+" "),t("gl-icon",{staticClass:"fgray",attrs:{name:"external-link"}})],1)}),[],!1,null,null,null).exports,M={name:"DeploymentViewButton",components:{GlButtonGroup:m.a,GlDropdown:y.a,GlDropdownItem:h.a,GlIcon:g.a,GlLink:v.a,GlSearchBoxByType:f.a,ReviewAppLink:w,VisualReviewAppLink:function(){return n.e(8).then(n.bind(null,"4b03"))}},directives:{autofocusonshow:b.a},props:{appButtonText:{type:Object,required:!0},deployment:{type:Object,required:!0},showVisualReviewApp:{type:Boolean,required:!1,default:!1},visualReviewAppMeta:{type:Object,required:!1,default:function(){return{sourceProjectId:"",sourceProjectPath:"",mergeRequestId:"",appUrl:""}}}},data:()=>({searchTerm:""}),computed:{deploymentExternalUrl(){return this.deployment.changes&&1===this.deployment.changes.length?this.deployment.changes[0].external_url:this.deployment.external_url},shouldRenderDropdown(){return this.deployment.changes&&this.deployment.changes.length>1},filteredChanges(){var e,t,n=this;return null===(e=this.deployment)||void 0===e?void 0:null===(t=e.changes)||void 0===t?void 0:t.filter((function(e){return e.path.includes(n.searchTerm)}))}}},O={name:"DeploymentActions",btnIcons:{play:"play",repeat:"repeat",stop:"stop"},components:{DeploymentActionButton:d,DeploymentViewButton:Object(u.a)(M,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e.shouldRenderDropdown?n("gl-button-group",{attrs:{size:"small"}},[n("review-app-link",{attrs:{display:e.appButtonText,link:e.deploymentExternalUrl,size:"small","css-class":"deploy-link js-deploy-url inline"}}),e._v(" "),n("gl-dropdown",{staticClass:"js-mr-wigdet-deployment-dropdown",attrs:{"toggle-class":"gl-px-2!",size:"small"},scopedSlots:e._u([{key:"button-content",fn:function(){return[n("gl-icon",{staticClass:"dropdown-chevron gl-mx-0!",attrs:{name:"chevron-down","data-testid":"mr-wigdet-deployment-dropdown-icon"}})]},proxy:!0}],null,!1,129342416)},[e._v(" "),n("gl-search-box-by-type",{directives:[{name:"autofocusonshow",rawName:"v-autofocusonshow"}],attrs:{autofocus:""},model:{value:e.searchTerm,callback:function(t){e.searchTerm="string"==typeof t?t.trim():t},expression:"searchTerm"}}),e._v(" "),e._l(e.filteredChanges,(function(t){return n("gl-dropdown-item",{key:t.path,staticClass:"js-filtered-dropdown-result"},[n("gl-link",{staticClass:"js-deploy-url-menu-item menu-item",attrs:{href:t.external_url,target:"_blank",rel:"noopener noreferrer nofollow"}},[n("strong",{staticClass:"str-truncated-100 gl-mb-0 gl-display-block"},[e._v(e._s(t.path))]),e._v(" "),n("p",{staticClass:"text-secondary str-truncated-100 gl-mb-0 d-block"},[e._v("\n            "+e._s(t.external_url)+"\n          ")])])],1)}))],2)],1):n("review-app-link",{attrs:{display:e.appButtonText,link:e.deploymentExternalUrl,size:"small","css-class":"js-deploy-url deploy-link btn btn-default btn-sm inline"}}),e._v(" "),e.showVisualReviewApp?n("visual-review-app-link",{attrs:{"view-app-display":e.appButtonText,link:e.deploymentExternalUrl,"app-metadata":e.visualReviewAppMeta,changes:e.deployment.changes}}):e._e()],1)}),[],!1,null,null,null).exports},mixins:[Object(a.a)()],props:{computedDeploymentStatus:{type:String,required:!0},deployment:{type:Object,required:!0},showVisualReviewApp:{type:Boolean,required:!1,default:!1},visualReviewAppMeta:{type:Object,required:!1,default:function(){return{sourceProjectId:"",sourceProjectPath:"",mergeRequestId:"",appUrl:""}}}},data:()=>({actionInProgress:null,constants:{STOPPING:"stopping",DEPLOYING:"deploying",REDEPLOYING:"redeploying"}}),computed:{appButtonText(){return{text:this.isCurrent?Object(s.e)("Review App|View app"):Object(s.e)("Review App|View latest app"),tooltip:this.isCurrent?"":Object(s.a)("View the latest successful deployment to this environment")}},canBeManuallyDeployed(){return"manual_deploy"===this.computedDeploymentStatus&&Boolean(this.playPath)},canBeManuallyRedeployed(){return"failed"===this.computedDeploymentStatus&&Boolean(this.redeployPath)},hasExternalUrls(){return Boolean(this.deployment.external_url&&this.deployment.external_url_formatted)},isCurrent(){return"success"===this.computedDeploymentStatus},playPath(){var e,t;return null===(e=this.deployment.details)||void 0===e?void 0:null===(t=e.playable_build)||void 0===t?void 0:t.play_path},redeployPath(){var e,t;return null===(e=this.deployment.details)||void 0===e?void 0:null===(t=e.playable_build)||void 0===t?void 0:t.retry_path},stopUrl(){return this.deployment.stop_url}},actionsConfiguration:{stopping:{actionName:"stopping",buttonText:Object(s.e)("MrDeploymentActions|Stop environment"),busyText:Object(s.a)("This environment is being deployed"),confirmMessage:Object(s.a)("Are you sure you want to stop this environment?"),errorMessage:Object(s.a)("Something went wrong while stopping this environment. Please try again.")},deploying:{actionName:"deploying",buttonText:Object(s.e)("MrDeploymentActions|Deploy"),busyText:Object(s.a)("This environment is being deployed"),confirmMessage:Object(s.a)("Are you sure you want to deploy this environment?"),errorMessage:Object(s.a)("Something went wrong while deploying this environment. Please try again.")},redeploying:{actionName:"redeploying",buttonText:Object(s.e)("MrDeploymentActions|Re-deploy"),busyText:Object(s.a)("This environment is being re-deployed"),confirmMessage:Object(s.a)("Are you sure you want to re-deploy this environment?"),errorMessage:Object(s.a)("Something went wrong while deploying this environment. Please try again.")}},methods:{executeAction(e,t){var n=this;let{actionName:s,confirmMessage:a,errorMessage:l}=t;confirm(a)&&(this.actionInProgress=s,r.a.executeInlineAction(e).then((function(e){var t;const n=null==e?void 0:null===(t=e.data)||void 0===t?void 0:t.redirect_url;n&&Object(i.D)(n)})).catch((function(){Object(o.c)(l)})).finally((function(){n.actionInProgress=null})))},stopEnvironment(){this.executeAction(this.stopUrl,this.$options.actionsConfiguration.stopping)},deployManually(){this.executeAction(this.playPath,this.$options.actionsConfiguration.deploying)},redeploy(){this.executeAction(this.redeployPath,this.$options.actionsConfiguration.redeploying)}}},j=Object(u.a)(O,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.canBeManuallyDeployed?n("deployment-action-button",{attrs:{"action-in-progress":e.actionInProgress,"actions-configuration":e.$options.actionsConfiguration[e.constants.DEPLOYING],"computed-deployment-status":e.computedDeploymentStatus,icon:e.$options.btnIcons.play,"container-classes":"js-manual-deploy-action"},on:{click:e.deployManually}},[n("span",[e._v(e._s(e.$options.actionsConfiguration[e.constants.DEPLOYING].buttonText))])]):e._e(),e._v(" "),e.canBeManuallyRedeployed?n("deployment-action-button",{attrs:{"action-in-progress":e.actionInProgress,"actions-configuration":e.$options.actionsConfiguration[e.constants.REDEPLOYING],"computed-deployment-status":e.computedDeploymentStatus,icon:e.$options.btnIcons.repeat,"container-classes":"js-manual-redeploy-action"},on:{click:e.redeploy}},[n("span",[e._v(e._s(e.$options.actionsConfiguration[e.constants.REDEPLOYING].buttonText))])]):e._e(),e._v(" "),e.hasExternalUrls?n("deployment-view-button",{attrs:{"app-button-text":e.appButtonText,deployment:e.deployment,"show-visual-review-app":e.showVisualReviewApp,"visual-review-app-meta":e.visualReviewAppMeta}}):e._e(),e._v(" "),e.stopUrl?n("deployment-action-button",{attrs:{"action-in-progress":e.actionInProgress,"computed-deployment-status":e.computedDeploymentStatus,"actions-configuration":e.$options.actionsConfiguration[e.constants.STOPPING],"button-title":e.$options.actionsConfiguration[e.constants.STOPPING].buttonText,icon:e.$options.btnIcons.stop,"container-classes":"js-stop-env"},on:{click:e.stopEnvironment}}):e._e()],1)}),[],!1,null,null,null).exports,x=n("rX0p"),T=n("5QKO"),k=(n("MoW5"),n("orcL"),n("FkSe")),S=n("30su"),C=n("NmEs"),D=n("QwBj"),P=n("SNRI"),I=n("RXun"),B=n("bOix"),q={name:"MemoryGraph",components:{GlSparklineChart:I.a},props:{metrics:{type:Array,required:!0},width:{type:Number,required:!0},height:{type:Number,required:!0}},computed:{chartData(){var e=this;return this.metrics.map((function(t){let[n,o]=t;return[e.getFormattedDeploymentTime(n),e.getMemoryUsage(o)]}))}},methods:{getFormattedDeploymentTime:e=>Object(B.h)(new Date(Object(B.D)(e)),"mmm dd yyyy HH:MM:s"),getMemoryUsage:e=>Number(e).toFixed(2)}},A={name:"MemoryUsage",components:{MemoryGraph:Object(u.a)(q,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"memory-graph-container p-1",style:{width:this.width+"px"}},[t("gl-sparkline-chart",{attrs:{height:this.height,"tooltip-label":this.__("MB"),"show-last-y-value":!1,data:this.chartData}})],1)}),[],!1,null,null,null).exports,GlLoadingIcon:k.a,GlSprintf:S.a,GlLink:v.a},props:{metricsUrl:{type:String,required:!0},metricsMonitoringUrl:{type:String,required:!0}},data:()=>({memoryFrom:0,memoryTo:0,memoryMetrics:[],deploymentTime:0,hasMetrics:!1,loadFailed:!1,loadingMetrics:!0,backOffRequestCounter:0}),computed:{shouldShowLoading(){return this.loadingMetrics&&!this.hasMetrics&&!this.loadFailed},shouldShowMemoryGraph(){return!this.loadingMetrics&&this.hasMetrics&&!this.loadFailed},shouldShowLoadFailure(){return!this.loadingMetrics&&!this.hasMetrics&&this.loadFailed},shouldShowMetricsUnavailable(){return!this.loadingMetrics&&!this.hasMetrics&&!this.loadFailed},memoryChangeMessage(){const e=Number(this.memoryTo),t=Number(this.memoryFrom);return e>t?Object(s.e)("mrWidget|%{metricsLinkStart} Memory %{metricsLinkEnd} usage %{emphasisStart} increased %{emphasisEnd} from %{memoryFrom}MB to %{memoryTo}MB"):e<t?Object(s.e)("mrWidget|%{metricsLinkStart} Memory %{metricsLinkEnd} usage %{emphasisStart} decreased %{emphasisEnd} from %{memoryFrom}MB to %{memoryTo}MB"):Object(s.e)("mrWidget|%{metricsLinkStart} Memory %{metricsLinkEnd} usage is %{emphasisStart} unchanged %{emphasisEnd} at %{memoryFrom}MB")}},mounted(){this.loadingMetrics=!0,this.loadMetrics()},methods:{getMegabytes(e){const t=Number(e).toFixed(2);return Object(P.a)(t).toFixed(2)},computeGraphData(e,t){this.loadingMetrics=!1;const{memory_before:n,memory_after:o,memory_values:i}=e;n.length>0&&(this.memoryFrom=this.getMegabytes(n[0].value[1])),o.length>0&&(this.memoryTo=this.getMegabytes(o[0].value[1])),i.length>0&&(this.hasMetrics=!0,this.memoryMetrics=i[0].values,this.deploymentTime=t)},loadMetrics(){var e=this;Object(C.d)((function(t,n){r.a.fetchMetrics(e.metricsUrl).then((function(o){o.status===D.a.NO_CONTENT?(e.backOffRequestCounter+=1,e.backOffRequestCounter<3?t():n(o)):n(o)})).catch(n)})).then((function(e){return e.status===D.a.NO_CONTENT?e:e.data})).then((function(t){return e.computeGraphData(t.metrics,t.deployment_time),t})).catch((function(){e.loadFailed=!0,e.loadingMetrics=!1}))}}},E=Object(u.a)(A,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mr-info-list clearfix mr-memory-usage js-mr-memory-usage"},[e.shouldShowLoading?n("p",{staticClass:"usage-info js-usage-info usage-info-loading"},[n("gl-loading-icon",{staticClass:"usage-info-load-spinner"}),e._v(e._s(e.s__("mrWidget|Loading deployment statistics"))+"\n  ")],1):e._e(),e._v(" "),e.shouldShowMemoryGraph?n("p",{staticClass:"usage-info js-usage-info"},[n("gl-sprintf",{attrs:{message:e.memoryChangeMessage},scopedSlots:e._u([{key:"metricsLink",fn:function(t){var o=t.content;return[n("gl-link",{attrs:{href:e.metricsMonitoringUrl}},[e._v(e._s(o))])]}},{key:"emphasis",fn:function(t){var o=t.content;return[n("strong",[e._v(e._s(o))])]}},{key:"memoryFrom",fn:function(){return[e._v(e._s(e.memoryFrom))]},proxy:!0},{key:"memoryTo",fn:function(){return[e._v(e._s(e.memoryTo))]},proxy:!0}],null,!1,3806136086)})],1):e._e(),e._v(" "),e.shouldShowLoadFailure?n("p",{staticClass:"usage-info js-usage-info usage-info-failed"},[e._v("\n    "+e._s(e.s__("mrWidget|Failed to load deployment statistics"))+"\n  ")]):e._e(),e._v(" "),e.shouldShowMetricsUnavailable?n("p",{staticClass:"usage-info js-usage-info usage-info-unavailable"},[e._v("\n    "+e._s(e.s__("mrWidget|Deployment statistics are not available currently"))+"\n  ")]):e._e(),e._v(" "),e.shouldShowMemoryGraph?n("memory-graph",{attrs:{metrics:e.memoryMetrics,height:25,width:110}}):e._e()],1)}),[],!1,null,null,null).exports,N={name:"DeploymentInfo",components:{GlLink:v.a,MemoryUsage:E,TooltipOnTruncate:x.a},directives:{GlTooltip:p.a},mixins:[T.a],props:{computedDeploymentStatus:{type:String,required:!0},deployment:{type:Object,required:!0},showMetrics:{type:Boolean,required:!0}},deployedTextMap:{manual_deploy:Object(s.a)("Can be manually deployed to"),will_deploy:Object(s.a)("Will deploy to"),running:Object(s.a)("Deploying to"),success:Object(s.a)("Deployed to"),failed:Object(s.a)("Failed to deploy to"),canceled:Object(s.a)("Canceled deployment to"),skipped:Object(s.a)("Skipped deployment to")},computed:{deployTimeago(){return this.timeFormatted(this.deployment.deployed_at)},deployedText(){return this.$options.deployedTextMap[this.computedDeploymentStatus]},hasDeploymentTime(){return Boolean(this.deployment.deployed_at&&this.deployment.deployed_at_formatted)},hasDeploymentMeta(){return Boolean(this.deployment.url&&this.deployment.name)},hasMetrics(){return Boolean(this.deployment.metrics_url)},showMemoryUsage(){return this.hasMetrics&&this.showMetrics}}},G={name:"Deployment",components:{DeploymentActions:j,DeploymentInfo:Object(u.a)(N,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"js-deployment-info deployment-info"},[e.hasDeploymentMeta?[n("span",[e._v(e._s(e.deployedText))]),e._v(" "),n("tooltip-on-truncate",{staticClass:"deploy-link label-truncate",attrs:{title:e.deployment.name,"truncate-target":"child"}},[n("gl-link",{staticClass:"js-deploy-meta gl-font-sm",attrs:{href:e.deployment.url,target:"_blank",rel:"noopener noreferrer nofollow"}},[e._v("\n        "+e._s(e.deployment.name)+"\n      ")])],1)]:e._e(),e._v(" "),e.hasDeploymentTime?n("span",{directives:[{name:"gl-tooltip",rawName:"v-gl-tooltip"}],staticClass:"js-deploy-time",attrs:{title:e.deployment.deployed_at_formatted}},[e._v("\n    "+e._s(e.deployTimeago)+"\n  ")]):e._e(),e._v(" "),e.showMemoryUsage?n("memory-usage",{attrs:{"metrics-url":e.deployment.metrics_url,"metrics-monitoring-url":e.deployment.metrics_monitoring_url}}):e._e()],2)}),[],!1,null,null,null).exports},props:{deployment:{type:Object,required:!0},showMetrics:{type:Boolean,required:!0},showVisualReviewApp:{type:Boolean,required:!1,default:!1},visualReviewAppMeta:{type:Object,required:!1,default:function(){return{sourceProjectId:"",sourceProjectPath:"",mergeRequestId:"",appUrl:""}}}},computed:{computedDeploymentStatus(){return"created"===this.deployment.status?this.isManual?"manual_deploy":"will_deploy":this.deployment.status},isManual(){var e,t;return Boolean(null===(e=this.deployment.details)||void 0===e?void 0:null===(t=e.playable_build)||void 0===t?void 0:t.play_path)}}},R=Object(u.a)(G,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"deploy-heading"},[n("div",{staticClass:"ci-widget media"},[n("div",{staticClass:"media-body"},[n("div",{staticClass:"deploy-body"},[n("deployment-info",{attrs:{"computed-deployment-status":e.computedDeploymentStatus,deployment:e.deployment,"show-metrics":e.showMetrics}}),e._v(" "),n("deployment-actions",{attrs:{deployment:e.deployment,"computed-deployment-status":e.computedDeploymentStatus,"show-visual-review-app":e.showVisualReviewApp,"visual-review-app-meta":e.visualReviewAppMeta}})],1)])])])}),[],!1,null,null,null);t.default=R.exports},aKbY:function(e,t,n){"use strict";t.a={inserted(e){"IntersectionObserver"in window&&(e.visibilityObserver=new IntersectionObserver((function(e){e.forEach((function(e){e.intersectionRatio>0&&e.target.offsetParent&&e.target.focus()}))})),e.visibilityObserver.observe(e,{root:document.documentElement}))},unbind(e){e.visibilityObserver&&e.visibilityObserver.disconnect()}}}}]);
//# sourceMappingURL=469.9af62228.chunk.js.map