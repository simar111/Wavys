import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { 
  FiInstagram, 
  FiTwitter, 
  FiFacebook,
  FiLinkedin,
  FiYoutube,
  FiGithub,
  FiArrowRight,
  FiMail,
  FiPhone,
  FiMapPin
} from 'react-icons/fi';
import Footer from "../components/Footer";
import ContactHero from "../components/ContactHero";

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
    <ContactHero />
      <Helmet>
        <title>Contact Us - Wavys</title>
        <meta name="description" content="Contact Wavys for inquiries about premium men's T-shirts and apparel." />
      </Helmet>

      {/* Navigation */}
      {/* 
      {/* Hero Section */}
      {/* <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-black to-blue-900 overflow-hidden"> */}
        {/* Particle Background */}
        {/* <div className="absolute inset-0 overflow-hidden">
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
      </section> */}

      {/* Contact Form Section */}
     <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
      className="max-w-5xl mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 font-poppins">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential collaboration? Drop us a message.
        </p>
      </div>
      
      <motion.div 
        variants={floatVariants}
        className="bg-white rounded-2xl p-8 sm:p-12 shadow-xl ring-1 ring-gray-200/50 ring-inset"
      >
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-8 p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-center"
          >
            <div className="flex justify-center mb-3">
              <svg className="w-12 h-12 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
            <p className="text-emerald-700">Thank you for reaching out. We'll get back to you within 24 hours.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={`w-full px-4 py-3 text-gray-900 bg-gray-50 border ${errors.name ? "border-red-300 focus:ring-red-500" : "border-gray-200 focus:border-blue-500 focus:ring-blue-500"} rounded-lg focus:outline-none focus:ring-2 transition-all`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className={`w-full px-4 py-3 text-gray-900 bg-gray-50 border ${errors.email ? "border-red-300 focus:ring-red-500" : "border-gray-200 focus:border-blue-500 focus:ring-blue-500"} rounded-lg focus:outline-none focus:ring-2 transition-all`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                className="w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-blue-500 rounded-lg focus:outline-none focus:ring-2 transition-all"
                placeholder="How can we help?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
              <div className="relative">
                <textarea
                  id="message"
                  rows="6"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className={`w-full px-4 py-3 text-gray-900 bg-gray-50 border ${errors.message ? "border-red-300 focus:ring-red-500" : "border-gray-200 focus:border-blue-500 focus:ring-blue-500"} rounded-lg focus:outline-none focus:ring-2 transition-all`}
                  placeholder="Tell us about your project..."
                ></textarea>
                {errors.message && (
                  <div className="absolute top-3 right-3 pr-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
              {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
            </div>
            
            <div className="flex items-center">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="consent" className="ml-2 block text-sm text-gray-600">
                I agree to the <a href="#" className="text-blue-600 hover:text-blue-500">privacy policy</a> and allow my data to be stored.
              </label>
            </div>
            
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg shadow-md transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Send Message</span>
            </motion.button>
          </form>
        )}
      </motion.div>
    </motion.div>
  </div>
</section>
      {/* Contact Information */}
    <section className="py-24 bg-gradient-to-b from-gray-900 via-blue-900 to-indigo-900">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-150px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.25,
            delayChildren: 0.2
          }
        }
      }}
      className="max-w-7xl mx-auto"
    >
      <motion.h2 
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
              type: "spring", 
              stiffness: 100,
              damping: 15
            }
          }
        }}
        className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-300 font-poppins"
      >
        Connect With Us
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {/* Email Card */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 50, scale: 0.95 },
            visible: { 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: { 
                type: "spring", 
                stiffness: 300,
                damping: 15
              }
            }
          }}
          whileHover={{ 
            y: -10,
            transition: { type: "spring", stiffness: 400 }
          }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-md transition-all duration-500"></div>
          <div className="relative bg-gray-900/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-700/50 group-hover:border-cyan-400/50 transition-all h-full flex flex-col items-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-full shadow-lg">
                <FiMail className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center text-white">Email Us</h3>
            <a 
              href="mailto:support@wavys.com" 
              className="text-cyan-300 hover:text-cyan-200 text-center transition-colors text-lg font-medium"
            >
              support@wavys.com
            </a>
            <div className="mt-6 w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-80 group-hover:w-24 transition-all duration-500"></div>
          </div>
        </motion.div>
        
        {/* Phone Card */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 50, scale: 0.95 },
            visible: { 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: { 
                type: "spring", 
                stiffness: 300,
                damping: 15,
                delay: 0.1
              }
            }
          }}
          whileHover={{ 
            y: -10,
            transition: { type: "spring", stiffness: 400 }
          }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-md transition-all duration-500"></div>
          <div className="relative bg-gray-900/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-700/50 group-hover:border-indigo-400/50 transition-all h-full flex flex-col items-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-indigo-500/10 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-indigo-500 to-purple-500 p-4 rounded-full shadow-lg">
                <FiPhone className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center text-white">Call Us</h3>
            <a 
              href="tel:+919876543210" 
              className="text-indigo-300 hover:text-indigo-200 text-center transition-colors text-lg font-medium"
            >
              +91 98765 43210
            </a>
            <div className="mt-6 w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-80 group-hover:w-24 transition-all duration-500"></div>
          </div>
        </motion.div>
        
        {/* Address Card */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 50, scale: 0.95 },
            visible: { 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: { 
                type: "spring", 
                stiffness: 300,
                damping: 15,
                delay: 0.2
              }
            }
          }}
          whileHover={{ 
            y: -10,
            transition: { type: "spring", stiffness: 400 }
          }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-md transition-all duration-500"></div>
          <div className="relative bg-gray-900/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-700/50 group-hover:border-purple-400/50 transition-all h-full flex flex-col items-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-full shadow-lg">
                <FiMapPin className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center text-white">Visit Us</h3>
            <p className="text-purple-300 text-center text-lg font-medium">
              123 Style Street<br />
              Mumbai, India 400001
            </p>
            <div className="mt-6 w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-80 group-hover:w-24 transition-all duration-500"></div>
          </div>
        </motion.div>
      </div>
      
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -20 }}
            animate={{
              opacity: [0, 0.3, 0],
              y: [0, 100],
              x: Math.random() * 100 - 50,
              transition: {
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                delay: Math.random() * 10
              }
            }}
            className="absolute w-1 h-1 bg-blue-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
    </motion.div>
  </div>
