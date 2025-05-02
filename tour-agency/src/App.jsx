import React from 'react'
import DestinationSection from './components/DestinationSection'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import NewsletterSection from './components/NewsletterSection'
import ServicesSection from './components/ServicesSection'
import SponsorsSection from './components/SponsorsSection'
import TestimonailsSection from './components/TestimonialsSection'
import TravelPointsSection from './components/TravelPointsSection'
function App() {
  return (
    <div>
			<Header />
			<HeroSection />
			<ServicesSection />
			<DestinationSection />
			<TravelPointsSection />
			<TestimonailsSection />
			<SponsorsSection />
			<NewsletterSection />
			<Footer />
    </div>
		
  );
}
export default App;
//* This is a simple React component that serves as the main entry point for a tour agency application.