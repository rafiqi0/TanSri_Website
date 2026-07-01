import { useLanguage } from '../LanguageContext';
import './Contact.css';

const MapIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" /></svg>
);

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className="section section--alt" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t('contactLabel')}</span>
          <h2 className="section-title">{t('contactTitle')}</h2>
          <hr className="gold-line gold-line--center" />
          <p className="section-subtitle" style={{ marginTop: 'var(--space-4)' }}>{t('contactSubtitle')}</p>
        </div>

        <div className="contact__grid">
          <div className="contact__info fade-in">
            <div className="contact__info-block">
              <div className="contact__info-icon"><MapIcon /></div>
              <div>
                <div className="contact__info-label">{t('contactAddress')}</div>
                <div className="contact__info-value">{t('contactAddressValue')}</div>
              </div>
            </div>

            <div className="contact__info-block">
              <div className="contact__info-icon"><PhoneIcon /></div>
              <div>
                <div className="contact__info-label">{t('contactPhone')}</div>
                <div className="contact__info-value">05-806 6789 / 05-807 6789</div>
              </div>
            </div>

            <div className="contact__info-block">
              <div className="contact__info-icon"><EmailIcon /></div>
              <div>
                <div className="contact__info-label">{t('contactEmail')}</div>
                <div className="contact__info-value">kamalbinasb@yahoo.com</div>
              </div>
            </div>

            <div className="contact__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4!2d100.7355!3d4.8534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31caef!2sTaiping%20Perak!5e0!3m2!1sen!2smy!4v1"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kamalbina Office Location"
              />
            </div>
          </div>

          <form className="contact__form fade-in" onSubmit={(e) => e.preventDefault()}>
            <div className="contact__form-group">
              <label className="contact__form-label" htmlFor="contact-name">{t('formName')}</label>
              <input className="contact__form-input" id="contact-name" type="text" placeholder="" />
            </div>
            <div className="contact__form-group">
              <label className="contact__form-label" htmlFor="contact-email">{t('formEmail')}</label>
              <input className="contact__form-input" id="contact-email" type="email" placeholder="" />
            </div>
            <div className="contact__form-group">
              <label className="contact__form-label" htmlFor="contact-subject">{t('formSubject')}</label>
              <input className="contact__form-input" id="contact-subject" type="text" placeholder="" />
            </div>
            <div className="contact__form-group">
              <label className="contact__form-label" htmlFor="contact-message">{t('formMessage')}</label>
              <textarea className="contact__form-textarea" id="contact-message" />
            </div>
            <button className="btn btn--primary contact__form-submit" type="submit">
              {t('formSubmit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
