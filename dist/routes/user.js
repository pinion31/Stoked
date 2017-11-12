'use strict';

var express = require('express');
var router = express.Router();
var User = require('../models/user');

/**
* req input: {name:String, email: String, profilePic: String, description:String}
* res output: {_id: String, name:String, email: String, profilePic: String, description:String, __v: Number}
*/
router.post('/addUser', function (req, res) {
  User.findOneAndUpdate({ profileId: req.body.profileId }, {
    name: req.body.name,
    description: req.body.description,
    profilePic: req.body.profilePic
  }, {
    new: true
  }).then(function (user) {
    res.status(200).json(user);
  }).catch(function (err) {
    throw err;
  });
});

/**
* req input: {name:String, profilePic: String, description:String}
* res output: {_id: String, name:String, profileId: String, profilePic: String, description:String, __v: Number}
*/
router.post('/editUser', function (req, res) {
  User.findOne({ profileId: req.session.passport.user.profileId }).then(function (user) {
    if (user) {
      user.name = req.body.name;
      user.description = req.body.description;
      user.profilePic = req.body.profilePic;
      user.save();
      res.status(200).json(user.toObject());
    } else {
      res.status(500).json({ error: 'user not found' });
    }
  });
});

router.get('/getUser', function (req, res) {
  User.find({ profileId: req.session.passport.user.profileId }).lean().then(function (user) {
    res.status(200).json(user[0]);
  }).catch(function (err) {
    if (err) {
      throw err;
    }
  });
});

router.get('/getAllUsers', function (req, res) {
  User.find({ 'profileId': { $ne: req.session.passport.user.profileId } }).lean().then(function (users) {
    res.status(200).json([users]);
  }).catch(function (err) {
    if (err) {
      throw err;
    }
  });
});

module.exports = router;
//# sourceMappingURL=user.js.map