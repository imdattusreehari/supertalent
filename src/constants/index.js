// Component imports for page sections
import HeroSection from '../components/HeroSection';
import WhyChooseUs from '../components/WhyChooseUs';
import FeaturesSection from '../components/FeaturesSection';
import AboutUsSection from '../components/AboutUsSection';
import CTASection from '../components/CTASection';
import LocationSection from '../components/LocationSection';

/**
 * Configuration for page sections
 * Defines the order and structure of sections on the main page
 */
export const PAGE_SECTIONS = [
  { component: HeroSection, id: 'hero' },
  { component: WhyChooseUs, id: 'why-choose-us' },
  { component: FeaturesSection, id: 'features' },
  { component: AboutUsSection, id: 'about' },
  { component: CTASection, id: 'cta' },
  { component: LocationSection, id: 'location' },
];

