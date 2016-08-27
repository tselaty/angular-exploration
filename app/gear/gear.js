'use strict';

angular.module('exploration.gear', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/gear', {
    templateUrl: 'gear/gear.html',
    controller: 'GearCtrl'
  });
}])

.controller('GearCtrl', [function() {

}]);
