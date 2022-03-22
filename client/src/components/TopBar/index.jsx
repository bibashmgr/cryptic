import React from 'react';
import { useNavigate } from 'react-router-dom';

// elements
import {
  LogoutLogo,
  TopBarBox,
  TopBarContainer,
  TopBarLogo,
  TopBarLogout,
} from './TopBarElements';

const TopBar = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('loginUser');
    setIsAuth(false);
    navigate('/login');
  };

  return (
    <TopBarContainer>
      <TopBarBox>
        <TopBarLogo>cryptic</TopBarLogo>
        <TopBarLogout>
          <LogoutLogo title='logout' onClick={handleLogout} />
        </TopBarLogout>
      </TopBarBox>
    </TopBarContainer>
  );
};

export default TopBar;
