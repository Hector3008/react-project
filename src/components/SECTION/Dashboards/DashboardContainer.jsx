import React from "react";
import "./Arrancadores.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import DashboardCarrousel from "./DashboardCarrousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";

const DashboardContainer = ({ items }) => {
  const [currentItems, setCurrentItems] = useState(items);

const handleBrand = (search) => {
  
  
  const filteredItems = items.filter((e) =>
    e.description.toUpperCase().includes(search.toUpperCase())
  );
  setCurrentItems(filteredItems);
};

  return (
    <Container className="dashboard">
      <h3 className="text-center">ARRANCADORES Y COMPONENTES</h3>
      <Row>
        <Col sm="4" xs="6" md="3" lg="3" xl="2">
          <div>
            <h4>MARCA</h4>
            <ul>
              <Button onClick={() => handleBrand("TOYOTA")}>TOYOTA</Button>

              <Button onClick={() => handleBrand("NISSAN")}>NISSAN</Button>

              <Button onClick={() => handleBrand("HYUNDAI")}>HYUNDAI</Button>
            </ul>
          </div>
          <h4>KEYWORD</h4>
          <ul>
            <li>24v</li>
            <li>24v</li>
            <li>24v</li>
            <li>24v</li>
            <li>24v</li>
          </ul>
        </Col>
        <Col sm="8" md="8" lg="9" xl="9">
          <DashboardCarrousel items={currentItems} />
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardContainer;
