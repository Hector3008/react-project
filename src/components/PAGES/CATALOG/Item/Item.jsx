import React from 'react'
import "./Item.css"
const Item = ({id, title, categories, img }) => {
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
      <h6>{title}</h6>
      <p>{id}</p>
      <p>{categories[categories.length-1]}</p>
      <p>vista rápida...</p>
    </div>
  );
}

export default Item