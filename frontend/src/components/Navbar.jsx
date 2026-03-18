import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Truck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Service', path: '/service' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-white/80 backdrop-blur-md py-6'}`} style={{ borderBottom: isScrolled ? '1px solid #ebebeb' : 'none' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Truck size={32} color="var(--primary)" />
          <div style={{ lineHeight: '1' }}>
            <span style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary)', display: 'block' }}>KESHAV</span>
            <span style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--text-dark)', letterSpacing: '2px' }}>TOWING</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="lg-flex">
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                style={{
                  fontWeight: '600',
                  color: location.pathname === link.path ? 'var(--primary)' : 'var(--text-dark)',
                  fontSize: '0.95rem',
                  position: 'relative'
                }}
                className="nav-link-hover"
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-underline"
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: '0',
                      right: '0',
                      height: '2px',
                      backgroundColor: 'var(--primary)'
                    }}
                  />
                )}
              </Link>
            ))}
            <a href="tel:+919702735918" className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
              <Phone size={16} /> 9702735918
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg-hidden">
          <button onClick={() => setIsOpen(!isOpen)} style={{ color: 'var(--primary)' }}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: '80px',
              left: '0',
              right: '0',
              bottom: '0',
              backgroundColor: 'white',
              zIndex: 100,
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              overflowY: 'auto'
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: location.pathname === link.path ? 'var(--primary)' : 'var(--text-dark)'
                }}
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:+919702735918" className="btn-primary" style={{ justifyContent: 'center' }}>
              <Phone size={20} /> 9702735918
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .lg-flex { display: flex; }
        .lg-hidden { display: none; }
        @media (max-width: 1024px) {
          .lg-flex { display: none; }
          .lg-hidden { display: block; }
        }
        .nav-link-hover:hover {
          color: var(--primary) !important;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
