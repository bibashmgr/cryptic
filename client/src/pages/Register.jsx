import React from 'react';

import '../styles/Register.scss';

import RegisterForm from '../components/RegisterForm';
import RegisterHero from '../components/RegisterHero';

const Register = () => {
  return (
    <div className='register-container'>
      <RegisterHero />
      <RegisterForm />
    </div>
  );
};

export default Register;
