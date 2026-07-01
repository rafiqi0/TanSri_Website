import { useLanguage } from '../LanguageContext';
import './Foreword.css';

export default function Foreword() {
  const { t } = useLanguage();

  return (
    <section className="section section--alt foreword">
      <div className="container">
        <div className="foreword__grid">
          <div className="foreword__image-col fade-in">
            <div className="foreword__image-wrapper">
              <img src="/images/tansri_portrait.png" alt="Tan Sri Kamarulbahrain bin Zainuddin" />
              <div className="foreword__image-label">
                <div className="foreword__image-name">{t('forewordName')}</div>
                <div className="foreword__image-role">{t('forewordRole')}</div>
              </div>
            </div>
          </div>

          <div className="foreword__content fade-in">
            <span className="section-label">{t('forewordLabel')}</span>
            <h2 className="section-title">{t('forewordTitle')}</h2>
            <hr className="gold-line" style={{ marginBottom: 'var(--space-8)' }} />

            <span className="foreword__quote-mark">&ldquo;</span>
            <blockquote className="foreword__quote">
              {t('forewordTitle')}
            </blockquote>

            <p className="foreword__paragraph">{t('forewordP1')}</p>
            <p className="foreword__paragraph">{t('forewordP2')}</p>
            <p className="foreword__paragraph">{t('forewordP3')}</p>

            <div className="foreword__signature">
              <div className="foreword__sig-name">{t('forewordName')}</div>
              <div className="foreword__sig-role">{t('forewordRole')}, Kamalbina Sdn. Bhd.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
