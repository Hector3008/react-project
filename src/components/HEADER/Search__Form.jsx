import React from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Search__Form.css";

import "bootstrap-icons/font/bootstrap-icons.css";

const Search__Form = () => {
  return (
    <Form className="d-flex ms-auto form-container hide-on-lg">
      <Form.Control
        type="search"
        placeholder="¿qué estás buscando?"
        className="form__placeholder"
        aria-label="Search"
      />
      <Button variant="outline-success" className="form__button">
        <i class="bi bi-search"></i>{" "}
      </Button>
    </Form>
  );
}

export default Search__Form;