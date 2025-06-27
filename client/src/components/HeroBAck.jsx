import { motion, useMotionValue, animate } from 'framer-motion';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const floatingY = useMotionValue(0);
  const textOpacity = useMotionValue(0);
  const textY = useMotionValue(20);
  const bgScale = useMotionValue(1);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Floating animation
    animate(floatingY, [0, -15, 0], {
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

    // Background scale (more subtle on mobile)
    animate(bgScale, [1, isMobile ? 1.01 : 1.03], {
      duration: 30,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut'
    });
  }, [isMobile]);

  return (
    <section className="relative overflow-hidden min-h-[90vh] md:min-h-screen flex items-center justify-center">
      {/* Optimized background image */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${"./Images/Hero1.png"})`,
          backgroundPosition: isMobile ? 'center 30%' : 'center',
          scale: bgScale,
          zIndex: -1
        }}
      >
        {/* Minimal dark overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t ${isMobile ? 'from-neutral-950/30 via-neutral-950/20 to-transparent' : 'from-neutral-950/40 via-neutral-950/20 to-neutral-950/10'}`}></div>
        <div className={`absolute inset-0 ${isMobile ? 'bg-neutral-950/10' : 'bg-gradient-to-r from-neutral-950/40 via-neutral-950/10 to-neutral-950/40'}`}></div>
      </motion.div>

      {/* Responsive particles - fewer on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(isMobile ? 15 : 30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400/10"
            style={{
              width: isMobile ? Math.random() * 4 + 1 : Math.random() * 6 + 2,
              height: isMobile ? Math.random() * 4 + 1 : Math.random() * 6 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              y: floatingY,
            }}
            animate={{
              opacity: [0.05, 0.15, 0.05],
              scale: [1, 1.4, 1]
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center px-4">
          <motion.div
            style={{
              opacity: textOpacity,
              y: textY
            }}
          >
            {/* Responsive badge */}
            <motion.div
              className="inline-flex items-center justify-center mb-6 md:mb-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: 'backOut' }}
            >
              <div className="relative">
                <span className="text-xs md:text-sm font-medium tracking-[0.2em] md:tracking-[0.3em] text-blue-300 uppercase inline-block">
                  WAVYS SIGNATURE
                </span>
                <motion.span 
                  className="absolute top-0 left-0 w-6 md:w-8 h-full bg-white/20"
                  initial={{ x: -50 }}
                  animate={{ x: '150%' }}
                  transition={{
                    delay: 1,
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                  style={{
                    transform: 'skewX(-20deg)'
                  }}
                />
              </div>
            </motion.div>

            {/* Responsive headline */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 md:mb-10 font-poppins"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-100 to-blue-50 drop-shadow-lg">
                ELEVATED
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-200 drop-shadow-lg">
                ESSENCE
              </span>
            </motion.h1>

            {/* Responsive divider */}
            <motion.div
              className={`${isMobile ? 'w-20' : 'w-32'} h-px bg-gradient-to-r from-blue-500/0 via-blue-300 to-blue-500/0 mx-auto mb-6 md:mb-10`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 1.5, ease: 'circOut' }}
            />

            {/* Responsive subheading */}
            <motion.p
              className="text-lg md:text-2xl text-gray-100 mb-10 md:mb-16 max-w-3xl mx-auto font-light font-poppins tracking-wide leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Where contemporary design meets uncompromising quality in every stitch
            </motion.p>

            {/* Responsive buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.button
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: '0 10px 30px -5px rgba(59, 130, 246, 0.5)',
                  backgroundColor: '#1d4ed8'
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="px-8 py-3 md:px-12 md:py-4 bg-blue-600 text-white font-medium rounded-full transition-all text-base md:text-lg relative overflow-hidden group"
              >
                <span className="relative z-10">Discover Collection</span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-300 opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.03,
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  borderColor: 'rgba(255, 255, 255, 0.7)'
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="px-8 py-3 md:px-12 md:py-4 bg-white/5 border border-gray-300 text-white font-medium rounded-full transition-all text-base md:text-lg relative overflow-hidden group"
              >
                <span className="relative z-10">Explore Lookbook</span>
                <motion.span 
                  className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>
            </motion.div>

            {/* Responsive floating indicator */}
            {!isMobile && (
              <motion.div
                className="mt-16 md:mt-24"
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
                  className="w-8 h-12 md:w-10 md:h-14 mx-auto text-blue-300"
                  fill="none" 
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;