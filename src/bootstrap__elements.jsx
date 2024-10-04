import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Navbar,
  Nav,
  Form,
  Button,
  ProgressBar,
  Figure,
  Table,
  Row,
  Col,
} from "react-bootstrap";

function App() {
  return (
    <Container>
      {/* Navbar (Header) */}
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Cabecera de la Página</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#about">Acerca de</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Sección principal */}
      <Row className="my-4">
        <Col lg={8}>
          <h2>Artículo Principal</h2>
          <p>Este es el contenido del artículo.</p>
          <blockquote className="blockquote">Cita larga de ejemplo.</blockquote>
          <p>
            Ejemplo de código en HTML:{" "}
            <code>&lt;p&gt;Este es un párrafo.&lt;/p&gt;</code>
          </p>

          {/* Tabla */}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Columna 1</th>
                <th>Columna 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dato 1</td>
                <td>Dato 2</td>
              </tr>
              <tr>
                <td>Dato 3</td>
                <td>Dato 4</td>
              </tr>
            </tbody>
          </Table>
        </Col>

        {/* Barra lateral */}
        <Col lg={4}>
          <h3>Contenido adicional</h3>
          <p>Esta es información relacionada o extra.</p>

          {/* Progreso */}
          <ProgressBar now={70} label={`${70}%`} />
        </Col>
      </Row>

      {/* Imagen con leyenda */}
      <Figure>
        <Figure.Image
          width={150}
          height={150}
          alt="Ejemplo de imagen"
          src="https://via.placeholder.com/150"
        />
        <Figure.Caption>Imagen de ejemplo</Figure.Caption>
      </Figure>

      {/* Formulario */}
      <Form>
        <Form.Group controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu nombre" />
        </Form.Group>

        <Form.Group controlId="email" className="my-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu email" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>

      {/* Footer */}
      <footer className="mt-4">
        <p>&copy; 2024 Mi Sitio Web</p>
      </footer>
    </Container>
  );
}

export default App;
