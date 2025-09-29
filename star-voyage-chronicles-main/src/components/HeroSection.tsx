import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import StarField from './StarField';

interface HeroSectionProps {
  onScrollToExplorer: () => void;
}

const HeroSection = ({ onScrollToExplorer }: HeroSectionProps) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <StarField />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-6xl md:text-8xl font-bold mb-6 gradient-text"
          style={{
            backgroundSize: '200% 200%',
          }}
        >
          Explore the Infinite Universe ✨
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-xl md:text-2xl mb-12 text-foreground/80 max-w-2xl mx-auto leading-relaxed"
        >
          Scroll forward to discover planets beyond imagination
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          onClick={onScrollToExplorer}
          className="group flex flex-col items-center gap-4 mx-auto hover:scale-105 transition-transform duration-300"
        >
          <span className="text-primary/80 text-sm uppercase tracking-widest">Begin Journey</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="p-3 rounded-full border border-primary/30 group-hover:border-primary/60 group-hover:bg-primary/10 transition-all duration-300"
          >
            <ChevronDown className="w-6 h-6 text-primary" />
          </motion.div>
        </motion.button>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30 pointer-events-none" />
    </section>
  );
};

export default HeroSection;