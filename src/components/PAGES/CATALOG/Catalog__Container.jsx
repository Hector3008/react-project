import React from 'react'
import ItemList from './ItemList/ItemList';
import { getElements } from '../../../services/utils';
import { Row, Col, Container } from 'react-bootstrap';
import "./catalog__container.css"
const Catalog__Container = () => {
const items = getElements()
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Row>
              <Col>
                <h3>page index</h3>
              </Col>
              <Col>
                <h3>pagination here 1,2,3,4,5,6...98</h3>
              </Col>
            </Row>

            <Row>
              <Col xs lg="3" className="filters-container">
                filters
              </Col>
              <Col>
                <ItemList items={items} />
                <h3>pagination here 1,2,3,4,5,6...98</h3>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Catalog__Container