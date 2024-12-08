import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Curiers.css";

const Curiers = () => {
  const [progress, setProgress] = useState(0); // Estado para controlar el progreso de la barra

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 5,
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

  const logos = [
    "/img/curiers/logo1.png",
    "/img/curiers/logo2.png",
    "/img/curiers/logo3.png",
    "/img/curiers/logo4.png",
    "/img/curiers/logo5.png",
    "/img/curiers/logo6.png",
    "/img/curiers/logo2.png",
    "/img/curiers/logo3.png",
    "/img/curiers/logo4.png",
    "/img/curiers/logo5.png",
    "/img/curiers/logo6.png",
    "/img/curiers/logo3.png",
  ];

  const autoPlaySpeed = 4000; // Tiempo entre transiciones
  const transitionDuration = 1500; // Duración de la transición

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          return 0; // Reinicia la barra si llega al 100%
        }
        return prevProgress + 1; // Incrementa el progreso
      });
    }, autoPlaySpeed / 100); // Calcula el incremento con base en el tiempo de autoplay

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <div className="couriers-container">
      <div className="couriers-carousel">
        <h2 className="text-center h3 title">
          <i class="bi bi-box-seam"></i> TRABAJAMOS CON MÁS DE 40 AGENCIAS{" "}
          <i class="bi bi-box-seam"></i>
        </h2>

        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={autoPlaySpeed}
          infinite={true}
          transitionDuration={transitionDuration}
          slidesToSlide={1}
          arrows={false}
        >
          {logos.map((logo, index) => (
            <div key={index} className="logo-item">
              <img src={logo} alt={`logo ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Curiers;
