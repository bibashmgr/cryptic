import React from 'react';
import { useState } from 'react';

// elements:
import {
  FormContainer,
  FormHeading,
  InputsContainer,
  InputContainer,
  InputLabel,
  InputField,
  LoginButton,
  LinkContainer,
  LinkText,
  RegisterLink,
  FormBox,
  SiteLogo,
} from './LoginFormElements';

const LoginForm = () => {
  // states:
  const [loginInfo, setLoginInfo] = useState({
    username: '',
    password: '',
  });

  // handlers:
  const handleChange = (e) => {
    if (e.target.name === 'username') {
      setLoginInfo({ ...loginInfo, username: e.target.value });
    }
    if (e.target.name === 'password') {
      setLoginInfo({ ...loginInfo, password: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <FormContainer>
      <FormBox>
        <SiteLogo>cryptic</SiteLogo>
        <FormHeading>Welcome</FormHeading>
        <InputsContainer onSubmit={handleSubmit}>
          <InputContainer>
            <InputLabel htmlFor='username'>Username:</InputLabel>
            <InputField
              type='text'
              name='username'
              placeholder='Enter your username'
              id='username'
              onChange={handleChange}
              value={loginInfo.username}
            />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor='password'>Password:</InputLabel>
            <InputField
              type='password'
              name='password'
              placeholder='Enter your password'
              id='password'
              onChange={handleChange}
              value={loginInfo.password}
            />
          </InputContainer>
          <LoginButton type='submit'>Sign in</LoginButton>
        </InputsContainer>
        <LinkContainer>
          <LinkText>Don't have an account yet?</LinkText>
          <RegisterLink to='/register'>Register now</RegisterLink>
        </LinkContainer>
      </FormBox>
    </FormContainer>
  );
};

export default LoginForm;
