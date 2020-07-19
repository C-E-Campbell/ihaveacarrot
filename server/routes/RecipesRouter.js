const express = require('express');
const recipesRouter = express.Router();
const passport = require('passport');
require('../services/passport');
const { saveRecipe, getRecipe } = require('../controllers/RecipesCTRL');

const requireAuth = passport.authenticate('jwt', { session: false });
recipesRouter.use('', requireAuth, (req, res, next) => {
  next();
});

recipesRouter.route('/saveRecipe').post(saveRecipe);
recipesRouter.route('/getRecipe').get(getRecipe);

module.exports = recipesRouter;
