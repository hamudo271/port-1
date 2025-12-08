import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">Dr. Morimori</div>
          <div className="footer-info">
            <p>Dr. Morimori Hair Loss Clinic</p>
            <p>Address: 123 Healing Road, Gangnam-gu, Seoul, Korea</p>
            <p>Tel: 02-9876-5432 | Email: care@drmorimori.com</p>
            <p className="copyright">© 2025 Dr. Morimori Clinic. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
