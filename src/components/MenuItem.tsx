// src/components/MenuItem.tsx
import React from 'react';
import '../styles/MenuItem.css';

interface MenuItemProps {
  name: string;
  description: string;
  price?: string;
  category: string;
  image?: string;
  isSpecial?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ 
  name, 
  description, 
  price,
  category,
  image,
  isSpecial = false 
}) => {
  return (
    <div className={`menu-item ${isSpecial ? 'special' : ''}`}>
      <div className="menu-item-image">
        {image ? (
          // Actual image when available
          <img src={image} alt={name} />
        ) : (
          // Placeholder when no image
          <div style={{ 
            height: '200px', 
            backgroundColor: category === 'kava' ? '#8c7851' : 
                            category === 'kratom' ? '#5a6268' : 
                            category === 'specialty' ? '#c19a6b' : 
                            category === 'coffee' ? '#4a3c2d' :
                            category === 'shots' ? '#7d6c55' :
                            category === 'cans' ? '#9e8a6c' :
                            category === 'vitali-tea' ? '#b5a283' :
                            '#777777',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold'
          }}>
            {name}
          </div>
        )}
      </div>
      <div className="menu-item-content">
        <div className="menu-item-header">
          <h3>{name}</h3>
          {price && <span className="price">{price}</span>}
        </div>
        <p className="description">{description}</p>
        {isSpecial && <span className="special-badge">Staff Pick</span>}
      </div>
    </div>
  );
};

export default MenuItem;