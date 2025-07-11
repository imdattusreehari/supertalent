import React from 'react';
import './CTASection.css';

function CTASection() {
  return (
    <section
      className="cta"
      style={{
        backgroundImage: "url('/images/cta-background.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="cta-overlay">
        <div className="cta-container">
          <div className="cta-left">
            <span className="cta-badge">Take Action now</span>
            <h2 className="cta-title">
              Let’s Create Your Next <br /> Big Project Together
            </h2>
          </div>

          <div className="cta-right">
            <p>
              Let’s work together to turn your vision into reality. Contact us today to schedule a consultation
              and take the first step towards creating something amazing together. Our ultimate goal is to deliver
              results that exceed your expectations.
            </p>
            <button className="cta-btn">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;

