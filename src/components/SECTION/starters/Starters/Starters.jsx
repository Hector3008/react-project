import React from "react";
import { productos } from "../../../../data";
import Card from "../../../CARD/Card";
import { Col } from "react-bootstrap";

import "./Starters.css"
export const Starters = () => {
  const starters = productos.filter((producto) =>
    producto.categories.includes("arrancadores")
  );
  return (
    <div>
      <h4 className="text-center h4">ARRANCADORES</h4>

      <div className="starters__container">
        {starters.map((starter) => (
          <Col
            key={`Col-${starter.title}-${starter.id}`}
            className="starter__container"
          >
            <Card
              key={`${starter.title}-${starter.id}`}
              title={starter.title}
              categories={starter.categories}
              sku={starter.sku}
              type="type1"
            />
          </Col>
        ))}
      </div>
    </div>
  );
};
