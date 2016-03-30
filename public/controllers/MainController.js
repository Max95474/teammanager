angular.module('app').controller('MainController', function($location, AuthService, DocumentService) {
    var vm = this;
    vm.isLoggedIn = false;

    function activate() {
        vm.isLoggedIn = AuthService.isLoggedIn();
        AuthService.registerOnUserChangedEvent(function(data) {
            vm.isLoggedIn = data.isLoggedIn;
        });

        if(!vm.isLoggedIn) {
            $location.path('/login');
        }
    }

    vm.toHome = function() {
        $location.path('/');
    };

    vm.toLogin = function() {
        $location.path('/login');
    };

    vm.toDocuments = function() {
        $location.path('/documents');
    };

    vm.logOut = function() {
        AuthService.logOut().then(function(data) {
            $location.path('/');
        })
    };

    activate();
});