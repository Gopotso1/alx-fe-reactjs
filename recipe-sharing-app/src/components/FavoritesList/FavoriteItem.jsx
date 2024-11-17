import React from 'react';

const FavoriteItem = ({ recipe }) => {
  return (
    <div>
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
    </div>
  );
};

export default FavoriteItem;
