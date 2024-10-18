import React from 'react'
import { Row, Col, Container } from "react-bootstrap";

import "./footer.css"
const FOOTER = () => {
  return (
    <>
      <footer>
        <Container fluid className="footer__container">
          <Row>
            <Col md={4} className="text-center text-md-left">
              <h5 className="title">SOBRE NOSOTROS</h5>
              <p className="desc">
                Somos una empresa dedicada a la importación y venta de repuestos
                automotrices multimarca para vehículos livianos y pesados.
              </p>
            </Col>
            <Col md={4} className="text-center">
              <h5 className="title">ENLACES DE INTERÉS</h5>
              <ul className="list-unstyled">
                <li>
                  <a className="link" href="/about">
                    NOSOTROS
                  </a>
                </li>
                <li>
                  <a className="link" href="/services">
                    SERVICIOS
                  </a>
                </li>
                <li>
                  <a className="link" href="/contact">
                    CONTACTO
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={4} className="text-center text-md-right">
              <h5 className="title">REDES</h5>
              <ul className="list-unstyled">
                <li>
                  <a className="link" href="https://facebook.com">
                    FACEBOOK
                  </a>
                </li>
                <li>
                  <a className="link" href="https://twitter.com">
                    TWITTER
                  </a>
                </li>
                <li>
                  <a className="link" href="https://instagram.com">
                    INSTAGRAM
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="bottom pt-3">
            <Col md={4} className="text-center item">
              <p className="sub">
                &copy; 2024{" "}
                <strong className="to">AUTOPART SHOP E I R L.</strong>
              </p>
            </Col>
            <Col md={4} className="text-center item sub">
              <p>
                DESARROLLADO POR <strong className='to'>HECTOR HERNANDEZ</strong>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default FOOTER;