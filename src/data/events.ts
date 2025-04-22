// src/data/events.ts
export interface Event {
    id: number;
    title: string;
    date: string;
    time: string;
    description: string;
    image: string;
    category: string;
  }
  
  export const events: Event[] = [
    {
      id: 1,
      title: "Live Acoustic Night",
      date: "April 10, 2025",
      time: "7:00 PM - 9:00 PM",
      description: "Join us for a relaxing evening of acoustic music from local artist Sarah James. Enjoy special kava cocktails while listening to soothing melodies.",
      image: "/images/events-acoustic.jpg",
      category: "music"
    },
    {
      id: 2,
      title: "Kava 101 Workshop",
      date: "April 15, 2025",
      time: "6:00 PM - 7:30 PM",
      description: "New to kava? Learn about its history, cultural significance, and how to appreciate different varieties in this educational workshop.",
      image: "/images/events-workshop.jpg",
      category: "education"
    },
    {
      id: 3,
      title: "Community Game Night",
      date: "April 20, 2025",
      time: "7:00 PM - 10:00 PM",
      description: "Bring your favorite board games or join others for a fun night of gaming, kava, and making new friends.",
      image: "/images/events-game-night.jpg",
      category: "community"
    },
    {
      id: 4,
      title: "Plant Medicine Talk",
      date: "April 25, 2025",
      time: "5:30 PM - 7:00 PM",
      description: "Dr. Maria Johnson discusses the historical uses and benefits of various plant medicines around the world.",
      image: "/images/events-talk.jpg",
      category: "education"
    },
    {
      id: 5,
      title: "Tropical Spring Party",
      date: "May 1, 2025",
      time: "8:00 PM - 12:00 AM",
      description: "Celebrate spring with us! Tropical decorations, special menu items, DJ, and good vibes all night long.",
      image: "/images/events-party.jpg",
      category: "special"
    },
    {
      id: 6,
      title: "Open Mic Night",
      date: "May 8, 2025",
      time: "7:00 PM - 9:30 PM",
      description: "Share your talent with our supportive community! Poetry, music, comedy - all welcome at our monthly open mic.",
      image: "/images/events-open-mic.jpg",
      category: "music"
    },
    {
      id: 7,
      title: "Meditation & Kava",
      date: "May 15, 2025",
      time: "6:00 PM - 7:00 PM",
      description: "A guided meditation session followed by a traditional kava ceremony. Find your center and deepen your relaxation.",
      image: "/images/events-meditation.jpg",
      category: "community"
    },
    {
      id: 8,
      title: "Anniversary Celebration",
      date: "May 22, 2025",
      time: "5:00 PM - 11:00 PM",
      description: "Help us celebrate another year of Beans and Roots! Special pricing all day, live music, and surprises throughout the event.",
      image: "/images/events-anniversary.jpg",
      category: "special"
    }
  ];