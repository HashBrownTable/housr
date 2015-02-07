'use strict';

angular.module('housrApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('matches', {
        url: '/matches',
        templateUrl: 'app/matches/matches.html',
        controller: 'MatchesCtrl'
      });
  });