import React from 'react';
import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import bcrypt from 'bcryptjs';

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

  // variables
  const URL = 'http://localhost:8080/users';

  // state
  const [loginInfo, setLoginInfo] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => res.data)
      .then((data) => setUsers(data))
      .catch((err) => console.log(err.message));
  }, []);

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
    let user = users.find((element) => element.username === loginInfo.username);

    if (loginInfo.username === '') {
      errors.username = 'Username is required';
    } else if (!user) {
      errors.username = 'Invalid Username';
    }

    if (loginInfo.password === '') {
      errors.password = 'Password is required';
    } else if (loginInfo.password !== user.password) {
      errors.password = 'Invalid Password';
    }
    // else if (!bcrypt.compareSync(loginInfo.password, user.password)) {
    //   errors.password = 'Invalid Password';
    // }

    setError(errors);

    if (Object.entries(errors).length === 0) {
      navigate('/');
    } else {
      console.log(error);
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
