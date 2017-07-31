// this is all to direct the user and display the page
// depending on what they choose. 

var path = require('path');

module.exports = function (app) {

	// when the user hits the url tables we will show them the tables.html page
	app.get("/tables", function(req, res) {
		res.sendFile(path.join(__dirname + "/../public/tables.html"));
	});

	app.get("/reserve", function(req, res) {
		res.sendFile(path.join(__dirname + "/../public/reserve.html"));
	});


	// another way, if we are using the app, and if no other url
	// then send them to the home page. 
	app.use( function(req, res) {
		res.sendFile(path.join(__dirname + "/../public/home.html"));
	});

}