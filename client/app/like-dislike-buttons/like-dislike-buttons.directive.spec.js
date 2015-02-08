'use strict';

describe('Directive: likeDislikeButtons', function () {

  // load the directive's module and view
  beforeEach(module('housrApp'));
  beforeEach(module('app/like-dislike-buttons/like-dislike-buttons.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<like-dislike-buttons></like-dislike-buttons>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the likeDislikeButtons directive');
  }));
});