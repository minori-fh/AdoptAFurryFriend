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
const PORT = process.env.PORT || 8000;


// production mode
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
// Create server
app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT)
})

