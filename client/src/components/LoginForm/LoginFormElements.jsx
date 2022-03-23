import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormBox = styled.div`
  width: 400px;
  max-width: 90%;
`;

export const SiteLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #78bcff;
  margin-bottom: 35px;
`;

export const FormHeading = styled.div`
  color: #2e2e39;
  font-size: 2.25rem;
  font-weight: 700;
`;

export const InputsContainer = styled.form``;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 50px 0px;
`;

export const InputLabel = styled.label`
  color: #2e2e39;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 5px;
`;

export const InputField = styled.input`
  outline: none;
  border: 1px solid #2e2e39;
  border-radius: 30px;
  width: 100%;
  padding: 10px 20px;
  font-size: 16px;
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  outline: none;
  background-color: #78bcff;
  border-radius: 30px;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`;

export const LinkContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

export const LinkText = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  color: #2e2e39;
`;

export const RegisterLink = styled(Link)`
  margin-left: 5px;
  font-size: 0.75rem;
  font-weight: 700;
  color: #2e2e39;
  text-decoration: none;
  cursor: pointer;
`;
