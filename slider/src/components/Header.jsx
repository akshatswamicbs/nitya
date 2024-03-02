import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: 'white',border:'2px solid black',color: 'white!important', height: '70px', position: 'sticky', top: '0', zIndex: '1000',fontSize:'18px' ,width:'100vw'}}>
      <Container>
        <Navbar.Brand href="/" style={{fontSize:'25px'}}>Nitya Foundation</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={{marginLeft:"30px"}}>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/media">Media</Nav.Link>
            <NavDropdown title="Centers" id="collapsible-nav-dropdown" href="/centers">
              <NavDropdown.Item href="#action/3.1">Delhi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Bihar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Jharkhand</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Haryana</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/getinvolved">Get Involved</Nav.Link>
            <Nav.Link href="/downloads">Downloads</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

