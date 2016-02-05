angular.module('app').controller('MainController', function($location, AuthService, DocumentService) {
    var vm = this;
    vm.isLoggedIn = false;

    function activate() {
        AuthService.registerOnUserChangedEvent(function(data) {
            vm.isLoggedIn = data.isLoggedIn;
        });
        vm.isLoggedIn = AuthService.isLoggedIn();

        //TEST
        var Document = DocumentService.Document();
        var myDocument = new Document({data: 'some data'});
        myDocument.$save(function() {
            console.log('Saved!');
        });
        myDocument.$get({id: 1}).then(function(document) {
            console.log('GET', document);
        });
        myDocument.$update({id: 1}).then(function(document) {
            console.log('PUT', document);
        });
        myDocument.$delete({id: 1}).then(function(document) {
            console.log('DELETE', document);
        })
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