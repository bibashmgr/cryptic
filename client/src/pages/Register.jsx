import React from 'react';

// scss
import '../styles/Register.scss';

// components
import RegisterForm from '../components/RegisterForm';
import RegisterHero from '../components/RegisterHero';

const Register = () => {
  return (
    <div className='container'>
      <RegisterHero />
      <RegisterForm />
    </div>
  );
};

export default Register;
