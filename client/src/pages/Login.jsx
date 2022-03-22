import React from 'react';

// scss
import '../styles/Login.scss';

// components
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
