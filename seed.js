require('dotenv').config();  // comment out if not using a .env file
require('./config/database');

const Profile = require('./models/profile');
// contains the seed data
const data = require('./data.js');

const p1 = Profile.deleteMany({});

Promise.all([p1])
  .then(function (results) {
    console.log(results);
    return Profile.create(data.profile);
  })
  
  .then(process.exit);