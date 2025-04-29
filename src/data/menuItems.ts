// src/data/menuItems.ts
export interface MenuItem {
    id: number;
    name: string;
    description: string;
    category: string;
    image: string;
    isSpecial?: boolean;
  }
  
  export const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Traditional Kava",
      description: "Our signature traditionally prepared kava. Earthy, relaxing, and served in a coconut shell.",
      
      category: "kava",
      image: "/images/traditional-kava.jpg",
      isSpecial: true
    },
    {
      id: 2,
      name: "Chocolate Bliss",
      description: "Our premium kava blended with coconut milk and chocolate for a delicious, soothing treat.",
      
      category: "specialty",
      image: "/images/chocolate-kava.jpg"
    },
    {
      id: 3,
      name: "Tropical Kratom Tea",
      description: "A refreshing blend of kratom with pineapple and mango flavors.",
      
      category: "kratom",
      image: "/images/kratom-tea.jpg"
    },
    {
      id: 4,
      name: "Island Breeze Kava",
      description: "Medium grind kava with coconut water and a hint of lime. Refreshing and uplifting.",
      
      category: "kava",
      image: "/images/island-kava.jpg"
    },
    {
      id: 5,
      name: "Sunset Kratom",
      description: "A relaxing red vein kratom tea with hints of orange and cinnamon.",
      
      category: "kratom",
      image: "/images/sunset-kratom.jpg"
    },
    {
      id: 6,
      name: "Berry Bliss",
      description: "A smooth blend of kava with mixed berries and a touch of honey.",
      
      category: "specialty",
      image: "/images/berry-kava.jpg",
      isSpecial: true
    },
    {
      id: 7,
      name: "Kava Flight",
      description: "Sample three different varieties of our premium kava. Perfect for newcomers!",
      
      category: "kava",
      image: "/images/kava-flight.jpg"
    },
    {
      id: 8,
      name: "Energy Boost Kratom",
      description: "White vein kratom with natural citrus flavors for a refreshing energy boost.",
      
      category: "kratom",
      image: "/images/energy-kratom.jpg"
    },
    {
      id: 9,
      name: "Artisan Hummus Plate",
      description: "House-made hummus served with fresh vegetables and pita bread.",
      
      category: "snacks",
      image: "/images/hummus-plate.jpg"
    },
    {
      id: 10,
      name: "Tropical Fruit Plate",
      description: "A selection of fresh seasonal fruits, perfect for sharing.",
      
      category: "snacks",
      image: "/images/fruit-plate.jpg"
    }
  ];