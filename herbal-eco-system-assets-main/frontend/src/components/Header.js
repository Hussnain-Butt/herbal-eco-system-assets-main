import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-16 h-16 flex items-center justify-center">
              <img 
                src="/images/dads-logo.png" 
                alt="DADS Program Logo - Advancing Daughters and Sons"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl items-center justify-center shadow-lg hidden">
                <Heart className="w-6 h-6 text-white fill-current" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-800">DADS</h1>
              <p className="text-xs text-slate-600 -mt-1">Advancing Daughters & Sons</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { name: 'Home', id: 'hero' },
              { name: 'About', id: 'problem' },
              { name: 'Our Solution', id: 'solution' },
              { name: 'Services', id: 'services' },
              { name: 'Leadership', id: 'leadership' },
              { name: 'Resources', id: 'resources' },
              { name: 'Events', id: 'events' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-700 hover:text-green-600 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Donate Button */}
          <motion.button
            onClick={() => scrollToSection('get-involved')}
            className="hidden lg:flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart className="w-4 h-4 fill-current" />
            <span>Donate Now</span>
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
          initial={false}
          animate={{ opacity: isMenuOpen ? 1 : 0 }}
        >
          <nav className="flex flex-col space-y-3 pt-4 border-t border-slate-200">
            {[
              { name: 'Home', id: 'hero' },
              { name: 'About', id: 'problem' },
              { name: 'Our Solution', id: 'solution' },
              { name: 'Services', id: 'services' },
              { name: 'Leadership', id: 'leadership' },
              { name: 'Resources', id: 'resources' },
              { name: 'Events', id: 'events' },
              { name: 'Contact', id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-slate-700 hover:text-green-600 font-medium py-2 transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <motion.button
              onClick={() => scrollToSection('get-involved')}
              className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg mt-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>Donate Now</span>
            </motion.button>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;