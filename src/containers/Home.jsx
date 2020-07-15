import React, { useState } from 'react';
import axios from 'axios';
export default function Home() {
  const [ingredients, setIngredients] = useState('');

  const handleChange = (e) => {
    setIngredients(e.target.value);
  };

  const handleClick = async () => {
    setIngredients('');
  };

  return (
    <div>
      <input
        value={ingredients}
        onChange={(e) => handleChange(e)}
        placeholder="search recipes"
      />
      <button onClick={() => handleClick()}>Search</button>
    </div>
  );
}
