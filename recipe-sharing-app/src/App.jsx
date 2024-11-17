import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Recipe Sharing App</h1>
        
        {/* Search Bar for searching recipes */}
        <SearchBar />
        
        {/* Links for navigation */}
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/favorites">My Favorites</Link> | 
          <Link to="/recommendations">Recommendations</Link>
        </nav>

        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
