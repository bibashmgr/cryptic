import React from 'react';

// elements
import {
  Card,
  CardAvatar,
  CardButtons,
  CardContent,
  CardHeader,
  CardText,
  CardUserName,
  LikeButton,
  LikeLogo,
  SaveButton,
  SaveLogo,
} from './PostElements';

const Post = () => {
  return (
    <Card>
      <CardHeader>
        <CardAvatar src='/images/avatar.jpg' />
        <CardUserName>@keepitlow</CardUserName>
      </CardHeader>
      <CardContent>
        <CardText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum omnis
          atque mollitia quaerat provident debitis qui, similique veniam illo
          cum?
        </CardText>
      </CardContent>
      <CardButtons>
        <LikeButton>
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
