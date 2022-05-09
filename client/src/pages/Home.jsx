import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../styles/Main.scss';
import '../styles/Home.scss';

import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Post from '../components/Post';

const Home = ({ setIsAuth }) => {
  const BASE_URL = process.env.REACT_APP_SERVER_URL;

  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  const [loginUser, setLoginUser] = useState('');

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/posts`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((res) => res.data)
      .then((data) => {
        setPosts(data.posts);
        setLoginUser(data.userId);
      })
      .catch((err) => {
        if (err.response.data === 'ACCESS DENIED' || 'TOKEN NOT FOUND') {
          setIsAuth(false);
          localStorage.removeItem('accessToken');
          navigate('/login');
        }
      });
  }, [BASE_URL, navigate, setIsAuth]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className='main-container'>
        <div className='sub-container'>
          <div className='post-container'>
            {posts.map((post) => {
              return (
                <Post
                  key={post._id}
                  post={post}
                  loginUser={loginUser}
                  setIsAuth={setIsAuth}
                />
              );
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
