import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useContactForm from '../../hooks/useContactForm';
import './ContactForm.css';

function ContactForm() {
    const { inputs, handleInputChange, handleSubmit } = useContactForm();

    return (
        <Form className="contact-form text-center" onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" name="subject" size="lg" required onChange={handleInputChange} value={inputs.subject || ''} />

                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="firstName" size="lg" required onChange={handleInputChange} value={inputs.firstName || ''} />
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name="lastName" size="lg" required onChange={handleInputChange} value={inputs.lastName || ''} />

                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" name="email" size="lg" required onChange={handleInputChange} value={inputs.email || ''} />

                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" name="phone" size="lg" required onChange={handleInputChange} value={inputs.phone || ''} />

                <Form.Label>Your message</Form.Label>
                <Form.Control type="text" name="message" size="lg" required onChange={handleInputChange} value={inputs.message || ''} />
            </Form.Group>
            <Button variant="primary" type="submit">Send</Button>
        </Form>
    );
}

export default ContactForm;
