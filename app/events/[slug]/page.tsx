import React from 'react'
import { notFound } from 'next/navigation'
import { getEventBySlug, getAllEventSlugs } from '../../../data'
import EventPageClient from './EventPageClient'

interface EventPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params
  const event = getEventBySlug(slug)

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
