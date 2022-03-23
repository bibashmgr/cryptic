import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

import '../styles/Main.scss';
import '../styles/Home.scss';

import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Post from '../components/Post';

const Home = ({ setIsAuth }) => {
  const BASE_URL = process.env.REACT_APP_SERVER_URL;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/posts`)
      .then((res) => res.data)
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  }, [BASE_URL]);

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
      <TopBar setIsAuth={setIsAuth} />
      <NavBar />
    </div>
  );
};

export default Home;
