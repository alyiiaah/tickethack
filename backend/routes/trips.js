var express = require("express");
var router = express.Router();

require("../models/connection");
const Trip = require("../models/trips");

router.get("/", function (req, res, next) {
  Trip.find({
    departure: req.body.departure,
    arrival: req.body.arrival,
  }).then((data) => {
    let date = req.body.date;
    let filteredArray = data.filter(
      item => item.date.toISOString().substring(0, 10) === date
    );
    res.json({ Trips: filteredArray });
  });
});





module.exports = router;
