
import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],  
  searchTerm: '',  
  setSearchTerm: (term) => set({ searchTerm: term }),  
  filteredRecipes: [],  
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase()) // Search by description as
    )
  })),
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes })
}));

export { useRecipeStore };
