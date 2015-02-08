'use strict';

angular.module('housrApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('dislike', {
        url: '/dislike',
        templateUrl: 'app/dislike/dislike.html',
        controller: 'DislikeCtrl'
      });
  });
