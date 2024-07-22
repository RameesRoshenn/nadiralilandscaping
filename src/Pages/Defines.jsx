import React from 'react'
import './define.css'
import { Container, Row, Col } from 'react-bootstrap';
import { RiTeamLine } from "react-icons/ri";
import { IoMdClock } from "react-icons/io";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { SlCalender } from "react-icons/sl";
import { GiTreeSwing } from "react-icons/gi";
import { PiPlantFill } from "react-icons/pi";

const defines= [
    {
      icon: <RiTeamLine size={48} />, 
      title: 'The Team of Experts',
      description: "Our team includes certified professionals in the landscape industry."
    },
    {
      icon: <IoMdClock size={48} />,
      title: 'Steadfast Support',
      description: 'Trust us to get the job done'
    },
    {
      icon: <VscWorkspaceTrusted size={48} />,
      title: 'Guaranteed Excellence',
      description: 'We stand behind our services'
    },
    {
      icon: <SlCalender size={48} />,
      title: '15 Years In Business',
      description: 'Our company is committed to long-term excellence'
    },
    {
      icon: <GiTreeSwing/>,
      title: 'Landscaping Experts',
      description: 'Ongoing expertise development is a top priority for our landscaping professionals'
    },
    {
      icon: <PiPlantFill size={48} />,
      title: 'Eco Friendly Co.',
      description: 'Environmentally conscious services are available'
    }
  ];

function Defines() {
  return (
    <div className="defines-section">
         <h1>What Sets Us Apart</h1>
    <Container fluid>
      <Row>
        {defines.map((feature, index) => (
          <Col key={index} md={4} className={`defines-item ${index < 3 ? 'border-bottom' : ''}`}>
            <div className="defines-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </Col>
        ))}
      </Row>
    </Container>
  </div>
  )
}

export default Defines