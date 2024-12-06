import React from 'react'
import Carousel from "react-multi-carousel";
import { Button } from 'react-bootstrap';

const DashboardCarrousel = ({items}) => {
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 1024 },
        items: 4,
      },
      desktop: {
        breakpoint: { max: 1024, min: 768 },
        items: 3,
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
        <div key={index} className="card-starter">
          <img
            className="card-starter-img"
            src="https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg"
            alt={`logo ${index + 1}`}
          />
          <h6>{starter.title}</h6>
          <Button className="cotizar">COTIZAR</Button>
          <Button className="quick-view">VISTA RAPIDA</Button>
        </div>
      ))}
    </Carousel>
  );
}

export default DashboardCarrousel