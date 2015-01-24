'use strict';

angular.module('owmapp')
  .controller('CityCtrl', function ($scope, $stateParams) {
      $scope.city = $stateParams.city;
  });
