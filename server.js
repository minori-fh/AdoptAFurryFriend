// Require/import the HTTP module
var http = require("http");
var express = require("express");
var mongoose = require("mongoose");
var path = require("path");

var app = express(); //express instance
var db = require("./models") //require models

// Enables CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Define a port to listen for incoming requests
var PORT = process.env.PORT || 3000;
app.use(express.static("client/public"));

// Connect to Mongoose 
var MONGODB_URI = process.env.MONGOLAB_CHARCOAL_URI || "mongodb://localhost/dogedb";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Route: root 
app.get("/", function(req, res){

  console.log("root route hit")
  res.sendFile(path.join(__dirname + "/public/index.html"))

});

// Create a generic function to handle requests and responses
function handleRequest(request, response) {
  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
