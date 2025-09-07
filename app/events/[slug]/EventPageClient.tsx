'use client'

import React from 'react'
import Link from 'next/link'
import type { Event } from '../../../data'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

interface EventPageClientProps {
  event: Event
}

export default function EventPageClient({ event }: EventPageClientProps) {
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div
        className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"
      >
        <div className="relative z-10 px-8 lg:px-16 py-24">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <div
              className="mb-8"
            >
              <Link
                href="/events"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mr-2">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Back to Events
              </Link>
            </div>

            {/* Event Type Badge */}
            <div className="mb-6">
              <span className={`inline-block px-6 py-2 rounded-full border ${getEventTypeBg(event.eventType)} ${getEventTypeColor(event.eventType)} text-sm font-semibold uppercase tracking-wider`}>
                {event.eventType}
              </span>
            </div>

            {/* Event Title */}
            <h1
              className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
            >
              {event.eventName}
            </h1>

            {/* Event Meta Info */}
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📅</span>
                <div>
                  <p className="text-sm text-gray-400">Date</p>
                  <p className="text-white font-semibold">{formatDate(event.eventStartDate)}</p>
                  {event.eventEndDate !== event.eventStartDate && (
                    <p className="text-sm text-gray-400">to {formatDate(event.eventEndDate)}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-2xl">{getHostingIcon(event.hosting)}</span>
                <div>
                  <p className="text-sm text-gray-400">Format</p>
                  <p className="text-white font-semibold capitalize">{event.hosting}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-2xl">👥</span>
                <div>
                  <p className="text-sm text-gray-400">Expected Participants</p>
                  <p className="text-white font-semibold">{event.expectedParticipants}</p>
                </div>
              </div>
            </div>

            {/* Event Description */}
            <p
              className="text-xl text-gray-300 leading-relaxed mb-8"
            >
              {event.eventDescription}
            </p>

            {/* CTA Button */}
            <div>
              <a
                // href={event.eventUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Register for Event
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Event Details Section */}
      <div
        className="py-20 px-8 lg:px-16"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Event Information */}
            <div className="space-y-8">
              <div
                className="bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6 text-cyan-400">Event Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Venue:</span>
                    <span className="text-white font-semibold">{event.eventVenue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">City:</span>
                    <span className="text-white font-semibold">{event.eventCity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Format:</span>
                    <span className="text-white font-semibold capitalize">{event.hosting}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Expected Attendees:</span>
                    <span className="text-white font-semibold">{event.expectedParticipants}</span>
                  </div>
                </div>
              </div>

              {/* Community Benefit */}
              <div
                className="bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-4 text-green-400">Community Impact</h3>
                <p className="text-gray-300 leading-relaxed">{event.communityBenefit}</p>
              </div>
            </div>

            {/* Social Media & Links */}
            <div className="space-y-8">
              {/* Social Media Links */}
              <div
                className="bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6 text-purple-400">Connect With Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(event.eventSocialMedia).map(([platform, url]) =>
                    url ? (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors"
                      >
                        <span className="text-xl">
                          {platform === 'twitter' && <Twitter />}
                          {platform === 'instagram' && <Instagram />}
                          {platform === 'linkedin' && <Linkedin />}
                          {platform === 'facebook' && <Facebook />}
                          {platform === 'discord' && '💬'}
                          {platform === 'telegram' && '📱'}
                        </span>
                        <span className="text-white capitalize">{platform}</span>
                      </a>
                    ) : null
                  )}
                </div>
              </div>

              {/* Code of Conduct */}
              <div
                className="bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-4 text-red-400">Event Guidelines</h3>
                <p className="text-gray-300 mb-4">
                  We maintain a safe and inclusive environment for all participants.
                </p>
                <a
                  href={event.codeOfConductUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  View Code of Conduct
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
