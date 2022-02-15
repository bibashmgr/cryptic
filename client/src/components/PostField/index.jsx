import React from 'react';
import { useState } from 'react';

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
  // state
  const [post, setPost] = useState('');

  const handleChange = (e) => {
    setPost(e.target.value);
  };

  return (
    <Card>
      <CardHeader>
        <CardAvatar src='/images/avatar.jpg' />
        <CardUserName>@keepitlow</CardUserName>
      </CardHeader>
      <CardContent>
        <CardTextField
          id='confession'
          name='confession'
          placeholder='Type your confession'
          rows='10'
          onChange={handleChange}
        >
          {post}
        </CardTextField>
      </CardContent>
      <CardButton>
        <ShareButton type='button'>Share</ShareButton>
      </CardButton>
    </Card>
  );
};

export default PostField;
