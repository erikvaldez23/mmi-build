import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer section-dark">
    <div className="container">
      <div className="footer-top">
        <div className="footer-brand">
          <span className="footer-logo">MMI</span>
          <span className="footer-logo-sub">Building Services</span>
        </div>
        <a href="#contact" className="btn btn-outline-light btn-arrow footer-cta">
          Start a Project
        </a>
      </div>

      <div className="footer-rule" />

      <div className="footer-body">
        <p className="footer-tagline body-lg">
          Trusted construction and building services across the DFW Metroplex.
        </p>

        <nav className="footer-nav">
          <a href="#hero">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#values">Mission</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer-contact">
          <span>Dallas/Fort Worth</span>
          <a href="mailto:info@mmi-build.com">info@mmi-build.com</a>
        </div>
      </div>

      <div className="footer-rule" />

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} MMI Building Services. All Rights Reserved.</span>
        <span>Dallas/Fort Worth</span>
      </div>
    </div>
  </footer>
);

export default Footer;
