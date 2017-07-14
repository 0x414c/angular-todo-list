'use strict';

describe('myApp.todos module', function() {

  beforeEach(module('myApp.todos'));

  describe('todos controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var todosCtrl = $controller('ShowTodosViewCtrl');
      expect(todosCtrl).toBeDefined();
    }));

  });
});
