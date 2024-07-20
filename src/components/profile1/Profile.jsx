// src/pages/Profile.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";
import ReactLoading from 'react-loading';
const Profile = () => {
  const { user } = useSelector((state) => state.user);
  
  const { t, i18n } = useTranslation();
  return (
    <div className="container m-auto flex flex-col items-center" style={{marginTop:"30px"}}>
      <h1 className="text-2xl font-bold">Profile</h1>
      {user ? (
        <div className="mt-4">
          <p><strong>{t('Welcome')} </strong> {user.name}</p>
          <p><strong>{t('Email')} :</strong> {user.email}</p>
          <p><strong>{t('role')} :</strong> {user.role}</p>
          <p><strong>{t('avatar')} :</strong> <img src={user.avatar} alt="" /> </p>
          {/* Add more user information as needed */}
        </div>
      ) : (
        <p style={{ display: "grid", alignItems: 'center', justifyContent: 'center' , marginTop:"55px"}}><ReactLoading color="#0000000" /> Loading...</p>
      )}
    </div>
  );
};

export default Profile;
