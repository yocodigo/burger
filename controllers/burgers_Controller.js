const express = require("express"),
       burger = require("../models/burger.js"); // Import the model (burgers.js) to use its database functions.
       router = express.Router();
console.log("The controller is running");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {  
  burger.all(function(data) {
    const hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/burgers/create", function(req, res) {
  burger.create(["burger_name"], [req.body.burger_value], function(data) {
    res.redirect("/");
  });
});

router.put("/burgers/update/:id", function(req, res) {
  console.log("I just tried to devour a burger");
  console.log(req.body.devoured);
  const condition = "id = " + req.params.id;

  burger.update({ devoured: req.body.devoured }, condition, function(data) {
    res.redirect("/");
    console.log("I just redirected from the devour route");
  });
});

// Export routes for server.js to use.
module.exports = router;
