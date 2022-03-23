import React from 'react';

import { Card, CardAvatar, CardUsername } from './ProfileCardElements';

const ProfileCard = ({ user }) => {
  return (
    <Card>
      <CardAvatar src='/images/default_avatar.jpg' />
      <CardUsername>{user}</CardUsername>
    </Card>
  );
};

export default ProfileCard;
