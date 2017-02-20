(function () {

  'use strict';

  angular
    .module('app', ['auth0.lock', 'angular-jwt', 'ui.router'])
    .config(config);

  config.$inject = ['$stateProvider', 'lockProvider', '$urlRouterProvider', '$locationProvider'];

  function config($stateProvider, lockProvider, $urlRouterProvider,$locationProvider) {

    $stateProvider
      .state('home', {
        url: '/home',
        controller: 'HomeController',
        templateUrl: 'components/home/home.html',
        controllerAs: 'vm'
      })
      .state('result', {
        url: '/result',
        controller: 'resultController',
        templateUrl: 'components/result/result.html',
        controllerAs: 'vm'
      })
      .state('login', {
        url: '/login',
        controller: 'LoginController',
        templateUrl: 'components/login/login.html',
        controllerAs: 'vm'
      });
 lockProvider.init({
      clientID: AUTH0_CLIENT_ID,
      domain: AUTH0_DOMAIN
    });


    // Configuration for angular-jwt
    // jwtOptionsProvider.config({
    //   tokenGetter: ['options', function (options) {
    //     if (options && options.url.substr(options.url.length - 5) == '.html') {
    //       return null;
    //     }
    //     return localStorage.getItem('id_token');
    //   }],
    //   whiteListedDomains: ['localhost:3000'],
    //   unauthenticatedRedirectPath: '/login'
    // });

  

    $urlRouterProvider.otherwise('/home');
     // Remove the ! from the hash so that
    // auth0.js can properly parse it
    $locationProvider.hashPrefix(''); 

   }
})();
