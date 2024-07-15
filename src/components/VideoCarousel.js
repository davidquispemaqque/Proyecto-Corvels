// src/components/VideoCarousel.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/videoCarousel.css'; // Asegúrate de crear este archivo CSS

const VideoCarousel = () => {
  const videos = [
    'https://www.youtube.com/embed/dQw4w9WgXcQ', // Video 1
    'https://www.youtube.com/embed/tgbNymZ7vqY', // Video 2
    'https://www.youtube.com/embed/3JZ_D3ELwOQ'  // Video 3
  ];

  return (
    <Carousel>
      {videos.map((video, index) => (
        <Carousel.Item key={index}>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src={video}
              allowFullScreen
              title={`video-${index}`}
            />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default VideoCarousel;

