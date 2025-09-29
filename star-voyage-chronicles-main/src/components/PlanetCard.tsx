import { motion } from 'framer-motion';
import { Planet } from '../data/planets';

interface PlanetCardProps {
  planet: Planet;
  index: number;
}

const PlanetCard = ({ planet, index }: PlanetCardProps) => {
  const getGlowClass = () => {
    const glowTypes = ['planet-glow-blue', 'planet-glow-purple', 'planet-glow-cosmic'];
    return glowTypes[index % glowTypes.length];
  };

  const getTypeColor = (type: Planet['type']) => {
    const colors = {
      terrestrial: 'text-green-400',
      'gas-giant': 'text-orange-400',
      'ice-giant': 'text-blue-400',
      dwarf: 'text-yellow-400',
      exoplanet: 'text-purple-400',
      fictional: 'text-pink-400',
    };
    return colors[type];
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100, scale: 0.8 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex-shrink-0 w-80 mx-4"
    >
      <div className="cosmic-card rounded-2xl p-6 h-full flex flex-col hover:shadow-2xl transition-all duration-500">
        {/* Planet Image */}
        <div className="relative mb-6 group">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            className={`w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center ${getGlowClass()} hover:shadow-lg`}
          >
            <img
              src={planet.image}
              alt={planet.name}
              className="w-24 h-24 rounded-full object-cover opacity-80"
            />
          </motion.div>
          
          {/* Orbit Ring */}
          <div className="absolute inset-0 w-40 h-40 mx-auto border border-primary/20 rounded-full animate-pulse-glow opacity-50" />
        </div>

        {/* Planet Info */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-bold text-foreground">{planet.name}</h3>
            <span className={`text-xs uppercase tracking-wider px-2 py-1 rounded-full bg-muted/50 ${getTypeColor(planet.type)}`}>
              {planet.type.replace('-', ' ')}
            </span>
          </div>
          
          <p className="text-muted-foreground leading-relaxed mb-4 flex-1">
            {planet.description}
          </p>
          
          {/* Planet Stats */}
          <div className="space-y-2 text-sm">
            {planet.distance && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Distance:</span>
                <span className="text-primary">{planet.distance}</span>
              </div>
            )}
            {planet.size && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Size:</span>
                <span className="text-accent">{planet.size}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PlanetCard;