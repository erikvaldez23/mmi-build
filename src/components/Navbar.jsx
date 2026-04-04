import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
        <div className="nav-inner">
          <a href="#hero" className="nav-logo" onClick={close} aria-label="MMI Building Services">
            <span className="nav-logo-mmi">MMI</span>
            <span className="nav-logo-sep" aria-hidden="true" />
            <span className="nav-logo-sub">Building Services</span>
          </a>

          <div className="nav-right">
            <a href="#contact" className="nav-cta btn btn-light">Contact Us</a>
            <button
              className={`hamburger ${menuOpen ? 'is-active' : ''}`}
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen overlay menu */}
      <div className={`nav-overlay ${menuOpen ? 'overlay-open' : ''}`} aria-hidden={!menuOpen}>
        <div className="overlay-inner">
          <nav className="overlay-nav">
            <a href="#services" onClick={close}>Services</a>
            <a href="#about" onClick={close}>About</a>
            <a href="#values" onClick={close}>Mission</a>
            <a href="#contact" onClick={close}>Contact</a>
          </nav>
          <div className="overlay-footer">
            <span>Dallas, Texas</span>
            <span>info@mmibuildingservices.com</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
