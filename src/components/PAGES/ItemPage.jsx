import React from 'react'
import { useParams } from 'react-router-dom'
import { getElement } from '../../services/utils'
import { Button, Container, Col, Row } from 'react-bootstrap'
import { useContext } from 'react'
import { ContactContext } from '../../context/contactContext'
import "./ItemPage.css"
const ItemPage = () => {

  const {itemID} = useParams()
  const item = getElement(itemID)
  const {num} = useContext(ContactContext)
  const CotizarHandler = ()=>{console.log("cotizarHandler to :", num);
  }
  console.log("item: ", item);
  
 
  return (
    <div className="page-container">
      <Container className="item-page-container">
        <Row>
          <Col className="col-img">
            <img
              src={
                item.img
                  ? item.img
                  : "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg"
              }
              alt=""
            />
          </Col>
          <Col className="col-data">
            <h1>{item.title}</h1>
            <p>
              {item.categories.map((category) => (
                <strong key={category}>/ {category} </strong>
              ))}
            </p>
            <p>{item.description}</p>
            <p>{item.sku ? "sku: "+item.sku:"" }</p>
            <Button className="cotizar" onClick={CotizarHandler}>
              COTIZAR
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ItemPage