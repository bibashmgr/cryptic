import React from 'react';
import { useState, useEffect } from 'react';

import axios from 'axios';
import moment from 'moment';

// elements
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

// icons
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';

const Post = ({ post }) => {
  // variables:
  const loginUser = localStorage.getItem('loginUser');

  // styles:
  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#78bcff',
  };

  // states:
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
      .get(`http://localhost:8080/api/users/${post.userId}`)
      .then((res) => res.data)
      .then((data) => setUsername(data.username));
  }, [post.userId]);

  // handlers:
  const handleLike = () => {
    axios
      .put(`http://localhost:8080/api/posts/${post._id}/like`, {
        userId: loginUser,
      })
      .then((res) => console.log(res));
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
    setIsLiked(!isLiked);
  };

  const handleSave = (e) => {
    axios
      .put(`http://localhost:8080/api/posts/${post._id}/save`, {
        userId: loginUser,
      })
      .then((res) => console.log(res));
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
