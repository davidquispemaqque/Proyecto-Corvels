// src/pages/PostDetail.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: 'Primera Publicación',
    summary: 'Este es el resumen de la primera publicación.',
    content: 'Este es el contenido completo de la primera publicación.'
  },
  {
    id: 2,
    title: 'Segunda Publicación',
    summary: 'Este es el resumen de la segunda publicación.',
    content: 'Este es el contenido completo de la segunda publicación.'
  },
  // Agrega más publicaciones aquí
];

const PostDetail = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  return (
    <Container>
      <h1 className="my-5">{post.title}</h1>
      <p>{post.content}</p>
      <Link to="/blog">
        <Button variant="primary">Volver al Blog</Button>
      </Link>
    </Container>
  );
};

export default PostDetail;
