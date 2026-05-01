import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// Service Pages
import ServiceLayout from './components/layout/ServiceLayout';
import FlatbedTowing from './pages/services/FlatbedTowing';
import ClosedCarCarrier from './pages/services/ClosedCarCarrier';
import MotorcycleTowing from './pages/services/MotorcycleTowing';
import UnderLiftHydraulic from './pages/services/UnderLiftHydraulic';
import HeavyVehicleTowing from './pages/services/HeavyVehicleTowing';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: 'ease-in-out',
      mirror: true,
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          
          <Route path="services" element={<ServiceLayout />}>
            <Route index element={<Navigate to="/services/flatbed-towing" replace />} />
            <Route path="flatbed-towing" element={<FlatbedTowing />} />
            <Route path="closed-car-carrier" element={<ClosedCarCarrier />} />
            <Route path="motorcycle-towing" element={<MotorcycleTowing />} />
            <Route path="under-lift-hydraulic" element={<UnderLiftHydraulic />} />
            <Route path="heavy-vehicle-towing" element={<HeavyVehicleTowing />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
