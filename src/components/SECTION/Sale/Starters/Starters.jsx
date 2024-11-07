import React from 'react'
import { Col, Row } from 'react-bootstrap'
import STComponents from "./ST-Components/ST-Components";
const Starters = () => {
  return (
    <>
      <h3>Starters</h3>
      <Row>
        <Col>Starter1</Col>
        <Col>Starter2</Col>
        <Col>Starter3</Col>
      </Row>
<Row>
  <STComponents/>
</Row>
    </>
  );
}

export default Starters