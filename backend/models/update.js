const mongoose = require("mongoose");
const Trip = require("./trips");
require("./connection.js");

Trip.find().then((data) => {
  console.log(data);
});

Trip.updateMany(
  {},
  { $set: { cart: false, booking: false } },
  { multi: true },
  function (err, result) {
    if (err) console.log(err);
    console.log(result);
  }
);

