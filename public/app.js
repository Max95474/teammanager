angular.module('app',
    [
        'ngRoute',
        'ngCookies',
        'ngResource'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'pages/home.html',
                controller: 'HomeController',
                controllerAs: 'home'
            })
            .when('/login', {
                templateUrl: 'pages/login.html',
                controller: 'LoginController',
                controllerAs: 'login'
            })
    });