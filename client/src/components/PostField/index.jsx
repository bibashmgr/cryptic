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
  // state:
  const [post, setPost] = useState('');
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    const loginUser = localStorage.getItem('loginUser');
    axios
      .get(`http://localhost:8080/api/users/${loginUser}`)
      .then((res) => res.data)
      .then((data) => setCurrentUser(data));
  }, []);

  const handleChange = (e) => {
    setPost(e.target.value);
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
          value={post}
          onChange={handleChange}
        ></CardTextField>
      </CardContent>
      <CardButton>
        <ShareButton type='button'>Share</ShareButton>
      </CardButton>
    </Card>
  );
};

export default PostField;
