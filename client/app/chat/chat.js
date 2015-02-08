'use strict';

angular.module('housrApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('chat', {
        url: '/chat/:id',
        templateUrl: 'app/chat/chat.html',
        controller: 'ChatCtrl'
      });
  });
