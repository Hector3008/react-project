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
  const [itemsPerPage, setItemsPerPage] = useState(10); // Número de items por página
  const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual

  // Paginación: calcular el índice de inicio y fin
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Cambiar de página
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const pagesLimit = 10

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
    if(currentPage<=4){
      renderPages = [1,2,3,4,5, "...",totalPages]  
      
    }
    //si la currentPage está entre las 3 últimas, imprimo la primera página y las últimas 3:
    if(currentPage+4>totalPages) {
      renderPages=["1","...",totalPages-4, totalPages-3,totalPages-2,totalPages-1,totalPages]
      
    } 
    //si la currentPage está intermedia, imprimo la primera y la última página junto a las 3 que rodean a la currentPage:
    if (currentPage > 4 && currentPage + 4 <= totalPages) {
      console.log("intermedio");
      renderPages = [
        1,
        "...",
        currentPage -2,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        currentPage +2,
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
      <Container className="catalog">
        <Row>
          <Col sm="4" xs="4" md="3" lg="3" xl="2" className="filters-container">
            <Filters />
          </Col>
          <Col>
            <Row>
              <Col>
                <h3>
                  página {currentPage} de {totalPages}
                </h3>
              </Col>
              <Col>
                <h3>
                  ver por página:{" "}
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
                      handlePerPageChange(25);
                    }}
                    active={itemsPerPage === 25}
                  >
                    25
                  </Button>
                  <Button
                    variant="outline-primary"
                    onClick={() => {
                      handlePerPageChange(50);
                    }}
                    active={itemsPerPage === 50}
                  >
                    50
                  </Button>
                </h3>
              </Col>
            </Row>

            <Row>
              <Col>
                <Row>
                  <Col className="pagination-buttons text-center">
                    {renderPages.map((e, index) =>
                      e == "..." ? (
                        <span
                          key={e + "renderPagesKey" + index}
                          style={{ margin: "0 8px" }}
                        >
                          {e}
                        </span>
                      ) : (
                        <Button
                          key={e + "renderPagesKey"}
                          variant="outline-primary"
                          onClick={() => handlePageChange(e)}
                          active={currentPage === e}
                        >
                          {e}
                        </Button>
                      )
                    )}
                  </Col>
                </Row>
                <Row className="itemList">
                  <ItemList items={currentItems} />
                </Row>
                <Row>
                  <Col className="pagination-buttons text-center">
                    {renderPages.map((e, index) =>
                      e == "..." ? (
                        <span
                          key={e + "renderPagesKey" + index}
                          style={{ margin: "0 8px" }}
                        >
                          {e}
                        </span>
                      ) : (
                        <Button
                          key={e + "renderPagesKey"}
                          variant="outline-primary"
                          onClick={() => handlePageChange(e)}
                          active={currentPage === e}
                        >
                          {e}
                        </Button>
                      )
                    )}
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
