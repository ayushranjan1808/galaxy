import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-20 mt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.1),transparent)] opacity-50" />
      
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Galaxy Logo */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, ease: "linear", repeat: Infinity }}
            className="inline-block mb-8"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-2xl">🌌</span>
            </div>
          </motion.div>

          <h3 className="text-3xl font-bold mb-4 gradient-text">
            Space Explorer
          </h3>
          
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Journey through the cosmos and discover the infinite beauty of our universe, one planet at a time.
          </p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Twitter, href: '#', label: 'Twitter' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-card/50 border border-border hover:bg-card hover:border-primary/50 transition-all duration-300"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
          >
            <span>© {currentYear} Space Explorer. Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>for cosmic enthusiasts</span>
          </motion.div>

          {/* Fun Stats */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{120}+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Planets Discovered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">∞</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Possibilities</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">13.8B</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Years of Universe</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;