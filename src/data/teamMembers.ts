// src/data/teamMembers.ts
export interface TeamMember {
    id: number;
    name: string;
    position: string;
    bio: string;
    image: string;
  }
  
  export const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Alex Morgan",
      position: "Founder & Owner",
      bio: "Alex's travels and experiences with traditional kava ceremonies in the South Pacific inspired the creation of Beans and Roots.",
      image: "/images/team-alex.jpg"
    },
    {
      id: 2,
      name: "Jamie Chen",
      position: "Manager",
      bio: "Jamie ensures that every visit to Beans and Roots is welcoming and that our quality standards are maintained.",
      image: "/images/team-jamie.jpg"
    },
    {
      id: 3,
      name: "Taylor Rodriguez",
      position: "Kava Specialist",
      bio: "With years of experience working with kava, Taylor helps create our unique menu offerings and trains our staff.",
      image: "/images/team-taylor.jpg"
    },
    {
      id: 4,
      name: "Jordan Lee",
      position: "Events Coordinator",
      bio: "Jordan brings our community together through thoughtfully planned events, workshops, and gatherings.",
      image: "/images/team-jordan.jpg"
    }
  ];