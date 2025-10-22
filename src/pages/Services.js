import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Services.css';

function Services() {
  const services = [
    {
      title: "Talent Development",
      description: "Comprehensive training programs designed to unlock your potential and accelerate your career growth.",
      icon: "🎯",
      features: ["Personalized coaching", "Skill assessment", "Career planning", "Performance optimization"]
    },
    {
      title: "Professional Coaching",
      description: "One-on-one coaching sessions with industry experts to help you achieve your professional goals.",
      icon: "👨‍💼",
      features: ["Executive coaching", "Leadership development", "Communication skills", "Strategic thinking"]
    },
    {
      title: "Team Building",
      description: "Transform your team dynamics with our proven team building and collaboration programs.",
      icon: "🤝",
      features: ["Team workshops", "Collaboration tools", "Conflict resolution", "Team performance"]
    },
    {
      title: "Career Consulting",
      description: "Expert guidance to help you navigate career transitions and make informed professional decisions.",
      icon: "📈",
      features: ["Career assessment", "Job search strategy", "Interview preparation", "Salary negotiation"]
    },
    {
      title: "Leadership Training",
      description: "Develop essential leadership skills to inspire and guide your team to success.",
      icon: "👑",
      features: ["Leadership fundamentals", "Team management", "Decision making", "Change management"]
    },
    {
      title: "Performance Analytics",
      description: "Data-driven insights to measure and improve individual and team performance.",
      icon: "📊",
      features: ["Performance metrics", "Progress tracking", "Analytics dashboard", "Improvement recommendations"]
    }
  ];

  return (
    <div className="App">
      <Navbar />
      <main role="main">
        <section id="services" className="services">
          <div className="services-container">
            <div className="services-header">
              <h1 className="services-title">Our Services</h1>
              <p className="services-subtext">
                We offer comprehensive talent development solutions designed to unlock your potential
                and accelerate your professional growth. Our expert team is dedicated to helping you
                achieve your career goals.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="service-feature">
                        <span className="feature-check">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="service-btn">Learn More</button>
                </div>
              ))}
            </div>

            <div className="services-cta">
              <h2 className="cta-title">Ready to Transform Your Career?</h2>
              <p className="cta-text">
                Join thousands of professionals who have accelerated their careers with our proven programs.
              </p>
              <div className="cta-buttons">
                <button className="cta-btn primary">Get Started Today</button>
                <button className="cta-btn secondary">Schedule Consultation</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Services;
