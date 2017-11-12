'use strict';

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const user = require('./routes/user');
const friends = require('./routes/friends');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;

const User = require('./models/user');

mongoose.connect(process.env.MONGOLAB_URI);
mongoose.Promise = global.Promise;

const bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({ extended: false, limit: '5mb' }));
const db = mongoose.connection;

app.use(cookieParser());
app.use(session({secret: process.env.SESSION_SECRET, cookie: {secure: false}, resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, '../static')));

app.use('/user', user);

var redirect = '/Dashboard';
var newUserId = '';

passport.use(new TwitterStrategy({
  consumerKey: process.env.CLIENT_KEY_TWITTER_STOKED,
  consumerSecret: process.env.CLIENT_SECRET_TWITTER_STOKED,
  callbackURL: 'http://localhost:8080/auth/twitter/callback'
},
(token, tokenSecret, profile, done) => {
  User.findOne({profileId: profile.id})
    .exec((err, user) => {
    newUserId = profile.id.toString();
    if (user !== null) {
        redirect = '/Dashboard';

        return done(null, user);
      }

      redirect = '/SignUp';

      const newUser = new User({
        profileId: profile.id,
        name: '',
        description: '',
        profilePic: '',
      });

      newUser.save((err, data) => {
        if (err) {
          return done(err);
        }
        return done(null, data);
      });
    });
}));


passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.get('/auth/twitter', passport.authenticate('twitter'));

app.get('/auth/twitter/callback',
  passport.authenticate('twitter', {failureRedirect: '/'}), (req, res) => {
    const url = redirect === '/SignUp'? `/SignUp?${newUserId}`: `/Dashboard?${newUserId}`;
    res.redirect(url);
  }
);

app.get('*', function(req, res){
  if (req.session === undefined) {
    return res.redirect('/');
  }

  res.sendFile(path.resolve(__dirname, '../static', 'index.html'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('App started for your convenience');
});

module.exports = app;
