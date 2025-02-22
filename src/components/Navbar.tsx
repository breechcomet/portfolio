// src/components/Navbar.tsx

import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import { useState } from 'react';

const Nav = styled.nav`
  background-color: rgba(255, 230, 0, 0.2);
  backdrop-filter: blur(10px);
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.ul<{ isOpen: boolean }>`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: rgba(255, 230, 0, 0.2);
    backdrop-filter: blur(10px);
    padding: 1rem;
  }
`;

const NavLink = styled.li`
  margin-left: 1rem;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
    width: 100%;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  padding: 0.5rem;
  border-radius: 5px;

  &:hover {
    color: #0070f3;
  }

  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;

const GradientButton = styled.button`
  background-image: linear-gradient(to right, #03A9F4, #FF69B4, #32CD32, #6c5ce7, #FFC67D);
  background-size: 500% 100%;
  color: white;
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-position 0.5s ease;
  font-weight: 500;

  &:hover {
    background-position: 100% 0%;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
  }
  50% {
    transform: scale(1.05);
    opacity: 0.7;
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
  }
  100% {
    transform: scale(1);
    opacity: 1;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
  }
`;

const AnimatedGradientButton = styled(GradientButton)`
  animation: ${pulse} 4s infinite;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <div>Munashe M.</div>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '☰'}
      </Hamburger>
      <NavLinks isOpen={isOpen}>
        <NavLink>
          <StyledLink href="/">Home</StyledLink>
        </NavLink>
        <NavLink>
          <StyledLink href="/about">About</StyledLink>
        </NavLink>
        <NavLink>
          <StyledLink href="/journal">Journal</StyledLink>
        </NavLink>
        <NavLink>
          <StyledLink href="/portfolio">Portfolio</StyledLink>
        </NavLink>
        <NavLink>
          <Link href="/contact" passHref legacyBehavior>
            <AnimatedGradientButton as="a">Hire Me</AnimatedGradientButton>
          </Link>
        </NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;