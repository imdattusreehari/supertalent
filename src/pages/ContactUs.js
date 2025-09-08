import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ContactUs.css';

function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 600);
  }

  return (
    <div className="App">
      <Navbar />
      <main role="main">
        <section id="contact-us" className="contact">
          <div className="contact-container">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-subtext">We'd love to hear from you. Send us a message and we'll respond soon.</p>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-actions">
                <button className="contact-btn" type="submit" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending…' : 'Send Message'}
                </button>
                {status === 'success' && (
                  <span className="success-text">Message sent!</span>
                )}
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ContactUs;


