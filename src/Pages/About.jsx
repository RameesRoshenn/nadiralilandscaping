import React from 'react';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer'
import './about.css';

import aboutimage from '../Assets/pexels-michaelgaultphotos-6267516.jpg';
import Defines from './Defines';


function About() {
  return (
    <div>
      <Navigation />
      <div className="about-section">
        <div className="about-content">
          <h1>About Us</h1>
        </div>
      </div>
      <div className="row row-1" >
        <div className="col-xs-12 col-md-6 about-text">
          <h2 className=' fw-semibold'>Expert Landscape Design, Installation & Maintenance</h2>
          <h6 style={{color:'green'}}>FOUNDED IN 2010 </h6>
          <p>
          In February 2010, the journey in the landscaping industry began with a modest set of tools and an unwavering passion for transforming spaces. With 15 years of experience in landscaping works, the mastery of indoor, outdoor, and garden landscaping was achieved. The goal was simple yet ambitious: to deliver top-notch landscaping services that would stand out in the community. As the business grew, so did the expertise and the team. From crafting intricate garden designs to enhancing expansive outdoor areas, the dedication to quality and customer satisfaction has been unwavering. Over the years, countless local customers have witnessed the transformation of their spaces, and the hope is to continue creating stunning landscapes for many more in the future.
          </p>
        </div>
        <div className="col-xs-12 col-md-6 about-images">
          <img src={aboutimage} alt="Lotus" className="image2" />
        </div>
      </div>
      <Defines/>
      <Footer/>
      
    </div>
  );
}

export default About;
