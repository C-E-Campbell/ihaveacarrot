require('dotenv').config({ path: '../../.env' });
const { secret } = process.env;
const passport = require('passport');
const User = require('../models/user');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

// Setup options for JWT JwtStrategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: secret,
};

// Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
  // See if the user id in the payload exists in our database
  // If so, call 'done' with that user
  // Otherwise, call done without a user object
  User.findById(payload.sub, function (err, user) {
    if (err) {
      return done(err, false);
    }
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  });
});

const localLogin = new LocalStrategy(
  {
    usernameField: 'user',
  },
  async (user, password, done) => {
    const data = await User.findOne({ user: user }, function (err, user) {
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
    });
    console.log(data);
    bcrypt.compare(password, data.password, function (err, result) {
      if (result) {
        return done(null, data);
      } else {
        return done(null, false, { message: 'Incorrect password.' });
      }
    });
  }
);

// Tell Passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);
