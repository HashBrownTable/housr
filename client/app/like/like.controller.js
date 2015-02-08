'use strict';
angular.module('housrApp')
  .controller('LikeCtrl', function ($scope, LikeDislike, User, $location) {
    $scope.message = 'Hello';
    $scope.likes = [];
    $scope.likePeople= [];
    
    $scope.dislike2 = function(){
      alert('y');
    };

    $scope.dislike = function(){
      alert('x');
    };

    function populate(people, i){
        User.get({id: people.targetId}, function(userData){
          if(userData)
          {
            $scope.likePeople[i].userData = userData;
            _.each(userData, function(v,k){
              $scope.likePeople[i][k] = v;
            });
          }
          console.log("populate", $scope.likePeople);
        });
    }

    var isLike = $location.path() === '/like'

    LikeDislike.get(function(data){
      console.log("like controller debug");
      console.log(data);
      data.forEach(function(x){
          if(x.type === "like" && isLike){
            console.log("like");
            $scope.likePeople.push(x);
          }else if(x.type === 'dislike' && !isLike){
            console.log("dislike");
            $scope.likePeople.push(x);
          }
      });

      console.log("like peole:" + $scope.likePeople.length);
      //console.log("dislike peole:" + $scope.dislikePeople.length);

      //$scope.dislikePeople.forEach(populate);
      $scope.likePeople.forEach(populate);

      // $scope.likePeople.forEach(populate($scope.dislikePeople, 0));
     
      //console.log("$scope.dislikePeople");
      //console.log($scope.dislikePeople);
      console.log("$scope.likePeople");
      console.log($scope.likePeople);

    });
  });


