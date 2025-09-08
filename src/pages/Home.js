import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PAGE_SECTIONS } from '../constants';

function Home() {
  return (
    <div className="App">
      <Navbar />
      <main role="main">
        {PAGE_SECTIONS.map(({ component: Component, id }) => (
          <section key={id} id={id}>
            <Component />
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default Home;


