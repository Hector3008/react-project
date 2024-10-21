import React from 'react'
import { Nav } from 'react-bootstrap';
import "./ConsultarConFoto.css"
const ConsultarConFoto = () => {
  return (
    <Nav.Link className="consultar-con-foto">
      {" "}
      <div className="hide-on-lg">CONSULTAR CON FOTO </div>
      <i class="bi bi-camera"></i>
    </Nav.Link>
  );
}

export default ConsultarConFoto