import React from 'react'
import Carousel from "react-multi-carousel";

import { Button, Row, Col } from 'react-bootstrap';
import "./DashboardCarousel.css"

const DashboardCarrousel = ({items}) => {
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 1024 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 1024, min: 768 },
        items: 4,
      },
      tablet: {
        breakpoint: { max: 768, min: 464 },
        items: 3,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
      },
    };
  return (
    <Carousel
      responsive={responsive}
      autoPlay={false}
      autoPlaySpeed={false}
      infinite={true}
      transitionDuration={false}
      slidesToSlide={1}
      arrows={true}
    >
      {items.map((starter, index) => (
        <div key={index} className="card-carousel">
          <img
            className="img"
            src="https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg"
            alt={`logo ${index + 1}`}
          />
          <p>{starter.title}</p>
          <Row>
            <Col className="buttons-container">
              <Button className="cotizar">COTIZAR</Button>
            </Col>
            <Col className="buttons-container">
              <Button className="quick-view">VISTA RAPIDA</Button>
            </Col>
          </Row>
        </div>
      ))}
    </Carousel>
  );
}

export default DashboardCarrousel