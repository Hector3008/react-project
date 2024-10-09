import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Logo from "./Logo";

import "./NAVBAR.css";
const NAVBAR = () => {
  return (
    <>
      <Navbar data-bs-theme="dark" expand="lg" className="navbar-custom">
        <div className="navbar-header navbar-upper-row">
          <Navbar.Brand href="#home" className="logo">
            <Logo />
          </Navbar.Brand>
          <div className="navbar-header-form">
            <Form inline className="search-form">
              <InputGroup>
                <InputGroup.Text id="basic-addon1"></InputGroup.Text>
                <Form.Control
                  placeholder="Búsqueda"
                  aria-label="Búsqueda"
                  aria-describedby="basic-addon1"
                  className="search-input"
                />
              </InputGroup>
            </Form>
          </div>
          <div className="navbar-header-right-area"></div>
        </div>

        <div className="navbar-toggle-row">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </div>

        <div className="navbar-wider">
          <Navbar.Collapse id="responsive-navbar-nav" className="navbar-links">
            <Nav className="me-auto">
              <Nav.Link href="#features">Nosotros</Nav.Link>
              <NavDropdown title="Catalogo" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">
                  Arrancadores
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Alternadores
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Componentes
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Otros</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#pricing">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default NAVBAR;
