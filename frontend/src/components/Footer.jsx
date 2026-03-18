import React from 'react';
import { Truck, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1f2937', color: 'white', paddingTop: '5rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <Truck size={32} color="var(--secondary)" />
              <div style={{ lineHeight: '1' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--secondary)', display: 'block' }}>KESHAV</span>
                <span style={{ fontSize: '0.875rem', fontWeight: '600', color: 'rgba(255,255,255,0.8)', letterSpacing: '2px' }}>TOWING</span>
              </div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Keshav Towing Service in Malad, Mumbai is a top player in the category 24 Hours Towing Services in Mumbai. We provide safe and reliable vehicle transport services.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem', borderRadius: '8px' }}><Facebook size={20} /></a>
              <a href="#" style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem', borderRadius: '8px' }}><Instagram size={20} /></a>
              <a href="#" style={{ background: 'rgba(255,255,255,0.1)', padding: '0.5rem', borderRadius: '8px' }}><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'white' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Service', path: '/service' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Contact Us', path: '/contact' }
              ].map(item => (
                <li key={item.name}>
                  <Link to={item.path} style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.3s' }} className="footer-link">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'white' }}>Our Services</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['24 Hours Car Towing', 'Accident Vehicle Towing', 'Luxury Car Towing', 'Tempo Towing Services', 'Flatbed Towing'].map(service => (
                <li key={service} style={{ color: 'rgba(255,255,255,0.7)' }}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'white' }}>Contact Info</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <li style={{ display: 'flex', gap: '1rem', color: 'rgba(255,255,255,0.7)' }}>
                <MapPin size={24} color="var(--secondary)" style={{ flexShrink: 0 }} />
                <span>52/323, Siddhivinayak, CHS MHB Colony, Dindoshi Nagar, Malad East, Mumbai - 400097.</span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', color: 'rgba(255,255,255,0.7)' }}>
                <Phone size={20} color="var(--secondary)" />
                <a href="tel:+919702735918">+91 9702735918</a>
              </li>
              <li style={{ display: 'flex', gap: '1rem', color: 'rgba(255,255,255,0.7)' }}>
                <Mail size={20} color="var(--secondary)" />
                <a href="mailto:info@keshavtowingservice.in">info@keshavtowingservice.in</a>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>
          <p>© 2026 Keshav Towing Service. All rights reserved.</p>
        </div>
      </div>
      <style>{`
        .footer-link:hover {
          color: var(--secondary) !important;
          padding-left: 5px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
