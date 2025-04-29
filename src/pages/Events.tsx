// src/pages/Events.tsx
import React, { useState } from 'react';
import EventCard from '../components/EventCard';
import { events } from '../data/events';
import '../styles/Events.css';

const Events: React.FC = () => {
  // Event categories for filtering
  const categories = ["all", "music", "education", "community", "special"];
  
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Filter events based on active category
  const filteredEvents = activeCategory === "all" 
    ? events 
    : events.filter(event => event.category === activeCategory);

  return (
    <div className="events-page">
      <div className="events-hero">
        <div className="events-hero-content">
          <h1>Events & Happenings</h1>
          <p>Join us for special events, live music, workshops, and community gatherings</p>
        </div>
      </div>
      
      <div className="events-container">
        <div className="events-categories">
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
        
        <div className="events-grid">
          {filteredEvents.map(event => (
            <EventCard 
              key={event.id}
              title={event.title}
              date={event.date}
              time={event.time}
              description={event.description}
              image={event.image}
              category={event.category}
            />
          ))}
        </div>
      </div>
      
      <section className="host-event">
        <div className="container">
          <h2>Host Your Event With Us</h2>
          <div className="host-content">
            <div className="host-image">
              {/* Using the provided image instead of placeholder */}
              <img 
                src="https://imagizer.imageshack.com/v2/900x675q70/922/iJuMkW.jpg" 
                alt="Private event space at Beans and Roots" 
                className="private-event-image"
              />
            </div>
            <div className="host-text">
              <p>Looking for a unique venue for your next gathering? Beans and Roots offers private event bookings for groups of all sizes.</p>
              <p>Whether you're planning a birthday celebration, corporate team building, or community meetup, our space provides a relaxing atmosphere with customizable kava and food options.</p>
              <a href="/contact" className="btn btn-primary">Inquire About Private Events</a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="subscribe">
        <div className="container">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter to receive updates on upcoming events and special promotions.</p>
          <form className="subscribe-form" onSubmit={(e) => {
            e.preventDefault();
            alert('Thank you for subscribing to our newsletter!');
            // Reset form
            const form = e.target as HTMLFormElement;
            form.reset();
          }}>
            <input type="email" placeholder="Your email address" required />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Events;