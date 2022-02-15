import styled from 'styled-components';

export const Card = styled.div`
  width: 90%;
`;

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

export const CardContent = styled.form`
  margin-top: 25px;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  min-height: 125px;
  display: flex;
  justify-content: center;
`;

export const CardTextField = styled.textarea`
  border: none;
  outline: none;
  margin: 20px;
  width: 100%;
  height: 100%;
  resize: none;
`;

export const CardButton = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
`;

export const ShareButton = styled.button`
  border: none;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-color: #78bcff;
  border-radius: 5px;
  width: 175px;
  height: 100%;
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
