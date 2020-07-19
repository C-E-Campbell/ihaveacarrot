import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ViewRecipe(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${props.match.params['id']}/information`,
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
      .then((data) => setData(data))
      .catch((error) => console.log(error.message));
  }, []);

  const addFavorite = (id, title, image) => {
    const data = {
      recipeId: id,
      image,
      title,
    };
    if (props.token !== '') {
      fetch('/iHAC/v1/recipes/saveRecipe', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          authorization: `${props.token}`,
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      alert('Must sign up or login');
    }
  };

  return (
    <div className="container">
      <h2>{data.title}</h2>
      <button
        onClick={addFavorite}
        className="waves-effect waves-light btn #fb8c00 orange darken-1"
      >
        Save Recipe
      </button>
      <h6>{`Serving Size: ${data.servings}`}</h6>
      <h6>{`Cooking Time: ${data.cookingMinutes}`}</h6>
      <img src={data.image} alt="food" />
      <ul></ul>
      <p>{data.summary}</p>
      <p>{data.instructions}</p>
    </div>
  );
}
export default withRouter(ViewRecipe);
