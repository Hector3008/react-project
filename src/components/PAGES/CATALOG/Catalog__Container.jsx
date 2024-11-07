import React from "react";
import ItemList from "./ItemList/ItemList";
import { getCategories, getElements } from "../../../services/utils";
import { Row, Col, Container } from "react-bootstrap";
import "./catalog__container.css";
import { useParams } from "react-router-dom";
import Filters from "./Filters/Filters";

const Catalog__Container = () => {
  const categories = getCategories()
  let items;
  const { category, brand, keyword, search } = useParams();
    if (category == undefined && brand == undefined && keyword == undefined && search == undefined) {
    items = getElements();
  }
if (search != undefined) {
  items = getElements().filter((e) => {
    console.log(e.description);
    return e.description.toUpperCase().includes(search.toUpperCase());
  });
}
  if (brand != undefined) {
    items = getElements().filter((e) =>
      e.description.includes(brand.toUpperCase())
    );
  }
  if (keyword != undefined) {
    items = getElements().filter((e) =>
      e.description.includes(keyword.toUpperCase())
    );
  }
  if (category != undefined) {
const find  = categories.find(e=>e.id==category)

    items = getElements().filter(e=>e.categories.includes(find.title))
  }

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Row>
              <Col>
                <h3>page index</h3>
              </Col>
              <Col>
                <h3>pagination here 1,2,3,4,5,6...98</h3>
              </Col>
            </Row>

            <Row>
              <Col xs lg="3" className="filters-container">
                <Filters />
              </Col>
              <Col>
                <ItemList items={items} />
                <h3>pagination here 1,2,3,4,5,6...98</h3>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Catalog__Container;
