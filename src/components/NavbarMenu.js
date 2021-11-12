import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Logo from '../assets/Logo.png';

const NavbarMenu = () => {
  //Set css navbar color to transparent or solid
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 70) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', changeBackground);
  //-----------Render---------------
  return (
    <Navbar
      variant='dark'
      expand='md'
      fixed='top'
      className={navbar ? 'navbar active' : 'navbar'}
    >
      <Container>
        <Navbar.Brand href='/'>
          <img src={Logo} alt='Vlasis dev logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link className='nav-link' href='#home'>
              Home
            </Nav.Link>
            <Nav.Link className='nav-link' href='#link'>
              About
            </Nav.Link>
            <Nav.Link className='nav-link' href='#link'>
              Projects
            </Nav.Link>
            <Nav.Link className='nav-link' href='#link'>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
