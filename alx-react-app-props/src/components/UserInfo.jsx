import React, { useContext } from 'react';
import UserDetails from './UserDetails';
import UserContext from './UserContext'; // Import the UserContext

function UserInfo() {
  const userData = useContext(UserContext); // Consume the context

  return <UserDetails userData={userData} />; // Pass the userData to UserDetails
}

export default UserInfo;