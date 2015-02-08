'use strict';

angular.module('housrApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('maps', {
        url: '/landlords',
        templateUrl: 'app/maps/maps.html',
        controller: 'MapsCtrl'
      });
  });
