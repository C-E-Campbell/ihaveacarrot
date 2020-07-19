import React, { useEffect, useState } from 'react';

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
    return <div>{res.recipeId}</div>;
  });
  return <div>{myRecipes}</div>;
}
