import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';

const Gallery = () => {
  const [filter, setFilter] = useState('All');

  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', category: 'Flatbed' },
    { src: 'https://images.unsplash.com/photo-1627483262268-9c2b5b3290e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', category: 'Closed Car' },
    { src: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', category: 'Motorcycle' },
    { src: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', category: 'Hydraulic' },
    { src: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', category: 'Heavy Vehicle' },
    { src: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', category: 'Motorcycle' },
    { src: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', category: 'Flatbed' },
    { src: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', category: 'Closed Car' },
  ];

  const filteredImages = filter === 'All' ? galleryImages : galleryImages.filter(img => img.category === filter);

  return (
    <div className="gallery-page">
      <div className="page-header">
        <h1 className="page-title">GALLERY</h1>
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Gallery</span>
        </div>
      </div>

      <div className="container section-padding">
        <p className="gallery-desc" data-aos="fade-up">
          Browse through our gallery to see Modern Towing in action. From heavy-duty vehicles to luxury cars and motorcycles, we have successfully transported thousands of vehicles across Mumbai and Andheri. Our state-of-the-art equipment and professional team ensure that every vehicle is handled with the utmost care and precision.
        </p>

        <div className="gallery-whatsapp" data-aos="zoom-in" data-aos-delay="200">
          <a href="https://wa.me/919820848080" className="gallery-whatsapp-icon" target="_blank" rel="noreferrer">
            <svg width="45" height="45" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </div>

        <div className="gallery-filters" data-aos="fade-up" data-aos-delay="300">
          <button className={`filter-btn ${filter === 'All' ? 'active' : ''}`} onClick={() => setFilter('All')}>All</button>
          <button className={`filter-btn ${filter === 'Flatbed' ? 'active' : ''}`} onClick={() => setFilter('Flatbed')}>Flatbed</button>
          <button className={`filter-btn ${filter === 'Closed Car' ? 'active' : ''}`} onClick={() => setFilter('Closed Car')}>Closed Car</button>
          <button className={`filter-btn ${filter === 'Motorcycle' ? 'active' : ''}`} onClick={() => setFilter('Motorcycle')}>Motorcycle</button>
          <button className={`filter-btn ${filter === 'Hydraulic' ? 'active' : ''}`} onClick={() => setFilter('Hydraulic')}>Hydraulic</button>
        </div>

        <div className="gallery-grid">
          {filteredImages.map((img, index) => (
            <img key={index} src={img.src} alt={`Gallery ${index}`} className="gallery-item" data-aos="zoom-in" data-aos-delay={(index % 4) * 100} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
