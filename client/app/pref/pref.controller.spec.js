'use strict';

describe('Controller: PrefCtrl', function () {

  // load the controller's module
  beforeEach(module('housrApp'));

  var PrefCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PrefCtrl = $controller('PrefCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
