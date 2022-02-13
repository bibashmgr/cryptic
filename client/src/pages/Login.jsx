import React from 'react';

// scss
import '../styles/Login.scss';

// components
import LoginForm from '../components/LoginForm';
import LoginHero from '../components/LoginHero';

const Login = () => {
  return (
    <div className='container'>
      <LoginForm />
      <LoginHero />
    </div>
  );
};

export default Login;
