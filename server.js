// Require/import
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require('body-parser')
var cors = require('cors');

var db = require("./models") //require models
var routes = require("./routes") //require routes

// Connect to Mongoose 
var MONGODB_URI = process.env.MONGOLAB_CHARCOAL_URI || "mongodb://127.0.0.1:27017/dogedb";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, (err) => {
  if(!err){
    console.log("Server has been connected to mongodb")
  } else {
    console.log(err)
  }
});

// Express instance 
var app = express(); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routing
app.use('http://localhost:3000/', routes)
app.use('/', routes)

// Define a port to listen for incoming requests
const PORT = process.env.PORT || 3000;
app.use(express.static(__dirname + 'client', { redirect : false }));

// Create server
app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT)
})

