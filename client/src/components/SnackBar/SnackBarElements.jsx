import styled from 'styled-components';

export const SnackBarContainers = styled.div`
  position: fixed;
  top: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 5px;
`;

export const SnackBarContainer = styled.div`
  padding: 10px;
  min-width: 200px;
  height: 35px;
  background-color: #ff7878;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const SnackBarContent = styled.div`
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 600;
`;
