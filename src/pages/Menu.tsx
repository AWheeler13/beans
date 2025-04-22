// src/pages/Menu.tsx
import React, { useState } from 'react';
import MenuItem from '../components/MenuItem';
import { menuItems } from '../data/menuItems';
import '../styles/Menu.css';

const Menu: React.FC = () => {
  // Categories for filtering
  const categories = ["all", "kava", "kratom", "specialty", "snacks"];
  
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Filter menu items based on active category
  const filteredItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="menu-page">
      <div className="menu-hero">
        <div className="menu-hero-content">
          <h1>Our Menu</h1>
          <p>Explore our selection of premium kava, kratom, and specialty drinks</p>
        </div>
      </div>
      
      <div className="menu-container">
        <div className="menu-categories">
          {categories.map(category => (
            <button 
              key={category}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
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
          <p>All of our kava is sourced from premium suppliers in the South Pacific. We carefully select varieties known for their quality and effects, ensuring you get an authentic and enjoyable experience.</p>
          <p>Our kratom comes from trusted farmers in Southeast Asia, and we offer a variety of strains to suit your preferences.</p>
          <p>Please let our knowledgeable staff know if you have any questions about our menu items or if you're new to kava or kratom. We're happy to guide you!</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;