'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: String,
  name: String,
  profilePic: String,
  description: String
});

const User = mongoose.model('users', UserSchema);

module.exports = User;
