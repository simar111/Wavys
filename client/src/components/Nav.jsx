import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Shop', 'About', 'Contact'];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20
      }
    }
  };

  const hoverEffect = {
    scale: 1.05,
    transition: { type: 'spring', stiffness: 400, damping: 10 }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] }}
      className={`fixed w-full z-50 ${
        scrolled
          ? 'bg-black bg-opacity-90 backdrop-blur-md py-3 shadow-xl'
          : 'bg-transparent py-5'
      } transition-all duration-300`}
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="flex justify-between items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo with animated dot */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center group">
              <span className="text-white text-3xl font-bold tracking-tighter group-hover:text-blue-400 transition-colors duration-300">
                WAVYS
              </span>
              <motion.span
                className="ml-2 h-2 w-2 bg-blue-500 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.8, 1, 0.8],
                  backgroundColor: ['#3B82F6', '#60A5FA', '#3B82F6']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation with hover effects */}
          <motion.div 
            className="hidden md:flex space-x-8"
            variants={containerVariants}
          >
            {navItems.map((item) => (
              <motion.div
                key={item}
                variants={itemVariants}
                onHoverStart={() => setHoveredLink(item)}
                onHoverEnd={() => setHoveredLink(null)}
                className="relative"
              >
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="text-white font-medium uppercase tracking-wider text-sm relative"
                >
                  <motion.span
                    animate={{
                      color: hoveredLink === item ? '#60A5FA' : '#FFFFFF'
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {item}
                  </motion.span>
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: hoveredLink === item ? 1 : 0,
                      backgroundColor: hoveredLink === item ? '#60A5FA' : '#3B82F6'
                    }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Animated Mobile Menu Button */}
          <motion.button
            variants={itemVariants}
            whileHover={hoverEffect}
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </motion.button>
        </motion.div>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
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
            className="md:hidden bg-black bg-opacity-95 backdrop-blur-sm overflow-hidden"
          >
            <motion.div 
              className="px-2 pt-2 pb-4 space-y-2"
              initial="closed"
              animate="open"
              exit="closed"
            >
              {['Home', ...navItems].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: {
                      delay: index * 0.1,
                      type: 'spring',
                      stiffness: 300
                    }
                  }}
                  exit={{
                    x: -50,
                    opacity: 0,
                    transition: { duration: 0.1 }
                  }}
                >
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="block px-4 py-3 text-white text-lg font-medium hover:bg-gray-900 rounded-lg transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item}
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