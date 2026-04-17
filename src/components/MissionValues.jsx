import React from 'react';
import './MissionValues.css';

const values = [
  {
    num: '01',
    title: 'Integrity',
    desc: 'We act with honesty and uphold the highest ethical standards.',
  },
  {
    num: '02',
    title: 'Excellence',
    desc: 'We deliver high-quality products and services with a focus on continuous improvement.',
  },
  {
    num: '03',
    title: 'Ownership',
    desc: 'We take accountability and drive solutions to achieve results.',
  },
  {
    num: '04',
    title: 'Service',
    desc: 'We serve our clients and community with purpose and professionalism.',
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
