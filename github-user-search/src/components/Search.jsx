import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (username.trim() === '') return;
    setLoading(true);
    setError('');
    setUserData(null);

    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      const data = response.data;

      if (data.login) {
        setUserData(data);
      } else {
        setError('User not found');
      }
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
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
