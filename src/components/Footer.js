import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cta">
        <div className="cta-left">
          <h2>Start Your Project Now!</h2>
          <p>
            "Crafted with your convenience in mind, ensuring a brighter future
            for you and your loved ones."
          </p>
        </div>
        <div className="cta-right">
          <div className="send-icon">
            <i className="fas fa-paper-plane"></i>
          </div>
          <span className="send-label">Send Message</span>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-logo">SuperTalent</div>
        <nav className="footer-nav">
          <a href="/">Portfolio</a>
          <a href="/">Resources</a>
          <a href="/">About Us</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
