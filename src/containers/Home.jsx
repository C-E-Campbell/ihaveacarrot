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
    const formatIngredients = ingredients
      .split(',')
      .map((ingredient) => ingredient.trim())
      .join(',')
      .replace(',', '%252');
    console.log(formatIngredients);
    setIngredients('');

    fetch(
      `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=6&ranking=1&ignorePantry=false&ingredients=${formatIngredients}`,
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
            <h3 data-aos="fade-in" data-aos-once="true">
              How It Works:
            </h3>
            <h4
              className={styles.instructions}
              data-aos="fade-in"
              data-aos-once="true"
            >
              So you wanna make some grub but you only have some random items in
              the fridge? Type in your ingredients (separated by a comma: apple,
              banana, frog) and lets see what we can find for you.
            </h4>
          </div>
        </div>
        <div className="row" style={{ marginBottom: '100px' }}>
          <div className="col s3 "></div>
          <div className="col s12 m6 center-align">
            <input
              data-aos="fade-in"
              data-aos-once="true"
              value={ingredients}
              onChange={(e) => handleChange(e)}
              placeholder='try searching "carrot"'
            />
            <button
              data-aos="fade-in"
              data-aos-once="true"
              onClick={() => handleClick()}
              className="waves-effect waves-light btn"
            >
              Search
              <i className="material-icons search"></i>
            </button>
          </div>
          <div className="col s3 "></div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">{recipesArr}</div>
        </div>
      </div>
    </div>
  );
}
