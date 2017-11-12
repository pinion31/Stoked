'use strict';

const express = require('express');
const router = express.Router();
const User = require('../models/user');

/**
* req input: {name:String, email: String, profilePic: String, description:String}
* res output: {_id: String, name:String, email: String, profilePic: String, description:String, __v: Number}
*/
router.post('/addUser', (req,res) => {
  User.findOneAndUpdate({profileId: req.body.profileId}, {
    name: req.body.name,
    description: req.body.description,
    profilePic: {
    },
  },
  {
    new:true
  }).then(user => {
    res.json(user);
  }).catch(err => {
    throw err;
  });

  /*const user = new User({
    profileId: req.body.email,
    name: req.body.name,
    description: req.body.description,
    profilePic: req.body.profilePic,
  });

  user.save((err) => {
    if (err) {throw err; }
    const newUser = user.toObject();

    res.json(newUser);
  });*/
});

/**
* req input: {name:String, profilePic: String, description:String}
* res output: {_id: String, name:String, profileId: String, profilePic: String, description:String, __v: Number}
*/
router.post('/editUser', (req,res) => {
  console.log(req.session.passport.user.profileId);
  User.findOne({profileId: req.session.passport.user.profileId})
    .then(user => {
      if (user) {
        user.name = req.body.name;
        user.description = req.body.description;
        user.profilePic = req.body.profilePic;
        user.save();
        res.json(user.toObject());
      } else {
        res.json({error: 'user not found'});
      }
    });
});

router.get('/getUser', (req,res) => {
  User.find({profileId: req.session.passport.user.profileId}).lean()
    .then(user => {
      res.json(user[0]);
    }).catch(err => {
      if (err) {
        throw err;
      }
    });
});

router.get('/getAllUsers', (req,res) => {
  User.find({}).lean()
    .then(users => {
      res.json([users]);
    }).catch(err => {
      if (err) {
        throw err;
      }
    });
});

module.exports = router;
