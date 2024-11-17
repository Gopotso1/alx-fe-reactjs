
import { useRecipeStore } from '../recipeStore';

const RecipeDetails = ({ recipeId, toggleFavorite }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );

  if (!recipe) return <p>Recipe not found!</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <button onClick={() => toggleFavorite(recipe.id)}>
        {useRecipeStore.getState().favorites.includes(recipe.id)
          ? 'Remove from Favorites'
          : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default RecipeDetails;
