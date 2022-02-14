import React from 'react';

// scss
import '../styles/Main.scss';

// components
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';

const Profile = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className='main-container'>
        <div className='sub-container'></div>
      </div>
      <TopBar />
      <NavBar />
    </div>
  );
};

export default Profile;
