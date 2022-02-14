import React from 'react';

// elements
import {
  LogoutLogo,
  TopBarBox,
  TopBarContainer,
  TopBarLogo,
  TopBarLogout,
} from './TopBarElements';

const TopBar = () => {
  return (
    <TopBarContainer>
      <TopBarBox>
        <TopBarLogo>cryptic</TopBarLogo>
        <TopBarLogout>
          <LogoutLogo />
        </TopBarLogout>
      </TopBarBox>
    </TopBarContainer>
  );
};

export default TopBar;
