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
          <h3>Beans and Roots</h3>
        </div>
        
        <div className="footer-info">
          <div className="footer-hours">
            <h4>Hours</h4>
            <p>Monday - Thursday: 2pm - 10pm</p>
            <p>Friday - Saturday: 2pm - 12am</p>
            <p>Sunday: 2pm - 9pm</p>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>123 Kava Lane</p>
            <p>Relaxville, CA 90210</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@beansandroots.com</p>
          </div>
          
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Beans and Roots Kava Bar. All Rights Reserved.</p>
        <p>
          <Link to="/privacy">Privacy Policy</Link> | 
          <Link to="/terms">Terms of Service</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;