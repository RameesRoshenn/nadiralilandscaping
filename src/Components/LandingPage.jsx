import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './landingpage.css';

import image1 from '../Assets/devon-mackay-soycsxAAwv8-unsplash.jpg';
import image2 from '../Assets/vj-von-art-BP1Ze0qcp-c-unsplash.jpg';
import image3 from '../Assets/pexels-sevenstormphotography-411454.jpg'
import image4 from '../Assets/cameron-smith-28c3pajQlyI-unsplash.jpg'

import image5 from '../Assets/img5.jpg'
import image6 from '../Assets/img6.jpg'
import image7 from '../Assets/img7.jpg'
import image8 from '../Assets/img8.jpg'

function LandingPage() {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentSecondaryImageIndex, setCurrentSecondaryImageIndex] = useState(0);
    
    const images = [image1, image2 ,image3,image4];
    const secondaryImages = [image5, image6, image7, image8];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  useEffect(() => {
  const updateSecondaryImages = () => {
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
    if (isSmallScreen) {
      const intervalId = setInterval(() => {
        setCurrentSecondaryImageIndex((prevIndex) => (prevIndex + 1) % secondaryImages.length);
      }, 7000); 

      return () => clearInterval(intervalId);
    }
  };

  updateSecondaryImages();

  window.addEventListener('resize', updateSecondaryImages);

  return () => {
    window.removeEventListener('resize', updateSecondaryImages);
  };
}, [secondaryImages.length]);


  const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;


  
   

  return (
    <div className="intro" style={{ backgroundImage: `url(${isSmallScreen ? secondaryImages[currentSecondaryImageIndex] : images[currentImageIndex]})` }}>
    
      <div className="overlay">
        <Container>
          <Row>
            <Col  className="intro-text">
            <h1>You Deserve Luxury Indoor and Outdoor Living at its Best</h1>
            <h4>Build the Backyard of Your Dreams with Our Indoor and Outdoor Landscaping Services</h4>
             <Button className="custom-button" href='/services'>Our Services</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default LandingPage;
