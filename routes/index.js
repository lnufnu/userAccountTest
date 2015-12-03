var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bcrypt = require('bcrypt');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

/* route to handle authentication for existing user. */
router.post('/login', function(req, res, next) {
  User.findOne({
    username: req.body.username
  }, function(err, user) {
    console.log(err);
    console.dir(err);
    if (err) {
      res.send('failzzzzz for some reason');
    }
    bcrypt.compare(req.body.password, user.password, function(err, passwordMatched) {
      console.log(passwordMatched);
      if (err) res.send(err);
      if (!passwordMatched) res.render('login');
      res.render('dashboard', {user: user});
    });
  });
});

module.exports = router;

