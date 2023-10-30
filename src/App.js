import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactListPage from './pages/ContactListPage';
import ContactFormPage from './pages/ContactFormPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';
import './assets/css/stylesheet.css'

function App() {
  const [accessToken, setAccessToken] = useState('');

  const handleRegister = async (formData) => {
    try {
      const response = await fetch('http://localhost:5001/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('User registered:', data);
      } else {
        console.error('Error registering user:', response.statusText);
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  }

  const handleLogin = async (formData) => {
    try {
      const response = await fetch('http://localhost:5001/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setAccessToken(data.accessToken);
        console.log('User logged in:', data);
      } else {
        console.error('Error logging in:', response.statusText);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  }

  const handleLogout = () => {
    setAccessToken('');
  }

  return (
    <Router>
      <Header accessToken={accessToken} onLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={<ContactListPage accessToken={accessToken} />}
        />
        <Route
          path="/add-contact"
          element={<ContactFormPage />}
        />
        <Route
          path="/register"
          element={<RegisterPage onRegister={handleRegister} />}
        />
        <Route
          path="/login"
          element={<LoginPage onLogin={handleLogin} />}
        />
      </Routes>
    </Router>
  );
}

export default App;





/* import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactListPage from './pages/ContactListPage';
import ContactFormPage from './pages/ContactFormPage';

function App() {
  const addContact = (formData) => {
    // Add logic here to send formData to your backend (POST request)
    console.log('Contact added:', formData);
  }

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ContactListPage />} />
        <Route 
          exact 
          path="/add-contact" 
          element={<ContactFormPage addContact={addContact} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
 */