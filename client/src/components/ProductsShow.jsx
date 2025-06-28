import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiZap } from 'react-icons/fi';

const UltraPremiumShowcase = () => {
  // Luxury product data
  const products = [
    {
      id: 1,
      name: "Nebula Signature Tee",
      price: "₹2,499",
      originalPrice: "₹3,199",
      discount: "22% OFF",
      image: "/images/nebula-tee.webp",
      colors: ["#0F172A", "#1E293B", "#334155"],
      badge: "LIMITED EDITION",
      rating: 4.9,
      delivery: "Express Shipping"
    },
    {
      id: 2,
      name: "Quantum Luxe Polo",
      price: "₹3,299",
      originalPrice: "₹3,999",
      discount: "18% OFF",
      image: "/images/quantum-polo.webp",
      colors: ["#1E3A8A", "#2563EB", "#3B82F6"],
      badge: "BESTSELLER",
      rating: 5.0,
      delivery: "Free Shipping"
    },
    {
      id: 3,
      name: "Aether Silk Shirt",
      price: "₹4,799",
      originalPrice: "₹5,499",
      discount: "13% OFF",
      image: "/images/aether-shirt.webp",
      colors: ["#FFFFFF", "#F3F4F6", "#E5E7EB"],
      badge: "NEW ARRIVAL",
      rating: 4.8,
      delivery: "Handcrafted"
    }
  ];

  // Ultra-premium animations
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4
      }
    }
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
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
      y: -15,
      boxShadow: "0 32px 64px -12px rgba(0, 0, 0, 0.16)",
      transition: {
        duration: 0.5,
        ease: [0.32, 0, 0.67, 0]
      }
    }
  };

  const imageHover = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 1,
        ease: [0.32, 0, 0.67, 0]
      }
    }
  };

  return (
    <section className="py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Luxury background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating micro-particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-100/40"
            style={{
              width: Math.random() * 8 + 2,
              height: Math.random() * 8 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -Math.random() * 40 - 20],
              opacity: [0.1, 0.3, 0],
              scale: [1, 1.5, 0.5]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatDelay: Math.random() * 5,
              ease: "linear"
            }}
          />
        ))}
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTIwIDB2NDBNMCAyMGg0MCIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==')]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="text-center mb-24"
        >
          <motion.div variants={item} className="inline-flex mb-6">
            <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase bg-blue-50 px-4 py-2 rounded-full border border-blue-100 flex items-center">
              <FiZap className="mr-2 text-blue-500" />
              CURATED SELECTION
            </span>
          </motion.div>
          <motion.h2 
            variants={item}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-gray-900"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
              The Wavys Edit
            </span>
          </motion.h2>
          <motion.p 
            variants={item}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Exceptional craftsmanship meets contemporary design in our premium collection
          </motion.p>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={item}
              whileHover="hover"
              className="group relative"
            >
              {/* Premium Product Card */}
              <motion.div
                variants={cardHover}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden pt-[125%] bg-gray-50">
                  {/* Luxury Badge */}
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className={`absolute top-5 right-5 text-xs font-bold px-4 py-2 rounded-full z-10 tracking-wide ${
                      product.badge === "NEW ARRIVAL" 
                        ? "bg-green-500 text-white" 
                        : product.badge === "BESTSELLER" 
                          ? "bg-blue-600 text-white shadow-blue-500/20" 
                          : "bg-gray-900 text-white shadow-lg"
                    } shadow-md`}
                  >
                    {product.badge}
                  </motion.div>

                  {/* Discount Ribbon */}
                  {product.discount && (
                    <motion.div 
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="absolute top-5 left-0 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 pr-5 rounded-r-full shadow-md"
                    >
                      {product.discount}
                    </motion.div>
                  )}

                  {/* Rating */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center shadow-sm"
                  >
                    <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-xs font-semibold text-gray-900">{product.rating}</span>
                  </motion.div>

                  {/* Product Image */}
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    variants={imageHover}
                  />
                </div>

                {/* Product Info */}
                <div className="p-7 flex-grow flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <div className="flex items-baseline">
                      <span className="text-blue-600 font-bold text-xl">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-gray-400 text-sm line-through ml-3">{product.originalPrice}</span>
                      )}
                    </div>
                    <div className="mt-2">
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {product.delivery}
                      </span>
                    </div>
                  </div>

                  {/* Color Swatches */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mb-6"
                  >
                    <div className="flex space-x-3">
                      {product.colors.map((color, index) => (
                        <motion.div
                          key={index}
                          className="w-6 h-6 rounded-full border-2 border-white shadow-sm cursor-pointer relative"
                          style={{ backgroundColor: color }}
                          whileHover={{ 
                            scale: 1.3,
                            boxShadow: "0 0 0 2px rgba(59,130,246,0.5)"
                          }}
                          transition={{ type: "spring", stiffness: 500 }}
                        >
                          <motion.div 
                            className="absolute inset-0 rounded-full border border-white/30"
                            whileHover={{ scale: 1.2 }}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Buy Now Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-auto"
                  >
                    <motion.button
                      whileHover={{ 
                        scale: 1.02,
                        backgroundColor: "#1E40AF",
                        boxShadow: "0 8px 24px -4px rgba(30, 64, 175, 0.3)"
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all font-medium text-lg shadow-md hover:shadow-lg"
                    >
                      BUY NOW
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Ultra-Premium CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-24"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Link 
              to="/collection" 
              className="px-10 py-5 bg-white border-2 border-blue-500 text-blue-600 hover:text-white hover:bg-blue-500 rounded-xl text-xl font-medium transition-all duration-300 flex items-center justify-center mx-auto shadow-lg hover:shadow-xl group"
            >
              <span className="mr-3">View Complete Collection</span>
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default UltraPremiumShowcase;