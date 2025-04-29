// src/pages/About.tsx
import React from 'react';
import { teamMembers } from '../data/teamMembers';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>About Beans and Roots</h1>
          <p>Our journey, our mission, and our commitment to community</p>
        </div>
      </div>
      
      <section className="our-story">
        <div className="container">
          <h2>Our Story</h2>
          <div className="story-content">
            <div className="story-image">
              {/* Real image instead of placeholder */}
              <img 
                src="https://imagizer.imageshack.com/v2/413x517q70/923/FEvRRm.png" 
                alt="Clairia Vaughn - Founder" 
                className="founder-image"
              />
            </div>
            <div className="story-text">
              <p>Beans and Roots was founded in 2025 by Clairia Vaughn in Sanford, Florida.</p>
              <p>What started as a small pop-up kava bar has grown into a beloved community space where people come to relax, socialize, and enjoy botanical beverages in a welcoming, alcohol-free environment.</p>
              <p>Our name "Beans and Roots" pays homage to the roots of the kava plant and the coffee beans that inspire our warm, café-like atmosphere. We've created a space that bridges traditional kava culture with modern comfort.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="our-mission">
        <div className="container">
          <h2>Our Mission</h2>
          <div className="mission-content">
            <p>At Beans and Roots, we're committed to:</p>
            <div className="mission-points">
              <div className="mission-point">
                <i className="fas fa-leaf"></i>
                <h3>Quality & Sustainability</h3>
                <p>We source only the highest quality kava and coffee from farmers who take pride in their products.</p>
              </div>
              <div className="mission-point">
                <i className="fas fa-users"></i>
                <h3>Community Building</h3>
                <p>We create a space where people can connect, relax, and form meaningful relationships in an alcohol-free setting.</p>
              </div>
              <div className="mission-point">
                <i className="fas fa-book"></i>
                <h3>Tradition</h3>
                <p>We're dedicated to educating our customers about kava, coffee, and other botanical beverages, their traditions, and their benefits.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="our-team">
        <div className="container">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            {teamMembers.map(member => (
              <div className="team-member" key={member.id}>
                {/* Using actual images instead of placeholders */}
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="team-member-image"
                />
                <h3>{member.name}</h3>
                <p className="position">{member.position}</p>
                <p>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="values">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-content">
            <p>Beans and Roots is built on these core values that guide everything we do:</p>
            <ul className="values-list">
              <li><strong>Authenticity:</strong> We respect the cultural traditions of kava and strive to share its authentic experience.</li>
              <li><strong>Community:</strong> We foster an inclusive environment where everyone feels welcome and connected.</li>
              <li><strong>Wellness:</strong> We promote the responsible enjoyment of botanical beverages as part of a balanced lifestyle.</li>
              <li><strong>Sustainability:</strong> We make environmentally conscious choices in our sourcing and operations.</li>
              <li><strong>Education:</strong> We empower our customers with knowledge about the products they enjoy.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;