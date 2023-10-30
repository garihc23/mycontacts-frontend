import React, { useState, useEffect } from 'react';
import Header from '../components/Header.js';
import ContactList from '../components/ContactList';

const ContactListPage = () => {
    /* const contacts = [
        // Sample contacts data (you'll replace this with actual data from your backend)
        { _id: 1, name: 'John Doe', email: 'john@example.com', phone: '555-555-5555' },
        { _id: 2, name: 'Jane Doe', email: 'jane@example.com', phone: '555-555-5555' }
    ]; */
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
          try {
            const response = await fetch('http://localhost:5001/api/contacts');
            if (response.ok) {
              const data = await response.json();
              setContacts(data);
            } else {
              console.error('Error fetching contacts:', response.statusText);
            }
          } catch (error) {
            console.error('Error fetching contacts:', error);
          }
        }
    
        fetchContacts();
      }, []);
    

    return (
        <div>
            {/* <Header /> */}
            <ContactList contacts={contacts} />
        </div>
    );
}

export default ContactListPage;

/*
    ContactListPage.js is a functional component that renders the Header component and the ContactList component.

    For demonstration purposes, we've included a contacts array with sample data. You'll replace this with actual data fetched from your backend later.
*/