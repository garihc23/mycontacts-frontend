import React from 'react';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = ({ onRegister }) => {
  return (
    <div>
      <h2>Register</h2>
      <RegisterForm onRegister={onRegister} />
    </div>
  );
}

export default RegisterPage;