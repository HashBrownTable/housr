'use strict';

angular.module('housrApp')
  .controller('ChatsCtrl', function ($scope, Chats) {
    $scope.message = 'Hello';
    Chats.get(function(data) {
      $scope.chats = data.chats;
    });
  });
