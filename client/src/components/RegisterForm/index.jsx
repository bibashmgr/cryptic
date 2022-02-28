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
