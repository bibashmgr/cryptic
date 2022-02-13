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
  // state
  const [registerInfo, setRegisterInfo] = useState({
    email: '',
    passwordone: '',
    passwordtwo: '',
  });

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      setRegisterInfo({ ...registerInfo, email: e.target.value });
    }
    if (e.target.name === 'password') {
      setRegisterInfo({ ...registerInfo, passwordone: e.target.value });
    }
    if (e.target.name === 'confirm-password') {
      setRegisterInfo({ ...registerInfo, passwordtwo: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(registerInfo);
  };

  return (
    <FormContainer>
      <FormBox>
        <SiteLogo>cryptic</SiteLogo>
        <FormHeading>Create An Account</FormHeading>
        <InputsContainer onSubmit={handleSubmit}>
          <InputContainer>
            <InputLabel htmlFor='username'>Email:</InputLabel>
            <InputField
              type='email'
              name='email'
              placeholder='Enter your email'
              id='email'
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
              value={registerInfo.passwordone}
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
              value={registerInfo.passwordtwo}
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
