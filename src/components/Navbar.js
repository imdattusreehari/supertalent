import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">SuperTalent</div>

        <button
          className={`menu-toggle${menuOpen ? ' active' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen ? 'true' : 'false'}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`nav-links${menuOpen ? ' open' : ''}`}>
          <a href="/" onClick={closeMenu}>Home</a>
          <a href="/services" onClick={closeMenu}>Services</a>
          <a href="/portfolio" onClick={closeMenu}>Portfolio</a>
          <a href="/resources" onClick={closeMenu}>Resources</a>
          <a href="/about-us" onClick={closeMenu}>About Us</a>
          <a href="/contact-us" onClick={closeMenu}>Contact Us</a>
        </nav>

        <div className="social-icons">
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>

        <button className="join-button">Join Now</button>
      </div>
    </header>
  );
}

export default Navbar;
