import earthImage from '@/assets/earth.jpg';
import marsImage from '@/assets/mars.jpg';
import jupiterImage from '@/assets/jupiter.jpg';
import saturnImage from '@/assets/saturn.jpg';
import crystalPlanetImage from '@/assets/crystal-planet.jpg';
import oceanWorldImage from '@/assets/ocean-world.jpg';

export interface Planet {
  id: number;
  name: string;
  image: string;
  description: string;
  type: 'terrestrial' | 'gas-giant' | 'ice-giant' | 'dwarf' | 'exoplanet' | 'fictional';
  distance?: string;
  size?: string;
}

export const planets: Planet[] = [
  // Our Solar System
  {
    id: 1,
    name: "Mercury",
    image: "/placeholder.svg",
    description: "The smallest planet in our solar system and closest to the Sun. Mercury has extreme temperature variations.",
    type: "terrestrial",
    distance: "0.39 AU from Sun",
    size: "4,879 km diameter"
  },
  {
    id: 2,
    name: "Venus",
    image: "/placeholder.svg",
    description: "Often called Earth's twin, Venus is the hottest planet in our solar system with thick clouds of sulfuric acid.",
    type: "terrestrial",
    distance: "0.72 AU from Sun",
    size: "12,104 km diameter"
  },
  {
    id: 3,
    name: "Earth",
    image: earthImage,
    description: "Our beautiful blue marble, the only known planet with life. Home to billions of species and endless wonders.",
    type: "terrestrial",
    distance: "1 AU from Sun",
    size: "12,756 km diameter"
  },
  {
    id: 4,
    name: "Mars",
    image: marsImage,
    description: "The Red Planet, with massive volcanoes and evidence of ancient water flows. Future home for human explorers.",
    type: "terrestrial",
    distance: "1.52 AU from Sun",
    size: "6,792 km diameter"
  },
  {
    id: 5,
    name: "Jupiter",
    image: jupiterImage,
    description: "The largest planet in our solar system, a gas giant with the Great Red Spot and over 80 moons.",
    type: "gas-giant",
    distance: "5.20 AU from Sun",
    size: "142,984 km diameter"
  },
  {
    id: 6,
    name: "Saturn",
    image: saturnImage,
    description: "The ringed beauty of our solar system. Its stunning ring system makes it one of the most recognizable planets.",
    type: "gas-giant",
    distance: "9.58 AU from Sun",
    size: "120,536 km diameter"
  },
  {
    id: 7,
    name: "Uranus",
    image: "/placeholder.svg",
    description: "An ice giant that rotates on its side, with a unique blue-green color from methane in its atmosphere.",
    type: "ice-giant",
    distance: "19.22 AU from Sun",
    size: "51,118 km diameter"
  },
  {
    id: 8,
    name: "Neptune",
    image: "/placeholder.svg",
    description: "The windiest planet in our solar system, with supersonic winds reaching 2,100 km/h.",
    type: "ice-giant",
    distance: "30.05 AU from Sun",
    size: "49,528 km diameter"
  },

  // Exoplanets
  {
    id: 9,
    name: "Kepler-452b",
    image: "/placeholder.svg",
    description: "Earth's 'cousin' located 1,400 light-years away in the habitable zone of a Sun-like star.",
    type: "exoplanet",
    distance: "1,400 light-years",
    size: "1.6× Earth radius"
  },
  {
    id: 10,
    name: "TRAPPIST-1e",
    image: "/placeholder.svg",
    description: "One of seven Earth-sized planets orbiting the ultra-cool dwarf star TRAPPIST-1, potentially habitable.",
    type: "exoplanet",
    distance: "40 light-years",
    size: "0.92× Earth radius"
  },
  {
    id: 11,
    name: "HD 209458 b",
    image: "/placeholder.svg",
    description: "The first exoplanet discovered transiting its star, earning the nickname 'Osiris'.",
    type: "exoplanet",
    distance: "159 light-years",
    size: "1.35× Jupiter radius"
  },
  {
    id: 12,
    name: "Proxima Centauri b",
    image: "/placeholder.svg",
    description: "The closest known exoplanet to Earth, orbiting in the habitable zone of Proxima Centauri.",
    type: "exoplanet",
    distance: "4.24 light-years",
    size: "1.17× Earth mass"
  },

  // Fictional/Imaginary Planets
  {
    id: 13,
    name: "Xandar-5",
    image: crystalPlanetImage,
    description: "A crystalline world where entire continents are made of luminescent crystals that sing in the cosmic wind.",
    type: "fictional",
    distance: "Unknown",
    size: "2× Earth size"
  },
  {
    id: 14,
    name: "Nebula Prime",
    image: "/placeholder.svg",
    description: "A planet existing within a nebula, where auroras paint the sky in impossible colors every night.",
    type: "fictional",
    distance: "In the Andromeda Galaxy",
    size: "1.5× Earth size"
  },
  {
    id: 15,
    name: "Aquaterra",
    image: oceanWorldImage,
    description: "An ocean world with floating cities and bioluminescent sea creatures that create underwater galaxies.",
    type: "fictional",
    distance: "12,000 light-years",
    size: "3× Earth size"
  },
  {
    id: 16,
    name: "Pyrosphere",
    image: "/placeholder.svg",
    description: "A volcanic world where lava rivers flow like veins, and phoenix-like creatures soar through ash clouds.",
    type: "fictional",
    distance: "8,500 light-years",
    size: "0.8× Earth size"
  },
  {
    id: 17,
    name: "Glacialis",
    image: "/placeholder.svg",
    description: "An ice world with crystal forests and aurora storms that create spectacular light shows in the atmosphere.",
    type: "fictional",
    distance: "15,000 light-years",
    size: "1.2× Earth size"
  },
  {
    id: 18,
    name: "Verdania",
    image: "/placeholder.svg",
    description: "A jungle planet where trees grow to the size of mountains and every leaf glows with bioluminescence.",
    type: "fictional",
    distance: "6,700 light-years",
    size: "1.8× Earth size"
  },

  // More Exoplanets
  {
    id: 19,
    name: "K2-18b",
    image: "/placeholder.svg",
    description: "A potentially habitable sub-Neptune with water vapor detected in its atmosphere.",
    type: "exoplanet",
    distance: "124 light-years",
    size: "2.6× Earth radius"
  },
  {
    id: 20,
    name: "TOI-715 b",
    image: "/placeholder.svg",
    description: "A recently discovered super-Earth in the habitable zone of a nearby red dwarf star.",
    type: "exoplanet",
    distance: "137 light-years",
    size: "1.55× Earth radius"
  }
];

