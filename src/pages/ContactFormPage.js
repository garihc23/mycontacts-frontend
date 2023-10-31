import React from 'react';
import ContactForm from '../components/ContactForm';

const ContactFormPage = ({ accessToken }) => {
  /* const addContact = (contact) => {
    // Add logic to handle the new contact (optional)
    console.log('Contact added:', contact);
  }
 */
  return (
    <div>
      <ContactForm /* addContact={addContact}  */accessToken={accessToken} />
    </div>
  );
}

export default ContactFormPage;
