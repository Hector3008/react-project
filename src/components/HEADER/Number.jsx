import React, { useContext } from "react";
import "./Number.css"
import { ContactContext } from "../../context/contactContext"; 
import Form from "react-bootstrap/Form";

const Number = () => {
  const { setNumber } = useContext(ContactContext);

  const setNumberHandler = (event) => { 
    setNumber(event.target.value);
  };

  return (
    <Form
      className="d-flex ms-auto number"
      onSubmit={(event) => event.preventDefault()}
    >
      <Form.Control
        type="text"
        placeholder="número telefónico: "
        className="form__placeholder"
        aria-label="número telefónico"
        onChange={setNumberHandler}
      />
    </Form>
  );
};

export default Number;
