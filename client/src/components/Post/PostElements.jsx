import styled from 'styled-components';

// icons
import { BiLike } from 'react-icons/bi';
import { MdSaveAlt } from 'react-icons/md';

export const Card = styled.div``;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const CardAvatar = styled.img`
  width: 35px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const CardUserName = styled.div`
  font-size: 0.9rem;
  font-weight: 700;
  opacity: 0.7;
  margin-left: 15px;
`;

export const CardContent = styled.div`
  margin-top: 25px;
  margin-bottom: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100px;
`;

export const CardText = styled.div`
  margin: 25px;
`;

export const CardButtons = styled.div`
  height: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2.5px;
`;

export const LikeButton = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const LikeLogo = styled(BiLike)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #78bcff;
`;

export const SaveButton = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const SaveLogo = styled(MdSaveAlt)`
  font-size: 1.5rem;
  font-weight: 700;
  color: #78bcff;
`;
