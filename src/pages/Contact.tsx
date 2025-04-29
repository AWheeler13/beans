// src/pages/Contact.tsx
import React, { useState } from 'react';
import '../styles/Contact.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a static site, we could:
    // 1. Show a success message
    // 2. Log to console (for demonstration)
    console.log('Form submitted:', formData);
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you</p>
        </div>
      </div>
      
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Visit Us</h3>
            <p>4046 S Orando Dr</p>
            <p>Sanford, FL 32773</p>
          </div>
          
          <div className="info-card">
            <i className="fas fa-clock"></i>
            <h3>Hours</h3>
            <p>Sunday - Thursday: 2PM - 12AM</p>
            <p>Friday - Saturday: 2pm - 2AM</p>
          </div>
          
          <div className="info-card">
            <i className="fas fa-phone"></i>
            <h3>Call Us</h3>
            <p>Coming Soon</p>
          </div>
          
          <div className="info-card">
            <i className="fas fa-envelope"></i>
            <h3>Email Us</h3>
            <p>Coming Soon</p>
          </div>
          
          <div className="info-card social">
            <i className="fas fa-hashtag"></i>
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com/profile.php?id=61575721732232" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
              <a href="https://www.instagram.com/beansandrootskava/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          
          {isSubmitted && (
            <div className="success-message">
              <p>Thank you for your message! We'll get back to you soon.</p>
            </div>
          )}
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="events">Event Information</option>
                <option value="private">Private Event Booking</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
      
      <div className="map-container">
        <h2>Find Us</h2>
        <div className="map">
          {/* Google Maps Embed */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.2631556429913!2d-81.31073432429766!3d28.77433847583168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e76b5c3a8c9c09%3A0xdb34af0613e6486f!2s4046%20S%20Orlando%20Dr%2C%20Sanford%2C%20FL%2032773!5e0!3m2!1sen!2sus!4v1713825650971!5m2!1sen!2sus" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Beans and Roots location"
            aria-label="Map showing location of Beans and Roots"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;