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
        var myDocument = new Document({
            name: 'New document',
            content: 'Document content'
        });

        myDocument.$save(function(document) {
            console.log('Saved!', document);
        });
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
            console.log(data);
        })
    };

    activate();
});