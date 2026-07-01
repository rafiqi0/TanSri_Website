import { useLanguage } from '../LanguageContext';
import './Credentials.css';

export default function Credentials() {
  const { t } = useLanguage();

  const creds = [
    { icon: 'G7', title: t('cidbTitle'), desc: t('cidbDesc') },
    { icon: 'ISO', title: t('isoTitle'), desc: t('isoDesc') },
    { icon: '3★', title: t('scoreTitle'), desc: t('scoreDesc') },
  ];

  return (
    <section className="section section--dark" id="credentials">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t('credentialsLabel')}</span>
          <h2 className="section-title">{t('credentialsTitle')}</h2>
          <hr className="gold-line gold-line--center" />
          <p className="section-subtitle" style={{ marginTop: 'var(--space-4)' }}>{t('credentialsSubtitle')}</p>
        </div>

        <div className="credentials__grid">
          {creds.map((c, i) => (
            <div className="credentials__card fade-in" key={i}>
              <div className="credentials__icon">
                <span className="credentials__icon-text">{c.icon}</span>
              </div>
              <h3 className="credentials__card-title">{c.title}</h3>
              <p className="credentials__card-desc">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="credentials__quote">
          <p className="credentials__quote-text">
            &ldquo;We continuously uphold the highest standards of quality, safety and professionalism to deliver projects that create lasting value for our clients and the nation.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
