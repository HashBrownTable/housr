/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Match = require('./match.model');
var User = require('../user/user.model');
var _ = require('lodash');

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
    Match.findById(a.id, function(err, chat) {
      chat.lastChanged = new Date();
      chat.messages.push(a.message);
      chat.save();
    });
  });
};

function onSave(socket, doc, cb) {
  console.log("UPDATING", doc);
  socket.emit('match:'+doc._id+':save', doc.messages);
  if (doc.messages.length > 0) {
    var msg = _.last(doc.messages)
    console.log(msg)
    User.findById(msg.id, function(err, usr) {
      socket.emit('notification', {
        targets: doc.people,
        type: 'chat',
        id: doc._id,
        msg: usr.name + ': '+ msg.text
      });
    })
  } else {
    socket.emit('notification', {
      targets: doc.people,
      type: 'match',
      msg: "You've made a new match!"
    });
  }
}

function onUpdate(socket, doc, cb) {
  console.log("UPDATING", doc);
  socket.emit('match:'+doc._id+':update', doc.messages);
}

function onRemove(socket, doc, cb) {
  socket.emit('match:'+doc._id+':remove', doc.messages);
}
