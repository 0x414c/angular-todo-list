'use strict';

angular.module('myApp.add', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/add', {
    templateUrl: 'add/add.html',
    controller: 'AddTodoViewCtrl'
  });
}])

.controller('AddTodoViewCtrl', ['$scope', '$location', function($scope, $location) {
  $scope.todos = loadTodos();

  // TODO: [2;1] Return to `todos' view after saving.
  $scope.addTodo = function() {
    $scope.todos.push({text:$scope.todoText, done:false});
    $scope.todoText = '';

    saveTodos($scope.todos);

    // TODO: [1;2] Use `angular-ui-router'?
    $location.path('todos');
  };
}]);
