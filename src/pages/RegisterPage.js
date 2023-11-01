import React from 'react';
import RegisterForm from '../components/RegisterForm';
import { Container } from 'react-bootstrap';

const RegisterPage = ({ onRegister }) => {
  return (
    <Container style={
      {
        width: "250px",
        marginTop: "50px",
        justifyContent: "center",

      }}>
      <h2 style={
      {
        marginBottom: "30px",
      }}>Register</h2>
      <RegisterForm onRegister={onRegister} />
    </Container>
  );
}

export default RegisterPage;
