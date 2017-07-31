// var express = require("express");
// var bodyParser = require("body-parser");
// var path = require("path");

// var app = express();
// var PORT = process.env.PORT || 3000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// var reservationData = [
// {
// 	routeName: "joyce",
// 	name: "Joyce",
// 	phoneNumber: "408-679-3150",
// 	email: "lai.joyce@gmail.com",
// 	uniqueID: "14"
// },
// {
// 	routeName: "chetan",
// 	name: "Chetan",
// 	phoneNumber: "124-324345345",
// 	email: "test@test.com",
// 	uniqueID: "test123"
// },
// {
// 	routeName: "albert",
// 	name: "Albert",
// 	phoneNumber: "34342423",
// 	email: "4324",
// 	uniqueID: "435235"
// }
// ];

// var waitlistData = [
// {
// 	routeName: "sandy",
// 	name: "Sandy",
// 	phoneNumber: "sdfdsfsdf",
// 	email: "sdfdsfdsf",
// 	uniqueID: "45345435"
// },
// {
// 	routeName: "penelope",
// 	name: "Penelope",
// 	phoneNumber: "124-324345345",
// 	email: "test@test.com",
// 	uniqueID: "test123"
// },
// {
// 	routeName: "jack",
// 	name: "Jack",
// 	phoneNumber: "3dfs",
// 	email: "4ddsf",
// 	uniqueID: "dsfdfsfsew"
// }
// ];

// app.get("/", function(req, res) {
// 	res.sendFile(path.join(__dirname, "home.html"));
// });

// app.get("/viewTable", function(req, res) {
// 	res.sendFile(path.join(__dirname, "viewTable.html"));
// });

// app.get("/reservations", function(req, res) {
// 	res.sendFile(path.join(__dirname, "reservations.html"));
// });

// app.get("/api/:reservationData?", function(req, res) {
// 	var reservations = req.params.reservationData;

// 	if (reservations) {
// 		console.log(reservations);

// 		for (var i = 0; i < reservationData.length; i++) {
// 			if (reservations === reservationData[i].routeName) {
// 				return res.json(reservationData[i]);
// 			}
// 		}
// 		 return res.json(false);
// 		 // console.log("reservation exists");
// 		} 

// 		// else {
// 	// 	console.log("no such reservation");
// 	// }
// 	//console.log("returns all reservations");
// 	return res.json(reservationData);
// });

// app.get("/waitlist/:waitlistData?", function(req, res) {
// 	console.log("req is: ", req);
// 	var waitlist = req.params.waitlistData;
// 	console.log("waitlist is: ", waitlist);

// 	if (waitlist) {
// 		console.log(waitlist);

// 		for (var i = 0; i < waitlistData.length; i++) {
// 			if (waitlist === waitlistData[i].routeName) {
// 				return res.json(waitlistData[i]);
// 			}
// 		}
// 		 return res.json(false);
// 		 // console.log("reservation exists");
// 		} 

// 		// else {
// 	// 	console.log("no such reservation");
// 	// }
// 	//console.log("returns all reservations");
// 	return res.json(waitlistData);
// });

// app.post("/api/new", function(req, res) {
// 	var newReservation = req.body;
// 	newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

// 	console.log(newReservation);
// 	if (reservationData.length <= 5) {
// 		reservationData.push(newReservation);
// 	} else {
// 		waitlistData.push(newReservation);
// 	}
	
// 	res.json(newReservation);
// });

// app.listen(PORT, function() {
// 	console.log("App listening on port " + PORT);
// });
// data and the logic to manipulate that data lives on a node server. 
// we have routes that make that data and logic accessible
// we use ajax to access the data and push changes to the client's side

// fist thing we do is to set up our server. 

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;

// app.get("/", function(req, res){
// 	res.send("Hello World");
// });



app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
// app.use(function(req, res) {
// 	res.setHeader("Content-Type", "text/plain")
// 	res.write("you posted:\n")
// 	res.end(JSON.stringify(req.body, null, 2))
// });

// as a last step, we need to include route paths in this file. 
// this means, include the routes.js file and the 'app' means
// we want to use express. 


// include api routes first. bcoz that's where we are pulling the data from
// to display it in html
require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);


app.listen(PORT, function(){
	console.log("Listening on port: " + PORT);
});
