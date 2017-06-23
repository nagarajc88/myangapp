function Auth($http, LocalStorageService, API_URL)) {  
  return {
    isAuthenticated: function() {
      return LocalStorageService.get('auth_token');
    }
    // ...
}

Auth.$inject = ['$http', 'LocalService', 'API_URL', '$rootScope'];

angular.module("blog.auth").factory("Auth", Auth); 