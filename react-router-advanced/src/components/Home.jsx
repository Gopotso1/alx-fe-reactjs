import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the React Router Advanced Demo</h1>
      <p>
        This application demonstrates advanced routing techniques using React Router,
        including nested routes, dynamic routing, and protected routes.
      </p>
      <nav>
        <ul>
          <li><Link to="/profile">Go to Profile</Link></li>
          <li><Link to="/post/1">View Blog Post 1</Link></li>
          <li><Link to="/post/2">View Blog Post 2</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
