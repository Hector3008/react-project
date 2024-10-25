import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./presentacion.css";

const Presentacion = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      interval={500000}
      className="slider"
    >
      <Carousel.Item className="slider-item first">
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="slider-item second">
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="slider-item third">
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Presentacion;
