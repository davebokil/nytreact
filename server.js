

var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require Click schema
var Article = require("./models/article");

// Create a new express app
const app = express();
// Sets an initial port. We'll use this later in our listener
const PORT = process.env.PORT || 3000;


// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

app.use(express.static("./public"));

// -------------------------------------------------

// MongoDB configuration (Change this URL to your own DB)
// mongoose.connect("mongodb://admin:codingrocks@ds023674.mlab.com:23674/heroku_5ql1blnl");
mongoose.connect("mongodb://localhost/nytreact");
var db = mongoose.connection;

db.on("error", function (err) {
    console.log("Mongoose Error: ", err);
});

db.once("open", function () {
    console.log("Mongoose connection successful.");
});

// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});


// -------------------------------------------------

// Starting our express server
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
