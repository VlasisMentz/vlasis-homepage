import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const NavbarMenu = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', changeBackground);
  return (
    <Navbar
      variant='dark'
      expand='md'
      fixed='top'
      className={navbar ? 'navbar active' : 'navbar'}
    >
      <Container>
        <Navbar.Brand href='/'>Vlasis M.</Navbar.Brand>
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
