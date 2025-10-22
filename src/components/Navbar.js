import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">SuperTalent</div>

        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/pages/portfolio">Resources</a>
          <a href="/pages/portfolio">About Us</a>
          <a href="/contact-us">Contact Us</a>
        </nav>

        <div className="social-icons">
          <a href="/pages/portfolio"><i className="fab fa-youtube"></i></a>
          <a href="/pages/portfolio"><i className="fab fa-instagram"></i></a>
        </div>

        <button className="join-button">Join Now</button>
      </div>
    </header>
  );
}

export default Navbar;
