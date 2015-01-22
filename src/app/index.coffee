angular.module "workspace", ['ngAnimate', 'ngSanitize', 'ui.router', 'mgcrea.ngStrap']
  .config ($stateProvider, $urlRouterProvider) ->
    $stateProvider
      .state "home",
        url: "/",
        templateUrl: "app/home/home.html",
        controller: "HomeCtrl"

    $urlRouterProvider.otherwise '/'