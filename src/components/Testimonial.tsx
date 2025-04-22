// src/components/Testimonial.tsx
import React from 'react';
import '../styles/Testimonial.css';

interface TestimonialProps {
  quote: string;
  author: string;
  image?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ 
  quote, 
  author, 
  image 
}) => {
  return (
    <div className="testimonial">
      <div className="testimonial-content">
        <i className="fas fa-quote-left quote-icon"></i>
        <p className="quote">{quote}</p>
        <div className="testimonial-author">
          {/* Placeholder div instead of image */}
          <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: '#c19a6b',
            marginRight: 'var(--spacing-sm)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '0.8rem'
          }}>
            {author.split(' ').map(name => name[0]).join('')}
          </div>
          <p className="author">{author}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;