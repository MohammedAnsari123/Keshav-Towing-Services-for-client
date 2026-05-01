import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1 */}
          <div>
            <div className="footer-logo">
              <span className="footer-logo-m">M</span>
              <span className="footer-logo-text">MODERN TOWING</span>
            </div>
            <p className="footer-desc">
              Modern Towing has 30 years of experience providing reliable car towing, luxury and all vehicles transport, heavy vehicle towing, and specialized hydraulic towing services, ensuring safe and efficient transport for all vehicles.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon">
                <svg xmlns="http://www.0000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="social-icon">
                <svg xmlns="http://www.0000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="social-icon">
                <svg xmlns="http://www.0000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="footer-col-title">USEFUL <span>LINKS</span></h3>
            <div className="footer-links">
              <Link to="/" className="footer-link">
                <span className="footer-link-arrow">&gt;</span> Home
              </Link>
              <Link to="/about" className="footer-link">
                <span className="footer-link-arrow">&gt;</span> About
              </Link>
              <Link to="/services" className="footer-link">
                <span className="footer-link-arrow">&gt;</span> Services
              </Link>
              <Link to="/gallery" className="footer-link">
                <span className="footer-link-arrow">&gt;</span> Gallery
              </Link>
              <Link to="/contact" className="footer-link">
                <span className="footer-link-arrow">&gt;</span> Contacts
              </Link>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="footer-col-title">GET IN <span>TOUCH</span></h3>
            <div className="contact-info-list">
              <div className="contact-info-item">
                <MapPin size={20} className="contact-icon" />
                <span>Shop no 2 om sai darshan building C D Barfiwala road juhu cross lane andheri west mumbai 400058</span>
              </div>
              <div className="contact-info-item">
                <Mail size={20} className="contact-icon" />
                <span>moderntowing36@gmail.com</span>
              </div>
              <div className="contact-info-item">
                <Phone size={20} className="contact-icon" />
                <span>9820849090 / 9820848080</span>
              </div>
              <div className="contact-info-item">
                <Clock size={20} className="contact-icon" />
                <span>24 hours a day, 7 days a week</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
