const Recipes = require('../models/recipe');
const Recipe = require('../models/recipe');

module.exports = {
  saveRecipe: async (req, res, next) => {
    const { recipeId, image, title } = req.body;
    const { _id } = req.user;
    const saveRecipe = new Recipes({
      recipeId,
      userId: _id,
      title,
      image,
    });
    saveRecipe.save();
    res.status(200).json({ success: true });
  },
  getRecipe: async (req, res, next) => {
    Recipe.find({ userId: '5f129d7039d93516781c4a2b' }, function (
      err,
      recipes
    ) {
      res.send(recipes);
    });
  },
};
