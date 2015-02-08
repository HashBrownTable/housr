'use strict';

angular.module('housrApp')
  .controller('MatchesCtrl', function ($scope, User, LikeDislike, $mdToast) {
    User.matches(function(matches) {
      $scope.matches = matches;
    });
    LikeDislike.get(function(data){

      var likeArr = [];
      var dislikeArr = [];

      data.forEach(function(ldData, i){
        if(ldData.type=='like'){
          likeArr.push(ldData[i]);
        }else if(ldData.type=='dislike'){
          dislikeArr.push(ldData[i]);
        }
      });

      $scope.numLikes = likeArr.length;
      $scope.numDislikes = dislikeArr.length;

      console.log($scope.numLikes);
      console.log($scope.numDislikes);

    });

    $scope.dislike = function(user) {
      LikeDislike.save({
        targetId: user._id,
        type: 'dislike'
      });
      $scope.hide(user);
    };
    $scope.like = function(user) {
      LikeDislike.save({
        targetId: user._id,
        type: 'like'
      }, function(data) {
      });

      $scope.hide(user);
    };
    $scope.hide = function(user) {
      $('md-card').eq(_.indexOf($scope.matches, user)).animate({
        opacity: 0
      }).slideUp();
    };
  });
