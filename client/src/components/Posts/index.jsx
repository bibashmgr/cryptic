import React from 'react';

import Post from '../Post';

import { PostContainer } from './PostsElements';

const Posts = ({ posts, loginUser }) => {
  return (
    <PostContainer>
      {posts.map((post) => {
        return <Post key={post._id} post={post} loginUser={loginUser} />;
      })}
    </PostContainer>
  );
};

export default Posts;
