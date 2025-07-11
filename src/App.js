
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhyChooseUs from './components/WhyChooseUs';
import FeaturesSection from './components/FeaturesSection';
import AboutUsSection from './components/AboutUsSection';
import CTASection from './components/CTASection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <FeaturesSection />
      <AboutUsSection />
      <CTASection />
      <LocationSection />
      <Footer />
    </div>
  );
}


export default App;
