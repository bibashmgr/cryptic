import React from 'react';

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

const Post = () => {
  return (
    <Card>
      <CardHeader>
        <CardAvatar src='/images/avatar.jpg' />
        <CardHeaderText>
          <CardUserName>@keepitlow</CardUserName>
          <CardDate>20 Jan 2020, 8:30 AM</CardDate>
        </CardHeaderText>
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
          <LikeCount>10</LikeCount>
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
