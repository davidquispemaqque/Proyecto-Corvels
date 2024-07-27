// src/pages/Blog.js
import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import RealTimeNews from '../components/RealTimeNews';
import Header from '../components/Header'; // Importa el componente Header
import '../styles/blog.css';
import headerImage from '../images/blog.jpg'; // Nueva imagen para el encabezado
import blogPostsData from '../data/blogPostsData'; // Importa los datos del blog

const Blog = () => {
  return (
    <div>
      <div className="header-container">
        <Header image={headerImage} />
        <div className="blog-title-container">
          <h1 className="blog-title">Nuestro Blog</h1>
        </div>
      </div>
      
      <Container className="blog-container">
        <Row>
          <Col md={8}>
            <Row>
              {blogPostsData.map(post => (
                <Col md={12} className="featured-post mb-4" key={post.id}>
                  <Card>
                    <Carousel>
                      {post.images.map((image, index) => (
                        <Carousel.Item key={index}>
                          <Card.Img variant="top" src={image} />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                    <Card.Body>
                      <Card.Title>{post.title}</Card.Title>
                      <Card.Text>{post.text}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
          <Col md={4}>
            <Card className="mb-4 about-card">
              <Card.Body>
                <Card.Title>Acerca de Corvel's</Card.Title>
                <Card.Text>
                  En Corvel's, nos especializamos en brindar soluciones integrales para el saneamiento ambiental. Nuestro equipo de expertos está comprometido con la excelencia y la satisfacción del cliente.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="real-time-news-card">
              <RealTimeNews />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
