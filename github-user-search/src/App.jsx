import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [user, setUser] = useState('');          // Stores the user input (GitHub username)
  const [userData, setUserData] = useState(null); // Stores the fetched user data
  const [loading, setLoading] = useState(false);  // Stores the loading state
  const [error, setError] = useState('');        // Stores any error message

  const handleSearch = async () => {
    if (user.trim() === '') return; // Prevent search if the input is empty

    setLoading(true);   // Set loading to true before starting the API call
    setError('');       // Clear any previous error
    setUserData(null);  // Reset previous user data

    try {
      // Make an API call to GitHub using Axios to fetch user data
      const response = await axios.get(`https://api.github.com/users/${user}`);
      setUserData(response.data); // Update state with the fetched user data
    } catch (err) {
      setError('User not found'); // Set an error message if user is not found or API fails
    } finally {
      setLoading(false); // Set loading to false after the request completes
    }
  };

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)} // Update state when user types
        placeholder="Search GitHub user..."
      />
      <button onClick={handleSearch}>Search</button>

      {/* Display loading state */}
      {loading && <p>Loading...</p>}

      {/* Display error if user not found */}
      {error && <p>{error}</p>}

      {/* Display user data if available */}
      {userData && !loading && !error && (
        <div>
          <img src={userData.avatar_url} alt="User Avatar" width="100" />
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
