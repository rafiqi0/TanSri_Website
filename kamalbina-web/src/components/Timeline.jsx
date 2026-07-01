import { useLanguage } from '../LanguageContext';
import './Timeline.css';

export default function Timeline() {
  const { t } = useLanguage();

  const milestones = [
    { year: '1984', title: t('year1984'), desc: t('year1984Desc') },
    { year: '1991', title: t('year1991'), desc: t('year1991Desc') },
    { year: '1998', title: t('year1998'), desc: t('year1998Desc') },
    { year: '2003', title: t('year2003'), desc: t('year2003Desc') },
    { year: '2012', title: t('year2012'), desc: t('year2012Desc') },
    { year: 'Now', title: t('yearToday'), desc: t('yearTodayDesc') },
  ];

  const values = [
    { icon: '🤝', name: t('integrity'), desc: t('integrityDesc') },
    { icon: '⭐', name: t('quality'), desc: t('qualityDesc') },
    { icon: '🛡️', name: t('safety'), desc: t('safetyDesc') },
    { icon: '🏗️', name: t('reliability'), desc: t('reliabilityDesc') },
  ];

  return (
    <section className="section section--alt" id="timeline">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t('timelineLabel')}</span>
          <h2 className="section-title">{t('timelineTitle')}</h2>
          <hr className="gold-line gold-line--center" />
          <p className="section-subtitle" style={{ marginTop: 'var(--space-4)' }}>{t('timelineSubtitle')}</p>
        </div>

        <div className="timeline__track">
          {milestones.map((m, i) => (
            <div className="timeline__item fade-in" key={i}>
              <div className="timeline__dot-col">
                <div className="timeline__dot" />
                <span className="timeline__year">{m.year}</span>
              </div>
              <div className="timeline__content">
                <h3 className="timeline__title">{m.title}</h3>
                <p className="timeline__desc">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="timeline__values">
          {values.map((v, i) => (
            <div className="timeline__value-card fade-in" key={i}>
              <div className="timeline__value-icon">{v.icon}</div>
              <h4 className="timeline__value-name">{v.name}</h4>
              <p className="timeline__value-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
