const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://alyiiaah:u0vADKgtp0bvhKbL@cluster0.u4nh1xi.mongodb.net/tickethack';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
 .then(() => console.log('Database connected'))

  .catch(error => console.error(error));