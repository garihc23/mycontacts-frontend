import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import '../assets/css/Header.css'; // Import the external CSS file

const Header = ({ accessToken, onLogout }) => {
  
  return (
    <Navbar className='nav-header' >
      <Navbar.Brand >My Contacts App</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Contact List</Nav.Link>
        <Nav.Link as={Link} to="/add-contact">Add Contact</Nav.Link>
      </Nav>
      <Nav className='nav-login'>
        {accessToken ? (
          <Button className='nav-btn' variant="outline-info" onClick={onLogout}>Logout</Button>
        ) : (
          <div >
            <Button className='nav-btn' variant="outline-info"  as={Link} to="/register">Register</Button>
            <Button className='nav-btn' variant="outline-info"  as={Link} to="/login">Login</Button>
          </div>
        )}
      </Nav>
    </Navbar>
  );
}

export default Header;
