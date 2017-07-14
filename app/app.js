'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngStorage',
  'myApp.todos',
  'myApp.add',
  'myApp.version'
]).

config([
  '$locationProvider', '$routeProvider', '$localStorageProvider',
  function($locationProvider, $routeProvider, $localStorageProvider)
{
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/todos'});

  $localStorageProvider.setKeyPrefix('TodoList_');
}]);
