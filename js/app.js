"use strict";




var app = angular.module('module', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when("/",
	    {
	      controller: "BadgesCtrl",
	      templateUrl: "partials/badges.html" 
	    })
  .otherwise({
    template: "This route isn't set!"
  });


});