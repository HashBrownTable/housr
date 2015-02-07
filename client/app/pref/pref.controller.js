'use strict';

angular.module('housrApp')
  .controller('PrefCtrl', function ($scope, User) {
    $scope.message = 'Hello';
    

    $scope.saveStub = function() {
    	alert('Placeholder');
    };

    $scope.alert = function(){
    	//alert ("what is that?");
    	var toLog = "Hello world";

    	var firstName = $scope.user.firstName;
		var lastName = $scope.user.lastName;

	    var priceRange = [$scope.user.minPrice,$scope.user.maxPrice];
	    var ageRange = [$scope.user.agePref];
	    var preferedNumber = $scope.user.roomates;
	    var preferedLocation = $scope.userpreferedLocation;

	    var preferedGender = female;
	 //    if($scope.prefFemale)
	 //    preferedGender = female;
		// else if ($scope.prefMale)
		// preferedGender = male;
		// else{
		// 	preferedGender = both;
		// }

		console.log(firstName);
		console.log(lastName);
		console.log(priceRange);
		console.log(ageRange);
		console.log(preferedNumber);
		console.log(preferedLocation);

    };


    // $scope.user = {
    // 	firstName: $scope.user.firstName

    // }

    //this is for debugging
    // User.get(function(data) {
    // 	debugger;
    // });


  });
