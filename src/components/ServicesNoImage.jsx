import React from 'react';
import './ServicesNoImage.css';

const services = [
  {
    num: '01',
    tag: 'Claims & Restoration',
    title: 'Insurance',
    desc: 'We partner with insurance carriers and property owners to deliver seamless restoration solutions, combining efficient execution with clear, dependable communication.',
    dark: true,
  },
  {
    num: '02',
    tag: 'Residential',
    title: 'Home Services',
    desc: 'We provide elevated home services defined by quality craftsmanship, attention to detail, and a commitment to lasting results.',
    dark: false,
  },
  {
    num: '03',
    tag: 'Large Scale',
    title: 'Multifamily',
    desc: 'We provide flexible, end-to-end solutions for multifamily projects, supporting everything from general contracting to specialized scopes like insulation. Our approach prioritizes efficiency, consistency, and quality—delivering results that meet the needs of both owners and residents.',
    dark: false,
  },
  {
    num: '04',
    tag: 'Trade Services',
    title: 'Commercial Construction',
    desc: 'From ground-up builds to targeted trade services, we offer scalable solutions tailored to commercial projects of all sizes. Whether acting as a general contractor or supporting key scopes, we bring reliability, speed, and quality to every phase.',
    dark: true,
  }
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
            We provide comprehensive construction and restoration services across residential, multifamily, and commercial sectors, delivering quality, efficiency, and reliability at every stage.
            <br /><br />
            Our approach is defined by precision execution, clear communication, and a commitment to lasting results.
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
                  {/* <span className="svc-ni-tag">{s.tag}</span> */}
                  <h3 className="svc-ni-title">{s.title}</h3>
                </div>

                <p className="svc-ni-desc">{s.desc}</p>

                <div className="svc-ni-row-action">
                  <a href="#contact" className="svc-ni-cta" aria-label={`Get a quote for ${s.title}`}>
                    <span>Inquire</span>
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
