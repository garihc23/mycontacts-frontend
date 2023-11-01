import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const UpdateContactForm = ({ contact, onUpdate, onCancel }) => {
  const [updatedData, setUpdatedData] = useState({
    name: contact.name,
    email: contact.email,
    phone: contact.phone
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({
      ...updatedData,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedData);
  }

  return (
    <Modal show={true} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Contact</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{
        width: "350px",
        margin: "10px 20%",
        justifyContent: "center",

      }}>
        <form onSubmit={handleSubmit} style={{ marginBottom: "10px", }}>
          <div style={{ marginBottom: "10px", }}>
            <label style={{ padding: "10px", }}>Name:</label>
            <input
              type="text"
              name="name"
              value={updatedData.name}
              onChange={handleChange}
            />
          </div>
          <div style={{ marginBottom: "10px", }}>
            <label style={{ padding: "10px", }}>Email:</label>
            <input 
              type="email"
              name="email"
              value={updatedData.email}
              onChange={handleChange}
            />
          </div>
          <div style={{ marginBottom: "10px", }}>
            <label style={{ padding: "10px", }}>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={updatedData.phone}
              onChange={handleChange}
            />
          </div>
          <Button variant="primary" type="submit">Save Changes</Button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default UpdateContactForm;
