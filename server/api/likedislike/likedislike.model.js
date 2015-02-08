'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LikedislikeSchema = new Schema({
  ownerId: String,
  targetId: String,
  type: String // 'like' or 'dislike'
});

module.exports = mongoose.model('Likedislike', LikedislikeSchema);
