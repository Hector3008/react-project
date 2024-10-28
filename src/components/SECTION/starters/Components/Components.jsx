import React from "react";
import Card from "../../../CARD/Card";
import { componentes__de__arrancador } from "../../../../data";
import { Col } from "react-bootstrap";

import "./Components.css"

const Components = () => {
  return (
    <div>
      <h4 className="text-center h4">COMPONENTES</h4>
      <div className="components__container">
        {componentes__de__arrancador.map((componente) => (
          <Col key={`Col-${componente}`} className="card__component">
            <Card key={componente} title={componente} type="components__card" />
          </Col>
        ))}
      </div>
    </div>
  );
};

export default Components;
