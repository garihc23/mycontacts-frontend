import React, { useState } from 'react';

const UpdateContactForm = ({ contact, onUpdate }) => {
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
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={updatedData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={updatedData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          value={updatedData.phone}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
}

export default UpdateContactForm;
