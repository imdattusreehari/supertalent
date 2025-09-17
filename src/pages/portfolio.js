import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './portfolio.css';

function Portfolio() {
  const projects = [
    { id: 'proj-1', title: 'Showcase One', image: '/images/feature1.jpg', category: 'Branding' },
    { id: 'proj-2', title: 'Showcase Two', image: '/images/feature2.jpg', category: 'Web Design' },
    { id: 'proj-3', title: 'Showcase Three', image: '/images/feature3.jpg', category: 'Illustration' },
    { id: 'proj-4', title: 'Showcase Four', image: '/images/feature4.jpg', category: 'Marketing' },
    { id: 'proj-5', title: 'Hero Concept', image: '/images/hero2.jpg', category: 'Art Direction' },
    { id: 'proj-6', title: 'Map Visual', image: '/images/map.jpg', category: 'Data Viz' },
  ];

  return (
    <div className="App">
      <Navbar />
      <main role="main">
        <section id="portfolio" className="portfolio">
          <div className="portfolio-container">
            <h1 className="portfolio-title">Our Portfolio</h1>
            <p className="portfolio-subtext">A selection of our recent work and case studies.</p>

            <div className="portfolio-grid">
              {projects.map((project) => (
                <article key={project.id} className="portfolio-card">
                  <div className="card-media">
                    <img src={project.image} alt={project.title} loading="lazy" />
                  </div>
                  <div className="card-body">
                    <span className="card-category">{project.category}</span>
                    <h3 className="card-title">{project.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Portfolio;

