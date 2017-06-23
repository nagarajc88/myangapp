(function() {
'use strict';

/**
 * @ngdoc service
 * @name myangappAppApp.myService
 * @description
 * # myService
 * Service in the myangappAppApp.
 */
angular.module('myangappApp')
  .service('myService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
     var users = ["Peter", "Daniel", "Nina"];
	   return { 

	   	all: function() {
	      return users;
	    },

	    first: function() {
	      return users[0];
	    }
	    
	  };

  });
})();