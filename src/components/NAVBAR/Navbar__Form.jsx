import React from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Navbar__Form.css"

const Navbar__Form = () => {
  return (
    <Form className="d-flex ms-auto form-container hide-on-lg">
      <Form.Control
        type="search"
        placeholder="¿qué estás buscando?"
        className="form__placeholder"
        aria-label="Search"
      />
      <Button variant="outline-success" className="form__button">
        <img src="/img/search__icon.svg" alt="search__icon.svg" />
      </Button>
    </Form>
  );
}

export default Navbar__Form;