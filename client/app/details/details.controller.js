'use strict';

angular.module('housrApp')
  .controller('DetailsCtrl', function ($scope, User, $stateParams) {
    $scope.message = 'Hello';
    $scope.user = {
      name: 'Loading...',
    }
    User.get({id: $stateParams.id}, function(user) {
      $scope.user = user;
    });
  });
