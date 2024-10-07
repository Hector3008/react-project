import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import ScheduleAd from './ScheduleAd';
import "./NAVBAR.css"
const NAVBAR = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <ScheduleAd/>
        <Navbar.Brand href="#home">Cabecera de la Página (logo, buscador, login) </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            (navLinks: )
            <Nav.Link href="#about">Nosotros </Nav.Link>
            <Nav.Link href="#catalog">Catalogo </Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NAVBAR;