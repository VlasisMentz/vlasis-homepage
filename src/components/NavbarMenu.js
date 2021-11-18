import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Logo from '../assets/Logo.png';
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineContacts,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';

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
            <Nav.Link as={Link} to='/' className='nav-link' href='/'>
              <AiOutlineHome style={{ marginBottom: '2px' }} /> Home
            </Nav.Link>
            <Nav.Link as={Link} to='/about' className='nav-link' href='/About'>
              <AiOutlineUser style={{ marginBottom: '2px' }} /> About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/projects'
              className='nav-link'
              href='/projects'
            >
              {' '}
              <AiOutlineFundProjectionScreen
                style={{ marginBottom: '2px' }}
              />{' '}
              Projects
            </Nav.Link>
            <Nav.Link
              as={Link}
              to='/contact'
              className='nav-link'
              href='/contact'
            >
              <AiOutlineContacts style={{ marginBottom: '2px' }} /> Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
