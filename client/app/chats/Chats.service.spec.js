'use strict';

describe('Service: Chats', function() {

  // load the service's module
  beforeEach(module('housrApp'));

  // instantiate service
  var Chats;
  beforeEach(inject(function(_Chats_) {
    Chats = _Chats_;
  }));

  it('should do something', function() {
    expect(!!Chats).toBe(true);
  });

});
