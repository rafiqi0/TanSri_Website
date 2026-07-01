import { useLanguage } from '../LanguageContext';
import './About.css';

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { value: t('stat1Value'), label: t('stat1Label') },
    { value: t('stat2Value'), label: t('stat2Label') },
    { value: t('stat3Value'), label: t('stat3Label') },
    { value: t('stat4Value'), label: t('stat4Label') },
  ];

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about__grid">
          <div className="about__content fade-in">
            <span className="section-label">{t('aboutLabel')}</span>
            <h2 className="section-title">{t('aboutTitle')}</h2>
            <hr className="gold-line" style={{ marginBottom: 'var(--space-6)' }} />
            <p className="about__text">{t('aboutDescription')}</p>

            <div className="about__stats">
              {stats.map((stat, i) => (
                <div className="about__stat" key={i}>
                  <div className="about__stat-value">{stat.value}</div>
                  <div className="about__stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="about__image-side fade-in">
            <img src="/images/about-bg.jpeg" alt="Kamalbina construction site" />
            <div className="about__image-overlay">
              <div className="about__image-overlay-text">Kamalbina Sdn. Bhd.</div>
              <div className="about__image-overlay-sub">Est. 1984 &middot; Taiping, Perak</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
