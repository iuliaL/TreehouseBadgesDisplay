'use strict';

app.directive('total', function() {
  return {
    restrict: 'E',
    controller : 'BadgesCtrl',
    template: '<span>Total:   <strong>{{badges.length}}</strong> Badges</span>' 
  };
});
