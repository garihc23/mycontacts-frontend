import React from 'react';

const ContactList = ({ contacts, handleEditClick, handleDelete }) => {
    return (
        <div className="contact-list">
            <h2>Contact List</h2>
            <ul>
                {contacts.map(contact => (
                    <li key={contact._id}>
                        <strong>{contact.name}</strong> - {contact.email} - {contact.phone}
                        <button onClick={() => handleEditClick(contact)}>Edit</button>
                        <button onClick={() => handleDelete(contact._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ContactList;


/*
    ContactList.js is a functional component that takes a contacts prop. This prop is expected to be an array of contact objects.

    It renders a heading "Contact List" and a list of contacts.

    For each contact in the contacts array, it generates a list item displaying the name, email, and phone.
*/