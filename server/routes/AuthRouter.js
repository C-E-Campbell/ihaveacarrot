const express = require('express');
const authRouter = express.Router();
const { login, register, loginn } = require('../controllers/AuthCTRL');
const passport = require('passport');
const passportService = require('../services/passport');

const requireAuth = passport.authenticate('jwt', { session: false });
authRouter.use('/loginn', requireAuth, (req, res, next) => {
  next();
});
authRouter.route('/login').post(login);
authRouter.route('/loginn').get(loginn);
authRouter.route('/register').post(register);

module.exports = authRouter;
