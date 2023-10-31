import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactList from '../components/ContactList';
import UpdateContactForm from '../components/UpdateContactForm';

const ContactListPage = (props) => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const navigate = useNavigate();

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
        } else {
          console.error('Error fetching contacts:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    }

    fetchContacts();
  }, [props.accessToken]);

  const handleAddContactClick = () => {
    navigate('/add-contact'); // Replace with the correct path to your "Add Contact" page
  }

  const handleUpdate = async (updatedData) => {
    try {
      const response = await fetch(`http://localhost:5001/api/contacts/${selectedContact._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${props.accessToken}`,
        },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        const updatedContact = await response.json();
        console.log('Contact updated:', updatedContact);

        // Update the state with the updated contact
        setContacts(prevContacts => prevContacts.map(contact => (
          contact._id === updatedContact._id ? updatedContact : contact
        )));
      } else {
        console.error('Error updating contact:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating contact:', error);
    }
    setSelectedContact(null);
  }

  const handleEditClick = (contact) => {
    setSelectedContact(contact);
  }

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
        // Remove the contact from the state
        setContacts(prevContacts => prevContacts.filter(contact => contact._id !== contactId));
      } else {
        console.error('Error deleting contact:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  }

  return (
    <div>
      <button onClick={handleAddContactClick}>Add Contact</button>

      <ContactList
        contacts={contacts}
        handleEditClick={handleEditClick}
        handleDelete={handleDelete}
      />
      {selectedContact && (
        <UpdateContactForm
          contact={selectedContact}
          onUpdate={handleUpdate}
          onCancel={() => setSelectedContact(null)}
        />
      )}
    </div>
  );
}

export default ContactListPage;
