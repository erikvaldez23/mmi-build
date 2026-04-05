import React from 'react';
import './Services.css';

const services = [
  {
    num: '01',
    tag: 'Claims & Restoration',
    title: 'Insurance',
    desc: 'Expert handling of insurance claims and repairs. We work directly with your provider to ensure a seamless restoration process and fair coverage for all damages.',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1400',
    dark: true,
  },
  {
    num: '02',
    tag: 'Residential',
    title: 'Home Services',
    desc: 'Comprehensive residential construction, remodeling, and maintenance to transform your house into the home of your dreams with top-tier craftsmanship.',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1400',
    dark: false,
  },
  {
    num: '03',
    tag: 'Trade Services',
    title: 'Subcontracting',
    desc: 'Reliable trade services: drywall, framing, and insulation. We partner with general contractors to deliver precision, speed, and safety on every job site.',
    img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1400',
    dark: true,
  },
  {
    num: '04',
    tag: 'Large Scale',
    title: 'Multifamily / Commercial',
    desc: 'Scalable solutions for large-scale property and business developments. From foundational planning to final walkthroughs, we manage complex projects efficiently.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1400',
    dark: false,
  },
];

const Services = () => (
  <section id="services" aria-label="Services">
    {/* Header */}
    <div className="services-hdr section-dark">
      <div className="container">
        <div className="svc-hdr-inner">
          <div className="section-label" style={{ color: 'var(--white)' }}>
            <span className="section-label-text">What We Do</span>
          </div>
          <h2 className="display-lg svc-hdr-title">Our Services</h2>
          <p className="svc-hdr-sub">
            Tailored construction and building solutions to fit every need — residential, commercial, and everything in between.
          </p>
        </div>
      </div>
    </div>

    {/* Staggered service rows */}
    <div className="svc-list">
      {services.map((s, i) => (
        <div
          key={i}
          className={`svc-row ${s.dark ? 'svc-row--dark' : 'svc-row--light'} ${i % 2 === 1 ? 'svc-row--flip' : ''}`}
        >
          {/* Image column */}
          <div className="svc-img-col">
            <div className="svc-img-wrap">
              <img src={s.img} alt={s.title} className="svc-img" loading="lazy" />
              <div className="svc-img-overlay" aria-hidden="true" />
              {/* Floating number */}
              <div className="svc-num" aria-hidden="true">{s.num}</div>
            </div>
          </div>

          {/* Content column */}
          <div className="svc-body">
            <div className="svc-tag">{s.tag}</div>
            <h3 className="svc-title">{s.title}</h3>
            <div className="svc-divider" aria-hidden="true" />
            <p className="svc-desc">{s.desc}</p>
            <a href="#contact" className="svc-cta">
              <span>Get a Quote</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
