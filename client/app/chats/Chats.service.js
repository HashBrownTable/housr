'use strict';

angular.module('housrApp')
  .factory('Chats', function($resource) {
    return $resource('/api/matches/:id/:controller', {
      id: '@_id'
    }, {
      get: {
        method: 'GET',
        params: {}
      },
      add: {
        method: 'POST',
        params: {
          controller: 'add',
        }
      }
	  });
  });
