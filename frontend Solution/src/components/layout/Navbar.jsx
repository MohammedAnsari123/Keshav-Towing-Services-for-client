import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  return (
    <header className="navbar-container">
      <div className="container navbar">
        <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
          <div className="nav-logo-inner">
            <span className="logo-m">M</span>
            <span className="logo-text">MODERN TOWING</span>
          </div>
        </Link>

        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="nav-item">
            <NavLink to="/" className="nav-link" onClick={closeMobileMenu}>Home</NavLink>
          </div>
          <div className="nav-item">
            <NavLink to="/about" className="nav-link" onClick={closeMobileMenu}>About</NavLink>
          </div>
          
          <div className={`nav-item ${isMobileServicesOpen ? 'mobile-dropdown-open' : ''}`}>
            <div 
              className="nav-link" 
              style={{cursor: 'pointer'}}
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
            >
              Services <ChevronDown size={16} />
            </div>
            <div className="dropdown-menu">
              <NavLink to="/services/flatbed-towing" className="dropdown-link" onClick={closeMobileMenu}>
                Flatbed Towing Service
              </NavLink>
              <NavLink to="/services/closed-car-carrier" className="dropdown-link" onClick={closeMobileMenu}>
                Closed Car Carrier Service For Luxury Car
              </NavLink>
              <NavLink to="/services/motorcycle-towing" className="dropdown-link" onClick={closeMobileMenu}>
                Motorcycle Towing
              </NavLink>
              <NavLink to="/services/under-lift-hydraulic" className="dropdown-link" onClick={closeMobileMenu}>
                Under Lift Hydraulic Car Towing Service
              </NavLink>
              <NavLink to="/services/heavy-vehicle-towing" className="dropdown-link" onClick={closeMobileMenu}>
                Heavy Vehicle Towing
              </NavLink>
            </div>
          </div>

          <div className="nav-item">
            <NavLink to="/gallery" className="nav-link" onClick={closeMobileMenu}>Gallery</NavLink>
          </div>
          <div className="nav-item">
            <NavLink to="/contact" className="nav-link" onClick={closeMobileMenu}>Contact Us</NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
