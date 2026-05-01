import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Building, Truck, Users, MapPin, PhoneCall } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section" data-aos="zoom-out" data-duration="1500">
        <div className="hero-content" data-aos="zoom-in-up" data-aos-delay="200">
          <span className="hero-subtitle" data-aos="fade-down" data-aos-delay="400">MUMBAI TOWING</span>
          <h1 className="hero-title" data-aos="fade-up" data-aos-delay="600">WE PROVIDE HIGHEST QUALITY <span>TOWING SERVICES MUMBAI</span></h1>
        </div>
      </section>

      {/* Info Bar */}
      <div className="info-bar" data-aos="flip-up" data-aos-delay="400">
        <div className="info-bar-item" data-aos="fade-right" data-aos-delay="600">
          <div className="info-bar-icon"><MapPin size={20} /></div>
          <span>LESS THAN 30 MIN ARRIVAL</span>
        </div>
        <div className="info-bar-item dark" data-aos="zoom-in" data-aos-delay="700">
          <span>+91 9820849090</span>
        </div>
        <div className="info-bar-item" data-aos="fade-left" data-aos-delay="800">
          <div className="info-bar-icon"><PhoneCall size={20} /></div>
          <span>LIVE 24/7 TOWING SERVICE</span>
        </div>
      </div>

      <div className="container section-padding">
        {/* What We Offer */}
        <div className="what-we-offer">
          <img 
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Towing Truck" 
            className="what-we-offer-img"
            data-aos="slide-right"
          />
          <div className="what-we-offer-content" data-aos="slide-left">
            <h2 className="section-title">WHAT WE <span>OFFER</span></h2>
            <p style={{ color: 'var(--text-muted-dark)', marginBottom: '15px', fontWeight: '600' }}>
              Your Trusted Partner for Towing Services in Andheri
            </p>
            <p style={{ color: 'var(--text-muted-dark)', marginBottom: '15px' }}>
              At Modern Towing, we take pride in offering a wide range of reliable and efficient vehicle towing services in Andheri. With 30 years of experience, we have the expertise to handle any situation, whether it's a minor breakdown, an accident, or transporting a luxury vehicle.
            </p>
            <p style={{ color: 'var(--text-muted-dark)', marginBottom: '20px' }}>
              Our dedicated team is available 24/7 to provide prompt assistance and get you back on the road safely and quickly. We ensure that your vehicle is transported securely without any further damage.
            </p>
            <ul className="process-list">
              <li className="process-item" data-aos="fade-up" data-aos-delay="100">
                <span className="process-icon" style={{color: 'var(--primary-red)'}}>✔</span>
                <span className="process-text">24/7 Emergency Towing Services</span>
              </li>
              <li className="process-item" data-aos="fade-up" data-aos-delay="200">
                <span className="process-icon" style={{color: 'var(--primary-red)'}}>✔</span>
                <span className="process-text">Luxury Car & Bike Transportation</span>
              </li>
              <li className="process-item" data-aos="fade-up" data-aos-delay="300">
                <span className="process-icon" style={{color: 'var(--primary-red)'}}>✔</span>
                <span className="process-text">Damage-Free Hydraulic Flatbed Towing</span>
              </li>
              <li className="process-item" data-aos="fade-up" data-aos-delay="400">
                <span className="process-icon" style={{color: 'var(--primary-red)'}}>✔</span>
                <span className="process-text">Heavy Commercial Vehicle Towing</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item" data-aos="flip-left" data-aos-delay="100">
              <Star size={40} className="stat-icon" />
              <div className="stat-number">30</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat-item" data-aos="flip-left" data-aos-delay="200">
              <Building size={40} className="stat-icon" />
              <div className="stat-number">3</div>
              <div className="stat-label">Show Branches</div>
            </div>
            <div className="stat-item" data-aos="flip-left" data-aos-delay="300">
              <Truck size={40} className="stat-icon" />
              <div className="stat-number">450000+</div>
              <div className="stat-label">Vehicles Towed</div>
            </div>
            <div className="stat-item" data-aos="flip-left" data-aos-delay="400">
              <Users size={40} className="stat-icon" />
              <div className="stat-number">50</div>
              <div className="stat-label">Manpower Team</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div className="container section-padding" style={{textAlign: 'center'}} data-aos="fade-up">
        <h2 className="section-title">OUR <span>SERVICES</span></h2>
        <p style={{ color: 'var(--text-muted-dark)', maxWidth: '800px', margin: '0 auto' }}>
          From standard car towing to specialized luxury and heavy vehicle transport, we offer comprehensive solutions tailored to your needs.
        </p>
        
        <div className="services-grid">
          <Link to="/services/flatbed-towing" className="service-card" data-aos="zoom-in-up" data-aos-delay="100">
            <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Flatbed Towing" />
            <div className="service-card-title">Flatbed Towing Service</div>
          </Link>
          <Link to="/services/closed-car-carrier" className="service-card" data-aos="zoom-in-up" data-aos-delay="200">
            <img src="https://images.unsplash.com/photo-1627483262268-9c2b5b3290e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Closed Car Carrier" />
            <div className="service-card-title">Closed Car Carrier Service</div>
          </Link>
          <Link to="/services/motorcycle-towing" className="service-card" data-aos="zoom-in-up" data-aos-delay="300">
            <img src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Motorcycle Towing" />
            <div className="service-card-title">Motorcycle Towing</div>
          </Link>
          <Link to="/services/under-lift-hydraulic" className="service-card" data-aos="zoom-in-up" data-aos-delay="400">
            <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Under Lift Hydraulic" />
            <div className="service-card-title">Under Lift Hydraulic Service</div>
          </Link>
        </div>
      </div>

      {/* Connect & Quote Section */}
      <section className="connect-section">
        <div className="connect-left" data-aos="fade-right">
          <h2 className="connect-title">CONNECT WITH US</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '30px' }}>Fast and Reliable Towing Services in Andheri</p>
          <p style={{ fontWeight: '500', lineHeight: '1.8' }}>
            At Modern Towing, we know how stressful a breakdown or accident can be. That's why our professional team is dedicated to providing prompt, safe, and efficient vehicle transport tailored to your needs. Reach out to us today for a free quote or immediate assistance.
          </p>
          <div style={{ marginTop: '40px' }}>
            <Link to="/contact" className="btn-primary" style={{ backgroundColor: 'black' }}>LEARN MORE</Link>
          </div>
        </div>
        <div className="connect-right" data-aos="fade-left">
          <h2 className="connect-title">GET A <span>QUOTE</span></h2>
          <p>Get a Quick Estimate</p>
          <form className="quote-form">
            <div className="form-group">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Phone Number" />
            </div>
            <div className="form-group full-width">
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-group full-width">
              <input type="text" placeholder="Subject" />
            </div>
            <div className="form-group full-width" style={{ marginTop: '20px' }}>
              <button type="submit" className="btn-primary" style={{ width: '100%' }}>SUBMIT NOW</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
