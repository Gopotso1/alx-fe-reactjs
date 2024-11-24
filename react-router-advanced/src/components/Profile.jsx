import React from 'react';
import { Route, Routes, Link, useMatch } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = () => {
  let { path, url } = useMatch();

  return (
    <div>
      <h2>Profile</h2>
      <ul>
        <li>
          <Link to={`${url}/details`}>Profile Details</Link>
        </li>
        <li>
          <Link to={`${url}/settings`}>Profile Settings</Link>
        </li>
      </ul>
      <Routes>
        <Route path={`${path}`} element={<div><h3>Please select a sub-section.</h3></div>} />
        <Route path={`${path}/details`} element={<ProfileDetails />} />
        <Route path={`${path}/settings`} element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;
