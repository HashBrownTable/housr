'use strict';

angular.module('housrApp')
  .controller('PrefCtrl', function ($scope, User) {
    $scope.message = 'Hello';
    $scope.save = function() {
    	alert('Hello, ' + $scope.user.firstName);

    }
    $scope.user = {
    	firstName: $scope.user.firstName;

    }

    //this is for debugging
    User.get(function(data) {
    	debugger;
    });


  });
