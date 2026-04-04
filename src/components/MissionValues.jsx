import React from 'react';
import './MissionValues.css';

const values = [
  {
    num: '01',
    title: 'Integrity',
    desc: 'Do the right thing — always. Honest communication and accountable results at every step.',
  },
  {
    num: '02',
    title: 'Excellence',
    desc: 'Deliver first-class products and services. Quality craftsmanship is never optional.',
  },
  {
    num: '03',
    title: 'Ownership',
    desc: 'Own our process and turn problems into solutions. No excuses — only accountability.',
  },
  {
    num: '04',
    title: 'Service',
    desc: 'Serve our clients and community with purpose. We build relationships, not just structures.',
  },
];

const MissionValues = () => (
  <section className="mv section-dark" id="values">
    <div className="container">

      {/* Mission statement — full-width editorial */}
      <div className="mv-mission">
        <div className="section-label" style={{ color: 'var(--white)' }}>
          <span className="section-label-text">Our Mission</span>
        </div>
        <blockquote className="mv-quote display-lg">
          Delivering solutions-driven construction by connecting first-class service with top-tier trades — for our clients and communities.
        </blockquote>
      </div>

      <div className="mv-rule" />

      {/* Values grid */}
      <div className="mv-values">
        <div className="section-label" style={{ color: 'var(--white)' }}>
          <span className="section-label-text">Core Values</span>
        </div>
        <div className="mv-grid">
          {values.map((v, i) => (
            <div className="mv-card" key={i}>
              <span className="mv-card-num">{v.num}</span>
              <h3 className="mv-card-title">{v.title}</h3>
              <p className="mv-card-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default MissionValues;
