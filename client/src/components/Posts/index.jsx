import React from 'react';

// components:
import Post from '../Post';

// elements:
import { PostContainer } from './PostsElements';

const Posts = ({ posts }) => {
  return (
    <PostContainer>
      {posts.map((post) => {
        return <Post key={post._id} post={post} />;
      })}
    </PostContainer>
  );
};

export default Posts;
