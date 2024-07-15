// src/pages/Profile.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="container m-auto flex flex-col items-center">
      <h1 className="text-2xl font-bold">Profile</h1>
      {user ? (
        <div className="mt-4">
          <p><strong>Welcome</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>role:</strong> {user.role}</p>
          <p><strong>avatar:</strong> <img src={user.avatar} alt="" /> </p>
          {/* Add more user information as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
