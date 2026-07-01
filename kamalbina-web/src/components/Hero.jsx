import { useLanguage } from '../LanguageContext';
import './Hero.css';

export default function Hero() {
  const { t } = useLanguage();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero__bg">
        <img src="/images/hero-bg.jpeg" alt="Kamalbina building project" />
      </div>
      <div className="hero__overlay" />

      <div className="container hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          G7 CIDB Contractor &middot; ISO 9001:2015
        </div>

        <h1 className="hero__title">
          KAMALBINA<br />
          <span className="hero__title-accent">{t('heroTagline')}</span>
        </h1>

        <p className="hero__subtitle">{t('heroSubtitle')}</p>

        <div className="hero__cta-group">
          <button className="btn btn--primary" onClick={() => scrollTo('projects')}>
            {t('heroCta1')}
          </button>
          <button className="btn btn--outline" onClick={() => scrollTo('contact')}>
            {t('heroCta2')}
          </button>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
