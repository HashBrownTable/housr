'use strict';

angular.module('housrApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('dislike', {
        url: '/dislike',
        templateUrl: 'app/like/like.html',
        controller: 'LikeCtrl'
      });
  });
