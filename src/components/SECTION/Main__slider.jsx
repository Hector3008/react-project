import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./main__slider.css";

const Mains__slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      interval={5000}
      className="carousel"
    >
      <Carousel.Item
        className="carousel-item"
        style={{ backgroundImage: `url("/img/main__slider/20.png")` }}
      >
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item
        className="carousel-item"
        style={{ backgroundImage: `url("/img/main__slider/18.png")` }}
      >
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item
        className="carousel-item"
        style={{ backgroundImage: `url("/img/main__slider/19.png")` }}
      ></Carousel.Item>
    </Carousel>
  );
};

export default Mains__slider;
