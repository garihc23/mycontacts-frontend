import React from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import '../assets/css/ContactListPage.css'

const ContactList = ({ contacts, handleEditClick, handleDelete }) => {
    return (
        <Container className="contact-list">
            <h2 style={
                {
                    marginBottom: "30px",
                }}
            >Contact List</h2>
            <ul>
                {contacts.map(contact => (
                    <Card key={contact._id} style={{marginBottom:"10px"}}>
                        <Row style={{ padding: "10px" }}>
                            <Col lg={9}>
                                <Row className='contact-title'>{contact.name}</Row>
                                <Row className='contact-details'>{contact.email}</Row>
                                <Row className='contact-details'>{contact.phone}</Row>
                            </Col>
                            <Col lg={3}>
                                <Row className='card-btn'>
                                    <Button onClick={() => handleEditClick(contact)}>Edit</Button>
                                </Row>
                                <Row className='card-btn'>
                                    <Button onClick={() => handleDelete(contact._id)}>Delete</Button>
                                </Row>
                            </Col>
                        </Row>
                    </Card>
                ))}
            </ul>
        </Container>
    );
}

export default ContactList;


/*
    ContactList.js is a functional component that takes a contacts prop. This prop is expected to be an array of contact objects.

    It renders a heading "Contact List" and a list of contacts.

    For each contact in the contacts array, it generates a list item displaying the name, email, and phone.
*/