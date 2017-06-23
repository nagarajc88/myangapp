(function() {
'use strict';

/**
 * @ngdoc function
 * @name myangappAppApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the myangappAppApp
 */
angular.module('myangappApp')
  .controller('UserCtrl', function ($scope,myService) {
     
	  $scope.users = myService.all();

  });
})();