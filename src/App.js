import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Specialists from './pages/Specialists';
import ServiceDetail from './pages/ServiceDetail';
import SpecialistDetail from './pages/SpecialistDetail';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };

    scrollToTop();
    
    const timeoutId = setTimeout(scrollToTop, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname]);
  
  return null;
}

function ScrollWrapper({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  return <>{children}</>;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <CustomNavbar />
        <WhatsAppButton />
        <Routes>
          <Route path="/" element={<ScrollWrapper><Home /></ScrollWrapper>} />
          <Route path="/about" element={<ScrollWrapper><About /></ScrollWrapper>} />
          <Route path="/services" element={<ScrollWrapper><Services /></ScrollWrapper>} />
          <Route path="/service/:id" element={<ScrollWrapper><ServiceDetail /></ScrollWrapper>} />
          <Route path="/contact" element={<ScrollWrapper><Contact /></ScrollWrapper>} />
          <Route path="/blog" element={<ScrollWrapper><Blog /></ScrollWrapper>} />
          <Route path="/specialists" element={<ScrollWrapper><Specialists /></ScrollWrapper>} />
          <Route path="/specialist/:id" element={<ScrollWrapper><SpecialistDetail /></ScrollWrapper>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;