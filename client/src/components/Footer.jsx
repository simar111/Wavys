import React from 'react';
import { motion } from 'framer-motion';
import { FiInstagram, FiTwitter, FiFacebook, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  // Floating animation variants
  const floatVariants = {
    float: {
      y: [0, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Fade in animation
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const footerLinks = [
    {
      title: "Shop",
      links: ["New Arrivals", "Best Sellers", "T-Shirts", "Accessories"]
    },
    {
      title: "Company",
      links: ["About Us", "Sustainability", "Careers", "Press"]
    },
    {
      title: "Help",
      links: ["Contact Us", "Shipping", "Returns", "FAQ"]
    }
  ];

  const contactInfo = [
    { icon: <FiMail className="w-5 h-5" />, text: "support@wavys.com" },
    { icon: <FiPhone className="w-5 h-5" />, text: "+91-987-654-3210" },
    { icon: <FiMapPin className="w-5 h-5" />, text: "123 Style Street, Mumbai" }
  ];

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
        >
          {/* Brand Column */}
          <motion.div variants={fadeIn} className="md:col-span-1">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="text-3xl font-bold mb-4 font-poppins"
            >
              WAVYS
            </motion.div>
            <p className="text-gray-400 mb-6">
              Elevating men's fashion with premium quality and contemporary designs.
            </p>
            
            {/* Social Links */}
            <motion.div className="flex space-x-4">
              {[
                { icon: <FiInstagram />, name: "Instagram" },
                { icon: <FiTwitter />, name: "Twitter" },
                { icon: <FiFacebook />, name: "Facebook" }
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href="#"
                  variants={floatVariants}
                  custom={index}
                  whileHover={{ y: -3, color: "#3B82F6" }}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Navigation Links */}
          {footerLinks.map((section, index) => (
            <motion.div key={section.title} variants={fadeIn}>
              <h3 className="text-lg font-semibold mb-4 text-gray-200">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5, color: "#3B82F6" }}
                      className="text-gray-400 hover:text-white transition-colors flex items-center"
                    >
                      <span className="w-1 h-1 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Information */}
          <motion.div variants={fadeIn}>
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Contact</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.li 
                  key={index}
                  variants={floatVariants}
                  custom={index}
                  className="flex items-start"
                >
                  <span className="text-blue-400 mt-0.5 mr-3">{item.icon}</span>
                  <span className="text-gray-400">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-16 pt-12 border-t border-gray-800"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Join the Wavys Community</h3>
            <p className="text-gray-400 mb-6">
              Subscribe to get exclusive offers, style tips, and early access to new collections.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-blue-500 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-blue-700 hover:bg-blue-600 text-white font-medium rounded-lg transition-all"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-gray-900/50 py-6 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-gray-500 text-sm mb-4 md:mb-0"
            >
              © {new Date().getFullYear()} Wavys. All rights reserved.
            </motion.p>
            
            <div className="flex space-x-6">
              <motion.a
                href="#"
                whileHover={{ color: "#3B82F6" }}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: "#3B82F6" }}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: "#3B82F6" }}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Cookies
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;