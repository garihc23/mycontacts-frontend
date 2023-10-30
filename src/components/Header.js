import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';

const Header = ({ accessToken, onLogout }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">My Contacts App</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Contact List</Nav.Link>
        <Nav.Link as={Link} to="/add-contact">Add Contact</Nav.Link>
      </Nav>
      <Nav>
        {accessToken ? (
          <Button variant="outline-info" onClick={onLogout}>Logout</Button>
        ) : (
          <>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </>
        )}
      </Nav>
    </Navbar>
  );
}

export default Header;
