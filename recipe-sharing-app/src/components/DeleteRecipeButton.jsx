import React from 'react';
import useRecipeStore from '../store/recipeStore';
import './DeleteRecipeButton.css';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  return (
    <button onClick={() => deleteRecipe(recipeId)} className="delete-button">
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
