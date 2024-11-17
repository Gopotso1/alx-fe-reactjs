
import React from 'react';
import useRecipeStore from '../../store/recipeStore';
import FavoriteItem from './FavoriteItem';

const FavoritesList = () => {
  const favorites = useRecipeStore(state => state.favorites.map(id =>
    state.recipes.find(recipe => recipe.id === id)
  ));

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map(recipe => (
        <FavoriteItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default FavoritesList;