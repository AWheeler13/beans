// src/data/menuItems.ts
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price?: string;
  category: string;
  image?: string;
  isSpecial?: boolean;
}

export const menuItems: MenuItem[] = [
  // KAVA section
  {
    id: 1,
    name: "Single Kava (4oz)",
    description: "Traditional kava served in a 4oz shell.",
    price: "$5",
    category: "kava",
    isSpecial: false
  },
  {
    id: 2,
    name: "Double Kava (8oz)",
    description: "A stronger dose of our traditional kava in an 8oz serving.",
    price: "$7",
    category: "kava",
    isSpecial: false
  },
  {
    id: 3,
    name: "Triple Kava (12oz)",
    description: "Our largest traditional kava serving for experienced kava drinkers.",
    price: "$9",
    category: "kava",
    isSpecial: true
  },
  
  // SHOTS section
  {
    id: 4,
    name: "Oasis Kratom Shot",
    description: "A concentrated kratom shot for quick effects.",
    price: "$9",
    category: "shots",
    isSpecial: false
  },
  {
    id: 5,
    name: "Supernova 60mg Kratom",
    description: "High-potency kratom shot with 60mg of alkaloids.",
    price: "$10",
    category: "shots",
    isSpecial: false
  },
  {
    id: 6,
    name: "TNT Milly 40mg Kratom",
    description: "Medium-strength kratom shot with 40mg of alkaloids.",
    price: "$5",
    category: "shots",
    isSpecial: false
  },
  {
    id: 7,
    name: "Rock Jazz 30mg",
    description: "Mild kratom shot with 30mg of alkaloids.",
    price: "$4",
    category: "shots",
    isSpecial: false
  },
  
  // CANS section
  {
    id: 8,
    name: "Mitra Can",
    description: "Ready-to-drink canned kratom beverage.",
    price: "$8",
    category: "cans",
    isSpecial: false
  },
  {
    id: 9,
    name: "White Rabbit Can",
    description: "Uplifting canned kratom drink for energy and focus.",
    price: "$8",
    category: "cans",
    isSpecial: false
  },
  {
    id: 10,
    name: "Leilo Can",
    description: "Relaxing canned kava beverage.",
    price: "$6",
    category: "cans",
    isSpecial: false
  },
  {
    id: 11,
    name: "Odyssey Can",
    description: "Premium canned kava drink for relaxation.",
    price: "$6",
    category: "cans",
    isSpecial: false
  },
  {
    id: 12,
    name: "Living Vital Tea Can",
    description: "Refreshing botanical tea in a convenient can.",
    price: "$6",
    category: "cans",
    isSpecial: false
  },
  
  // KRATOM section
  {
    id: 13,
    name: "Small Kratom (16oz)",
    description: "Our signature kratom tea in a 16oz serving.",
    price: "$7",
    category: "kratom",
    isSpecial: false
  },
  {
    id: 14,
    name: "Large Kratom (24oz)",
    description: "A larger serving of our premium kratom tea.",
    price: "$10",
    category: "kratom",
    isSpecial: false
  },
  
  // LIVING VITALI-TEA section
  {
    id: 15,
    name: "Kava Seltzer",
    description: "Refreshing sparkling kava beverage.",
    price: "$8/$12",
    category: "vitali-tea",
    isSpecial: false
  },
  {
    id: 16,
    name: "Kratom Seltzer",
    description: "Sparkling kratom beverage for a modern botanical experience.",
    price: "$8/$12",
    category: "vitali-tea",
    isSpecial: false
  },
  {
    id: 17,
    name: "Kombucha",
    description: "Fermented probiotic tea for gut health and wellness.",
    price: "$6/$12",
    category: "vitali-tea",
    isSpecial: false
  },
  
  // COFFEE section
  {
    id: 18,
    name: "Single Espresso",
    description: "A shot of our premium espresso.",
    price: "$2",
    category: "coffee",
    isSpecial: false
  },
  {
    id: 19,
    name: "Double Espresso",
    description: "Two shots of our premium espresso.",
    price: "$3",
    category: "coffee",
    isSpecial: false
  },
  {
    id: 20,
    name: "Americano",
    description: "Espresso diluted with hot water for a coffee-like experience.",
    price: "$4",
    category: "coffee",
    isSpecial: false
  },
  {
    id: 21,
    name: "Latte",
    description: "Espresso with steamed milk and a small layer of foam.",
    price: "$6",
    category: "coffee",
    isSpecial: false
  },
  {
    id: 22,
    name: "Matcha",
    description: "Traditional Japanese green tea powder prepared as a frothy drink.",
    price: "$7",
    category: "coffee",
    isSpecial: false
  },
  {
    id: 23,
    name: "Creamer/Flavoring",
    description: "Add dairy or plant-based creamer and your choice of flavor.",
    price: "$0.50",
    category: "coffee",
    isSpecial: false
  },
  
  // SPECIALTY section
  {
    id: 24,
    name: "Espresso Martini w/ Kava or Kratom",
    description: "Our signature non-alcoholic espresso martini with your choice of kava or kratom for relaxation or energy.",
    price: "$10",
    category: "specialty",
    image: "https://imagizer.imageshack.com/v2/451x675q70/923/nxu5KK.jpg",
    isSpecial: true
  }
];

// Update categories to match the menu
export const menuCategories = [
  "all", 
  "kava", 
  "kratom", 
  "shots", 
  "cans", 
  "vitali-tea", 
  "coffee", 
  "specialty"
];