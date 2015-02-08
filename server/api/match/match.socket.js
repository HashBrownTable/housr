/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Match = require('./match.model');

exports.register = function(socket) {
  Match.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Match.schema.post('update', function (doc) {
    onUpdate(socket, doc);
  });
  Match.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
  socket.on('match:message', function(a) {
    Match.findByIdAndUpdate(a.id,
      {$push: {"messages": a.message}},
      {safe: true},
      function(err, model) {
      });
  });
};

function onSave(socket, doc, cb) {
  console.log("UPDATING", doc);
  socket.emit('match:'+doc._id+':save', doc.messages);
}

function onUpdate(socket, doc, cb) {
  console.log("UPDATING", doc);
  socket.emit('match:'+doc._id+':update', doc.messages);
}

function onRemove(socket, doc, cb) {
  socket.emit('match:'+doc._id+':remove', doc.messages);
}
