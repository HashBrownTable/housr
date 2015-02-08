'use strict';

describe('Service: LikeDislike', function () {

  // load the service's module
  beforeEach(module('housrApp'));

  // instantiate service
  var LikeDislike;
  beforeEach(inject(function (_LikeDislike_) {
    LikeDislike = _LikeDislike_;
  }));

  it('should do something', function () {
    expect(!!LikeDislike).toBe(true);
  });

});
