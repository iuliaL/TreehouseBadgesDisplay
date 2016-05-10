'use strict';

var url= 'https://teamtreehouse.com/iuliamarialungu.json';

app.controller('BadgesCtrl', function($scope, $http){
	$scope.list;
	$http.get(url)
	.success(function successCallback (data) {
		$scope.list = data;
		});
	});

app.controller('CourseCtrl', function($scope){
	
	});