// Generate additional fictional planets to reach 100+
const generateAdditionalPlanets = (): Planet[] => {
  const additionalPlanets: Planet[] = [];
  const prefixes = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon', 'Zeta', 'Eta', 'Theta', 'Iota', 'Kappa'];
  const suffixes = ['Prime', 'Major', 'Minor', 'Central', 'Orbital', 'Stellar', 'Cosmic', 'Nexus', 'Core', 'Edge'];
  const types = ['Crystalline', 'Plasma', 'Quantum', 'Ethereal', 'Magnetic', 'Temporal', 'Spectral', 'Ionic', 'Sonic', 'Photon'];
  
  const descriptions = [
    "A mysterious world where gravity flows in reverse, creating floating mountains and inverted waterfalls.",
    "Home to sentient crystal formations that communicate through harmonic resonance across the planet.",
    "A world where time moves differently in each hemisphere, creating unique temporal phenomena.",
    "Covered in metallic forests that conduct electricity, creating spectacular lightning storms.",
    "A gaseous planet with solid floating islands suspended in colorful nebular clouds.",
    "Where bioluminescent organisms create living constellations across the planetary surface.",
    "A world of endless storms where lightning never stops and thunder creates musical symphonies.",
    "Inhabited by energy beings that manifest as dancing lights in the planet's magnetic field.",
    "A desert world with sand dunes that shift to reveal ancient technological artifacts.",
    "Where the Aurora Borealis never ends, painting the sky in perpetual cosmic artistry."
  ];

  for (let i = 21; i <= 120; i++) {
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    const type = types[Math.floor(Math.random() * types.length)];
    const description = descriptions[Math.floor(Math.random() * descriptions.length)];
    
    additionalPlanets.push({
      id: i,
      name: `${prefix}-${type} ${suffix}`,
      image: "/placeholder.svg",
      description: description,
      type: "fictional",
      distance: `${Math.floor(Math.random() * 50000) + 1000} light-years`,
      size: `${(Math.random() * 3 + 0.5).toFixed(1)}× Earth size`
    });
  }
  
  return additionalPlanets;
};

export const allPlanets = [...planets, ...generateAdditionalPlanets()];