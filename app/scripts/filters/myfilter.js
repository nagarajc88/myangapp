'use strict';

/**
 * @ngdoc filter
 * @name myangappAppApp.filter:myFilter
 * @function
 * @description
 * # myFilter
 * Filter in the myangappAppApp.
 */
angular.module('myangappAppApp')
  .filter('myFilter', function () {
    return function (input) {
      return 'myFilter filter: ' + input;
    };
  });
