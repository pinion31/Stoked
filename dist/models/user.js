'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  profileId: String,
  name: String,
  profilePic: {
    data: Buffer,
    contentType: String
  },
  description: String
});

var User = mongoose.model('users', UserSchema);

module.exports = User;
//# sourceMappingURL=user.js.map