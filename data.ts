// Comprehensive Event interface with all required fields
export interface Event {
  id: number;
  slug: string; // URL-friendly identifier for routing
  eventName: string;
  eventStartDate: string; // main event date
  eventEndDate: string; // main event date
  hosting: 'virtual' | 'in-person' | 'hybrid';
  eventVenue: string;
  eventCity: string;
  eventType: 'conference' | 'meetup' | 'workshop' | 'hackathon' | 'exhibition' | 'other';
  eventDescription: string;
  expectedParticipants: number;
  eventImageUrl?: string; // Optional image URL for the event
  eventSocialMedia: {
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    facebook?: string;
    discord?: string;
    telegram?: string;
  };
  codeOfConductUrl: string;
  communityBenefit: string; // 20-30 words describing how the event benefits the local community
}

export const events: Event[] = [
    {
        id: 1,
        slug: "engineers-days-exhibit-2025",
        eventName: "Engineers Days Exhibit",
        eventStartDate: "2025-09-22",
        eventEndDate: "2025-09-22",
        hosting: "in-person",
        eventVenue: "MIT Bengaluru",
        eventCity: "Bengaluru",
        eventType: "exhibition",
        eventDescription: "A hands-on demo stall by QuantUs featuring Quantum Runner 2.0, a fun game that introduces quantum concepts through play - plus live visualizations and interactive mini-demos. Meet club members, learn our mission, grab brochures/event cards, and scan QR codes to join. Sessions run in short 3–5 minute cycles so anyone can drop in, try, and learn.",
        expectedParticipants: 125,
        eventSocialMedia: {
            twitter: "https://twitter.com/quantus_mitblr",
            instagram: "https://instagram.com/quantus_mitblr",
            linkedin: "https://linkedin.com/company/quantus-mitblr"
        },
        codeOfConductUrl: "https://quantus-mitblr.github.io/Resources/",
        communityBenefit: "Demystifies quantum through hands-on games, interactive demos, and visualizations. Inspires students and visitors to pursue STEM, connects them with mentors/resources, and strengthens Bengaluru's emerging quantum innovation community."
    },
    {
        id: 2,
        slug: "quantum-leap-2-0",
        eventName: "Quantum Leap 2.0",
        eventStartDate: "2025-09-23",
        eventEndDate: "2025-09-23",
        hosting: "in-person",
        eventVenue: "TBD",
        eventCity: "Bengaluru",
        eventType: "workshop",
        eventDescription: "Quantum Leap 2.0 is an onboarding workshop for first-years to demystify quantum computing. We cover qubits, superposition, and basic linear algebra, then run hands-on labs in Qiskit to simulate simple algorithms (Deutsch–Jozsa, Grover) and circuits. No prior experience required—bring a laptop; we'll guide setup and share starter notebooks.",
        expectedParticipants: 55,
        eventSocialMedia: {
            twitter: "https://twitter.com/quantus_mitblr",
            linkedin: "https://linkedin.com/company/quantus-mitblr",
            discord: "https://discord.gg/quantum-leap"
        },
        codeOfConductUrl: "https://example.com/events/quantumleap/code-of-conduct",
        communityBenefit: "Builds local quantum literacy, lowers entry barriers for students, and seeds a talent pipeline for internships, research collaborations, and Bengaluru's emerging quantum industry and startup ecosystem."
    }
]

// Utility function to get event by slug
export function getEventBySlug(slug: string): Event | undefined {
  return events.find(event => event.slug === slug)
}

// Utility function to get all event slugs for static generation
export function getAllEventSlugs(): string[] {
  return events.map(event => event.slug)
}