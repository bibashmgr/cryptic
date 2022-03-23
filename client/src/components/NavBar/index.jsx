import React from 'react';
import { useState, useEffect } from 'react';

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
  // state
  const [hoverNum, setHoverNum] = useState(0);

  const pathName = window.location.pathname;

  useEffect(() => {
    if (pathName === '/') {
      setHoverNum(1);
    } else if (pathName === '/share') {
      setHoverNum(2);
    } else if (pathName === '/profile') {
      setHoverNum(3);
    } else {
      setHoverNum(0);
    }
  }, [pathName]);

  return (
    <NavBarContainer>
      <NavItems>
        <NavItem
          style={{
            borderBottom: hoverNum === 1 ? '5px solid #ffffff' : 'none',
          }}
        >
          <NavLink to='/'>
            <HomeLogo />
          </NavLink>
        </NavItem>
        <NavItem
          style={{
            borderBottom: hoverNum === 2 ? '5px solid #ffffff' : 'none',
          }}
        >
          <NavLink to='/share'>
            <ShareLogo />
          </NavLink>
        </NavItem>
        <NavItem
          style={{
            borderBottom: hoverNum === 3 ? '5px solid #ffffff' : 'none',
          }}
        >
          <NavLink to='/profile'>
            <ProfileLogo />
          </NavLink>
        </NavItem>
      </NavItems>
    </NavBarContainer>
  );
};

export default NavBar;
