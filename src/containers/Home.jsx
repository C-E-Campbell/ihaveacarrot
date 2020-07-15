import React, { useState } from 'react';
import Hero from '../components/Hero';
import Recipe from '../components/Recipe';
import axios from 'axios';
export default function Home() {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleChange = (e) => {
    setIngredients(e.target.value);
  };

  const handleClick = async () => {
    setIngredients('');

    fetch(
      'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&ingredients=apples%252Cflour%252Csugar',
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host':
            'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
          'x-rapidapi-key':
            '19b199eeffmsh8e075ddcf84e120p179fa8jsnc57b1a2c2ded',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setRecipes(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const recipesArr = recipes.map((recipe) => <Recipe />);

  return (
    <div>
      <Hero />
      <div className="container">
        <input
          value={ingredients}
          onChange={(e) => handleChange(e)}
          placeholder="search recipes"
        />
        <button onClick={() => handleClick()}>Search</button>
      </div>
      <div>{recipesArr}</div>
    </div>
  );
}
