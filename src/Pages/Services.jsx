import React from 'react';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer'
import './services.css';
import { Button } from 'react-bootstrap';
import Indoordata from '../Data/data.json';
import Outdoordata from '../Data/data.json'


import pergola from '../Data/Assets/pergola.jpg';
import kitchendoor from '../Data/Assets/kitchendoor.jpg';
import architrave from '../Data/Assets/Architrave.jpg';
import stairdoor from '../Data/Assets/stairdoor.jpg';
import cabinetdoor from '../Data/Assets/cabinetdoor.jpg'
import drawer from '../Data/Assets/drawer.jpg'
import ceilingpaint from '../Data/Assets/ceilingpaint.jpg'
import doorframe from '../Data/Assets/doorframe.jpg'
import ceilingtiles from '../Data/Assets/ceilingtiles.jpg'
import glass from '../Data/Assets/glass.jpg'

import irrigation from '../Data/Assets/irrigation.jpg'
import wallpaint from '../Data/Assets/wallpaint.jpg'
import electronic from '../Data/Assets/electronic.jpg'
import topper from '../Data/Assets/topper.jpg'

const IndoorimageMap = {
  1: pergola,
  2: kitchendoor,
  3: architrave,
  4: stairdoor,
  5:cabinetdoor,
  6:drawer,
  7:ceilingpaint,
  8:doorframe,
  9:ceilingtiles,
  10:glass

};

const OutdoorimageMap={
  1:irrigation,
  2:wallpaint,
  3:electronic,
  4:topper
};


function Services() {
  return (
    <div>
      <Navigation />
      <div className="services-section">
        <div className="services-content">
          <h1>Our Services</h1>
          <p>
          From serene indoor retreats to luxurious outdoor living spaces and enchanting garden sanctuaries, our expert landscaping team delivers professional, reliable, and top-notch service, ensuring your landscapes thrive beautifully year-round. </p>
        </div>
      </div>
      <div className="service-card">
        <h1 className="d-flex align-items-center justify-content-center mt-5">Our Indoor Services</h1>
        <div className="services-container">
          {Indoordata.Indoordata.map((service) => (
            <div key={service.id} className="service">
              <img src={IndoorimageMap[service.id]} alt={service.title} />
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="service-card pt-5" style={{ backgroundColor: 'whitesmoke' }}>
        <h1 className="d-flex align-items-center justify-content-center">Our Outdoor Services</h1>
        <div className="services-container">
          {Outdoordata.Outdoordata.map((service) => (
            <div key={service.id} className="service">
              <img src={OutdoorimageMap[service.id]} alt={service.title} />
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="service-last">
        <h3>"Are you looking to landscape your place? Contact us to schedule a consultation."</h3>
        <Button className="custom-button2" href='/contact'>CONTACT US</Button>
      </div>
      <Footer/>
    </div>
  );
}

export default Services;
