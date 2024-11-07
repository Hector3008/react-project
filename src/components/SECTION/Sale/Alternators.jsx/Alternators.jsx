import React from 'react'
import { Row,Col } from 'react-bootstrap';
import ALTComponents from './Alt-Components/Alt-Components';
const Alternators = () => {
  return (
    <>
      <h3>Alternators</h3>
      <Row>
        <Col>Alternator1</Col>
        <Col>Alternator2</Col>
        <Col>Alternator3</Col>
      </Row>
      <Row>
        <ALTComponents />
      </Row>
    </>
  );
}

export default Alternators