angular.module('app').controller('LoginController', function ($location, AuthService, $scope) {
    $scope.user = {
        username: '',
        password: '',
        rememberMe: false
    };
    $scope.loginError = false;
    $scope.errorMessage = '';

    $scope.logIn = function() {
        AuthService.logIn($scope.user).then(function(data) {
            $location.path('/');
            $scope.loginError = false;
            console.log(data);
        }, function(err) {
            $scope.loginError = true;
            $scope.errorMessage = err.data;
            console.log(err);
        })
    }
});

