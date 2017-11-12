'use strict';

const express = require('express');
const router = express.Router();
const User = require('../models/user');

/**
* req input: {name:String, email: String, profilePic: String, description:String}
* res output: {_id: String, name:String, email: String, profilePic: String, description:String, __v: Number}
*/
router.post('/addUser', (req,res) => {
  //search using email to see if user already exists
  // if not, create new user
  const user = new User({
    email: req.body.email,
    name: req.body.name,
    description: req.body.description,
    profilePic: req.body.profilePic,
  });

  user.save((err) => {
    if (err) {throw err; }
    const newUser = user.toObject();

    res.json(newUser);
  });
});

/**
* req input: {name:String, email: String, profilePic: String, description:String}
* res output: {_id: String, name:String, email: String, profilePic: String, description:String, __v: Number}
*/
router.post('/editUser', (req,res) => {
  User.findOne({email: req.body.email})
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
