import React from "react";
import "./DashboardContainer.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import Form from "react-bootstrap/Form";
import DashboardCarrousel from "./DashboardCarrousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import { getKeywords, getBrands } from "../../../services/utils";


const DashboardContainer = ({ items, components, title }) => {
  const [currentItems, setCurrentItems] = useState(items);
  const keywords = getKeywords();
  const brands = getBrands();
  const handleBrand = (search) => {
    const filteredItems = items.filter((e) =>
      e.description.toUpperCase().includes(search.toUpperCase())
    );
    setCurrentItems(filteredItems);
  };
const handleCategory = (category)=>{
  //console.log("category: ", category);
  //console.log("components: ", components);
  
    const find = components.find((e) => e.id == category.id);
    //console.log("find: ", find);
    //console.log("currentItems[0].categories: ", currentItems[0].categories);
    
    setCurrentItems(items.filter((e) => e.categories.includes(find.title)))
}

      const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1024 },
          items: 6,
        },
        desktop: {
          breakpoint: { max: 1024, min: 768 },
          items: 4,
        },
        
        tablet: {
          breakpoint: { max: 768, min: 464 },
          items: 4,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 4,
        },
      };

  return (
    <section className="bg-orange">
      <Container className="dashboard">
        <Row>
          <Col md="3" lg="3" xl="2">
            <div>
              <h4>{title}</h4>
              <div>
                {brands.map((brand) => (
                  <Button
                    key={`button-${brand}`}
                    onClick={() => handleBrand(`${brand}`)}
                  >
                    {brand}
                  </Button>
                ))}
              </div>
            </div>
            <Form
              className="d-flex ms-auto"
              onSubmit={(event) => event.preventDefault()}
            >
              <Form.Control
                type="text"
                placeholder="palabra clave: "
                className="form__placeholder"
                aria-label="palabra clave"
              />
            </Form>

            <div>
              {keywords.map((keyword) => (
                <Button key={`button-${keyword}`}>{keyword}</Button>
              ))}
            </div>
          </Col>
          <Col md="8" lg="9" xl="9">
            <Row className="up-tabs">
              <Col className="right-align">
                <Button className="reiniciar">reiniciar</Button>
              </Col>
            </Row>
            <DashboardCarrousel items={currentItems} />
            <Carousel
              className="components-carousel"
              responsive={responsive}
              autoPlay={false}
              autoPlaySpeed={false}
              infinite={true}
              transitionDuration={false}
              slidesToSlide={1}
              arrows={true}
            >
              {components.map((component) => (
                <Button
                  key={`button-${component.title}`}
                  onClick={() => handleCategory(component)}
                >
                  {component.title}
                </Button>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DashboardContainer;
