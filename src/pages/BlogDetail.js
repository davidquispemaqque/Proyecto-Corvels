// src/pages/BlogDetail.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import blogPosts from '../data/blogPosts';
import '../styles/blog.css';

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) {
    return <p>Artículo no encontrado</p>;
  }

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h1 className="my-5 text-center">{post.title}</h1>
          <img src={post.image} alt={post.title} className="img-fluid mb-4" />
          <p>{post.content}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogDetail;
