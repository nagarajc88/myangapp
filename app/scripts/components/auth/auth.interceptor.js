(function() {
  'use strict';

  function AuthInterceptor($q, $injector) {
    return {
      request: function(config) {
        var LocalService = $injector.get('LocalService');
        var token;

        if (LocalService.get('auth_token')) {
          token = LocalService.get('auth_token');
        }

        if (token) {
          config.headers.Authorization = 'Bearer ' + token;
        }

        return config;
      },
      responseError: function(response) {
        var LocalService = $injector.get('LocalService');
        // TODO: revisit for the 403
        if (response.status === 401 || response.status === 403) {
          LocalService.unset('auth_token');
          $injector.get('$state').go('login');
        }

        return $q.reject(response);
      }
    }
  }

  AuthInterceptor.$inject = ['$q', '$injector'];

  angular.module('blog.auth').factory('AuthInterceptor', AuthInterceptor);
})();
