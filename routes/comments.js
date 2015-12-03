var express = require('express');
var router = express.Router();
var Comments = require('../models/comments');
var bcrypt = require('bcrypt');

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/comment', function(req, res, next) {

  var comment = new Comment (user, {
    
    var newUser = new User({
      username: req.body.username,
      password: hashedPassword
    });
    
    
  console.log(newUser.username, newUser.password);
  
    newUser.save(function(err, user) {
      if (err) res.send(err)
      res.render('dashboard', {
        user: newUser
      });
    });
  });
});

module.exports = router;

