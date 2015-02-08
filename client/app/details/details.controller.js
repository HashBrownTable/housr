'use strict';

angular.module('housrApp')
  .controller('DetailsCtrl', function ($scope, User, LikeDislike, $stateParams) {
    $scope.message = 'Hello';
    $scope.user = {
      name: 'Loading...',
    }

    $scope.Likes = [];
    $scope.Roomates = [];

    LikeDislike.get(function(data){
    		$scope.Likes = data;

    		_.filter(data, function(i) {
          return i.type == 'like';
        }).forEach(function(Likes,i){
    			User.get({id: Likes.targetId},function(x){
    				$scope.Likes[i].userData = x;
    				$scope.Likes[i].name = x.name;
    				$scope.Roomates.push(x.name);
            $scope.Roomates = _.uniq($scope.Roomates);
    				//console.log(x.name);
    				//console.log("scopeLikes1");
    				//console.log($scope.Likes);
    			});
    		});

    	//console.log("scopeLikes2");
    	//console.log($scope.Roomates);
    });


    User.get({id: $stateParams.id}, function(user) {
      $scope.user = user;

    });
  });
