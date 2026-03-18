import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Clock, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Shield, title: 'Affordable Services', desc: 'Premium quality at competitive prices.' },
    { icon: Clock, title: 'Quick And Fast Delivery', desc: 'Average 30-min response time across Mumbai.' },
    { icon: Award, title: 'Award Winning', desc: 'Recognized for excellence in roadside assistance.' },
  ];

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
          src="https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=1600" 
          alt="About Banner" 
          style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5)' }} 
        />
        <h1 style={{ position: 'relative', color: 'white', fontSize: 'clamp(2.5rem, 10vw, 4rem)', zIndex: 1, textTransform: 'uppercase', textAlign: 'center', padding: '0 1rem' }}>About</h1>
      </div>

      {/* About Content */}
      <section className="section-padding">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center' }}>
          <div>
            <span style={{ color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: '1rem' }}>ABOUT US</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Keshav Towing Service</h2>
            <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              Keshav Towing Service in Malad, Mumbai is a top player in the category 24 Hours Towing Services in Mumbai. This well-known establishment acts as a one-stop destination servicing customers both local and from other parts of Mumbai. 
            </p>
            <p style={{ color: 'var(--text-light)', marginBottom: '2.5rem', lineHeight: '1.8' }}>
              We pride ourselves on our rapid response time and the high quality of our equipment. Whether you have a luxury car that needs a flatbed or a bike that needs a quick jumpstart, our team of professionals is equipped with the latest technology to ensure your vehicle is handled with the utmost care.
            </p>
          </div>
          <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
            <img src="https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&q=80&w=800" alt="Work Process" style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding" style={{ backgroundColor: '#f9fafb' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Why choose us</h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--primary)', margin: '0 auto' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                style={{ textAlign: 'center' }}
              >
                <div style={{ color: 'var(--primary)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                  <stat.icon size={50} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{stat.title}</h3>
                <p style={{ color: 'var(--text-light)' }}>{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
