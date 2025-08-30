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
  eventType: 'conference' | 'meetup' | 'workshop' | 'hackathon' | 'other';
  eventUrl: string; // link to webpage for the event
  eventDescription: string;
  expectedParticipants: number;
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
        slug: "qubit-quest-25",
        eventName: "Qubit Quest '25",
        eventStartDate: "2025-03-15",
        eventEndDate: "2025-03-17",
        hosting: "hybrid",
        eventVenue: "MIT Campus & Online",
        eventCity: "Cambridge, MA",
        eventType: "conference",
        eventUrl: "https://quantus-mitblr.org/qubit-quest-2025",
        eventDescription: "Our flagship quantum computing competition bringing together brilliant minds to solve real-world challenges using quantum algorithms and innovative thinking.",
        expectedParticipants: 250,
        eventSocialMedia: {
            twitter: "https://twitter.com/quantus_mitblr",
            instagram: "https://instagram.com/quantus_mitblr",
            linkedin: "https://linkedin.com/company/quantus-mitblr",
            discord: "https://discord.gg/quantus-community"
        },
        codeOfConductUrl: "https://quantus-mitblr.org/code-of-conduct",
        communityBenefit: "Fosters quantum talent development, bridges academic-industry gap, and creates opportunities for students to solve real quantum computing challenges."
    },
    {
        id: 2,
        slug: "quantum-week-2025",
        eventName: "Quantum Week",
        eventStartDate: "2025-04-10",
        eventEndDate: "2025-04-16",
        hosting: "in-person",
        eventVenue: "Quantum Research Center",
        eventCity: "Boston, MA",
        eventType: "workshop",
        eventUrl: "https://quantus-mitblr.org/quantum-week-2025",
        eventDescription: "A week-long celebration of quantum science featuring workshops, guest lectures, hands-on labs, and networking sessions with industry experts.",
        expectedParticipants: 180,
        eventSocialMedia: {
            twitter: "https://twitter.com/quantus_mitblr",
            linkedin: "https://linkedin.com/company/quantus-mitblr",
            telegram: "https://t.me/quantus_events"
        },
        codeOfConductUrl: "https://quantus-mitblr.org/code-of-conduct",
        communityBenefit: "Provides comprehensive quantum education, hands-on experience with quantum hardware, and networking opportunities for local quantum enthusiasts."
    },
    {
        id: 3,
        slug: "quantum-bootcamp-2025",
        eventName: "Quantum BootCamp",
        eventStartDate: "2025-05-08",
        eventEndDate: "2025-05-10",
        hosting: "hybrid",
        eventVenue: "Innovation Lab & Virtual Platform",
        eventCity: "Cambridge, MA",
        eventType: "workshop",
        eventUrl: "https://quantus-mitblr.org/quantum-bootcamp",
        eventDescription: "Intensive hands-on training program covering quantum programming, circuit design, and practical applications using cutting-edge quantum development tools.",
        expectedParticipants: 120,
        eventSocialMedia: {
            twitter: "https://twitter.com/quantus_mitblr",
            instagram: "https://instagram.com/quantus_mitblr",
            discord: "https://discord.gg/quantus-bootcamp"
        },
        codeOfConductUrl: "https://quantus-mitblr.org/code-of-conduct",
        communityBenefit: "Accelerates quantum programming skills, provides practical experience with quantum tools, and builds a stronger local quantum developer community."
    },
    {
        id: 4,
        slug: "monthly-quantum-meetup-june",
        eventName: "Monthly Quantum Meetup",
        eventStartDate: "2025-06-15",
        eventEndDate: "2025-06-15",
        hosting: "in-person",
        eventVenue: "Tech Hub Coworking Space",
        eventCity: "Boston, MA",
        eventType: "meetup",
        eventUrl: "https://quantus-mitblr.org/monthly-meetup-june",
        eventDescription: "Join fellow quantum enthusiasts for casual discussions, project showcases, and collaborative learning in a relaxed environment.",
        expectedParticipants: 60,
        eventSocialMedia: {
            twitter: "https://twitter.com/quantus_mitblr",
            linkedin: "https://linkedin.com/company/quantus-mitblr",
            facebook: "https://facebook.com/quantus.mitblr"
        },
        codeOfConductUrl: "https://quantus-mitblr.org/code-of-conduct",
        communityBenefit: "Creates regular networking opportunities, facilitates knowledge sharing, and builds lasting connections within the quantum computing community."
    },
    {
        id: 5,
        slug: "quantum-research-symposium-2025",
        eventName: "Quantum Research Symposium",
        eventStartDate: "2025-07-20",
        eventEndDate: "2025-07-22",
        hosting: "in-person",
        eventVenue: "University Conference Center",
        eventCity: "Cambridge, MA",
        eventType: "conference",
        eventUrl: "https://quantus-mitblr.org/research-symposium-2025",
        eventDescription: "Academic symposium featuring cutting-edge quantum research presentations by students and faculty from leading institutions.",
        expectedParticipants: 300,
        eventSocialMedia: {
            twitter: "https://twitter.com/quantus_mitblr",
            linkedin: "https://linkedin.com/company/quantus-mitblr",
            instagram: "https://instagram.com/quantus_mitblr"
        },
        codeOfConductUrl: "https://quantus-mitblr.org/code-of-conduct",
        communityBenefit: "Showcases local quantum research excellence, promotes academic collaboration, and inspires the next generation of quantum researchers."
    },
    {
        id: 6,
        slug: "intro-to-qiskit-workshop",
        eventName: "Intro to Qiskit Workshop",
        eventStartDate: "2025-08-12",
        eventEndDate: "2025-08-12",
        hosting: "virtual",
        eventVenue: "Online Platform",
        eventCity: "Virtual Event",
        eventType: "workshop",
        eventUrl: "https://quantus-mitblr.org/qiskit-intro-workshop",
        eventDescription: "Beginner-friendly workshop introducing IBM's Qiskit framework for quantum computing programming and circuit simulation.",
        expectedParticipants: 200,
        eventSocialMedia: {
            twitter: "https://twitter.com/quantus_mitblr",
            discord: "https://discord.gg/qiskit-workshop",
            linkedin: "https://linkedin.com/company/quantus-mitblr"
        },
        codeOfConductUrl: "https://quantus-mitblr.org/code-of-conduct",
        communityBenefit: "Makes quantum computing accessible to beginners, reduces entry barriers, and grows the quantum programming community globally."
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