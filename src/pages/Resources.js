import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Services.css';

function Resources() {
  const resources = [
    {
      title: 'Career Guide: Building a Growth Plan',
      description: 'Step-by-step framework to define goals and track progress.',
      icon: '📘',
      action: { label: 'Read Guide', href: '#' }
    },
    {
      title: 'Leadership Essentials Checklist',
      description: 'Key habits and rituals to lead with clarity and impact.',
      icon: '🧭',
      action: { label: 'Download PDF', href: '#' }
    },
    {
      title: 'Interview Prep Workbook',
      description: 'Structured practice to sharpen your stories and answers.',
      icon: '📝',
      action: { label: 'Get Workbook', href: '#' }
    },
    {
      title: 'Team Performance Retro Template',
      description: 'Run effective retrospectives with actionable outcomes.',
      icon: '📊',
      action: { label: 'Use Template', href: '#' }
    }
  ];

  return (
    <div className="App">
      <Navbar />
      <main role="main">
        <section id="resources" className="services">
          <div className="services-container">
            <div className="services-header">
              <h1 className="services-title">Resources</h1>
              <p className="services-subtext">
                Free tools and guides to help you grow your career and your team.
              </p>
            </div>

            <div className="services-grid">
              {resources.map((res, idx) => (
                <div key={idx} className="service-card">
                  <div className="service-icon">{res.icon}</div>
                  <h3 className="service-title">{res.title}</h3>
                  <p className="service-description">{res.description}</p>
                  <div>
                    <a className="service-btn" href={res.action.href}>{res.action.label}</a>
                  </div>
                </div>
              ))}
            </div>

            <div className="services-cta">
              <h2 className="cta-title">Want more?</h2>
              <p className="cta-text">
                Explore our services or reach out for a tailored recommendation.
              </p>
              <div className="cta-buttons">
                <a className="cta-btn primary" href="/services">See Services</a>
                <a className="cta-btn secondary" href="/contact-us">Talk to Us</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Resources;


