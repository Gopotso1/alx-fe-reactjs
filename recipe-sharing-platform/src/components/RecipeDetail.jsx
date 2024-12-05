import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams(); 
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/data.json')  
      .then((response) => response.json())
      .then((data) => {
       
        const foundRecipe = data.find((recipe) => recipe.id === parseInt(id));
        if (foundRecipe) {
          setRecipe(foundRecipe);
        } else {
          console.error("Recipe not found!");
        }
      })
      .catch((error) => {
        console.error('Error fetching recipe data:', error);
      });
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">{recipe.title}</h1>
      <div className="flex justify-center items-center">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full md:w-1/2 h-auto object-cover mb-6"
        />
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
        <ul className="list-disc pl-5 mb-6">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">{ingredient}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
        <ol className="list-decimal pl-5 mb-6">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="text-gray-700">{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
