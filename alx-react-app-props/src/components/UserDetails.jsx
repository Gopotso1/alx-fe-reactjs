import React, { useContext } from 'react';
import UserContext from './UserContext'; // Import the UserContext

function UserDetails() {
  const userData = useContext(UserContext); // Consume the context here

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
