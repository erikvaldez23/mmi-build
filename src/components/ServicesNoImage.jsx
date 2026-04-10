import React from 'react';
import './ServicesNoImage.css';

const services = [
  {
    num: '01',
    tag: 'Claims & Restoration',
    title: 'Insurance',
    desc: 'Expert handling of insurance claims and repairs. We work directly with your provider to ensure a seamless restoration process and fair coverage for all damages.',
    dark: true,
  },
  {
    num: '02',
    tag: 'Residential',
    title: 'Home Services',
    desc: 'Comprehensive residential construction, remodeling, and maintenance to transform your house into the home of your dreams with top-tier craftsmanship.',
    dark: false,
  },
  {
    num: '03',
    tag: 'Trade Services',
    title: 'Subcontracting',
    desc: 'Reliable trade services: drywall, framing, and insulation. We partner with general contractors to deliver precision, speed, and safety on every job site.',
    dark: true,
  },
  {
    num: '04',
    tag: 'Large Scale',
    title: 'Multifamily / Commercial',
    desc: 'Scalable solutions for large-scale property and business developments. From foundational planning to final walkthroughs, we manage complex projects efficiently.',
    dark: false,
  },
];

const ServicesNoImage = () => (
  <section id="services" aria-label="Services" className="services-ni-section">
    {/* Header */}
    <div className="services-ni-hdr section-dark">
      <div className="container">
        <div className="svc-ni-hdr-inner">
          <div className="section-label" style={{ color: 'var(--white)' }}>
            <span className="section-label-text">What We Do</span>
          </div>
          <h2 className="display-lg svc-ni-hdr-title">Our Services</h2>
          <p className="svc-ni-hdr-sub">
            Tailored construction and building solutions to fit every need — residential, commercial, and everything in between.
          </p>
        </div>
      </div>
    </div>

    {/* Vertical Stack List */}
    <div className="svc-ni-list-wrapper">
      <div className="container">
        <div className="svc-ni-list">
          {services.map((s, i) => (
            <div key={i} className="svc-ni-row">
              <div className="svc-ni-row-num">{s.num}</div>
              
              <div className="svc-ni-row-content">
                <div className="svc-ni-row-header">
                  <span className="svc-ni-tag">{s.tag}</span>
                  <h3 className="svc-ni-title">{s.title}</h3>
                </div>
                
                <p className="svc-ni-desc">{s.desc}</p>
                
                <div className="svc-ni-row-action">
                  <a href="#contact" className="svc-ni-cta" aria-label={`Get a quote for ${s.title}`}>
                    <span>Get a Quote</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ServicesNoImage;
