'use strict';

describe('myApp.add module', function() {

  beforeEach(module('myApp.add'));

  describe('add controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var addCtrl = $controller('AddTodoViewCtrl');
      expect(addCtrl).toBeDefined();
    }));

  });
});
