// const Project = require('../models/project');
const User = require('../models/user');
const Profile = require('../models/profile');

module.exports = {
  index,
  new: newProfile,
  show
};

function index(req, res) {
  User.findById(req.user.id, function(err, user) {
    console.log(user);
    Profile.find({}, function(err, profile) {
      console.log(profile);
      res.render('profiles/show', {profile});
    });
  });
  
}

function newProfile(req, res) {
  res.render('profiles/new');
}

function show(req, res) {
  Profile.findById(req.params.id, function(err, profile) {
    console.log('Show Profile:', profile);
          res.render('profiles/show', {profile});
  });
}