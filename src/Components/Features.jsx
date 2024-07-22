import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { GiWateringCan } from "react-icons/gi";
import { GiTreeSwing } from "react-icons/gi";
import { PiShovelDuotone } from "react-icons/pi";
import { ImScissors } from "react-icons/im";
import { FaWater } from "react-icons/fa";

import 'bootstrap/dist/css/bootstrap.min.css';
import './features.css';

const features = [
  {
    icon: <GiWateringCan size={48} />, 
    title: 'Landscape Consultations',
    description: "Plan with the island's top landscaping professionals"
  },
  {
    icon: <GiTreeSwing size={48} />,
    title: 'New Landscape Installations',
    description: 'Professional installations for your dream landscape'
  },
  {
    icon: <PiShovelDuotone size={48} />,
    title: 'Landscape Renovations',
    description: 'Reimagine your existing outdoor living spaces'
  },
  {
    icon: <ImScissors size={48} />,
    title: 'Custom Landscape Maintenance',
    description: 'Keep your yard tidy with regular visits by professional crews'
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48px"
        viewBox="0 -960 960 960"
        width="48px"
        fill="black"
      >
        <path d="M480-480q-17 0-28.5-11.5T440-520q0-17 11.5-28.5T480-560q17 0 28.5 11.5T520-520q0 17-11.5 28.5T480-480Zm0-160q-17 0-28.5-11.5T440-680q0-17 11.5-28.5T480-720q17 0 28.5 11.5T520-680q0 17-11.5 28.5T480-640Zm0-160q-17 0-28.5-11.5T440-840q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800Zm120 400q-17 0-28.5-11.5T560-440q0-17 11.5-28.5T600-480q17 0 28.5 11.5T640-440q0 17-11.5 28.5T600-400Zm113-114q-17 0-28.5-11.5T673-554q0-17 11.5-28.5T713-594q17 0 28.5 11.5T753-554q0 17-11.5 28.5T713-514Zm113-112q-17 0-28.5-11.5T786-666q0-17 11.5-28.5T826-706q17 0 28.5 11.5T866-666q0 17-11.5 28.5T826-626ZM360-400q-17 0-28.5-11.5T320-440q0-17 11.5-28.5T360-480q17 0 28.5 11.5T400-440q0 17-11.5 28.5T360-400ZM247-514q-17 0-28.5-11.5T207-554q0-17 11.5-28.5T247-594q17 0 28.5 11.5T287-554q0 17-11.5 28.5T247-514ZM134-626q-17 0-28.5-11.5T94-666q0-17 11.5-28.5T134-706q17 0 28.5 11.5T174-666q0 17-11.5 28.5T134-626ZM440-80v-160H280v-80h400v80H520v160h-80Z"/>
      </svg>
    ),
    title: 'Sprinkler Installation & Repair',
    description: 'Keep your lawn and garden green and hydrated'
  },
  {
    icon: <FaWater size={48} />,
    title: 'Natural Water Features',
    description: 'Add ponds, fountains and water features to your outdoor space'
  }
];

function Features() {
  return (
    <div className="features-section">
      <Container fluid>
        <Row>
          {features.map((feature, index) => (
            <Col key={index} md={4} className={`features-item ${index < 3 ? 'border-bottom' : ''}`}>
              <div className="features-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Features;
