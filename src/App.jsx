import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProperties from './components/FeaturedProperties';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedProperties />
        <Testimonials />
        <AboutUs/>
        <Contact/>
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;