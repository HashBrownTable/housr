// 'use strict';

// angular.module('housrApp')
  // .controller('MapsCtrl', function ($scope) {
    // $scope.message = 'Hello';
  // });
//Data
var cities = [
    {
        city : 'Toronto',
        desc : 'This is the best city in the world!',
        lat : 43.7000,
        long : -79.4000
    },
    {
        city : 'New York',
        desc : 'This city is aiiiiite!',
        lat : 40.6700,
        long : -73.9400
    },
    {
        city : 'Chicago',
        desc : 'This is the second best city in the world!',
        lat : 41.8819,
        long : -87.6278
    },
    {
        city : 'Los Angeles',
        desc : 'This city is live!',
        lat : 34.0500,
        long : -118.2500
    },
    {
        city : 'Las Vegas',
        desc : 'Sin City...\'nuff said!',
        lat : 36.0800,
        long : -115.1522
    }
];

//Angular App Module and Controller
angular.module('housrApp')
.controller('MapsCtrl', function ($scope, Maps, User) {
  $scope.beds = 1;
  $scope.rangeLower = 0;
  $scope.rangeHigher = 10000;
  $scope.location = 'Seattle'
  User.get(function(u) {
    $scope.beds = u.preferedNumber;
    $scope.rangeLower = parseInt(u.priceRange[0]) * u.preferedNumber;
    $scope.rangeHigher = parseInt(u.priceRange[1]) * u.preferedNumber;
    $scope.location = u.preferedLocation;
  });

  /*
    var mapOptions = {
        zoom: 11,
        center: new google.maps.LatLng(47.6097, -122.3331),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];

    var infoWindow = new google.maps.InfoWindow();

    Maps.properties(function(properties) {
      console.log(properties.map.properties[0]);
      _.each(properties.map.properties, function(prop) {
        var lat = prop[1] /1000000.0;
        var long = prop[2] /1000000.0;
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(lat, long),
            title: prop[3]
        });
        marker.content = '<a href="http://www.zillow.com/homes/for_rent/house,apartment_condo,duplex,townhouse_type/' + prop[0] + '_zpid/"/>View on Zillow</a>';

        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
            infoWindow.open($scope.map, marker);
        });

        $scope.markers.push(marker);

      });
    });

    $scope.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    }
    */

});
