import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Navb__Form from "./Navb__Form";
import ScheduleAd from "./ScheduleAd";
import { Nav, NavDropdown } from "react-bootstrap";

import "./Navb.css";
import "./Navb__Form.css"
const Navb = () => {
  return (
    <>
      <div className="Navb__Container">
        <ScheduleAd></ScheduleAd>
        <Navbar expand="lg" className=" Navb__Primary__Container">
          <Container>
            <Navbar.Brand href="#home">
              <img className="logo" src="/img/Logo.webp"></img>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-Navb-nav" />

            <Navbar.Collapse id="basic-Navb-nav">
              <Navb__Form></Navb__Form>
              <Nav.Link
                className="tab show-on-lg"
                style={{ backgroundColor: "rgb(243, 243, 243)" }}
                href="#CATALOGO/ARRANCADORES"
              >
                ARRANCADORES
              </Nav.Link>
              <Nav.Link
                className="tab show-on-lg"
                href="#CATALOGO/ALTERNADORES"
                style={{ backgroundColor: "rgb(243, 243, 243)" }}
              >
                ALTERNADORES
              </Nav.Link>
              <Nav.Link
                className="tab show-on-lg"
                href="#CATALOGO/COMPONENTES"
                style={{ backgroundColor: "rgb(243, 243, 243)" }}
              >
                COMPONENTES
              </Nav.Link>
              <Nav.Link
                className="tab show-on-lg"
                href="#CATALOGO/OTROS"
                style={{ backgroundColor: "rgb(243, 243, 243)" }}
              >
                OTROS
              </Nav.Link>
              <Nav.Link
                className="tab show-on-lg"
                href="#NOSOTROS"
                style={{ backgroundColor: "rgb(243, 243, 243)" }}
              >
                NOSOTROS
              </Nav.Link>

              <Nav.Link
                className="tab show-on-lg"
                href="#CONTACTO"
                style={{ backgroundColor: "rgb(243, 243, 243)" }}
              >
                CONTACTO
              </Nav.Link>
              <Nav.Link
                className="tab show-on-lg"
                href="#BLOG"
                style={{ backgroundColor: "rgb(243, 243, 243)" }}
              >
                BLOG
              </Nav.Link>
              <Nav.Link
                className="tab show-on-lg "
                href="#PREGUNTAS-FRECUENTES"
                style={{ backgroundColor: "rgb(243, 243, 243)" }}
              >
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

        <div>
          <Container fluid className="Navb__Secondary__Container">
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

export default Navb;
