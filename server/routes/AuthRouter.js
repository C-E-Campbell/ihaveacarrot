const express = require('express');
const authRouter = express.Router();
const { login, register, loginn } = require('../controllers/AuthCTRL');
const passport = require('passport');
require('../services/passport');

const requireAuth = passport.authenticate('local', { session: false });

authRouter.use('/login', requireAuth, (req, res, next) => {
  next();
});
authRouter.route('/login').post(login);
authRouter.route('/register').post(register);

module.exports = authRouter;
