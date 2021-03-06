'use strict';

var _ = require('lodash');
var Match = require('./match.model');


var Chat = require('../match/match.model');

// Get list of matchs
exports.index = function(req, res) {
  var userId = req.user._id;
  Match.find({$query:{people: userId.toString()},$orderby: {lastChanged: -1}}, function (err, matchs) {
    if(err) { return handleError(res, err); }
    return res.json(200, {chats: _.map(matchs, function(match) {
      if (match.messages.length > 0) {
        match.messages = [_.last(match.messages)];
      }
      return match;
    })});
  });
};

// Get a single match
exports.show = function(req, res) {
  Match.findById(req.params.id, function (err, match) {
    if(err) { return handleError(res, err); }
    if(!match) { return res.send(404); }
    return res.json(match);
  });
};

// Get a single match
exports.add = function(req, res) {
  console.log(req.params);
  Match.findById(req.body.id, function (err, match) {
    if(err) { return handleError(res, err); }
    if(!match) { return res.send(404); }
    Chat.create({people: match.people.concat([req.body.targetId]), messages: [], lastChanged: new Date()}, function(err, chat) {
      return res.json(chat);
    });
  });
};

// Creates a new match in the DB.
exports.create = function(req, res) {
  Match.create(req.body, function(err, match) {
    if(err) { return handleError(res, err); }
    return res.json(201, match);
  });
};

// Updates an existing match in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Match.findById(req.params.id, function (err, match) {
    if (err) { return handleError(res, err); }
    if(!match) { return res.send(404); }
    var updated = _.merge(match, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, match);
    });
  });
};

// Deletes a match from the DB.
exports.destroy = function(req, res) {
  Match.findById(req.params.id, function (err, match) {
    if(err) { return handleError(res, err); }
    if(!match) { return res.send(404); }
    match.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
