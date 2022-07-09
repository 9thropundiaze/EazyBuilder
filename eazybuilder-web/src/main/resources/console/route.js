//ui-route config
app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	    .state('dashboard', {
	      url: '/dashboard',
	      templateUrl: 'app/dashboard.html'
	    })
	    .state('project-qa', {
	      url: '/project-qa',
	      templateUrl: 'app/project/qa-report.html',
	      controller:'qaController'
	    })
	     .state("help",{
	    	url:"/help",
	    	templateUrl:"docs/index.html"
	    })
	    .state('mavenRepo', {
	      url: '/mavenRepo',
	      templateUrl: 'app/mavenRepo/main.html'
	    })
	    .state('mavenUpload',{
	    	url: '/mavenUpload',
	    	controller: 'mavenArtifactInstallController'
	    })
	    .state("project",{
	    	url:"/project",
	    	templateUrl:"app/project/main.html"
	    })
	    .state("project.list",{
	    	url:"/projectList",
	    	templateUrl:"app/project/list.html"
	    })
	    .state("project.add",{
	    	url:"/projectAdd",
	    	templateUrl:"app/project/form.html"
	    })
	    .state("project.edit",{
	    	url:"/projectEdit",
	    	templateUrl:"app/project/form.html"
	    })
	    .state("projectBatchImport",{
	    	url:"/projectBatchImport",
	    	templateUrl:"app/project/batch-import.html"
	    })
	    .state("demandBatchImport",{
	    	url:"/demandBatchImport",
	    	templateUrl:"app/demand/batch-import.html"
	    })		
	    .state("projectSvnScan",{
	    	url:"/projectSvnScan",
	    	templateUrl:"app/project/svn-scan.html"
	    })
	    .state("developer",{
	    	url:"/developer",
	    	templateUrl:"app/developer/main.html"
	    })
	    .state("developer.list",{
	    	url:"/developerList",
	    	templateUrl:"app/developer/list.html"
	    })
	    .state("developer.add",{
	    	url:"/developerAdd",
	    	templateUrl:"app/developer/form.html"
	    })
	    .state("developer.edit",{
	    	url:"/developerEdit",
	    	templateUrl:"app/developer/form.html"
	    })
	    .state("dockerRegistry",{
	    	url:"/dockerRegistry",
	    	templateUrl:"app/dockerRegistry/main.html"
	    })
	    .state("dockerRegistry.list",{
	    	url:"/dockerRegistryList",
	    	templateUrl:"app/dockerRegistry/list.html"
	    })
	    .state("dockerRegistry.add",{
	    	url:"/dockerRegistryAdd",
	    	templateUrl:"app/dockerRegistry/form.html"
	    })
	    .state("dockerRegistry.edit",{
	    	url:"/dockerRegistryEdit",
	    	templateUrl:"app/dockerRegistry/form.html"
	    })
	    .state("pipelineHistory",{
	    	url:"/pipelineHistory",
	    	templateUrl:"app/pipelineHistory/main.html"
	    })
	    .state("pipelineHistory.list",{
	    	url:"/pipelineHistoryList",
	    	templateUrl:"app/pipelineHistory/list.html"
	    })
	    .state("pipelineHistory.add",{
	    	url:"/pipelineHistoryAdd",
	    	templateUrl:"app/pipelineHistory/form.html"
	    })
	    .state("pipelineHistory.edit",{
	    	url:"/pipelineHistoryEdit",
	    	templateUrl:"app/pipelineHistory/form.html"
	    })
	    .state("pipelineHistory.history",{
	    	url:"/pipelineHistoryHistory",
	    	templateUrl:"app/pipelineHistory/pipeline-history.html"
	    })
	    .state("pipelineHistory.revision",{
	    	url:"/pipelineHistoryHistory",
	    	templateUrl:"app/pipelineHistory/revision-log.html",
	    	controller:"revisionLogExportController"
	    })

		.state("pipeline",{
			url:"/pipeline",
			templateUrl:"app/pipeline/main.html"
		})
		.state("pipeline.list",{
			url:"/pipelineList",
			templateUrl:"app/pipeline/list.html"
		})
		.state("pipeline.add",{
			url:"/pipelineAdd",
			templateUrl:"app/pipeline/form.html"
		})
		.state("pipeline.edit",{
			url:"/pipelineEdit",
			templateUrl:"app/pipeline/form.html"
		})
		.state("pipeline.history",{
			url:"/pipelineHistory",
			templateUrl:"app/pipeline/pipeline-history.html"
		})
		.state("pipeline.revision",{
			url:"/pipelineHistory",
			templateUrl:"app/pipeline/revision-log.html",
			controller:"revisionLogExportController"
		})


	    .state("warn",{
	    	url:"/warn",
	    	templateUrl:"app/warn/main.html"
	    })
	    .state("warn.list",{
	    	url:"/warnList",
	    	templateUrl:"app/warn/list.html"
	    })
	    .state("warn.add",{
	    	url:"/warnAdd",
	    	templateUrl:"app/warn/form.html"
	    })
	    .state("warn.edit",{
	    	url:"/warnEdit",
	    	templateUrl:"app/warn/form.html"
	    })
	    .state("warnRule",{
	    	url:"/warnRule",
	    	templateUrl:"app/warnRule/main.html"
	    })
	    .state("warnRule.list",{
	    	url:"/warnRuleList",
	    	templateUrl:"app/warnRule/list.html"
	    })
	    .state("warnRule.add",{
	    	url:"/warnRuleAdd",
	    	templateUrl:"app/warnRule/form.html"
	    })
	    .state("warnRule.edit",{
	    	url:"/warnRuleEdit",
	    	templateUrl:"app/warnRule/form.html"
	    })
	    .state("job",{
	    	url:"/job",
	    	templateUrl:"app/job/main.html"
	    })
	    .state("job.list",{
	    	url:"/jobList",
	    	templateUrl:"app/job/list.html"
	    })
	    .state("job.add",{
	    	url:"/jobAdd",
	    	templateUrl:"app/job/form.html"
	    })
	    .state("job.edit",{
	    	url:"/jobEdit",
	    	templateUrl:"app/job/form.html"
	    })

		.state("jobOnline",{
			url:"/jobOnline",
			templateUrl:"app/jobOnline/main.html"
		})
		.state("jobOnline.list",{
			url:"/jobOnlineList",
			templateUrl:"app/jobOnline/list.html"
		})
		.state("jobOnline.add",{
			url:"/jobOnlineAdd",
			templateUrl:"app/jobOnline/form.html"
		})
		.state("jobOnline.edit",{
			url:"/jobOnlineEdit",
			templateUrl:"app/jobOnline/form.html"
		})

	    .state("user",{
	    	url:"/user",
	    	templateUrl:"app/user/main.html"
	    })
	    .state("user.list",{
	    	url:"/userList",
	    	templateUrl:"app/user/list.html"
	    })
	    .state("user.add",{
	    	url:"/userAdd",
	    	templateUrl:"app/user/form.html"
	    })
	    .state("user.edit",{
	    	url:"/userEdit",
	    	templateUrl:"app/user/form.html"
	    })
	    .state("team",{
	    	url:"/team",
	    	templateUrl:"app/team/main.html"
	    })
	    .state("team.list",{
	    	url:"/teamList",
	    	templateUrl:"app/team/list.html"
	    })
	    .state("team.add",{
	    	url:"/teamAdd",
	    	templateUrl:"app/team/form.html"
	    })
	    .state("team.edit",{
	    	url:"/teamEdit",
	    	templateUrl:"app/team/form.html"
	    })
	    .state("pipelineProfile",{
	    	url:"/pipelineProfile",
	    	templateUrl:"app/pipelineProfile/main.html"
	    })
	    .state("pipelineProfile.list",{
	    	url:"/pipelineProfileList",
	    	templateUrl:"app/pipelineProfile/list.html"
	    })
	    .state("testEnvSet",{
	    	url:"/testEnvSet",
	    	templateUrl:"app/testEnvSet/main.html"
	    })
	    .state("testEnvSet.list",{
	    	url:"/testEnvSetList",
	    	templateUrl:"app/testEnvSet/list.html"
	    })
	    .state("testEnvSet.add",{
	    	url:"/testEnvSetAdd",
	    	templateUrl:"app/testEnvSet/form.html"
	    })
	    .state("testEnvSet.edit",{
	    	url:"/testEnvSetEdit",
	    	templateUrl:"app/testEnvSet/form.html"
	    })
	    .state("atmScript",{
	    	url:"/atmScript",
	    	templateUrl:"app/atmScript/main.html"
	    })
	    .state("atmScript.list",{
	    	url:"/atmScriptList",
	    	templateUrl:"app/atmScript/list.html"
	    })
	    .state("atmScript.add",{
	    	url:"/atmScriptAdd",
	    	templateUrl:"app/atmScript/form.html"
	    })
	    .state("atmScript.edit",{
	    	url:"/atmScriptEdit",
	    	templateUrl:"app/atmScript/form.html"
	    })
	    .state("itPlan",{
	    	url:"/itPlan",
	    	templateUrl:"app/itPlan/main.html"
	    })
	    .state("itPlan.list",{
	    	url:"/itPlanList",
	    	templateUrl:"app/itPlan/list.html"
	    })
	    .state("itPlan.add",{
	    	url:"/itPlanAdd",
	    	templateUrl:"app/itPlan/form.html"
	    })
	    .state("itPlan.edit",{
	    	url:"/itPlanEdit",
	    	templateUrl:"app/itPlan/form.html"
	    })
	    .state("testExecHistory",{
	    	url:"/testExecHistory",
	    	templateUrl:"app/testExecHistory/main.html"
	    })
	    .state("testExecHistory.list",{
	    	url:"/testExecHistoryList",
	    	templateUrl:"app/testExecHistory/list.html"
	    })
	    .state("appScanScript",{
	    	url:"/appScanScript",
	    	templateUrl:"app/appScanScript/main.html"
	    })
	    .state("appScanScript.list",{
	    	url:"/appScanScriptList",
	    	templateUrl:"app/appScanScript/list.html"
	    })
	    .state("appScanScript.add",{
	    	url:"/appScanScriptAdd",
	    	templateUrl:"app/appScanScript/form.html"
	    })
	    .state("appScanScript.edit",{
	    	url:"/appScanScriptEdit",
	    	templateUrl:"app/appScanScript/form.html"
	    })
	    .state("appScanPlan",{
	    	url:"/appScanPlan",
	    	templateUrl:"app/appScanPlan/main.html"
	    })
	    .state("appScanPlan.list",{
	    	url:"/appScanPlanList",
	    	templateUrl:"app/appScanPlan/list.html"
	    })
	    .state("appScanPlan.add",{
	    	url:"/appScanPlanAdd",
	    	templateUrl:"app/appScanPlan/form.html"
	    })
	    .state("appScanPlan.edit",{
	    	url:"/appScanPlanEdit",
	    	templateUrl:"app/appScanPlan/form.html"
	    })
	    .state("appScanHistory",{
	    	url:"/appScanHistory",
	    	templateUrl:"app/appScanHistory/main.html"
	    })
	    .state("appScanHistory.list",{
	    	url:"/appScanHistoryList",
	    	templateUrl:"app/appScanHistory/list.html"
	    })
	    .state("systemProperty",{
	    	url:"/systemProperty",
	    	templateUrl:"app/systemProperty/main.html"
	    })
	    .state("systemProperty.list",{
	    	url:"/systemPropertyList",
	    	templateUrl:"app/systemProperty/list.html"
	    })
	    .state("systemProperty.add",{
	    	url:"/systemPropertyAdd",
	    	templateUrl:"app/systemProperty/form.html"
	    })
	    .state("systemProperty.edit",{
	    	url:"/systemPropertyEdit",
	    	templateUrl:"app/systemProperty/form.html"
	    })
	     .state("hostInfo",{
	    	url:"/hostInfo",
	    	templateUrl:"app/hostInfo/main.html"
	    })
	    .state("hostInfo.list",{
	    	url:"/hostInfoList",
	    	templateUrl:"app/hostInfo/list.html"
	    })
	    .state("hostInfo.add",{
	    	url:"/hostInfoAdd",
	    	templateUrl:"app/hostInfo/form.html"
	    })
	    .state("hostInfo.edit",{
	    	url:"/hostInfoEdit",
	    	templateUrl:"app/hostInfo/form.html"
	    })
	     .state("apiSecurity",{
	    	url:"/apiSecurity",
	    	templateUrl:"app/apiSecurity/main.html"
	    })
	    .state("apiSecurity.list",{
	    	url:"/apiSecurityList",
	    	templateUrl:"app/apiSecurity/list.html"
	    })
	    .state("apiSecurity.add",{
	    	url:"/apiSecurityAdd",
	    	templateUrl:"app/apiSecurity/form.html"
	    })
	    .state("apiSecurity.edit",{
	    	url:"/apiSecurityEdit",
	    	templateUrl:"app/apiSecurity/form.html"
	    })
	    .state("projectGroup",{
	    	url:"/projectGroup",
	    	templateUrl:"app/projectGroup/main.html"
	    })
	    .state("projectGroup.list",{
	    	url:"/projectGroupList",
	    	templateUrl:"app/projectGroup/list.html"
	    })
	    .state("projectGroup.add",{
	    	url:"/projectGroupAdd",
	    	templateUrl:"app/projectGroup/form.html"
	    })
	    .state("projectGroup.edit",{
	    	url:"/projectGroupEdit",
	    	templateUrl:"app/projectGroup/form.html"
	    })
	    /*deveops 初始化页面*/
	    .state("scmStatisticJob",{
	    	url:"/scmStatisticJob",
	    	templateUrl:"app/scmStatisticJob/main.html"
	    })
	    .state("scmStatisticJob.list",{
	    	url:"/scmStatisticJobList",
	    	templateUrl:"app/scmStatisticJob/list.html"
	    })
	    .state("scmStatisticJob.add",{
	    	url:"/scmStatisticJobAdd",
	    	templateUrl:"app/scmStatisticJob/form.html"
	    })
	    .state("scmStatisticJob.edit",{
	    	url:"/scmStatisticJobEdit",
	    	templateUrl:"app/scmStatisticJob/form.html"
	    })
	    .state("userStatistic",{
	    	url:"/userStatistic",
	    	templateUrl:"app/userStatistic/main.html"
	    })
	    .state("userStatistic.list",{
	    	url:"/userStatisticList",
	    	templateUrl:"app/userStatistic/list.html"
	    })
	    .state("sysLog",{
	    	url:"/sysLog",
	    	templateUrl:"app/sysLog/main.html"
	    })
	    .state("sysLog.list",{
	    	url:"/sysLogList",
	    	templateUrl:"app/sysLog/list.html"
	    })
	    .state("team-resource",{
	    	url:"/teamResource",
	    	templateUrl:"app/teamResource/main.html"
	    })
	    .state("team-resource.list",{
	    	url:"/teamResourceList",
	    	templateUrl:"app/teamResource/list.html"
	    })
	    .state("team-resource.add",{
	    	url:"/teamResourceAdd",
	    	templateUrl:"app/teamResource/form.html"
	    })
	    .state("team-resource.edit",{
	    	url:"/teamResourceEdit",
	    	templateUrl:"app/teamResource/form.html"
	    })

		.state("deveops",{
			url:"/deveops",
			templateUrl:"app/devops/main.html",
			css:"js/angularjs-datetime-picker/wui.min.css"
		})
		.state("deveops.list",{
			url:"/deveopsList",
			templateUrl:"app/devops/list.html",
			css:"js/angularjs-datetime-picker/wui.min.css"
		})
		.state("deveops.add",{
			url:"/deveopsAdd",
			templateUrl:"app/devops/form.html",
			css:"js/angularjs-datetime-picker/wui.min.css"
		})
		.state("deveops.edit",{
			url:"/deveopsEdit",
			templateUrl:"app/devops/form.html",
			css:"js/angularjs-datetime-picker/wui.min.css"

		})

		.state("release",{
			url:"/release",
			templateUrl:"app/release/main.html"
		})
		.state("release.list",{
			url:"/releaseList",
			templateUrl:"app/release/list.html"
		})
		.state("release.add",{
			url:"/releaseAdd",
			templateUrl:"app/release/form.html"
		})
		.state("release.edit",{
			url:"/releaseEdit",
			templateUrl:"app/release/form.html"
		})
		.state("release.batch",{
			url:"/releaseBatch",
			templateUrl:"app/release/batchForm.html"
		})

		.state("onLine",{
			url:"/onLine",
			templateUrl:"app/onLine/main.html"
		})
		.state("onLine.list",{
			url:"/onLineList",
			templateUrl:"app/onLine/list.html"
		})
		.state("onLine.add",{
			url:"/onLineAdd",
			templateUrl:"app/onLine/form.html"
		})
		.state("onLine.edit",{
			url:"/onLineEdit",
			templateUrl:"app/onLine/form.html"
		})
		.state("onLine.batch",{
			url:"/onLineBatch",
			templateUrl:"app/onLine/batchForm.html"
		})

		.state("guard",{
			url:"/guard",
			templateUrl:"app/guard/main.html"
		})
		.state("guard.list",{
			url:"/guardList",
			templateUrl:"app/guard/list.html"
		})
		.state("guard.add",{
			url:"/guardAdd",
			templateUrl:"app/guard/form.html"
		})
		.state("guard.edit",{
			url:"/guardEdit",
			templateUrl:"app/guard/form.html"
		})

        .state("event",{
            url:"/event",
            templateUrl:"app/event/main.html"
        })
        .state("event.list",{
            url:"/eventList",
            templateUrl:"app/event/list.html"
        })
        .state("event.add",{
            url:"/eventAdd",
            templateUrl:"app/event/form.html"
        })
        .state("event.edit",{
            url:"/eventEdit",
            templateUrl:"app/event/form.html"
        })

	;
	    
	});