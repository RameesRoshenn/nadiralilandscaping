import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navigation.css';


import logo from '../Assets/logo.png'; 

function Navigation() {
  return (
    <Navbar className='navbar' style={{ backgroundColor: '#3a775e' }} expand="lg" fixed="top">
    <div className="container">
      {/* Logo and Brand text */}
      <Navbar.Brand href="#page-top" className="d-flex align-items-center company-name">
        <img
          src={logo}
          width="55"
          height="55"
          className="d-inline-block align-top me-2"
          alt="Logo"
        />
        <div className="brand-text">
          <div className="brand-line1">NADIR ALI</div>
          <div className="brand-line2">LANDSCAPING L.L.C</div>
        </div>
      </Navbar.Brand>

      {/* Navbar toggle button */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
      {/* Navbar links */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
        <Nav.Link className="nav-link mx-2" href="/">Home</Nav.Link>
          <Nav.Link className="nav-link mx-2" href="/portfolio">Portfolio</Nav.Link>
          <Nav.Link className="nav-link mx-2" href="/about">About</Nav.Link>
          <Nav.Link className="nav-link mx-2" href="/services">Services</Nav.Link>
          <Nav.Link className="nav-link mx-2" href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar>
  );
}

export default Navigation;
