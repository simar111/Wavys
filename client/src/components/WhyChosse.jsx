import { motion } from 'framer-motion';
import { FiCheckCircle, FiTruck, FiShield, FiAward, FiHeart, FiStar } from 'react-icons/fi';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FiTruck className="w-6 h-6" />,
      title: "Fast & Free Shipping",
      description: "Enjoy complimentary express delivery on all orders with guaranteed 2-day delivery",
      highlight: "FREE DELIVERY",
      darkAccent: "bg-gradient-to-br from-blue-900 to-blue-700"
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: "Premium Quality",
      description: "Each piece is crafted with premium fabrics and undergoes rigorous quality checks",
      highlight: "LUXURY MATERIALS",
      darkAccent: "bg-gradient-to-br from-gray-900 to-gray-700"
    },
    {
      icon: <FiAward className="w-6 h-6" />,
      title: "Design Excellence",
      description: "Our award-winning design team creates trendsetting styles each season",
      highlight: "DESIGN AWARDS",
      darkAccent: "bg-gradient-to-br from-blue-800 to-blue-600"
    },
    {
      icon: <FiHeart className="w-6 h-6" />,
      title: "Ethical Production",
      description: "100% sustainable and ethical manufacturing processes",
      highlight: "ECO-FRIENDLY",
      darkAccent: "bg-gradient-to-br from-green-800 to-green-600"
    }
  ];

  // Premium animations
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const cardHover = {
    hover: {
      y: -12,
      boxShadow: "0 32px 64px -16px rgba(0, 0, 0, 0.12)",
      transition: {
        duration: 0.5,
        ease: [0.32, 0, 0.67, 0]
      }
    }
  };

  const iconHover = {
    hover: {
      rotate: [0, 15, -15, 0],
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Floating abstract shapes with dark accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-[0.02]"
            style={{
              width: Math.random() * 300 + 200,
              height: Math.random() * 300 + 200,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(15, 23, 42, 0.8) 0%, rgba(255,255,255,0) 70%)`,
              borderRadius: `${Math.random() * 50 + 50}%`
            }}
            animate={{
              opacity: [0.01, 0.03, 0.01],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header with dark contrast */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="text-center mb-24"
        >
          <motion.div variants={item} className="inline-flex mb-6">
            <span className="text-xs font-semibold tracking-widest text-white uppercase bg-gray-900 px-4 py-2 rounded-full border border-gray-800 shadow-sm">
              THE WAVYS ADVANTAGE
            </span>
          </motion.div>
          <motion.h2 
            variants={item}
            className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900"
          >
            <span className="relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                Why Choose Wavys
              </span>
              <motion.span 
                className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </span>
          </motion.h2>
          <motion.p 
            variants={item}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Where uncompromising quality meets contemporary design in every stitch
          </motion.p>
        </motion.div>

        {/* Features Grid with dark accents */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover="hover"
              className="group relative"
            >
              {/* Dark accent background element */}
              <motion.div 
                className={`absolute -inset-1 rounded-2xl ${feature.darkAccent} opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-500`}
              />
              
              <motion.div
                variants={cardHover}
                className="bg-white rounded-2xl p-8 h-full border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col relative overflow-hidden"
              >
                {/* Animated icon with dark contrast */}
                <motion.div
                  variants={iconHover}
                  className={`mb-6 w-14 h-14 rounded-xl ${feature.darkAccent} flex items-center justify-center text-white shadow-md`}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.9, 1, 0.9]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                </motion.div>

                {/* Highlight badge with dark contrast */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-4"
                >
                  <span className={`text-xs font-bold tracking-wider text-white uppercase ${feature.darkAccent} px-3 py-1.5 rounded-full inline-block shadow-sm`}>
                    {feature.highlight}
                  </span>
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{feature.description}</p>
                
                {/* Animated checkmark with dark contrast */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center text-gray-900 font-medium"
                >
                  <FiCheckCircle className={`mr-2 ${feature.darkAccent.replace('bg-gradient-to-br', 'text')} text-opacity-100`} />
                  <span>Wavys Standard</span>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators with dark contrast */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-24 bg-white rounded-2xl p-8 md:p-10 border border-gray-200 shadow-sm relative overflow-hidden"
        >
          {/* Dark accent background */}
          <div className="absolute -inset-1 bg-gradient-to-br from-gray-900 to-gray-800 opacity-5 rounded-2xl blur-sm" />
          
          <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <FiStar className="w-5 h-5 text-yellow-400 fill-yellow-400 mx-0.5" />
                  </motion.div>
                ))}
              </div>
              <p className="text-gray-600 mt-2">Rated 4.9/5 by 10,000+ customers</p>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="flex flex-col sm:flex-row gap-6 md:gap-10"
            >
              {[
                { label: "Premium", value: "100K+", color: "from-blue-900 to-blue-700" },
                { label: "Happy Customers", value: "50K+", color: "from-gray-900 to-gray-700" },
                { label: "5-Star Reviews", value: "10K+", color: "from-blue-800 to-blue-600" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <motion.p 
                    className="text-3xl font-bold text-gray-900"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
                  <motion.div 
                    className={`h-0.5 w-12 mx-auto mt-2 bg-gradient-to-r ${stat.color} rounded-full`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;