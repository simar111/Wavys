import { motion, useMotionValue, animate } from 'framer-motion';
import { useEffect } from 'react';

const HeroSection = () => {
  // Animation values
  const floatingY = useMotionValue(0);
  const textOpacity = useMotionValue(0);
  const textY = useMotionValue(20);
  
  useEffect(() => {
    // Floating animation
    animate(floatingY, [0, -20, 0], {
      duration: 15,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut'
    });

    // Text reveal animation
    animate(textOpacity, 1, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1]
    });
    animate(textY, 0, {
      duration: 1,
      ease: [0.16, 1, 0.3, 1]
    });
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-neutral-950">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient mesh */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="gradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#1e40af" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#gradient)" />
          </svg>
        </div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/10"
            style={{
              width: Math.random() * 10 + 2,
              height: Math.random() * 10 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              y: floatingY,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated content */}
          <motion.div
            style={{
              opacity: textOpacity,
              y: textY
            }}
          >
            {/* Premium badge */}
            <motion.div
              className="inline-flex items-center justify-center mb-8"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: 'backOut' }}
            >
              <span className="text-sm font-medium tracking-[0.2em] text-blue-400 uppercase">
                WAVYS COLLECTION
              </span>
            </motion.div>

            {/* Hero headline with dynamic gradient */}
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-8 font-poppins"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200">
                ELEVATED
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                ESSENTIALS
              </span>
            </motion.h1>

            {/* Animated divider */}
            <motion.div
              className="w-24 h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-400 to-blue-500/0 mx-auto mb-8"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 1.2, ease: 'circOut' }}
            />

            {/* Subheading */}
            <motion.p
              className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light font-poppins"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Redefining modern sophistication through minimalist design and premium craftsmanship
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap gap-6 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 10px 30px -5px rgba(59, 130, 246, 0.4)',
                  backgroundColor: '#3b82f6'
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="px-10 py-4 bg-blue-500 text-white font-medium rounded-full transition-all text-lg"
              >
                Discover Collection
              </motion.button>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="px-10 py-4 bg-transparent border border-gray-600 text-white font-medium rounded-full transition-all text-lg"
              >
                Explore Lookbook
              </motion.button>
            </motion.div>

            {/* Floating indicator */}
            <motion.div
              className="mt-24"
              style={{ y: floatingY }}
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <svg 
                className="w-8 h-12 mx-auto text-blue-400" 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;