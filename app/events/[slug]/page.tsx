import React from 'react'
import { notFound } from 'next/navigation'
import { getEventBySlug, getAllEventSlugs } from '../../../data'
import EventPageClient from './EventPageClient'

interface EventPageProps {
  params: {
    slug: string
  }
}

export default function EventPage({ params }: EventPageProps) {
  const event = getEventBySlug(params.slug)

  if (!event) {
    notFound()
  }

  return <EventPageClient event={event} />
}

export async function generateStaticParams() {
  const slugs = getAllEventSlugs()
  return slugs.map((slug) => ({
    slug: slug,
  }))
}
