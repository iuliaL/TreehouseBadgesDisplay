'use strict';

app.directive('total', function() { 
  return { 
    restrict: 'E', 
    controller : 'BadgesCtrl',
    template: '<span>Total:   <strong>{{list.badges.length}}</strong> Badges</span>' 
  }; 
});