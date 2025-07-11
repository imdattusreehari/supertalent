import React from 'react';
import './WhyChooseUs.css';

function WhyChooseUs() {
  return (
    <section className="why">
      <div className="why-container">
        <div className="why-top">
          <span className="why-badge">Why Choose Us</span>
          <div className="why-heading-wrap">
            <h2 className="why-title">Creative and Unique <br /> Solutions</h2>
            <p className="why-description">
              We adhere to the highest standards of quality in all our products and services. From design and development to manufacturing and customer support, we maintain rigorous quality control measures to ensure consistency.
            </p>
          </div>
        </div>

        <div className="why-features">
          <div className="why-feature">
            <div className="why-icon">
              <i className="fas fa-dumbbell"></i>
            </div>
            <h3>1. Passion</h3>
            <p>Our workouts are tailored to accommodate all fitness levels.</p>
          </div>

          <div className="why-feature">
            <div className="why-icon">
              <i className="fas fa-seedling"></i>
            </div>
            <h3>2. Opportunity</h3>
            <p>Our mission is to provide you with valuable resources.</p>
          </div>

          <div className="why-feature">
            <div className="why-icon">
              <i className="fas fa-person"></i>
            </div>
            <h3>3. Progression</h3>
            <p>Our focus on progression is what sets us apart and ensures that.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
