import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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

import SnackBar from '../SnackBar';

const LoginForm = ({ setIsAuth }) => {
  const BASE_URL = 'https://cryptix-backend.herokuapp.com';

  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState({
    username: '',
    password: '',
    others: '',
  });
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [isRight, setIsRight] = useState(false);
  const [isError, setIsError] = useState(true);

  useEffect(() => {
    setIsRight(false);
  }, [isRight]);

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
    let pattern = /^[a-z0-9_.]+$/;

    if (loginInfo.username === '') {
      errors.username = 'Username is required';
    } else if (
      loginInfo.username.length < 3 ||
      loginInfo.username.length > 20
    ) {
      errors.username = 'Invalid Username';
    } else if (!pattern.test(loginInfo.username)) {
      errors.username = 'Invalid username!';
    }

    if (loginInfo.password === '') {
      errors.password = 'Password is required';
    } else if (
      loginInfo.password.length < 6 ||
      loginInfo.password.length > 20
    ) {
      errors.password = 'Invalid Password';
    }

    if (Object.entries(errors).length > 0) {
      setError(errors);
      setIsError(true);
      setShowSnackbar(true);
      setTimeout(() => {
        setShowSnackbar(false);
      }, 2500);
    }

    if (Object.entries(errors).length === 0) {
      axios
        .post(`${BASE_URL}/api/auth/login`, loginInfo)
        .then((res) => {
          localStorage.setItem('accessToken', res.data.accessToken);
          setIsAuth(true);
          navigate('/');
        })
        .catch((err) => {
          if (err.response.status === 401) {
            setError({ username: err.response.data });
            setIsError(true);
            setShowSnackbar(true);
            setTimeout(() => {
              setShowSnackbar(false);
            }, 2500);
          } else if (err.response.status === 403) {
            setError({ password: err.response.data });
            setIsError(true);
            setShowSnackbar(true);
            setTimeout(() => {
              setShowSnackbar(false);
            }, 2500);
          } else {
            setError({ others: 'Internal Error' });
            setIsError(true);
            setShowSnackbar(true);
            setTimeout(() => {
              setShowSnackbar(false);
            }, 2500);
          }
        });
    }
  };

  return (
    <FormContainer>
      <FormBox>
        <SiteLogo>cryptix</SiteLogo>
        <FormHeading>Welcome</FormHeading>
        <InputsContainer onSubmit={handleSubmit}>
          <InputContainer>
            <InputLabel htmlFor='username'>Username:</InputLabel>
            <InputField
              type='text'
              name='username'
              placeholder='Enter your username'
              id='username'
              autoCapitalize={false}
              autoComplete={false}
              autoCorrect={false}
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
      <SnackBar
        showSnackbar={showSnackbar}
        error={error}
        isRight={isRight}
        isError={isError}
      />
    </FormContainer>
  );
};

export default LoginForm;
