'use strict';

angular.module('housrApp')
  .factory('LikeDislike', function ($resource) {
    return $resource('/api/LikeDislike/:id/:controller', {
      id: '@_id'
    },
    {
      save: {
        method: 'POST',
        params: {
          controller:'',
          id: ''
        }
      },
      get: {
        method: 'GET',
        params: {
          id:''
        }
      },
	  });
  });
