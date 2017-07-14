'use strict';

angular.module('myApp.add', [
  'ngRoute',
  'ngStorage'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/add', {
    templateUrl: 'add/add.html',
    controller: 'AddTodoViewCtrl'
  });
}])

.controller('AddTodoViewCtrl', [
  '$scope', '$location', '$localStorage',
  function($scope, $location, $localStorage)
{
  $scope.$storage = $localStorage.$default({
    todos: []
  });

  // TODO: [1;0] Use `form.input.$valid'?
  $scope.validate = function () {
    return $scope.todoText && $scope.todoText.length > 0 &&
           $scope.dueDateTime;
  };

  $scope.addTodo = function() {
    $scope.$storage.todos.push({text: $scope.todoText, done: false, dueDateTime: moment($scope.dueDateTime)});

    // NOTE: See `https://github.com/gsklee/ngStorage/issues/124'.
    $localStorage.$apply();

    // TODO: [1;2] Use `angular-ui-router'?
    $location.path('/todos');
  };
}]);
