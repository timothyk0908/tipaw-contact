import React from 'react';
import './ContactForm.css';
import useContactForm from '../../hooks/useContactForm';
import Toast from 'react-bootstrap/Toast'

function ContactForm() {

    const {inputs, handleInputChange, handleSubmit} = useContactForm();

    return (
        <form onSubmit={handleSubmit}>
         <div>
                <label>Subject</label>
                <input type="text" name="subject" required onChange={handleInputChange} value={inputs.subject || ''}/>
            </div>
            <div>
                <label>First Name</label>
                <input type="text" name="firstName" required onChange={handleInputChange} value={inputs.firstName || ''}/>
                <label>Last Name</label>
                <input type="text" name="lastName" required onChange={handleInputChange} value={inputs.lastName || ''}/>
            </div>
            <div>
                <label>Email Address</label>
                <input type="email" name="email" required onChange={handleInputChange} value={inputs.email || ''}/>
            </div>
            <div>
                <label>Phone</label>
                <input type="text" name="phone" required onChange={handleInputChange} value={inputs.phone || ''}/>
            </div>
            <div>
                <label>Your message</label>
                <input type="text" name="message" required onChange={handleInputChange} value={inputs.message || ''}/>
            </div>
            <button type="submit">Send</button>
        </form>
    );
}

export default ContactForm;
