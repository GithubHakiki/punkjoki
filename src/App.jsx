import { Analytics } from "@vercel/analytics/react";
import ReactGA from 'react-ga4';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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

// ✅ Inisialisasi GA sekali aja saat app load
ReactGA.initialize('G-NK4KQBESKL');

// ✅ Custom hook untuk tracking pageview
const usePageView = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
  }, [location]);
};

const App = () => {
  useDocumentSetup();
  usePageView(); // aktifkan tracking

  return (
    <div className="App">
      <Analytics />
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
