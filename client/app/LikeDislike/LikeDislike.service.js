'use strict';

angular.module('housrApp')
  .factory('LikeDislike', function($resource, $rootScope) {
    return $resource($rootScope.domain + '/api/likedislikes/:id/:controller', {
      id: '@_id'
    },
    {
      save: {
        method: 'POST',
        params: {
          controller: '',
          id: ''
        }
      },
      get: {
        method: 'GET',
        params: {
          id: ''
        },
        isArray: true
      }
	  });
  });
