import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit logic here
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  // Floating animation variants
  const floatVariants = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Fade in animation for sections
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Wavys</title>
        <meta name="description" content="Contact Wavys for inquiries about premium men's T-shirts and apparel." />
      </Helmet>

      {/* Navigation */}
      {/* 
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-black to-blue-900 overflow-hidden">
        {/* Particle Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white opacity-[0.03]"
              style={{
                width: Math.random() * 4 + 2,
                height: Math.random() * 4 + 2,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.03, 0.1, 0.03]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 py-16 text-center relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.h1 
              variants={fadeIn}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 font-poppins"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
                Get in Touch with Wavys
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light"
            >
              We're here to help you style your wave
            </motion.p>
            
            <motion.div variants={fadeIn}>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 8px 25px -8px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="px-8 py-3 bg-blue-700 hover:bg-blue-600 text-white font-medium rounded-full transition-all"
              >
                Contact Us Now
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center font-poppins">
              Send Us a Message
            </h2>
            
            <motion.div 
              variants={floatVariants}
              className="bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-xl p-8 sm:p-10 border border-gray-800 shadow-2xl"
            >
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mb-6 p-4 bg-green-900/30 border border-green-600 rounded-lg text-green-200"
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={`w-full px-4 py-3 bg-gray-800 border ${errors.name ? "border-red-500" : "border-gray-700 focus:border-blue-500"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all`}
                  />
                  {errors.name && <p className="mt-1 text-red-400 text-sm">{errors.name}</p>}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className={`w-full px-4 py-3 bg-gray-800 border ${errors.email ? "border-red-500" : "border-gray-700 focus:border-blue-500"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all`}
                  />
                  {errors.email && <p className="mt-1 text-red-400 text-sm">{errors.email}</p>}
                </div>
                
                <div className="mb-8">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className={`w-full px-4 py-3 bg-gray-800 border ${errors.message ? "border-red-500" : "border-gray-700 focus:border-blue-500"} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all`}
                  ></textarea>
                  {errors.message && <p className="mt-1 text-red-400 text-sm">{errors.message}</p>}
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="w-full px-6 py-3 bg-blue-700 hover:bg-blue-600 text-white font-medium rounded-lg transition-all"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-b from-black to-blue-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            <motion.div 
              variants={fadeIn}
              className="bg-gray-900 bg-opacity-50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-all"
            >
              <div className="text-blue-400 mb-4">
                <FiMail className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Email Us</h3>
              <p className="text-gray-300 text-center">support@wavys.com</p>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="bg-gray-900 bg-opacity-50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-all"
            >
              <div className="text-blue-400 mb-4">
                <FiPhone className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Call Us</h3>
              <p className="text-gray-300 text-center">+91-987-654-3210</p>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="bg-gray-900 bg-opacity-50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-all"
            >
              <div className="text-blue-400 mb-4">
                <FiMapPin className="w-8 h-8 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Visit Us</h3>
              <p className="text-gray-300 text-center">123 Style Street, Mumbai, India</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 font-poppins">Connect With Us</h2>
            
            <motion.div className="flex justify-center space-x-6">
              {[
                { icon: <FiInstagram className="w-6 h-6" />, name: "Instagram" },
                { icon: <FiTwitter className="w-6 h-6" />, name: "Twitter" },
                { icon: <FiFacebook className="w-6 h-6" />, name: "Facebook" }
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href="#"
                  variants={floatVariants}
                  custom={index}
                  whileHover={{ y: -5, color: "#3B82F6" }}
                  className="text-white hover:text-blue-400 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-2xl font-bold mb-4 font-poppins">WAVYS</div>
            
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
            
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Wavys. All Rights Reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default ContactUs;