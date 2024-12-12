import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [user, setUser] = useState('');         
  const [userData, setUserData] = useState(null); 
  const [loading, setLoading] = useState(false);  
  const [error, setError] = useState('');        

  const handleSearch = async () => {
    if (user.trim() === '') return; 

    setLoading(true);   
    setError('');       
    setUserData(null);  

    try {
      
      const response = await axios.get(`https://api.github.com/users/${user}`);
      setUserData(response.data); 
    } catch (err) {
      setError('User not found'); 
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)} 
        placeholder="Search GitHub user..."
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}

     
      {error && <p>{error}</p>}

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
