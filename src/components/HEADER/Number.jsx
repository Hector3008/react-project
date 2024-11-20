import React from 'react'

import Form from "react-bootstrap/Form";
const Number = () => {
  return (
    <Form className="d-flex ms-auto form-container hide-on-lg">
      <Form.Control
        type="search"
        placeholder="número telefónico"
        className="form__placeholder"
        aria-label="number telefónico"
        
      />
    </Form>
  );
}

export default Number