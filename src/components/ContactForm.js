import React, { useState } from 'react';

const ContactForm = ({ addContact }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    /*   const handleSubmit = (e) => {
        e.preventDefault();
        addContact(formData);
        setFormData({
          name: '',
          email: '',
          phone: ''
        });
      } */

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5001/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

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
        <div className="contact-form">
            <h2>Add New Contact</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Phone:</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
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