var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Comment = require('../models/comment');
var bcrypt = require('bcrypt');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('apiiiiiii');
});

router.get('/dashboard', function(req, res) {
  res.render('dashboard');
});

/* route to handle creating a new user. */
router.post('/users', function(req, res, next) {

  bcrypt.hash(req.body.password, 10, function(err, hashedPassword) {
    var newUser = new User({
      username: req.body.username,
      password: hashedPassword
    });
    
  console.log(newUser.username, newUser.password);
  
    newUser.save(function(err, User) {
      if (err) res.send(err)
      res.render('dashboard', {
        user: newUser
      });
    });
  });
});

/* route to handle posting user comments. */
router.post('/comment', function(req, res, next) {

  var comment = new Comment({
    comment: req.body.comment
  });
 
  comment.save(function(err, comment) {
    if (err) res.send(err)
    res.render('dashboard'), {
      comment: comment,
      user: {username: "Wrong one every single time"}
      }
  }); 
});


module.exports = router;

