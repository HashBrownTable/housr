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

  });
