const mongoose = require('mongoose');
const { Router } = require('express');

const RecipeSchema = mongoose.Schema({
  recipeId: String,
  userId: String,
});

const Recipe = mongoose.model('Recipe', RecipeSchema);
module.exports = Recipe;
