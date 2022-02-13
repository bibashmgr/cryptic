import React from 'react';

// elements:
import { FormContainer, FormHeading, InputsContainer, InputContainer, InputLabel, InputField, LoginButton, LinkContainer, LinkText, RegisterLink, FormBox, SiteLogo } from './LoginFormElements';

const LoginForm = () => {

    const handleChange = () => {

    }
    
    return (
        <FormContainer>
            <FormBox>
                <SiteLogo>cryptic</SiteLogo>
                <FormHeading>Welcome</FormHeading>
                <InputsContainer>
                    <InputContainer>
                        <InputLabel htmlFor='username'>Username:</InputLabel>
                        <InputField type='text' name='username' placeholder='Enter your username' id='username' onChange={handleChange} value='' />
                    </InputContainer>
                    <InputContainer>
                        <InputLabel htmlFor='password'>Password:</InputLabel>
                        <InputField type='password' name='password' placeholder='Enter your password' id='password' onChange={handleChange} value='' />
                    </InputContainer>
                    <LoginButton type='submit'>Sign in</LoginButton>
                </InputsContainer>
                <LinkContainer>
                      <LinkText>Don't have an account yet?</LinkText>
                      <RegisterLink>Register now</RegisterLink>
                </LinkContainer>
            </FormBox>
        </FormContainer>
    )
}

export default LoginForm