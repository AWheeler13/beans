// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="https://imagizer.imageshack.com/img922/1175/WTWxJN.jpg" alt="Beans and Roots Logo" />
        </div>
        
        <div className="footer-info">
          <div className="footer-hours">
            <h4>Hours</h4>
            <p>Sunday - Thursday: 10AM - 12AM</p>
            <p>Friday - Saturday: 10AM - 2AM</p>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>4046 S Orando Dr</p>
            <p>Sanford, FL 32773</p>
          </div>
          
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://www.instagram.com/beansandrootskava/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Beans and Roots Kava Bar. All Rights Reserved.</p>
        <p>
        </p>
      </div>
    </footer>
  );
};

export default Footer;