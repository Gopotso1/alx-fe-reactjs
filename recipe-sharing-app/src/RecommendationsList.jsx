<<<<<<< HEAD

import { useRecipeStore } from '../recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);

  return (
    <div>
      <h2>Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations available.</p>
      ) : (
        recommendations.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
=======
const updateRecommendations = async (favorites, set) => {
    if (favorites.length > 0) {
      try {
        const favoriteIds = favorites.map((recipe) => recipe.id);
        
        
        const response = await fetch(`/api/recommendations?favorites=${favoriteIds.join(',')}`);
        const data = await response.json();
  
       
        set({ recommendations: data.recommendations });
      } catch (error) {
        console.error('Error fetching recommendations:', error);
        set({ recommendations: [] });
      }
    } else {
      set({ recommendations: [] });
    }
  };
  
>>>>>>> 727908988389a21f4c05d6eebe7c9ead84452458
