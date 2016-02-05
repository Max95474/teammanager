var User = require('../model/user');
var _ = require('underscore');

var sessions = [];

function generateSessionToken() {
    var rand = function() {
        return Math.random().toString(36).substr(2); // remove `0.`
    };

    var token = function() {
        return rand() + rand(); // to make it longer
    };

    return token();
}

function logIn(req, res) {
    var userData = req.body;

    if(userData.sessionToken) {
        if(_.find(sessions, function(session) {
                return session.token === userData.sessionToken;
            })) {
            res.json('Already logged in');
        }
    } else {
        var query = User.findOne({username: userData.username});
        query.exec((err, user) => {
            if(user) {
                user = user.toObject();
                if(userData.password === user.password) {
                    user.sessionToken = generateSessionToken();
                    sessions.push({
                        token: user.sessionToken,
                        id: user._id
                    });

                    delete user.password;
                    delete user._id;

                    console.log(sessions);

                    res.json(user);
                } else {
                    res.status(401).json('Bad credentials');
                }
            } else {
                res.status(404).json('User not found');
            }
        });
    }
}

function logOut(req, res) {
    var user = req.body;
    if(user.sessionToken) {
        for(var i = 0; i < sessions.length; i++) {
            if(sessions[i].token === user.sessionToken) {
                sessions.splice(i, 1);
                break;
            }
        }
    }
    console.log(sessions);
    res.json('Logged out');
}

function getUser(req, res) {

}

module.exports = {
    logIn,
    logOut,
    getUser
};
