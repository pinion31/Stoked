'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  profileId: String,
  name: String,
  profilePic: String,
  description: String
});

var User = mongoose.model('stokedUsers', UserSchema);

module.exports = User;
//# sourceMappingURL=user.js.map