import styled from 'styled-components';

import { MdLogout } from 'react-icons/md';

export const TopBarContainer = styled.header`
  z-index: 100;
  position: fixed;
  top: 0;
  background-color: #78bcff;
  width: 75%;
  height: 12.5vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;

export const TopBarBox = styled.div`
  margin: 0px 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 576px) {
    margin: 0px 25px;
  }
`;

export const TopBarLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  cursor: pointer;
`;

export const TopBarLogout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoutLogo = styled(MdLogout)`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
`;
