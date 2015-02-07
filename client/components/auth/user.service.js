'use strict';

angular.module('housrApp')
  .factory('User', function ($resource) {
    return $resource('/api/users/:id/:controller', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      savePrefs: {
        method: 'POST',
        params: {
          id: 'me',
          controller: 'savePrefs',
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      },
      matches: {
        method: 'GET',
        params: {
          id:''
        },
        isArray: true
      }
	  });
  });
