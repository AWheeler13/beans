// src/pages/Home.tsx
import React from 'react';
import Hero from '../components/Hero';
import Testimonial from '../components/Testimonial';
import MenuItem from '../components/MenuItem';
import { testimonials } from '../data/testimonials';
import '../styles/Home.css';

const Home: React.FC = () => {
  // Custom featured items with the provided images
  const featuredItems = [
    {
      name: "Botanical Tea",
      description: "A refreshing blend of organic herbs and botanicals, crafted to provide a soothing and relaxing experience.",
      category: "specialty",
      image: "https://imagizer.imageshack.com/v2/450x675q70/922/M63JpP.jpg",
      isSpecial: true
    },
    {
      name: "Espresso Martini (Alcohol Free)",
      description: "Our signature non-alcoholic espresso martini combines premium coffee and botanical tea for an uplifting experience.",
      category: "specialty",
      image: "https://imagizer.imageshack.com/v2/451x675q70/923/nxu5KK.jpg",
      isSpecial: true
    }
  ];

  return (
    <div className="home-page">
      <Hero />
      
      <section className="intro-section">
        <div className="container">
          <h2>Your Oasis of Calm</h2>
          <div className="intro-content">
            <div className="intro-image">
              {/* Using the provided image URL instead of placeholder */}
              <img src="https://imagizer.imageshack.com/v2/619x675q70/924/z7GRAF.png" alt="Beans and Roots Interior" />
            </div>
            <div className="intro-text">
              <p>Nestled in between Sanford and Winter Springs, Beans and Roots offers a unique alternative to the conventional bar scene. Our kava bar provides a relaxing environment where you can unwind, socialize, and enjoy the calming effects of kava and other botanical beverages.</p>
              <p>We pride ourselves on sourcing the highest quality kava roots and botanial tea to create beverages that promote relaxation and well-being. Whether you're a kava connoisseur or curious newcomer, our knowledgeable staff will guide you through our menu to find your perfect match.</p>
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
          <p>Visit us today to experience the relaxing benefits of kava in a welcoming environment. Check out our events calendar for special gatherings, promotions and everything special happening at Beans and Roots.</p>
          <a href="/events" className="btn btn-primary">Upcoming Events</a>
        </div>
      </section>
    </div>
  );
};

export default Home;