import React from 'react';
import './Hero.css';

const Hero = () => (
  <section className="hero" id="hero">
    {/* Full-viewport background image */}
    <div className="hero-bg" aria-hidden="true">
      {/* <img
        src="https://images.unsplash.com/photo-1504307651254-35680f356f12?q=80&w=2070&auto=format&fit=crop"
        alt=""
        className="hero-bg-img"
      /> */}
      <div className="hero-bg-dim" />
    </div>

    {/* Content */}
    <div className="hero-body">
      <div className="hero-location">
        <span className="section-label-text">Dallas, Texas</span>
      </div>

      <h1 className="display-xl hero-headline">
        Solutions<br />
        Built to Last
      </h1>

      <div className="hero-bottom">
        <p className="body-lg hero-tagline">
          Delivering dependable construction and restoration services designed for lasting quality, performance, and peace of mind.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-light btn-arrow">
            Start a Project
          </a>
          <a href="#services" className="btn btn-outline-light btn-arrow">
            Our Services
          </a>
        </div>
      </div>
    </div>

    {/* Scroll cue */}
    <div className="hero-scroll" aria-hidden="true">
      <div className="hero-scroll-line" />
    </div>
  </section>
);

export default Hero;
