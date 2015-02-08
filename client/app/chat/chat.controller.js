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
        $scope.scrollBottom = function() {
          _.defer(function() {
            $('md-list.scroll')[0].scrollTop = 10000000000;
          });
        };
        $scope.scrollBottom();
        socket.socket.on('match:'+chatId+':save', function(messages) {
          $scope.messages = messages;
          $scope.scrollBottom();
          $scope.$digest();
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
            $scope.scrollBottom();
          }
        }
      });
    });
  });
