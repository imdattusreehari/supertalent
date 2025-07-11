import React from 'react';
import './FeaturesSection.css';

function FeaturesSection() {
  return (
    <section className="features">
      <div className="features-container">
        <div className="features-left">
          <h2 className="features-title">Taking Your Goals to New Heights</h2>

          <div className="feature-point">
            <h3>Identify Core Features</h3>
            <p>
              Start by identifying the core features of the product. These are the
              functionalities that form the foundation of what the product can do.
            </p>
          </div>

          <div className="feature-point">
            <h3>Identify Core Features</h3>
            <p>
              Start by identifying the core features of the product. These are the
              functionalities that form the foundation of what the product can do.
            </p>
          </div>
        </div>

        <div className="features-right">
          <div className="image-grid">
            <img src="/images/feature1.jpg" alt="Tennis" />
            <div className="features-images-adjust"><img src="/images/feature2.jpg" alt="Basketball" /></div>
            <img src="/images/feature3.jpg" alt="Office team" />
            <div className="features-images-adjust"><img src="/images/feature4.jpg" alt="Outdoor cafe" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
