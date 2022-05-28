import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

import {
  Card,
  CardAvatar,
  CardButtons,
  CardContent,
  CardDate,
  CardHeader,
  CardHeaderText,
  LikeCounter,
  CardText,
  CardUserName,
  LikeButton,
  SaveButton,
} from './PostElements';

import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';

const Post = ({ post, loginUser, setIsAuth }) => {
  const navigate = useNavigate();

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#78bcff',
  };

  const [username, setUsername] = useState('');
  const [likeCount, setLikeCount] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setIsLiked(post.likes.includes(loginUser));
    setIsSaved(post.saved.includes(loginUser));
  }, [loginUser, post.likes, post.saved]);

  useEffect(() => {
    axios
      .get(`/api/users/${post.userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
      .then((res) => res.data)
      .then((data) => setUsername(data.username))
      .catch((err) => {
        if (err.response.data === 'ACCESS DENIED' || 'TOKEN NOT FOUND') {
          setIsAuth(false);
          localStorage.removeItem('accessToken');
          navigate('/login');
        }
      });
  }, [post.userId, setIsAuth, navigate]);

  const handleLike = () => {
    axios({
      method: 'put',
      url: '/api/posts/like',
      data: {
        postId: post._id,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).catch((err) => {
      if (err.response.data === 'ACCESS DENIED' || 'TOKEN NOT FOUND') {
        setIsAuth(false);
        localStorage.removeItem('accessToken');
        navigate('/login');
      }
    });
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
    setIsLiked(!isLiked);
  };

  const handleSave = () => {
    axios({
      method: 'put',
      url: '/api/posts/save',
      data: {
        postId: post._id,
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).catch((err) => {
      if (err.response.data === 'ACCESS DENIED' || 'TOKEN NOT FOUND') {
        setIsAuth(false);
        localStorage.removeItem('accessToken');
        navigate('/login');
      }
    });
    setIsSaved(!isSaved);
  };

  return (
    <Card>
      <CardHeader>
        <CardAvatar src='/images/default_avatar.jpg' />
        <CardHeaderText>
          <CardUserName>{username}</CardUserName>
          <CardDate>{moment(post.createdAt).fromNow()}</CardDate>
        </CardHeaderText>
      </CardHeader>
      <CardContent>
        <CardText>{post.desc}</CardText>
      </CardContent>
      <CardButtons>
        <LikeButton onClick={handleLike}>
          <LikeCounter>{likeCount}</LikeCounter>
          {isLiked ? (
            <AiFillLike style={logoStyle} />
          ) : (
            <AiOutlineLike style={logoStyle} />
          )}
        </LikeButton>
        <SaveButton onClick={handleSave}>
          {isSaved ? (
            <BsBookmarkFill style={logoStyle} />
          ) : (
            <BsBookmark style={logoStyle} />
          )}
        </SaveButton>
      </CardButtons>
    </Card>
  );
};

export default Post;
