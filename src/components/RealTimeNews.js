import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import '../styles/RealTimeNews.css';

const RealTimeNews = () => {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    try {
      console.log('Fetching news...');
      const response = await axios.get(`https://newsapi.org/v2/everything?q=plagas+desinfección&sortBy=publishedAt&apiKey=1a26ea7bc9074372b65c88dcd65dd037`);
      console.log('News fetched:', response.data.articles);
      setNews(response.data.articles);
    } catch (error) {
      console.error('Error fetching the news:', error);
    }
  };

  useEffect(() => {
    fetchNews();

    const interval = setInterval(() => {
      fetchNews();
    }, 5000); // Actualiza cada 2 minutos para pruebas

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="real-time-news">
      <h4>Noticias en Tiempo Real</h4>
      {news.map((article, index) => (
        <Card key={index} className="news-article mb-3">
          <Card.Img variant="top" src={article.urlToImage || 'https://via.placeholder.com/150'} />
          <Card.Body>
            <Card.Title>{article.title}</Card.Title>
            <Card.Text>{article.description}</Card.Text>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Leer más</a>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default RealTimeNews;
