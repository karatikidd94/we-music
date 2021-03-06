var express = require('express');
var router = express.Router();
var profilesCtrl = require('../controllers/profiles');
const isLoggedIn = require('../config/auth');

router.get('/', profilesCtrl.index);
router.get('/new', profilesCtrl.new);
router.get('/:id', profilesCtrl.show);


module.exports = router;