import { motion } from 'framer-motion';
import { FiCheckCircle, FiTruck, FiShield, FiAward, FiHeart, FiStar } from 'react-icons/fi';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FiTruck className="w-6 h-6" />,
      title: "Fast & Free Shipping",
      description: "Enjoy complimentary express delivery on all orders with guaranteed 2-day delivery",
      highlight: "FREE DELIVERY",
      accent: "bg-gradient-to-br from-blue-600 to-blue-800"
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: "Premium Quality",
      description: "Each piece is crafted with premium fabrics and undergoes rigorous quality checks",
      highlight: "LUXURY MATERIALS",
      accent: "bg-gradient-to-br from-gray-800 to-gray-900"
    },
    {
      icon: <FiAward className="w-6 h-6" />,
      title: "Design Excellence",
      description: "Our award-winning design team creates trendsetting styles each season",
      highlight: "DESIGN AWARDS",
      accent: "bg-gradient-to-br from-blue-500 to-blue-700"
    },
    {
      icon: <FiHeart className="w-6 h-6" />,
      title: "Ethical Production",
      description: "100% sustainable and ethical manufacturing processes",
      highlight: "ECO-FRIENDLY",
      accent: "bg-gradient-to-br from-teal-500 to-teal-700"
    }
  ];

  // Animations
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

  return (
    <section className="relative overflow-hidden">
      {/* Enhanced gradient background with more visible blue */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-100 to-blue-200"></div>
      
      {/* Diagonal gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-blue-300/10 to-blue-200/5"></div>

      {/* Floating gradient particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 300 + 100}px`,
            height: `${Math.random() * 300 + 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, rgba(59, 130, 246, ${Math.random() * 0.2 + 0.1}) 0%, rgba(255,255,255,0) 70%)`
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            opacity: [0.05, 0.2, 0.05]
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="container mx-auto px-6 py-32 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="text-center mb-24"
        >
          <motion.div variants={item} className="inline-flex mb-6">
            <span className="text-xs font-semibold tracking-widest text-white uppercase bg-gradient-to-r from-blue-600 to-blue-800 px-4 py-2 rounded-full border border-blue-700 shadow-sm">
              THE WAVYS ADVANTAGE
            </span>
          </motion.div>
          <motion.h2 
            variants={item}
            className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900"
          >
            <span className="relative inline-block">
              Why Choose Wavys
              <motion.span 
                className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
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

        {/* Features Grid */}
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
              className="group"
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 h-full border border-gray-200 hover:border-blue-300 transition-all duration-300 flex flex-col relative overflow-hidden shadow-sm hover:shadow-xl">
                {/* Gradient accent glow */}
                <div className={`absolute -inset-1 rounded-2xl ${feature.accent} opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-500`}></div>
                
                {/* Icon with gradient background */}
                <div className={`mb-6 w-14 h-14 rounded-xl ${feature.accent} flex items-center justify-center text-white shadow-md`}>
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
                </div>

                {/* Highlight badge with gradient */}
                <div className="mb-4">
                  <span className={`text-xs font-bold tracking-wider text-white uppercase ${feature.accent} px-3 py-1.5 rounded-full inline-block shadow-sm`}>
                    {feature.highlight}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-800 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow group-hover:text-gray-800 transition-colors">{feature.description}</p>
                
                {/* Checkmark */}
                <div className="flex items-center text-gray-900 font-medium group-hover:text-blue-700 transition-colors">
                  <FiCheckCircle className={`mr-2 ${feature.accent.includes('blue') ? 'text-blue-500' : feature.accent.includes('teal') ? 'text-teal-500' : 'text-gray-500'}`} />
                  <span>Wavys Standard</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section with Gradient Accents */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-24 bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-gray-200 shadow-sm relative overflow-hidden"
        >
          {/* Gradient border effect */}
          <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400/30 mx-0.5" />
                ))}
              </div>
              <p className="text-gray-600 mt-2">Rated 4.9/5 by 10,000+ customers</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 md:gap-10">
              {[
                { label: "Premium", value: "100K+", gradient: "from-blue-600 to-blue-800" },
                { label: "Happy Customers", value: "50K+", gradient: "from-gray-700 to-gray-900" },
                { label: "5-Star Reviews", value: "10K+", gradient: "from-blue-500 to-blue-700" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <motion.p 
                    className="text-3xl font-bold bg-clip-text text-transparent"
                    style={{ backgroundImage: `linear-gradient(to right, ${stat.gradient})` }}
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
                  <div 
                    className="h-0.5 w-12 mx-auto mt-2 rounded-full"
                    style={{ background: `linear-gradient(to right, ${stat.gradient})` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;