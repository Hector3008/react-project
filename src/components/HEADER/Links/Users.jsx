import React from 'react'
import { Nav } from 'react-bootstrap';
import "./Users.css"
const Users = ({clases}) => {
  return (
    <Nav.Link
      className={`${clases} users`}
      href="#PREGUNTAS-FRECUENTES"
      
    >
      LOGIN/REGISTER
    </Nav.Link>
  );
}

export default Users