import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],  // List of all recipes
  favorites: [],  // List of user favorites (by recipe ID)
  recommendations: [],  // Personalized recommendations

  // Add a recipe to favorites
  addFavorite: (recipeId) => set(state => {
    const updatedFavorites = [...state.favorites, recipeId];
    return {
      favorites: updatedFavorites,
    };
  }),

  // Remove a recipe from favorites
  removeFavorite: (recipeId) => set(state => {
    const updatedFavorites = state.favorites.filter(id => id !== recipeId);
    return {
      favorites: updatedFavorites,
    };
  }),

  // Generate recommendations based on favorites
  generateRecommendations: () => set(state => {
    // Generate recommendations by filtering recipes that match the user's favorites (example)
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5 // For now, mock recommendation based on randomness
    );
    return {
      recommendations: recommended,
    };
  }),

  // Set the list of all recipes (could be loaded from an API or elsewhere)
  setRecipes: (recipes) => set({ recipes }),
}));

export { useRecipeStore };
