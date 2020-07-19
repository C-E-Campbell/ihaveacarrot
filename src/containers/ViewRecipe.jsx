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

  return <div>Hell</div>;
}
export default withRouter(ViewRecipe);
