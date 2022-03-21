import styled from 'styled-components';

// icons
import { HiOutlineViewGrid } from 'react-icons/hi';
import { BsBookmark } from 'react-icons/bs';

export const MiddleBarContainer = styled.nav`
  margin-top: 50px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BarItems = styled.ul`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
`;

export const BarItem = styled.li`
  height: 100%;
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

export const BarLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export const GridLogo = styled(HiOutlineViewGrid)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #78bcff;
`;

export const SaveLogo = styled(BsBookmark)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #78bcff;
`;
