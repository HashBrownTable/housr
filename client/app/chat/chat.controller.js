'use strict';

angular.module('housrApp')
  .controller('ChatCtrl', function ($scope, $rootScope, User, $stateParams) {
    var chatId = $stateParams.id;
    User.get(function(data) {
      $scope.messages = [{
        face: 'http://placekitten.com/g/50/50',
        who: data.name,
        text: 'Hello there!'
      }];
    });
    $scope.send = function() {
      if ($scope.message.length > 0) {
        $scope.messages.push({
          face: 'http://placekitten.com/g/50/50',
          who: data.name,
          text: $scope.message
        });
        $scope.message = '';
        _.defer(function() {
          $('md-list.scroll')[0].scrollTop = 10000000000;
        });
      }
    }
  });
