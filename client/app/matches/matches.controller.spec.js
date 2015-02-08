'use strict';

describe('Controller: MatchesCtrl', function() {

  // load the controller's module
  beforeEach(module('housrApp'));

  var MatchesCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    MatchesCtrl = $controller('MatchesCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
