'use strict';

angular.module('housrApp')
  .controller('MatchesCtrl', function ($scope, User, LikeDislike, $mdToast) {
    User.matches(function(matches) {
      $scope.matches = matches;
    });
    $scope.dislike = function(user) {
      LikeDislike.save({
        targetId: user._id,
        type: 'dislike',
      });
      $scope.hide(user);
    }
    $scope.like = function(user) {
      LikeDislike.save({
        targetId: user._id,
        type: 'like',
      }, function(data) {
        if (data.msg) {
          $mdToast.show($mdToast.simple().content(data.msg));
        }
      });

      $scope.hide(user);
    }
    $scope.hide = function(user) {
      $('md-card').eq(_.indexOf($scope.matches, user)).animate({
        opacity: 0,
      }).slideUp();
    }
  });
