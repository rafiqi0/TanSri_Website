import { useLanguage } from '../LanguageContext';
import './Services.css';

const BuildingIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" /><path d="M9 9v.01M9 12v.01M9 15v.01M9 18v.01" /></svg>
);

const CivilIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M4 20h16M6 20V10l4-6h4l4 6v10" /><path d="M10 20v-4h4v4" /><path d="M8 14h8" /></svg>
);

const InfraIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M2 20h20" /><path d="M5 20V8l7-5 7 5v12" /><path d="M9 20v-5h6v5" /><path d="M9 10h6" /></svg>
);

const DesignBuildIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
);

export default function Services() {
  const { t } = useLanguage();

  const services = [
    { icon: <BuildingIcon />, title: t('service1Title'), desc: t('service1Desc') },
    { icon: <CivilIcon />, title: t('service2Title'), desc: t('service2Desc') },
    { icon: <InfraIcon />, title: t('service3Title'), desc: t('service3Desc') },
    { icon: <DesignBuildIcon />, title: t('service4Title'), desc: t('service4Desc') },
  ];

  return (
    <section className="section section--dark" id="services">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t('servicesLabel')}</span>
          <h2 className="section-title">{t('servicesTitle')}</h2>
          <hr className="gold-line gold-line--center" />
          <p className="section-subtitle" style={{ marginTop: 'var(--space-4)' }}>{t('servicesSubtitle')}</p>
        </div>

        <div className="services__grid">
          {services.map((s, i) => (
            <div className="services__card fade-in" key={i}>
              <div className="services__icon">{s.icon}</div>
              <h3 className="services__card-title">{s.title}</h3>
              <p className="services__card-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
