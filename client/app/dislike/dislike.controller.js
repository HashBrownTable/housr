'use strict';
angular.module('housrApp')

  .controller('DislikeCtrl', function($scope, LikeDislike, User) {
    $scope.message = 'Hello';

    $scope.dislikes = [];


    LikeDislike.get(function(data) {
      console.log('dislike debug');
      console.log(data);
      //$scope.likes = data;
      $scope.dislikes = data;
      $scope.dislikes.forEach(function(dislikes, i) {
        User.get({id: dislikes.targetId}, function(userData) {
          $scope.dislikes[i].userData = userData;
          $scope.dislikes[i].name = userData.name;
          console.log(userData);
        });
      });
    });

    $scope.dislike = function() {
        alert('hi world');
    };

    $scope.like = function(){
        alert("hi world");
    };


    $scope.saveStub = function() {
      alert('Placeholder');
    };

  });


