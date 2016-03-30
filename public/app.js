angular.module('app',
    [
        'ngRoute',
        'ngCookies',
        'ngResource',
        'ui.bootstrap',
        'ui.bootstrap.modal'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'pages/home.html',
                controller: 'HomeController',
                controllerAs: 'home'
            })
            .when('/login', {
                templateUrl: 'pages/login.html'
            })
            .when('/documents', {
                templateUrl: 'pages/documents.html'
            })
            .when('/document', {
                templateUrl: 'pages/document.html'
            })
    });