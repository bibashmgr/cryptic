import styled from 'styled-components';
import { Link } from 'react-router-dom';

// icons
import { BiHomeAlt } from 'react-icons/bi';
import { FaRegShareSquare } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';

export const NavBarContainer = styled.nav`
  z-index: 100;
  position: fixed;
  bottom: 0;
  background-color: #78bcff;
  width: 75%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;

export const NavItems = styled.ul`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
`;

export const NavItem = styled.li`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

export const HomeLogo = styled(BiHomeAlt)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
`;

export const ShareLogo = styled(FaRegShareSquare)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
`;

export const ProfileLogo = styled(FiUser)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
`;
