angular.module('app').controller('LoginController', function ($location, AuthService) {
    var vm = this;
    vm.user = {
        username: '',
        password: '',
        rememberMe: false
    };
    vm.loginError = false;
    vm.errorMessage = '';

    vm.logIn = function() {
        AuthService.logIn(vm.user).then(function(data) {
            $location.path('/');
            vm.loginError = false;
            console.log(data);
        }, function(err) {
            vm.loginError = true;
            vm.errorMessage = err.data;
            console.log(err);
        })
    }
});

