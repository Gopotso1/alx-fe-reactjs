import { useState, useEffect } from 'react';
import recipeData from '../data.json';  

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
   
    setRecipes(recipeData);
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="text-gray-700 text-sm mt-2">{recipe.summary}</p>
              <a href={`/recipe/${recipe.id}`} className="text-blue-500 mt-4 inline-block hover:underline">
                View Recipe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;