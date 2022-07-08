// const Project = require('../models/project');
const User = require('../models/user');

module.exports = {
  index,
};

function index(req, res) {
    res.render('profiles/index');
}