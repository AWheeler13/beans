// src/components/Hero.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Beans and Roots</h1>
        <h2>Your Community Kava Bar</h2>
        <p>Experience relaxation and community in a warm, inviting atmosphere.</p>
        <div className="hero-buttons">
          <Link to="/menu" className="btn btn-primary">Explore Our Menu</Link>
          <Link to="/events" className="btn btn-secondary">Upcoming Events</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;