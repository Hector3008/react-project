import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, title, categories, img, description, sku, thumbnails, onQuickView }) => {
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
        <h6>{title}</h6>
      </Link>

      <p>{id}</p>
      <p>{categories[categories.length - 1]}</p>
      <p
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
        vista rápida...
      </p>
    </div>
  );
};

export default Item;
