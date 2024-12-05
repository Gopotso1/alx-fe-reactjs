import React, { useState } from 'react';

const AddRecipeForm = () => {
  // Step 1: Set up state variables for form fields and validation errors
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({}); // Track errors for form validation

  // Step 2: Validation function
  const validate = () => {
    const validationErrors = {};
    if (!title) {
      validationErrors.title = 'Title is required.';
    }
    if (!ingredients) {
      validationErrors.ingredients = 'Ingredients are required.';
    } else if (ingredients.split("\n").length < 2) {
      validationErrors.ingredients = 'Please add at least two ingredients.';
    }
    if (!steps) {
      validationErrors.steps = 'Cooking steps are required.';
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0; // If no errors, return true
  };

  // Step 3: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return; // If validation fails, prevent form submission
    }

    // If validation passes, clear the errors and log the recipe
    setErrors({});
    const newRecipe = {
      title,
      ingredients: ingredients.split("\n").map((ingredient) => ingredient.trim()).filter(Boolean),
      steps,
    };

    console.log('New Recipe:', newRecipe);

    // Reset form fields after submission
    setTitle('');
    setIngredients('');
    setSteps('');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6 text-center">Add New Recipe</h1>

      {/* Step 4: Display validation errors */}
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-md">
        
        {/* Display validation errors */}
        {Object.keys(errors).length > 0 && (
          <div className="mb-4 text-red-500">
            {Object.values(errors).map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}

        {/* Recipe Title */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe Title"
          className={`w-full p-2 mb-4 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md`}
        />

        {/* Ingredients (Textarea) */}
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Ingredients (one per line)"
          rows="4"
          className={`w-full p-2 mb-4 border ${errors.ingredients ? 'border-red-500' : 'border-gray-300'} rounded-md`}
        />

        {/* Cooking Steps (Textarea) */}
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          placeholder="Cooking Steps"
          rows="4"
          className={`w-full p-2 mb-4 border ${errors.steps ? 'border-red-500' : 'border-gray-300'} rounded-md`}
        />

        {/* Submit Button */}
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
