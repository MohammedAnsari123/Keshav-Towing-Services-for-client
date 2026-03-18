import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Shield, Clock, Award, Hammer, Wrench, Fuel, Battery, Car } from 'lucide-react';
import Hero from '../components/Hero';

const Home = () => {
  const servicesPreview = [
    { title: '24 Hours Car Towing', icon: Truck, desc: 'Reliable towing for all vehicle types, anytime, anywhere.' },
    { title: 'Accident Recovery', icon: Shield, desc: 'Safe transport for damaged vehicles after accidents.' },
    { title: 'Luxury Car Towing', icon: Award, desc: 'Specialized flatbed towing for high-end luxury vehicles.' },
  ];

  return (
    <div>
      <Hero />

      {/* Welcome Section */}
      <section className="section-padding">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <img src="https://images.unsplash.com/photo-1565158414-94e80a56644f?auto=format&fit=crop&q=80&w=800" alt="Towing Truck" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span style={{ color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '1rem' }}>Welcome To</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text-dark)' }}>Keshav Towing Service</h2>
            <p style={{ color: 'var(--text-light)', marginBottom: '2rem', lineHeight: '1.8' }}>
              Keshav Towing Service in Malad, Mumbai is a top player in the category 24 Hours Towing Services in Mumbai. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Mumbai. 
            </p>
            <p style={{ color: 'var(--text-light)', marginBottom: '2.5rem', lineHeight: '1.8' }}>
              Over the course of its journey, this business has established a firm foothold in its industry. The belief that customer satisfaction is as important as their products and services, have helped this establishment garner a vast base of customers.
            </p>
            <button className="btn-primary">For More</button>
          </motion.div>
        </div>
      </section>

      {/* Services Preview Grid */}
      <section className="section-padding" style={{ backgroundColor: '#f9fafb' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Towing Service</h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--primary)', margin: '0 auto' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {servicesPreview.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                style={{ 
                  backgroundColor: 'white', 
                  padding: '2.5rem', 
                  borderRadius: '20px', 
                  textAlign: 'center',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid #f1f5f9'
                }}
              >
                <div style={{ 
                  width: '70px', 
                  height: '70px', 
                  backgroundColor: 'rgba(66, 245, 158, 0.1)', 
                  borderRadius: '15px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  color: 'var(--primary)'
                }}>
                  <service.icon size={35} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>{service.desc}</p>
                <button className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>Call Now</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
