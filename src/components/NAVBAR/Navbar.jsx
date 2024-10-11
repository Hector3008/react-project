import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Navbar__Form from "./Navbar__Form";
import ScheduleAd from "./ScheduleAd";
import { Nav, NavDropdown } from "react-bootstrap";

import "./Navbar.css";
import "./Navbar__Form.css"
const Navbar__2 = () => {
  return (
    <>
      <div className="Navbar__Container">
        <ScheduleAd></ScheduleAd>
        <Navbar expand="lg" className=" Navbar__Primary__Container">
          <Container>
            <Navbar.Brand href="#home">
              <img
                className=""
                src="/img/Logo.webp"
              ></img>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Navbar__Form></Navbar__Form>
              <Nav.Link
                className="tab show-on-lg"
                href="#CATALOGO/ARRANCADORES"
              >
                ARRANCADORES
              </Nav.Link>
              <Nav.Link
                className="tab show-on-lg"
                href="#CATALOGO/ALTERNADORES"
              >
                ALTERNADORES
              </Nav.Link>
              <Nav.Link className="tab show-on-lg" href="#CATALOGO/COMPONENTES">
                COMPONENTES
              </Nav.Link>
              <Nav.Link className="tab show-on-lg" href="#CATALOGO/OTROS">
                OTROS
              </Nav.Link>
              <Nav.Link className="tab show-on-lg" href="#NOSOTROS">
                NOSOTROS
              </Nav.Link>

              <Nav.Link className="tab show-on-lg" href="#CONTACTO">
                CONTACTO
              </Nav.Link>
              <Nav.Link className="tab show-on-lg" href="#BLOG">
                BLOG
              </Nav.Link>
              <Nav.Link className="tab show-on-lg" href="#PREGUNTAS-FRECUENTES">
                PREGUNTAS FRECUENTES
              </Nav.Link>

              <Nav className="me-3">
                <NavDropdown
                  title="CATALOGO"
                  id="basic-nav-dropdown"
                  className="catalogo__dropdown hide-on-lg"
                  href="#CATALOGO"
                >
                  <NavDropdown.Item
                    href="#CATALOGO/ARRANCADORES"
                    className="custom-dropdown-item"
                  >
                    ARRANCADORES
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    href="#CATALOGO/ALTERNADORES"
                    className="dropdown-item"
                  >
                    ALTERNADORES
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#CATALOGO/COMPONENTES"
                    className="dropdown-item"
                  >
                    COMPONENTES
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    href="#CATALOGO/OTROS"
                    className="dropdown-item"
                  >
                    OTROS
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="bg-light">
          <Container fluid className="Navbar__Secondary__Container">
            <Nav className="justify-content-center">
              <Nav.Link className="tab hide-on-lg" href="#NOSOTROS">
                NOSOTROS
              </Nav.Link>
              <Nav.Link className="tab hide-on-lg" href="#CONTACTO">
                CONTACTO
              </Nav.Link>
              <Nav.Link className="tab hide-on-lg" href="#BLOG">
                BLOG
              </Nav.Link>
              <Nav.Link className="tab hide-on-lg" href="#PREGUNTAS FRECUENTES">
                PREGUNTAS FRECUENTES
              </Nav.Link>
            </Nav>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Navbar__2;
