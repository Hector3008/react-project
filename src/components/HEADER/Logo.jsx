import React from 'react'
import { Navbar } from 'react-bootstrap';
import "./logo.css"
const Logo = () => {
  return (
    <Navbar.Brand href="#home">
      <img className="logo" src="/img/Logo.webp"></img>
    </Navbar.Brand>
  );
}

export default Logo