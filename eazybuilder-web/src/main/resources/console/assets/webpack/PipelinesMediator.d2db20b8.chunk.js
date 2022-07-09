(this.webpackJsonp=this.webpackJsonp||[]).push([[148],{QwBj:function(e,t,i){"use strict";i.d(t,"b",(function(){return n}));const r={ABORTED:0,OK:200,CREATED:201,ACCEPTED:202,NON_AUTHORITATIVE_INFORMATION:203,NO_CONTENT:204,RESET_CONTENT:205,PARTIAL_CONTENT:206,MULTI_STATUS:207,ALREADY_REPORTED:208,IM_USED:226,MULTIPLE_CHOICES:300,BAD_REQUEST:400,UNAUTHORIZED:401,FORBIDDEN:403,NOT_FOUND:404,METHOD_NOT_ALLOWED:405,CONFLICT:409,GONE:410,UNPROCESSABLE_ENTITY:422,TOO_MANY_REQUESTS:429,INTERNAL_SERVER_ERROR:500,SERVICE_UNAVAILABLE:503},n=[r.OK,r.CREATED,r.ACCEPTED,r.NON_AUTHORITATIVE_INFORMATION,r.NO_CONTENT,r.RESET_CONTENT,r.PARTIAL_CONTENT,r.MULTI_STATUS,r.ALREADY_REPORTED,r.IM_USED];t.a=r},hqF9:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var r=i("NmEs"),n=i("QwBj");class s{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.options=e,this.options.data=e.data||{},this.options.notificationCallback=e.notificationCallback||function(){},this.intervalHeader="POLL-INTERVAL",this.timeoutID=null,this.canPoll=!0}checkConditions(e){var t=this;const i=Object(r.I)(e.headers),s=parseInt(i[this.intervalHeader],10);s>0&&-1!==n.b.indexOf(e.status)&&this.canPoll&&(this.timeoutID&&clearTimeout(this.timeoutID),this.timeoutID=setTimeout((function(){t.makeRequest()}),s)),this.options.successCallback(e)}makeDelayedRequest(){var e=this;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.timeoutID=setTimeout((function(){return e.makeRequest()}),t)}makeRequest(){var e=this;const{resource:t,method:i,data:r,errorCallback:s,notificationCallback:a}=this.options;return a(!0),t[i](r).then((function(t){e.checkConditions(t),a(!1)})).catch((function(e){a(!1),e.status!==n.a.ABORTED&&s(e)}))}stop(){this.canPoll=!1,clearTimeout(this.timeoutID)}enable(e){e&&e.data&&(this.options.data=e.data),this.canPoll=!0,e&&e.response&&this.checkConditions(e.response)}restart(e){this.enable(e),this.makeRequest()}}},ja7t:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return u}));i("jaBk"),i("KcQl");var r=i("99pJ"),n=i.n(r),s=i("XRO8"),a=i("hqF9"),o=i("/lV4"),l=i("2ibD");class d{constructor(e){this.pipeline=e}getPipeline(e){return l.a.get(this.pipeline,{params:e})}deleteAction(e){return l.a.delete("".concat(e,".json"))}postAction(e){return l.a.post("".concat(e,".json"))}}i("EWC9");var c=i("jB52");function g(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function p(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class h{constructor(){this.state={},this.state.pipeline={},this.state.expandedPipelines=[]}storePipeline(){var e=this;const t=function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?g(Object(i),!0).forEach((function(t){p(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):g(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({},arguments.length>0&&void 0!==arguments[0]?arguments[0]:{});if(t.triggered_by){t.triggered_by=[t.triggered_by];const e=this.state.pipeline&&this.state.pipeline.triggered_by&&this.state.pipeline.triggered_by[0];this.parseTriggeredByPipelines(e,t.triggered_by[0])}t.triggered&&t.triggered.length&&t.triggered.forEach((function(t){const i=e.state.pipeline&&e.state.pipeline.triggered&&e.state.pipeline.triggered.find((function(e){return e.id===t.id}));e.parseTriggeredPipelines(i,t)})),this.state.pipeline=t}parseTriggeredByPipelines(){var e=this;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;var r;(c.default.set(i,"isExpanded",t.isExpanded||!1),c.default.set(i,"isLoading",!1),i.triggered_by)&&(Array.isArray(i.triggered_by)||Object.assign(i,{triggered_by:[i.triggered_by]}),(null===(r=i.triggered_by)||void 0===r?void 0:r.length)>0&&i.triggered_by.forEach((function(i){var r;const n=null===(r=t.triggered_by)||void 0===r?void 0:r.find((function(e){return e.id===i.id}));e.parseTriggeredPipelines(n,i)})))}parseTriggeredPipelines(){var e=this;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;c.default.set(i,"isExpanded",t.isExpanded||!1),c.default.set(i,"isLoading",!1),i.triggered&&i.triggered.length>0&&i.triggered.forEach((function(i){const r=t.triggered&&t.triggered.find((function(e){return e.id===i.id}));e.parseTriggeredPipelines(r,i)}))}resetTriggeredByPipeline(e,t){var i=this;e.triggered_by.forEach((function(e){return i.closePipeline(e)})),t.triggered_by&&t.triggered_by&&this.resetTriggeredByPipeline(t,t.triggered_by)}openTriggeredByPipeline(e,t){this.resetTriggeredByPipeline(e,t),this.openPipeline(t)}closeTriggeredByPipeline(e){var t=this;this.closePipeline(e),e.triggered_by&&e.triggered_by.length&&e.triggered_by.forEach((function(e){return t.closeTriggeredByPipeline(e)}))}resetTriggeredPipelines(e,t){var i=this;e.triggered.forEach((function(e){return i.closePipeline(e)})),t.triggered&&t.triggered.length&&t.triggered.forEach((function(e){return i.resetTriggeredPipelines(t,e)}))}openTriggeredPipeline(e,t){this.resetTriggeredPipelines(e,t),this.openPipeline(t)}closeTriggeredPipeline(e){var t=this;this.closePipeline(e),e.triggered&&e.triggered.length&&e.triggered.forEach((function(e){return t.closeTriggeredPipeline(e)}))}closePipeline(e){c.default.set(e,"isExpanded",!1),this.removeExpandedPipelineToRequestData(e.id)}openPipeline(e){c.default.set(e,"isExpanded",!0),this.addExpandedPipelineToRequestData(e.id)}toggleLoading(e){c.default.set(e,"isLoading",!e.isLoading)}addExpandedPipelineToRequestData(e){this.state.expandedPipelines.push(e)}removeExpandedPipelineToRequestData(e){this.state.expandedPipelines.splice(this.state.expandedPipelines.findIndex((function(t){return t===e})),1)}}class u{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.options=e,this.store=new h,this.service=new d(e.endpoint),this.state={},this.state.isLoading=!1}fetchPipeline(){var e=this;this.poll=new a.a({resource:this.service,method:"getPipeline",data:this.store.state.expandedPipelines?this.getExpandedParameters():void 0,successCallback:this.successCallback.bind(this),errorCallback:this.errorCallback.bind(this)}),n.a.hidden()?this.refreshPipeline():(this.state.isLoading=!0,this.poll.makeRequest()),n.a.change((function(){n.a.hidden()?e.stopPipelinePoll():e.poll.restart()}))}successCallback(e){this.state.isLoading=!1,this.store.storePipeline(e.data)}errorCallback(){this.state.isLoading=!1,Object(s.c)(Object(o.a)("An error occurred while fetching the pipeline."))}refreshPipeline(){var e=this;return this.stopPipelinePoll(),this.service.getPipeline().then((function(t){return e.successCallback(t)})).catch((function(){return e.errorCallback()})).finally((function(){return e.poll.restart(e.store.state.expandedPipelines?e.getExpandedParameters():void 0)}))}stopPipelinePoll(){this.poll.stop()}getExpandedParameters(){return{expanded:this.store.state.expandedPipelines}}}}}]);
//# sourceMappingURL=PipelinesMediator.d2db20b8.chunk.js.map