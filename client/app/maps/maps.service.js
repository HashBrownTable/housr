'use strict';

angular.module('housrApp')
  .factory('Maps', function($resource, $rootScope) {
    return $resource($rootScope.domain + '/api/properties', {
      id: '@_id'
    }, {
      properties: {
        method: 'GET',
        params: {}
      }
	  });
  });
