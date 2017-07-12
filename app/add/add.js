'use strict';

angular.module('myApp.add', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/add', {
    templateUrl: 'add/add.html',
    controller: 'AddTodoViewCtrl'
  });
}])

.controller('AddTodoViewCtrl', ['$scope', function($scope) {
  $scope.todos = loadTodos();

  // TODO: [2;1] Return to `todos' view after saving.
  $scope.addTodo = function() {
    $scope.todos.push({text:$scope.todoText, done:false});
    $scope.todoText = '';

    saveTodos($scope.todos);
  };
}]);
