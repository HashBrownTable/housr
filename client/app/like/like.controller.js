'use strict';
angular.module('housrApp')
  .controller('LikeCtrl', function ($scope, LikeDislike, User) {
    $scope.message = 'Hello';
    $scope.likes = [];
    LikeDislike.get(function(data){
      console.log(data);
      //$scope.likes = data;
      $scope.likes = data;
      $scope.likes.forEach(function(likes, i){
        User.get({id: likes.targetId}, function(userData){
          $scope.likes[i].userData = userData;
          $scope.likes[i].name = userData.name;
          console.log(userData);
        });
      })
    });
  });


