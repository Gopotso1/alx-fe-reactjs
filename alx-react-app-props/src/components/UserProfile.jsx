import React, { useContext } from 'react';
import UserContext from '../UserContext'; // Import the UserContext

const UserProfile = () => {
  const userData = useContext(UserContext); // Consume the UserContext

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
};

export default UserProfile;
