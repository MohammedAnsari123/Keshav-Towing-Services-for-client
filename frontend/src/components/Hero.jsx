import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Truck, ShieldCheck, Clock } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current.querySelectorAll(':scope > *'), {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });

      gsap.from(imageRef.current, {
        x: 100,
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        ease: "power2.out"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} style={{ position: 'relative', overflow: 'hidden', minHeight: 'calc(100vh - 80px)', display: 'flex', alignItems: 'center', backgroundColor: 'white' }}>
      {/* Background Decorative Element */}
      <div className="hero-decoration" style={{ 
        position: 'absolute', 
        top: '0', 
        right: '0', 
        width: '45%', 
        height: '100%', 
        backgroundColor: 'var(--bg-light)', 
        clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center' }}>
        
        {/* Text Content */}
        <div ref={textRef} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="hero-text-content">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ 
              backgroundColor: 'var(--primary)', 
              color: 'var(--text-dark)', 
              padding: '1.2rem', 
              borderRadius: '50% 50% 50% 0', 
              width: '80px', 
              height: '80px', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              justifyContent: 'center',
              fontWeight: '800',
              lineHeight: '1',
              boxShadow: 'var(--shadow-lg)'
            }}>
              <span style={{ fontSize: '0.75rem' }}>Safe</span>
              <span style={{ fontSize: '1.5rem' }}>100%</span>
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '400', fontStyle: 'italic', fontFamily: 'serif' }}>Fast & Reliable</h2>
          </div>

          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 4.5rem)', color: 'var(--text-dark)', marginBottom: '2rem', textTransform: 'uppercase' }}>
            Keshav <br />
            <span style={{ color: 'var(--primary)' }}>Towing Service</span>
          </h1>

          <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '2.5rem', maxWidth: '500px' }}>
            Locked out? Broken down? We're on the way. Providing 24/7 premium towing and roadside assistance across Mumbai.
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+919702735918" 
              className="btn-primary" 
              style={{ padding: '1.2rem 2.5rem', fontSize: '1.1rem' }}
            >
              TO REACH US
            </motion.a>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
              style={{ padding: '1.2rem 2.5rem', fontSize: '1.1rem' }}
            >
              Learn More
            </motion.button>
          </div>

          <div style={{ display: 'flex', gap: '2rem', marginTop: '3.5rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ backgroundColor: 'var(--primary)', color: 'var(--text-dark)', padding: '0.5rem', borderRadius: '8px' }}>
                <ShieldCheck size={24} />
              </div>
              <span style={{ fontWeight: '700' }}>Safe & Secure</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ backgroundColor: 'var(--primary)', color: 'var(--text-dark)', padding: '0.5rem', borderRadius: '8px' }}>
                <Clock size={24} />
              </div>
              <span style={{ fontWeight: '700' }}>24/7 Service</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div ref={imageRef} style={{ position: 'relative' }} className="hero-image-wrapper">
          <div style={{ 
            borderRadius: '50%', 
            overflow: 'hidden', 
            border: '15px solid white', 
            boxShadow: 'var(--shadow-lg)',
            aspectRatio: '1/1',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=800" 
              alt="Towing Service" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          {/* Accent icon overlay */}
          <div style={{ 
            position: 'absolute', 
            bottom: '10%', 
            left: '0', 
            backgroundColor: 'var(--secondary)', 
            padding: '1.5rem', 
            borderRadius: '20px', 
            boxShadow: 'var(--shadow-md)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            color: 'white'
          }}>
            <Truck color="var(--primary)" size={40} />
            <div>
              <span style={{ display: 'block', fontWeight: '800', fontSize: '1.25rem' }}>10+ Years</span>
              <span style={{ fontSize: '0.8rem', opacity: '0.8' }}>Experience</span>
            </div>
          </div>
        </div>

      </div>
      <style>{`
        .hero-decoration, .hero-image-wrapper { display: none; }
        @media (min-width: 768px) {
          .hero-image-wrapper { display: block; }
        }
        @media (min-width: 1024px) {
          .hero-text-content {
            text-align: left !important;
            align-items: flex-start !important;
          }
          .hero-decoration { display: block; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
