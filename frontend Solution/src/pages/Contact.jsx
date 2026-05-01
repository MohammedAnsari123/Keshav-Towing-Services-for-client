import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Clock, PhoneCall } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="page-header">
        <h1 className="page-title">CONTACT US</h1>
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Contact Us</span>
        </div>
      </div>

      <div className="container section-padding">
        <div className="contact-intro">
          <h2 className="contact-intro-title">Towing Services near Andheri</h2>
          <p className="contact-intro-desc">
            At Modern Towing, we are committed to providing top-notch towing services to ensure you receive the support you need whenever you face vehicle trouble. Located in Andheri, we understand how critical it is to have a reliable towing service available, especially during emergencies. Whether it's a minor breakdown or a more significant towing requirement, our expert team is always ready to assist. If you're searching for Towing Services near Andheri, you've come to the right place. We offer a wide range of towing solutions tailored to your needs, ensuring safe and timely assistance for all types of vehicles. Our services cover everything from flatbed towing and hydraulic towing to luxury car towing and two-wheeler towing. No matter the situation, we have the equipment and expertise to handle it efficiently. Our team operates 24/7, making us your go-to provider for Towing Services near Andheri anytime, day or night.
          </p>
          <p className="contact-intro-desc">
            Please feel free to contact us using the information provided below. Whether you need immediate assistance or have queries about our services, we're always here to help. You can visit our office in Andheri or give us a call for quick service. If you're looking for dependable Towing Services near Andheri, Modern Towing is the name you can trust. We take pride in our customer-focused approach and always strive to ensure your vehicle is handled with care. With years of experience, a professional team, and state-of-the-art equipment, we guarantee prompt and reliable service. Contact Modern Towing today and experience our unparalleled support in towing services.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Form */}
          <div data-aos="fade-right">
            <h3 className="contact-section-title">
              <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <PhoneCall color="var(--primary-red)" /> CONTACT <strong>FORM</strong>
              </span>
            </h3>
            <div style={{ height: '2px', backgroundColor: '#eaeaea', width: '50px', marginBottom: '30px' }}></div>
            
            <form className="contact-form">
              <div className="contact-form-group">
                <input type="text" placeholder="First Name" />
              </div>
              <div className="contact-form-group">
                <input type="text" placeholder="Last Name" />
              </div>
              <div className="contact-form-group">
                <input type="email" placeholder="Your E-Mail" />
              </div>
              <div className="contact-form-group">
                <input type="tel" placeholder="Your Phone" />
              </div>
              <div className="contact-form-group full-width">
                <textarea placeholder="Your Message"></textarea>
              </div>
              <div className="contact-form-group full-width">
                <button type="submit" className="btn-primary" style={{ backgroundColor: '#222' }}>SUBMIT</button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div data-aos="fade-left" data-aos-delay="200">
            <h3 className="contact-section-title">
              <span>CONTACT <strong>INFO</strong></span>
              <a href="https://wa.me/919820848080" className="contact-whatsapp-icon" target="_blank" rel="noreferrer">
                <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </h3>
            <div style={{ height: '2px', backgroundColor: '#eaeaea', width: '50px', marginBottom: '30px' }}></div>
            
            <div className="contact-info-block">
              <div className="info-item">
                <div style={{width: '20px'}}></div>
                <span>Shop no 2 om sai darshan building C D Barfiwala road juhu cross lane andheri west mumbai 400058</span>
              </div>
              <div className="info-item">
                <Mail size={18} className="info-icon" />
                <span>moderntowing36@gmail.com</span>
              </div>
              <div className="info-item">
                <Phone size={18} className="info-icon" />
                <span>9820849090 / 9820848080</span>
              </div>
              <div className="info-item">
                <Clock size={18} className="info-icon" />
                <span>24 hours a day, 7 days a week</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
