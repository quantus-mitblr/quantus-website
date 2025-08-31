'use client'
import React from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { events } from '../../data'

export default function EventsPage() {
  const getEventTypeColor = (eventType: string) => {
    switch (eventType) {
      case 'conference':
        return 'text-blue-400'
      case 'workshop':
        return 'text-purple-400'
      case 'meetup':
        return 'text-cyan-400'
      case 'hackathon':
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
        return 'bg-blue-500/20 border-blue-500/30'
      case 'workshop':
        return 'bg-purple-500/20 border-purple-500/30'
      case 'meetup':
        return 'bg-cyan-500/20 border-cyan-500/30'
      case 'hackathon':
        return 'bg-green-500/20 border-green-500/30'
      case 'exhibition':
        return 'bg-orange-500/20 border-orange-500/30'
      default:
        return 'bg-gray-500/20 border-gray-500/30'
    }
  }

  const getHostingIcon = (hosting: string) => {
    switch (hosting) {
      case 'virtual':
        return '🌐'
      case 'in-person':
        return '📍'
      case 'hybrid':
        return '🔄'
      default:
        return '📅'
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <motion.div 
        className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 px-8 lg:px-16">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <Link 
                href="/" 
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mr-2">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Back to Home
              </Link>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
            >
              All Events
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Explore our comprehensive collection of quantum computing events, workshops, and community gatherings.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Events Grid */}
      <motion.div
        className="py-20 px-8 lg:px-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                className="bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 relative overflow-hidden group"
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(147, 51, 234, 0.2)",
                  y: -10
                }}
              >
                {/* Floating quantum particles */}
                <motion.div 
                  className="absolute top-4 right-4 w-3 h-3 rounded-full bg-blue-400"
                  animate={{ 
                    y: [0, -10, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                />

                <div className="relative z-10">
                  {/* Event Type Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-wider ${getEventTypeBg(event.eventType)} ${getEventTypeColor(event.eventType)}`}>
                      {event.eventType}
                    </span>
                    <span className="text-2xl">{getHostingIcon(event.hosting)}</span>
                  </div>

                  {/* Event Title */}
                  <h3 className={`text-2xl font-bold mb-4 ${getEventTypeColor(event.eventType)}`}>
                    {event.eventName}
                  </h3>

                  {/* Event Description */}
                  <p className="text-gray-300 leading-relaxed mb-4 line-clamp-3">
                    {event.eventDescription}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-2 mb-6">
                    <p className="text-sm text-gray-400">
                      📅 {new Date(event.eventStartDate).toLocaleDateString()}
                      {event.eventEndDate !== event.eventStartDate && 
                        ` - ${new Date(event.eventEndDate).toLocaleDateString()}`
                      }
                    </p>
                    <p className="text-sm text-gray-400">
                      📍 {event.eventCity}
                    </p>
                    <p className="text-sm text-gray-400">
                      👥 {event.expectedParticipants} participants
                    </p>
                  </div>

                  {/* View Details Button */}
                  <Link 
                    href={`/events/${event.slug}`}
                    className="inline-block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform group-hover:scale-105"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
