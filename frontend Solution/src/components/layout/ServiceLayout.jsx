import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import './ServiceLayout.css';

const ServiceLayout = () => {
  return (
    <div>
      {/* Service Header */}
      <div className="service-page-header">
        <h1 className="service-page-title">SERVICES</h1>
        <div className="service-breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Service</span>
        </div>
      </div>

      <div className="container section-padding">
        <div className="service-content-wrapper">
          {/* Sidebar */}
          <aside className="service-sidebar" data-aos="fade-right">
            <h3 className="sidebar-title">All Services</h3>
            <div className="sidebar-menu">
              <NavLink to="/services/flatbed-towing" className="sidebar-link">
                <span className="sidebar-arrow">&rarr;</span> Flatbed Towing Service
              </NavLink>
              <NavLink to="/services/closed-car-carrier" className="sidebar-link">
                <span className="sidebar-arrow">&rarr;</span> Closed Car Carrier Service For Luxury Car
              </NavLink>
              <NavLink to="/services/motorcycle-towing" className="sidebar-link">
                <span className="sidebar-arrow">&rarr;</span> Motorcycle Towing
              </NavLink>
              <NavLink to="/services/under-lift-hydraulic" className="sidebar-link">
                <span className="sidebar-arrow">&rarr;</span> Under Lift Hydraulic Car Towing Service
              </NavLink>
              <NavLink to="/services/heavy-vehicle-towing" className="sidebar-link">
                <span className="sidebar-arrow">&rarr;</span> Heavy Vehicle Towing
              </NavLink>
            </div>
            
            <div style={{marginTop: '40px'}}>
              <a href="tel:+919820848080" style={{ display: 'inline-block' }}>
                <Phone size={40} color="var(--primary-red)" fill="var(--primary-red)" />
              </a>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="service-main-content" data-aos="fade-up" data-aos-delay="200">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceLayout;
