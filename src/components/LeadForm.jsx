import React, { useState } from 'react';
import './LeadForm.css';

const LeadForm = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    }, 5000);
  };

  return (
    <section className="lf section-light" id="contact">
      <div className="lf-inner">

        {/* Left editorial panel */}
        <div className="lf-panel">
          <div className="section-label" style={{ color: 'var(--black)' }}>
            <span className="section-label-text">Get In Touch</span>
          </div>
          <h2 className="display-lg lf-heading">
            Let's Build<br />Together
          </h2>
          <div className="lf-contact-list">
            <div className="lf-contact-row">
              <span className="lf-contact-label">Location</span>
              <span>Dallas, Texas</span>
            </div>
            <div className="lf-rule" />
            <div className="lf-contact-row">
              <span className="lf-contact-label">Email</span>
              <a href="mailto:infommi-build.com">info@mmi-build.com</a>
            </div>
            <div className="lf-rule" />
            <div className="lf-contact-row">
              <span className="lf-contact-label">Response</span>
              <span>24 - 48 hours</span>
            </div>
          </div>
        </div>

        {/* Right form panel */}
        <div className="lf-form-panel">
          {sent ? (
            <div className="lf-success">
              <span className="lf-success-mark">✓</span>
              <h3>Message Received</h3>
              <p>Thank you for contacting MMI Building Services. We will be in touch shortly.</p>
            </div>
          ) : (
            <form className="lf-form" onSubmit={handleSubmit}>
              <div className="lf-row">
                <div className="lf-field">
                  <label htmlFor="firstName">First Name</label>
                  <input id="firstName" name="firstName" type="text" required placeholder="John" value={formData.firstName} onChange={handleChange} />
                </div>
                <div className="lf-field">
                  <label htmlFor="lastName">Last Name</label>
                  <input id="lastName" name="lastName" type="text" required placeholder="Smith" value={formData.lastName} onChange={handleChange} />
                </div>
              </div>
              <div className="lf-row">
                <div className="lf-field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required placeholder="john@example.com" value={formData.email} onChange={handleChange} />
                </div>
                <div className="lf-field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" required placeholder="(214) 555-0000" value={formData.phone} onChange={handleChange} />
                </div>
              </div>
              <div className="lf-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required placeholder="Tell us about your project..." value={formData.message} onChange={handleChange} />
              </div>
              <button type="submit" className="btn btn-dark btn-arrow lf-btn">Send Message</button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default LeadForm;
