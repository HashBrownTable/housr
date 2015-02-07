/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Likedislike = require('./likedislike.model');

exports.register = function(socket) {
  Likedislike.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Likedislike.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('likedislike:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('likedislike:remove', doc);
}