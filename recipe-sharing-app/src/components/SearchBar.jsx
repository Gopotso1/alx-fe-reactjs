import React from 'react';
import { useRecipeStore } from '../recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);  
    filterRecipes();  
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes by title or description..."
        onChange={handleSearchChange}
        className="search-bar"
      />
    </div>
  );
};

export default SearchBar;