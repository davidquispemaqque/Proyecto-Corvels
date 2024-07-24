// src/pages/Contact.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import contactImage from '../images/contacto.jpg';
import smallImage from '../images/corvel.jpg';
import Header from '../components/Header'; // Importa el componente Header
import '../styles/contact.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {
  return (
    <Container fluid>
      <Header title="Contactos" image={contactImage} />
      <Container>
        <section className="contact-details my-5">
          <Row>
            <Col md={6} className="contact-info d-flex flex-column align-items-center justify-content-center">
              <h2>Mantente en <span className="highlight">Contacto</span></h2>
              <p>Estamos muy atentos a lo que puedas necesitar, síguenos en nuestras redes sociales para encontrar la información de valor, escríbenos y con gusto nos pondremos en contacto.</p>
              <div className="image-with-text">
                <Image src={smallImage} alt="Inspirational" className="small-image" fluid />
                <div className="image-text">"Protegiendo el entorno, asegurando un futuro saludable."</div>
              </div>
              <div className="social-icons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </Col>
            <Col md={6} className="contact-methods-container d-flex align-items-center">
              <div className="contact-methods">
                <div className="contact-method">
                  <a href="tel:+5154218888">
                    <i className="fas fa-phone-alt"></i>
                    <div>
                      <h5>Contactos Fijos</h5>
                      <p>+51 953 762 677</p>
                      <p>+51 959 342 211</p>
                      <p>+51 952 870 388</p>
                    </div>
                  </a>
                </div>
                <div className="contact-method">
                  <a href="https://wa.me/51953762677" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-whatsapp"></i>
                    <div>
                      <h5>WhatsApp</h5>
                      <p>+51 953 762 677</p>
                    </div>
                  </a>
                </div>
                <div className="contact-method">
                  <a href="https://www.google.com/maps/place/Corvel%27s+S.R.L./@-16.4068832,-71.5245013,15z/data=!4m6!3m5!1s0x91424b0109ff56f5:0xc874e5312af91c2d!8m2!3d-16.4068832!4d-71.5245013!16s%2Fg%2F11g62g0_r9" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-map-marker-alt"></i>
                    <div>
                      <h5>Dirección</h5>
                      <p>Corvel's S.R.L., Banco De La Nación, F-25 Cercado De, Arequipa 04001</p>
                    </div>
                  </a>
                </div>
                <div className="contact-method">
                  <a href="mailto:corvels.limpieza@gmail.com">
                    <i className="fas fa-envelope"></i>
                    <div>
                      <h5>Enviar un correo</h5>
                      <p>corvels.limpieza@gmail.com</p>
                    </div>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </section>

        <section className="map my-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.3531117571097!2d-71.52450132393736!3d-16.406883238336913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424b0109ff56f5%3A0xc874e5312af91c2d!2sCorvel&#39;s%20S.R.L.!5e0!3m2!1ses-419!2spe!4v1720670933480!5m2!1ses-419!2spe"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="map"
          ></iframe>
        </section>
      </Container>
    </Container>
  );
};

export default Contact;
