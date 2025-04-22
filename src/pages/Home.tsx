// src/pages/Home.tsx
import React from 'react';
import Hero from '../components/Hero';
import Testimonial from '../components/Testimonial';
import MenuItem from '../components/MenuItem';
import { menuItems } from '../data/menuItems';
import { testimonials } from '../data/testimonials';
import '../styles/Home.css';

const Home: React.FC = () => {
  // Get featured menu items (first 3 items)
  const featuredItems = menuItems.slice(0, 3);

  return (
    <div className="home-page">
      <Hero />
      
      <section className="intro-section">
        <div className="container">
          <h2>Your Oasis of Calm</h2>
          <div className="intro-content">
            <div className="intro-image">
              {/* Placeholder div instead of image */}
              <div style={{
                height: '300px',
                backgroundColor: '#c19a6b',
                borderRadius: 'var(--border-radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold'
              }}>
                Bar Interior
              </div>
            </div>
            <div className="intro-text">
              <p>Nestled in the heart of Relaxville, Beans and Roots offers a unique alternative to the conventional bar scene. Our kava bar provides a relaxing environment where you can unwind, socialize, and enjoy the calming effects of kava and other botanical beverages.</p>
              <p>We pride ourselves on sourcing the highest quality kava roots and herbs to create beverages that promote relaxation and well-being. Whether you're a kava connoisseur or curious newcomer, our knowledgeable staff will guide you through our menu to find your perfect match.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="featured-menu-section">
        <div className="container">
          <h2>Featured Menu Items</h2>
          <div className="featured-menu">
            {featuredItems.map((item, index) => (
              <MenuItem 
                key={index}
                name={item.name}
                description={item.description}
                price={item.price}
                category={item.category}
                image={item.image}
                isSpecial={item.isSpecial}
              />
            ))}
          </div>
          <div className="view-full-menu">
            <a href="/menu" className="btn btn-secondary">View Full Menu</a>
          </div>
        </div>
      </section>
      
      <section className="testimonials-section">
        <div className="container">
          <h2>What Our Customers Say</h2>
          <div className="testimonials-slider">
            {testimonials.map((testimonial, index) => (
              <Testimonial 
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="container">
          <h2>Join Our Community</h2>
          <p>Visit us today to experience the relaxing benefits of kava in a welcoming environment. Check out our events calendar for special gatherings, live music, and workshops.</p>
          <a href="/events" className="btn btn-primary">Upcoming Events</a>
        </div>
      </section>
    </div>
  );
};

export default Home;