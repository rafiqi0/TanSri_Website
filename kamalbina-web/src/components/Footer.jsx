import { useLanguage } from '../LanguageContext';
import './Footer.css';

export default function Footer() {
  const { t } = useLanguage();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__brand-name">KAMALBINA</div>
            <div className="footer__brand-sub">Sdn. Bhd.</div>
            <p className="footer__brand-desc">{t('footerDesc')}</p>
          </div>

          <div>
            <h4 className="footer__heading">{t('footerQuickLinks')}</h4>
            <nav className="footer__links">
              <a className="footer__link" href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>{t('navAbout')}</a>
              <a className="footer__link" href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}>{t('navProjects')}</a>
              <a className="footer__link" href="#credentials" onClick={(e) => { e.preventDefault(); scrollTo('credentials'); }}>{t('navCredentials')}</a>
              <a className="footer__link" href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>{t('navContact')}</a>
            </nav>
          </div>

          <div>
            <h4 className="footer__heading">{t('footerContact')}</h4>
            <div className="footer__contact-item">
              <span className="footer__contact-label">{t('contactAddress')}</span><br />
              Level 5, Menara Kamalbina,<br />
              Jalan Maharajalela,<br />
              34000 Taiping, Perak
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-label">{t('contactPhone')}</span><br />
              05-806 6789 / 05-807 6789
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-label">{t('contactEmail')}</span><br />
              kamalbinasb@yahoo.com
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__copyright">{t('footerCopyright')}</span>
          <div className="footer__badges">
            <span className="footer__badge">CIDB G7</span>
            <span className="footer__badge">ISO 9001:2015</span>
            <span className="footer__badge">SCORE 3★</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
