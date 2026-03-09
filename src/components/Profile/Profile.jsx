import React from 'react';
import './Profile.css';

const Profile = ({url}) => {
  // TODO: Implement user profile functionality
  return (
    <button className="profile-button " title="View profile">
      <img src={url} alt="" className="w-10 object-cover h-10 
        rounded-full"/>
    </button>
  );
};

export default Profile;
