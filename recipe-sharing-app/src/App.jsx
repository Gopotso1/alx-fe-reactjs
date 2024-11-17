
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const recipes = useRecipeStore((state) => state.recipes);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  const toggleFavorite = (recipeId) => {
    if (useRecipeStore.getState().favorites.includes(recipeId)) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
    generateRecommendations();
  };

  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/favorites">My Favorites</Link> | <Link to="/recommendations">Recommendations</Link>
        </nav>

        <Routes>
          <Route path="/" element={<RecipeList toggleFavorite={toggleFavorite} />} />
          <Route path="/recipe/:id" element={<RecipeDetails toggleFavorite={toggleFavorite} />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
