'use strict';

var _ = require('lodash');
var Property = require('./property.model');


var request = require('request-json');
var Zillow = request.newClient('http://www.zillow.com/');

// Get list of propertys
exports.index = function(req, res) {
  var endpoint = '/search/GetResults.htm?spt=homes&status=000010&lt=000000&ht=111001&pr=,&mp=,&bd=0%2C&ba=0%2C&sf=,&lot=,&yr=,&pho=0&pets=0&parking=0&laundry=0&pnd=0&red=0&zso=0&days=any&ds=all&pmf=0&pf=0&zoom=10&rect=-122722778,47547799,-121950302,47681570&p=1&sort=days&search=map&disp=1&rid=16037&rt=6&listright=true&isMapSearch=true&zoom=10';

  Zillow.get(endpoint, function(err, res2, body) {
    return res.json(200, body);
  });
};

// THESE ARE STUB METHODS

// Get a single property
exports.show = function(req, res) {
  Property.findById(req.params.id, function (err, property) {
    if(err) { return handleError(res, err); }
    if(!property) { return res.send(404); }
    return res.json(property);
  });
};

// Creates a new property in the DB.
exports.create = function(req, res) {
  Property.create(req.body, function(err, property) {
    if(err) { return handleError(res, err); }
    return res.json(201, property);
  });
};

// Updates an existing property in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Property.findById(req.params.id, function (err, property) {
    if (err) { return handleError(res, err); }
    if(!property) { return res.send(404); }
    var updated = _.merge(property, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, property);
    });
  });
};

// Deletes a property from the DB.
exports.destroy = function(req, res) {
  Property.findById(req.params.id, function (err, property) {
    if(err) { return handleError(res, err); }
    if(!property) { return res.send(404); }
    property.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
