import React from 'react';
import './AboutUsSection.css';

function AboutUsSection() {
  return (
    <section className="about">
      <div className="about-container">
        <span className="about-badge">About Us</span>
        <h2 className="about-title">Transforming Dreams into Reality</h2>

        <div className="about-content">
          <div className="about-image">
            <img src="/images/about-image.jpg" alt="Art gallery wall" />
          </div>

          <div className="about-text">
            <p>
              In the context of business, value refers to the benefits or advantages a product,
              service, or proposition offers to customers or stakeholders. It’s about meeting the needs,
              solving the problems, or fulfilling the desires of customers in a way that exceeds their
              expectations and delivers meaningful outcomes.
            </p>

            <button className="about-btn">
              Learn More <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
