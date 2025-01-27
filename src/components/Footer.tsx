// src/components/Footer.tsx
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 3rem 2rem;  /* Increased padding for more space */
  background-color: transparent;
  color: #black;  /* White text for higher contrast on dark backgrounds */
  text-align: center;
  font-size: 1.2rem;  /* Increased font size */
  font-weight: bold;  /* Make text bold */
  position: relative;
  width: 100%;
  bottom: 0;
`;

const FooterLinks = styled.p`
  font-size: 1.2rem;  /* Larger font size for better visibility */
  margin-top: 1.5rem;
  font-weight: normal;
`;

const FooterLink = styled.a`
  color: #f39c12;  /* Bright gold for links */
  text-decoration: none;
  transition: color 0.3s ease;
  font-weight: bold;

  &:hover {
    color: #e67e22;  /* Darker gold on hover */
  }
`;

const Footer = () => (
  <FooterWrapper>
    <p>&copy; Alex Stewart | All rights reserved</p>
    <FooterLinks>
      Connect with me: 
      <FooterLink href="https://www.linkedin.com/in/alex-stewart-646963347/" target="_blank" rel="noopener noreferrer"> LinkedIn </FooterLink>
      |
      <FooterLink href="https://github.com/ads0404" target="_blank" rel="noopener noreferrer"> GitHub</FooterLink>
    </FooterLinks>
  </FooterWrapper>
);

export default Footer;
