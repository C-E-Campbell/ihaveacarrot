require('dotenv').config({ path: '../../.env' });
const { secret } = process.env;
const passport = require('passport');
const User = require('../models/user');

const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

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

// Tell Passport to use this strategy
passport.use(jwtLogin);
