import React from 'react';
import { useState, useEffect } from 'react';

import axios from 'axios';

// elements
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
  // variables:
  const loginUser = localStorage.getItem('loginUser');

  // state:
  const [post, setPost] = useState({
    userId: loginUser,
    desc: '',
  });
  const [currentUser, setCurrentUser] = useState('');
  const [error, setError] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/users/${loginUser}`)
      .then((res) => res.data)
      .then((data) => setCurrentUser(data));
  }, [loginUser]);

  const handleChange = (e) => {
    setPost({
      ...post,
      desc: e.target.value,
    });
  };

  const handleShare = (e) => {
    let errors = {};
    if (post.userId === '') {
      errors.userId = 'UserId is empty';
    }
    if (post.desc === '') {
      errors.desc = 'Text is empty';
    }
    setError(errors);
    if (Object.entries(errors).length === 0) {
      axios.post('http://localhost:8080/api/posts', post).then((res) => {
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
