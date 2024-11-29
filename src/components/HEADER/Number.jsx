import React, { useContext } from "react";
import { ContactContext } from "../../context/contactContext"; 
import Form from "react-bootstrap/Form";

const Number = () => {
  const { setNumber } = useContext(ContactContext);

  const setNumberHandler = (event) => {    
    setNumber(event.target.value);
  };

  return (
    <Form className="d-flex ms-auto form-container hide-on-lg">
      
      <Form.Control
        type="text"
        placeholder="número telefónico"
        className="form__placeholder"
        aria-label="número telefónico"
        onChange={setNumberHandler} 
      />
    </Form>
  );
};

export default Number;
