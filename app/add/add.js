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

  // TODO: [1;0] Use `form.input.$valid'?
  $scope.validate = function () {
    return $scope.todoText && $scope.todoText.length > 0 &&
           $scope.dueDateTime;
  };

  $scope.addTodo = function() {
    $scope.todos.push({text: $scope.todoText, done: false, dueDateTime: moment($scope.dueDateTime)});
    $scope.todoText = '';

    saveTodos($scope.todos);

    // TODO: [1;2] Use `angular-ui-router'?
    $location.path('todos');
  };
}]);
