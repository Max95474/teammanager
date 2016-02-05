'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MeetingSchema = new Schema({
  title: String,
  description: String,
  date: Date
});

module.exports = mongoose.model('Meeting', MeetingSchema);
