(function() {
'use strict';

/**
 * @ngdoc service
 * @name myangappApp.authenticationService
 * @description
 * # authenticationService
 * Service in the myangappApp.
 */
angular.module('myangappApp')
  .service('authenticationService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
      login: function (email, password) {
            $http({
                method: 'POST',
                url: 'http://localhost:8000/api/authenticate',
                dataType:'json',
                data: {
                        email: email,
                        password: password
                }
            }).then(function successCallback(response) {
                  window.location.href="/#!/about"
                  return response.token;
            });
        }

    }

  });
})();