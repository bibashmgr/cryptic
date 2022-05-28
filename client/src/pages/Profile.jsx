import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../styles/Main.scss';
import '../styles/Profile.scss';

import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import ProfileCard from '../components/ProfileCard';
import MiddleBar from '../components/MiddleBar';
import Posts from '../components/Posts';

const Profile = ({ setIsAuth }) => {
  const BASE_URL = 'https://cryptix-backend.herokuapp.com';

  const navigate = useNavigate();

  const [user, setUser] = useState('');
  const [loginUser, setLoginUser] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const [myPosts, setMyPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState({});

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/users/profile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((res) => res.data)
      .then((data) => setUser(data.username))
      .catch((err) => {
        if (err.response.data === 'ACCESS DENIED' || 'TOKEN NOT FOUND') {
          setIsAuth(false);
          localStorage.removeItem('accessToken');
          navigate('/login');
        }
      });
  }, [setIsAuth, navigate, BASE_URL]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/posts/myposts`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((res) => res.data)
      .then((data) => {
        setMyPosts(data.posts);
        setLoginUser(data.userId);
      })
      .catch((err) => {
        if (err.response.data === 'ACCESS DENIED' || 'TOKEN NOT FOUND') {
          setIsAuth(false);
          localStorage.removeItem('accessToken');
          navigate('/login');
        }
      });
  }, [setIsAuth, navigate, BASE_URL]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/posts/savedposts`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((res) => res.data)
      .then((data) => {
        setSavedPosts(data.filterPosts);
      })
      .catch((err) => {
        if (err.response.data === 'ACCESS DENIED' || 'TOKEN NOT FOUND') {
          setIsAuth(false);
          localStorage.removeItem('accessToken');
          navigate('/login');
        }
      });
  }, [setIsAuth, navigate, BASE_URL]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className='main-container'>
        <div className='sub-container'>
          <div className='profile-container'>
            <ProfileCard user={user} />
            <MiddleBar setIsOpen={setIsOpen} />
            <Posts
              posts={isOpen ? myPosts : savedPosts}
              loginUser={loginUser}
            />
          </div>
        </div>
      </div>
      <TopBar setIsAuth={setIsAuth} />
      <NavBar />
    </div>
  );
};

export default Profile;
