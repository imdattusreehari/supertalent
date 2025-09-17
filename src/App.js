
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Portfolio from './pages/portfolio';

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
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
