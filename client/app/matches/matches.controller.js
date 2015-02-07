'use strict';

angular.module('housrApp')
  .controller('MatchesCtrl', function ($scope) {
    $scope.message = 'Hello';
    $scope.todos =
    [
      {
        face : '/assets/images/yeoman.png',
        what: 'Looking for roommate',
        who: 'Min Li Chan',
        age: '25',
        price_range: '500-1000',
        gender_pref: 'Doesn\'t Matter',
        num_roommates: '3',
        notes: "This is something about me"
      }];
  });
