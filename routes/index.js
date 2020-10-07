var mongoose = require("mongoose")
var express = require("express");
var router = express.Router();
var db = require("../models")

// Root route
router.get("/", function(req, res){
    res.send("server for adopt-a-furry-friend")
    console.log("hit root route")
})

// Doge route to post scraped dog information
router.post("/doge", function(req, res){


    console.log("req.body", req.body)
    // console.log("req.body.breed", req.body.breed)

    db.Doge.create(req.body)
    .then(function(dbDoge) {
    // View the added result in the console
    console.log("this is dbdoge: ", dbDoge);
    res.status(200).send(dbDoge);
    })
    .catch(function(err) {
    // If an error occurred, log it
    console.log("this is err: ", err);
    res.status(500).send(err);
    });

})


module.exports = router;