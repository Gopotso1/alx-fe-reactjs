import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the data from the public folder (should be served from the public directory)
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Recipes:", data);  // This will print all the recipes in the console
        setRecipes(data);  // Update the state with the fetched recipes
        setLoading(false);  // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error('Error fetching recipe data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">Recipe Sharing Platform</h1>
      {loading ? (
        <p>Loading recipes...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{recipe.title}</h2>
                <p className="text-gray-700 text-sm mt-2">{recipe.summary}</p>
                <Link
                  to={`/recipe/${recipe.id}`}
                  className="text-blue-500 mt-4 inline-block hover:underline"
                >
                  View Recipe
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
