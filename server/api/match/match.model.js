'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MatchSchema = new Schema({
  people: [],
  messages: [],
  lastChanged: Date
});

module.exports = mongoose.model('Match', MatchSchema);
