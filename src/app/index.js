'use strict';

angular.module('owmapp', ['ngAnimate', 'ngSanitize', 'ui.router', 'mgcrea.ngStrap'])
  .value('owmCities',
        ['Amsterdam', 'Paris', 'London', 'Berlin'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl'})
      .state('city',{
        url: '/cities/:city',
        templateUrl: 'app/city/city.html',
        controller: 'CityCtrl',
        resolve:{
          city: function(owmCities, $stateParams, $state){
            var city = $stateParams.city;
            if(owmCities.indexOf(city) == -1 ) {
              console.log("Doesn't exist");
              $state.go('error');
              return;
          }
            return city;
          }
        }
      })
      .state('error',{
        url: '/error',
        templateUrl: 'app/error.html'
      });

    $urlRouterProvider.otherwise('/');
  });
