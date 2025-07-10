
import React from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { Footer } from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-1">
        <HeroSection />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
