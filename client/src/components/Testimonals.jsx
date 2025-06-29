import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";

const PremiumTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Aarav Sharma",
      role: "Fashion Influencer",
      content: "Wavys has completely transformed my wardrobe. The quality is unmatched and I constantly receive compliments whenever I wear their pieces.",
      rating: 5,
      image: "/images/testimonial-1.webp",
    },
    {
      id: 2,
      name: "Neha Kapoor",
      role: "Creative Director",
      content: "The attention to detail in every stitch is remarkable. These are the only tees I wear to important client meetings - they elevate my entire look.",
      rating: 5,
      image: "/images/testimonial-2.webp",
    },
    {
      id: 3,
      name: "Rohan Patel",
      role: "Tech Entrepreneur",
      content: "As someone who values both style and comfort, Wavys delivers perfectly. Their fabrics feel luxurious while maintaining that effortless cool factor.",
      rating: 4,
      image: "/images/testimonial-3.webp",
    },
    {
      id: 4,
      name: "Priya Singh",
      role: "Architect",
      content: "I've never experienced customer service like this before. When I had a sizing question, their team went above and beyond to help me find the perfect fit.",
      rating: 5,
      image: "/images/testimonial-4.webp",
    },
  ];

  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  const item = {
    hidden: { y: 60, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const slide = {
    hidden: { x: 150, opacity: 0, skewX: 5 },
    visible: {
      x: 0,
      opacity: 1,
      skewX: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
    exit: {
      x: -150,
      opacity: 0,
      skewX: -5,
      transition: {
        duration: 0.5,
      },
    },
  };

  const float = {
    float: {
      y: [0, -20, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulse = {
    pulse: {
      scale: [1, 1.03, 1],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-blue-50/30 relative overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-blue-200/30 to-blue-400/20"
            style={{
              width: Math.random() * 400 + 150,
              height: Math.random() * 400 + 150,
              left: `${Math.random() * 120 - 10}%`,
              top: `${Math.random() * 120 - 10}%`,
            }}
            animate={{
              y: [0, -Math.random() * 60 - 30],
              opacity: [0.1, 0.25, 0],
              scale: [0.8, 1.3, 0.9],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5,
            }}
          />
        ))}
        {/* Subtle Wave Overlay */}
        <motion.div
          className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1440 320%22%3E%3Cpath fill=%22%23BFDBFE%22 fill-opacity=%220.1%22 d=%22M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,90.7C960,96,1056,96,1152,85.3C1248,75,1344,53,1392,42.7L1440,32V320H0V64Z%22/%3E%3C/svg%22)]"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          variants={container}
          className="text-center mb-24"
        >
          <motion.div variants={item} className="inline-flex mb-6">
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase bg-blue-50/80 px-6 py-2 rounded-full border border-blue-100 shadow-sm backdrop-blur-sm">
              CLIENT TESTIMONIALS
            </span>
          </motion.div>
          <motion.h2
            variants={item}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 text-gray-900"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600/80 to-blue-400/80">
              Voices of Satisfaction
            </span>
          </motion.h2>
          <motion.p
            variants={item}
            className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Discover authentic feedback from our valued clients who elevate their style with
            Wavys.
          </motion.p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.15, backgroundColor: "#1E40AF", color: "#FFFFFF" }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-20 w-14 h-14 bg-white/90 border border-gray-200 rounded-full shadow-xl flex items-center justify-center text-gray-700 transition-all duration-300 backdrop-blur-md"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="w-7 h-7" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.15, backgroundColor: "#1E40AF", color: "#FFFFFF" }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-20 w-14 h-14 bg-white/90 border border-gray-200 rounded-full shadow-xl flex items-center justify-center text-gray-700 transition-all duration-300 backdrop-blur-md"
            aria-label="Next testimonial"
          >
            <FiChevronRight className="w-7 h-7" />
          </motion.button>

          {/* Slider Content */}
          <div className="overflow-hidden">
            <motion.div
              ref={sliderRef}
              className="flex transition-transform duration-700 ease-out-cubic"
              style={{
                width: `${testimonials.length * 100}%`,
                transform: `translateX(-${currentSlide * (100 / testimonials.length)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  variants={slide}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className={`w-full ${index === currentSlide ? "active-slide" : ""}`}
                  style={{ flex: `0 0 ${100 / testimonials.length}%` }}
                >
                  <div className="px-4 py-6">
                    <motion.div
                      className="bg-white/95 rounded-2xl p-8 md:p-10 border border-gray-100/70 shadow-lg hover:shadow-2xl transition-all duration-500 backdrop-blur-sm"
                      whileHover={{ y: -15, boxShadow: "0 20px 40px -10px rgba(30, 64, 175, 0.2)" }}
                    >
                      <div className="flex flex-col md:flex-row items-center gap-8">
                        {/* Client Image */}
                        <motion.div
                          variants={float}
                          animate="float"
                          className="relative flex-shrink-0"
                        >
                          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-blue-50/80 shadow-xl">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <motion.div
                            className="absolute -bottom-3 -right-3 bg-gradient-to-br from-blue-600 to-blue-400 text-white text-sm font-bold px-3 py-1 rounded-full shadow-md"
                            variants={pulse}
                            animate="pulse"
                          >
                            {testimonial.rating}.0
                          </motion.div>
                        </motion.div>

                        {/* Testimonial Content */}
                        <div className="flex-grow text-center md:text-left">
                          {/* Rating Stars */}
                          <div className="flex justify-center md:justify-start mb-4">
                            {[...Array(5)].map((_, i) => (
                              <motion.div
                                key={i}
                                whileHover={{ scale: 1.3, rotate: 15 }}
                                transition={{ type: "spring", stiffness: 500, damping: 15 }}
                              >
                                <FiStar
                                  className={`w-6 h-6 ${
                                    i < testimonial.rating
                                      ? "text-yellow-500 fill-yellow-500"
                                      : "text-gray-300"
                                  } mr-1`}
                                />
                              </motion.div>
                            ))}
                          </div>

                          {/* Testimonial Text */}
                          <motion.blockquote
                            className="text-lg md:text-xl text-gray-700 mb-6 italic leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                          >
                            "{testimonial.content}"
                          </motion.blockquote>

                          {/* Client Info */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.7 }}
                            className="text-center md:text-left"
                          >
                            <p className="text-xl font-bold text-gray-900">{testimonial.name}</p>
                            <p className="text-blue-600 font-medium">{testimonial.role}</p>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Slider Indicators */}
          <motion.div
            className="flex justify-center mt-12 gap-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? "bg-blue-600" : "bg-gray-300"
                }`}
                whileHover={{ scale: 1.5, backgroundColor: "#1E40AF" }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", stiffness: 500 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </motion.div>
        </div>

        {/* Premium Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.9 }}
          className="mt-28 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {[
            { text: "Premium Craftsmanship", icon: "✨" },
            { text: "100% Satisfaction", icon: "✅" },
            { text: "Sustainable Fabrics", icon: "🌿" },
            { text: "Free Worldwide Shipping", icon: "🚚" },
          ].map((badge, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, boxShadow: "0 15px 35px -10px rgba(30, 64, 175, 0.3)" }}
              className="bg-white/90 rounded-xl p-5 text-center border border-gray-100/70 shadow-md backdrop-blur-sm transition-all duration-300"
            >
              <div className="text-3xl mb-3 text-blue-500">{badge.icon}</div>
              <p className="text-base font-semibold text-gray-800">{badge.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumTestimonials;