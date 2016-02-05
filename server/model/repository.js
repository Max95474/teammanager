'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RepositorySchema = new Schema({

});

module.exports = mongoose.model('Repository', RepositorySchema);
