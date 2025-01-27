import React, { useState } from 'react';
import styled from 'styled-components';

// Header wrapper styles
const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;
  background-color: transparent;
  color: white;
  z-index: 1000;
  display: flex;
  justify-content: space-between; /* Align items to the left and right */
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// Hamburger icon styles
const HamburgerIcon = styled.div`
  display: block;
  cursor: pointer;
  width: 30px;
  height: 21px;
  position: relative;
  z-index: 1100;
  transition: all 0.3s ease;
  
  & span {
    position: absolute;
    height: 4px;
    width: 100%;
    background: white;
    border-radius: 10px;
    transition: all 0.3s ease;
  }

  & span:nth-child(1) {
    top: 0;
  }

  & span:nth-child(2) {
    top: 8px;
  }

  & span:nth-child(3) {
    top: 16px;
  }

  &.active span:nth-child(1) {
    top: 8px;
    transform: rotate(45deg);
  }

  &.active span:nth-child(2) {
    opacity: 0;
  }

  &.active span:nth-child(3) {
    top: 8px;
    transform: rotate(-45deg);
  }
`;

// NavLinks container, should be shown when hamburger is clicked
const NavLinks = styled.nav<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')}; /* Show when open, hide when closed */
  gap: 2rem;
  justify-content: center; /* Center the links */
  align-items: center;
  padding-left: 0;
  margin: 0;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
`;

// Individual Link styles
const Link = styled.a`
  text-decoration: none;
  color: #ecf0f1;
  font-size: 1.25rem;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #f39c12;
    transform: translateY(-2px);
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage hamburger menu

  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // Toggle the menu open/close state
  };

  const scrollToSection = (sectionId: string, event: React.MouseEvent) => {
    event.preventDefault(); // Prevent default anchor behavior

    const target = document.getElementById(sectionId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 100, // Adjust based on header height
        behavior: 'smooth',
      });
    }
  };

  return (
    <HeaderWrapper>
      <HamburgerIcon className={isOpen ? 'active' : ''} onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </HamburgerIcon>
      <NavLinks isOpen={isOpen}>
        <Link href="#about" onClick={(e) => scrollToSection('about', e)}>About</Link>
        <Link href="#projects" onClick={(e) => scrollToSection('projects', e)}>Projects</Link>
        <Link href="#contact" onClick={(e) => scrollToSection('contact', e)}>Contact</Link>
      </NavLinks>
    </HeaderWrapper>
  );
};

export default Header;
