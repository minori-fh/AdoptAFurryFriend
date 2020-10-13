// Require/import
var express = require("express");
var bodyParser = require('body-parser')
var cors = require('cors');

// Express instance 
var app = express(); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routing
app.use('http://localhost:3000/', routes)

// Define a port to listen for incoming requests
const PORT = process.env.PORT || 3000;
app.use(express.static(__dirname + 'client', { redirect : false }));

// Create server
app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT)
})

