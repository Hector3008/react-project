import React, { useState } from "react";
import Item from "../Item/Item";
import { Modal, Button } from "react-bootstrap";
import "./ItemList.css";

const ItemList = ({ items }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Función que maneja el click en "vista rápida"
  const handleQuickView = (item) => {
        console.log("item: ", item);
        
    setSelectedItem(item); // Guarda el item seleccionado en el estado
    setShowModal(true); // Muestra el modal
  };

  // Función para cerrar el modal
  const handleClose = () => setShowModal(false);

  return (
    <div className="ItemsContainer">
      {items.map((item) => (
        <Item key={item.id} {...item} onQuickView={handleQuickView} />
      ))}

      {/* Modal que muestra los detalles del item seleccionado */}
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
            style={{ width: "60%" }}
          />
          <p>ID: {selectedItem?.id}</p>
          {selectedItem?.description||"sin descripcion"}
          <p>
            Categoría:{" "}
            {selectedItem?.categories[selectedItem.categories.length - 1]}
          </p>
          {/* Puedes añadir aquí más detalles del item si los tienes */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ItemList;
