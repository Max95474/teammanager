'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DocumentSchema = new Schema({
  name: String,
  content: String,
  repository: {type: mongoose.Schema.Types.ObjectId, ref: 'Repository'}
});

module.exports = mongoose.model('Document', DocumentSchema);
