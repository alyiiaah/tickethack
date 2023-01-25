var express = require("express");
var router = express.Router();

require("../models/connection");
const Trip = require("../models/trips");

router.post("/", function (req, res, next) {
  console.log(req.body)
  Trip.find({
    departure: req.body.departure,
    arrival: req.body.arrival,
  }).then((data) => {
    let date = req.body.date;
    let filteredArray = data.filter(
      item => item.date.toISOString().substring(0, 10) === date
    );
    console.log(filteredArray)
    res.json({ trips: filteredArray });
  });
});





module.exports = router;
