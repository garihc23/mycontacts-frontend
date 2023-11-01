import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const ContactForm = ({ addContact, accessToken }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5001/api/contacts', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(formData)

      if (response.ok) {
        const data = await response.json();
        console.log('Contact added:', data);
        addContact(data); // Add contact to the list (optional)
        setFormData({
          name: '',
          email: '',
          phone: ''
        });
      } else {
        console.error('Error adding contact:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  }

  return (
    <Container className="contact-form" style={
      {
        width: "350px",
        marginTop: "50px",
        justifyContent: "center",

      }}>
      <h2 style={
        {
          marginBottom: "30px",
        }}
      >
        Add New Contact</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "10px", }}>
        <div style={{ marginBottom: "10px", }}>
          <label style={{ padding: "10px", }}>Name:</label>
          <input
            type="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: "10px", }}>
          <label style={{ padding: "10px", }}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: "10px", }}>
          <label style={{ padding: "10px", }}>Phone:</label>
          <input
            type="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <Button type="submit"
          style={{
            margin: "10px 40%",
            textAlign: "center",
            justifyContent: "center",
            color: "#fff"
          
        }}
        >Submit</Button>
    </form>
    </Container >
  );
}

export default ContactForm;


/*
    ContactForm.js is a functional component that takes an addContact function prop. This function will be responsible for adding a new contact.

    It uses the useState hook to manage a form state (formData) with fields for name, email, and phone.

    The handleChange function updates the form state as the user types in the input fields.

    The handleSubmit function is called when the form is submitted. It prevents the default form submission behavior, calls the addContact function with the form data, and resets the form fields.

    The JSX code renders a form with input fields for name, email, and phone, along with a submit button.
*/