angular.module('app').controller('MainController', function($location, AuthService) {
    var vm = this;
    vm.isLoggedIn = false;

    function activate() {
        AuthService.registerOnUserChangedEvent(function(data) {
            vm.isLoggedIn = data.isLoggedIn;
        });
        vm.isLoggedIn = AuthService.isLoggedIn();
    }

    vm.toHome = function() {
        $location.path('/');
    };

    vm.toLogin = function() {
        $location.path('/login');
    };

    vm.logOut = function() {
        AuthService.logOut().then(function(data) {
            console.log(data);
        })
    };

    activate();
});