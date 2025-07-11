import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1 className="hero-title">
          Building a World Driven by <br /> <span>Passion</span>
        </h1>
        <p className="hero-subtext">
          Our comprehensive guide to strategies for entrepreneurs and leaders
          offers valuable insights, practical advice.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">
            Learn More <span className="arrow">→</span>
          </button>
        </div>

        <div className="hero-images">
          <img src="/images/hero1.jpg" alt="Team discussion" />
          <div className="hero-images-adjust"><img src="/images/hero2.jpg" alt="Office brainstorming" /></div>
          <img src="/images/hero3.jpg" alt="Cafe talk" />
          <div className="hero-images-adjust"><img src="/images/hero4.jpg" alt="Handshake" /></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
