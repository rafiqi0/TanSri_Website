import { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import './Projects.css';

export default function Projects() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('completed');

  const completedProjects = [
    {
      name: t('project1Name'),
      type: t('project1Type'),
      location: 'Manjung, Perak',
      year: '2024',
      value: 'RM 66.277 Million',
      image: '/images/project-hospital-seri-manjung.jpeg',
    },
    {
      name: t('project2Name'),
      type: t('project2Type'),
      location: 'Ipoh, Perak',
      year: '2019',
      value: 'RM 237 Million',
      image: '/images/project-hospital-rpb.jpeg',
    },
    {
      name: t('project3Name'),
      type: t('project3Type'),
      location: 'Lumut, Perak',
      year: '2010',
      value: 'RM 21.717 Million',
      image: '/images/project-bunker-tldm.jpeg',
    },
    {
      name: t('project4Name'),
      type: t('project4Type'),
      location: 'Taiping, Perak',
      year: '2009',
      value: 'RM 160 Million',
      image: '/images/project-adtec.jpeg',
    },
  ];

  const activeProjects = [
    {
      number: '01',
      name: t('activeProject1Name'),
      client: 'Kementerian Kesihatan Malaysia (KKM)',
      location: 'Taiping, Perak',
      value: 'RM 25,977,000',
      period: 'Nov 2022 – Jul 2026 (44 months)',
      scope: t('activeProject1Scope'),
    },
    {
      number: '02',
      name: t('activeProject2Name'),
      client: 'Kementerian Pendidikan Malaysia (KPM)',
      location: 'Daerah Barat Daya, Pulau Pinang',
      value: 'RM 32,477,000',
      period: 'Sep 2025 – Mar 2028 (30 months)',
      scope: t('activeProject2Scope'),
    },
  ];

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t('projectsLabel')}</span>
          <h2 className="section-title">{t('projectsTitle')}</h2>
          <hr className="gold-line gold-line--center" />
          <p className="section-subtitle" style={{ marginTop: 'var(--space-4)' }}>{t('projectsSubtitle')}</p>
        </div>

        <div className="projects__tabs">
          <button
            className={`projects__tab ${activeTab === 'completed' ? 'projects__tab--active' : ''}`}
            onClick={() => setActiveTab('completed')}
          >
            {t('completedLabel')}
          </button>
          <button
            className={`projects__tab ${activeTab === 'active' ? 'projects__tab--active' : ''}`}
            onClick={() => setActiveTab('active')}
          >
            {t('activeLabel')}
          </button>
        </div>

        {activeTab === 'completed' && (
          <div className="projects__grid">
            {completedProjects.map((p, i) => (
              <div className="projects__card fade-in" key={i}>
                <div className="projects__card-image">
                  <img src={p.image} alt={p.name} />
                  <span className="projects__card-badge">{p.type}</span>
                </div>
                <div className="projects__card-body">
                  <h3 className="projects__card-title">{p.name}</h3>
                  <div className="projects__card-meta">
                    <div className="projects__card-meta-row">
                      <span className="projects__card-meta-label">{t('location')}</span>
                      <span className="projects__card-meta-value">{p.location}</span>
                    </div>
                    <div className="projects__card-meta-row">
                      <span className="projects__card-meta-label">{t('yearCompleted')}</span>
                      <span className="projects__card-meta-value">{p.year}</span>
                    </div>
                  </div>
                  <span className="projects__card-value">{p.value}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'active' && (
          <>
            <div className="projects__active-grid">
              {activeProjects.map((p, i) => (
                <div className="projects__active-card fade-in" key={i}>
                  <span className="projects__active-number">{p.number}</span>
                  <div className="projects__active-status">
                    <span className="projects__active-dot" />
                    Active
                  </div>
                  <h3 className="projects__active-title">{p.name}</h3>
                  <div className="projects__active-meta">
                    <div className="projects__active-meta-row">
                      <span className="projects__active-meta-label">{t('client')}</span>
                      <span className="projects__active-meta-value">{p.client}</span>
                    </div>
                    <div className="projects__active-meta-row">
                      <span className="projects__active-meta-label">{t('location')}</span>
                      <span className="projects__active-meta-value">{p.location}</span>
                    </div>
                    <div className="projects__active-meta-row">
                      <span className="projects__active-meta-label">{t('contractPeriod')}</span>
                      <span className="projects__active-meta-value">{p.period}</span>
                    </div>
                    <div className="projects__active-meta-row">
                      <span className="projects__active-meta-label">{t('scopeOfWork')}</span>
                      <span className="projects__active-meta-value">{p.scope}</span>
                    </div>
                    <div className="projects__active-meta-row">
                      <span className="projects__active-meta-label">{t('contractValue')}</span>
                      <span className="projects__active-value">{p.value}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="projects__summary">
              <div className="projects__summary-item">
                <div className="projects__summary-value">2</div>
                <div className="projects__summary-label">{t('activeLabel')}</div>
              </div>
              <div className="projects__summary-item">
                <div className="projects__summary-value">RM 58.45M</div>
                <div className="projects__summary-label">{t('activeProjectsTotal')}</div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
