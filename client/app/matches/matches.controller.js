'use strict';

angular.module('housrApp')
  .controller('MatchesCtrl', function ($scope, User) {
    User.matches(function(matches) {
      $scope.matches = matches;
    });
    $scope.hide = function(user) {
    }
    $scope.show = function(user) {
    }
  });
