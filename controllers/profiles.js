// const Project = require('../models/project');
const User = require('../models/user');
const Profile = require('../models/profile');

module.exports = {
  index,
  new: newProfile
};

function index(req, res) {
  User.findById(req.user.id, function(err, user) {
    console.log(user);
    res.render('profiles/index');
  });
}

function newProfile(req, res) {
  res.render('profiles/new');
}