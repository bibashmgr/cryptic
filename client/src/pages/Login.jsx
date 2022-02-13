import React from 'react';

// scss
import '../styles/Login.scss';

// components
import LoginForm from '../components/LoginForm';
import LoginHero from '../components/LoginHero';

const Login = () => {
  return (
    <div className='container'>
        <LoginForm className='form-section' />
        <LoginHero className='hero-section' />
    </div>
  )
}

export default Login