import React from 'react';
import Gallerydata from '../Data/Portfoliodata/portfolio.json';
import {
  MDBContainer,
  MDBRow,
} from 'mdb-react-ui-kit';
import './gallerydata.css'

function GalleryData() {
  // Assuming Gallerydata is an array of objects with image paths
  const images = Gallerydata.Gallerydata[0].image; // Accessing the image array from Gallerydata

  return (
    <MDBContainer>
        <div className="gallery-header">
        <h1>Gallery</h1>
        <p>These are the other works we've done at other sites.</p>
      </div>
      <div className="gallery-grid">
        {images.map((imgPath, index) => (
          <div key={index} className="gallery-item">
            <img
              src={require(`../Data/Portfoliodata/Gallery/${imgPath.slice(imgPath.lastIndexOf('/') + 1)}`)}
              alt={`Image ${index}`}
            />
          </div>
        ))}
      </div>
    </MDBContainer>
  );
}

export default GalleryData;