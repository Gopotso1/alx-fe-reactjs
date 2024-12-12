import React, { useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
  
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

      {userData && (
        <div>
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
