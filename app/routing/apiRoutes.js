var friendData = require('../data/friends.js');
var path = require('path');


var totalDifference = 0;

module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friendData);
	});

	app.post('/api/friends', function(req, res){

		var greatMatch = {
			name: "",
			image: "",
			matchDifference: 1000
		};
		var usrData 	= req.body;
		var usrName 	= usrData.name;
		var usrImage 	= usrData.image;
		var usrScores 	= usrData.scores;

		var totalDifference = 0;

		for(var i = 0; i < [friendData].length-1; i++){
			console.log(friendData[i].name);
			totalDifference = 0;

			for(var secondLoop = 0; secondLoop < 10; secondLoop++){

				totalDifference += Math.abs(parseInt(usrScores[secondLoop]) - parseInt(friendData[i].scores[secondLoop]));

				if (totalDifference <= greatMatch.friendDifference){

					greatMatch.name = friendData[i].name;
					greatMatch.photo = friendData[i].photo;
					greatMatch.matchDifference = totalDifference;
				}
			}
		}

		friendData.push(usrData);
 
		res.json(greatMatch);
		console.log(greatMatch);
	});
};