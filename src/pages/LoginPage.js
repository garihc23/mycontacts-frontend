import React from 'react';
import LoginForm from '../components/LoginForm';
import { Container, Row } from 'react-bootstrap';

const LoginPage = ({ onLogin }) => {
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
      }}
      >Login</h2>
      <LoginForm onLogin={onLogin} />
    </Container>
  );
}

export default LoginPage;
