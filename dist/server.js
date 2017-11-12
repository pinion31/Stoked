'use strict';

var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var app = express();
var user = require('./routes/user');
var friends = require('./routes/friends');

mongoose.connect('mongodb://localhost/local');
mongoose.Promise = global.Promise;

var bodyParser = require('body-parser');

var db = mongoose.connection;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../static')));

app.use('/user', user);
//app.use('/friends', friends);

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../static', 'index.html'));
});

app.listen(process.env.PORT || 3000, function () {
  console.log('App started for your convenience');
});

module.exports = app;
//# sourceMappingURL=server.js.map