'use strict';

angular.module('housrApp')
  .directive('likeDislikeButtons', function (LikeDislike) {
    return {
      templateUrl: 'app/like-dislike-buttons/like-dislike-buttons.html',
      restrict: 'EA',
      scope: {
        user: '=',
      },
      link: function ($scope, element, attrs) {
        console.log('foo', attrs, $scope.user);

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
          element.parents('md-card').animate({
            opacity: 0
          }).slideUp();
        };
      }
    };
  });
