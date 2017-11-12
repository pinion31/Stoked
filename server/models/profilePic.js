'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PicSchema = new Schema({
  img: {
    data: Buffer,
    contentType: String
  }
});

const ProfilePic = mongoose.model('users', UserSchema);

module.exports = User;