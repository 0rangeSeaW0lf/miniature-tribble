'use strict';

angular.module('OWMApp', ['ngAnimate', 'ngSanitize', 'ngRoute', 'mgcrea.ngStrap'])
  .value('owmCities',
        ['Amsterdam', 'Berlin', 'London', 'Milan', 'Paris'])
  .config(function ($routeProvider, $locationProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl as home'
      })
      .when('/cities/:city', {
        templateUrl: 'app/city/city.html',
        controller: 'CityCtrl as cities',
        resolve: {
          city: function(owmCities, $route, $location){
            var city = $route.current.params.city;
            if(owmCities.indexOf(city) == -1 ) {
                $location.path('/error');
                return;
            }
            return city;
          }
        }
      })
      .when('/error', {
        templateUrl: '404.html'
      });
  })
  .run(function($rootScope, $location, $timeout) {
    $rootScope.$on('$routeChangeError', function() {
        $location.path('/error');
    });
    $rootScope.$on('$routeChangeStart', function() {
        $rootScope.isLoading = true;
        console.log('Transition starts');
    });
    $rootScope.$on('$routeChangeSuccess', function() {
      $timeout(function() {
        $rootScope.isLoading = false;
      }, 1000);
    });
  });