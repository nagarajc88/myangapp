(function() {
'use strict';

/**
 * @ngdoc function
 * @name myangappApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the myangappApp
 */
angular.module('myangappApp')
  .controller('LoginCtrl', function ($scope,$rootScope,authenticationService) {
    // userLogin
    $rootScope.title = 'Login | API';

        /**
         * $scope variables
         */
        $scope.formData = {};
        $scope.inputType = 'password';
        $scope.formData.remember = false;

         /**
         * Show/hide password
         */
        $scope.hideShowPassword = function() {
            if ($scope.inputType === 'password') {
                $scope.inputType = 'text';
            } else {
                $scope.inputType = 'password';
            }
        };

        /**
         * Remember me
         */
        // if (!$.isEmptyObject($rootScope.remember_user)) {
        //     $scope.formData.username = $rootScope.remember_user;
        // }

        /**
         * Login form
         */
        $scope.login = function() {
            $scope.submitted = true;
            $scope.formSuccess = false;

            if ($scope.loginForm.$valid) {
                $scope.loginConfirm();
                // if ($rootScope.config.environmentLabel == "Beta") {
                //     if ($cookies.getObject('beta_accepted') == true) {
                //         $scope.loginConfirm();
                //     } else {
                //         $scope.openBetaWarningModal();
                //     }
                // } else {
                //     $scope.loginConfirm();
                // }
            }
        };

        /**
         * Login confirm
         */
        $scope.loginConfirm = function() {
            authenticationService.login(
                $scope.formData.email,
                $scope.formData.password,
                function() {
                    //Success

                    // $state.go('devices', null, { reload: true });
                },
                function() {
                    //Failure
                }
            );
            
        };

        /**
         * Open beta warning modal
         */
        $scope.openBetaWarningModal = function () {
            var modalInstance = $uibModal.open({
                templateUrl: 'angular/modals/beta-warning.view.html',
                controller: 'BetaWarningModalController'
            });

            modalInstance.result.then(function () {
                $cookies.putObject('beta_accepted', true);

                $scope.loginConfirm();
            });
        };


  });
})();