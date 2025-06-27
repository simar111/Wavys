import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'Contact', path: '/contact' },
  ];

  // Animation variants
  const logoVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring', 
        stiffness: 300,
        damping: 20
      }
    }
  };

  const navItemVariants = {
    hover: {
      y: -3,
      transition: { type: 'spring', stiffness: 500 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed w-full z-50 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-white/90 py-5'
      } transition-all duration-500 border-b border-gray-100`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Animated Logo */}
          <motion.div
            variants={logoVariants}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center">
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                WAVYS
              </span>
              <motion.div
                className="ml-2 h-2 w-2 rounded-full bg-blue-400"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8],
                  backgroundColor: ['#60a5fa', '#3b82f6', '#60a5fa']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                className="relative px-1"
                onHoverStart={() => setHoveredLink(item.path)}
                onHoverEnd={() => setHoveredLink(null)}
                variants={navItemVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  to={item.path}
                  className={`relative px-4 py-2 text-lg font-medium ${
                    location.pathname === item.path
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-500'
                  } transition-colors duration-300`}
                >
                  {item.name}
                  {(hoveredLink === item.path || location.pathname === item.path) && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"
                      layoutId="navHighlight"
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="lg:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7 text-gray-700" fill="none" viewBox="0 0 24 24">
              <motion.path
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.3 }}
              />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: 'auto',
              transition: {
                opacity: { duration: 0.2 },
                height: { type: 'spring', stiffness: 300, damping: 30 }
              }
            }}
            exit={{
              opacity: 0,
              height: 0,
              transition: {
                opacity: { duration: 0.1 },
                height: { duration: 0.2 }
              }
            }}
            className="lg:hidden bg-white/95 backdrop-blur-md overflow-hidden border-t border-gray-100"
          >
            <motion.div 
              className="flex flex-col py-4 px-4 space-y-2"
              initial="closed"
              animate="open"
              exit="closed"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      delay: index * 0.1,
                      type: 'spring',
                      stiffness: 300
                    }
                  }}
                  exit={{ x: -20, opacity: 0 }}
                >
                  <Link
                    to={item.path}
                    className={`block px-4 py-3 text-lg font-medium rounded-lg transition-colors ${
                      location.pathname === item.path
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-blue-500'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;