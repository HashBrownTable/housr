'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PropertySchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Property', PropertySchema);