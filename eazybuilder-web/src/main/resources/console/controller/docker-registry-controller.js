app.controller('dockerRegistryController', function($scope,$http,$window,$state,$filter,basicService) {
	$scope.condition={};
	$scope.entity={};
	basicService.getMyTeams().then(function(response){
		$scope.teams=response.data;
	});
	$scope.tableControl={
		options:{
            url:backend.url+"/api/dockerRegistry/page",
        	cache:false,
            idField:'id',
            queryParams:function(params){
            	var queryParam=angular.extend({},params,$scope.condition);
            	return queryParam;
            },
            columns: [{
                field:'state',
                checkbox:true //设置多选
            }, {
            	field:'url',
            	title:'地址',
            	formatter:function(value){
            		if(!value){
            			return '--';
					}
                	return "<a>"+value+"</a>";
                },
                events:{
                	'click a':function(e, value, row, index){
                		$scope.viewDetail(row);
                	}
                }
            },{
                field: 'schema',
                title: '协议',
                align: 'center',
                valign: 'bottom',
                sortable: true,
				formatter:function(value){
					if(!value){
						return '--';
					}
					return '<span title="'+value+'">'+value+'</span>' ;
				}
            },{
            	field:'user',
            	title:'用户',
				formatter:function(value){
					if(!value){
						return '--';
					}
					return '<span title="'+value+'">'+value+'</span>' ;
				}
            },{
            	field:'teamId',
            	title:'所属项目组',
            	formatter:function(val){
            		if(!val){
            			return '--';
            		}
            		if($scope.teams){
            		  for(var i=0;i<$scope.teams.length;i++){
            			if(val==$scope.teams[i].id){
            				return $scope.teams[i].name;
            			}
            		  }
            		}else {
						jQuery("#table").bootstrapTable("refresh");
					}
            	}
            }],
            clickToSelect:true, //设置支持行多选
            search:true, //显示搜索框
            searchOnEnterKey:true,//enter时才search
            toolbar:'#toolbar', //关联工具栏
            showHeader:true,
            showColumns:true, //显示列
            showRefresh:true, //显示刷新按钮
            showToggle:true, //显示切换视图按钮
            showPaginationSwitch:true, //显示数据条数框
            pagination:true, //设置为 true 会在表格底部显示分页条
            paginationLoop:true, //设置为 true 启用分页条无限循环的功能。
            sidePagination:'server', //设置在哪里进行分页，可选值为 'client' 或者 'server'。
            pageSize:10,
            pageList:[10,15,20,25,50],
            paginationHAlign:'right' //分页条位置
		}	
	};
	
	$scope.add=function(){
		$scope.entity={};
		$state.go('dockerRegistry.add');
	}
	
	$scope.save=function(){
		$http.post(backend.url+"/api/dockerRegistry",$scope.entity).then(function(response){
			alert("保存成功");
			$state.go("dockerRegistry.list");
		});
	}
	
	$scope.viewDetail = function (row) {
		$scope.entity=angular.copy(row);
		$state.go('dockerRegistry.edit');
	}
	
	$scope.back = function () {
		$state.go('dockerRegistry.list');
	}
	
	//删除
	$scope.remove= function(){
		var selected=jQuery("#table").bootstrapTable("getAllSelections")
		if(!selected||!selected.length){
			return;
		}
		
		var ids=[];
		for(var i=0;i<selected.length;i++){
			ids.push(selected[i].id);
		}
		if(confirm("确认删除选中项？")){
			$http({
				url:backend.url+"/api/dockerRegistry",
				method:"delete",
				headers: {
        	        'Content-type': 'application/json;charset=utf-8'
        	    },
				data:ids
			}).then(function(){
				alert("删除成功");
				jQuery("#table").bootstrapTable("refresh");
			});
		}
	}
	
});

