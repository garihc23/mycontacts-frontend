import React from 'react';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';

const ContactFormPage = ({ addContact }) => {
    /* const addContact = (formData) => {
        // Add logic here to send formData to your backend (POST request)
        console.log('Contact added:', formData);
    } */

    return (
        <div>
           {/*  <Header /> */}
            <ContactForm addContact={addContact} />
        </div>
    );
}

export default ContactFormPage;

/*
    ContactFormPage.js is a functional component that renders the Header component and the ContactForm component.

    It includes an addContact function that will be responsible for sending the form data to your backend (you'll implement this later).
*/