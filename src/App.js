// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Specialists from './pages/Specialists';
import ServiceDetail from './pages/ServiceDetail';
import './App.css'; // Asegúrate de que el archivo CSS global esté importado
import SpecialistDetail from './pages/SpecialistDetail';

function App() {
  return (
    <Router>
      <div>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/specialists" element={<Specialists />} />
          <Route path="/specialist/:id" element={<SpecialistDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
