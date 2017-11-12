'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PicSchema = new Schema({
  img: {
    data: Buffer,
    contentType: String
  }
});

var ProfilePic = mongoose.model('users', UserSchema);

module.exports = User;
//# sourceMappingURL=profilePic.js.map