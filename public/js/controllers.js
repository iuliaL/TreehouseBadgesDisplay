'use strict';

app.controller('BadgesCtrl', function($scope, dataService ){
	dataService.getAllData().then(function (data) {
	$scope.badges = data;
	});
});
