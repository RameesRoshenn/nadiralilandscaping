import React from 'react';
import './footer.css'; 
import logo from '../Assets/logo.png'; 

const Footer = () => {
  return (
    <footer className="footer d-flex justify-content-between align-items-center ">
      <div className='d-flex align-items-center company-name1'>
      <img
          src={logo}
          width="55"
          height="55"
          className="d-inline-block align-top me-2 logo"
          alt="Logo"
        />
        <div className="brand-text ">
          <div className="brand-line1">NADIR ALI</div>
          <div className="brand-line2">LANDSCAPING L.L.C</div>
        </div>
      </div>
      
      <div className='d-flex align-items-center social-media '>
     <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" > <i  class="fa-brands fa-facebook"></i></a>
      <a href="https://wa.me/+971552291310" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a>
      </div>
      <div className='copyright  '>
        <p>copyright 2024 © Nadir Ali LandScaping L.L.C </p>
      </div>
     
  
      
     
    </footer>
  );
};

export default Footer;