import React, { useEffect, useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Search__Form from "./Search__Form";
import ConsultarConFoto from "./Links/ConsultarConFoto";
import ScheduleAd from "./ScheduleAd";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Nav } from "react-bootstrap";
import Logo from "./Logo";
import "./Header.css";
import "./Search__Form.css";
import Users from "./Links/Users";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Number from "./Number";

const Header = () => {
  

  return (
    <>
      <header className={`Header__Container`}>
        <ScheduleAd />
        <Navbar expand="lg" className="Naftware">
          <Container>
            <Link to={"/"}>
              <Logo />
            </Link>

            <ConsultarConFoto />

            <Search__Form />
            <Navbar.Toggle aria-controls="basic-Navb-nav" />

            <Navbar.Collapse id="basic-Navb-nav">
              <Nav.Link
                className="show-on-lg"
                href="#CATALOGO/ARRANCADORES"
                style={{
                  backgroundColor: "#00443b",
                  color: "white",
                  textDecoration: "none",
                  listStyle: "none",
                }}
              >
                ARRANCADORES
              </Nav.Link>
              <Nav.Link
                className="show-on-lg"
                href="#CATALOGO/ALTERNADORES"
                style={{
                  backgroundColor: "#00443b",
                  color: "white",
                  textDecoration: "none",
                  listStyle: "none",
                }}
              >
                ALTERNADORES
              </Nav.Link>
              <Nav.Link
                className="show-on-lg"
                href="#CATALOGO/COMPONENTES"
                style={{
                  backgroundColor: "#00443b",
                  color: "white",
                  textDecoration: "none",
                  listStyle: "none",
                }}
              >
                COMPONENTES
              </Nav.Link>
              <Nav.Link
                className="show-on-lg"
                href="#CATALOGO/OTROS"
                style={{
                  backgroundColor: "#00443b",
                  color: "white",
                  textDecoration: "none",
                  listStyle: "none",
                }}
              >
                OTROS
              </Nav.Link>
              <Nav.Link
                className="show-on-lg"
                href="#NOSOTROS"
                style={{
                  backgroundColor: "#00443b",
                  color: "white",
                  textDecoration: "none",
                  listStyle: "none",
                }}
              >
                NOSOTROS
              </Nav.Link>

              <Nav.Link
                className="show-on-lg"
                href="#CONTACTO"
                style={{
                  backgroundColor: "#00443b",
                  color: "white",
                  textDecoration: "none",
                  listStyle: "none",
                }}
              >
                CONTACTO
              </Nav.Link>

              <Nav.Link
                className="show-on-lg "
                href="#PREGUNTAS-FRECUENTES"
                style={{
                  backgroundColor: "#00443b",
                  color: "white",
                  textDecoration: "none",
                  listStyle: "none",
                }}
              >
                PREGUNTAS FRECUENTES
              </Nav.Link>

              <Nav.Link
                className="show-on-lg"
                href="#NOSOTROS"
                style={{
                  backgroundColor: "#00443b",
                  color: "white",
                  textDecoration: "none",
                  listStyle: "none",
                }}
              >
                SOPORTE
              </Nav.Link>
              <Nav.Link
                className="show-on-lg"
                href="#NOSOTROS"
                style={{
                  backgroundColor: "#00443b",
                  color: "white",
                  textDecoration: "none",
                  listStyle: "none",
                }}
              >
                REPORTES
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

            <Number />
          </Container>
        </Navbar>

        {/* El contenedor que faltaba */}
        <Container fluid className="Navbar">
          <Nav className="justify-content-center">
            <Nav.Link className="tab hide-on-lg" href="#NOSOTROS">
              NOSOTROS
            </Nav.Link>
            <Nav.Link className="tab hide-on-lg" href="#CONTACTO">
              CONTACTO
            </Nav.Link>
            <Nav.Link className="tab hide-on-lg" href="#NOSOTROS">
              SOPORTE
            </Nav.Link>
            <Nav.Link className="tab hide-on-lg" href="#NOSOTROS">
              REPORTES
            </Nav.Link>
            <Nav.Link className="tab hide-on-lg" href="#PREGUNTAS FRECUENTES">
              RPF
            </Nav.Link>
          </Nav>
        </Container>
      </header>
    </>
  );
};

export default Header;
