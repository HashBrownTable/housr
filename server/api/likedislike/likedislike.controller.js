'use strict';

var _ = require('lodash');
var Likedislike = require('./likedislike.model');

// Get list of likedislikes
exports.index = function(req, res) {
  Likedislike.find({ownerId: req.user._id}, function (err, likedislikes) {
    if(err) { return handleError(res, err); }
    return res.json(200, likedislikes);
  });
};

// Get a single likedislike
exports.show = function(req, res) {
  Likedislike.findById(req.params.id, function (err, likedislike) {
    if(err) { return handleError(res, err); }
    if(!likedislike) { return res.send(404); }
    return res.json(likedislike);
  });
};

// Creates a new likedislike in the DB.
exports.create = function(req, res) {
  Likedislike.create({ownerId: req.user._id, targetId: req.body.targetId, type: req.body.type}, function(err, likedislike) {
    if(err) { return handleError(res, err); }
    return res.json(201, likedislike);
  });
};

// Updates an existing likedislike in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Likedislike.findById(req.params.id, function (err, likedislike) {
    if (err) { return handleError(res, err); }
    if(!likedislike) { return res.send(404); }
    var updated = _.merge(likedislike, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, likedislike);
    });
  });
};

// Deletes a likedislike from the DB.
exports.destroy = function(req, res) {
  Likedislike.findById(req.params.id, function (err, likedislike) {
    if(err) { return handleError(res, err); }
    if(!likedislike) { return res.send(404); }
    likedislike.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
