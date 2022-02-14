import React from 'react';

// scss
import '../styles/Main.scss';
import '../styles/Profile.scss';

// components
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import ProfileCard from '../components/ProfileCard';
import MiddleBar from '../components/MiddleBar';

const Profile = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className='main-container'>
        <div className='sub-container'>
          <div className='profile-container'>
            <ProfileCard />
            <MiddleBar />
          </div>
        </div>
      </div>
      <TopBar />
      <NavBar />
    </div>
  );
};

export default Profile;
