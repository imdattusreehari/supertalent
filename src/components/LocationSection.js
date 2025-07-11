import React from 'react';
import './LocationSection.css';

function LocationSection() {
  return (
    <section className="location">
      <div className="location-container">
        <h2 className="location-title">Discover Our Location</h2>
        <p className="location-subtitle">
          Whether you're visiting us in person or simply want to know where we're based,
          here's some helpful information about our location
        </p>

        <div className="info-cards">
          <div className="info-card">
            <i className="fas fa-envelope icon"></i>
            <h4>Send Us an Email</h4>
            <a className="info-button" href="mailto:info@wdesignkit.com">info@wdesignkit.com</a>
          </div>

          <div className="info-card">
            <i className="fas fa-phone icon"></i>
            <h4>Give Us a Call</h4>
            <a className="info-button" href="tel:+180052554589">+1800–525–54–589</a>
          </div>

          <div className="info-card">
            <i className="fas fa-map-marker-alt icon"></i>
            <h4>Address</h4>
            <div className="info-button">Washington Road, Canada.</div>
          </div>
        </div>

        <div className="map-wrap">
          <img src="/images/map.jpg" alt="Map" />
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
