// Require/import the HTTP module
var http = require("http");
var express = require("express");
var mongoose = require("mongoose");

// Define a port to listen for incoming requests
var PORT = process.env.PORT || 3000;

// Connect to Mongoose 
var MONGODB_URI = process.env.MONGOLAB_CHARCOAL_URI || "mongodb://localhost/dogedb";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

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
