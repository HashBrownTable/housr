'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MatchSchema = new Schema({
  people: [],
  messages: []
});

module.exports = mongoose.model('Match', MatchSchema);
