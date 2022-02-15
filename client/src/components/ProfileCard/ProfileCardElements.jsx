import styled from 'styled-components';

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardAvatar = styled.img`
  width: 120px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const CardUsername = styled.div`
  font-size: 1rem;
  font-weight: 700;
  margin-top: 25px;
`;
