import { motion } from "framer-motion";
import { useRef } from "react";

const ContactHero = () => {
  const containerRef = useRef(null);

  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.6,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const float = {
    float: {
      y: [0, -25, 0],
      rotate: [0, 3, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulse = {
    pulse: {
      scale: [1, 1.15, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-start bg-gradient-to-tr from-gray-100 to-blue-100/40 overflow-hidden">
      {/* Dynamic Background with Gradient and Particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 to-transparent" />
        {/* Enhanced Particle Effect */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-blue-300/40 to-blue-500/20"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: "blur(2px)",
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.05, 0.2, 0.05],
            }}
            transition={{
              duration: Math.random() * 12 + 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Floating Wave Elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-gradient-to-br from-blue-300/40 to-blue-500/20 rounded-full"
          style={{
            width: `${Math.random() * 200 + 100}px`,
            height: `${Math.random() * 200 + 100}px`,
            top: `${Math.random() * 90 + 5}%`,
            left: `${Math.random() * 90 + 5}%`,
            filter: "blur(10px)",
          }}
          variants={float}
          animate="float"
        />
      ))}

      <div className="container mx-auto px-6 py-24 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          ref={containerRef}
          className="text-left max-w-5xl"
        >
          {/* Heading with Animated Wave Accent */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl md:text-8xl font-extrabold mb-8 font-poppins leading-tight tracking-wide"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600/80 to-blue-300/80">
              Connect with
            </span>
            <br />
            <span className="inline-block overflow-hidden">
              <motion.span
                className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400/80 to-blue-100/80 inline-block"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
             / >
                Wavys
              </span>
            <motion.div
              className="w-24 h-2 bg-gradient-to-r from-blue-600 to-blue-300 mt-4 rounded-full"
              variants={pulse}
              animate="pulse"
            />
          </motion.h1 >

          {/* Subheading with Interactive Highlight */}
          <motion.p
            variants={fadeInUp}
            className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-12 max-w-3xl leading-relaxed font-light"
          >
            Reach out to our team to style your wave with premium T-shirts and
            unparalleled support. Let’s create your perfect look together.
          </motion.p>

          {/* Contact Form Preview and Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6">
            <motion.div
              whileHover={{ scale: 1.03, boxShadow: "0 15px 40px -10px rgba(59, 130, 246, 0.5)" }}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200 w-full sm:w-80  flex items-center justify-center h-24"
            >
              <p className="text-gray-800 text-center font-medium">
                Fill out our quick form or call us at{" "}
                <span className="text-blue-600 font-semibold">+91-987-654-3210</span>
              </p>
            </motion.div>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.1, boxShadow: "0 12px 30px -8px rgba(59, 130, 246, 0.6)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300 h-24"
              >
                Get in Touch
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1, borderColor: "#3B82F6", color: "#3B82F6" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
                className="px-8 py-4 border-2 border-gray-300 hover:border-blue-600 text-gray-800 font-semibold rounded-lg shadow-sm transition-all duration-300 h-24"
              >
                View Support
              </motion.button>
            </div>
          </motion.div>

          {/* Floating Contact Icon */}
          <motion.div
            variants={pulse}
            animate="pulse"
            className="absolute -top-12 right-12 w-32 h-32 bg-gradient-to-br from-blue-300/50 to-blue-500/30 rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-2xl"
          >
            ?
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;