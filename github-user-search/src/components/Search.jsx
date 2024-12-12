import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';  


const Search = () => {
  const [username, setUsername] = useState(''); 
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (username.trim() === '') return; 
    setLoading(true);
    setError(null); 

    try {
      const data = await fetchUserData(username);
      setUserData(data); 
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input 
          type="text" 
          value={username} 
          onChange={handleInputChange} 
          placeholder="Enter GitHub username" 
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {userData && !loading && !error && (
        <div>
          <img src={userData.avatar_url} alt="User Avatar" width="100" />
          <h2>{userData.name}</h2>
          <p>{userData.bio}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
