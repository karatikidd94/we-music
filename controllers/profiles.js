// const Project = require('../models/project');
const User = require('../models/user');

module.exports = {
  index,
  new: newProfile
};

function index(req, res) {
  User.findById(req.user.id, function(err, user) {
    console.log(user);
    res.render('profiles/index', {user});
  });
}

function newProfile(req, res) {
  res.render('profiles/new');
}