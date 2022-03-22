import React from 'react';
import { useState } from 'react';

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
  // states:
  const [registerInfo, setRegisterInfo] = useState({
    username: '',
    password: '',
    password2: '',
  });

  // handlers:
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
    let pattern = /^[a-z0-9_.]+$/;

    if (registerInfo.username === '') {
      errors.username = 'Username is required';
    } else if (
      registerInfo.username.length < 3 ||
      registerInfo.username.length > 20
    ) {
      errors.username = 'Invalid Username';
    } else if (!pattern.test(registerInfo.username)) {
      errors.username = 'Invalid Username';
    }

    if (registerInfo.password === '') {
      errors.password = 'Password is required';
    } else if (
      registerInfo.password.length < 6 ||
      registerInfo.password.length > 20
    ) {
      errors.password = 'Invalid Password';
    }

    if (registerInfo.password2 === '') {
      errors.password2 = 'Confirm Password is required';
    } else if (registerInfo.password !== registerInfo.password2) {
      errors.password2 = 'Password doesnot match';
    }

    if (Object.entries(errors).length === 0) {
      axios
        .post('http://localhost:8080/api/auth/register', registerInfo)
        .then((res) => {
          if (res.status === 201) {
            setRegisterInfo({
              username: '',
              password: '',
              password2: '',
            });
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
        <FormHeading>Create An Account</FormHeading>
        <InputsContainer onSubmit={handleSubmit}>
          <InputContainer style={{ position: 'relative' }}>
            <InputLabel htmlFor='username'>Username:</InputLabel>
            <InputField
              type='text'
              name='username'
              placeholder='Enter your username'
              id='username'
              onChange={handleChange}
              value={registerInfo.username}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                fontSize: '0.75rem',
                fontWeight: '500',
                opacity: '0.7',
              }}
            >
              Reminder: Donot use your real name.
            </div>
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
