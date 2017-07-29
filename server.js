var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var reservationData = [
{
	routeName: "joyce",
	name: "Joyce",
	phoneNumber: "408-679-3150",
	email: "lai.joyce@gmail.com",
	uniqueID: "14"
},
{
	routeName: "chetan",
	name: "Chetan",
	phoneNumber: "124-324345345",
	email: "test@test.com",
	uniqueID: "test123"
},
{
	routeName: "albert",
	name: "Albert",
	phoneNumber: "34342423",
	email: "4324",
	uniqueID: "435235"
}
];

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/viewTable", function(req, res) {
	res.sendFile(path.join(__dirname, "viewTable.html"));
});

app.get("/reservations", function(req, res) {
	res.sendFile(path.join(__dirname, "reservations.html"));
});

app.get("/api/:reservationData?", function(req, res) {
	var reservations = req.params.reservationData;

	if (reservations) {
		console.log(reservations);

		for (var i = 0; i < reservationData.length; i++) {
			if (reservations === reservationData[i].routeName) {
				return res.json(reservationData[i]);
			}
		}
		 return res.json(false);
		 console.log("reservation exists");
	} else {
		console.log("no such reservation");
	}
	//console.log("returns all reservations");
	return res.json(reservationData);
});

app.post("/api/new", function(req, res) {
	var newReservation = req.body;
	newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

	console.log(newReservation);
	reservationData.push(newReservation);
	res.json(newReservation);
});

app.listen(PORT, function() {
	console.log("App listening on port " + PORT);
});