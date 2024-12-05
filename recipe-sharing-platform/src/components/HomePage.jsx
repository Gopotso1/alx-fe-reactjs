import { useState, useEffect } from 'react';


import spaghettiCarbonaraImage from '../images/spaghetti-carbonara.jpg';
import chickenTikkaMasalaImage from '../images/chicken-tikka-masala.jpg';
import vegetableStirFryImage from '../images/vegetable-stir-fry.jpg';
import beefStewImage from '../images/beef-stew.jpg';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {

    setRecipes([
      {
        id: 1,
        title: "Spaghetti Carbonara",
        summary: "A classic Italian pasta dish with eggs, cheese, bacon, and black pepper.",
        image: spaghettiCarbonaraImage,
      },
      {
        id: 2,
        title: "Chicken Tikka Masala",
        summary: "Chunks of grilled chicken (tikka) cooked in a smooth buttery & creamy tomato-based gravy.",
        image: chickenTikkaMasalaImage,
      },
      {
        id: 3,
        title: "Vegetable Stir Fry",
        summary: "A healthy and colorful mix of stir-fried vegetables served with rice or noodles.",
        image: vegetableStirFryImage,
      },
      {
        id: 4,
        title: "Beef Stew",
        summary: "A hearty stew made with tender beef, vegetables, and rich broth.",
        image: beefStewImage,
      },
    ]);
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