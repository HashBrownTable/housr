'use strict';

angular.module('housrApp')
  .controller('ChatCtrl', function ($scope, $rootScope, User, $stateParams, Chats, socket) {
    var chatId = $stateParams.id;
    var userDetails = {};
    User.get(function(user) {
      Chats.get({id: chatId}, function(chat) {
        _.each(chat.users, function(e) {
          User.get({id: e}, function(userDet) {
            userDetails[e] = userDet;
          });
        });
        $scope.messages = chat.messages;
        socket.syncUpdates('match:'+chatId, $scope.messages, function(event, item, array) {
          console.log(event, item, array);
          $scope.messages = array;
        });
        $scope.send = function() {
          if ($scope.message.length > 0) {
            var msg = {
              face: 'http://placekitten.com/g/50/50',
              who: user.name,
              text: $scope.message,
              date: new Date(),
            }
            $scope.messages.push(msg);
            socket.socket.emit('match:message', {
              id: chatId,
              message: msg,
            });
            $scope.message = '';
            _.defer(function() {
              $('md-list.scroll')[0].scrollTop = 10000000000;
            });
          }
        }
      });
    });
  });
