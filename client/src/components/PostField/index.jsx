import React from 'react';
import { useState, useEffect } from 'react';

import axios from 'axios';

import {
  Card,
  CardAvatar,
  CardButton,
  CardContent,
  CardHeader,
  CardTextField,
  CardUserName,
  ShareButton,
} from './PostFieldElements';

const PostField = () => {
  const BASE_URL = process.env.REACT_APP_SERVER_URL;

  const loginUser = localStorage.getItem('loginUser');
  // const [loginUser, setLoginUser] = useState(localStorage.getItem('loginUser'));

  const [post, setPost] = useState({
    userId: loginUser,
    desc: '',
  });
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/users/${loginUser}`)
      .then((res) => res.data)
      .then((data) => setCurrentUser(data));
  }, [loginUser, BASE_URL]);

  const handleChange = (e) => {
    setPost({
      ...post,
      desc: e.target.value,
    });
  };

  const handleShare = (e) => {
    let errors = {};
    if (post.desc === '') {
      errors.desc = 'Text is empty';
    }

    if (Object.entries(errors).length === 0) {
      axios.post(`${BASE_URL}/api/posts`, post).then((res) => {
        if (res.status === 201) {
          setPost({
            userId: '',
            desc: '',
          });
        }
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardAvatar src='/images/default_avatar.jpg' />
        <CardUserName>{currentUser.username}</CardUserName>
      </CardHeader>
      <CardContent>
        <CardTextField
          id='confession'
          name='confession'
          placeholder='Type your confession'
          rows='10'
          value={post.desc}
          onChange={handleChange}
        ></CardTextField>
      </CardContent>
      <CardButton>
        <ShareButton type='button' onClick={handleShare}>
          Share
        </ShareButton>
      </CardButton>
    </Card>
  );
};

export default PostField;
