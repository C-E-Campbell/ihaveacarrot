import React, { useEffect, useState } from 'react';
import Recipe from '../components/Recipe';
import styles from '../styles/MyRecipes.module.css';
export default function MyRecipes(props) {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch('/iHAC/v1/recipes/getRecipe', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `${props.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const myRecipes = recipes.map((res) => {
    return <Recipe image={res.image} title={res.title} id={res.recipeId} />;
  });
  return (
    <div className="container">
      <h2 className={styles.font}>My Recipes</h2>
      <h4 className={styles.font}>Click recipe to view details</h4>
      <div className="row">
        <div className="md-4 s-12">{myRecipes}</div>
      </div>
    </div>
  );
}
