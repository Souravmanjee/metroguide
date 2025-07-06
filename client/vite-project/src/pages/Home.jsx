import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSearch, FiMapPin, FiNavigation } from 'react-icons/fi'
import StationSelector from '../components/StationSelector'
import PathResult from '../components/PathResult'
import AttractionCard from '../components/AttractionCard'
import { findShortestPath } from '../data/metroData'
import { kolkataAttractions, getAttractionsNearStations } from '../data/attractions'

const Home = () => {
  const [source, setSource] = useState('')
  const [destination, setDestination] = useState('')
  const [path, setPath] = useState(null)
  const [showPath, setShowPath] = useState(false)

  const handleShowPath = () => {
    if (source && destination) {
      const foundPath = findShortestPath(source, destination)
      setPath(foundPath)
      setShowPath(true)
    }
  }

  const handleReset = () => {
    setSource('')
    setDestination('')
    setPath(null)
    setShowPath(false)
  }

  // Get attractions based on current route or show all
  const relevantAttractions = showPath && path 
    ? getAttractionsNearStations(path)
    : kolkataAttractions

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative py-20 px-4 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
              <FiNavigation className="text-white text-3xl" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4">
              MetroGuide
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Your smart companion for navigating Kolkata's metro system. Find the shortest routes and discover amazing places along the way.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Station Selector */}
          <div className="lg:col-span-1">
            <StationSelector
              source={source}
              destination={destination}
              onSourceChange={setSource}
              onDestinationChange={setDestination}
            />

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 space-y-3"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleShowPath}
                disabled={!source || !destination}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <FiSearch className="text-xl" />
                Show Path
              </motion.button>

              {showPath && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleReset}
                  className="w-full bg-gray-500 hover:bg-gray-600 text-white py-3 px-6 rounded-xl font-semibold transition-colors duration-200"
                >
                  Reset Search
                </motion.button>
              )}
            </motion.div>
          </div>

          {/* Right Column - Results and Attractions */}
          <div className="lg:col-span-2 space-y-8">
            {/* Path Result */}
            {showPath && (
              <PathResult
                path={path}
                source={source}
                destination={destination}
              />
            )}

            {/* Attractions Section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FiMapPin className="text-2xl text-blue-500" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {showPath && path ? 'Attractions Near Your Route' : 'Popular Attractions in Kolkata'}
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {showPath && path 
                    ? `Discover amazing places near the stations in your route from ${source} to ${destination}.`
                    : 'Explore the rich cultural heritage and famous landmarks of Kolkata.'
                  }
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {relevantAttractions.slice(0, 9).map((attraction, index) => (
                  <AttractionCard
                    key={attraction.id}
                    attraction={attraction}
                    index={index}
                  />
                ))}
              </div>

              {relevantAttractions.length === 0 && showPath && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700"
                >
                  <FiMapPin className="text-4xl text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    No attractions found near your route
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Try exploring other routes to discover amazing places in Kolkata.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home