'use strict';

angular.module('housrApp')
  .controller('PrefCtrl', function($scope, User, $location) {
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

    $scope.check = function() {
      console.log('check called');
       User.get(function(data) {
          //debugger;
          //alert(data.user);
          //document.write(data);
       });
    };

    $scope.save = function() {

	    var preferedGender = 'both';

	    if ($scope.user.prefFemale) {
			   preferedGender = 'female';
	    } else if ($scope.user.prefMale) {
	    	 preferedGender = 'male';
	    }


      var both = $scope.user.prefFemale && $scope.user.prefMale;
	    if (both || !both) {
	    	preferedGender = 'both';
	    }

      $scope.user.preferedGender = preferedGender;
      User.savePrefs($scope.user, function() {
        $location.path('/');
      });

    };

    var handleFileSelect=function(evt) {
      var file=evt.currentTarget.files[0];
      var reader = new FileReader();
      reader.onload = function (evt) {
        $scope.$apply(function($scope){
          $scope.myImage=evt.target.result;
        });
      };
      reader.readAsDataURL(file);
      reader.onload = function(e) {
        var result = e.target.result;
        $scope.user.picture = result;
        //debugger;
      }
    };
    angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);


    // $scope.user = {
    // 	firstName: $scope.user.firstName

    // }

    //this is for debugging
    // User.get(function(data) {
    // 	debugger;
    // });


  });
