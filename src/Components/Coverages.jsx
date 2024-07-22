import React from 'react';
import './coverages.css'; 

function Coverages() {
  const locations = [
    'Mudon', 'Damac Hills', 'Jumerirah', 'Serena', 'Murud', 
    'Al Barsha', 'Motor City', 'Downtown', 'Al Qudra', 'Al Dhaid', 
    'Fujairah', 'Khor Fakkan'
  ];

  const half = Math.ceil(locations.length / 2);
  const firstHalf = locations.slice(0, half);
  const secondHalf = locations.slice(half);

  return (
    <div className="coverage-container">
      <h1 className='mt-4 mb-4 pb-3'>We cover locations including</h1>
      <div className="locations">
        <div className="location-group">
          {firstHalf.map((location, index) => (
            <div key={index} className="location">
              <span role="img" aria-label="location"><i className="fa-solid fa-location-dot"></i></span> {location}
            </div>
          ))}
        </div>
        <div className="location-group">
          {secondHalf.map((location, index) => (
            <div key={index} className="location">
              <span role="img" aria-label="location"><i className="fa-solid fa-location-dot"></i></span> {location}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Coverages;