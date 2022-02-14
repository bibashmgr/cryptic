import styled from 'styled-components';

// icons
import { MdLogout } from 'react-icons/md';

export const TopBarContainer = styled.header`
  position: fixed;
  top: 0;
  background-color: #78bcff;
  width: 75%;
  height: 12.5vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const TopBarBox = styled.div`
  margin: 0px 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TopBarLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
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
