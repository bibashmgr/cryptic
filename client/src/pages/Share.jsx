import React from 'react';

// scss
import '../styles/Main.scss';

// components
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import PostField from '../components/PostField';

const Share = ({ setIsAuth }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className='main-container'>
        <div className='sub-container'>
          <PostField />
        </div>
      </div>
      <TopBar setIsAuth={setIsAuth} />
      <NavBar />
    </div>
  );
};

export default Share;
