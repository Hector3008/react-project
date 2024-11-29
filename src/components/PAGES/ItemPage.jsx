import React from 'react'
import { useParams } from 'react-router-dom'
import { getElement } from '../../services/utils'
import { Button } from 'react-bootstrap'
import { useContext } from 'react'
import { ContactContext } from '../../context/contactContext'

const ItemPage = () => {

  const {itemID} = useParams()
  const item = getElement(itemID)
  const {num} = useContext(ContactContext)
  const CotizarHandler = ()=>{console.log("cotizarHandler to :", num);
  }
  
 
  return (
    <>
      <h1>{item.title}</h1>
      <p>{item.categories}</p>
      <Button onClick={CotizarHandler}>Cotizar</Button>
    </>
  );
}

export default ItemPage