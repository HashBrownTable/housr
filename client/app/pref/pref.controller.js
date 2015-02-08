'use strict';

angular.module('housrApp')
  .controller('PrefCtrl', function ($scope, User) {
    //$scope.message = 'Hello';


    $scope.saveStub = function() {
    	alert('Placeholder');
    };

    User.get(function(data) {
      console.log(data);
      $scope.user = data;
      $scope.minPrice = data.priceRange.sort()[0];

      $scope.maxPrice = _.map(data.priceRange, function(n) 
        { 

         var len = data.priceRange.length, max = -Infinity;
              while (len--) {
              if (data.priceRange[len] > max) 
                {
                    max = data.priceRange[len];
                }
              }
              return max;
            }
          );

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

      alert("Thanks");
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
	    	else if ($scope.user.prefMale == true){
	    	preferedGender = "male";
	    }


	    if ($scope.user.prefFemale == true && $scope.user.prefMale == true)
	    {
	    	preferedGender = "both";
	    };


      // console.log(firstName);
      // console.log(lastName);
      // console.log(priceRange);
      // console.log(ageRange);
      // console.log(preferedNumber);
      // console.log(preferedLocation);
      // console.log(preferedGender);

      // var params = {
      // 	firstName,
      // 	lastName,
      // 	priceRange
      // }


      $scope.user.preferedGender = preferedGender;
      $scope.user.priceRange.push($scope.user.minPrice);
      $scope.user.priceRange.push($scope.user.maxPrice);

      User.savePrefs($scope.user);

    };


    // $scope.user = {
    // 	firstName: $scope.user.firstName

    // }

    //this is for debugging
    // User.get(function(data) {
    // 	debugger;
    // });


  });
