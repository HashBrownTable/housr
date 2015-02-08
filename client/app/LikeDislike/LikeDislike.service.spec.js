'use strict';

describe('Service: LikeDislike', function() {

  // load the service's module
  beforeEach(module('housrApp'));

  LikeDislike.get(data) {
    function(data) {
      console.log(data);
    }
  }


  // instantiate service
  var LikeDislike;
  beforeEach(inject(function(_LikeDislike_) {
    LikeDislike = _LikeDislike_;
  }));

  it('should do something', function() {
    expect(!!LikeDislike).toBe(true);
  });

});
