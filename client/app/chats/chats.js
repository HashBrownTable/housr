'use strict';

angular.module('housrApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('chats', {
        url: '/chats',
        templateUrl: 'app/chats/chats.html',
        controller: 'ChatsCtrl',
        authenticate: true
      });
  });
