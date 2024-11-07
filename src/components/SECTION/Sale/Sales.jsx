import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import Starters from './Starters/Starters'
import Alternators from './Alternators.jsx/Alternators'
const Sales = () => {
  return (
    <Container
    >
      <Row>
        <Col>
        <Starters/>
        </Col>
        <Col>
        <Alternators/>
        </Col>
      </Row>
    </Container>
  )
}

export default Sales