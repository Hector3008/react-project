import React, { useState } from "react";
import ItemList from "./ItemList/ItemList";
import { getCategories, getElements } from "../../../services/utils";
import { Row, Col, Container, Button } from "react-bootstrap";
import "./catalog__container.css";
import { useParams } from "react-router-dom";
import Filters from "./Filters/Filters";

const Catalog__Container = () => {
  const categories = getCategories();

  // Filtrado de items según categoría, marca, etc.
  let items;
  const { category, brand, keyword, search } = useParams();
  if (
    category == undefined &&
    brand == undefined &&
    keyword == undefined &&
    search == undefined
  ) {
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
    const find = categories.find((e) => e.id == category);
    items = getElements().filter((e) => e.categories.includes(find.title));
  }
  const [itemsPerPage, setItemsPerPage] = useState(2); // Número de items por página
  const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual

  // Paginación: calcular el índice de inicio y fin
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Cambiar de página
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const pagesLimit = 4

  let renderPages = [];
//si la cantidad de páginas es menor a 5 se imprimen todas las páginas:
  if (pagesLimit > totalPages) {
    
    for (let index = 1; index <= totalPages; index++) {
      renderPages.push(index)
    }
    console.log("renderPages from ln62: ", renderPages);
    
  } 
  //caso contrario, empieza la casuistica:
  else {
    //si la currentPage es menor a tres, imprimo las 3 primeras páginas y luego la última:
    if(currentPage<=3){
      console.log("console.log from ln69");
      console.log("currentPage: ", currentPage);
      console.log("currentpage <= 2 (if)", currentPage <= 2); 
      renderPages = [1,2,3,"...",totalPages]  
      console.log("renderPages from ln72: ", renderPages);
      
    }
    //si la currentPage está entre las 3 últimas, imprimo la primera página y las últimas 3:
    if(currentPage+2>totalPages) {
      console.log("console.log from ln78");
      console.log("currentpage: ", currentPage);
      console.log("currentPage+2>totalPages", currentPage + 2 > totalPages);
      renderPages=["1","...",totalPages-2,totalPages-1,totalPages]
      console.log("renderPages from ln 82: ",renderPages);
      
    } 
    //si la currentPage está intermedia, imprimo la primera y la última página junto a las 3 qwue rodean a la currentPage:
    if (currentPage > 3 && currentPage + 2 <= totalPages) {
      console.log("intermedio");
      renderPages = [
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        totalPages,
      ];
      console.log("renderPages from stage4: ", renderPages);
    }

  }
  
  const handlePageChange = (page) => setCurrentPage(page);
  const handlePerPageChange = (num) => {
    setItemsPerPage(num);
    setCurrentPage(1);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Row>
              <Col>
                <h3>
                  Página {currentPage} de {totalPages}
                </h3>
              </Col>
              <Col>
                <h3>
                  items per page:
                  <Button
                    variant="outline-primary"
                    onClick={() => {
                      handlePerPageChange(5);
                    }}
                    active={itemsPerPage === 5}
                  >
                    5
                  </Button>
                  <Button
                    variant="outline-primary"
                    onClick={() => {
                      handlePerPageChange(10);
                    }}
                    active={itemsPerPage === 10}
                  >
                    10
                  </Button>
                  <Button
                    variant="outline-primary"
                    onClick={() => {
                      handlePerPageChange(20);
                    }}
                    active={itemsPerPage === 20}
                  >
                    20
                  </Button>
                </h3>
              </Col>
            </Row>

            <Row>
              <Col xs lg="3" className="filters-container">
                <Filters />
              </Col>
              <Col>
                <Row>
                  <Col className="pagination-buttons text-center">
                    {/* Botones de paginación */}
                    {[...Array(totalPages)].map((_, i) => (
                      <Button
                        key={i}
                        variant="outline-primary"
                        onClick={() => handlePageChange(i + 1)}
                        active={currentPage === i + 1}
                      >
                        {i + 1}
                      </Button>
                    ))}
                  </Col>
                </Row>

                {/* Mostrar los items de la página actual */}
                <ItemList items={currentItems} />
                <Row>
                  <Col className="pagination-buttons text-center">
                    {/* Botones de paginación */}
                    {[...Array(totalPages)].map((_, i) => (
                      <Button
                        key={i}
                        variant="outline-primary"
                        onClick={() => handlePageChange(i + 1)}
                        active={currentPage === i + 1}
                      >
                        {i + 1}
                      </Button>
                    ))}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Catalog__Container;
