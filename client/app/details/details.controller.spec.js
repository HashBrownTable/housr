'use strict';

describe('Controller: DetailsCtrl', function() {

  // load the controller's module
  beforeEach(module('housrApp'));

  var DetailsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    DetailsCtrl = $controller('DetailsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
