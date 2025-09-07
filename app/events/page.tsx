'use client'
import React from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { events } from '../../data'
import { ArrowRight, Calendar, ImageIcon, Pin, Users } from 'lucide-react'
import Image from 'next/image'

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
      <div
        className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 py-24"
      >
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 px-8 lg:px-16">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8">
              <Link
                href="/"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mr-2">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back to Home
              </Link>
            </div>

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
      </div>

      {/* Events Grid */}
      <div
        className="py-20 px-8 lg:px-16"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {events.map((event, index) => (
              <div
                key={event.id}
                className="bg-slate-800/50 grid grid-cols-1 sm:grid-cols-2 backdrop-blur-sm border border-gray-700/50 rounded-2xl  relative overflow-hidden group py-3"
              >
                <div className="flex flex-col sm:flex-row py-4 px-6 gap-6 justify-center items-center">
                  <div className="flex flex-col text-center">
                    <div className="font-bold">
                      {new Date(event.eventStartDate).toLocaleDateString('en-IN', {
                        month: 'short',
                        timeZone: 'Asia/Kolkata'
                      }).toUpperCase()}
                    </div>
                    <div className="mt-2 border "></div>
                    <div className="text-4xl font-bold">
                      {new Date(event.eventStartDate).toLocaleDateString('en-IN', {
                        day: '2-digit',
                        timeZone: 'Asia/Kolkata'
                      }).toUpperCase()}
                    </div>
                    <div className="mt-2 border "></div>
                    <div className="font-bold">
                      {new Date(event.eventStartDate).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        timeZone: 'Asia/Kolkata'
                      }).toUpperCase()}
                    </div>
                  </div>
                  {
                    event.eventImageUrl ? (
                      <Image
                        src={event.eventImageUrl}
                        width={450}
                        height={850}
                        alt={event.eventName}
                        className=" object-cover h-full bg-gray-500 rounded-lg"
                      />
                    ) : (
                      <div className="w-[450px] h-[400px] bg-gray-500 rounded-lg flex items-center justify-center text-5xl">
                        <ImageIcon/>
                      </div>
                    )
                  }
                </div>

                <div className="relative z-10 p-8">
                  {/* Event Type Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-block px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-wider ${getEventTypeBg(event.eventType)} ${getEventTypeColor(event.eventType)}`}>
                      {event.eventType}
                    </span>
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
                    <p className="text-sm text-gray-400 flex items-center gap-2">
                      <Calendar /> {new Date(event.eventStartDate).toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' })}
                      {event.eventEndDate !== event.eventStartDate &&
                        ` - ${new Date(event.eventEndDate).toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' })}`
                      }
                    </p>
                    <p className="text-sm text-gray-400 flex items-center gap-2">
                      <Pin /> {event.eventCity}
                    </p>
                    <p className="text-sm text-gray-400 flex items-center gap-2">
                      <Users /> {event.expectedParticipants} participants
                    </p>
                  </div>

                  {/* View Details Button */}
                  <Link
                    href={`/events/${event.slug}`}
                    className="w-full text-center flex gap-2 font-semibold py-3 pr-4 rounded-lg transition-all duration-300 transform"
                  >
                    View Event Details <ArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
