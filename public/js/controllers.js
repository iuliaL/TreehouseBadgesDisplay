'use strict';

app.controller('BadgesCtrl', function($scope, dataService ){
	$scope.busy = true;
	dataService.getAllData().then(function (data) {
	$scope.badges = data;
	$scope.busy = false;
	});

});
