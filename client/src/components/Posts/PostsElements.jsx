import styled from 'styled-components';

export const PostContainer = styled.div`
  margin-top: 50px;
  width: 90%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  grid-gap: 50px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
