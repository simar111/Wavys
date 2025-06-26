import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const HeroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Particle component for floating elements
  const Particle = ({ style, delay }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: [0, 1, 0],
        y: [-20, 0, -40],
        x: [0, Math.random() * 40 - 20, 0]
      }}
      transition={{
        duration: 8 + Math.random() * 10,
        delay,
        repeat: Infinity,
        ease: "linear"
      }}
      className="absolute rounded-full"
      style={style}
    />
  );

  return (
    <section 
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-[#C1E1C5] to-[#E6F0EA]"
      style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23C4A28F\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
        backdropFilter: 'blur(4px)'
      }}
    >
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <Particle
          key={i}
          delay={i * 0.5}
          style={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            backgroundColor: '#C4A28F',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.3
          }}
        />
      ))}

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

      <div className="relative h-full w-full max-w-8xl mx-auto px-6 flex flex-col justify-center items-center text-center">
        {/* Headline with 3D effect */}
        <motion.h1
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                damping: 10,
                stiffness: 100,
                delay: 0.2
              }
            }
          }}
          className="text-6xl md:text-7xl lg:text-8xl font-playfair font-black tracking-tight mb-6"
          style={{
            background: 'linear-gradient(135deg, #4A4E69 0%, #C4A28F 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 4px 20px rgba(196, 162, 143, 0.3)'
          }}
        >
          <motion.span
            variants={{
              hidden: { y: 0 },
              visible: {
                y: [0, -10, 0],
                transition: {
                  duration: 1.5,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: 'reverse'
                }
              }
            }}
            className="inline-block"
          >
            Discover Your True Style
          </motion.span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.6, duration: 0.8 }
          }}
          className="text-xl md:text-2xl font-inter text-[#F8F1E9] mb-12 max-w-2xl"
        >
          Explore Premium Clothing & Jewelry for Every You
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { delay: 0.8, type: 'spring' }
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ 
            scale: 0.95,
            boxShadow: '0 0 25px rgba(216, 167, 177, 0.8)'
          }}
          className="px-10 py-4 bg-[#C1E1C5] border-2 border-[#C4A28F] text-[#4A4E69] font-inter font-semibold text-lg rounded-full relative overflow-hidden"
          style={{
            boxShadow: '0 4px 30px rgba(196, 162, 143, 0.2)'
          }}
        >
          <span className="relative z-10">Shop Now</span>
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-[#C1E1C5] to-[#D8A7B1] opacity-0"
            whileHover={{ opacity: 0.2 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>

        {/* Split hero image - would be replaced with actual images */}
        <div className="absolute inset-0 w-full h-full flex z-0 opacity-90">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="w-1/2 h-full bg-[#4A4E69] relative"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1536766820879-059fec98ec0a?q=80&w=2574&auto=format&fit=crop")',
              backgroundSize: 'cover',
              backgroundPosition: 'center right'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#4A4E69]/70 to-transparent" />
            <div className="absolute inset-0 mix-blend-overlay bg-[#C4A28F] opacity-10" />
          </motion.div>
          
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="w-1/2 h-full bg-[#D8A7B1] relative"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=2574&auto=format&fit=crop")',
              backgroundSize: 'cover',
              backgroundPosition: 'center left'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-[#D8A7B1]/70 to-transparent" />
            <div className="absolute inset-0 mix-blend-overlay bg-[#C4A28F] opacity-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;