import React, { useEffect } from 'react';
import { useState } from 'react';

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
  LikeCount,
  CardText,
  CardUserName,
  LikeButton,
  LikeLogo,
  SaveButton,
  SaveLogo,
} from './PostElements';

const Post = ({ post }) => {
  const [username, setUsername] = useState('');
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/users/${post.userId}`)
      .then((res) => res.data)
      .then((data) => setUsername(data.username));
  }, [post.userId]);
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
        <LikeButton>
          <LikeCount>{post.likes.length}</LikeCount>
          <LikeLogo />
        </LikeButton>
        <SaveButton>
          <SaveLogo />
        </SaveButton>
      </CardButtons>
    </Card>
  );
};

export default Post;
