'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: String,
  name: String,
  profilePic: String,
  description: String
});

var User = mongoose.model('users', UserSchema);

module.exports = User;
//# sourceMappingURL=user.js.map