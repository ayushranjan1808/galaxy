import { useRef, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { Input } from './ui/input';
import PlanetCard from './PlanetCard';
import { allPlanets, Planet } from '../data/planets';

const PlanetCarousel = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredPlanets = useMemo(() => {
    return allPlanets.filter((planet) => {
      const matchesSearch = planet.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           planet.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === 'all' || planet.type === selectedType;
      return matchesSearch && matchesType;
    });
  }, [searchTerm, selectedType]);

  const planetTypes = ['all', 'terrestrial', 'gas-giant', 'ice-giant', 'dwarf', 'exoplanet', 'fictional'];

  const scrollToNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const scrollToPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4 gradient-text">
            Cosmic Exploration
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover over {allPlanets.length} worlds across the universe, from our solar system to the most distant galaxies
          </p>
        </motion.div>

        {/* Search and Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-center"
        >
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search planets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="cosmic-search pl-12 pr-4 py-3 text-lg rounded-full w-full"
            />
          </div>

          {/* Type Filter */}
          <div className="flex items-center gap-2">
            <Filter className="text-muted-foreground w-5 h-5" />
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="cosmic-search px-4 py-2 rounded-full text-sm border-0 outline-none"
            >
              {planetTypes.map((type) => (
                <option key={type} value={type} className="bg-card">
                  {type === 'all' ? 'All Types' : type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-8"
        >
          <p className="text-muted-foreground">
            Showing <span className="text-primary font-semibold">{filteredPlanets.length}</span> planets
          </p>
        </motion.div>

        {/* Planet Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollToPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:bg-card hover:scale-110 transition-all duration-300"
            aria-label="Previous planets"
          >
            <motion.div
              whileHover={{ x: -2 }}
              transition={{ duration: 0.2 }}
            >
              ←
            </motion.div>
          </button>
          
          <button
            onClick={scrollToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:bg-card hover:scale-110 transition-all duration-300"
            aria-label="Next planets"
          >
            <motion.div
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.div>
          </button>

          {/* Scrollable Planet Container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-0 pb-8 px-8">
              {filteredPlanets.map((planet, index) => (
                <PlanetCard key={planet.id} planet={planet} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* No Results */}
        {filteredPlanets.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🌌</div>
            <h3 className="text-2xl font-semibold mb-2">No planets found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms or filters</p>
          </motion.div>
        )}
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50 pointer-events-none" />
    </section>
  );
};

export default PlanetCarousel;