'use strict';

/**
 * @ngdoc directive
 * @name emailSignatureGeneratorApp.directive:result
 * @description
 * # result
 */
angular.module('emailSignatureGeneratorApp')
  .directive('signaturetemplate', function (viewsPath) {
    return {
      templateUrl: viewsPath + 'signaturetemplate.html',
      restrict: 'E'
    };
  });
