'use strict';
angular.module('housrApp')
  .controller('LikeCtrl', function ($scope, LikeDislike) {
    $scope.message = 'Hello';
  
  LikeDislike.get(function(likedislike))
  
  exports.index = function(req, res) {
  Likedislike.find({ownerId: req.user._id}, function (err, likedislikes) {
    if(err) { return handleError(res, err); }
    return res.json(200, likedislikes);
  });
  
  });
  
  
