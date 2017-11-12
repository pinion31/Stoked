'use strict';

var express = require('express');
var mongoose = require('mongoose');
var fs = require('fs');
var getRawBody = require('raw-body');
var contentType = require('content-type');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var path = require('path');
var app = express();
var user = require('./routes/user');
var friends = require('./routes/friends');
var session = require('express-session');
var cookieParser = require('cookie-parser');

var passport = require('passport');
var TwitterStrategy = require('passport-twitter').Strategy;

var User = require('./models/user');

mongoose.connect('mongodb://localhost/local');
mongoose.Promise = global.Promise;

var bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '5mb' }));
var db = mongoose.connection;

/*
app.use(function (req, res, next) {
  getRawBody(req, {
    length: req.headers['content-length'],
    limit: '4mb',
    //encoding: contentType.parse(req).parameters.charset
  }, function (err, string) {
    if (err) return next(err)
    console.log('string',string);
    req.text = string;
    next();
  })
});*/

app.use(cookieParser());
app.use(session({ secret: process.env.SESSION_SECRET, cookie: { secure: false }, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, '../static')));

app.use('/user', user);

app.post('/profile', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
});

var redirect = '/Dashboard';
var newUserId = '';

passport.use(new TwitterStrategy({
  consumerKey: process.env.CLIENT_KEY_TWITTER_STOKED,
  consumerSecret: process.env.CLIENT_SECRET_TWITTER_STOKED,
  callbackURL: 'http://localhost:8080/auth/twitter/callback'
}, function (token, tokenSecret, profile, done) {
  User.findOne({ profileId: profile.id }).exec(function (err, user) {
    newUserId = profile.id.toString();
    console.log('token', token);
    if (user !== null) {
      redirect = '/Dashboard';

      return done(null, user);
    }

    redirect = '/SignUp';

    var newUser = new User({
      profileId: profile.id,
      name: '',
      description: '',
      profilePic: ''
    });

    newUser.save(function (err, data) {
      if (err) {
        return done(err);
      }
      return done(null, data);
    });
  });
}));

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

app.get('/auth/twitter', passport.authenticate('twitter'));

app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/' }), function (req, res) {
  var url = redirect === '/SignUp' ? '/SignUp?' + newUserId : '/Dashboard?' + newUserId;
  res.redirect(url);
});

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../static', 'index.html'));
});

app.listen(process.env.PORT || 3000, function () {
  console.log('App started for your convenience');
});

module.exports = app;
//# sourceMappingURL=server.js.map