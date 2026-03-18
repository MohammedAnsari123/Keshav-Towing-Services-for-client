import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
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
          src="https://images.unsplash.com/photo-1557425955-df376b5903c8?auto=format&fit=crop&q=80&w=1600"
          alt="Contact Banner"
          style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.5)' }}
        />
        <h1 style={{ position: 'relative', color: 'white', fontSize: '4rem', zIndex: 1, textTransform: 'uppercase' }}>Contact Us</h1>
      </div>

      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: '800' }}>GET IN TOUCH</h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--primary)', margin: '1rem auto' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(2rem, 5vw, 4rem)' }}>
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '2rem' }}>Send us a query</h3>
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Name *</label>
                  <input type="text" style={{ width: '100%', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px', outline: 'none' }} placeholder="Your Name" required />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Email *</label>
                  <input type="email" style={{ width: '100%', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px', outline: 'none' }} placeholder="Your Email" required />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Phone Number *</label>
                  <input type="tel" style={{ width: '100%', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px', outline: 'none' }} placeholder="Your Phone Number" required />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Message *</label>
                  <textarea style={{ width: '100%', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '8px', outline: 'none', minHeight: '150px' }} placeholder="How can we help you?" required></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', padding: '1rem 3rem' }}>
                  Submit <Send size={18} />
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '2rem' }}>Contact</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <li style={{ display: 'flex', gap: '1rem' }}>
                    <Mail color="var(--primary)" size={24} />
                    <span style={{ fontSize: '1.1rem' }}>keshavtowing@gmail.com</span>
                  </li>
                  <li style={{ display: 'flex', gap: '1rem' }}>
                    <Phone color="var(--primary)" size={24} />
                    <span style={{ fontSize: '1.1rem' }}>+91 9702735918 / 8369608020</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '2rem' }}>Address</h3>
                <div style={{ display: 'flex', gap: '1rem', lineHeight: '1.8' }}>
                  <MapPin color="var(--primary)" size={24} style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '1.1rem' }}>
                    52/323, Siddhivinayak, CHS MHB Colony, <br />
                    Dindoshi Nagar, Malad East, Mumbai, <br />
                    Maharashtra 400097, India.
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{ height: '500px', width: '100%', backgroundColor: '#eee' }}>
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.212044813589!2d72.8647000149028!3d19.186500087023347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b71387d8d21b%3A0x600b3e6e87fbc22d!2sDindoshi%20Nagar%2C%20Malad%20East%2C%20Mumbai%2C%20Maharashtra%20400097!5e0!3m2!1sen!2sin!4v1654321000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
