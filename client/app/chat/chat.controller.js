'use strict';

angular.module('housrApp')
  .controller('ChatCtrl', function($scope, $rootScope, User, $stateParams, Chats, socket) {
    var chatId = $stateParams.id;
    $scope.userDetails = {};
    User.get(function(user) {
      Chats.get({id: chatId}, function(chat) {
        _.each(chat.people, function(e) {
          User.get({id: e}, function(userDet) {
            $scope.userDetails[e] = userDet;
            $scope.people = _.pluck(_.values($scope.userDetails), 'name').join(' and ');
          });
        });
        $scope.moment = moment;
        // TODO: STOP POLLING
        var interval = setInterval(function() {
          Chats.get({id: chatId}, function(chat) {
            $scope.messages = chat.messages;
            $scope.scrollBottom();
          });
        }, 500);
        $scope.$on('$destroy', function() {
          clearInterval(interval);
        });
        $scope.messages = chat.messages;
        $scope.scrollBottom = function() {
          _.defer(function() {
            $('md-list.scroll')[0].scrollTop = 10000000000;
          });
        };
        $scope.scrollBottom();
        socket.socket.on('match:' + chatId + ':save', function(messages) {
          $scope.messages = messages;
          $scope.scrollBottom();
          $scope.$digest();
        });
        $scope.send = function() {
          if ($scope.message.length > 0) {
            var msg = {
              id: user._id,
              text: $scope.message,
              date: new Date()
            };
            $scope.messages.push(msg);
            socket.socket.emit('match:message', {
              id: chatId,
              message: msg
            });
            $scope.message = '';
            $scope.scrollBottom();
          }
        };
      });
    });
  });
