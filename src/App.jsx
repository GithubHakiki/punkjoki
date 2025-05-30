import useDocumentSetup from './components/document/documentSetup.jsx';

import './App.css';

import BackgroundEffects from './components/Effect.jsx';
import Header from './components/Header.jsx';
import HeroSection from './components/Hero.jsx';
import CategorySection from './components/Category.jsx';
import ServicesSection from './components/Service.jsx';
import PartnersSection from './components/Partner.jsx';
import TestimonialSection from './components/Testimonial.jsx';
import Footer from './components/Footer.jsx';

const App = () => {

  useDocumentSetup();

  return (
    <div className="App">
      <BackgroundEffects />
      <Header />
      <HeroSection />
      <CategorySection />
      <ServicesSection />
      <PartnersSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
};

export default App;
