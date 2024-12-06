import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContactContext } from "../../../../context/contactContext";
import { Button, Col, Row } from "react-bootstrap";
import "./Item.css";

const Item = ({ id, title, categories, img, description, sku, thumbnails, onQuickView }) => {


  const { num } = useContext(ContactContext);
  const CotizarHandler = () => {
    console.log("cotizarHandler to :", num);
  };
  return (
    <div className="ItemCard">
      <img
        className="cardImage"
        src={
          img
            ? img
            : "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg"
        }
        alt="img"
      />
      <Link to={`/item/${id}`}>
        <h6 className="title">{title}</h6>
      </Link>
      <Row>
        <Col>
          <Button
            onClick={() =>
              onQuickView({
                id,
                title,
                categories,
                img,
                description,
                thumbnails,
                sku,
              })
            }
            className="quick-view"
          >
        VISTA RAPIDA          </Button>
        </Col>
        <Col>
          <Button className="cotizar" onClick={CotizarHandler}>
            COTIZAR
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Item;
