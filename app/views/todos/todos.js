'use strict';

angular.module('myApp.todos', [
  'ngRoute',
  'ngStorage'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/todos', {
    templateUrl: 'views/todos/todos.html',
    controller: 'ShowTodosViewCtrl'
  });
}])

.filter('search', function($filter) {
  return function(input, searchQuery) {
    if (searchQuery) {
      return $filter('filter')(input, {text: searchQuery});
    } else {
      return input;
    }
  };
})

.controller('ShowTodosViewCtrl', [
  '$scope', '$localStorage', 'searchFilter',
  function($scope, $localStorage, searchFilter)
{
  $scope.$storage = $localStorage.$default({
    todos: []
  });

  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.$storage.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });

    return count;
  };

  // TODO: [0;0] Use key->value (id->todo) storage?
  $scope.done = function() {
    var oldTodos = $scope.$storage.todos;
    $scope.$storage.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) {
        $scope.$storage.todos.push(todo);
      }
    });
  };

  // TODO: [0;0] Different notifications for different time deltas.
  $scope.shouldNotify = function(todo) {
    var DAYS_BEFORE_NOTIFICATION = 3;

    if (todo.dueDateTime) {
      var now = moment();

      return Math.abs(now.diff(todo.dueDateTime, 'days', true)) < DAYS_BEFORE_NOTIFICATION;
    } else {
      return false;
    }
  };
}]);
