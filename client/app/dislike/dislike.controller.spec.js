'use strict';

describe('Controller: DislikeCtrl', function() {

  // load the controller's module
  beforeEach(module('housrApp'));

  var DislikeCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    DislikeCtrl = $controller('DislikeCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
