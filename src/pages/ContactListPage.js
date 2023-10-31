import React, { useState, useEffect } from 'react';
import Header from '../components/Header.js';
import ContactList from '../components/ContactList';

const ContactListPage = (props) => {
  /* const contacts = [
      // Sample contacts data (you'll replace this with actual data from your backend)
      { _id: 1, name: 'John Doe', email: 'john@example.com', phone: '555-555-5555' },
      { _id: 2, name: 'Jane Doe', email: 'jane@example.com', phone: '555-555-5555' }
  ]; */
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/contacts', {
          headers: {
            Authorization: `Bearer ${props.accessToken}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          setContacts(data);
          console.log("CONTACTS1---", data);
        } else {
          console.error('Error fetching contacts:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    }

    fetchContacts();
  }, []);

 /*  const handleUpdate = async (contact) => {
    try {
      const response = await fetch(`http://localhost:5001/api/contacts/${contact._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${props.accessToken}`,
        },
        body: JSON.stringify(updatedData), // Send the updated contact information here
      });
  
      if (response.ok) {
        const updatedContact = await response.json();
        console.log('Contact updated:', updatedContact);
      } else {
        console.error('Error updating contact:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  }
   */
  const handleDelete = async (contactId) => {
    try {
      const response = await fetch(`http://localhost:5001/api/contacts/${contactId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${props.accessToken}`,
        },
      });
  
      if (response.ok) {
        console.log('Contact deleted successfully');
        // Add logic to remove the contact from the state or re-fetch the contact list
      } else {
        console.error('Error deleting contact:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  }
  
  console.log("CONTACTS---", contacts)

  return (
    <div>
      {/* <Header /> */}
      <ContactList contacts={contacts} /* handleUpdate={handleUpdate}  */handleDelete={handleDelete} />
    </div>
  );
}

export default ContactListPage;

/*
    ContactListPage.js is a functional component that renders the Header component and the ContactList component.
*/