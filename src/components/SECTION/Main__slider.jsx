import React from "react";
import { Carousel } from "react-bootstrap";
import "./main__slider.css";

const Mains__slider = () => {
  return (
    <Carousel className="carousel">
      <Carousel.Item className="local-img-1">
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="local-img-2">
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="local-img-3"></Carousel.Item>
    </Carousel>
  );
};

export default Mains__slider;
