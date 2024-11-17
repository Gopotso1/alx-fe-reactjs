import React from 'react';
import AddRecipeForm from './components/AddRecipeForm.jsx';
import RecipeList from './components/RecipeList';

const App = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
};

export default App;