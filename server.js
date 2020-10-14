// Require/import
var express = require("express");
var bodyParser = require('body-parser')
var path = require("path");
var cors = require('cors');

// Express instance 
var app = express(); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Define a port to listen for incoming requests
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname + 'client/build')));

// Handle request and response
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'))
})

// Create server
app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT)
})

