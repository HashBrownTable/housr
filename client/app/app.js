'use strict';

angular.module('housrApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ngAnimate',
  'ngAria',
  'ngImgCrop',
  'ngMaterial'
])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $mdThemingProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('pink');

  })
  .factory('authInterceptor', function($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function(config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {
        if (response.status === 401) {
          $location.path('/login');
          // remove any stale tokens
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  })

  .run(function($rootScope, $location, Auth) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function(event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
      console.log(next.url);
      $rootScope.showNav = true;
      if ((next.url === '/login') || (next.url === '/signup')) {
        console.log('showNav');
        $rootScope.showNav = false;
      }
      if (next.url === '/') {
        $rootScope.data.navIndex = 0;
      } else if (next.url.match('/chats')) {
        $rootScope.data.navIndex = 1;
      } else if (next.url.match('/landlords')) {
        $rootScope.data.navIndex = 2;
      } else {
        $rootScope.data.navIndex = 3;
      }
    });
  });

angular.module('housrApp').controller('NavCtrl', function($scope, $rootScope, $mdSidenav, User, $location) {
    User.get(function(data) {

      console.log(data);
      $scope.me = data;
      $scope.toggleLeft = function() {
        console.log('sidenav toggle');
        $mdSidenav('left').toggle();
      };

    });
    $scope.data = {
      navIndex: 3
    };
    $rootScope.data = $scope.data;
    $('body').on('click', 'md-tab', function() {
      var i = $scope.data.navIndex;
      $location.path($('md-tab').eq(i).attr('ng-href'));
    });
  });

angular.module('housrApp').controller('SidenavCtrl', function($scope, $rootScope, $mdSidenav) {
    $scope.close = function() {
      console.log('sidenav toggle within sidenav');
      $mdSidenav('left').close();
    };
  });
