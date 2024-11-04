import React from 'react'
import { useParams } from 'react-router-dom'
import { getElement } from '../../services/utils'
const ItemPage = () => {

  const {itemID} = useParams()
  const item = getElement(itemID)
  
  return (
    <>
    <h1>{item.title}</h1>
    <p>{item.categories}</p>
    </>
  )
}

export default ItemPage