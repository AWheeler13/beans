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
    name: "Clairia Vaughn",
    position: "Founder & Owner",
    bio: "",
    image: "https://imagizer.imageshack.com/v2/490x477q70/924/ny9l4D.png"
  },
  {
    id: 2,
    name: "Jules",
    position: "Kava Tender",
    bio: "",
    image: "https://imagizer.imageshack.com/v2/269x277q70/922/6baAAr.png"
  },
  {
    id: 3,
    name: "Preston",
    position: "Kava Tender",
    bio: "",
    image: "https://imagizer.imageshack.com/v2/189x199q70/922/kxYNoF.png"
  },
  {
    id: 4,
    name: "Viktor",
    position: "Kava Tender",
    bio: "",
    image: "https://imagizer.imageshack.com/v2/191x166q70/922/YY7CPB.png"
  }
];