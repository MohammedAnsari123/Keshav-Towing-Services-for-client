import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header" data-aos="zoom-in">
        <h1 className="page-title" data-aos="fade-down" data-aos-delay="200">ABOUT US</h1>
        <div className="breadcrumb" data-aos="fade-up" data-aos-delay="400">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>About Us</span>
        </div>
      </div>

      <div className="container section-padding">
        <div className="about-content-wrapper">
          {/* Text Content */}
          <div className="about-text" data-aos="slide-right">
            <h2 className="about-heading" data-aos="fade-right" data-aos-delay="200">CAR TOWING SERVICES IN ANDHERI</h2>
            
            <p className="about-desc" data-aos="fade-right" data-aos-delay="300">
              Welcome to Modern Towing, your trusted partner for all your towing needs since 2004. With nearly two decades of experience in the industry, we take pride in being a leader in providing reliable Car Towing Services in Andheri West and beyond. Our commitment to excellence has allowed us to successfully tow over 400,000 vehicles, making us a preferred choice for drivers in need of assistance.
            </p>

            <h3 className="about-subheading" data-aos="zoom-in" data-aos-delay="400">Why Choose Us</h3>
            <p className="about-desc" data-aos="fade-up" data-aos-delay="500">
              At Modern Towing, we understand that vehicle breakdowns can be stressful and inconvenient. That's why our dedicated team is available around the clock to ensure that help is always just a call away. Our trained professionals are equipped with the latest towing technology and equipment, allowing us to handle all types of vehicles, from cars and motorcycles to trucks and heavy machinery. You may feel secure knowing that your vehicle is in good hands when you choose us.
            </p>

            <a href="#" style={{ color: 'var(--primary-red)', fontWeight: '600' }}>read more...</a>

            <div className="about-callout" data-aos="zoom-in" data-aos-delay="300">
              <PhoneCall size={32} color="#0055ff" fill="#0055ff" />
              <span>Our trained professionals ensure your vehicle is handled with care.</span>
            </div>

            <div className="about-features">
              <div className="about-feature" data-aos="fade-up" data-aos-delay="400">
                <span className="about-feature-icon">✔</span>
                <span>We use the latest technology for efficient towing services.</span>
              </div>
              <div className="about-feature" data-aos="fade-up" data-aos-delay="500">
                <span className="about-feature-icon">✔</span>
                <span>Our team is ready to assist you 24/7, day or night.</span>
              </div>
              <div className="about-feature" data-aos="fade-up" data-aos-delay="600">
                <span className="about-feature-icon">✔</span>
                <span>We strive to exceed your expectations with every service.</span>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="700">
              <Link to="/services" className="btn-primary" style={{ marginTop: '20px' }}>OUR SERVICES</Link>
            </div>
          </div>

          {/* Images Content */}
          <div className="about-images" data-aos="slide-left">
            <img 
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Closed Car Carrier" 
              className="about-img-main"
            />
            <img 
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Flatbed Towing" 
              className="about-img-sub"
            />
            <img 
              src="https://images.unsplash.com/photo-1627483262268-9c2b5b3290e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Hydraulic Towing" 
              className="about-img-sub"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
