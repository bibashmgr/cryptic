import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

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

const Post = ({ post }) => {
  const BASE_URL = process.env.REACT_APP_SERVER_URL;

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#78bcff',
  };

  const loginUser = localStorage.getItem('loginUser');

  // const [loginUser, setLoginUser] = useState(localStorage.getItem('loginUser'));
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
      .get(`${BASE_URL}/api/users/${post.userId}`)
      .then((res) => res.data)
      .then((data) => setUsername(data.username));
  }, [post.userId, BASE_URL]);

  const handleLike = () => {
    axios.put(`${BASE_URL}/api/posts/${post._id}/like`, {
      userId: loginUser,
    });
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
    setIsLiked(!isLiked);
  };

  const handleSave = (e) => {
    axios.put(`${BASE_URL}/api/posts/${post._id}/save`, {
      userId: loginUser,
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
