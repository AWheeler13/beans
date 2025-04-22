// src/components/EventCard.tsx
import React from 'react';
import '../styles/EventCard.css';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
  category?: string;
}

const EventCard: React.FC<EventCardProps> = ({ 
  title, 
  date, 
  time, 
  description, 
  image,
  category = 'community'
}) => {
  return (
    <div className="event-card">
      <div className="event-image">
        {/* Placeholder div instead of image */}
        <div style={{ 
          height: '200px', 
          backgroundColor: category === 'music' ? '#8c7851' : 
                         category === 'education' ? '#5a6268' : 
                         category === 'special' ? '#c19a6b' : 
                         '#777777',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold'
        }}>
          {title}
        </div>
      </div>
      <div className="event-content">
        <h3>{title}</h3>
        <div className="event-details">
          <p><i className="far fa-calendar"></i> {date}</p>
          <p><i className="far fa-clock"></i> {time}</p>
        </div>
        <p className="event-description">{description}</p>
        <button className="btn btn-primary">Learn More</button>
      </div>
    </div>
  );
};

export default EventCard;