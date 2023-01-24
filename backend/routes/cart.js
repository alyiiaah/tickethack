var express = require("express");
var router = express.Router();

require("../models/connection");
const Trip = require("../models/trips");

router.get("/", function (req, res, next) {
  
});

module.exports = router;
