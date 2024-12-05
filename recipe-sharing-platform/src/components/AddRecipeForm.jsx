import React, { useState } from 'react';

const AddRecipeForm = () => {

  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState(''); 
  const [error, setError] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

  
    if (!title || !ingredients || !steps) {
      setError('All fields are required!');
      return;
    }

    const ingredientList = ingredients.split("\n").map((ingredient) => ingredient.trim()).filter(Boolean);
    if (ingredientList.length < 2) {
      setError('Ingredients must contain at least two items.');
      return;
    }

 
    setError('');

    const newRecipe = {
      title,
      ingredients: ingredientList,
      steps, 
    };

    console.log('New Recipe:', newRecipe);

  
    setTitle('');
    setIngredients('');
    setSteps('');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6 text-center">Add New Recipe</h1>
     
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-md">
        
      
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe Title"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />

       
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Ingredients (one per line)"
          rows="4"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />

       
        <textarea
          value={steps}  
          onChange={(e) => setSteps(e.target.value)}  
          placeholder="Cooking Steps"
          rows="4"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
        />

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
