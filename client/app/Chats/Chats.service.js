'use strict';

angular.module('housrApp')
  .factory('Chats', function ($resource) {
    return $resource('/api/matches/:id/:controller', {
      id: '@_id'
    },
    {
      /*
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
      },*/
      get: {
        method: 'GET',
        params: {}
      }
	  });
  });
