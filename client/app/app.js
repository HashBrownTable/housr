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

    //$locationProvider.html5Mode(true).
    //  hashPrefix('!');
    $httpProvider.interceptors.push('authInterceptor');
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('pink');

  })
  .factory('authInterceptor', function($rootScope, $q, $cookieStore, $location) {
    // Use housr.fn.lc if static file
    $rootScope.domain = '';
    if (window.location.protocol === 'file:') {
      $rootScope.domain = 'http://housr.fn.lc';
    }

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

      $rootScope.matchesNav = 'matches';
      if (next.url === '/matches'){
        $rootScope.matchesNav = 'matches';
      }else if(next.url === '/like'){
        $rootScope.matchesNav = 'like';
      }else if(next.url === '/dislike'){
        $rootScope.matchesNav = 'dislike';
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

angular.module('housrApp').controller('NavCtrl', function($scope, $rootScope, $mdSidenav, User, $location, socket, $mdToast) {
    var updateMe = function(url){
      if (url !== '#/signup' && $location.hash() !== '/signup') {
        User.get(function(data) {
          console.log(data);
          $scope.me = data;
          $scope.toggleLeft = function() {
            console.log('sidenav toggle');
            $mdSidenav('left').toggle();
          };
        });
      }
    };
    updateMe();
    $rootScope.$on('$stateChangeStart', function(event, next, prev) {
      updateMe(next.url);
    });
    $scope.data = {
      navIndex: 3,
      notificationCount: 0
    };
    socket.socket.on('notification', function(notification) {
      if (_.include(notification.targets, $scope.me._id) && !$location.hash().match('/chat/'+notification.id) ) {
        $scope.data.notificationCount += 1;
        $mdToast.show($mdToast.simple().content(notification.msg));
      }
    });
    $rootScope.data = $scope.data;
    $('body').on('click', 'md-tab', function() {
      var i = $scope.data.navIndex;
      if (i === 1) {
        $scope.data.notificationCount = 0;
      }
      $location.path($('md-tab').eq(i).attr('ng-href'));
    });
  });

angular.module('housrApp').controller('SidenavCtrl', function($scope, $rootScope, $mdSidenav) {
    $scope.close = function() {
      console.log('sidenav toggle within sidenav');
      $mdSidenav('left').close();
    };
  });
