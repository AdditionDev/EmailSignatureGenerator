'use strict';

/**
 * @ngdoc overview
 * @name emailSignatureGeneratorApp
 * @description
 * # emailSignatureGeneratorApp
 *
 * Main module of the application.
 */
angular
  .module('emailSignatureGeneratorApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, viewsPath) {
    $routeProvider
      .when('/', {
        templateUrl: viewsPath +'main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
