import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-gray-900/95 backdrop-blur-md shadow-xl py-2'
            : 'bg-gray-900/90 py-4'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo with floating dot animation */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              <Link to="/" className="flex items-center space-x-2">
                <img 
                  src="/your-logo.png" 
                  alt="WAVYS Logo" 
                  className="h-10 object-contain"
                />
                <motion.div
                  className="h-2 w-2 bg-blue-400 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.8, 1, 0.8],
                    y: [0, -3, 0]
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  className="relative"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={link.path}
                    className={`px-3 py-2 text-lg font-medium transition-colors duration-300 ${
                      location.pathname === link.path
                        ? 'text-blue-400'
                        : 'text-white hover:text-blue-300'
                    }`}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <motion.div
                        className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-400"
                        layoutId="desktopActive"
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="lg:hidden text-white focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="lg:hidden bg-gray-800/95 backdrop-blur-md overflow-hidden"
            >
              <div className="flex flex-col items-center py-6 space-y-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.1 * index,
                      ease: 'easeOut'
                    }}
                    className="w-full text-center"
                  >
                    <Link
                      to={link.path}
                      className={`text-xl font-medium px-4 py-2 ${
                        location.pathname === link.path
                          ? 'text-blue-400'
                          : 'text-white hover:text-blue-300'
                      }`}
                      onClick={toggleMobileMenu}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Twitter follow button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="fixed bottom-4 right-4 z-40"
      >
        <a 
          href="https://twitter.com/asad_codes" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-12 h-12 rounded-full overflow-hidden shadow-lg transition-all hover:shadow-xl hover:scale-110"
        >
          <img 
            src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg" 
            alt="Follow on Twitter" 
            className="w-full h-full object-cover"
          />
        </a>
      </motion.div>
    </>
  );
};

export default Navbar;