import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const MotorcycleTowing = () => {
  return (
    <div className="service-detail">
      <img 
        src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
        alt="Motorcycle Towing Service" 
        className="service-main-image"
      />
      
      <h2 className="service-detail-title">
        Two Wheeler Towing Services In Andheri
        <a href="https://wa.me/919820848080" className="whatsapp-icon-link" target="_blank" rel="noreferrer">
          <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </h2>

      <p className="service-description">
        At Modern Towing, we understand how essential your two-wheeler is to your daily routine. Whether you're commuting to work or exploring the city, your bike is an important part of your life. That's why we offer reliable Two Wheeler Towing Services in Andheri, ensuring you never face long delays when unexpected breakdowns happen.
      </p>

      <p className="service-description">
        Our team at Modern Towing is equipped with the latest technology and tools, designed specifically for two-wheeler transport. We handle everything with the utmost care, from the smallest scooters to the largest motorbikes, so you can have peace of mind knowing your vehicle is in safe hands. When it comes to Two Wheeler Towing Services in Andheri, our professional team responds quickly to get your bike to its destination securely and on time.
      </p>

      <div className="service-grid-images">
        <img src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Motorcycle Towing 1" className="service-grid-img" />
        <img src="https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Motorcycle Towing 2" className="service-grid-img" />
      </div>

      <h3 className="service-subtitle">Our Work Process</h3>
      
      <div className="process-list">
        <div className="process-item">
          <Check className="process-icon" size={20} />
          <p className="process-text"><strong>Initial Evaluation:</strong> We assess the motorcycle's condition and determine the best towing method.</p>
        </div>
        <div className="process-item">
          <Check className="process-icon" size={20} />
          <p className="process-text"><strong>Secure Loading:</strong> Using specialized ramps and tie-downs, we carefully load the motorcycle onto the tow vehicle to prevent any damage.</p>
        </div>
        <div className="process-item">
          <Check className="process-icon" size={20} />
          <p className="process-text"><strong>Safe Transport:</strong> Your motorcycle is transported securely, minimizing any risk of shifting or falling during transit.</p>
        </div>
        <div className="process-item">
          <Check className="process-icon" size={20} />
          <p className="process-text"><strong>Unloading and Delivery:</strong> Once at the destination, we ensure the motorcycle is unloaded safely, ready for your next adventure.</p>
        </div>
      </div>

      <h3 className="service-subtitle">Service Features</h3>
      <p className="service-description">
        Our Bike Towing Service offers specialized equipment for safe two-wheeler transport, expert handling to prevent damage, and 24/7 availability for quick assistance. With local expertise, we ensure prompt service, providing peace of mind during unexpected breakdowns.
      </p>
    </div>
  );
};

export default MotorcycleTowing;
