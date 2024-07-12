// src/pages/Blog.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import RealTimeNews from '../components/RealTimeNews';
import '../styles/blog.css';

const Blog = () => {
  return (
    <Container className="blog-container">
      <h1 className="blog-title">Blog de Corvel's</h1>
      <Row>
        <Col md={8}>
          <Row>
            <Col md={12} className="featured-post mb-4">
              <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/850x350" />
                <Card.Body>
                  <Card.Title>Post Destacado</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!
                  </Card.Text>
                  <Button variant="primary">Leer más →</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="blog-card">
                <Card.Img variant="top" src="https://via.placeholder.com/700x350" />
                <Card.Body>
                  <Card.Title>Cómo mantener un entorno limpio y seguro</Card.Title>
                  <Card.Text className="blog-excerpt">
                    Descubre las mejores prácticas para mantener tu entorno libre de plagas y gérmenes...
                  </Card.Text>
                  <Button variant="primary">Leer más →</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="blog-card">
                <Card.Img variant="top" src="https://via.placeholder.com/700x350" />
                <Card.Body>
                  <Card.Title>Importancia del saneamiento ambiental</Card.Title>
                  <Card.Text className="blog-excerpt">
                    El saneamiento ambiental es crucial para la salud pública. Aprende más sobre su impacto...
                  </Card.Text>
                  <Button variant="primary">Leer más →</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Acerca de Corvel's</Card.Title>
              <Card.Text>
                En Corvel's, nos especializamos en brindar soluciones integrales para el saneamiento ambiental. Nuestro equipo de expertos está comprometido con la excelencia y la satisfacción del cliente.
              </Card.Text>
            </Card.Body>
          </Card>
          <RealTimeNews />
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;
