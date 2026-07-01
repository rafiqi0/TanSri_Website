import { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import './Navbar.css';

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const links = [
    { id: 'about', label: t('navAbout') },
    { id: 'projects', label: t('navProjects') },
    { id: 'credentials', label: t('navCredentials') },
    { id: 'contact', label: t('navContact') },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="navbar__inner">
        <div className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="/favicon.svg" alt="KamalBina Logo" className="navbar__logo-img" />
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">KAMALBINA</span>
            <span className="navbar__logo-sub">Sdn. Bhd.</span>
          </div>
        </div>

        <div className="navbar__links">
          {links.map((link) => (
            <a
              key={link.id}
              className="navbar__link"
              href={`#${link.id}`}
              onClick={(e) => { e.preventDefault(); handleNav(link.id); }}
            >
              {link.label}
            </a>
          ))}
          <button className="navbar__lang-btn" onClick={toggleLang}>
            {lang === 'en' ? 'BM' : 'EN'}
          </button>
        </div>

        <button
          className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`navbar__mobile ${mobileOpen ? 'navbar__mobile--open' : ''}`}>
        {links.map((link) => (
          <a
            key={link.id}
            className="navbar__link"
            href={`#${link.id}`}
            onClick={(e) => { e.preventDefault(); handleNav(link.id); }}
          >
            {link.label}
          </a>
        ))}
        <button className="navbar__lang-btn" onClick={toggleLang}>
          {lang === 'en' ? 'BM' : 'EN'}
        </button>
      </div>
    </nav>
  );
}
