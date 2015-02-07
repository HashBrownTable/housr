'use strict';

angular.module('housrApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('details', {
        url: '/details/:id',
        templateUrl: 'app/details/details.html',
        controller: 'DetailsCtrl'
      });
  });
