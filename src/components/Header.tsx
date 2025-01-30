import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope, FaLaptopCode, FaFolder } from 'react-icons/fa';

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 60px;
  background-color: rgba(100, 100, 100, 0.1);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  box-shadow: 4px 0 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Icon = styled.div`
  font-size: 2rem;
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;
  color: #ecf0f1;

  &:hover {
    transform: translateY(-5px);
    color: #f39c12;
  }
`;

const NavbarLinks = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SocialIcons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Header = () => {
  // Smooth scroll function
  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    event.preventDefault();  // Prevent default anchor click behavior
    const target = document.getElementById(targetId);
    if (target) {
      const offset = 50; // Adjust this value as needed
  
      // First, scroll the target element into view
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',  // Align at the top of the target element
      });
  
      // After the scroll, adjust by offset
      setTimeout(() => {
        window.scrollBy(0, -offset);
      }, 300);  // Delay to ensure the scrollIntoView has completed
    }
  };
  

  return (
    <Sidebar>
      <NavbarLinks>
        {/* Link to About Section */}
        <a href="#about-me" onClick={(e) => handleScroll(e, 'about-me')}>
          <Icon>
            <FaLaptopCode />
          </Icon>
        </a>

        {/* Link to Projects Section */}
        <a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>
          <Icon>
            <FaFolder />
          </Icon>
        </a>

        {/* Link to Contact Section */}
        <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>
          <Icon>
            <FaEnvelope />
          </Icon>
        </a>
      </NavbarLinks>

      <SocialIcons>
        <a href="https://github.com/ads0404" target="_blank" rel="noopener noreferrer">
          <Icon>
            <FaGithub />
          </Icon>
        </a>
        <a href="https://www.linkedin.com/in/alex-stewart-646963347/" target="_blank" rel="noopener noreferrer">
          <Icon>
            <FaLinkedin />
          </Icon>
        </a>
      </SocialIcons>
    </Sidebar>
  );
};

export default Header;
