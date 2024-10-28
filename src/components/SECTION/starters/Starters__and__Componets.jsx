import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Starters } from "./Starters/Starters";
import Components from "./Components/Components";
import "./Starters__and__Components__Container.css"
const Starters__and__Componets = () => {
  return (
    <Container className="Starters__and__Components__Container container-fluid">

          <Starters />

          <Components />

    </Container>
  );
};

export default Starters__and__Componets;
