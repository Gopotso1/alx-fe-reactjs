import React, { useState } from 'react';
import fetchUserData from './services/githubService';

import axios from 'axios';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1); // Track the page number for pagination
  const [totalResults, setTotalResults] = useState(0);

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleMinReposChange = (event) => {
    setMinRepos(event.target.value);
  };

  const fetchUserData = async (page = 1) => {
    const query = `user:${username}${location ? `+location:${location}` : ''}${minRepos ? `+repos:>${minRepos}` : ''}`;
    try {
      setLoading(true);
      setError('');
      const response = await axios.get(`https://api.github.com/search/users?q=${query}&page=${page}`);
      const data = response.data;

      if (data.items.length > 0) {
        setUserData(data.items);
        setTotalResults(data.total_count);
      } else {
        setError('No users found matching your criteria.');
      }
    } catch (err) {
      setError('An error occurred while fetching data.');
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (username.trim() === '') return;
    fetchUserData(page);
  };

  const loadMoreResults = () => {
    fetchUserData(page + 1);
    setPage(page + 1);
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <input 
          type="text" 
          value={username} 
          onChange={handleInputChange} 
          placeholder="Enter GitHub username"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <input 
          type="text" 
          value={location} 
          onChange={handleLocationChange} 
          placeholder="Location (optional)"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <input 
          type="number" 
          value={minRepos} 
          onChange={handleMinReposChange} 
          placeholder="Minimum Repositories (optional)"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <button 
          type="submit" 
          className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {userData && !loading && !error && (
        <div>
          <h2 className="font-bold mt-4">{totalResults} Users Found</h2>
          <div className="space-y-4 mt-4">
            {userData.map((user) => (
              <div key={user.id} className="border p-4 rounded-md shadow-sm">
                <img src={user.avatar_url} alt="User Avatar" width="100" />
                <h3 className="font-bold">{user.login}</h3>
                {user.location && <p>Location: {user.location}</p>}
                <p>Repositories: {user.public_repos}</p>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Profile</a>
              </div>
            ))}
          </div>
          {userData.length < totalResults && (
            <button 
              onClick={loadMoreResults} 
              className="mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Load More
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
