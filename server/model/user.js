'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {type: String, required: 'Username is required!', index: {unique: true}},
    password: String,
    accessLevel: Number,
    team: {type: mongoose.Schema.Types.ObjectId, ref: 'Team'}
});

module.exports = mongoose.model('User', UserSchema);
