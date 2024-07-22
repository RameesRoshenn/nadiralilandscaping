import React, { useState, useEffect } from 'react';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import './portfolio.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Portfoliodata from '../Data/Portfoliodata/portfolio.json';
import GalleryData from './GalleryData';


function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % Portfoliodata.Portfoliodata.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div>
      <Navigation />
      <div className="portfolio-section">
        <div className="portfolio-content">
          <h1>Our Portfolio</h1>
        </div>
      </div>
      <div className="portfolio-carousel  p-5">
        {Portfoliodata.Portfoliodata.map((item, index) => (
          <div key={index} className="portfolio-item">
            <div className="portfolio-text">
              <h2>{item.title}</h2>
              <h4 style={{ color: 'green' }}>{item.location}</h4>
              <p>{item.description}</p>
            </div>
            <div className="carousel-wrapper">
              <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows selectedItem={currentSlide}>
                {item.images.map((img, idx) => (
                  <div key={idx}>
                    <img src={require(`../Data/Portfoliodata/portfoliopic/${img.slice(img.lastIndexOf('/') + 1)}`)} alt={`${item.title} ${idx + 1}`} />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        ))}
      </div>
      <GalleryData/>
      <Footer />
    </div>
  );
}

export default Portfolio;
