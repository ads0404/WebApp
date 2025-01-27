// src/components/Contact.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 4rem 2rem;
  background-color: transparent;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;  /* Stack form fields vertically */
  align-items: center;
  justify-content: center;
  max-width: 400px;  /* Limit the width of the form */
  margin: 0 auto;  /* Center the form on the page */
`;

const Input = styled.input`
  padding: 1rem;
  margin: 0.5rem;
  width: 100%;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #e0e0e0;  /* Subtle light border */
  background-color: #ffffff;  /* White background for inputs */
  color: #333333;  /* Dark gray text for good contrast */
  
  &::placeholder {
    color: #888888;  /* Light gray placeholder text */
  }

  &:focus {
    outline: none;
    border-color: #1a73e8;  /* Accent color on focus */
    box-shadow: 0 0 0 2px rgba(26, 115, 232, 0.2);  /* Soft glow effect */
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  margin: 0.5rem;
  width: 100%;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #e0e0e0;  /* Subtle light border */
  background-color: #ffffff;  /* White background */
  color: #333333;  /* Dark gray text */
  height: 100px;  /* Set height to match the input fields */

  &::placeholder {
    color: #888888;  /* Light gray placeholder text */
  }

  &:focus {
    outline: none;
    border-color: #1a73e8;  /* Accent color on focus */
    box-shadow: 0 0 0 2px rgba(26, 115, 232, 0.2);  /* Soft glow effect */
  }
`;

const Button = styled.button`
  background-color: #1a73e8;  /* Deep blue for the button */
  color: white;
  padding: 0.8rem 2rem;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background-color: #1558b0;  /* Darker blue on hover */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(26, 115, 232, 0.3);  /* Soft glow effect */
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <ContactSection id="contact">
      <h2 style={{ color: '#333333', fontSize: '2.5rem', marginBottom: '2rem' }}>Contact Me</h2>
      <Form action="https://formspree.io/f/mrbeevop" method="POST">
        <label style={{ width: '100%' }}>
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label style={{ width: '100%' }}>
          <TextArea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <Button type="submit">Send Message</Button>
      </Form>
    </ContactSection>
  );
};

export default Contact;
