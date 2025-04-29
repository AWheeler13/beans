// src/pages/Menu.tsx
import React, { useState } from 'react';
import MenuItem from '../components/MenuItem';
import { menuItems, menuCategories } from '../data/menuItems';
import '../styles/Menu.css';

const Menu: React.FC = () => {
  // Use the imported categories array
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Filter menu items based on active category
  const filteredItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  // Format category name for display
  const formatCategoryName = (category: string) => {
    if (category === "all") return "All";
    if (category === "vitali-tea") return "Living Vitali-Tea";
    
    // Capitalize first letter of each word
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="menu-page">
      <div className="menu-hero">
        <div className="menu-hero-content">
          <h1>Our Menu</h1>
          <p>Explore our selection of premium kava, kratom, coffee, and specialty drinks</p>
        </div>
      </div>
      
      <div className="menu-container">
        <div className="menu-categories">
          {menuCategories.map(category => (
            <button 
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {formatCategoryName(category)}
            </button>
          ))}
        </div>
        
        <div className="menu-items-grid">
          {filteredItems.map(item => (
            <MenuItem 
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              category={item.category}
              image={item.image}
              isSpecial={item.isSpecial}
            />
          ))}
        </div>
      </div>
      
      <div className="menu-info">
        <div className="menu-info-content">
          <h2>About Our Products</h2>
          <p>All of our kava and botanical blends are sourced from premium suppliers such as Botanical Bros. We carefully select varieties known for their quality and effects, ensuring you get an authentic and enjoyable experience.</p>
          <p>Please let our knowledgeable staff know if you have any questions about our menu items or if you're new to kava or botanical tea. We're happy to guide you!</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;