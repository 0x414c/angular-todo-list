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

  $scope.done = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) {
        $scope.todos.push(todo);
      }
    });
  };

  // TODO: [0;0] Different notifications for different time deltas.
  $scope.shouldNotify = function(todo) {
    var DAYS_BEFORE_NOTIFICATION = 3;

    if (todo.dueDateTime) {
      var now = moment();

      // console.log(now, todo.dueDateTime, now.diff(todo.dueDateTime, 'days', true));

      return Math.abs(now.diff(todo.dueDateTime, 'days', true)) < DAYS_BEFORE_NOTIFICATION;
    } else {
      return false;
    }
  };
}]);
