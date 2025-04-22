// src/data/menuItems.ts
export interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: string;
    category: string;
    image: string;
    isSpecial?: boolean;
  }
  
  export const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Traditional Kava",
      description: "Our signature traditionally prepared kava. Earthy, relaxing, and served in a coconut shell.",
      price: "$8",
      category: "kava",
      image: "/images/traditional-kava.jpg",
      isSpecial: true
    },
    {
      id: 2,
      name: "Chocolate Bliss",
      description: "Our premium kava blended with coconut milk and chocolate for a delicious, soothing treat.",
      price: "$10",
      category: "specialty",
      image: "/images/chocolate-kava.jpg"
    },
    {
      id: 3,
      name: "Tropical Kratom Tea",
      description: "A refreshing blend of kratom with pineapple and mango flavors.",
      price: "$9",
      category: "kratom",
      image: "/images/kratom-tea.jpg"
    },
    {
      id: 4,
      name: "Island Breeze Kava",
      description: "Medium grind kava with coconut water and a hint of lime. Refreshing and uplifting.",
      price: "$9",
      category: "kava",
      image: "/images/island-kava.jpg"
    },
    {
      id: 5,
      name: "Sunset Kratom",
      description: "A relaxing red vein kratom tea with hints of orange and cinnamon.",
      price: "$8",
      category: "kratom",
      image: "/images/sunset-kratom.jpg"
    },
    {
      id: 6,
      name: "Berry Bliss",
      description: "A smooth blend of kava with mixed berries and a touch of honey.",
      price: "$11",
      category: "specialty",
      image: "/images/berry-kava.jpg",
      isSpecial: true
    },
    {
      id: 7,
      name: "Kava Flight",
      description: "Sample three different varieties of our premium kava. Perfect for newcomers!",
      price: "$15",
      category: "kava",
      image: "/images/kava-flight.jpg"
    },
    {
      id: 8,
      name: "Energy Boost Kratom",
      description: "White vein kratom with natural citrus flavors for a refreshing energy boost.",
      price: "$9",
      category: "kratom",
      image: "/images/energy-kratom.jpg"
    },
    {
      id: 9,
      name: "Artisan Hummus Plate",
      description: "House-made hummus served with fresh vegetables and pita bread.",
      price: "$8",
      category: "snacks",
      image: "/images/hummus-plate.jpg"
    },
    {
      id: 10,
      name: "Tropical Fruit Plate",
      description: "A selection of fresh seasonal fruits, perfect for sharing.",
      price: "$10",
      category: "snacks",
      image: "/images/fruit-plate.jpg"
    }
  ];