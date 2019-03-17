const express = require("express"),
       burger = require("../models/burger.js"); // Import the model (burgers.js) to use its database functions.
       router = express.Router();
console.log("The controller is running");

router.get("/", function(req, res) {
  res.redirect("/burgers");
});

// Create all our routes and set up logic within those routes where required.
router.get("/burgers", function(req, res) {
  burger.all(function(data) {
    res.render("index", { burger_data: data});
  });
});

router.post("/burgers/create", function(req, res) {
  burger.create(req.body.burger_name, function(data) {
    console.log(data);
    res.redirect("/");
  });
});

router.put("/burgers/:id", function(req, res) {
  burger.update(req.params.id, function(data) {
    // res.redirect("/");
    console.log(data);
    res.sendStatus(200);
  });
});

// Export routes for index.js to use.
module.exports = router;
