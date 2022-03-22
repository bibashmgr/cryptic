import React from 'react';
import { useState, useEffect } from 'react';

import axios from 'axios';

// scss
import '../styles/Main.scss';
import '../styles/Profile.scss';

// components
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import ProfileCard from '../components/ProfileCard';
import MiddleBar from '../components/MiddleBar';
import Posts from '../components/Posts';

const Profile = () => {
  const [loginUser, setLoginUser] = useState(localStorage.getItem('loginUser'));
  const [user, setUser] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const [myPosts, setMyPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/posts/myposts/${loginUser}`)
      .then((res) => res.data)
      .then((data) => setMyPosts(data));
  }, [loginUser]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/posts/savedposts/${loginUser}`)
      .then((res) => res.data)
      .then((data) => setSavedPosts(data));
  }, [loginUser]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/users/${loginUser}`)
      .then((res) => res.data)
      .then((data) => setUser(data.username));
  }, [loginUser]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className='main-container'>
        <div className='sub-container'>
          <div className='profile-container'>
            <ProfileCard user={user} />
            <MiddleBar setIsOpen={setIsOpen} />
            <Posts posts={isOpen ? myPosts : savedPosts} />
          </div>
        </div>
      </div>
      <TopBar />
      <NavBar />
    </div>
  );
};

export default Profile;
