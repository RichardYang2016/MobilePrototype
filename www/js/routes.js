angular
  .module('app')
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');


    $stateProvider
      .state('app', {
        abstract: true,
        templateUrl: 'views/common/layouts/full.html'
      })
      .state('app.home', {
        url: '/home',
        templateUrl: 'views/home/home.html',
        controller: "homeCtrl"
      })
      .state('app.poapp', {
        url: '/poapp',
        templateUrl: 'views/poapp/master.html',
        controller: "poAppCtrl"
      })
      .state('app.poappdetail/:poid', {
        url: '/poapp/:poid',
        templateUrl: 'views/poapp/detail.html',
        controller: "poAppCtrl"
      })
  }]);