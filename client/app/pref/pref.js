'use strict';

angular.module('housrApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('pref', {
        url: '/pref',
        templateUrl: 'app/pref/pref.html',
        controller: 'PrefCtrl'
      });
  });