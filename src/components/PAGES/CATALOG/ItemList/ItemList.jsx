import React, { useState } from "react";
import Item from "../Item/Item";
import { Modal, Button,Row, Col } from "react-bootstrap";
import "./ItemList.css";
import { useContext } from "react";
import { ContactContext } from "../../../../context/contactContext";

const ItemList = ({ items }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
const { num } = useContext(ContactContext);
console.log("itemList running on");

const CotizarHandler = () => {
  console.log("cotizarHandler to :", num);
};
  // Función que maneja el click en "vista rápida"
  const handleQuickView = (item) => {
        
    setSelectedItem(item); 
    setShowModal(true); 
  };

  // Función para cerrar el modal
  const handleClose = () => setShowModal(false);

  return (
    <div className="ItemsContainer">
      {items.map((item) => (
        <Item key={item.id} {...item} onQuickView={handleQuickView} />
      ))}

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedItem?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={
              selectedItem?.img ||
              "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg"
            }
            alt="Item"
            style={{ width: "50%" }}
          />
          <p className="text-center">
            {selectedItem?.description || "sin descripcion"}
          </p>
          <p className="text-center">
            {selectedItem?.categories[selectedItem.categories.length - 1]}
          </p>
          <Row className="buttons">
            <Col>
              {" "}
              <Button className="cotizar" onClick={CotizarHandler}>
                COTIZAR
              </Button>
            </Col>
            <Col>
              <Button variant="secondary close" onClick={handleClose}>
                CERRAR
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ItemList;
