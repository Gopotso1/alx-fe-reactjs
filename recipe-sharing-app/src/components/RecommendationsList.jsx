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
  
