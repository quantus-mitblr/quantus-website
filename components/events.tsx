"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Link from 'next/link'
import { events } from '../data'

export default function Events() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const eventsPerPage = 3
  const totalPages = Math.ceil(events.length / eventsPerPage)

  const nextEvents = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages)
  }

  const prevEvents = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const getCurrentEvents = () => {
    const start = currentIndex * eventsPerPage
    const end = start + eventsPerPage
    return events.slice(start, end)
  }

  const getEventTypeColor = (eventType: string) => {
    switch (eventType) {
      case 'conference':
        return 'text-blue-400'
      case 'workshop':
        return 'text-purple-400'
      case 'meetup':
        return 'text-cyan-400'
      case 'bootcamp':
        return 'text-green-400'
      case 'exhibition':
        return 'text-orange-400'
      default:
        return 'text-gray-400'
    }
  }

  const getEventTypeBg = (eventType: string) => {
    switch (eventType) {
      case 'conference':
        return 'bg-blue-500/20'
      case 'workshop':
        return 'bg-purple-500/20'
      case 'meetup':
        return 'bg-cyan-500/20'
      case 'bootcamp':
        return 'bg-green-500/20'
      case 'exhibition':
        return 'bg-orange-500/20'
      default:
        return 'bg-gray-500/20'
    }
  }

  return (
    <motion.div
      className="bg-gradient-to-br from-black via-gray-900 to-slate-900 text-white py-20 px-8 lg:px-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            className="text-purple-400 text-xl tracking-wider mb-4 font-semibold text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            // EVENTS
          </motion.p>
          <motion.h2
            className="text-2xl lg:text-3xl font-bold text-left mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Explore Our Latest Events and Opportunities
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 mb-10 max-w-4xl text-left"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            Dive into our diverse range of events—from workshops and meetups to conferences and bootcamps. Whether you're a beginner or a seasoned enthusiast, there's something for everyone.
          </motion.p>

          {/* View All Events Button */}

          {/* Navigation and Events Container */}
          <div className="relative">
            {/* Navigation Arrows */}
            {totalPages > 1 && (
              <>
                <motion.button
                  onClick={prevEvents}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-purple-600/80 hover:bg-purple-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.button>

                <motion.button
                  onClick={nextEvents}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-purple-600/80 hover:bg-purple-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.button>
              </>
            )}

            {/* Events Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                {getCurrentEvents().map((event, index) => (
                  <motion.div
                    key={event.id}
                    className="bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 relative overflow-hidden"
                    initial={{ y: 50, opacity: 0, scale: 0.9 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 20px 40px rgba(147, 51, 234, 0.2)",
                      y: -10
                    }}
                  >
                    <div className="relative z-10">
                      <h3 className={`text-2xl font-bold mb-4`}>
                        {event.eventName}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        {event.eventDescription}
                      </p>
                      <div className="flex flex-col gap-2 mb-4">
                        <p className="text-sm text-gray-400">
                          Start: {new Date(event.eventStartDate).toLocaleDateString('en-GB', {
                            timeZone: 'Asia/Kolkata',
                            day: 'numeric',
                            month: 'numeric',
                            year: 'numeric'
                          })}
                        </p>
                        {event.eventEndDate !== event.eventStartDate && (
                          <p className="text-sm text-gray-400">
                            End: {new Date(event.eventEndDate).toLocaleDateString('en-GB', {
                              timeZone: 'Asia/Kolkata',
                              day: 'numeric',
                              month: 'numeric',
                              year: 'numeric'
                            })}
                          </p>
                        )}
                      </div>
                      <motion.div
                        className={`mt-6 inline-block px-4 py-2 ${getEventTypeBg(event.eventType)} rounded-full text-sm capitalize`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {event.eventType}
                      </motion.div>

                      {/* View Details Button */}
                      <motion.div className="mt-6">
                        <Link
                          href={`/events/${event.slug}`}
                          className="inline-block bg-white text-black font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                        >
                          View Details
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            {totalPages > 1 && (
              <motion.div
                className="flex justify-center mt-12 gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                {Array.from({ length: totalPages }).map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                        ? 'bg-purple-400 scale-125'
                        : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </motion.div>
            )}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className='mt-8'
          >
            <Link
              href="/events"
              className="inline-block  font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View All Events →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
