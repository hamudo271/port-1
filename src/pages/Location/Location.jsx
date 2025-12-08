import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import './Location.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const Location = () => {
  return (
    <div className="location-page">
      {/* 1. Hero */}
      <section className="location-hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <span className="sub-title">CONTACT US</span>
            <h1 className="main-title">
              Visit<br />
              <span className="text-gradient">Dr. Morimori</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. Map & Info */}
      <section className="section map-section">
        <div className="map-container">
          {/* Placeholder for Map - In real app, use Google Maps or Naver Maps API */}
          <div className="map-placeholder">
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" alt="Map Background" className="map-bg" />
            <div className="map-overlay"></div>
          </div>
          
          <div className="container">
            <motion.div 
              className="info-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="info-title">Dr. Morimori Clinic</h2>
              <div className="info-divider"></div>
              
              <div className="info-item">
                <MapPin className="info-icon" size={24} />
                <div>
                  <h3>Address</h3>
                  <p>서울시 강남구 테헤란로 123, 모리모리 타워 15F</p>
                </div>
              </div>
              
              <div className="info-item">
                <Phone className="info-icon" size={24} />
                <div>
                  <h3>Phone</h3>
                  <p>02-1234-5678</p>
                </div>
              </div>
              
              <div className="info-item">
                <Clock className="info-icon" size={24} />
                <div>
                  <h3>Hours</h3>
                  <p>Mon - Fri: 10:00 - 19:00</p>
                  <p>Sat: 10:00 - 16:00</p>
                  <p>Sun / Holiday: Closed</p>
                </div>
              </div>

              <div className="info-item">
                <Mail className="info-icon" size={24} />
                <div>
                  <h3>Email</h3>
                  <p>contact@drmorimori.com</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;
