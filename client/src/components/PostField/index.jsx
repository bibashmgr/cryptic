import React from 'react';

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
  return (
    <Card>
      <CardHeader>
        <CardAvatar src='/images/avatar.jpg' />
        <CardUserName>@keepitlow</CardUserName>
      </CardHeader>
      <CardContent>
        <CardTextField type='text' placeholder='Type your confession' />
      </CardContent>
      <CardButton>
        <ShareButton>Share</ShareButton>
      </CardButton>
    </Card>
  );
};

export default PostField;
