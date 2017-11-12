'use strict';

var express = require('express');
var router = express.Router();
var User = require('../models/user');

/**
* req input: {name:String, email: String, profilePic: String, description:String}
* res output: {_id: String, name:String, email: String, profilePic: String, description:String, __v: Number}
*/
router.post('/addUser', function (req, res) {
  //search using email to see if user already exists
  // if not, create new user
  var user = new User({
    email: req.body.email,
    name: req.body.name,
    description: req.body.description,
    profilePic: req.body.profilePic
  });

  user.save(function (err) {
    if (err) {
      throw err;
    }
    var newUser = user.toObject();

    res.json(newUser);
  });
});

/**
* req input: {name:String, email: String, profilePic: String, description:String}
* res output: {_id: String, name:String, email: String, profilePic: String, description:String, __v: Number}
*/
router.post('/editUser', function (req, res) {
  User.findOne({ email: req.body.email }).then(function (user) {
    if (user) {
      user.name = req.body.name;
      user.description = req.body.description;
      user.profilePic = req.body.profilePic;
      user.save();
      res.json(user.toObject());
    } else {
      res.json({ error: 'user not found' });
    }
  });
});

router.get('/getAllUsers', function (req, res) {
  User.find({}).lean().then(function (users) {
    res.json([users]);
  }).catch(function (err) {
    if (err) {
      throw err;
    }
  });
});

module.exports = router;
//# sourceMappingURL=user.js.map