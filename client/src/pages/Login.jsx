import React from 'react';

import '../styles/Login.scss';

import LoginForm from '../components/LoginForm';
import LoginHero from '../components/LoginHero';

const Login = ({ setIsAuth }) => {
  return (
    <div className='login-container'>
      <LoginForm setIsAuth={setIsAuth} />
      <LoginHero />
    </div>
  );
};

export default Login;
