angular.module('OWMApp')
  .controller('CityCtrl', function ($scope, $routeParams) {
    $scope.city = $routeParams.city;
  });