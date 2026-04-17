import React from 'react';
import './Bio.css';

const Bio = () => (
  <section className="bio section-light" id="about">
    <div className="bio-inner">
      {/* Left: image full-height */}
      <div className="bio-img-col">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1400&auto=format&fit=crop"
          alt="Modern construction building in Dallas"
          className="bio-img"
        />
      </div>

      {/* Right: editorial content */}
      <div className="bio-content-col">
        <div className="section-label" style={{ color: 'var(--black)' }}>
          <span className="section-label-text">Who We Are</span>
        </div>

        <h2 className="display-lg bio-heading">
          Built on<br />Trust
        </h2>

        <div className="bio-rule" />

        <div className="bio-text">
          <p>
            MMI Building Services, based in Dallas, Texas, was founded in 2026 with a passion for construction, design, and the process of building solutions that last. Our focus: approach every project with a problem-solving mindset and deliver dependable results throughout Dallas and the North Texas region.
          </p>
          <p>
            At MMI, we believe no two projects are the same. We take a tailored approach to every job — providing customized construction, remodeling, and building service solutions that fit the specific needs of our clients. Whether it's general contracting, drywall, framing, insulation, or project management, our team delivers quality craftsmanship from start to finish.
          </p>
          <p>
            What sets us apart is our commitment to bringing a small-business level of service and accountability to the DFW construction industry. Strong relationships, clear communication, and attention to detail make all the difference.
          </p>
        </div>

        <div className="bio-meta">
          <div className="bio-stat">
            <span className="bio-stat-num">2026</span>
            <span className="bio-stat-label">Founded</span>
          </div>
          <div className="bio-stat-div" />
          <div className="bio-stat">
            <span className="bio-stat-num">DFW</span>
            <span className="bio-stat-label">Coverage Area</span>
          </div>
          <div className="bio-stat-div" />
          <div className="bio-stat">
            <span className="bio-stat-num">4+</span>
            <span className="bio-stat-label">Services</span>
          </div>
        </div>

        <a href="#contact" className="btn btn-dark btn-arrow">Work With Us</a>
      </div>
    </div>
  </section>
);

export default Bio;
