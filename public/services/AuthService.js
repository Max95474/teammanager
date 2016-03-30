angular.module('app').factory('AuthService', function ($http, $q, $cookies) {
    var user = {};
    var loggedIn = false;
    var userEventListeners = [];

    function acitvate() {
        var userData = $cookies.getObject('user');
        if(userData) {
            user = userData;
            loggedIn = true;
            notifyUserChangedEventListeners(user);
        }

        window.onbeforeunload = function() {
            if(!userData.rememberMe) $cookies.remove('user');
        }
    }

    acitvate();

    return {
        logIn,
        logOut,
        isLoggedIn,
        registerOnUserChangedEvent,
        notifyUserChangedEventListeners
    };

    function registerOnUserChangedEvent(callback) {
        if(userEventListeners.indexOf(callback) == -1) {
            userEventListeners.push(callback);
        }
    }

    function notifyUserChangedEventListeners(data) {
        userEventListeners.forEach(function(callback) {
            data.isLoggedIn = loggedIn;
            callback(data);
        })
    }

    function isLoggedIn() {
        return loggedIn;
    }

    function logIn(userData) {
        return $q(function(resolve, reject) {
            if(user.sessionToken) userData.sessionToken = user.sessionToken;
            $http.post('/api/login', userData)
                .then(function(data) {
                    user = data.data;
                    loggedIn = true;
                    //if(userData.rememberMe)
                    $cookies.putObject('user', user);
                    notifyUserChangedEventListeners(user);
                    resolve(user);
                },function(err) {
                    loggedIn = false;
                    reject(err);
                });
        })
    }

    function logOut() {
        return $q(function(resolve, reject) {
            $http.post('/api/logout', user)
                .then(function(data) {
                    user = {};
                    loggedIn = false;
                    $cookies.remove('user');
                    notifyUserChangedEventListeners(user);
                    resolve(data.data)
                }, function(err) {
                    reject(err);
                })
        })
    }
});