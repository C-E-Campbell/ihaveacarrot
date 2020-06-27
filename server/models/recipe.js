const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema({
  title: {
    type: String,
  },
  description: String,
});

const Recipe = mongoose.model('Recipe', RecipeSchema);
module.exports = Recipe;
