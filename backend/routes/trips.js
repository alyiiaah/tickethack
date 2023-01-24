var express = require('express');
var router = express.Router();

require('../models/connection')
const Trip = require ('../models/trips')


/* GET users listing. */
router.get('/', function(req, res, next) {

  Trip.find({departure : req.body.departure, arrival : req.body.arrival, date : req.body.date}).then( data=> {
    res.json({depart: })


    


  })







});

module.exports = router;
