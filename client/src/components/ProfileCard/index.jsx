import React from 'react';

// elements
import { Card, CardAvatar, CardUsername } from './ProfileCardElements';

const ProfileCard = () => {
  return (
    <Card>
      <CardAvatar src='/images/avatar.jpg' />
      <CardUsername>@keepitlow</CardUsername>
    </Card>
  );
};

export default ProfileCard;
