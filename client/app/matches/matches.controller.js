'use strict';

angular.module('housrApp')
  .controller('MatchesCtrl', function ($scope, User) {
    User.matches(function(matches) {
      $scope.matches = matches;
    });
  });
