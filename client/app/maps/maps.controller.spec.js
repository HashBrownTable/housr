'use strict';

describe('Controller: MapsCtrl', function () {

  // load the controller's module
  beforeEach(module('housrApp'));

  var MapsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MapsCtrl = $controller('MapsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
