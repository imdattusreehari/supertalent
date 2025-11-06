
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Portfolio from './pages/portfolio';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Resources from './pages/Resources';

/**
 * Main App component that renders application routes
 * @returns {JSX.Element} The main application component
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
