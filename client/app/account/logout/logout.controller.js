'use strict';

angular.module('housrApp')
  .controller('LogoutCtrl', function ($scope, $location, Auth) {
    $scope.message = 'Logging Out';
    Auth.logout();
    $location.path('/');
  });