</section>
      {/* Social Media */}
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Floating grid pattern */}
    <div className="absolute inset-0 opacity-10" style={{
      backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
      backgroundSize: '40px 40px'
    }}></div>
    
    {/* Floating particles */}
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0, 0.4, 0],
          scale: [0, 1, 0],
          x: Math.random() * 400 - 200,
          y: Math.random() * 400 - 200,
          transition: {
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            delay: Math.random() * 5
          }
        }}
        className="absolute w-2 h-2 bg-blue-400 rounded-full"
        style={{
          left: `${50 + (Math.random() * 20 - 10)}%`,
          top: `${50 + (Math.random() * 20 - 10)}%`
        }}
      />
    ))}
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
    >
      <motion.h2 
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
              type: "spring", 
              stiffness: 100,
              damping: 15
            }
          }
        }}
        className="text-4xl sm:text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 font-poppins"
      >
        Join Our Community
      </motion.h2>
      
      <motion.div 
        className="flex flex-wrap justify-center gap-8 sm:gap-12"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }}
      >
        {[
          { 
            icon: <FiInstagram className="w-8 h-8" />, 
            name: "Instagram",
            color: "from-fuchsia-500 to-pink-600",
            hoverColor: "hover:from-fuchsia-600 hover:to-pink-700"
          },
          { 
            icon: <FiTwitter className="w-8 h-8" />, 
            name: "Twitter",
            color: "from-blue-400 to-cyan-500",
            hoverColor: "hover:from-blue-500 hover:to-cyan-600"
          },
          { 
            icon: <FiFacebook className="w-8 h-8" />, 
            name: "Facebook",
            color: "from-blue-600 to-indigo-700",
            hoverColor: "hover:from-blue-700 hover:to-indigo-800"
          },
          // { 
          //   icon: <FiLinkedin className="w-8 h-8" />, 
          //   name: "LinkedIn",
          //   color: "from-blue-500 to-blue-700",
          //   hoverColor: "hover:from-blue-600 hover:to-blue-800"
          // },
          // { 
          //   icon: <FiYoutube className="w-8 h-8" />, 
          //   name: "YouTube",
          //   color: "from-red-500 to-red-700",
          //   hoverColor: "hover:from-red-600 hover:to-red-800"
          // },
          // { 
          //   icon: <FiGithub className="w-8 h-8" />, 
          //   name: "GitHub",
          //   color: "from-gray-400 to-gray-700",
          //   hoverColor: "hover:from-gray-500 hover:to-gray-800"
          // }
        ].map((social, index) => (
          <motion.div
            key={social.name}
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.8 },
              visible: { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: { 
                  type: "spring", 
                  stiffness: 300,
                  damping: 15,
                  delay: index * 0.1
                }
              }
            }}
            whileHover={{
              y: -10,
              scale: 1.05,
              transition: { type: "spring", stiffness: 400 }
            }}
            className="relative group"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-2xl opacity-0 group-hover:opacity-100 blur-md group-hover:blur-lg transition-all duration-500`}></div>
            <a
              href="#"
              className={`relative flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 group-hover:border-transparent transition-all ${social.hoverColor}`}
              aria-label={social.name}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className={`text-white p-4 rounded-full bg-gradient-to-br ${social.color} shadow-lg mb-2`}
              >
                {social.icon}
              </motion.div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                {social.name}
              </span>
              <div className="absolute bottom-0 w-0 h-1 bg-white group-hover:w-10 transition-all duration-300"></div>
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* Animated call-to-action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 text-gray-400 text-lg"
      >
        Follow us for updates and exclusive content
        <motion.div 
          animate={{ x: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="inline-block ml-2"
        >
          <FiArrowRight className="inline" />
        </motion.div>
      </motion.div>
    </motion.div>
  </div>
</section>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default ContactUs;