var express = require("express");
console.log("The controller is running");
var router = express.Router();

// Import the model (burgers.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  // console.log("I just logged into the '/' route");
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers/create", function(req, res) {
  burger.create(["burger_name"], [req.body.burger_value], function(data){
    // console.log("I just posted something");
    res.redirect("/")
	});
});

router.put("/burgers/update/:id", function(req, res){
  console.log("I just tried to devour a burger");
	console.log(req.body.devoured);
  var condition = "id = " + req.params.id;
  

	burger.update({"devoured": req.body.devoured}, condition, function(data){
    
    res.redirect("/");
    console.log("I just redirected from the devour route");
	});
});

// Export routes for server.js to use.
module.exports = router;
