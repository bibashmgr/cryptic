import React from 'react';
import { useState, useEffect } from 'react';

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
  LoginLink,
  FormBox,
  SiteLogo,
} from './RegisterFormElements';

const RegisterForm = () => {
  // variables
  const URL = 'http://localhost:8080/users';

  // state
  const [registerInfo, setRegisterInfo] = useState({
    username: '',
    password: '',
    password2: '',
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
      setRegisterInfo({ ...registerInfo, username: e.target.value });
    }
    if (e.target.name === 'password') {
      setRegisterInfo({ ...registerInfo, password: e.target.value });
    }
    if (e.target.name === 'confirm-password') {
      setRegisterInfo({ ...registerInfo, password2: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};
    let user = users.find(
      (element) => element.username === registerInfo.username
    );

    if (registerInfo.username === '') {
      errors.username = 'Username is required';
    } else if (!/^[a-z0-9_.]+$/.test(registerInfo.username)) {
      errors.username = 'Invalid Username';
    } else if (user) {
      errors.username = 'Username already taken';
    }

    if (registerInfo.password === '') {
      errors.password = 'Password is required';
    } else if (registerInfo.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (registerInfo.password2 === '') {
      errors.password2 = 'Confirm Password is required';
    } else if (registerInfo.password !== registerInfo.password2) {
      errors.password2 = 'Password doesnot match';
    }

    setError(errors);

    if (Object.entries(errors).length === 0) {
      axios
        .post(URL, {
          username: registerInfo.username,
          password: registerInfo.password,
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err.message));

      setRegisterInfo({
        username: '',
        password: '',
        password2: '',
      });
      console.log('Registration successful');
    } else {
      console.log(error);
    }
  };

  return (
    <FormContainer>
      <FormBox>
        <SiteLogo>cryptic</SiteLogo>
        <FormHeading>Create An Account</FormHeading>
        <InputsContainer onSubmit={handleSubmit}>
          <InputContainer>
            <InputLabel htmlFor='username'>Username:</InputLabel>
            <InputField
              type='text'
              name='username'
              placeholder='Enter your username'
              id='username'
              onChange={handleChange}
              value={registerInfo.username}
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
              value={registerInfo.password}
            />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor='password'>Confirm Password:</InputLabel>
            <InputField
              type='password'
              name='confirm-password'
              placeholder='Confirm your password'
              id='confirm-password'
              onChange={handleChange}
              value={registerInfo.password2}
            />
          </InputContainer>
          <LoginButton type='submit'>Sign up</LoginButton>
        </InputsContainer>
        <LinkContainer>
          <LinkText>Already have an account?</LinkText>
          <LoginLink to='/login'>Sign in now</LoginLink>
        </LinkContainer>
      </FormBox>
    </FormContainer>
  );
};

export default RegisterForm;
