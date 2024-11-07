import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Search__Form.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Search__Form = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const formHandler = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/catalog/search/${search}`);
    }
  };

  return (
    <Form
      onSubmit={formHandler}
      className="d-flex ms-auto form-container hide-on-lg"
    >
      <Form.Control
        type="search"
        placeholder="¿qué estás buscando?"
        className="form__placeholder"
        aria-label="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button variant="outline-success" className="form__button" type="submit">
        <i className="bi bi-search"></i>
      </Button>
    </Form>
  );
};

export default Search__Form;
