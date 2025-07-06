import React from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiZoomIn, FiMap } from 'react-icons/fi'

const Map = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Metro Network Map
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Complete visual guide to Kolkata's metro system with all lines and stations
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl overflow-hidden border border-gray-200 dark:border-slate-700"
        >
          {/* Map Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold mb-2">Kolkata Metro Network</h2>
                <p className="opacity-90">Interactive metro map with all operational lines</p>
              </div>
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
                >
                  <FiZoomIn />
                  Zoom
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-colors"
                >
                  <FiDownload />
                  Download
                </motion.button>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative bg-gray-100 dark:bg-slate-700 aspect-[4/3] flex items-center justify-center">
            <div className="text-center">
              <FiMap className="text-6xl text-gray-400 dark:text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                Metro Map Coming Soon
              </h3>
              <p className="text-gray-500 dark:text-gray-500 max-w-md">
                We're working on bringing you an interactive metro map. For now, you can use our route finder to navigate between stations.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-slate-700"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Metro Lines</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <div>
                <div className="font-medium text-gray-900 dark:text-white">Blue Line</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">North-South Corridor</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <div>
                <div className="font-medium text-gray-900 dark:text-white">Green Line</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">East-West Corridor</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
              <div>
                <div className="font-medium text-gray-900 dark:text-white">Purple Line</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Joka-Esplanade</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
              <div>
                <div className="font-medium text-gray-900 dark:text-white">Orange Line</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">New Town Extension</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Map Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 text-center">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiMap className="text-blue-600 dark:text-blue-400 text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Complete Network
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              View all metro lines and stations across Kolkata's extensive network
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 text-center">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiZoomIn className="text-green-600 dark:text-green-400 text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Interactive Features
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Zoom, pan, and explore detailed station information
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 text-center">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiDownload className="text-purple-600 dark:text-purple-400 text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Offline Access
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Download high-resolution maps for offline reference
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Map