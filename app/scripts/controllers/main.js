'use strict';

/**
 * @ngdoc function
 * @name emailSignatureGeneratorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the emailSignatureGeneratorApp
 */
angular.module('emailSignatureGeneratorApp')
  .controller('MainCtrl', function($rootScope, $sce, $templateRequest, $compile, $scope, viewsPath) {
    //set some default values in the fields
    $rootScope.signatureData = {
      "name": "Your name",
      "title": "Your title",
      "phone": "Your phonenumber",
      "email": "Your Email",
      "skype": "Your Skypeid",
      "linkedin": "Your LinkedUrl ie. /in/yourid"
    };

    // Make sure that no bad URLs are fetched. You can omit this if your template URL is
    // not dynamic.
    var templateUrl = $sce.getTrustedResourceUrl(viewsPath +'signaturetemplate.html');
    $templateRequest(templateUrl).then(function(template) {
      $compile($("#result").html(template).contents())($scope);
    }, function(error) {
      // An error has occurred
      console.log('error', error);
    });

  });
