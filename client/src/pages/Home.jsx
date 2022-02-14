import React from 'react';

// scss
import '../styles/Main.scss';
import '../styles/Home.scss';

// components
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Post from '../components/Post';

const Home = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className='main-container'>
        <div className='sub-container'>
          <div className='post-container'>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
      </div>
      <TopBar />
      <NavBar />
    </div>
  );
};

export default Home;
