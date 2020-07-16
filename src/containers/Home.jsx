import React, { useState } from 'react';
import Hero from '../components/Hero';
import Recipe from '../components/Recipe';
import styles from '../styles/Home.module.css';
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

  const recipesArr = recipes.map(
    ({
      id,
      title,
      image,
      missedIngredients,
      usedIngredients,
      usedIngredientCount,
      missedIngredientCount,
    }) => (
      <Recipe
        key={id}
        id={id}
        title={title}
        image={image}
        used={usedIngredientCount}
        missed={missedIngredientCount}
        missedIngrediants={missedIngredients}
        usedIngredients={usedIngredients}
      />
    )
  );

  return (
    <div>
      <Hero />
      <div className="container">
        <div className="row">
          <div className={styles.info}>
            <h3>How It Works:</h3>
            <h4>
              So you wanna make some grub but you only have some random items in
              the fridge? Type in your ingredients (separated by a comma: apple,
              banana, frog) and lets see what we can find for you.
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col s3 "></div>
          <div className="col s6 center-align">
            <input
              value={ingredients}
              onChange={(e) => handleChange(e)}
              placeholder="search recipes"
            />
            <a
              onClick={() => handleClick()}
              className="waves-effect waves-light btn"
            >
              Search
              <i className="material-icons search"></i>
            </a>
          </div>
          <div className="col s3 "></div>
        </div>
      </div>
      <div className={`container`}>
        <div className="row">
          <div className="col s6">{recipesArr}</div>
        </div>
      </div>
    </div>
  );
}
