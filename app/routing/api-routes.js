var express = require('express');
var path = require('path');

var app = express();

var friendsData	= require('../data/friends.js');

function checkScores() {
	var userTotal = 0;
	for (var i = 0; i < friendsData.length; i++) {
		for (var j = 0; j < friendsData[i].scores.length; j++) {
			userTotal += friendsData[i].scores[j];
		}
	}
}

module.exports = function(app){

	app.get('/api/friends', function(req, res) {
		res.json(friendsData);
	});

	app.post('/api/friends', function(req, res) {
		var newFriend = req.body;
		friendsData.push(newFriend);
		res.json(friendsData);
		checkScores();
	});

	app.post('/api/clear', function(req, res) {
		friendsData = [];
	})
}
