import React from 'react';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
  const navigate = useNavigate();
  // states:
  const [loginInfo, setLoginInfo] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState({});

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
    let errors = {};

    if (loginInfo.username === '') {
      errors.username = 'Username is required';
    } else if (
      loginInfo.username.length < 3 ||
      loginInfo.username.length > 20
    ) {
      errors.username = 'Invalid Username';
    }

    if (loginInfo.password === '') {
      errors.password = 'Password is required';
    } else if (
      loginInfo.password.length < 6 ||
      loginInfo.password.length > 20
    ) {
      errors.password = 'Invalid Password';
    }

    setError(errors);

    if (Object.entries(errors).length === 0) {
      axios
        .post('http://localhost:8080/api/auth/login', loginInfo)
        .then((res) => {
          if (res.status === 200) {
            navigate('/');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
