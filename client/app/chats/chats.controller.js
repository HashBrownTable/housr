'use strict';

angular.module('housrApp')
  .controller('ChatsCtrl', function ($scope, Chats, User) {

    var currUserId = 'abc';
    var recipientUserId = 'abc';

    $scope.message = 'Hello';

    Chats.get(function(data) {
      $scope.chats = data.chats;
      console.log($scope.chats);
      console.log(data);


      User.get(function(user){
        currUserId = user._id;
        console.log(currUserId);
        $scope.chats.forEach(function(chat, i){
          chat.people.forEach(function(personId){
            if(personId!==currUserId){
              recipientUserId = personId;
              console.log(recipientUserId);
              User.get({id: recipientUserId}, function(userData){
                $scope.chats[i].names = userData.name;
              });
            }
          });
        });
      });
    });
  });
