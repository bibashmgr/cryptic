import React from 'react';
import { useState, useEffect } from 'react';

import axios from 'axios';

// scss
import '../styles/Main.scss';
import '../styles/Home.scss';

// components
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Post from '../components/Post';

const Home = () => {
  // states:
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/posts')
      .then((res) => res.data)
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className='main-container'>
        <div className='sub-container'>
          <div className='post-container'>
            {posts.map((post) => {
              return <Post key={post._id} post={post} />;
            })}
          </div>
        </div>
      </div>
      <TopBar />
      <NavBar />
    </div>
  );
};

export default Home;
