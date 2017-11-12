'use strict';

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const user = require('./routes/user');
const friends = require('./routes/friends');

mongoose.connect('mongodb://localhost/local');
mongoose.Promise = global.Promise;

const bodyParser = require('body-parser');

const db = mongoose.connection;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../static')));

app.use('/user', user);
//app.use('/friends', friends);

app.get('*', function(req, res){
  res.sendFile(path.resolve(__dirname, '../static', 'index.html'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('App started for your convenience');
});

module.exports = app;
