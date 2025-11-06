import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Services.css';

function AboutUs() {
  return (
    <div className="App">
      <Navbar />
      <main role="main">
        <section id="about-us" className="services">
          <div className="services-container">
            <div className="services-header">
              <h1 className="services-title">About Us</h1>
              <p className="services-subtext">
                We are SuperTalent — a team dedicated to empowering individuals and organizations
                through talent development, coaching, and performance optimization.
              </p>
            </div>

            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">🎯</div>
                <h3 className="service-title">Our Mission</h3>
                <p className="service-description">
                  Unlock potential and accelerate growth for professionals and teams worldwide.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon">💡</div>
                <h3 className="service-title">Our Approach</h3>
                <p className="service-description">
                  Practical, data-informed programs tailored to your unique goals and context.
                </p>
              </div>
              <div className="service-card">
                <div className="service-icon">🤝</div>
                <h3 className="service-title">Our Values</h3>
                <p className="service-description">
                  Integrity, excellence, and measurable impact in everything we deliver.
                </p>
              </div>
            </div>

            <div className="services-cta">
              <h2 className="cta-title">Work With Us</h2>
              <p className="cta-text">
                Whether you are an individual or an organization, we can help you thrive.
              </p>
              <div className="cta-buttons">
                <a className="cta-btn primary" href="/services">Explore Services</a>
                <a className="cta-btn secondary" href="/contact-us">Contact Us</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AboutUs;


