'use strict';

angular.module('myApp.todos', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/todos', {
    templateUrl: 'todos/todos.html',
    controller: 'ShowTodosViewCtrl'
  });
}])

.controller('ShowTodosViewCtrl', ['$scope', function($scope) {
  $scope.todos = loadTodos();

  $scope.remaining = function() {
    var count = 0;

    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });

    return count;
  };
}]);
