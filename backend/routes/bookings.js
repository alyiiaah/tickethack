var express = require("express");
var router = express.Router();

require("../models/connection");
const Trip = require("../models/trips");

router.get("/", function (req, res, next) {
    Trip.find({
       booking: true,   
    }) .then((data) => { 
        res.json({ Carts : data } )
    })
});

router.put("/:tripID", function (req, res, next) {
    Trip.updateOne({
        _id : req.params.tripID },{ booking: true }) .then((data) => { 
        res.json({ Carts : data } )
    })
});


module.exports = router;