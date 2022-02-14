import React from 'react';

// scss
import '../styles/Home.scss';

// components
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';

const Home = () => {
  return (
    <div className='main-container'>
      <div className='sub-container'>
        <TopBar />
        <NavBar />
      </div>
    </div>
  );
};

export default Home;
