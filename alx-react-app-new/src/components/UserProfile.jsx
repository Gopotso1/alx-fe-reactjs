import React from 'react';

const UserProfile = (props) => {
  return (
    <div style={{ border: '1px solid gray', padding: '20px', margin: '10px', borderRadius: '8px', maxWidth: '300px' }}>
      <h2 style={{ color: 'blue', fontSize: '1.5em', marginBottom: '10px' }}>{props.name}</h2>
      <p style={{ margin: '5px 0' }}>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p style={{ margin: '5px 0' }}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
