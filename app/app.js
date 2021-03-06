'use strict';

// Declare app level module which depends on views, and components
angular.module('exploration', [
  'ngRoute',
  'exploration.gear',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/gear'});
}]);
