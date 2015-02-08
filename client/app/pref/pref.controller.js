'use strict';

angular.module('housrApp')
  .controller('PrefCtrl', function ($scope, User, $location) {
    //$scope.message = 'Hello';


    $scope.saveStub = function() {
    	alert('Placeholder');
    };

    User.get(function(data) {
      console.log(data);
      $scope.user = data;
      if (data.preferedGender === 'female' || data.preferedGender == 'both') {
        $scope.user.prefFemale = true;
      }
      if (data.preferedGender === 'male' || data.preferedGender == 'both') {
        $scope.user.prefMale = true;
      }
    });

    $scope.check = function(){

      console.log("check called");

       User.get(function(data) {
            //debugger;
            alert(data.user);
            //document.write(data);
       });
    }

    $scope.save = function(){

      //Just added these for debugging
    	var firstName = $scope.user.firstName;
      var lastName = $scope.user.lastName;
	    var priceRange = [$scope.user.minPrice,$scope.user.maxPrice];
	    var ageRange = [$scope.user.agePref];
	    var preferedNumber = $scope.user.preferedNumber;
	    var preferedLocation = $scope.user.preferedLocation;
	    var preferedGender = "both";


	    if($scope.user.prefFemale == true)
	    {
			   preferedGender = "female";
	    }
	    	else if ($scope.user.prefMale == true)
      {
	    	 preferedGender = "male";
	    }


      var both = $scope.user.prefFemale && $scope.user.prefMale;
	    if (both || !both)
	    {
	    	preferedGender = "both";
	    };



      $scope.user.preferedGender = preferedGender;
      User.savePrefs($scope.user, function() {
        $location.path('/');
      });

    };


    // $scope.user = {
    // 	firstName: $scope.user.firstName

    // }

    //this is for debugging
    // User.get(function(data) {
    // 	debugger;
    // });


  });
