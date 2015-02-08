'use strict';

angular.module('housrApp')
  .factory('Maps', function($resource) {
    return $resource('/api/properties', {
      id: '@_id'
    }, {
      properties: {
        method: 'GET',
        params: {}
      }
	  });
  });
