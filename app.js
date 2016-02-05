var express = require('express');
var bodyParser = require('body-parser');

/**
 * API
 * */
var authApi       = require('./server/controllers/auth');
var userApi       = require('./server/controllers/user');
var meetingApi    = require('./server/controllers/meeting');
var documentApi   = require('./server/controllers/document');
var repositoryApi = require('./server/controllers/repository');
var teamApi       = require('./server/controllers/team');

var app = express();

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/teammanager");

var apiUrl = '/api';

var port = 4000;
if (process.env.NODE_ENV === "production") {
    port = 80;
}

app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/public'));

app.use( bodyParser.urlencoded({extended: true}));
app.use( bodyParser.text() );
app.use( bodyParser.raw() );
app.use( bodyParser.json() );

//Auth
app.post(apiUrl + '/login', authApi.logIn);
app.post(apiUrl + '/logout', authApi.logOut);

//User
app.get(apiUrl + '/user', userApi.getUser);
app.post(apiUrl + '/user', userApi.addUser);
app.put(apiUrl + '/user', userApi.updateUser);
app.delete(apiUrl + '/user', userApi.deleteUser);

//Meeting
app.get(apiUrl + '/meeting', meetingApi.getMeetings);
app.get(apiUrl + '/meeting/:id', meetingApi.getMeeting);
app.post(apiUrl + '/meeting', meetingApi.addMeeting);
app.put(apiUrl + '/meeting/:id', meetingApi.updateMeeting);
app.delete(apiUrl + '/meeting/:id', meetingApi.deleteMeeting);

//Document
app.get(apiUrl + '/document', documentApi.getDocuments);
app.get(apiUrl + '/document/:id', meetingApi.getDocument);
app.post(apiUrl + '/document', meetingApi.addDocument);
app.put(apiUrl + '/document/:id', meetingApi.updateDocument);
app.delete(apiUrl + '/document/:id', meetingApi.deleteDocument);

//Repository
app.get(apiUrl + '/repository', repositoryApi.getRepositories);
app.get(apiUrl + '/repository/:id', repositoryApi.getRepository);
app.post(apiUrl + '/repository', repositoryApi.addRepository);
app.put(apiUrl + '/repository/:id', repositoryApi.updateRepository);
app.delete(apiUrl + '/repository/:id', repositoryApi.deleteRepository);

//Team
app.get(apiUrl + '/team', teamApi.getTeams);
app.get(apiUrl + '/team/:id', teamApi.getTeam);
app.post(apiUrl + '/team', teamApi.addTeam);
app.put(apiUrl + '/team/:id', teamApi.updateTeam);
app.delete(apiUrl + '/team/:id', teamApi.deleteTeam);

app.get('/', function(req, res) {
   res.sendFile(__dirname + '/public/pages/index.html');
});

app.listen(port);
console.log("Server listening on port %d", port);
