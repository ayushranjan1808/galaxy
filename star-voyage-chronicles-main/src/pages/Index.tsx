import { useRef } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import PlanetCarousel from '../components/PlanetCarousel';
import Footer from '../components/Footer';

const Index = () => {
  const explorerRef = useRef<HTMLDivElement>(null);

  const scrollToExplorer = () => {
    explorerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection onScrollToExplorer={scrollToExplorer} />
      
      {/* Planet Explorer Section */}
      <div ref={explorerRef}>
        <PlanetCarousel />
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;