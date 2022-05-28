import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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

const PostField = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const loginUser = localStorage.getItem('loginUser');

  const [post, setPost] = useState({
    desc: '',
  });
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    axios
      .get('/api/users/profile', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((res) => res.data)
      .then((data) => setCurrentUser(data))
      .catch((err) => {
        if (err.response.data === 'ACCESS DENIED' || 'TOKEN NOT FOUND') {
          setIsAuth(false);
          localStorage.removeItem('accessToken');
          navigate('/login');
        }
      });
  }, [loginUser, navigate, setIsAuth]);

  const handleChange = (e) => {
    setPost({
      desc: e.target.value,
    });
  };

  const handleShare = (e) => {
    let errors = {};
    if (post.desc === '') {
      errors.others = 'Text is empty';
    }

    if (Object.entries(errors).length === 0) {
      post.desc = post.desc.replace(/</g, ' &lt; ').replace(/>/g, ' &gt; ');
      axios({
        method: 'post',
        url: '/api/posts',
        data: {
          desc: post.desc,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
        .then((res) => {
          if (res.status === 201) {
            setPost({
              desc: '',
            });
          }
        })
        .catch((err) => {
          if (err.response.data === 'ACCESS DENIED' || 'TOKEN NOT FOUND') {
            setIsAuth(false);
            localStorage.removeItem('accessToken');
            navigate('/login');
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
