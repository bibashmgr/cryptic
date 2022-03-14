import React from 'react';
import { useState, useEffect } from 'react';

import axios from 'axios';

// elements
import { Card, CardAvatar, CardUsername } from './ProfileCardElements';

const ProfileCard = () => {
  // state:
  const [currentUser, setCurrentUser] = useState('');

  useEffect(() => {
    const loginUser = localStorage.getItem('loginUser');
    axios
      .get(`http://localhost:8080/api/users/${loginUser}`)
      .then((res) => res.data)
      .then((data) => setCurrentUser(data));
  }, []);
  return (
    <Card>
      <CardAvatar src='/images/default_avatar.jpg' />
      <CardUsername>{currentUser.username}</CardUsername>
    </Card>
  );
};

export default ProfileCard;
