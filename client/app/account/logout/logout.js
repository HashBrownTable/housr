'use strict';

angular.module('housrApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('logout', {
        url: '/logout',
        templateUrl: 'app/account/logout/logout.html',
        controller: 'LogoutCtrl'
      });
  });
