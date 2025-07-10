import React from 'react'
import { motion } from 'framer-motion'
import { FiNavigation, FiUsers, FiTarget, FiHeart, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'

const About = () => {
  const features = [
    {
      icon: FiNavigation,
      title: "Smart Route Finding",
      description: "Advanced pathfinding algorithm to find the shortest routes between any two metro stations"
    },
    {
      icon: FiUsers,
      title: "User-Friendly Interface",
      description: "Intuitive design with dark/light mode support and responsive layout for all devices"
    },
    {
      icon: FiTarget,
      title: "Accurate Information",
      description: "Up-to-date metro network data with real-time route calculations and line changes"
    },
    {
      icon: FiHeart,
      title: "Local Attractions",
      description: "Discover amazing places near your route with curated recommendations"
    }
  ]

  const team = [
    {
      name: "MetroGuide Team",
      role: "Development & Design",
      description: "Passionate about making public transportation more accessible and user-friendly"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <FiNavigation className="text-white text-3xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About MetroGuide
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Your smart companion for navigating Kolkata's metro system, designed to make your journey easier and more enjoyable.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mb-12 border border-gray-200 dark:border-slate-700"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              MetroGuide was created to simplify metro travel in Kolkata by providing accurate route information, 
              real-time pathfinding, and local attraction recommendations. We believe that public transportation 
              should be accessible, efficient, and enjoyable for everyone - from daily commuters to tourists 
              exploring the city's rich cultural heritage.
            </p>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What Makes Us Special
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Discover the features that make MetroGuide your perfect travel companion
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 mb-12 text-white"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">MetroGuide by Numbers</h2>
            <p className="text-lg opacity-90">
              Serving the Kolkata metro community with reliable information
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-90">Metro Stations</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4</div>
              <div className="text-sm opacity-90">Metro Lines</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-90">Tourist Attractions</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-90">Available</div>
            </div>
          </div>
        </motion.div>

        {/* Technology */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 mb-12 border border-gray-200 dark:border-slate-700"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Built with Modern Technology
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              MetroGuide is built using cutting-edge web technologies to ensure fast performance, 
              beautiful design, and seamless user experience across all devices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">⚛️</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">React.js</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Modern JavaScript framework for building interactive user interfaces
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">🎨</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Tailwind CSS</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Utility-first CSS framework for rapid UI development
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">✨</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Framer Motion</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Smooth animations and micro-interactions for enhanced UX
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-slate-700"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Have suggestions, feedback, or found an issue? We'd love to hear from you! 
              Help us make MetroGuide even better for the Kolkata community.
            </p>
            
            <div className="flex justify-center gap-6">
  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    href="https://mail.google.com/mail/?view=cm&fs=1&to=souravkumarvicky42@gmail.com"
    className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
  >
    <FiMail />
    Contact Us
  </motion.a>

  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    href="https://github.com/Souravmanjee"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
  >
    <FiGithub />
    GitHub
  </motion.a>

  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    href="https://www.linkedin.com/in/sourav-manjee-78a49a260"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
  >
    <svg
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.038-1.852-3.038-1.853 0-2.137 1.448-2.137 2.945v5.662H9.067V9h3.104v1.561h.044c.433-.822 1.494-1.688 3.073-1.688 3.29 0 3.894 2.165 3.894 4.981v6.598zM5.337 7.433a1.814 1.814 0 110-3.628 1.814 1.814 0 010 3.628zM6.813 20.452H3.861V9h2.952v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.554C0 23.229.792 24 1.771 24h20.451C23.206 24 24 23.229 24 22.277V1.723C24 .771 23.206 0 22.225 0z"
      />
    </svg>
    LinkedIn
  </motion.a>
</div>

          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About