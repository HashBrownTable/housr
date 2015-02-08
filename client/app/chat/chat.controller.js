'use strict';

angular.module('housrApp')
  .controller('ChatCtrl', function($scope, $rootScope, User, $stateParams, Chats, socket, $mdBottomSheet, $location) {
    var chatId = $stateParams.id;
    $scope.userDetails = {};
    $rootScope.userDetails = $scope.userDetails;
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
      var u = user;
      Chats.get(function(chats) {
        _.each(chats.chats, function(chat) {
          _.each(chat.people, function(person) {
            if (person == u._id) {
              return;
            }
            if (!$scope.userDetails[person]) {
              User.get({id: person}, function(user) {
                $rootScope.items = _.uniq($rootScope.items.concat([{
                  name: user.name,
                  '_id': user._id,
                  picture: user.picture
                }]), function(i) { return i.name });
              });
            } else {
              var user = $scope.userDetails[person];
              $rootScope.items = _.uniq($rootScope.items.concat([{
                name: user.name,
                picture: user.picture
              }]), function(i) { return i.name });
            }
          });
        });
      });
    });
    $rootScope.items = [];
    $scope.showGridBottomSheet = function($event) {
      $scope.alert = '';
      $mdBottomSheet.show({
        templateUrl: 'app/chat/bottom-sheet.html',
        controller: 'GridBottomSheetCtrl',
        targetEvent: $event
      }).then(function(clickedItem) {
        var params = { id: chatId, targetId: clickedItem._id }
        console.log('chat', params)
        Chats.add(params, function(cb) {
          $location.path('/chat/'+cb._id);
        });
      });
    };
  })
  .controller('GridBottomSheetCtrl', function($scope, $rootScope, $mdBottomSheet) {
    $scope.items = /*[
      { name: 'Hangout', icon: 'hangout' },
      { name: 'Mail', icon: 'mail' },
      { name: 'Message', icon: 'message' },
      { name: 'Copy', icon: 'copy' },
      { name: 'Facebook', icon: 'facebook' },
      { name: 'Twitter', icon: 'twitter' },
    ];*/
    $rootScope.items;
    $scope.listItemClick = function($index) {
      var clickedItem = $scope.items[$index];

      $mdBottomSheet.hide(clickedItem);
    };
  });
