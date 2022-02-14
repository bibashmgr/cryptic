import React from 'react';

// elements
import {
  HomeLogo,
  NavBarContainer,
  NavItem,
  NavItems,
  NavLink,
  ProfileLogo,
  ShareLogo,
} from './NavBarElements';

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavItems>
        <NavItem>
          <NavLink>
            <HomeLogo />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <ShareLogo />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <ProfileLogo />
          </NavLink>
        </NavItem>
      </NavItems>
    </NavBarContainer>
  );
};

export default NavBar;
