import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Shield, Car, Battery, Fuel, Wrench, Hammer, Award, Construction } from 'lucide-react';

const Services = () => {
  const allServices = [
    { title: '24 Hours Car Towing', icon: Truck, desc: 'Reliable towing for all vehicle types, anytime, anywhere.' },
    { title: 'Accident Vehicle Towing', icon: Shield, desc: 'Safe transport for damaged vehicles after accidents.' },
    { title: 'Accident vehicle Towing Services', icon: Construction, desc: 'Specialized recovery for heavy accident scenes.' },
    { title: 'Car Towing Services', icon: Car, desc: 'Professional local and long-distance car transport.' },
    { title: 'Four Wheeler Towing Services', icon: Car, desc: 'Expert handling for all types of 4-wheel vehicles.' },
    { title: 'Tow Wheeler Towing Services', icon: Truck, desc: 'Specialized equipment for safe bike transport.' },
    { title: 'Tempo Towing Services', icon: Truck, desc: 'Heavy-duty towing for commercial tempos and vans.' },
    { title: 'Flatbed Towing Services', icon: Award, desc: 'Premium flatbed towing for ultimate vehicle safety.' },
    { title: 'Luxury Car Towing Services', icon: Star, desc: 'Expert care for high-end luxury and sports cars.' },
  ];

  // Using a custom Star icon since Star wasn't imported from lucide-react in the list above
  function Star(props) {
    return <Award {...props} />;
  }

  return (
    <div>
      {/* Banner */}
      <div style={{ 
        height: '40vh', 
        width: '100%', 
        position: 'relative', 
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 'var(--nav-height)'
      }}>
        <img 
          src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1600" 
          alt="Services Banner" 
          style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5)' }} 
        />
        <h1 style={{ position: 'relative', color: 'white', fontSize: 'clamp(2.5rem, 10vw, 4rem)', zIndex: 1, textTransform: 'uppercase', textAlign: 'center', padding: '0 1rem' }}>Services</h1>
      </div>

      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Towing Service</h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--primary)', margin: '0 auto' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {allServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -10, boxShadow: 'var(--shadow-lg)' }}
                style={{ 
                  backgroundColor: 'white', 
                  padding: '2.5rem', 
                  borderRadius: '20px', 
                  textAlign: 'center',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid #f1f5f9',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
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
                  marginBottom: '1.5rem',
                  color: 'var(--primary)'
                }}>
                  <service.icon size={35} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: '800' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', flexGrow: 1 }}>{service.desc}</p>
                <button className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem', width: '100%', justifyContent: 'center' }}>Call Now</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
